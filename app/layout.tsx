import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

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
  metadataBase: new URL("https://valentin-milliand.vercel.app"),
  title: {
    default: "Valentin Milliand — Full Stack Engineer & AI Builder",
    template: "%s | Valentin Milliand",
  },
  description:
    "Full Stack Engineer & AI Builder specializing in NestJS, Next.js, and Anthropic Claude. Building production-ready AI products: multi-channel inboxes, creator platforms, security SaaS, and developer tools.",
  keywords: [
    "Valentin Milliand",
    "Full Stack Engineer",
    "AI Builder",
    "NestJS",
    "Next.js",
    "TypeScript",
    "Anthropic Claude",
    "SaaS",
    "freelance developer",
    "AI products",
  ],
  authors: [{ name: "Valentin Milliand", url: "https://valentin-milliand.vercel.app" }],
  creator: "Valentin Milliand",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valentin-milliand.vercel.app",
    siteName: "Valentin Milliand",
    title: "Valentin Milliand — Full Stack Engineer & AI Builder",
    description:
      "Full Stack Engineer & AI Builder specializing in NestJS, Next.js, and Anthropic Claude. Building production-ready AI products.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Valentin Milliand — Full Stack Engineer & AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentin Milliand — Full Stack Engineer & AI Builder",
    description:
      "Full Stack Engineer & AI Builder specializing in NestJS, Next.js, and Anthropic Claude. Building production-ready AI products.",
    images: ["/og.png"],
    creator: "@valentinmilliand",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://valentin-milliand.vercel.app",
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Valentin Milliand',
  url: 'https://valentin-milliand.vercel.app',
  jobTitle: 'Full Stack Engineer & AI Builder',
  description:
    'Full Stack Engineer specializing in NestJS, Next.js, TypeScript, and Anthropic Claude. Building production-ready AI products.',
  sameAs: [
    'https://github.com/Maeglin10',
    'https://linkedin.com/in/valentin-milliand',
  ],
  knowsAbout: [
    'NestJS',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Anthropic Claude',
    'AI product development',
    'SaaS',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
      </body>
    </html>
  );
}
