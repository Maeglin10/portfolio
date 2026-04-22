"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Shield, MessageSquare, Globe, ShoppingBag, Zap, CheckCircle2, Layout, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { GithubIcon } from "@/components/GithubIcon";

export default function Home() {
  const h = useTranslations("hero");
  const st = useTranslations("stats");
  const p = useTranslations("products");
  const ts = useTranslations("templates_section");
  const w = useTranslations("why");
  const c = useTranslations("cta");
  const f = useTranslations("footer");

  const products = [
    {
      name: "AeviaLaunch",
      tagline: p("launch_tagline"),
      description: p("launch_desc"),
      href: "https://aevia-launch.vercel.app",
      status: "live" as const,
      icon: <Sparkles className="w-6 h-6" />,
      accentFrom: "from-violet-500",
      accentTo: "to-fuchsia-500",
      glow: "group-hover:shadow-violet-500/25",
      features: [
        { icon: <Globe className="w-4 h-4" />, label: p("launch_f1") },
        { icon: <ShoppingBag className="w-4 h-4" />, label: p("launch_f2") },
        { icon: <Layout className="w-4 h-4" />, label: p("launch_f3") },
        { icon: <Zap className="w-4 h-4" />, label: p("launch_f4") },
      ],
      cta: p("launch_cta"),
      ctaSecondary: p("launch_cta2"),
      ctaSecondaryHref: "https://aevia-launch.vercel.app",
    },
    {
      name: "AeviaSecurity",
      tagline: p("security_tagline"),
      description: p("security_desc"),
      href: "https://aevia-security.vercel.app",
      status: "live" as const,
      icon: <Shield className="w-6 h-6" />,
      accentFrom: "from-emerald-500",
      accentTo: "to-teal-500",
      glow: "group-hover:shadow-emerald-500/25",
      features: [
        { icon: <CheckCircle2 className="w-4 h-4" />, label: p("security_f1") },
        { icon: <CheckCircle2 className="w-4 h-4" />, label: p("security_f2") },
        { icon: <CheckCircle2 className="w-4 h-4" />, label: p("security_f3") },
        { icon: <CheckCircle2 className="w-4 h-4" />, label: p("security_f4") },
      ],
      cta: p("security_cta"),
      ctaSecondary: null,
      ctaSecondaryHref: null,
    },
    {
      name: "AeviaInbox",
      tagline: p("inbox_tagline"),
      description: p("inbox_desc"),
      href: "#",
      status: "soon" as const,
      icon: <MessageSquare className="w-6 h-6" />,
      accentFrom: "from-cyan-500",
      accentTo: "to-blue-500",
      glow: "group-hover:shadow-cyan-500/25",
      features: [
        { icon: <CheckCircle2 className="w-4 h-4" />, label: p("inbox_f1") },
        { icon: <CheckCircle2 className="w-4 h-4" />, label: p("inbox_f2") },
        { icon: <CheckCircle2 className="w-4 h-4" />, label: p("inbox_f3") },
        { icon: <CheckCircle2 className="w-4 h-4" />, label: p("inbox_f4") },
      ],
      cta: p("inbox_cta"),
      ctaSecondary: null,
      ctaSecondaryHref: null,
    },
  ];

  const templates = [
    { label: "Landing Page", href: "https://aevia-landing.vercel.app", color: "from-violet-500/20 to-fuchsia-500/10", dot: "bg-violet-400", desc: ts("landing_desc") },
    { label: "E-Commerce", href: "https://aevia-ecommerce.vercel.app", color: "from-amber-500/20 to-orange-500/10", dot: "bg-amber-400", desc: ts("ecom_desc") },
    { label: "Site Vitrine", href: "https://aevia-launch.vercel.app", color: "from-emerald-500/20 to-teal-500/10", dot: "bg-emerald-400", desc: ts("vitrine_desc") },
  ];

  const whyItems = [
    { icon: <Zap className="w-5 h-5" />, title: w("fast_title"), desc: w("fast_desc"), color: "from-amber-500/20 to-orange-500/10", textColor: "text-amber-400" },
    { icon: <Code2 className="w-5 h-5" />, title: w("reliable_title"), desc: w("reliable_desc"), color: "from-violet-500/20 to-fuchsia-500/10", textColor: "text-violet-400" },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: w("simple_title"), desc: w("simple_desc"), color: "from-emerald-500/20 to-teal-500/10", textColor: "text-emerald-400" },
  ];

  return (
    <div className="min-h-screen" id="main-content">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute top-60 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-600/6 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              {h("badge")}
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              {h("title1")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                {h("title2")}
              </span>
              <br />{h("title3")}
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              {h("description")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
              >
                {h("cta_primary")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#produits"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                {h("cta_secondary")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { value: st("delivery_value"), label: st("delivery_label") },
              { value: st("audit_value"), label: st("audit_label") },
              { value: st("channels_value"), label: st("channels_label") },
              { value: st("ai_value"), label: st("ai_label") },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-zinc-500 font-medium">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Produits ─────────────────────────────────────────────────────── */}
      <section id="produits" className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950/70" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-violet-600/6 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              {p("section_title")}
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              {p("section_sub")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {products.map((product, i) => {
              const isLive = product.status === "live";
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`group relative flex flex-col h-full p-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300
                    ${isLive ? `hover:border-zinc-600 hover:-translate-y-1.5 hover:shadow-2xl ${product.glow}` : "opacity-80"}`}
                >
                  <div className={`absolute inset-0 opacity-0 ${isLive ? "group-hover:opacity-100" : ""} transition-opacity duration-300 bg-gradient-to-br ${product.accentFrom}/5 ${product.accentTo}/5 pointer-events-none`} />
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${product.accentFrom}/20 ${product.accentTo}/10 border border-white/5 text-white`}>
                      {product.icon}
                    </div>
                    {isLive ? (
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {p("available")}
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 ring-1 ring-amber-500/20 px-2.5 py-1 rounded-full">
                        {p("coming_soon")}
                      </span>
                    )}
                  </div>
                  <div className="mb-4 relative z-10">
                    <h3 className="text-white font-bold text-xl mb-1">{product.name}</h3>
                    <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${product.accentFrom} ${product.accentTo}`}>
                      {product.tagline}
                    </p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-7 relative z-10">
                    {product.features.map((feat) => (
                      <li key={feat.label} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${product.accentFrom} ${product.accentTo} shrink-0`}>
                          {feat.icon}
                        </span>
                        {feat.label}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {isLive ? (
                      <>
                        {product.name === "AeviaLaunch" ? (
                          <Link href="/templates" className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${product.accentFrom} ${product.accentTo} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}>
                            {product.cta} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <a href={product.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${product.accentFrom} ${product.accentTo} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}>
                            {product.cta} <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {product.ctaSecondary && product.ctaSecondaryHref && (
                          <a href={product.ctaSecondaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" /> {product.ctaSecondary}
                          </a>
                        )}
                      </>
                    ) : (
                      <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors">
                        {p("notify")}
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Templates aperçu ─────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 ring-1 ring-fuchsia-500/20 text-fuchsia-300 text-xs font-medium mb-5 w-fit">
                  <Layout className="w-3 h-3" />
                  {ts("badge")}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  {ts("title")}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {ts("desc")}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/templates" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity">
                    {ts("cta1")} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors">
                    {ts("cta2")}
                  </Link>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 bg-zinc-950/40 border-l border-zinc-800">
                {templates.map((t) => (
                  <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-gradient-to-r ${t.color} hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${t.dot} shrink-0`} />
                      <div>
                        <p className="text-white text-sm font-semibold">{t.label}</p>
                        <p className="text-zinc-500 text-xs">{t.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-300 transition-colors text-xs">
                      {ts("demo")} <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                ))}
                <div className="mt-1 p-4 rounded-xl border border-dashed border-zinc-700 text-center">
                  <p className="text-zinc-500 text-xs mb-1.5">{ts("custom_q")}</p>
                  <a href="https://aevia-launch.vercel.app" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors">
                    {ts("custom_link")} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi Aevia ────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              {w("title")}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border border-zinc-800 bg-gradient-to-br ${item.color}`}
              >
                <div className={`${item.textColor} mb-4`}>{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 pb-24">
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
                <h2 className="text-2xl font-bold text-white mb-3">{c("title")}</h2>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">{c("desc")}</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors">
                    {c("contact")} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="https://aevia-security.vercel.app" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors">
                    <Shield className="w-4 h-4" /> {c("audit")}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-800 px-6 py-10">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Aevia</span>
              <span>· {f("tagline")}</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/templates" className="hover:text-zinc-300 transition-colors">{f("templates")}</Link>
              <a href="https://aevia-security.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">{f("security")}</a>
              <Link href="/contact" className="hover:text-zinc-300 transition-colors">{f("contact")}</Link>
              <a href="https://linkedin.com/in/valentin-milliand" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4 hover:text-zinc-300 transition-colors" />
              </a>
              <a href="https://github.com/Maeglin10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="w-4 h-4 hover:text-zinc-300 transition-colors" />
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-800/60 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
            <span>{f("copyright")}</span>
            <div className="flex items-center gap-4">
              <Link href="/legal/privacy" className="hover:text-zinc-400 transition-colors">{f("privacy")}</Link>
              <Link href="/legal/terms" className="hover:text-zinc-400 transition-colors">{f("terms")}</Link>
              <Link href="/legal/cookies" className="hover:text-zinc-400 transition-colors">{f("cookies")}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
