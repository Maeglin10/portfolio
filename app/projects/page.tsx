"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, Code2, Zap, Shield, ShoppingBag, Radio, Layout } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

const projectIcons: Record<string, React.ReactNode> = {
  "skybot-inbox": <Zap className="w-6 h-6" />,
  skysecurity: <Shield className="w-6 h-6" />,
  skymarket: <ShoppingBag className="w-6 h-6" />,
  skylive: <Radio className="w-6 h-6" />,
  skyapp: <Code2 className="w-6 h-6" />,
  templates: <Layout className="w-6 h-6" />,
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

const categoryColor: Record<string, string> = {
  SaaS: "text-violet-400",
  Marketplace: "text-blue-400",
  "Creator Platform": "text-pink-400",
  "Developer Tool": "text-emerald-400",
  Templates: "text-amber-400",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6" id="main-content">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Production-ready AI products and full-stack applications built from scratch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.07 * i }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-800/40 transition-all duration-200"
              >
                {/* Thumbnail or Icon */}
                <div className="flex-shrink-0">
                  {p.screenshots && p.screenshots[0] ? (
                    <div className="w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden border border-zinc-800 relative">
                      <Image
                        src={p.screenshots[0].src}
                        alt={p.screenshots[0].alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="128px"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-zinc-700 transition-colors flex items-center justify-center text-zinc-300" aria-hidden="true">
                      {projectIcons[p.slug] ?? <Code2 className="w-6 h-6" />}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-white font-semibold text-lg group-hover:text-violet-300 transition-colors">
                      {p.title}
                    </h2>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ring-1 ${statusBadge[p.status]}`}
                    >
                      {statusLabel[p.status]}
                    </span>
                    <span className={`text-xs font-medium ${categoryColor[p.category] ?? "text-zinc-400"}`}>
                      {p.category}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700/80 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex sm:flex-col items-center sm:items-end justify-start sm:justify-center gap-3 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  <div className="flex gap-2">
                    {p.github && (
                      <button
                        onClick={(e) => { e.preventDefault(); window.open(p.github, "_blank"); }}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-700 transition-colors"
                        aria-label={`View ${p.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                    {p.live && (
                      <button
                        onClick={(e) => { e.preventDefault(); window.open(p.live, "_blank"); }}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-700 transition-colors"
                        aria-label={`View ${p.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
