import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aevia Security — Audit sécurité site web par IA en 60s",
  description:
    "Aevia Security : audit DNS, SSL, headers HTTP par IA Claude en 60s. Rapport actionnable instantané. Gratuit, sans inscription.",
  alternates: {
    canonical: "/fr/products/security",
  },
  openGraph: {
    title: "Aevia Security — Audit sécurité en 60s par IA",
    description: "DNS, SSL, headers HTTP analysés par Claude AI. Rapport instant. Gratuit.",
    type: "website",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Que vérifie Aevia Security exactement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Configuration DNS (SPF, DKIM, DMARC), certificat SSL (validité, chaîne de confiance, expiration), headers HTTP de sécurité (CSP, HSTS, X-Frame-Options), et analyse globale OWASP.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend un audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Environ 60 secondes. L'IA analyse en parallèle DNS, SSL et headers, puis génère un rapport actionnable avec plan de remédiation priorisé.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il s'inscrire pour faire un audit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Le plan Free permet 1 audit par jour sans inscription. Le plan Pro (29€/mois) ajoute l'historique, le PDF, et le monitoring continu.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles sont les certifications de sécurité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aevia Security suit les recommandations OWASP, ANSSI, NIST. Conforme RGPD. Hébergement européen. Aucune donnée client stockée plus de 30 jours sans accord explicite.",
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://aevia.vercel.app/fr" },
    { "@type": "ListItem", position: 2, name: "Produits", item: "https://aevia.vercel.app/fr#products" },
    { "@type": "ListItem", position: 3, name: "Aevia Security", item: "https://aevia.vercel.app/fr/products/security" },
  ],
};

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Aevia Security",
  description: "Audit de sécurité de domaine par IA Claude : DNS, SSL, headers HTTP en 60 secondes.",
  brand: { "@type": "Brand", name: "Aevia" },
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Solo", price: "9", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Pro", price: "29", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  ],
};

export default function SecurityProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }} />
      {children}
    </>
  );
}
