import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aevia.vercel.app"),
  title: {
    default: "Aevia — SaaS pour entrepreneurs ambitieux",
    template: "%s | Aevia",
  },
  description:
    // 159 chars — under Google's ~160-char SERP limit
    "Aevia conçoit des outils SaaS pour entrepreneurs : sites web en 2h, inbox unifiée multi-canal, audits de sécurité instantanés. Pensés pour TPE et PME.",
  keywords: [
    "Aevia",
    "SaaS France",
    "outils entrepreneur",
    "site web 2h",
    "site web 7 jours",
    "AI website builder",
    "inbox unifiée",
    "WhatsApp Business",
    "audit sécurité site web",
    "multichannel CRM",
    "AeviaLaunch",
    "AeviaSecurity",
    "AeviaInbox",
    "digital tools SMB",
    "outils business TPE PME",
  ],
  authors: [{ name: "Valentin Milliand", url: "https://valentin-milliand.vercel.app" }],
  creator: "Aevia",
  publisher: "Aevia",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/fr",
    languages: {
      fr: "/fr",
      en: "/en",
      es: "/es",
      de: "/de",
      pt: "/pt",
      "x-default": "/fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "es_ES", "de_DE", "pt_PT"],
    url: "https://aevia.vercel.app",
    siteName: "Aevia",
    title: "Aevia — SaaS pour entrepreneurs ambitieux",
    description:
      "Site web en 2h, audit sécurité en 60s, inbox unifiée multi-canal avec IA. Trois outils pour les entrepreneurs et les PME.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Aevia — SaaS pour entrepreneurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aevia_io",
    creator: "@aevia_io",
    title: "Aevia — SaaS pour entrepreneurs ambitieux",
    description:
      "Site web en 2h, audit sécurité en 60s, inbox unifiée multi-canal avec IA.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aevia',
  url: 'https://aevia.vercel.app',
  logo: 'https://aevia.vercel.app/favicon.svg',
  description: 'Studio SaaS proposant sites web rapides, audits de sécurité et inbox unifiée multi-canal pour entrepreneurs.',
  founder: { '@type': 'Person', name: 'Valentin Milliand', url: 'https://valentin-milliand.vercel.app' },
  sameAs: [
    'https://github.com/Maeglin10',
    'https://linkedin.com/in/valentin-milliand',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@aevia.io',
    availableLanguage: ['French', 'English', 'Spanish', 'German', 'Portuguese'],
  },
  brand: [
    { '@type': 'Brand', name: 'Aevia Launch', url: 'https://aevia-launch.vercel.app' },
    { '@type': 'Brand', name: 'Aevia Security', url: 'https://aevia-security.vercel.app' },
    { '@type': 'Brand', name: 'Aevia Inbox', url: 'https://aevia-inbox.vercel.app' },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aevia',
  url: 'https://aevia.vercel.app',
  inLanguage: ['fr-FR', 'en-US', 'es-ES', 'de-DE', 'pt-PT'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://aevia.vercel.app/fr/projects?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: { '@type': 'Organization', name: 'Aevia' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#09090b] text-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded-lg focus:font-semibold">Skip to main content</a>
        <Nav />
        {children}
        {/* Aevia Inbox webchat widget — production test */}
        <script
          async
          src="https://skybot-inbox-ui.onrender.com/webchat/widget.js"
          data-widget-id="wid_ce9571d1dd824e3704a48013699b3e91"
          data-api-url="https://skybot-inbox.onrender.com/api"
        />
        <CookieBanner />
      </body>
    </html>
  );
}
