"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Clock, Tag, Calendar, ArrowRight } from "lucide-react";
import { getBlogPosts, getBlogPost, formatDate, type BlogLocale as ArticleLocale } from "@/lib/blog-posts";
import { notFound } from "next/navigation";

// ArticleLocale is imported from lib/blog-posts as BlogLocale

const ARTICLE_T: Record<ArticleLocale, {
  back: string; reading_time: string; continue_reading: string;
  cta_title: string; cta_sub: string; contact_btn: string; all_articles: string;
}> = {
  fr: {
    back: "Retour au blog", reading_time: "de lecture", continue_reading: "Continuer à lire",
    cta_title: "Prêt à passer à l'action ?",
    cta_sub: "Site web, audit sécurité ou gestion client — parlons de votre projet en 30 minutes.",
    contact_btn: "Prendre contact", all_articles: "Voir tous les articles",
  },
  en: {
    back: "Back to blog", reading_time: "read", continue_reading: "Keep reading",
    cta_title: "Ready to take action?",
    cta_sub: "Website, security audit or customer management — let's discuss your project in 30 minutes.",
    contact_btn: "Get in touch", all_articles: "All articles",
  },
  es: {
    back: "Volver al blog", reading_time: "de lectura", continue_reading: "Seguir leyendo",
    cta_title: "¿Listo para actuar?",
    cta_sub: "Sitio web, auditoría de seguridad o gestión de clientes — hablemos de tu proyecto en 30 minutos.",
    contact_btn: "Contactar", all_articles: "Todos los artículos",
  },
  de: {
    back: "Zurück zum Blog", reading_time: "Lesezeit", continue_reading: "Weiterlesen",
    cta_title: "Bereit, aktiv zu werden?",
    cta_sub: "Website, Sicherheitsaudit oder Kundenverwaltung — sprechen wir 30 Minuten über Ihr Projekt.",
    contact_btn: "Kontakt aufnehmen", all_articles: "Alle Artikel",
  },
  pt: {
    back: "Voltar ao blog", reading_time: "de leitura", continue_reading: "Continuar lendo",
    cta_title: "Pronto para agir?",
    cta_sub: "Site web, auditoria de segurança ou gestão de clientes — vamos falar sobre seu projeto em 30 minutos.",
    contact_btn: "Entrar em contato", all_articles: "Todos os artigos",
  },
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; ring: string }> = {
  "Web & Marketing": { bg: "bg-red-500/10", text: "text-red-300", ring: "ring-red-500/20" },
  "Cybersécurité": { bg: "bg-emerald-500/10", text: "text-emerald-300", ring: "ring-emerald-500/20" },
  "Cybersecurity": { bg: "bg-emerald-500/10", text: "text-emerald-300", ring: "ring-emerald-500/20" },
  "CRM & Support": { bg: "bg-cyan-500/10", text: "text-cyan-300", ring: "ring-cyan-500/20" },
};

function getCategoryStyle(category: string) {
  return (
    CATEGORY_COLORS[category] ?? {
      bg: "bg-zinc-500/10",
      text: "text-zinc-300",
      ring: "ring-zinc-500/20",
    }
  );
}

/**
 * Render a Markdown-like content string into React elements.
 * Supports: ## h2, ### h3, **bold**, `code`, --- (hr), - list items, and paragraphs.
 */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let key = 0;

  function flushList() {
    if (listBuffer.length === 0) return;
    elements.push(
      <ul key={key++} className="my-5 space-y-2 pl-0 list-none">
        {listBuffer.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  }

  function inlineFormat(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-zinc-800 text-red-300 text-[0.875em] font-mono">$1</code>');
  }

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-white mt-8 mb-3 leading-snug">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-12 mb-4 leading-snug">
          {line.slice(3)}
        </h2>
      );
    } else if (line === "---") {
      flushList();
      elements.push(<hr key={key++} className="my-10 border-zinc-800" />);
    } else if (line.startsWith("- ")) {
      listBuffer.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
      // blank line — no element
    } else {
      flushList();
      elements.push(
        <p
          key={key++}
          className="text-zinc-400 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
        />
      );
    }
  }

  flushList();
  return elements;
}

export default function ArticlePage({ params }: { params: { slug: string; locale: string } }) {
  const pathname = usePathname();
  const locale = (params.locale ?? pathname.split("/")[1] ?? "fr") as ArticleLocale;
  const t = ARTICLE_T[locale] ?? ARTICLE_T.fr;
  const post = getBlogPost(params.slug, locale);

  if (!post) notFound();

  const style = getCategoryStyle(post.category);
  const relatedPosts = getBlogPosts(locale).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="relative pt-28 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-red-600/8 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            {t.back}
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}>
              <Tag size={10} />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Calendar size={11} />
              {formatDate(post.date, locale)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Clock size={11} />
              {post.readingTime} {t.reading_time}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-red-500/40 pl-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="px-6">
        <div className="mx-auto max-w-3xl border-t border-zinc-800/60" />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <article className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* ── Related posts ─────────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl">
            <div className="border-t border-zinc-800/60 pt-12">
              <h2 className="text-lg font-bold text-white mb-6">{t.continue_reading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => {
                  const rs = getCategoryStyle(related.category);
                  return (
                    <Link
                      key={related.slug}
                      href={`/${locale}/blog/${related.slug}`}
                      className="group block"
                    >
                      <div className="h-full p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200 flex flex-col gap-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ring-1 w-fit ${rs.bg} ${rs.text} ${rs.ring}`}>
                          {related.category}
                        </span>
                        <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                          {related.title}
                        </h3>
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <span className="flex items-center gap-1 text-xs text-zinc-600">
                            <Clock size={10} />
                            {related.readingTime}
                          </span>
                          <ArrowRight size={13} className="text-zinc-600 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-600/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-2">{t.cta_title}</h2>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">{t.cta_sub}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
                >
                  {t.contact_btn}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/${locale}/blog`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-400 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
                >
                  {t.all_articles}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
