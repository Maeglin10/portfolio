import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aevia Launch — Sites web pros en 2 heures par IA",
  description:
    "Aevia Launch : générateur de sites web pro par IA, en 2 heures. Templates premium, contenu IA, déploiement Vercel. À partir de 599€.",
  alternates: {
    canonical: "/fr/products/launch",
  },
  openGraph: {
    title: "Aevia Launch — Site web pro en 2h par IA",
    description: "599€ tout inclus, livré en 2h, contenu IA + déploiement Vercel.",
    type: "website",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "En combien de temps mon site sera-t-il en ligne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 2 heures (Premium prioritaire) et 7 jours (Essentiel). La majorité des projets Pro sont livrés en 3 à 5 jours ouvrés après réception de votre contenu.",
      },
    },
    {
      "@type": "Question",
      name: "Qui rédige le contenu de mon site ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous, ou notre builder IA. Vous décrivez votre activité, l'IA génère textes, structure et suggestions de design — vous validez et on déploie. Vous gardez la main à 100%.",
      },
    },
    {
      "@type": "Question",
      name: "Et après la livraison ? Puis-je modifier moi-même ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le site est sur votre compte. Maintenance optionnelle à 59€/mois (mises à jour, backups, support prioritaire) si vous préférez ne pas vous en occuper.",
      },
    },
    {
      "@type": "Question",
      name: "À qui s'adresse Aevia Launch ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indépendants, PME, restaurants, agences, e-commerces qui veulent une présence pro sans payer une agence 5000€ ni passer 3 mois sur un projet.",
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
    { "@type": "ListItem", position: 3, name: "Aevia Launch", item: "https://aevia.vercel.app/fr/products/launch" },
  ],
};

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Aevia Launch",
  description: "Générateur de sites web professionnels par IA, livrés en 2 heures.",
  brand: { "@type": "Brand", name: "Aevia" },
  offers: [
    { "@type": "Offer", name: "Essentiel", price: "599", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Pro", price: "899", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Premium", price: "1499", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  ],
};

export default function LaunchProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
      />
      {children}
    </>
  );
}
