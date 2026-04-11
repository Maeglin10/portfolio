import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          All projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ring-1 ${statusBadge[project.status]}`}
            >
              {statusLabel[project.status]}
            </span>
            <span className="text-sm text-zinc-500">{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-3xl mb-8">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <h2 className="text-white font-semibold mb-4">About</h2>
              <p className="text-zinc-400 leading-relaxed">{project.longDescription}</p>
            </section>

            {/* Highlights */}
            <section className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <h2 className="text-white font-semibold mb-5">Key Features</h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech stack */}
            <section className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <h2 className="text-white font-semibold mb-5">Tech Stack</h2>
              <div className="divide-y divide-zinc-800">
                {project.tech.map((t) => (
                  <div key={t.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <span className="text-zinc-200 text-sm font-medium">{t.name}</span>
                    <span className="text-zinc-500 text-xs">{t.role}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Metrics */}
            {project.metrics && (
              <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  At a glance
                </h3>
                <div className="space-y-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-bold text-white">{m.value}</div>
                      <div className="text-zinc-500 text-sm">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs bg-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-5 rounded-2xl border border-zinc-700 bg-violet-600/5">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-violet-400" />
                <span className="text-white text-sm font-semibold">Interested?</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Want to know more about this project or hire me to build something similar?
              </p>
              <Link
                href="/contact"
                className="block text-center px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
