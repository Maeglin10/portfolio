"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Inbox,
  Bot,
  Users,
  BarChart3,
  Check,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function InboxProductPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const features = [
    {
      icon: <Inbox className="w-5 h-5" />,
      title: "Une seule inbox, tous vos canaux",
      desc: "WhatsApp Business, Instagram DM, LinkedIn, email, webchat — toutes vos conversations clients dans une interface unique. Fini les 6 apps ouvertes en parallèle.",
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "IA conversationnelle entraînée sur vous",
      desc: "Vos agents IA répondent dans votre ton, en suivant vos règles métier. Pilotés par n8n et Claude — vous gardez le contrôle, ils traitent le volume.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Multi-tenant pour agences & équipes",
      desc: "Plusieurs marques, plusieurs équipes, permissions granulaires. Chaque compte est isolé — parfait pour les agences qui gèrent plusieurs clients.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Scoring leads & analytics temps réel",
      desc: "Détection automatique des prospects chauds, alertes Slack, dashboard temps réel. Vous voyez d'un coup d'oeil qui demande quoi et qui converti.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "On connecte vos canaux",
      desc: "WhatsApp Business, Instagram, email, webchat. Setup en 30 minutes — on s'occupe de tout côté API.",
    },
    {
      n: "02",
      title: "On entraîne votre IA",
      desc: "Vous nous donnez vos FAQ, votre ton, vos process. On configure les agents n8n et on teste avant prod.",
    },
    {
      n: "03",
      title: "Vous gagnez 10h par semaine",
      desc: "L'IA répond aux questions simples, qualifie les leads, escalade les cas importants. Vous traitez seulement ce qui compte.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "Gratuit",
      sub: "Pour tester sans risque",
      features: [
        "100 messages / mois",
        "1 canal au choix",
        "1 utilisateur",
        "Historique 30 jours",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "79€",
      sub: "Pour les TPE qui décollent",
      features: [
        "2 000 messages / mois",
        "3 canaux + IA Claude Haiku",
        "Jusqu'à 3 utilisateurs",
        "Workflows n8n (5 inclus)",
      ],
      featured: true,
    },
    {
      name: "Business",
      price: "249€",
      sub: "Pour les équipes en croissance",
      features: [
        "Messages illimités",
        "Tous canaux + IA Sonnet 4.5",
        "Utilisateurs illimités",
        "SLA 99.9% + support dédié",
      ],
      featured: false,
    },
    {
      name: "Agency",
      price: "599€",
      sub: "Multi-marques en white-label",
      features: [
        "Tout Business +",
        "Multi-tenant illimité",
        "White-label complet",
        "Account manager dédié",
      ],
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "AeviaInbox est en beta — qu'est-ce que ça veut dire concrètement ?",
      a: "Le produit est fonctionnel et utilisé en interne sur des comptes pilotes. Les early users bénéficient d'un tarif préférentiel et d'un accompagnement direct. Lancement public courant 2026.",
    },
    {
      q: "Mes données clients sont-elles isolées des autres comptes ?",
      a: "Oui. Architecture multi-tenant stricte — chaque accountId scope l'ensemble des requêtes. PostgreSQL chiffré, hébergement Render UE, RGPD compliant.",
    },
    {
      q: "Quels canaux sont supportés ?",
      a: "WhatsApp Business (Cloud API), Instagram DM (Meta Graph API), LinkedIn (via Unipile), email (Gmail/IMAP), webchat embarqué. D'autres canaux à la demande.",
    },
    {
      q: "L'IA peut-elle vraiment répondre seule ?",
      a: "Oui, sur les questions répétitives (horaires, prix, livraison, FAQ). Pour les cas complexes, elle escalade vers vous avec un résumé du contexte. Vous gardez la main à 100%.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] pt-20">
      {/* Hero */}
      <section className="relative pt-16 pb-14 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-600/12 blur-[120px]" />
          <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Tous vos clients,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                une seule inbox
              </span>
              <br />
              et une IA qui répond.
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              WhatsApp, Instagram, LinkedIn, email, webchat — centralisés. Vos agents IA qualifient, répondent et vous alertent sur les leads chauds. Pour les agences et e-commerces qui croulent sous les messages.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
              >
                Rejoindre la beta
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                Voir le pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              Un CRM conversationnel construit pour 2026
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Pensé pour les équipes qui traitent des centaines de conversations par jour, sur tous les canaux.
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
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/5 text-cyan-300 mb-4">
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
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">Trois étapes pour automatiser votre support client.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold text-3xl mb-3">
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
      <section id="pricing" className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Pricing transparent</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Tarif fixe au mois, utilisateurs illimités sur Business+. Sans engagement, résiliable en 1 clic.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-6 rounded-2xl border flex flex-col ${
                  p.featured
                    ? "border-cyan-500/40 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 ring-1 ring-cyan-500/20"
                    : "border-zinc-800 bg-zinc-900/40"
                }`}
              >
                {p.featured && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-semibold mb-4">
                    Recommandé
                  </div>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-zinc-500 text-xs mb-4">{p.sub}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-white font-bold text-3xl">{p.price}</span>
                  {p.price !== "Gratuit" && <span className="text-zinc-500 text-sm">/mois</span>}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://aevia-inbox.vercel.app/fr/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    p.featured
                      ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                      : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
                  }`}
                >
                  {p.price === "Gratuit" ? "Démarrer gratuitement" : `Choisir ${p.name}`}
                </a>
              </div>
            ))}
          </div>
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
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Envie de voir la démo ?</h2>
              <p className="text-zinc-400 max-w-md mx-auto mb-8">
                30 minutes pour vous montrer comment l&apos;inbox unifie vos canaux et combien d&apos;heures vous gagnez par semaine.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
                >
                  Réserver une démo <ArrowRight className="w-4 h-4" />
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
