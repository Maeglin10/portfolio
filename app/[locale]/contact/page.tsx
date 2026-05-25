"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, MessageSquare, ArrowRight, CheckCircle2, Calendar } from "lucide-react";

// Cal.com link — to update once Aevia booking page is created
const CAL_BOOKING_URL = process.env.NEXT_PUBLIC_CAL_URL ?? "https://cal.com/aevia/30min";

type ContactLocale = "fr" | "en" | "es" | "de" | "pt";

const CONTACT_T: Record<ContactLocale, {
  badge: string; h1: string; subtitle: string;
  name: string; email: string; subject: string; message: string;
  name_ph: string; email_ph: string; subject_ph: string; message_ph: string;
  send: string; sending: string; sent_title: string; sent_sub: string;
  error: string; required: string;
  card1_title: string; card1_sub: string;
  card2_title: string; card2_sub: string;
}> = {
  fr: {
    badge: "Contact", h1: "Parlons de votre projet", subtitle: "Une question, une demande de devis ou juste envie d'échanger — on répond sous 24h.",
    name: "Nom", email: "Email", subject: "Sujet", message: "Message",
    name_ph: "Jean Dupont", email_ph: "jean@example.com", subject_ph: "Je veux un site web", message_ph: "Décrivez votre projet...",
    send: "Envoyer", sending: "Envoi en cours...", sent_title: "Message envoyé !", sent_sub: "On revient vers vous sous 24h.",
    error: "Une erreur est survenue. Réessayez.", required: "Champ requis",
    card1_title: "Réponse rapide", card1_sub: "Sous 24h en jours ouvrés",
    card2_title: "Appel découverte", card2_sub: "30 min pour cadrer votre projet",
  },
  en: {
    badge: "Contact", h1: "Let's talk about your project", subtitle: "A question, a quote request, or just want to chat — we reply within 24h.",
    name: "Name", email: "Email", subject: "Subject", message: "Message",
    name_ph: "John Doe", email_ph: "john@example.com", subject_ph: "I need a website", message_ph: "Describe your project...",
    send: "Send message", sending: "Sending...", sent_title: "Message sent!", sent_sub: "We'll get back to you within 24h.",
    error: "Something went wrong. Please try again.", required: "Required",
    card1_title: "Fast reply", card1_sub: "Within 24h on business days",
    card2_title: "Discovery call", card2_sub: "30 min to scope your project",
  },
  es: {
    badge: "Contacto", h1: "Hablemos de tu proyecto", subtitle: "Una pregunta, una solicitud de presupuesto o simplemente charlar — respondemos en 24h.",
    name: "Nombre", email: "Email", subject: "Asunto", message: "Mensaje",
    name_ph: "Juan García", email_ph: "juan@ejemplo.com", subject_ph: "Necesito un sitio web", message_ph: "Describe tu proyecto...",
    send: "Enviar", sending: "Enviando...", sent_title: "¡Mensaje enviado!", sent_sub: "Te responderemos en 24h.",
    error: "Algo salió mal. Por favor inténtalo de nuevo.", required: "Requerido",
    card1_title: "Respuesta rápida", card1_sub: "En 24h en días hábiles",
    card2_title: "Llamada de descubrimiento", card2_sub: "30 min para definir tu proyecto",
  },
  de: {
    badge: "Kontakt", h1: "Lassen Sie uns über Ihr Projekt sprechen", subtitle: "Eine Frage, eine Angebotsanfrage oder einfach ein Gespräch — wir antworten innerhalb von 24h.",
    name: "Name", email: "E-Mail", subject: "Betreff", message: "Nachricht",
    name_ph: "Max Mustermann", email_ph: "max@beispiel.de", subject_ph: "Ich brauche eine Website", message_ph: "Beschreiben Sie Ihr Projekt...",
    send: "Senden", sending: "Wird gesendet...", sent_title: "Nachricht gesendet!", sent_sub: "Wir melden uns innerhalb von 24h.",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.", required: "Pflichtfeld",
    card1_title: "Schnelle Antwort", card1_sub: "Innerhalb von 24h an Werktagen",
    card2_title: "Erstgespräch", card2_sub: "30 Min. um Ihr Projekt zu besprechen",
  },
  pt: {
    badge: "Contato", h1: "Vamos falar sobre o seu projeto", subtitle: "Uma dúvida, um pedido de orçamento ou só uma conversa — respondemos em 24h.",
    name: "Nome", email: "Email", subject: "Assunto", message: "Mensagem",
    name_ph: "João Silva", email_ph: "joao@exemplo.com", subject_ph: "Preciso de um site", message_ph: "Descreva o seu projeto...",
    send: "Enviar", sending: "Enviando...", sent_title: "Mensagem enviada!", sent_sub: "Responderemos em 24h.",
    error: "Algo deu errado. Por favor tente novamente.", required: "Obrigatório",
    card1_title: "Resposta rápida", card1_sub: "Em 24h em dias úteis",
    card2_title: "Chamada de descoberta", card2_sub: "30 min para definir seu projeto",
  },
};

export default function ContactPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] ?? "fr") as ContactLocale;
  const t = CONTACT_T[locale] ?? CONTACT_T.fr;

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setState("sent");
    } catch {
      setState("error");
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-colors text-sm";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-red-600/8 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            {t.h1}
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center mb-3">
                  <Mail size={16} className="text-red-400" />
                </div>
                <p className="text-sm font-semibold text-white mb-1">{t.card1_title}</p>
                <p className="text-xs text-zinc-500">{t.card1_sub}</p>
              </div>
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-700/5 hover:border-red-500/60 transition-colors block"
              >
                <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center mb-3">
                  <Calendar size={16} className="text-red-400" />
                </div>
                <p className="text-sm font-semibold text-white mb-1 flex items-center gap-1.5">
                  {t.card2_title}
                  <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </p>
                <p className="text-xs text-zinc-400">{t.card2_sub}</p>
                <p className="text-[10px] text-red-400/80 mt-2 font-mono uppercase tracking-wider">
                  Réserver un créneau →
                </p>
              </a>
              <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <p className="text-xs text-zinc-500 mb-1">Email direct</p>
                <a href="mailto:v.milliand@gmail.com" className="text-sm text-red-400 hover:text-red-300 transition-colors break-all">
                  v.milliand@gmail.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {state === "sent" ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                  <CheckCircle2 size={40} className="text-red-400 mb-4" />
                  <h2 className="text-xl font-bold text-white mb-2">{t.sent_title}</h2>
                  <p className="text-zinc-400 text-sm">{t.sent_sub}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">{t.name} <span className="text-red-400">*</span></label>
                      <input
                        className={inputClass}
                        placeholder={t.name_ph}
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">{t.email} <span className="text-red-400">*</span></label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder={t.email_ph}
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">{t.subject}</label>
                    <input
                      className={inputClass}
                      placeholder={t.subject_ph}
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">{t.message} <span className="text-red-400">*</span></label>
                    <textarea
                      className={`${inputClass} resize-none`}
                      rows={6}
                      placeholder={t.message_ph}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      required
                    />
                  </div>
                  {state === "error" && (
                    <p className="text-sm text-red-400">{t.error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="self-end inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
                  >
                    {state === "sending" ? t.sending : t.send}
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
