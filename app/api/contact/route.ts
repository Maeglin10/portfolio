import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// ─── In-memory rate limit (5 req / IP / 15 min) ──────────────────────────────
// Note: in-memory bucket — single instance only. For multi-instance production,
// migrate to @upstash/ratelimit (not installed in this project as of now).
type Bucket = { count: number; resetAt: number };
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const buckets = new Map<string, Bucket>();

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

function rateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { ok: true };
  }
  if (bucket.count >= RATE_MAX) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true };
}

// Opportunistic GC so the Map doesn't grow unbounded.
function gcBuckets() {
  if (buckets.size < 1000) return;
  const now = Date.now();
  for (const [ip, b] of buckets) if (b.resetAt < now) buckets.delete(ip);
}

// ─── Validation ──────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactInput = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  // honeypot fields — must remain empty
  website?: string;
  phone_alt?: string;
};

function validate(body: unknown): { ok: true; data: ContactInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid body" };
  const b = body as Record<string, unknown>;

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const subject = typeof b.subject === "string" ? b.subject.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  if (name.length < 2 || name.length > 100) return { ok: false, error: "Invalid name (2-100 chars)" };
  if (!EMAIL_RE.test(email) || email.length > 254) return { ok: false, error: "Invalid email" };
  if (subject && (subject.length < 2 || subject.length > 200))
    return { ok: false, error: "Invalid subject (2-200 chars)" };
  if (message.length < 10 || message.length > 5000)
    return { ok: false, error: "Invalid message (10-5000 chars)" };

  return {
    ok: true,
    data: {
      name,
      email,
      subject: subject || undefined,
      message,
      website: typeof b.website === "string" ? b.website : undefined,
      phone_alt: typeof b.phone_alt === "string" ? b.phone_alt : undefined,
    },
  };
}

// ─── HTML escaping ───────────────────────────────────────────────────────────
const safe = (s: string) =>
  s.replace(/[<>&"']/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c]!),
  );

// ─── Handler ─────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    gcBuckets();
    const limit = rateLimit(ip);
    if (!limit.ok) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter ?? 60) } },
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    // Honeypot: silently accept (200) without sending. Bots are happy, we're safe.
    const honey = body as Record<string, unknown> | null;
    if (honey && typeof honey === "object") {
      const hp1 = typeof honey.website === "string" ? honey.website.trim() : "";
      const hp2 = typeof honey.phone_alt === "string" ? honey.phone_alt.trim() : "";
      if (hp1 || hp2) {
        return NextResponse.json({ success: true });
      }
    }

    const v = validate(body);
    if (!v.ok) {
      return NextResponse.json({ error: v.error }, { status: 400 });
    }
    const { name, email, subject, message } = v.data;

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey && !resendKey.includes("REPLACE")) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      // TODO: configure RESEND_FROM_EMAIL with verified domain (production).
      const from =
        process.env.RESEND_FROM_EMAIL || "Aevia Contact <onboarding@resend.dev>";

      const safeName = safe(name);
      const safeEmail = safe(email);
      const safeSubject = safe(subject || "No subject");
      const safeMessage = safe(message).replace(/\n/g, "<br>");

      await resend.emails.send({
        from,
        to: "valentin.milliand@gmail.com",
        replyTo: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        html: `
          <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr />
          <p>${safeMessage}</p>
        `,
      });
    } else {
      // Fallback: log to console (dev mode without Resend key).
      console.log("[Contact Form]", {
        name,
        email,
        subject,
        message,
        ip,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
