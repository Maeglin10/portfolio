"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Zap, Shield, ShoppingBag, Radio, Code2, Layout, Sparkles, MessageSquare, Globe, CheckCircle2, Star } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { ProjectShowcase } from "@/components/ProjectShowcase";

// ─── Tech Stack ─────────────────────────────────────────────────────────────

const skills = [
  { label: "NestJS", category: "backend" },
  { label: "Next.js", category: "frontend" },
  { label: "TypeScript", category: "language" },
  { label: "PostgreSQL", category: "backend" },
  { label: "Prisma", category: "backend" },
  { label: "Anthropic Claude", category: "ai" },
  { label: "n8n", category: "automation" },
  { label: "Stripe", category: "payments" },
  { label: "Tailwind CSS", category: "frontend" },
  { label: "Docker", category: "devops" },
  { label: "Render", category: "devops" },
  { label: "Vercel", category: "devops" },
  { label: "React", category: "frontend" },
  { label: "Turborepo", category: "devops" },
  { label: "Fastify", category: "backend" },
  { label: "pgvector", category: "ai" },
];

const categoryColor: Record<string, string> = {
  backend: "bg-blue-500/10 text-blue-300 ring-blue-500/20",
  frontend: "bg-violet-500/10 text-violet-300 ring-violet-500/20",
  language: "bg-amber-500/10 text-amber-300 ring-amber-500/20",
  ai: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20",
  automation: "bg-orange-500/10 text-orange-300 ring-orange-500/20",
  payments: "bg-green-500/10 text-green-300 ring-green-500/20",
  devops: "bg-zinc-500/10 text-zinc-300 ring-zinc-500/20",
};

// ─── Aevia Products ───────────────────────────────────────────────────────────

interface AeviaProduct {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  status: "live" | "soon";
  icon: React.ReactNode;
  accentFrom: string;
  accentTo: string;
  glowColor: string;
  features: string[];
  cta: string;
}

const aeviaProducts: AeviaProduct[] = [
  {
    slug: "launch",
    name: "AeviaLaunch",
    tagline: "Site builder powered by AI",
    description:
      "Describe your business, choose from 21 premium templates, get a production-ready website in seconds. No code. No waiting.",
    url: "https://aevia-launch.vercel.app/configure",
    status: "live",
    icon: <Sparkles className="w-5 h-5" />,
    accentFrom: "from-violet-500",
    accentTo: "to-fuchsia-500",
    glowColor: "group-hover:shadow-violet-500/20",
    features: ["181 themes — free & premium", "AI content generation", "Live in 2 hours"],
    cta: "Build my website →",
  },
  {
    slug: "inbox",
    name: "AeviaInbox",
    tagline: "AI-powered business inbox",
    description:
      "Unified multi-channel CRM. WhatsApp, Instagram, email in one place. AI auto-replies, lead scoring, conversation intelligence.",
    url: "#",
    status: "soon",
    icon: <MessageSquare className="w-5 h-5" />,
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
    glowColor: "group-hover:shadow-cyan-500/20",
    features: ["Multi-channel messaging", "AI auto-replies", "Lead scoring"],
    cta: "Coming soon",
  },
  {
    slug: "security",
    name: "AeviaSecurity",
    tagline: "Automated web security audit",
    description:
      "AI-powered security & performance audit. Get a scored PDF report with actionable recommendations in under 60 seconds.",
    url: "https://aevia-security.vercel.app/audit",
    status: "live",
    icon: <Shield className="w-5 h-5" />,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    glowColor: "group-hover:shadow-emerald-500/20",
    features: ["Security scoring 0–100", "PDF report", "PageSpeed Insights"],
    cta: "Scan my website →",
  },
  {
    slug: "market",
    name: "AeviaMarket",
    tagline: "Freelance service marketplace",
    description:
      "Buy and sell professional services. Secure payments, dispute resolution, seller dashboards — a complete marketplace platform.",
    url: "#",
    status: "soon",
    icon: <ShoppingBag className="w-5 h-5" />,
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    glowColor: "group-hover:shadow-amber-500/20",
    features: ["Secure Stripe payments", "Seller analytics", "Rating system"],
    cta: "Coming soon",
  },
];

// ─── Existing Portfolio Projects ─────────────────────────────────────────────

interface PortfolioProject {
  slug: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: React.ReactNode;
  accentFrom: string;
  accentTo: string;
  glowColor: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    slug: "skylaunch",
    title: "AeviaLaunch",
    description:
      "AI site generator with 21 premium templates. Describe your business, get a production-ready site in seconds.",
    url: "https://aevia-launch.vercel.app",
    tags: ["AI", "Next.js", "Framer Motion"],
    icon: <Sparkles className="w-5 h-5" />,
    accentFrom: "from-violet-500",
    accentTo: "to-fuchsia-500",
    glowColor: "group-hover:shadow-violet-500/20",
  },
  {
    slug: "skyapp",
    title: "AeviaApp",
    description:
      "Multi-agent AI orchestration API. DAG scheduling, pgvector memory, multi-provider (Claude, GPT-4o, Gemini).",
    url: "#",
    tags: ["NestJS", "PostgreSQL", "Anthropic API"],
    icon: <Code2 className="w-5 h-5" />,
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
    glowColor: "group-hover:shadow-cyan-500/20",
  },
  {
    slug: "skysecurity",
    title: "AeviaSecurity",
    description:
      "Automated AI security & performance audit. PDF reports, 0–100 scoring, actionable recommendations.",
    url: "https://aevia-security.vercel.app",
    tags: ["NestJS", "AI", "Security"],
    icon: <Shield className="w-5 h-5" />,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    glowColor: "group-hover:shadow-emerald-500/20",
  },
  {
    slug: "skylive",
    title: "AeviaLive",
    description:
      "Live streaming platform with tips & creator monetization. HLS, WebSocket, real-time chat.",
    url: "#",
    tags: ["WebSocket", "HLS", "Real-time"],
    icon: <Radio className="w-5 h-5" />,
    accentFrom: "from-pink-500",
    accentTo: "to-rose-500",
    glowColor: "group-hover:shadow-pink-500/20",
  },
  {
    slug: "skymarket",
    title: "AeviaMarket",
    description:
      "Freelance service marketplace. JWT auth, Prisma, order management, Stripe payments.",
    url: "#",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    icon: <ShoppingBag className="w-5 h-5" />,
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    glowColor: "group-hover:shadow-amber-500/20",
  },
];

const tagColors: Record<string, string> = {
  "AI": "bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20",
  "Next.js": "bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20",
  "Framer Motion": "bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20",
  "NestJS": "bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20",
  "PostgreSQL": "bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20",
  "Anthropic API": "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20",
  "Security": "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20",
  "WebSocket": "bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/20",
  "HLS": "bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/20",
  "Real-time": "bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/20",
  "Prisma": "bg-zinc-500/10 text-zinc-300 ring-1 ring-zinc-500/20",
};

// ─── Site Type Selector Data ─────────────────────────────────────────────────

const siteTypes = [
  {
    type: "landing",
    label: "Landing Page",
    desc: "High-conversion page for your product or campaign",
    icon: "🚀",
    color: "from-violet-500/20 to-fuchsia-500/10",
    accent: "#8b5cf6",
    themes: 5,
  },
  {
    type: "business",
    label: "Business Site",
    desc: "Professional multi-page presence for your company",
    icon: "🏢",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "#38bdf8",
    themes: 8,
  },
  {
    type: "ecommerce",
    label: "E-commerce Store",
    desc: "Sell products and services with a full storefront",
    icon: "🛍️",
    color: "from-amber-500/20 to-orange-500/10",
    accent: "#f59e0b",
    themes: 4,
  },
];

// ─── Showcase Projects Data ───────────────────────────────────────────────────

const showcaseProjects = [
  {
    name: "AeviaLaunch",
    tagline: "AI-powered site builder",
    description: "Describe your business, choose from 21 premium templates, get a production-ready website in seconds. No code. No waiting.",
    url: "https://aevia-launch.vercel.app",
    status: "live" as const,
    accentColor: "#8b5cf6",
    features: ["21 premium templates", "AI content generation", "Live preview", "One-click deploy"],
    screenshots: [
      { src: "/screenshots/launch/launch-home.webp", alt: "AeviaLaunch homepage", caption: "Homepage" },
      { src: "/screenshots/launch/launch-themes.webp", alt: "Theme gallery", caption: "21 themes gallery" },
      { src: "/screenshots/launch/launch-theme-saas.webp", alt: "SaaS theme preview", caption: "SaaS template" },
      { src: "/screenshots/launch/launch-theme-restaurant.webp", alt: "Restaurant theme", caption: "Restaurant template" },
      { src: "/screenshots/launch/launch-theme-aurora.webp", alt: "Aurora theme", caption: "Aurora template" },
      { src: "/screenshots/launch/launch-configure.webp", alt: "Configure wizard", caption: "AI wizard" },
    ],
  },
  {
    name: "AeviaSecurity",
    tagline: "Automated security & performance audit",
    description: "DNS, SSL, security headers analysis + AI recommendations. PDF report. Score your site 0–100 in under 60 seconds.",
    url: "https://aevia-security.vercel.app",
    status: "live" as const,
    accentColor: "#38bdf8",
    features: ["DNS/SSL analysis", "AI scoring 0–100", "PDF report", "Security headers check"],
    screenshots: [
      { src: "/screenshots/security/security-home.webp", alt: "AeviaSecurity homepage", caption: "Homepage" },
      { src: "/screenshots/security/security-audit.webp", alt: "Audit interface", caption: "Audit center" },
      { src: "/screenshots/security/security-pricing.webp", alt: "Pricing plans", caption: "Pricing" },
    ],
  },
  {
    name: "AeviaMarket",
    tagline: "Freelance service marketplace",
    description: "Buy and sell professional services. Stripe payments, dispute resolution, seller dashboards — a complete marketplace platform.",
    url: "#",
    status: "soon" as const,
    accentColor: "#f59e0b",
    features: ["Service listings", "Stripe checkout", "Seller analytics", "Dispute system"],
    screenshots: [
      { src: "/screenshots/market/market-home.webp", alt: "Marketplace homepage", caption: "Homepage" },
      { src: "/screenshots/market/market-services.webp", alt: "Services listing", caption: "Services catalog" },
    ],
  },
  {
    name: "AeviaLive",
    tagline: "Live streaming platform",
    description: "HLS streaming with tips, creator monetization, real-time chat and viewer analytics.",
    url: "#",
    status: "soon" as const,
    accentColor: "#ec4899",
    features: ["HLS streaming", "Real-time chat", "Creator tips", "Viewer analytics"],
    screenshots: [
      { src: "/screenshots/live/live-home.webp", alt: "AeviaLive homepage", caption: "Homepage" },
      { src: "/screenshots/live/live-feed.webp", alt: "Live feed", caption: "Live feed" },
    ],
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function ProductCard({ product, index }: { product: AeviaProduct; index: number }) {
  const isLive = product.status === "live";
  const Wrapper = isLive ? "a" : "div";
  const wrapperProps = isLive
    ? { href: product.url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Wrapper
        {...wrapperProps}
        className={`group relative flex flex-col h-full p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm
          ${isLive ? "hover:border-zinc-600 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer" : "opacity-80"}
          ${product.glowColor}
          transition-all duration-300 overflow-hidden`}
      >
        {/* Gradient on hover */}
        <div className={`absolute inset-0 opacity-0 ${isLive ? "group-hover:opacity-100" : ""} transition-opacity duration-300 bg-gradient-to-br ${product.accentFrom}/5 ${product.accentTo}/5 rounded-2xl pointer-events-none`} />

        {/* Top: icon + status badge */}
        <div className="flex items-start justify-between mb-5 relative z-10">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${product.accentFrom}/20 ${product.accentTo}/10 border border-white/5 text-white`}>
            {product.icon}
          </div>
          {isLive ? (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-2 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          ) : (
            <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 ring-1 ring-amber-500/20 px-2 py-1 rounded-full">
              Coming soon
            </span>
          )}
        </div>

        {/* Name + tagline */}
        <div className="mb-3 relative z-10">
          <h3 className={`text-white font-bold text-lg mb-1 ${isLive ? "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${product.accentFrom} group-hover:${product.accentTo}" : ""} transition-all duration-300`}>
            {product.name}
          </h3>
          <p className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${product.accentFrom} ${product.accentTo}`}>
            {product.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1 relative z-10">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5 relative z-10">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-zinc-400 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={`flex items-center gap-1.5 text-sm font-semibold relative z-10 ${isLive ? `text-transparent bg-clip-text bg-gradient-to-r ${product.accentFrom} ${product.accentTo}` : "text-zinc-500"}`}>
          {product.cta}
          {isLive && <ArrowRight className={`w-4 h-4 text-violet-400 group-hover:translate-x-0.5 transition-transform`} />}
        </div>
      </Wrapper>
    </motion.div>
  );
}

function PortfolioProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const isExternal = project.url !== "#";
  const Wrapper = isExternal ? "a" : "div";
  const wrapperProps = isExternal
    ? { href: project.url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Wrapper
        {...wrapperProps}
        className={`group relative flex flex-col h-full p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm
          ${isExternal ? "hover:border-zinc-600 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer" : "opacity-70"}
          ${project.glowColor}
          transition-all duration-300 overflow-hidden`}
      >
        <div className={`absolute inset-0 opacity-0 ${isExternal ? "group-hover:opacity-100" : ""} transition-opacity duration-300 bg-gradient-to-br ${project.accentFrom}/5 ${project.accentTo}/5 rounded-2xl pointer-events-none`} />

        <div className="flex items-start justify-between mb-5 relative z-10">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.accentFrom}/20 ${project.accentTo}/10 border border-white/5 text-white`}>
            {project.icon}
          </div>
          {isExternal && (
            <div className="flex items-center gap-1.5 text-zinc-600 group-hover:text-zinc-300 transition-colors">
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Visit</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          )}
        </div>

        <h3 className="text-white font-bold text-lg mb-2.5 relative z-10">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1 relative z-10">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 relative z-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium ${tagColors[tag] ?? "bg-zinc-800 text-zinc-400"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
}

// ─── Themes Showcase Data ─────────────────────────────────────────────────────

const featuredThemes = [
  { id: "landing",    label: "Landing Page",       icon: "🚀", color: "from-violet-500/20 to-fuchsia-500/10" },
  { id: "saas",       label: "SaaS Product",        icon: "⚡", color: "from-blue-500/20 to-cyan-500/10" },
  { id: "luxury",     label: "Luxury & Couture",    icon: "💎", color: "from-amber-500/20 to-yellow-500/10" },
  { id: "restaurant", label: "Restaurant",          icon: "🍽️", color: "from-orange-500/20 to-red-500/10" },
  { id: "portfolio",  label: "Portfolio",           icon: "💼", color: "from-emerald-500/20 to-teal-500/10" },
  { id: "aurora",     label: "Aurora & Wellness",   icon: "✦",  color: "from-purple-500/20 to-pink-500/10" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen" id="main-content">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute top-60 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              Available for freelance projects
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Valentin Milliand
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                Full Stack Engineer
              </span>
              <br />
              <span className="text-zinc-400 text-3xl sm:text-5xl font-semibold">& AI Builder</span>
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
              I build production-ready AI products — multi-channel inboxes, creator platforms, security SaaS, and
              developer tools. NestJS on the backend, Next.js on the front, Claude for the AI layer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
              >
                Explore Aevia
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                Get in touch
              </Link>
              <a
                href="https://github.com/Maeglin10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-700 text-zinc-400 text-sm hover:border-zinc-500 hover:text-white transition-colors"
                aria-label="Visit my GitHub profile"
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-5">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.label}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ring-1 ${categoryColor[s.category]}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Aevia Ecosystem ───────────────────────────────────────────────── */}
      <section id="ecosystem" className="relative px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950/70" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-violet-600/6 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center sm:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium mb-4">
              <Sparkles className="w-3 h-3" />
              Aevia Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              One ecosystem, every tool you need
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              From launching your website to managing your customers — Aevia covers the full journey.
            </p>
          </motion.div>

          {/* Product cards grid — 2 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {aeviaProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
          >
            {[
              { value: "21+", label: "Templates" },
              { value: "4", label: "Products" },
              { value: "3", label: "Languages" },
              { value: "∞", label: "Possibilities" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Create Your Website (Site Type Selector) ─────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium mb-4">
              <Globe className="w-3 h-3" />
              AeviaLaunch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Create your website</h2>
            <p className="text-zinc-400 text-lg max-w-xl mb-10">Choose your site type — browse all templates instantly, no registration needed.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {siteTypes.map((t, i) => (
              <motion.a
                key={t.type}
                href="https://aevia-launch.vercel.app/themes"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group flex flex-col p-6 rounded-2xl border border-zinc-800 bg-gradient-to-br ${t.color} hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                <span className="text-3xl mb-4">{t.icon}</span>
                <h3 className="text-white font-bold text-lg mb-1">{t.label}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500">{t.themes}+ themes</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://aevia-launch.vercel.app/themes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-violet-300 text-sm font-medium transition-colors"
            >
              Browse all 21 themes <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── See It In Action (Product Showcase Carousels) ─────────────── */}
      <section className="px-6 py-24 bg-zinc-950/40">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">See it in action</h2>
            <p className="text-zinc-400 text-lg">Real products. Real interfaces. No mockups.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {showcaseProjects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <ProjectShowcase {...p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Themes Showcase ──────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 ring-1 ring-fuchsia-500/20 text-fuchsia-300 text-xs font-medium mb-3">
                  <Layout className="w-3 h-3" />
                  AeviaLaunch Templates
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  21 premium themes
                </h2>
                <p className="text-zinc-400 mt-2 max-w-lg">
                  Every theme is fully customizable and generated with AI content — ready to deploy in 60 seconds.
                </p>
              </div>
              <a
                href="https://aevia-launch.vercel.app/themes"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-violet-500/50 hover:text-violet-300 transition-all duration-200"
              >
                Browse all themes
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Theme cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {featuredThemes.map((theme, i) => (
              <motion.a
                key={theme.id}
                href={`https://aevia-launch.vercel.app/themes/${theme.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group relative flex flex-col p-5 rounded-xl border border-zinc-800 bg-gradient-to-br ${theme.color} hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                <span className="text-2xl mb-3">{theme.icon}</span>
                <span className="text-white text-sm font-semibold leading-tight">{theme.label}</span>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I've Built — Full Project List ─────────────────────────── */}
      <section className="relative px-6 py-24 overflow-hidden" ref={projectsRef}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950/60" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-violet-600/6 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              What I&apos;ve Built
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              Production-ready products shipped solo. Full-stack, AI-powered, deployed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioProjects.map((project, i) => (
              <PortfolioProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-400 text-sm font-medium hover:border-violet-500/50 hover:text-violet-300 transition-all duration-200"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-2xl" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-3">Let&apos;s build something together</h2>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">
                  Looking for a full-stack engineer to ship your AI product? I&apos;m available for freelance projects.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
                  >
                    Start a conversation
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <a
                    href="https://github.com/Maeglin10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
                    aria-label="View my GitHub profile"
                  >
                    <GithubIcon className="w-4 h-4" aria-hidden="true" />
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>© 2026 Valentin Milliand · Aevia Ecosystem</span>
          <div className="flex items-center gap-6">
            <Link href="/projects" className="hover:text-zinc-300 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Contact</Link>
            <a href="https://aevia-launch.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">AeviaLaunch</a>
            <a href="https://linkedin.com/in/valentin-milliand" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-300 transition-colors" aria-label="Visit my LinkedIn profile">
              <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://github.com/Maeglin10" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-300 transition-colors" aria-label="Visit my GitHub profile">
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
