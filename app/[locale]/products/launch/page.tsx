"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layout,
  Bot,
  Rocket,
  ShieldCheck,
  Check,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const PRODUCT_URL = "https://aevia-launch.vercel.app";

export default function LaunchProductPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const features = [
    {
      icon: <Layout className="w-5 h-5" />,
      title: "3 templates pro, prêts à déployer",
      desc: "Landing page conversion, e-commerce Stripe-ready ou site vitrine corporate. Chaque template est un design system complet — vous personnalisez votre contenu, on déploie.",
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "Builder IA — 21 thèmes",
      desc: "Décrivez votre activité en une phrase, l'IA génère votre site complet en 60 secondes. Textes, images, structure — tout est personnalisé pour votre marque.",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Livraison en 2h à 7 jours",
      desc: "Mise en ligne ultra-rapide. Nom de domaine, certificat SSL, hébergement Vercel — tout est configuré. Vous n'avez rien à faire côté technique.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Performance & SEO inclus",
      desc: "Next.js 16, Lighthouse 95+, optimisé mobile-first. Audit sécurité Aevia inclus. Votre site est rapide, accessible et bien référencé dès le jour 1.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Choisissez votre template",
      desc: "Landing, e-commerce ou vitrine. Visualisez chaque démo live avant de décider — pas de surprise.",
    },
    {
      n: "02",
      title: "Personnalisez votre contenu",
      desc: "Envoyez vos textes, logos, photos — ou laissez le builder IA générer le contenu complet en 60 secondes.",
    },
    {
      n: "03",
      title: "Mise en ligne en 2h à 7 jours",
      desc: "On configure le domaine, on déploie, on teste. Vous recevez l'URL prête à partager avec vos clients.",
    },
  ];

  const plans = [
    {
      name: "Essentiel",
      price: "599€",
      sub: "Site vitrine 5 pages",
      features: ["Template au choix", "Nom de domaine 1 an", "Hébergement inclus", "Livraison 7 jours"],
      featured: false,
    },
    {
      name: "Pro",
      price: "899€",
      sub: "Le plus populaire",
      features: ["Tout Essentiel +", "Builder IA 21 thèmes", "SEO multi-langue", "Livraison 5 jours"],
      featured: true,
    },
    {
      name: "Premium",
      price: "1499€",
      sub: "Site sur mesure",
      features: ["Tout Pro +", "Design 100% custom", "E-commerce Stripe", "Livraison 48h prioritaire"],
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "En combien de temps mon site sera-t-il en ligne ?",
      a: "Entre 2 heures (Premium prioritaire) et 7 jours (Essentiel). La majorité des projets Pro sont livrés en 3 à 5 jours ouvrés après réception de votre contenu.",
    },
    {
      q: "Qui rédige le contenu de mon site ?",
      a: "Vous, ou notre builder IA. Vous décrivez votre activité, l'IA génère textes, structure et suggestions de design — vous validez et on déploie. Vous gardez la main à 100%.",
    },
    {
      q: "Et après la livraison ? Puis-je modifier moi-même ?",
      a: "Oui. Le site est sur votre compte. Maintenance optionnelle à 59€/mois (mises à jour, backups, support prioritaire) si vous préférez ne pas vous en occuper.",
    },
    {
      q: "À qui s'adresse AeviaLaunch ?",
      a: "Indépendants, PME, restaurants, agences, e-commerces qui veulent une présence pro sans payer une agence 5000€ ni passer 3 mois sur un projet.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] pt-20">
      {/* Hero */}
      <section className="relative pt-16 pb-14 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/12 blur-[120px]" />
          <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-fuchsia-600/8 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium mb-6">
              <Sparkles className="w-3 h-3" />
              Produit Aevia · AeviaLaunch
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Votre site web pro,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                en 2 heures
              </span>
              <br />
              pas en 3 mois.
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Choisissez parmi 3 templates pros ou laissez l&apos;IA générer votre site sur mesure. Design custom, hébergement Vercel, SEO inclus — vous démarrez aujourd&apos;hui.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
              >
                Démarrer mon site
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href={`/${locale}/templates`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Voir les démos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              Tout ce qu&apos;il faut pour un site qui convertit
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Pas de bricolage, pas de plugin foireux. Un produit cohérent, conçu pour les entreprises sérieuses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 border border-white/5 text-violet-300 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Comment ça marche</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">Trois étapes, zéro friction.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-bold text-3xl mb-3">
                  {s.n}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Pricing simple</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Pas d&apos;abonnement caché. Vous payez votre site, il est à vous.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-7 rounded-2xl border ${
                  p.featured
                    ? "border-violet-500/40 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 ring-1 ring-violet-500/20"
                    : "border-zinc-800 bg-zinc-900/40"
                }`}
              >
                {p.featured && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 text-[11px] font-semibold mb-4">
                    Recommandé
                  </div>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-zinc-500 text-xs mb-4">{p.sub}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-white font-bold text-3xl">{p.price}</span>
                  <span className="text-zinc-500 text-sm">une fois</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    p.featured
                      ? "bg-violet-600 hover:bg-violet-500 text-white"
                      : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
                  }`}
                >
                  Choisir {p.name}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-500 text-sm mt-6">
            Maintenance optionnelle : <span className="text-zinc-300 font-semibold">59€/mois</span> · mises à jour, backups & support prioritaire.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Questions courantes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/10 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Prêt à passer en ligne ?</h2>
              <p className="text-zinc-400 max-w-md mx-auto mb-8">
                Site livré en moins d&apos;une semaine. Vous gardez la main, on s&apos;occupe de la technique.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
                >
                  Démarrer mon site <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
                >
                  Parler à un humain
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-zinc-900/60 transition-colors"
      >
        <span className="text-white font-semibold text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1 text-zinc-400 text-sm leading-relaxed">{a}</div>
      )}
    </div>
  );
}
