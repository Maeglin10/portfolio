"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Monitor, ShoppingBag, Globe, Sparkles, Lock } from "lucide-react";

const templates = [
  {
    id: "landing",
    name: "Landing Page",
    tagline: "Convertir des visiteurs en clients",
    description: "Hero animé, section features, témoignages, pricing et formulaire de contact. Optimisée conversion et SEO.",
    url: "https://aevia-launch.vercel.app/demo/landing",
    accentFrom: "from-violet-500",
    accentTo: "to-fuchsia-500",
    icon: <Sparkles className="w-5 h-5" />,
    dot: "bg-violet-400",
    features: ["Hero section animé", "Features & bénéfices", "Témoignages", "Tableau de prix", "Formulaire contact"],
    useCases: ["SaaS", "Agence", "Startup", "App"],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    tagline: "Vendre des produits en ligne",
    description: "Boutique complète avec catalogue produits, panier, checkout et confirmation de commande. Prêt pour Stripe.",
    url: "https://aevia-launch.vercel.app/demo/ecommerce",
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
    icon: <ShoppingBag className="w-5 h-5" />,
    dot: "bg-amber-400",
    features: ["Catalogue & filtres", "Panier & checkout", "Confirmation commande", "Page produit détaillée", "Stripe-ready"],
    useCases: ["Boutique", "Mode", "Produits physiques", "Digital"],
  },
  {
    id: "website",
    name: "Site Vitrine",
    tagline: "Une présence pro sans friction",
    description: "Site corporate clean pour les entreprises de service. Accueil, à propos, services, blog et contact.",
    url: "https://aevia-launch.vercel.app/demo/vitrine",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    icon: <Globe className="w-5 h-5" />,
    dot: "bg-emerald-400",
    features: ["Accueil + À propos", "Page services", "Blog / Actualités", "Contact & réservation", "Multi-langue"],
    useCases: ["Consultant", "Agence", "Restaurant", "Commerce local"],
  },
];

const PREVIEW_THEMES = [
  { id: "landing",     label: "Landing Page",       category: "Marketing",   icon: "🚀", premium: false },
  { id: "saas",        label: "SaaS Product",        category: "Tech",        icon: "⚡", premium: false },
  { id: "agency",      label: "Creative Agency",     category: "Agency",      icon: "🎨", premium: false },
  { id: "ecommerce",   label: "E-commerce Store",    category: "Commerce",    icon: "🛍️", premium: false },
  { id: "restaurant",  label: "Restaurant & Food",   category: "Hospitality", icon: "🍽️", premium: false },
  { id: "portfolio",   label: "Portfolio",            category: "Personal",    icon: "💼", premium: false },
  { id: "luxury",      label: "Luxury & Couture",    category: "Premium",     icon: "💎", premium: true },
  { id: "brutalist",   label: "Brutalist Editorial", category: "Premium",     icon: "◼", premium: true },
  { id: "aurora",      label: "Aurora & Wellness",   category: "Premium",     icon: "✦", premium: true },
  { id: "3d-tech",     label: "3D Tech & Web3",      category: "Premium",     icon: "⬡", premium: true },
  { id: "magazine",    label: "Magazine & Editorial",category: "Premium",     icon: "📰", premium: true },
  { id: "minimal-pro", label: "Minimal Pro",         category: "Premium",     icon: "—", premium: true },
];

const CATEGORY_ACCENT: Record<string, string> = {
  Marketing: "#7c3aed", Tech: "#2563eb", Agency: "#d97706", Commerce: "#dc2626",
  Hospitality: "#d97706", Personal: "#0891b2", Premium: "#c9a96e",
};

function TemplatePanel({ template, isActive }: { template: typeof templates[number]; isActive: boolean }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  return (
    <div className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"}`}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-2 flex flex-col">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${template.accentFrom}/10 ${template.accentTo}/10 ring-1 ring-white/10 mb-5 w-fit`}>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${template.accentFrom} ${template.accentTo}`}>{template.icon}</span>
            <span className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${template.accentFrom} ${template.accentTo}`}>{template.name}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{template.tagline}</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">{template.description}</p>
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Inclus</p>
            <div className="space-y-2">
              {template.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${template.accentFrom} ${template.accentTo} shrink-0`} />
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-7">
            {template.useCases.map((u) => (
              <span key={u} className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50">{u}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Link href="/contact" className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${template.accentFrom} ${template.accentTo} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}>
              Je veux ce site <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={template.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4" /> Plein écran
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-950" style={{ aspectRatio: "16/10" }}>
            <div className="flex items-center gap-1.5 px-3 h-8 bg-zinc-900 border-b border-zinc-800 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" /><div className="w-2.5 h-2.5 rounded-full bg-zinc-700" /><div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="flex-1 mx-3 h-5 bg-zinc-800 rounded-full flex items-center justify-center">
                <span className="text-[10px] text-zinc-500 font-mono truncate px-2">{template.url}</span>
              </div>
              <Monitor className="w-3.5 h-3.5 text-zinc-600" />
            </div>
            <div className="relative" style={{ height: "calc(100% - 32px)" }}>
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-950 z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${template.accentFrom}/20 ${template.accentTo}/10 border border-white/5 text-white`}>{template.icon}</div>
                  <p className="text-white text-sm font-semibold">Chargement de la démo...</p>
                </div>
              )}
              <iframe src={template.url} className="w-full h-full border-0" title={`${template.name} preview`} onLoad={() => setIframeLoaded(true)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TemplatesPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-[#09090b] pt-20">

      {/* Hero */}
      <section className="relative pt-16 pb-10 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[100px]" />
          <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-fuchsia-600/6 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-6xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium mb-6">
              <Sparkles className="w-3 h-3" />
              Sites web sur mesure — livraison 7 jours
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              De quel type de site<br />avez-vous besoin ?
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Choisissez votre template, visualisez la démo live, et démarrez votre projet en quelques clics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 p-1.5 bg-zinc-900 rounded-2xl border border-zinc-800 w-fit mx-auto">
            {templates.map((t, i) => (
              <button key={t.id} onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${active === i ? "bg-zinc-800 text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                <span className={`w-2 h-2 rounded-full ${t.dot} ${active === i ? "opacity-100" : "opacity-40"}`} />
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Template panels */}
      <section className="px-6 py-8 pb-16">
        <div className="mx-auto max-w-6xl relative">
          {templates.map((t, i) => <TemplatePanel key={t.id} template={t} isActive={active === i} />)}
        </div>
      </section>

      {/* Themes section */}
      <section className="px-6 pb-10 border-t border-zinc-800/60 pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 ring-1 ring-amber-500/20 text-amber-300 text-xs font-medium mb-4">
                <Sparkles className="w-3 h-3" />
                21 thèmes — gratuits &amp; premium
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Explorez nos thèmes</h2>
              <p className="text-zinc-400 text-sm mt-1">Chaque thème est un design system complet, personnalisé avec votre contenu IA.</p>
            </div>
            <a href="https://aevia-launch.vercel.app/themes" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 ring-1 ring-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4" /> Voir les 21 thèmes <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Gratuit</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PREVIEW_THEMES.filter(t => !t.premium).map((theme) => {
                const accent = CATEGORY_ACCENT[theme.category] ?? "#7c3aed";
                return (
                  <a key={theme.id} href={`https://aevia-launch.vercel.app/themes/${theme.id}`} target="_blank" rel="noopener noreferrer"
                    className="group relative rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
                    style={{ background: "linear-gradient(135deg,#0f0f11,#13131a)" }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}20 0%, transparent 70%)` }} />
                    <div className="p-4 flex flex-col gap-2 relative">
                      <span className="text-2xl">{theme.icon}</span>
                      <div>
                        <p className="text-white text-xs font-semibold leading-tight">{theme.label}</p>
                        <p className="text-[10px] mt-0.5 font-medium" style={{ color: accent }}>{theme.category}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#c9a96e" }}>Premium</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PREVIEW_THEMES.filter(t => t.premium).map((theme) => (
                <a key={theme.id} href={`https://aevia-launch.vercel.app/themes/${theme.id}`} target="_blank" rel="noopener noreferrer"
                  className="group relative rounded-xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
                  style={{ background: "linear-gradient(135deg,#0f0f0f,#1a1208)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, #c9a96e18 0%, transparent 70%)" }} />
                  <div className="absolute top-2 right-2"><Lock className="w-3 h-3" style={{ color: "#c9a96e" }} /></div>
                  <div className="p-4 flex flex-col gap-2 relative">
                    <span className="text-2xl">{theme.icon}</span>
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">{theme.label}</p>
                      <p className="text-[10px] mt-0.5 font-medium" style={{ color: "#c9a96e" }}>Premium</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 p-10 text-center">
            <h3 className="text-white font-bold text-2xl mb-3">Prêt à lancer votre site ?</h3>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">Notre équipe livre votre site en 7 jours. Contenu IA inclus.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
                Démarrer mon projet <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://aevia-launch.vercel.app/themes" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-semibold transition-colors"
              >
                <Sparkles className="w-4 h-4" /> Explorer les thèmes
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
