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
    default: "Aevia — Digital tools for businesses",
    template: "%s | Aevia",
  },
  description:
    "Aevia offers 3 digital products for SMBs: AeviaLaunch (website in 7 days), AeviaSecurity (security audit in 60s), and AeviaInbox (multichannel CRM with AI).",
  keywords: [
    "Aevia",
    "website in 7 days",
    "security audit",
    "multichannel CRM",
    "AeviaLaunch",
    "AeviaSecurity",
    "AeviaInbox",
    "digital agency",
    "SMB tools",
  ],
  authors: [{ name: "Aevia", url: "https://aevia.vercel.app" }],
  creator: "Aevia",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://aevia.vercel.app",
    siteName: "Aevia",
    title: "Aevia — Digital tools for businesses",
    description:
      "Website in 7 days, security audit in 60s, multichannel CRM with AI. Three tools built for SMBs.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aevia — Digital tools for businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aevia — Digital tools for businesses",
    description:
      "Website in 7 days, security audit in 60s, multichannel CRM with AI.",
    images: ["/og.png"],
    creator: "@aevia_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://aevia.vercel.app",
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aevia',
  url: 'https://aevia.vercel.app',
  description: 'Digital agency offering websites, security audits and multichannel CRM for SMBs.',
  founder: { '@type': 'Person', name: 'Valentin Milliand' },
  sameAs: [
    'https://github.com/Maeglin10',
    'https://linkedin.com/in/valentin-milliand',
  ],
}

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
      </head>
      <body className="min-h-full flex flex-col bg-[#09090b] text-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg focus:font-semibold">Skip to main content</a>
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
