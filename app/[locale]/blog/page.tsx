"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { BLOG_POSTS, formatDate } from "@/lib/blog-posts";

type BlogLocale = "fr" | "en" | "es" | "de" | "pt";

const BLOG_T: Record<BlogLocale, {
  badge: string; h1_1: string; h1_2: string; subtitle: string;
  reading_time: string; featured: string; read_article: string;
  cta_title: string; cta_sub: string; cta_btn: string;
}> = {
  fr: {
    badge: "Blog Aevia", h1_1: "Conseils &", h1_2: "ressources",
    subtitle: "Web, sécurité, CRM — des articles pratiques pour aider votre business à grandir sur internet.",
    reading_time: "de lecture", featured: "Article à la une", read_article: "Lire l'article",
    cta_title: "Besoin d'un coup de main pour votre présence digitale ?",
    cta_sub: "Site web, sécurité, gestion client — on peut en parler en 30 minutes.",
    cta_btn: "Prendre contact",
  },
  en: {
    badge: "Aevia Blog", h1_1: "Tips &", h1_2: "resources",
    subtitle: "Web, security, CRM — practical articles to help your business grow online.",
    reading_time: "read", featured: "Featured article", read_article: "Read article",
    cta_title: "Need help with your digital presence?",
    cta_sub: "Website, security, customer management — let's talk for 30 minutes.",
    cta_btn: "Get in touch",
  },
  es: {
    badge: "Blog Aevia", h1_1: "Consejos &", h1_2: "recursos",
    subtitle: "Web, seguridad, CRM — artículos prácticos para ayudar a tu negocio a crecer en internet.",
    reading_time: "de lectura", featured: "Artículo destacado", read_article: "Leer el artículo",
    cta_title: "¿Necesitas ayuda con tu presencia digital?",
    cta_sub: "Sitio web, seguridad, gestión de clientes — podemos hablarlo en 30 minutos.",
    cta_btn: "Contactar",
  },
  de: {
    badge: "Aevia Blog", h1_1: "Tipps &", h1_2: "Ressourcen",
    subtitle: "Web, Sicherheit, CRM — praktische Artikel, die Ihrem Business helfen, online zu wachsen.",
    reading_time: "Lesezeit", featured: "Featured Artikel", read_article: "Artikel lesen",
    cta_title: "Benötigen Sie Hilfe bei Ihrer digitalen Präsenz?",
    cta_sub: "Website, Sicherheit, Kundenverwaltung — sprechen wir 30 Minuten darüber.",
    cta_btn: "Kontakt aufnehmen",
  },
  pt: {
    badge: "Blog Aevia", h1_1: "Dicas &", h1_2: "recursos",
    subtitle: "Web, segurança, CRM — artigos práticos para ajudar seu negócio a crescer na internet.",
    reading_time: "de leitura", featured: "Artigo em destaque", read_article: "Ler o artigo",
    cta_title: "Precisa de ajuda com sua presença digital?",
    cta_sub: "Site web, segurança, gestão de clientes — podemos conversar em 30 minutos.",
    cta_btn: "Entrar em contato",
  },
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; ring: string }> = {
  "Web & Marketing": { bg: "bg-violet-500/10", text: "text-violet-300", ring: "ring-violet-500/20" },
  "Cybersécurité": { bg: "bg-emerald-500/10", text: "text-emerald-300", ring: "ring-emerald-500/20" },
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

export default function BlogPage() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] ?? "fr") as BlogLocale;
  const t = BLOG_T[locale] ?? BLOG_T.fr;

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px]" />
          <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 ring-1 ring-violet-500/20 text-violet-300 text-xs font-medium">
              <BookOpen size={12} />
              {t.badge}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            {t.h1_1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              {t.h1_2}
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* ── Articles ───────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Featured — first post */}
          {BLOG_POSTS.length > 0 && (
            <Link
              href={`/${locale}/blog/${BLOG_POSTS[0].slug}`}
              className="group block mb-6"
            >
              <article className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-10 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/3 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    {(() => {
                      const style = getCategoryStyle(BLOG_POSTS[0].category);
                      return (
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}>
                          <Tag size={10} />
                          {BLOG_POSTS[0].category}
                        </span>
                      );
                    })()}
                    <span className="text-xs text-zinc-500">{formatDate(BLOG_POSTS[0].date)}</span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Clock size={11} />
                      {BLOG_POSTS[0].readingTime} {t.reading_time}
                    </span>
                    <span className="ml-auto hidden sm:inline-flex items-center gap-1 text-xs font-medium text-violet-400 bg-violet-500/10 ring-1 ring-violet-500/20 px-2.5 py-1 rounded-full">
                      {t.featured}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-violet-100 transition-colors leading-tight">
                    {BLOG_POSTS[0].title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-6 max-w-2xl">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 group-hover:text-violet-300 transition-colors">
                    {t.read_article}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Rest of posts */}
          {BLOG_POSTS.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {BLOG_POSTS.slice(1).map((post) => {
                const style = getCategoryStyle(post.category);
                return (
                  <Link
                    key={post.slug}
                    href={`/${locale}/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 flex flex-col">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-zinc-800/30 to-transparent pointer-events-none" />

                      <div className="relative z-10 flex flex-col flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}>
                            <Tag size={10} />
                            {post.category}
                          </span>
                        </div>

                        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-violet-100 transition-colors leading-snug flex-1">
                          {post.title}
                        </h2>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-5 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/60">
                          <div className="flex items-center gap-3 text-xs text-zinc-500">
                            <span>{formatDate(post.date)}</span>
                            <span className="flex items-center gap-1">
                              <Clock size={10} />
                              {post.readingTime}
                            </span>
                          </div>
                          <ArrowRight size={14} className="text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-2">
                {t.cta_title}
              </h2>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                {t.cta_sub}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
              >
                {t.cta_btn}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
