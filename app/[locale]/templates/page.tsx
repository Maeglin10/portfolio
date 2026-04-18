"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Monitor, ShoppingBag, Globe, Sparkles, MessageSquare } from "lucide-react";

// ─── Template Data ────────────────────────────────────────────────────────────

const templates = [
  {
    id: "landing",
    name: "Landing Page",
    tagline: "Convert visitors into customers",
    description:
      "High-converting landing page with animated hero, feature sections, testimonials, pricing table, and contact form. Fully responsive and optimized for SEO.",
    url: "https://aevia-landing.vercel.app",
    accentFrom: "from-violet-500",
    accentTo: "to-fuchsia-500",
    glowColor: "shadow-violet-500/20",
    borderHover: "hover:border-violet-500/40",
    icon: <Sparkles className="w-5 h-5" />,
    features: [
      "Animated hero section",
      "Features & benefits",
      "Testimonials carousel",
      "Pricing table",
      "Contact form",
      "SEO optimized",
    ],
    useCases: ["SaaS product", "Agency", "Startup", "App launch"],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    tagline: "Sell products, grow revenue",
    description:
      "Full-featured online store with product catalog, cart, checkout flow, order confirmation, and an elegant product detail page. Ready to connect to any payment provider.",
    url: "https://aevia-ecommerce.vercel.app",
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    glowColor: "shadow-amber-500/20",
    borderHover: "hover:border-amber-500/40",
    icon: <ShoppingBag className="w-5 h-5" />,
    features: [
      "Product catalog & filters",
      "Cart & checkout flow",
      "Order confirmation",
      "Product detail page",
      "Mobile-first design",
      "Stripe-ready",
    ],
    useCases: ["Boutique", "Fashion", "Physical goods", "Digital products"],
  },
  {
    id: "website",
    name: "Vitrine",
    tagline: "Professional presence, zero friction",
    description:
      "Clean corporate website for service-based businesses. Homepage, about, services, blog, and contact page. Perfect for consultants, agencies, and local businesses.",
    url: "https://aevia-website.vercel.app",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    glowColor: "shadow-emerald-500/20",
    borderHover: "hover:border-emerald-500/40",
    icon: <Globe className="w-5 h-5" />,
    features: [
      "Homepage + About",
      "Services page",
      "Blog / News",
      "Contact & booking",
      "Map integration",
      "Multi-language ready",
    ],
    useCases: ["Consultant", "Agency", "Restaurant", "Local business"],
  },
];

// ─── Template Card + Preview ──────────────────────────────────────────────────

function TemplateShowcase({ template, index }: { template: typeof templates[number]; index: number }) {
  const [previewActive, setPreviewActive] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
    >
      {/* Info panel */}
      <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${template.accentFrom}/10 ${template.accentTo}/10 ring-1 ring-white/10 mb-5`}>
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${template.accentFrom} ${template.accentTo}`}>
            {template.icon}
          </span>
          <span className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${template.accentFrom} ${template.accentTo}`}>
            {template.name}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          {template.tagline}
        </h2>
        <p className="text-zinc-400 text-base leading-relaxed mb-6">
          {template.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
            Inclus
          </h3>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {template.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${template.accentFrom} ${template.accentTo} shrink-0`} />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Use cases */}
        <div className="flex flex-wrap gap-2 mb-8">
          {template.useCases.map((u) => (
            <span key={u} className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50">
              {u}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${template.accentFrom} ${template.accentTo} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}
          >
            Je veux ce site
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={template.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ouvrir en plein écran
          </a>
        </div>
      </div>

      {/* Preview panel */}
      <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
        <div
          className={`relative rounded-2xl border border-zinc-800 ${template.borderHover} transition-all duration-300 overflow-hidden bg-zinc-950 group`}
          style={{ aspectRatio: "16/10" }}
        >
          {/* Preview header bar */}
          <div className="flex items-center gap-1.5 px-3 h-8 bg-zinc-900 border-b border-zinc-800">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="flex-1 mx-3 h-4 bg-zinc-800 rounded-full text-[10px] text-zinc-500 flex items-center justify-center font-mono overflow-hidden">
              {template.url}
            </div>
            <Monitor className="w-3.5 h-3.5 text-zinc-600" />
          </div>

          {/* iframe or click-to-load */}
          {previewActive ? (
            <iframe
              src={template.url}
              className="w-full h-full border-0"
              style={{ height: "calc(100% - 32px)" }}
              title={`${template.name} preview`}
              loading="lazy"
            />
          ) : (
            <button
              onClick={() => setPreviewActive(true)}
              className="absolute inset-0 top-8 flex flex-col items-center justify-center gap-3 bg-zinc-950 hover:bg-zinc-900 transition-colors cursor-pointer w-full"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${template.accentFrom}/20 ${template.accentTo}/10 border border-white/5 text-white`}>
                {template.icon}
              </div>
              <div className="text-center">
                <p className="text-white text-sm font-semibold mb-1">Charger la démo</p>
                <p className="text-zinc-500 text-xs">Cliquez pour prévisualiser le site</p>
              </div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${template.accentFrom} ${template.accentTo} text-white text-xs font-semibold`}>
                Voir la démo
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TemplatesPage() {
  return (
    <div className="min-h-screen" id="main-content">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-violet-600/8 blur-[120px]" />
          <div className="absolute top-60 -left-40 w-[500px] h-[500px] rounded-full bg-fuchsia-600/6 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium mb-8">
              <Sparkles className="w-3 h-3" />
              Sites web professionnels
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Votre site web,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                livré en 7 jours
              </span>
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              3 templates production-ready — landing page, e-commerce, vitrine. Customisés à votre image et déployés clé en main.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
              >
                Démarrer mon projet
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#templates"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                Voir les démos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { value: "7 jours", label: "Délai de livraison" },
              { value: "3", label: "Templates disponibles" },
              { value: "100%", label: "Mobile-first" },
              { value: "∞", label: "Révisions incluses" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-zinc-500 font-medium">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Templates ────────────────────────────────────────────────────── */}
      <section id="templates" className="px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-24">
          {templates.map((t, i) => (
            <TemplateShowcase key={t.id} template={t} index={i} />
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
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
              Comment ça marche
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              De la demande à la mise en ligne, un processus simple et rapide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "On discute",
                desc: "Vous me partagez votre activité, vos couleurs, vos textes. 30 minutes suffisent.",
                color: "from-violet-500/20 to-fuchsia-500/10",
              },
              {
                step: "02",
                title: "Je développe",
                desc: "Je customise le template à votre image, j'intègre votre contenu et optimise tout.",
                color: "from-amber-500/20 to-orange-500/10",
              },
              {
                step: "03",
                title: "Vous validez",
                desc: "Vous recevez votre site prêt à lancer. Je déploie et vous remets toutes les clés.",
                color: "from-emerald-500/20 to-teal-500/10",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border border-zinc-800 bg-gradient-to-br ${s.color}`}
              >
                <div className="text-xs font-bold text-zinc-500 mb-3 font-mono">{s.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
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
                <h2 className="text-2xl font-bold text-white mb-3">
                  Prêt à lancer votre site ?
                </h2>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">
                  Choisissez le template qui vous correspond et dites-moi en quoi consiste votre activité. Je m&apos;occupe du reste.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
                  >
                    Démarrer maintenant
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Voir tous les services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
