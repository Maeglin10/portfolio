"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Shield,
  ShieldCheck,
  Lock,
  FileText,
  Gauge,
  Check,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const PRODUCT_URL = "https://aevia-security.vercel.app";

export default function SecurityProductPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";

  const features = [
    {
      icon: <Gauge className="w-5 h-5" />,
      title: "Audit complet en 60 secondes",
      desc: "Vous entrez votre URL, on scanne tout : HTTPS, OWASP Top 10, headers de sécurité, certificat SSL, performance, SEO. Score 0-100 instantané.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Standards OWASP & RGPD",
      desc: "Détection des vulnérabilités selon OWASP Top 10 (XSS, injections, headers manquants…) et vérification conformité RGPD essentielle.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Rapport PDF + recommandations IA",
      desc: "Rapport téléchargeable avec chaque faille détectée, son niveau de risque et un plan d'action rédigé par IA — clair, priorisé, actionnable.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Aucune installation, zéro friction",
      desc: "Pas d'agent à installer, pas d'accès serveur requis. Vous donnez l'URL, on audite depuis l'extérieur — exactement ce que verrait un attaquant.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Entrez l'URL de votre site",
      desc: "Aucun compte requis pour l'audit Free. Vous tapez votre domaine, on lance le scan immédiatement.",
    },
    {
      n: "02",
      title: "Notre IA scanne tout en 60s",
      desc: "Headers, SSL, vulnérabilités OWASP, performance, SEO. Le rapport est généré et scoré sur 100.",
    },
    {
      n: "03",
      title: "Vous corrigez ce qui compte",
      desc: "Téléchargez le PDF, suivez le plan d'action priorisé. Ou laissez-nous corriger pour vous (plan Pro).",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "0€",
      sub: "Pour tester rapidement",
      features: ["1 audit complet", "Score global 0-100", "Top 3 vulnérabilités", "Aucune carte requise"],
      featured: false,
      cta: "Auditer gratuitement",
    },
    {
      name: "Pro",
      price: "29€",
      sub: "Le plus populaire",
      features: ["Audits illimités", "Rapport PDF complet", "Recommandations IA détaillées", "Monitoring continu"],
      featured: true,
      cta: "Passer en Pro",
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      sub: "Multi-domaines",
      features: ["Tout Pro +", "Audits multi-domaines", "API & webhooks", "Support dédié & SLA"],
      featured: false,
      cta: "Nous contacter",
    },
  ];

  const faqs = [
    {
      q: "L'audit est-il vraiment gratuit ?",
      a: "Oui. Un audit complet par site, sans carte bancaire, sans inscription. Vous obtenez un score, les 3 vulnérabilités majeures et un aperçu du rapport. Pour le PDF complet et le monitoring, passez en Pro.",
    },
    {
      q: "Que détecte exactement l'audit ?",
      a: "OWASP Top 10 (XSS, CSRF, injections), headers de sécurité (HSTS, CSP, X-Frame-Options), configuration SSL/TLS, certificat, conformité RGPD basique, performance Lighthouse et SEO technique.",
    },
    {
      q: "Mes données sont-elles stockées ?",
      a: "Seul l'URL auditée et le résultat sont conservés (pour vous permettre de retrouver vos audits). Aucune donnée sensible n'est récupérée — l'audit est externe, comme une visite anonyme.",
    },
    {
      q: "Puis-je utiliser AeviaSecurity comme preuve auprès d'un client ?",
      a: "Oui — c'est le cas d'usage principal du plan Pro. Le rapport PDF avec score est conçu pour être partagé avec vos clients, partenaires ou investisseurs comme garantie de sécurité.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] pt-20">
      {/* Hero */}
      <section className="relative pt-16 pb-14 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-600/12 blur-[120px]" />
          <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-teal-600/8 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 text-xs font-medium mb-6">
              <Shield className="w-3 h-3" />
              Produit Aevia · AeviaSecurity
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Votre site est-il{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                vraiment sécurisé
              </span>
              <br />
              ? Vérifiez en 60s.
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Audit complet OWASP, HTTPS, performance et SEO — analysé par IA. Obtenez un score scoré, un rapport PDF et des recommandations actionnables. Aucune installation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
              >
                Auditer mon site gratuitement
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Voir le pricing
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
              Un audit pro, sans bullshit
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Pensé pour les TPE/PME qui veulent prouver leur sérieux avant un client important.
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

      {/* How it works */}
      <section className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Comment ça marche</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">Trois clics, soixante secondes.</p>
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

      {/* Pricing */}
      <section id="pricing" className="px-6 py-16 border-t border-zinc-800/60">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Pricing transparent</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Commencez gratuitement, passez en Pro quand vous voulez monitorer en continu.
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
                  {p.name === "Pro" && <span className="text-zinc-500 text-sm">/mois</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-zinc-300 text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                {p.name === "Enterprise" ? (
                  <Link
                    href={`/${locale}/contact`}
                    className="block text-center px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
                  >
                    {p.cta}
                  </Link>
                ) : (
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
                    {p.cta}
                  </a>
                )}
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
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-emerald-900/20 to-teal-900/10 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">60 secondes pour savoir.</h2>
              <p className="text-zinc-400 max-w-md mx-auto mb-8">
                Vous tapez l&apos;URL, vous obtenez le score. Gratuit, sans inscription, sans engagement.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white text-sm font-semibold transition-opacity"
                >
                  Lancer mon audit <ArrowRight className="w-4 h-4" />
                </a>
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
