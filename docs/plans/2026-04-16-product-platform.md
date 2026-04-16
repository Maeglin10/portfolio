# Avia Product Platform — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformer le portfolio en plateforme produit complète — screenshots réels par projet, carousels animés, merge Launch+Templates, fix Security avec Lighthouse, UX unifiée.

**Architecture:** Tout se passe dans `/Users/milliandvalentin/portfolio/`. Le portfolio devient le hub produit visible. Les autres repos (skylaunch, skysecurity, marketplace, skylive) sont documentés visuellement via screenshots capturés en local avec Chrome DevTools MCP. Aucun nouveau repo. Aucune nouvelle feature inventée.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, Chrome DevTools MCP (screenshots), next-intl (i18n déjà setup)

---

## État actuel (audit)

| Repo | Ports pour dev local | Pages clés | Screenshots existants |
|------|---------------------|------------|----------------------|
| skylaunch | 3099 | `/`, `/themes`, `/themes/[id]`, `/configure` | 3 (homepage, themes, luxury) |
| skysecurity | TBD | `/`, `/audit`, `/pricing` | 0 |
| marketplace | 3098 | `/`, `/services`, `/dashboard` | 2 (homepage, services) |
| skylive | TBD | `/feed`, `/live`, `/creator` | 0 |
| skybot-inbox-ui | TBD | inbox UI | 0 |

---

## Agent 1 — Showcase Agent (screenshots + carousels)

### Task 1.1 : Capturer tous les screenshots manquants

**Outils:** Chrome DevTools MCP (`mcp__chrome-devtools__navigate_page` + `mcp__chrome-devtools__take_screenshot`)

**Démarrer les serveurs dev locaux:**
```bash
# skylaunch déjà running sur 3099 (ou relancer)
cd /Users/milliandvalentin/skylaunch && npm run dev -- --port 3099 &

# skysecurity
cd /Users/milliandvalentin/skysecurity/apps/web && npm run dev -- --port 3097 &

# skylive
cd /Users/milliandvalentin/skylive/apps/client && npm run dev -- --port 3096 &

# skybot-inbox-ui (si existe)
cd /Users/milliandvalentin/skybot-inbox-ui && npm run dev -- --port 3095 &
```

**Screenshots à capturer par projet:**

**AeviaLaunch** (→ `public/screenshots/launch/`):
- `launch-home.webp` — homepage http://localhost:3099
- `launch-themes.webp` — /themes page (gallery)
- `launch-theme-saas.webp` — /themes/saas preview
- `launch-theme-restaurant.webp` — /themes/restaurant preview
- `launch-theme-brutalist.webp` — /themes/brutalist preview
- `launch-configure.webp` — /configure (StepForm)
- `launch-theme-aurora.webp` — /themes/aurora preview

**AeviaSecurity** (→ `public/screenshots/security/`):
- `security-home.webp` — homepage http://localhost:3097
- `security-audit.webp` — /audit page
- `security-pricing.webp` — /pricing page
- `security-report.webp` — /report (if exists)

**AeviaMarket** (→ `public/screenshots/market/`):
- `market-home.webp` — homepage http://localhost:3098
- `market-services.webp` — /services listing
- `market-service-detail.webp` — first service detail (if accessible)
- `market-dashboard.webp` — /dashboard (may need auth → skip if 401)

**AeviaLive** (→ `public/screenshots/live/`):
- `live-home.webp` — homepage http://localhost:3096
- `live-feed.webp` — /feed
- `live-creator.webp` — /creator (if accessible)

**Files to create:**
```
portfolio/public/screenshots/
  launch/
    launch-home.webp
    launch-themes.webp
    launch-theme-saas.webp
    launch-theme-restaurant.webp
    launch-theme-brutalist.webp
    launch-configure.webp
    launch-theme-aurora.webp
  security/
    security-home.webp
    security-audit.webp
    security-pricing.webp
  market/
    market-home.webp
    market-services.webp
  live/
    live-home.webp
    live-feed.webp
```

**Commit:** `feat(portfolio): add real product screenshots`

---

### Task 1.2 : Composant ProjectShowcase (carousel)

**File to create:** `portfolio/components/ProjectShowcase.tsx`

```tsx
"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectShowcaseProps {
  name: string;
  tagline: string;
  description: string;
  url: string;
  status: "live" | "soon";
  accentColor: string;
  screenshots: Screenshot[];
  features: string[];
}

export function ProjectShowcase({
  name, tagline, description, url, status,
  accentColor, screenshots, features
}: ProjectShowcaseProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % screenshots.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [screenshots.length]);

  const goTo = (idx: number, dir: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(dir);
    setCurrent(idx);
    startAutoPlay();
  };

  const prev = () => goTo((current - 1 + screenshots.length) % screenshots.length, -1);
  const next = () => goTo((current + 1) % screenshots.length, 1);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
      {/* Carousel */}
      <div className="relative aspect-[16/9] bg-zinc-950 overflow-hidden group">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={screenshots[current].src}
              alt={screenshots[current].alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            {/* Gradient overlay bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            {screenshots[current].caption && (
              <div className="absolute bottom-3 left-4 text-xs text-zinc-400 font-medium">
                {screenshots[current].caption}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-800 cursor-pointer"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-800 cursor-pointer"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Dots */}
        {screenshots.length > 1 && (
          <div className="absolute bottom-3 right-4 flex gap-1.5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  i === current ? "w-4 bg-white" : "bg-zinc-600 hover:bg-zinc-400"
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-bold text-xl">{name}</h3>
              {status === "live" ? (
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              ) : (
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 ring-1 ring-amber-500/20 px-2 py-0.5 rounded-full">
                  Soon
                </span>
              )}
            </div>
            <p className="text-sm font-medium" style={{ color: accentColor }}>{tagline}</p>
          </div>
          {status === "live" && url !== "#" && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-400 text-xs font-medium hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              Visit <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {features.map(f => (
            <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
```

**Commit:** `feat(portfolio): add ProjectShowcase carousel component`

---

### Task 1.3 : Section Showcase sur homepage

**File to modify:** `portfolio/app/page.tsx`

Ajouter une section `<ShowcaseSection>` après la section "Avia Ecosystem" et avant "Themes Showcase".

**Data structure:**
```tsx
const showcaseProjects = [
  {
    name: "AeviaLaunch",
    tagline: "AI-powered site builder",
    description: "Describe your business, choose from 21 premium templates, get a production-ready site in 60 seconds.",
    url: "https://aevia-launch.vercel.app",
    status: "live",
    accentColor: "#8b5cf6",
    features: ["21 premium templates", "AI content gen", "Live preview", "One-click deploy"],
    screenshots: [
      { src: "/screenshots/launch/launch-home.webp", alt: "AeviaLaunch homepage", caption: "Homepage" },
      { src: "/screenshots/launch/launch-themes.webp", alt: "Theme gallery", caption: "21 themes gallery" },
      { src: "/screenshots/launch/launch-theme-saas.webp", alt: "SaaS theme preview", caption: "SaaS template" },
      { src: "/screenshots/launch/launch-theme-luxury.webp", alt: "Luxury theme", caption: "Luxury template" },
      { src: "/screenshots/launch/launch-configure.webp", alt: "Configure wizard", caption: "AI wizard" },
    ]
  },
  {
    name: "AeviaSecurity",
    tagline: "Automated security audit",
    description: "DNS, SSL, headers analysis + AI recommendations. PDF report. Score 0–100 in 60 seconds.",
    url: "https://aevia-security.vercel.app",
    status: "live",
    accentColor: "#38bdf8",
    features: ["DNS/SSL analysis", "AI scoring", "PDF report", "Security headers"],
    screenshots: [
      { src: "/screenshots/security/security-home.webp", alt: "AeviaSecurity homepage", caption: "Homepage" },
      { src: "/screenshots/security/security-audit.webp", alt: "Audit interface", caption: "Audit center" },
      { src: "/screenshots/security/security-pricing.webp", alt: "Pricing", caption: "Pricing" },
    ]
  },
  {
    name: "AeviaMarket",
    tagline: "Freelance service marketplace",
    description: "Buy and sell professional services. Stripe payments, dispute resolution, seller dashboards.",
    url: "#",
    status: "soon",
    accentColor: "#f59e0b",
    features: ["Service listings", "Stripe checkout", "Seller analytics", "Dispute system"],
    screenshots: [
      { src: "/screenshots/market/market-home.webp", alt: "Marketplace homepage", caption: "Homepage" },
      { src: "/screenshots/market/market-services.webp", alt: "Services listing", caption: "Services catalog" },
    ]
  },
  {
    name: "AeviaLive",
    tagline: "Live streaming platform",
    description: "HLS streaming with tips, creator monetization, real-time chat and viewer analytics.",
    url: "#",
    status: "soon",
    accentColor: "#ec4899",
    features: ["HLS streaming", "Real-time chat", "Creator tips", "Viewer analytics"],
    screenshots: [
      { src: "/screenshots/live/live-home.webp", alt: "AeviaLive homepage", caption: "Homepage" },
      { src: "/screenshots/live/live-feed.webp", alt: "Live feed", caption: "Live feed" },
    ]
  },
];
```

**Section JSX:**
```tsx
{/* Showcase section — 2 col grid */}
<section className="px-6 py-24">
  <div className="mx-auto max-w-5xl">
    <motion.div ...>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">See it in action</h2>
      <p className="text-zinc-400 text-lg">Real products. Real interfaces. No mockups.</p>
    </motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      {showcaseProjects.map((p, i) => (
        <ProjectShowcase key={p.name} {...p} />
      ))}
    </div>
  </div>
</section>
```

**Commit:** `feat(portfolio): add product showcase section with carousels`

---

## Agent 2 — Launch/Templates Merge Agent

### Task 2.1 : Fix skylaunch — unified entry point

**Problem:** Users hit `/configure` before seeing templates. Dead-end if no template visible. `/themes` and `/templates` are split.

**Fix:** In `skylaunch/app/page.tsx`, update hero CTA to go directly to `/themes` first (browse → choose → configure). Update the nav flow.

**File to modify:** `skylaunch/app/page.tsx`

Steps:
1. CTA primaire: "Browse templates" → `/themes`
2. CTA secondaire: "Build my site" → `/configure`
3. Add type filter on themes page: "Landing · Business · E-commerce · All" as tabs at top

**File to modify:** `skylaunch/app/themes/page.tsx`

Add type filter tabs at the top of the page (above category filter):
```tsx
const TYPE_FILTERS = [
  { label: "All", ids: null },
  { label: "Landing Pages", ids: ["landing", "startup", "vitrine"] },
  { label: "Business Sites", ids: ["saas", "agency", "consultant", "healthcare", "realestate"] },
  { label: "E-commerce", ids: ["ecommerce", "restaurant", "hotel", "fitness"] },
  { label: "Premium", ids: ["luxury", "brutalist", "magazine", "aurora", "3d-tech", "minimal-pro"] },
];
```

**Commit:** `feat(skylaunch): add type filters + fix CTA flow`

---

### Task 2.2 : Fix configure — template pre-selection from themes

**Current issue:** `/configure?template=X` pre-selects a template in StepForm, but the StepForm doesn't visually confirm which template is selected.

**File to modify:** `skylaunch/components/StepForm.tsx`

Read the file first. Then add a "Selected template" preview banner at the top when `?template=X` is in the URL:
```tsx
// At top of StepForm, if template param exists:
{selectedTemplate && (
  <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
    <span className="text-2xl">{THEME_ICONS[selectedTemplate]}</span>
    <div>
      <div className="text-white text-sm font-semibold">{THEME_LABELS[selectedTemplate]}</div>
      <a href="/themes" className="text-violet-400 text-xs hover:underline">Change template</a>
    </div>
  </div>
)}
```

**Commit:** `feat(skylaunch): show selected template in configure wizard`

---

### Task 2.3 : Portfolio — "Create your website" CTA section

**File to modify:** `portfolio/app/page.tsx`

Add a dedicated "Create your website" section between Ecosystem and Showcase:
- 3 type cards: Landing Page / Business Site / E-commerce
- Each card links to `https://aevia-launch.vercel.app/themes?type=landing` etc.
- "Or browse all 21 themes →" link

```tsx
const siteTypes = [
  {
    type: "landing",
    label: "Landing Page",
    desc: "High-conversion page for your product or campaign",
    icon: "🚀",
    themes: ["landing", "startup", "saas"],
    color: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    type: "business",
    label: "Business Website",
    desc: "Professional multi-page presence for your company",
    icon: "🏢",
    themes: ["vitrine", "consultant", "agency"],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    type: "ecommerce",
    label: "E-commerce Store",
    desc: "Sell products and services with a complete storefront",
    icon: "🛍️",
    themes: ["ecommerce", "restaurant", "hotel"],
    color: "from-amber-500/20 to-orange-500/10",
  },
];
```

**Commit:** `feat(portfolio): add site type selector section`

---

## Agent 3 — Security Agent (Lighthouse integration)

### Task 3.1 : API route Lighthouse dans skysecurity

**Problem:** Current audit = DNS + SSL + Headers only. No performance/SEO scores. Tied to domain-only checks.

**Solution:** Add a Next.js API route that runs a URL through the Google PageSpeed Insights API (free, no install needed, works on any public URL).

**File to create:** `skysecurity/apps/web/src/app/api/lighthouse/route.ts`

```ts
import { NextRequest, NextResponse } from 'next/server';

const PSI_API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  if (!url || !url.startsWith('http')) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PSI_API_KEY || '';
  const strategies = ['mobile', 'desktop'];

  try {
    const [mobileRes, desktopRes] = await Promise.all(
      strategies.map(strategy =>
        fetch(`${PSI_API}?url=${encodeURIComponent(url)}&strategy=${strategy}&key=${apiKey}&category=performance&category=seo&category=best-practices&category=accessibility`)
          .then(r => r.json())
      )
    );

    const extract = (data: Record<string, unknown>) => {
      const cats = (data.lighthouseResult as Record<string, unknown>)?.categories as Record<string, { score: number }> | undefined;
      return {
        performance: Math.round((cats?.performance?.score ?? 0) * 100),
        seo: Math.round((cats?.seo?.score ?? 0) * 100),
        bestPractices: Math.round((cats?.['best-practices']?.score ?? 0) * 100),
        accessibility: Math.round((cats?.accessibility?.score ?? 0) * 100),
      };
    };

    return NextResponse.json({
      url,
      mobile: extract(mobileRes),
      desktop: extract(desktopRes),
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}
```

**Note:** `GOOGLE_PSI_API_KEY` can be empty (PSI works without key, with rate limits). Add to `.env.local`.

**Commit:** `feat(skysecurity): add PageSpeed Insights API route`

---

### Task 3.2 : LighthouseResults component

**File to create:** `skysecurity/apps/web/src/components/LighthouseResults.tsx`

```tsx
"use client";
import { motion } from "framer-motion";

interface Scores {
  performance: number;
  seo: number;
  bestPractices: number;
  accessibility: number;
}

interface LighthouseResultsProps {
  url: string;
  mobile: Scores;
  desktop: Scores;
}

function ScoreRing({ score, label }: { score: number; label: string }) {
  const color = score >= 90 ? "#22c55e" : score >= 50 ? "#f59e0b" : "#ef4444";
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#27272a" strokeWidth="3" />
          <circle
            cx="18" cy="18" r="15.9" fill="none"
            stroke={color} strokeWidth="3"
            strokeDasharray={`${score} 100`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
          {score}
        </span>
      </div>
      <span className="text-xs text-zinc-400 text-center leading-tight">{label}</span>
    </div>
  );
}

export function LighthouseResults({ url, mobile, desktop }: LighthouseResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6"
    >
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg mb-1">PageSpeed Results</h3>
        <p className="text-zinc-500 text-sm truncate">{url}</p>
      </div>

      {[{ label: "Mobile", scores: mobile }, { label: "Desktop", scores: desktop }].map(({ label, scores }) => (
        <div key={label} className="mb-6">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">{label}</div>
          <div className="grid grid-cols-4 gap-4">
            <ScoreRing score={scores.performance} label="Performance" />
            <ScoreRing score={scores.seo} label="SEO" />
            <ScoreRing score={scores.bestPractices} label="Best Practices" />
            <ScoreRing score={scores.accessibility} label="Accessibility" />
          </div>
        </div>
      ))}
    </motion.div>
  );
}
```

**Commit:** `feat(skysecurity): add LighthouseResults score ring component`

---

### Task 3.3 : Intégrer Lighthouse dans AuditForm

**File to modify:** `skysecurity/apps/web/src/components/AuditForm.tsx`

After the existing DNS/SSL/Headers analysis completes, fetch also the Lighthouse scores:

```tsx
// After pollAudit completes successfully, also fetch Lighthouse:
const lighthouseRes = await fetch('/api/lighthouse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: `https://${domain}` }),
});
if (lighthouseRes.ok) {
  const lighthouseData = await lighthouseRes.json();
  setLighthouseData(lighthouseData);
}
```

Add `<LighthouseResults>` display after the existing audit steps.

**Commit:** `feat(skysecurity): integrate Lighthouse scores into audit flow`

---

## Agent 4 — UX Unification Agent

### Task 4.1 : Portfolio — page `/projects` enrichie avec showcase

**File:** `portfolio/app/projects/page.tsx` (check if exists, read it)

Add cards for each project with:
- Real screenshot (first from each project folder)
- Description + features
- Link to live URL or "Coming soon" badge

**Commit:** `feat(portfolio): enrich /projects page with screenshots`

---

### Task 4.2 : Portfolio — sitemap update

**File to modify:** `portfolio/app/sitemap.ts`

Add missing routes now that the hub has grown.

**Commit:** `chore(portfolio): update sitemap`

---

### Task 4.3 : Skylaunch — Lighthouse scores sur la page `/themes/[id]`

**Context:** Each theme preview page at `/themes/[id]` shows a live GeneratedSite. We can expose the Lighthouse scores of that preview to give the user confidence.

**Skip for now** — this requires running Lighthouse on a localhost URL which Google PSI can't reach. Mark as post-launch.

---

## Agent 5 — Commit + Push All

### Task 5.1 : Vérifier le build portfolio

```bash
cd /Users/milliandvalentin/portfolio && npm run build
```
Expected: no errors, `[locale]` route present, all pages OK.

### Task 5.2 : Commit final portfolio

```bash
cd /Users/milliandvalentin/portfolio
git add -A
git commit -m "feat: product platform — showcase, site-type selector, Lighthouse integration"
git push origin main
```

### Task 5.3 : Commit skylaunch changes

```bash
cd /Users/milliandvalentin/skylaunch
git add -A
git commit -m "feat: unified flow — type filters, template pre-selection UX"
git push origin main
```

### Task 5.4 : Commit skysecurity changes

```bash
cd /Users/milliandvalentin/skysecurity
git add -A
git commit -m "feat: add PageSpeed Insights API + LighthouseResults component"
git push origin main
```

---

## Ordre d'exécution

```
1. Task 1.1 — Screenshots (Chrome DevTools MCP — démarrer serveurs dev)
2. Task 1.2 — ProjectShowcase component
3. Task 1.3 — Section showcase sur homepage
   └── Commit
4. Task 2.1 — Fix skylaunch type filters
5. Task 2.2 — Fix configure template pre-selection
6. Task 2.3 — "Create your website" section sur portfolio
   └── Commit
7. Task 3.1 — API route Lighthouse (skysecurity)
8. Task 3.2 — LighthouseResults component
9. Task 3.3 — Integrate into AuditForm
   └── Commit
10. Task 4.1 — /projects page enrichie
11. Task 4.2 — sitemap update
    └── Commit
12. Task 5.x — Build check + push all
```

---

## Checklist finale avant "launch"

- [ ] 3+ screenshots réels par projet visible
- [ ] Carousels animés sur portfolio homepage
- [ ] "Create your website" → choix de type → gallery templates
- [ ] `/themes?type=X` filtrage fonctionnel sur skylaunch
- [ ] Template pre-selection confirmé dans configure
- [ ] Lighthouse scores (mobile + desktop) dans security audit
- [ ] Build portfolio sans erreur
- [ ] Tous pushés sur GitHub (Vercel auto-deploy)
- [ ] Responsive vérifié (375px + 1440px)
