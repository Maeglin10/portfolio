"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Monitor, ShoppingBag, Globe, Sparkles, Lock } from "lucide-react";

type TLocale = "fr" | "en" | "es" | "de" | "pt";

const TEMPLATES_T: Record<TLocale, {
  badge: string; h1: string; subtitle: string;
  included: string; want_site: string; fullscreen: string; loading: string;
  themes_badge: string; themes_title: string; themes_sub: string; see_themes: string;
  free_label: string; premium_label: string;
  cta_title: string; cta_sub: string; start_project: string; explore_themes: string;
  landing_name: string; landing_tagline: string; landing_desc: string;
  landing_f1: string; landing_f2: string; landing_f3: string; landing_f4: string; landing_f5: string;
  landing_uc1: string; landing_uc2: string; landing_uc3: string; landing_uc4: string;
  ecom_name: string; ecom_tagline: string; ecom_desc: string;
  ecom_f1: string; ecom_f2: string; ecom_f3: string; ecom_f4: string; ecom_f5: string;
  ecom_uc1: string; ecom_uc2: string; ecom_uc3: string; ecom_uc4: string;
  vitrine_name: string; vitrine_tagline: string; vitrine_desc: string;
  vitrine_f1: string; vitrine_f2: string; vitrine_f3: string; vitrine_f4: string; vitrine_f5: string;
  vitrine_uc1: string; vitrine_uc2: string; vitrine_uc3: string; vitrine_uc4: string;
}> = {
  fr: {
    badge: "Sites web sur mesure — livraison 7 jours",
    h1: "De quel type de site\navez-vous besoin ?",
    subtitle: "Choisissez votre template, visualisez la démo live, et démarrez votre projet en quelques clics.",
    included: "Inclus", want_site: "Je veux ce site", fullscreen: "Plein écran", loading: "Chargement de la démo...",
    themes_badge: "21 thèmes — gratuits & premium",
    themes_title: "Explorez nos thèmes",
    themes_sub: "Chaque thème est un design system complet, personnalisé avec votre contenu IA.",
    see_themes: "Voir les 21 thèmes",
    free_label: "Gratuit", premium_label: "Premium",
    cta_title: "Prêt à lancer votre site ?",
    cta_sub: "Notre équipe livre votre site en 7 jours. Contenu IA inclus.",
    start_project: "Démarrer mon projet", explore_themes: "Explorer les thèmes",
    landing_name: "Landing Page", landing_tagline: "Convertir des visiteurs en clients",
    landing_desc: "Hero animé, section features, témoignages, pricing et formulaire de contact. Optimisée conversion et SEO.",
    landing_f1: "Hero section animé", landing_f2: "Features & bénéfices", landing_f3: "Témoignages",
    landing_f4: "Tableau de prix", landing_f5: "Formulaire contact",
    landing_uc1: "SaaS", landing_uc2: "Agence", landing_uc3: "Startup", landing_uc4: "App",
    ecom_name: "E-Commerce", ecom_tagline: "Vendre des produits en ligne",
    ecom_desc: "Boutique complète avec catalogue produits, panier, checkout et confirmation de commande. Prêt pour Stripe.",
    ecom_f1: "Catalogue & filtres", ecom_f2: "Panier & checkout", ecom_f3: "Confirmation commande",
    ecom_f4: "Page produit détaillée", ecom_f5: "Stripe-ready",
    ecom_uc1: "Boutique", ecom_uc2: "Mode", ecom_uc3: "Produits physiques", ecom_uc4: "Digital",
    vitrine_name: "Site Vitrine", vitrine_tagline: "Une présence pro sans friction",
    vitrine_desc: "Site corporate clean pour les entreprises de service. Accueil, à propos, services, blog et contact.",
    vitrine_f1: "Accueil + À propos", vitrine_f2: "Page services", vitrine_f3: "Blog / Actualités",
    vitrine_f4: "Contact & réservation", vitrine_f5: "Multi-langue",
    vitrine_uc1: "Consultant", vitrine_uc2: "Agence", vitrine_uc3: "Restaurant", vitrine_uc4: "Commerce local",
  },
  en: {
    badge: "Custom websites — 7-day delivery",
    h1: "What type of website\ndo you need?",
    subtitle: "Choose your template, preview the live demo, and start your project in a few clicks.",
    included: "Included", want_site: "I want this site", fullscreen: "Full screen", loading: "Loading demo...",
    themes_badge: "21 themes — free & premium",
    themes_title: "Explore our themes",
    themes_sub: "Each theme is a complete design system, customized with your AI-generated content.",
    see_themes: "See all 21 themes",
    free_label: "Free", premium_label: "Premium",
    cta_title: "Ready to launch your website?",
    cta_sub: "Our team delivers your site in 7 days. AI content included.",
    start_project: "Start my project", explore_themes: "Explore themes",
    landing_name: "Landing Page", landing_tagline: "Convert visitors into customers",
    landing_desc: "Animated hero, features section, testimonials, pricing and contact form. Optimized for conversion and SEO.",
    landing_f1: "Animated hero section", landing_f2: "Features & benefits", landing_f3: "Testimonials",
    landing_f4: "Pricing table", landing_f5: "Contact form",
    landing_uc1: "SaaS", landing_uc2: "Agency", landing_uc3: "Startup", landing_uc4: "App",
    ecom_name: "E-Commerce", ecom_tagline: "Sell products online",
    ecom_desc: "Full shop with product catalog, cart, checkout and order confirmation. Stripe-ready.",
    ecom_f1: "Catalog & filters", ecom_f2: "Cart & checkout", ecom_f3: "Order confirmation",
    ecom_f4: "Detailed product page", ecom_f5: "Stripe-ready",
    ecom_uc1: "Shop", ecom_uc2: "Fashion", ecom_uc3: "Physical products", ecom_uc4: "Digital",
    vitrine_name: "Showcase Site", vitrine_tagline: "A professional presence, hassle-free",
    vitrine_desc: "Clean corporate site for service businesses. Home, about, services, blog and contact.",
    vitrine_f1: "Home + About", vitrine_f2: "Services page", vitrine_f3: "Blog / News",
    vitrine_f4: "Contact & booking", vitrine_f5: "Multi-language",
    vitrine_uc1: "Consultant", vitrine_uc2: "Agency", vitrine_uc3: "Restaurant", vitrine_uc4: "Local business",
  },
  es: {
    badge: "Sitios web a medida — entrega en 7 días",
    h1: "¿Qué tipo de sitio web\nnecesitas?",
    subtitle: "Elige tu plantilla, visualiza la demo en vivo y empieza tu proyecto en pocos clics.",
    included: "Incluido", want_site: "Quiero este sitio", fullscreen: "Pantalla completa", loading: "Cargando demo...",
    themes_badge: "21 temas — gratuitos y premium",
    themes_title: "Explora nuestros temas",
    themes_sub: "Cada tema es un sistema de diseño completo, personalizado con tu contenido de IA.",
    see_themes: "Ver los 21 temas",
    free_label: "Gratuito", premium_label: "Premium",
    cta_title: "¿Listo para lanzar tu sitio?",
    cta_sub: "Nuestro equipo entrega tu sitio en 7 días. Contenido IA incluido.",
    start_project: "Empezar mi proyecto", explore_themes: "Explorar temas",
    landing_name: "Landing Page", landing_tagline: "Convertir visitantes en clientes",
    landing_desc: "Hero animado, sección de características, testimonios, precios y formulario de contacto. Optimizado para conversión y SEO.",
    landing_f1: "Hero animado", landing_f2: "Características y beneficios", landing_f3: "Testimonios",
    landing_f4: "Tabla de precios", landing_f5: "Formulario de contacto",
    landing_uc1: "SaaS", landing_uc2: "Agencia", landing_uc3: "Startup", landing_uc4: "App",
    ecom_name: "E-Commerce", ecom_tagline: "Vender productos en línea",
    ecom_desc: "Tienda completa con catálogo, carrito, pago y confirmación de pedido. Compatible con Stripe.",
    ecom_f1: "Catálogo y filtros", ecom_f2: "Carrito y pago", ecom_f3: "Confirmación de pedido",
    ecom_f4: "Página de producto detallada", ecom_f5: "Stripe-ready",
    ecom_uc1: "Tienda", ecom_uc2: "Moda", ecom_uc3: "Productos físicos", ecom_uc4: "Digital",
    vitrine_name: "Sitio Vitrina", vitrine_tagline: "Presencia profesional sin complicaciones",
    vitrine_desc: "Sitio corporativo limpio para empresas de servicios. Inicio, sobre nosotros, servicios, blog y contacto.",
    vitrine_f1: "Inicio + Sobre nosotros", vitrine_f2: "Página de servicios", vitrine_f3: "Blog / Noticias",
    vitrine_f4: "Contacto y reservas", vitrine_f5: "Multiidioma",
    vitrine_uc1: "Consultor", vitrine_uc2: "Agencia", vitrine_uc3: "Restaurante", vitrine_uc4: "Negocio local",
  },
  de: {
    badge: "Maßgeschneiderte Websites — 7-Tage-Lieferung",
    h1: "Welche Art von Website\nbenötigen Sie?",
    subtitle: "Wählen Sie Ihr Template, sehen Sie die Live-Demo und starten Sie Ihr Projekt in wenigen Klicks.",
    included: "Enthalten", want_site: "Diese Website haben", fullscreen: "Vollbild", loading: "Demo wird geladen...",
    themes_badge: "21 Themes — kostenlos & premium",
    themes_title: "Unsere Themes entdecken",
    themes_sub: "Jedes Theme ist ein vollständiges Design-System, personalisiert mit Ihrem KI-generierten Inhalt.",
    see_themes: "Alle 21 Themes ansehen",
    free_label: "Kostenlos", premium_label: "Premium",
    cta_title: "Bereit, Ihre Website zu starten?",
    cta_sub: "Unser Team liefert Ihre Website in 7 Tagen. KI-Inhalt inklusive.",
    start_project: "Mein Projekt starten", explore_themes: "Themes erkunden",
    landing_name: "Landing Page", landing_tagline: "Besucher in Kunden verwandeln",
    landing_desc: "Animierter Hero, Features-Bereich, Testimonials, Preise und Kontaktformular. Für Conversion und SEO optimiert.",
    landing_f1: "Animierter Hero-Bereich", landing_f2: "Features & Vorteile", landing_f3: "Testimonials",
    landing_f4: "Preistabelle", landing_f5: "Kontaktformular",
    landing_uc1: "SaaS", landing_uc2: "Agentur", landing_uc3: "Startup", landing_uc4: "App",
    ecom_name: "E-Commerce", ecom_tagline: "Produkte online verkaufen",
    ecom_desc: "Vollständiger Shop mit Produktkatalog, Warenkorb, Checkout und Bestellbestätigung. Stripe-ready.",
    ecom_f1: "Katalog & Filter", ecom_f2: "Warenkorb & Checkout", ecom_f3: "Bestellbestätigung",
    ecom_f4: "Detaillierte Produktseite", ecom_f5: "Stripe-ready",
    ecom_uc1: "Shop", ecom_uc2: "Mode", ecom_uc3: "Physische Produkte", ecom_uc4: "Digital",
    vitrine_name: "Präsentationsseite", vitrine_tagline: "Professionelle Präsenz ohne Aufwand",
    vitrine_desc: "Saubere Unternehmensseite für Dienstleistungsunternehmen. Startseite, Über uns, Leistungen, Blog und Kontakt.",
    vitrine_f1: "Start + Über uns", vitrine_f2: "Leistungsseite", vitrine_f3: "Blog / Aktuelles",
    vitrine_f4: "Kontakt & Buchung", vitrine_f5: "Mehrsprachig",
    vitrine_uc1: "Berater", vitrine_uc2: "Agentur", vitrine_uc3: "Restaurant", vitrine_uc4: "Lokales Unternehmen",
  },
  pt: {
    badge: "Sites web personalizados — entrega em 7 dias",
    h1: "Que tipo de site web\nvocê precisa?",
    subtitle: "Escolha seu template, visualize a demo ao vivo e inicie seu projeto em poucos cliques.",
    included: "Incluído", want_site: "Quero este site", fullscreen: "Tela cheia", loading: "Carregando demo...",
    themes_badge: "21 temas — gratuitos & premium",
    themes_title: "Explore nossos temas",
    themes_sub: "Cada tema é um sistema de design completo, personalizado com seu conteúdo de IA.",
    see_themes: "Ver os 21 temas",
    free_label: "Gratuito", premium_label: "Premium",
    cta_title: "Pronto para lançar seu site?",
    cta_sub: "Nossa equipe entrega seu site em 7 dias. Conteúdo IA incluído.",
    start_project: "Iniciar meu projeto", explore_themes: "Explorar temas",
    landing_name: "Landing Page", landing_tagline: "Converter visitantes em clientes",
    landing_desc: "Hero animado, seção de recursos, depoimentos, preços e formulário de contato. Otimizado para conversão e SEO.",
    landing_f1: "Hero section animado", landing_f2: "Recursos & benefícios", landing_f3: "Depoimentos",
    landing_f4: "Tabela de preços", landing_f5: "Formulário de contato",
    landing_uc1: "SaaS", landing_uc2: "Agência", landing_uc3: "Startup", landing_uc4: "App",
    ecom_name: "E-Commerce", ecom_tagline: "Vender produtos online",
    ecom_desc: "Loja completa com catálogo de produtos, carrinho, checkout e confirmação de pedido. Pronto para Stripe.",
    ecom_f1: "Catálogo & filtros", ecom_f2: "Carrinho & checkout", ecom_f3: "Confirmação de pedido",
    ecom_f4: "Página de produto detalhada", ecom_f5: "Stripe-ready",
    ecom_uc1: "Loja", ecom_uc2: "Moda", ecom_uc3: "Produtos físicos", ecom_uc4: "Digital",
    vitrine_name: "Site Vitrine", vitrine_tagline: "Presença profissional sem complicação",
    vitrine_desc: "Site corporativo limpo para empresas de serviços. Início, sobre nós, serviços, blog e contato.",
    vitrine_f1: "Início + Sobre nós", vitrine_f2: "Página de serviços", vitrine_f3: "Blog / Notícias",
    vitrine_f4: "Contato & reserva", vitrine_f5: "Multilíngue",
    vitrine_uc1: "Consultor", vitrine_uc2: "Agência", vitrine_uc3: "Restaurante", vitrine_uc4: "Comércio local",
  },
};

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

function TemplatePanel({ template, isActive, t }: {
  template: { name: string; tagline: string; description: string; url: string; accentFrom: string; accentTo: string; icon: React.ReactNode; dot: string; features: string[]; useCases: string[] };
  isActive: boolean;
  t: typeof TEMPLATES_T.fr;
}) {
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
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">{t.included}</p>
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
            <Link href="contact" className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${template.accentFrom} ${template.accentTo} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}>
              {t.want_site} <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={template.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4" /> {t.fullscreen}
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
                  <p className="text-white text-sm font-semibold">{t.loading}</p>
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
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] ?? "fr") as TLocale;
  const t = TEMPLATES_T[locale] ?? TEMPLATES_T.fr;

  const templates = [
    {
      id: "landing",
      name: t.landing_name,
      tagline: t.landing_tagline,
      description: t.landing_desc,
      url: "https://aevia-launch.vercel.app/demo/landing",
      accentFrom: "from-violet-500",
      accentTo: "to-fuchsia-500",
      icon: <Sparkles className="w-5 h-5" />,
      dot: "bg-violet-400",
      features: [t.landing_f1, t.landing_f2, t.landing_f3, t.landing_f4, t.landing_f5],
      useCases: [t.landing_uc1, t.landing_uc2, t.landing_uc3, t.landing_uc4],
    },
    {
      id: "ecommerce",
      name: t.ecom_name,
      tagline: t.ecom_tagline,
      description: t.ecom_desc,
      url: "https://aevia-launch.vercel.app/demo/ecommerce",
      accentFrom: "from-amber-500",
      accentTo: "to-orange-500",
      icon: <ShoppingBag className="w-5 h-5" />,
      dot: "bg-amber-400",
      features: [t.ecom_f1, t.ecom_f2, t.ecom_f3, t.ecom_f4, t.ecom_f5],
      useCases: [t.ecom_uc1, t.ecom_uc2, t.ecom_uc3, t.ecom_uc4],
    },
    {
      id: "website",
      name: t.vitrine_name,
      tagline: t.vitrine_tagline,
      description: t.vitrine_desc,
      url: "https://aevia-launch.vercel.app/demo/vitrine",
      accentFrom: "from-emerald-500",
      accentTo: "to-teal-500",
      icon: <Globe className="w-5 h-5" />,
      dot: "bg-emerald-400",
      features: [t.vitrine_f1, t.vitrine_f2, t.vitrine_f3, t.vitrine_f4, t.vitrine_f5],
      useCases: [t.vitrine_uc1, t.vitrine_uc2, t.vitrine_uc3, t.vitrine_uc4],
    },
  ];

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
              {t.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              {t.h1.split("\n").map((line, i) => (
                <span key={i}>{line}{i < t.h1.split("\n").length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 p-1.5 bg-zinc-900 rounded-2xl border border-zinc-800 w-fit mx-auto">
            {templates.map((tmpl, i) => (
              <button key={tmpl.id} onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${active === i ? "bg-zinc-800 text-white shadow-lg" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                <span className={`w-2 h-2 rounded-full ${tmpl.dot} ${active === i ? "opacity-100" : "opacity-40"}`} />
                {tmpl.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Template panels */}
      <section className="px-6 py-8 pb-16">
        <div className="mx-auto max-w-6xl relative">
          {templates.map((tmpl, i) => <TemplatePanel key={tmpl.id} template={tmpl} isActive={active === i} t={t} />)}
        </div>
      </section>

      {/* Themes section */}
      <section className="px-6 pb-10 border-t border-zinc-800/60 pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 ring-1 ring-amber-500/20 text-amber-300 text-xs font-medium mb-4">
                <Sparkles className="w-3 h-3" />
                {t.themes_badge}
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">{t.themes_title}</h2>
              <p className="text-zinc-400 text-sm mt-1">{t.themes_sub}</p>
            </div>
            <a href="https://aevia-launch.vercel.app/themes" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 ring-1 ring-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4" /> {t.see_themes} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">{t.free_label}</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PREVIEW_THEMES.filter(th => !th.premium).map((theme) => {
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
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#c9a96e" }}>{t.premium_label}</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PREVIEW_THEMES.filter(th => th.premium).map((theme) => (
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
                      <p className="text-[10px] mt-0.5 font-medium" style={{ color: "#c9a96e" }}>{t.premium_label}</p>
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
            <h3 className="text-white font-bold text-2xl mb-3">{t.cta_title}</h3>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">{t.cta_sub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
                {t.start_project} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://aevia-launch.vercel.app/themes" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-semibold transition-colors"
              >
                <Sparkles className="w-4 h-4" /> {t.explore_themes}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
