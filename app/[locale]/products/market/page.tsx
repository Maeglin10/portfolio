"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Store,
  ShieldCheck,
  Wallet,
  Star,
  Check,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const PRODUCT_URL = "https://aevia-market.vercel.app";

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

export default function MarketProductPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const features = [
    {
      icon: <Store className="w-5 h-5" />,
      title: "Marketplace de services pros",
      desc: "Mettez en ligne vos services, gérez vos clients, fixez vos tarifs. Vitrine personnalisable, profil vérifié, avis clients intégrés — tout est prêt.",
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "Paiement sécurisé Stripe Connect",
      desc: "Les fonds atterrissent directement chez vous. Commission transparente, payouts hebdomadaires, escrow optionnel pour les missions complexes.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Gestion des litiges intégrée",
      desc: "Système de signalement et résolution de conflits encadré. Communication centralisée, historique des échanges archivé, médiation en cas de blocage.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Réputation et social proof",
      desc: "Avis vérifiés, badges de qualité, statistiques publiques. Les prestataires sérieux remontent dans le classement, vous attirez de meilleurs clients.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Créez votre profil prestataire",
      desc: "Ajoutez vos services, photos, tarifs et conditions. Vérifiez votre identité — le badge Aevia Market rassure vos futurs clients.",
    },
    {
      n: "02",
      title: "Recevez vos premières commandes",
      desc: "Les clients vous contactent directement. Acceptez, échangez, livrez. Le paiement est sécurisé par escrow tant que la mission n’est pas validée.",
    },
    {
      n: "03",
      title: "Payouts automatiques chaque semaine",
      desc: "Stripe Connect transfère vos gains sur votre compte chaque lundi. Statistiques de revenus, exports comptables, factures auto-générées.",
    },
  ];

  const plans = [
    {
      name: "Découverte",
      price: "Gratuit",
      sub: "Commencer sans risque",
      features: [
        "Jusqu’à 5 services en ligne",
        "Commission 10% par vente",
        "Badge non vérifié",
        "Support communautaire",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "19€",
      sub: "Le plus populaire",
      featured: true,
      features: [
        "Services illimités",
        "Commission réduite 6%",
        "Badge vérifié Aevia",
        "Stats avancées + exports",
      ],
    },
    {
      name: "Business",
      price: "49€",
      sub: "Pour les équipes",
      features: [
        "Tout Pro +",
        "Commission 4%",
        "Multi-vendeurs (jusqu’à 5)",
        "Support prioritaire dédié",
      ],
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "Quelle commission est prélevée par Aevia Market ?",
      a: "Entre 4 et 10% selon votre plan. Aucun frais caché, aucun abonnement obligatoire — vous pouvez commencer gratuitement et upgrader quand vos revenus le justifient.",
    },
    {
      q: "Combien de temps avant de recevoir mes paiements ?",
      a: "Les payouts Stripe Connect sont automatiques chaque lundi (rolling weekly), avec un délai de validation de 48h après livraison de la mission. Possibilité d’instant payout (frais 1.5%).",
    },
    {
      q: "Comment gérer un client mécontent ou un litige ?",
      a: "Le système de litiges intégré vous permet d’ouvrir une médiation. Toute la conversation, les fichiers et la transaction sont archivés. Si nécessaire, notre équipe tranche en moins de 72h.",
    },
    {
      q: "À qui s’adresse Aevia Market ?",
      a: "Freelances et indépendants (consultants, devs, designers, coachs, photographes…) qui veulent vendre leurs services sans se construire un site, gérer un Stripe ou bidouiller un Calendly.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] pt-20">
      <section className="relative pt-16 pb-14 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-600/12 blur-[120px]" />
          <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-teal-600/8 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 text-xs font-medium mb-6">
              <Store className="w-3 h-3" />
              Produit Aevia · AeviaMarket
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Vendez vos services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                sans intermédiaire,
              </span>
              <br />
              avec un cadre pro.
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Marketplace de services pour freelances et indépendants. Vitrine, paiement Stripe, gestion des litiges, payouts hebdo — vous vous concentrez sur votre métier, on gère le reste.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
              >
                Créer mon profil
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Voir la marketplace
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              Une infrastructure complète, prête à l&apos;emploi
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Tout ce qu&apos;il faut pour vendre vos services sereinement, sans dépenser en outils SaaS.
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
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-white/5 text-emerald-300 mb-4">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Comment ça marche</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">Trois étapes, votre business démarre.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-bold text-3xl mb-3">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Pricing transparent</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Démarrez gratuitement, payez quand vous gagnez.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-7 rounded-2xl border ${
                  p.featured
                    ? "border-emerald-500/40 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 ring-1 ring-emerald-500/20"
                    : "border-zinc-800 bg-zinc-900/40"
                }`}
              >
                {p.featured && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold mb-4">
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
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
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
            Prêt à transformer vos compétences en revenus ?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            Inscription gratuite. Première mission encaissée en moins de 7 jours en moyenne.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
            >
              Créer mon compte
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
