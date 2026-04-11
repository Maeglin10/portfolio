"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Zap, Shield, ShoppingBag, Radio, Code2, Layout } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

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

const projectIcons: Record<string, React.ReactNode> = {
  "skybot-inbox": <Zap className="w-5 h-5" />,
  skysecurity: <Shield className="w-5 h-5" />,
  skymarket: <ShoppingBag className="w-5 h-5" />,
  skylive: <Radio className="w-5 h-5" />,
  skyapp: <Code2 className="w-5 h-5" />,
  templates: <Layout className="w-5 h-5" />,
};

const statusBadge: Record<string, string> = {
  live: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30",
  beta: "bg-amber-500/15 text-amber-400 ring-amber-500/30",
  wip: "bg-zinc-500/15 text-zinc-400 ring-zinc-500/30",
};

const statusLabel: Record<string, string> = {
  live: "Live",
  beta: "Beta",
  wip: "In Progress",
};

export default function Home() {
  return (
    <div className="min-h-screen">
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
              >
                <GithubIcon className="w-4 h-4" />
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

      {/* Featured Projects */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
              <Link
                href="/projects"
                className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                All projects <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block h-full p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 transition-colors">
                        {projectIcons[p.slug] ?? <Code2 className="w-5 h-5" />}
                      </div>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ring-1 ${statusBadge[p.status]}`}
                      >
                        {statusLabel[p.status]}
                      </span>
                    </div>

                    <h3 className="text-white font-semibold mb-1.5 group-hover:text-violet-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] bg-zinc-800 text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {p.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] bg-zinc-800 text-zinc-500">
                          +{p.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Let's build something together</h2>
            <p className="text-zinc-400 max-w-md mx-auto mb-8">
              Looking for a full-stack engineer to ship your AI product? I'm available for freelance projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/Maeglin10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
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
            <a href="https://github.com/Maeglin10" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
