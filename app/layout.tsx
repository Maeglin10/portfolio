import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        <Nav />
        {children}
      </body>
    </html>
  );
}
