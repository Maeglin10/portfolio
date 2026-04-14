"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Zap, Shield, ShoppingBag, Radio, Code2, Layout, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LinkedinIcon } from "@/components/LinkedinIcon";

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

interface AeviaProject {
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

const aeviaProjects: AeviaProject[] = [
  {
    slug: "skylaunch",
    title: "AeviaLaunch",
    description:
      "Generateur de sites IA avec 15+ themes premium. Decrivez votre business, obtenez un site production-ready en quelques secondes.",
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
      "API d'orchestration multi-agents IA. DAG scheduling, memoire vectorielle pgvector, multi-provider (Claude, GPT-4o, Gemini).",
    url: "https://aevia-app.vercel.app",
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
      "Audit de securite et performance web automatise par IA. Rapports PDF, scoring 0-100, recommandations actionnables.",
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
      "Plateforme de streaming live avec tips et monetisation createurs. HLS, WebSocket, chat temps reel.",
    url: "https://aevia-live.vercel.app",
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
      "Marketplace de services freelance. Auth JWT, Prisma, gestion commandes, paiements Stripe.",
    url: "https://aevia-market.vercel.app",
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

function ProjectCard({ project, index }: { project: AeviaProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex flex-col h-full p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm
          hover:border-zinc-600 hover:-translate-y-1.5 hover:shadow-2xl
          ${project.glowColor}
          transition-all duration-300 cursor-pointer overflow-hidden`}
      >
        {/* Subtle gradient overlay on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${project.accentFrom}/5 ${project.accentTo}/5 rounded-2xl pointer-events-none`} />

        {/* Top row: icon + arrow */}
        <div className="flex items-start justify-between mb-5 relative z-10">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.accentFrom}/20 ${project.accentTo}/10 border border-white/5 text-white`}>
            {project.icon}
          </div>
          <div className="flex items-center gap-1.5 text-zinc-600 group-hover:text-zinc-300 transition-colors">
            <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Visit</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-white font-bold text-lg mb-2.5 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${project.accentFrom} group-hover:${project.accentTo} transition-all duration-300`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1 relative z-10">
          {project.description}
        </p>

        {/* Tags */}
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
      </a>
    </motion.div>
  );
}

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen" id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Gradient blob */}
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

            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
              I build production-ready AI products — multi-channel inboxes, creator platforms, security SaaS, and
              developer tools. NestJS on the backend, Next.js on the front, Claude for the AI layer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors"
              >
                View projects
                <ArrowRight className="w-4 h-4" />
              </Link>
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

      {/* Skills */}
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

      {/* What I've Built — Premium Projects Section */}
      <section className="relative px-6 py-24 overflow-hidden" ref={projectsRef}>
        {/* Subtle background differentiation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950/60" />
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Glow accents */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-violet-600/6 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium mb-4">
              <Sparkles className="w-3 h-3" />
              Aevia Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              What I&apos;ve Built
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              Production-ready products shipped solo. Full-stack, AI-powered, deployed.
            </p>
          </motion.div>

          {/* Cards grid — 2 cols desktop, 1 col mobile, with a centered last card if 5 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aeviaProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          {/* View all link */}
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

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-10 text-center">
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
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>© 2025 Valentin Milliand</span>
          <div className="flex items-center gap-6">
            <Link href="/projects" className="hover:text-zinc-300 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Contact</Link>
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
