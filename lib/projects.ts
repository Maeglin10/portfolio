export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  status: "live" | "beta" | "wip";
  github?: string;
  live?: string;
  highlights: string[];
  tech: { name: string; role: string }[];
  metrics?: { label: string; value: string }[];
  screenshots?: { src: string; alt: string; caption: string }[];
  cta?: { label: string; href: string };
}

export const projects: Project[] = [
  {
    slug: "skylaunch",
    title: "AeviaLaunch",
    tagline: "AI-powered website generator with 15+ premium themes",
    description:
      "Choose a template, describe your business, get a production-ready site in seconds. Claude Haiku generates all copy — headline, about, services, testimonials.",
    longDescription:
      "AeviaLaunch lets anyone generate a full website in seconds. Pick from 15+ premium themes (Luxury, Brutalist, Aurora, Magazine, 3D-Tech, Minimal Pro and more), describe your business, and Claude Haiku generates tailored copy for every section. Framer Motion handles parallax scrolling, staggered reveals, magnetic buttons and word-by-word text animations. Users can upload their logo, pick a brand color and hero image, then share a unique preview link instantly.",
    tags: ["Next.js", "React 19", "Framer Motion", "Claude AI", "TypeScript"],
    category: "AI Tool",
    status: "live",
    github: "https://github.com/Maeglin10/skylaunch",
    live: "https://aevia-launch.vercel.app",
    highlights: [
      "15+ premium templates — Luxury, Brutalist, Aurora, Magazine, 3D-Tech, Minimal Pro",
      "Claude Haiku generates all copy (headline, about, services, testimonials)",
      "Framer Motion animations: parallax, stagger, magnetic buttons, word-by-word reveal",
      "Custom brand color, logo upload, hero image",
      "Instant preview + shareable link",
    ],
    tech: [
      { name: "Next.js 16", role: "Framework" },
      { name: "React 19", role: "UI layer" },
      { name: "Framer Motion", role: "Animations" },
      { name: "Anthropic Claude Haiku", role: "AI copy generation" },
      { name: "TypeScript", role: "Type safety" },
    ],
    metrics: [
      { label: "Templates", value: "181" },
      { label: "Gen time", value: "<5s" },
      { label: "Animations", value: "8 types" },
    ],
    screenshots: [
      { src: "/screenshots/launch/launch-home.webp", alt: "AeviaLaunch homepage", caption: "Homepage" },
      { src: "/screenshots/launch/launch-themes.webp", alt: "Theme gallery — 181 themes", caption: "Theme gallery" },
      { src: "/screenshots/launch/launch-theme-saas.webp", alt: "SaaS template preview", caption: "SaaS template" },
      { src: "/screenshots/launch/launch-theme-aurora.webp", alt: "Aurora wellness template", caption: "Aurora template" },
      { src: "/screenshots/launch/launch-theme-brutalist.webp", alt: "Brutalist editorial template", caption: "Brutalist template" },
      { src: "/screenshots/launch/launch-configure.webp", alt: "AI configuration wizard", caption: "AI wizard" },
    ],
    cta: { label: "Build your website", href: "https://aevia-launch.vercel.app/configure" },
  },
  {
    slug: "skybot-inbox",
    title: "Skybot Inbox",
    tagline: "AI-powered multi-channel customer inbox",
    description:
      "Production SaaS — unified inbox for WhatsApp, Instagram, email and more, with AI agents that triage, respond and escalate automatically.",
    longDescription:
      "Skybot Inbox is a multi-tenant SaaS that centralises customer conversations across WhatsApp, Instagram DMs, and email into a single inbox. AI agents built on Claude analyse intent, auto-respond to FAQs, route complex cases to human agents and trigger n8n automations (abandoned cart recovery, post-purchase follow-ups). The platform supports 22 active n8n workflows, real-time conversation state via PostgreSQL, JWT auth, and a React inbox UI with live updates.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "n8n", "Claude AI", "WhatsApp API"],
    category: "SaaS",
    status: "live",
    github: "https://github.com/Maeglin10/skybot-inbox",
    highlights: [
      "16 autonomous AI agents (OpenClaw) running on Render background workers",
      "22 n8n workflows — abandoned cart, post-purchase, escalation, routing",
      "Multi-tenant architecture — all queries scoped by accountId",
      "Real-time inbox with conversation history, status events and read receipts",
      "JWT auth + API key guard for n8n webhook security",
    ],
    tech: [
      { name: "NestJS 11", role: "Backend API" },
      { name: "Next.js 16", role: "Frontend" },
      { name: "PostgreSQL + Prisma", role: "Database" },
      { name: "n8n Cloud", role: "Workflow automation" },
      { name: "Anthropic Claude", role: "AI agents" },
      { name: "Render", role: "Hosting" },
    ],
    metrics: [
      { label: "AI Agents", value: "16" },
      { label: "n8n Workflows", value: "22" },
      { label: "Channels", value: "3+" },
    ],
  },
  {
    slug: "skysecurity",
    title: "AeviaSecurity",
    tagline: "Automated security audit platform",
    description:
      "SaaS that runs DNS, SSL, HTTP headers and HaveIBeenPwned checks on any domain, then generates an AI-written security report with a risk score.",
    longDescription:
      "AeviaSecurity lets users audit any domain in seconds. The backend runs parallel checks — DNS record analysis, SSL certificate validation, HTTP security headers scan, HaveIBeenPwned breach lookup — then feeds the results to Claude to generate a plain-English security report with a 0-100 risk score. Free tier allows 1 audit/month; Pro users get unlimited audits plus scheduled monitoring. Built as a NestJS API + Next.js dashboard.",
    tags: ["NestJS", "Next.js", "Claude AI", "PostgreSQL", "Security", "Stripe"],
    category: "SaaS",
    status: "beta",
    github: "https://github.com/Maeglin10/skysecurity",
    live: "https://aevia-security.vercel.app",
    highlights: [
      "DNS, SSL, HTTP headers and HIBP checks run in parallel",
      "Claude AI generates a full security report from raw scan data",
      "Risk score 0-100 with category breakdown",
      "Stripe subscriptions — Free / Pro / Enterprise tiers",
      "Fastify + helmet CSP, strict CORS, ValidationPipe globally",
    ],
    tech: [
      { name: "NestJS 11 + Fastify", role: "Backend API" },
      { name: "Next.js 15", role: "Frontend dashboard" },
      { name: "PostgreSQL + Prisma", role: "Database" },
      { name: "Anthropic Claude", role: "Report generation" },
      { name: "Stripe", role: "Subscriptions" },
    ],
    metrics: [
      { label: "Checks per audit", value: "5" },
      { label: "Avg scan time", value: "<3s" },
      { label: "Risk score range", value: "0–100" },
    ],
    screenshots: [
      { src: "/screenshots/security/security-home.webp", alt: "AeviaSecurity homepage", caption: "Homepage" },
      { src: "/screenshots/security/security-audit.webp", alt: "Audit interface", caption: "Run an audit" },
      { src: "/screenshots/security/security-pricing.webp", alt: "Pricing plans", caption: "Pricing" },
    ],
    cta: { label: "Scan your website", href: "https://aevia-security.vercel.app/audit" },
  },
  {
    slug: "skymarket",
    title: "AeviaMarket",
    screenshots: [
      { src: "/screenshots/market/market-home.webp", alt: "AeviaMarket homepage", caption: "Homepage" },
      { src: "/screenshots/market/market-services.webp", alt: "Services catalog", caption: "Services" },
    ],
    tagline: "Creator services marketplace",
    description:
      "Full-stack marketplace where creators sell digital services, with Stripe payments, seller profiles, reviews and a complete auth flow.",
    longDescription:
      "AeviaMarket is a two-sided marketplace for creators to list and sell digital services (design, video, consulting…). Buyers browse, purchase via Stripe Checkout, and leave reviews. Sellers manage their profile, services and earnings. The platform includes a complete auth flow with password reset by email (Resend), rich seed data with 5 demo sellers and 10 services, and a clean Next.js App Router frontend.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Resend", "TypeScript"],
    category: "Marketplace",
    status: "beta",
    github: "https://github.com/Maeglin10/skymarket",
    live: "https://aevia-market.vercel.app",
    highlights: [
      "Stripe Checkout for service purchases + payout flow",
      "Password reset via email (Resend) with SHA-256 token hashing",
      "Rate-limited forgot-password endpoint (5 req/min, enumeration-safe)",
      "Pricing page with 3 tiers + FAQ section",
      "Rich seed data — 5 sellers, 10 services, 8 reviews",
    ],
    tech: [
      { name: "Next.js 15 App Router", role: "Full-stack framework" },
      { name: "PostgreSQL + Prisma", role: "Database" },
      { name: "Stripe", role: "Payments" },
      { name: "Resend", role: "Transactional email" },
      { name: "bcrypt + jose", role: "Auth" },
    ],
  },
  {
    slug: "skylive",
    title: "AeviaLive",
    tagline: "Live streaming creator platform",
    screenshots: [
      { src: "/screenshots/live/live-home.webp", alt: "AeviaLive homepage", caption: "Homepage" },
      { src: "/screenshots/live/live-feed.webp", alt: "Live feed", caption: "Live feed" },
    ],
    description:
      "Creator-first live streaming platform with RTMP ingest, HLS playback, subscriptions, and a tipping system.",
    longDescription:
      "AeviaLive lets creators go live in one click — stream via OBS or any RTMP source, and viewers watch over HLS with low latency. Fans can subscribe (Fan free / Supporter €4.99 / VIP €14.99) and send tips during streams. The platform takes a 10% fee on all transactions. Built with Next.js App Router frontend, NestJS backend, Nginx RTMP for ingest, and HLS for delivery.",
    tags: ["Next.js", "NestJS", "HLS", "RTMP", "Stripe", "WebSocket"],
    category: "Creator Platform",
    status: "wip",
    github: "https://github.com/Maeglin10/skylive",
    live: "https://aevia-live.vercel.app",
    highlights: [
      "RTMP ingest via Nginx — stream key per creator",
      "HLS delivery with adaptive bitrate",
      "3 subscription tiers + tipping during live streams",
      "10% platform fee on all creator earnings",
      "Real-time viewer count and chat via WebSocket",
    ],
    tech: [
      { name: "Next.js 15", role: "Frontend" },
      { name: "NestJS", role: "Backend API" },
      { name: "Nginx RTMP", role: "Stream ingest" },
      { name: "HLS.js", role: "Video playback" },
      { name: "Stripe", role: "Subscriptions + tips" },
    ],
    metrics: [
      { label: "Platform fee", value: "10%" },
      { label: "Sub tiers", value: "3" },
      { label: "Latency", value: "<5s" },
    ],
  },
  {
    slug: "skyapp",
    title: "AeviaApp",
    tagline: "Multi-tenant AI agent SDK & API",
    description:
      "API platform that lets developers embed AI agents with persistent memory, semantic search and tool use into any product.",
    longDescription:
      "AeviaApp is a developer-first AI platform — think a self-hosted LangChain with a clean REST API. Developers create an account, get an API key, and can spin up AI agents with persistent pgvector memory, tool definitions, and configurable system prompts. The SDK handles context management, memory retrieval, streaming responses and function calling. Multi-tenant by design — all data scoped by accountId.",
    tags: ["NestJS", "pgvector", "Claude AI", "PostgreSQL", "TypeScript", "SDK"],
    category: "Developer Tool",
    status: "wip",
    github: "https://github.com/Maeglin10/skyapp",
    live: "https://aevia-app.vercel.app",
    highlights: [
      "pgvector semantic memory — agents remember past conversations",
      "REST API with API key auth — drop-in for any stack",
      "Multi-tenant — complete data isolation per account",
      "Streaming responses via SSE",
      "Interactive dashboard with live health monitoring",
    ],
    tech: [
      { name: "NestJS 11", role: "API backend" },
      { name: "PostgreSQL + pgvector", role: "Database + semantic memory" },
      { name: "Anthropic Claude", role: "LLM engine" },
      { name: "Next.js", role: "Developer dashboard" },
    ],
  },
  {
    slug: "templates",
    title: "SkyTemplates",
    tagline: "Production-ready Next.js template collection",
    description:
      "Turbopack monorepo with 3 fully-deployed Next.js templates — landing page, site vitrine and e-commerce store — all live on Vercel.",
    longDescription:
      "SkyTemplates is a monorepo of 3 production-grade Next.js 15 templates that developers can fork and deploy in minutes. The landing page template is optimised for lead generation; the site vitrine for SME web presence; the e-commerce template includes Stripe Checkout, product catalog and cart. All templates share a common UI package, design system and analytics layer. Deployed to Vercel with preview URLs for each template.",
    tags: ["Next.js", "Turborepo", "Tailwind CSS", "Stripe", "Prisma", "Vercel"],
    category: "Templates",
    status: "live",
    github: "https://github.com/Maeglin10/templates-landing-ecom-vitrine",
    live: "https://templates-nexxa.vercel.app",
    highlights: [
      "Turborepo monorepo — shared UI, config, auth and db packages",
      "3 templates, 3 live Vercel deployments",
      "Shared design system with dark/light theming",
      "E-commerce: Stripe Checkout, cart, product pages",
      "Sanity CMS integration for blog content",
    ],
    tech: [
      { name: "Next.js 15 + Turborepo", role: "Framework + monorepo" },
      { name: "Tailwind CSS v4", role: "Styling" },
      { name: "Stripe", role: "E-commerce payments" },
      { name: "Prisma", role: "Database ORM" },
      { name: "Sanity", role: "CMS" },
      { name: "Vercel", role: "Deployment" },
    ],
    metrics: [
      { label: "Templates", value: "3" },
      { label: "Shared packages", value: "6" },
      { label: "Live deployments", value: "3" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
