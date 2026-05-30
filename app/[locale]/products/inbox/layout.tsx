import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aevia Inbox — Inbox unifiée WhatsApp Instagram avec IA",
  description:
    "Aevia Inbox : centralisez WhatsApp Business, Instagram, email avec IA. CRM multicanal pour TPE/PME. À partir de 20€/mois.",
  alternates: {
    canonical: "/fr/products/inbox",
  },
  openGraph: {
    title: "Aevia Inbox — Inbox unifiée multicanal avec IA",
    description: "WhatsApp + Instagram + email centralisés. IA conversationnelle. À partir de 20€/mois.",
    type: "website",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels canaux Aevia Inbox supporte-t-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp Business, Instagram DM, Messenger Facebook, email (Gmail/IMAP) et webchat sur votre site. TikTok messaging bientôt disponible.",
      },
    },
    {
      "@type": "Question",
      name: "Comment fonctionne l'IA conversationnelle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre IA basée sur Claude lit vos messages, qualifie automatiquement vos leads, propose des réponses ou répond seule selon les règles que vous définissez. Vous gardez le contrôle.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce conforme RGPD ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Hébergement européen, chiffrement au repos, DPA disponible. Conforme RGPD by design. Multi-tenant strict.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte le plan d'entrée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le plan Starter à 20€/mois connecte WhatsApp, Instagram et email, avec 500 messages IA par mois et 1 utilisateur, sans engagement. 14 jours satisfait ou remboursé.",
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
    { "@type": "ListItem", position: 3, name: "Aevia Inbox", item: "https://aevia.vercel.app/fr/products/inbox" },
  ],
};

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Aevia Inbox",
  description: "Inbox unifiée WhatsApp, Instagram et email avec IA conversationnelle. CRM multicanal.",
  brand: { "@type": "Brand", name: "Aevia" },
  offers: [
    { "@type": "Offer", name: "Starter", price: "20", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Pro", price: "79", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Business", price: "249", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Agency", price: "599", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  ],
};

export default function InboxProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }} />
      {children}
    </>
  );
}
