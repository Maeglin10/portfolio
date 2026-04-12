"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Started building",
    description: "First web projects, fell in love with the full stack",
  },
  {
    title: "Discovered AI",
    description:
      "Integrated LLMs into production apps, built autonomous agent systems",
  },
  {
    title: "Building the Sky ecosystem",
    description:
      "6 interconnected SaaS products: Skybot Inbox, AeviaSecurity, AeviaMarket, AeviaLive, AeviaApp, AeviaLaunch",
  },
  {
    title: "Available for freelance",
    description: "Taking on ambitious projects with teams and founders",
  },
];

const skillCategories = [
  {
    title: "Backend",
    skills: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Fastify",
      "REST/GraphQL",
    ],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "AI & Automation",
    skills: [
      "Anthropic Claude",
      "n8n",
      "pgvector",
      "LLM integration",
      "Prompt engineering",
    ],
  },
];

const values = [
  {
    title: "Ship fast, ship right",
    description:
      "Bias toward production. Every project has CI/CD, tests, and real deployment.",
  },
  {
    title: "AI-first thinking",
    description:
      "I integrate AI not as a gimmick but as a core feature that creates real value.",
  },
  {
    title: "Full ownership",
    description:
      "I take a feature from idea to deployed URL. No hand-offs, no excuses.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About me
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Full stack engineer based in Paris, specializing in AI-powered
              products. I build production-ready SaaS from scratch — from
              database schema to deployed frontend — with a focus on NestJS,
              Next.js, and Anthropic Claude.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey / Timeline Section */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-12">My journey</h2>

            <div className="space-y-8">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-violet-400 mt-2" />
                    {i !== timelineItems.length - 1 && (
                      <div className="w-0.5 h-16 bg-zinc-800 mt-3" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-12">Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skillCategories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, j) => (
                      <li
                        key={j}
                        className="text-zinc-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-12">
              What I value
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Let's build something
            </h2>
            <p className="text-zinc-400 mb-8">
              If you're working on an ambitious project and need a full-stack
              engineer who can ship fast and think deeply about AI, I'd love to
              chat.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>© 2025 Valentin Milliand</span>
          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="hover:text-zinc-300 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-zinc-300 transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://linkedin.com/in/valentin-milliand"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Maeglin10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
