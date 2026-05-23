"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Radio,
  Heart,
  Users,
  Zap,
  Check,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const PRODUCT_URL = "https://aevia-live.vercel.app";

interface FaqItemProps {
  q: string;
  a: string;
}

function FaqItem({ q, a }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((s) => !s)}
      className="w-full text-left p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-white font-semibold text-base">{q}</h3>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 shrink-0 mt-1 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <p className="text-zinc-400 text-sm leading-relaxed mt-3">{a}</p>}
    </button>
  );
}

export default function LiveProductPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const features = [
    {
      icon: <Radio className="w-5 h-5" />,
      title: "Stream HD ultra basse latence",
      desc: "Diffusion live HLS optimisée CDN Cloudflare. Latence sub-3 secondes, qualité adaptive 1080p, audio cristallin. Vos viewers ne décrochent pas.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Tips en temps réel",
      desc: "Vos viewers vous envoient des dons pendant le live — animation à l&apos;écran, message personnalisé, paiement Stripe instantané. Vous gardez 90% (commission 10%).",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Chat communautaire modéré",
      desc: "Chat live avec rôles (mods, VIP), emotes personnalisés, filtre auto anti-spam et insultes. Vos modérateurs gardent la main, vous gardez votre énergie pour le show.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Payouts hebdomadaires",
      desc: "Stripe Connect transfère vos tips chaque lundi sur votre compte. Statistiques de revenus, top supporters, exports comptables — toute la gestion est automatisée.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Créez votre chaîne créateur",
      desc: "Profil personnalisable, avatar, bio, liens sociaux. Vérification d&apos;identité requise pour activer les tips (KYC Stripe).",
    },
    {
      n: "02",
      title: "Lancez votre premier live",
      desc: "OBS, Streamlabs ou directement depuis le navigateur. Clé RTMP générée en 1 clic, configuration auto — vous êtes en ligne en 5 minutes.",
    },
    {
      n: "03",
      title: "Encaissez vos premiers tips",
      desc: "Vos viewers vous soutiennent en direct. Les revenus s&apos;accumulent dans votre dashboard, payés chaque semaine sur votre compte bancaire.",
    },
  ];

  const plans = [
    {
      name: "Créateur",
      price: "Gratuit",
      sub: "Pour démarrer",
      features: [
        "Streams illimités",
        "Tips activés (commission 10%)",
        "Chat de base + 3 mods",
        "Lives sauvegardés 7 jours",
      ],
      featured: false,
    },
    {
      name: "Partenaire",
      price: "12€",
      sub: "Le plus populaire",
      featured: true,
      features: [
        "Tout Créateur +",
        "Commission tips 7%",
        "Emotes personnalisés",
        "VOD illimités (archivage)",
      ],
    },
    {
      name: "Affilié",
      price: "29€",
      sub: "Pour les pros",
      features: [
        "Tout Partenaire +",
        "Commission tips 5%",
        "Multi-stream (Twitch / YT)",
        "Analytics avancés + API",
      ],
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "Quel pourcentage Aevia Live prend sur les tips ?",
      a: "Entre 5 et 10% selon votre plan. Vous touchez le reste, payé chaque lundi par virement Stripe Connect. Aucun abonnement obligatoire — vous pouvez démarrer gratuitement.",
    },
    {
      q: "Quel équipement faut-il pour streamer ?",
      a: "Un PC ou un smartphone, une connexion à 5 Mbps minimum. OBS Studio (gratuit) ou Streamlabs sont recommandés. Pour le mobile, notre app dédiée arrive Q3 2026.",
    },
    {
      q: "Comment se passe la modération du chat ?",
      a: "Vous nommez des modérateurs (jusqu&apos;à 3 en gratuit), un filtre IA bloque automatiquement insultes, spam et liens malveillants. Vous gardez le contrôle final.",
    },
    {
      q: "Y a-t-il des règles de contenu ?",
      a: "Pas de contenu illicite (CSAM, haine, harcèlement). Reste : musique sous licence libre uniquement (pour éviter les claims DMCA). Lives 18+ autorisés avec marquage explicite.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] pt-20">
      <section className="relative pt-16 pb-14 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-rose-600/12 blur-[120px]" />
          <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-pink-600/8 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 ring-1 ring-rose-500/20 text-rose-300 text-xs font-medium mb-6">
              <Radio className="w-3 h-3" />
              Produit Aevia · AeviaLive
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Diffusez en live,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                monétisez direct.
              </span>
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Plateforme de streaming live avec tips en temps réel pour créateurs. HLS ultra basse latence, chat modéré, payouts hebdo — sans commission cachée.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
              >
                Devenir créateur
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Voir les lives en direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              Une plateforme pensée pour les créateurs
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Vous streamez, on s&apos;occupe de l&apos;infrastructure, du paiement et de la modération.
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
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/10 border border-white/5 text-rose-300 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Comment démarrer</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">5 minutes, vous êtes en live.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400 font-bold text-3xl mb-3">
                  {s.n}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Pricing créateur</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Plus vous montez, moins la commission est élevée.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-7 rounded-2xl border ${
                  p.featured
                    ? "border-rose-500/40 bg-gradient-to-br from-rose-900/20 to-pink-900/10 ring-1 ring-rose-500/20"
                    : "border-zinc-800 bg-zinc-900/40"
                }`}
              >
                {p.featured && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-semibold mb-4">
                    Recommandé
                  </div>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-zinc-500 text-xs mb-4">{p.sub}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-white font-bold text-3xl">{p.price}</span>
                  {p.price !== "Gratuit" && <span className="text-zinc-500 text-sm">/mois</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
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
                      ? "bg-rose-600 hover:bg-rose-500 text-white"
                      : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
                  }`}
                >
                  Choisir {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center tracking-tight">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-zinc-800/60">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Votre communauté vous attend en direct.
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            Inscription gratuite. Premier live en 5 minutes, premier tip dans la semaine.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
            >
              Devenir créateur
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
            >
              Parler à l&apos;équipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
