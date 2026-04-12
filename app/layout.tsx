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
  title: "Valentin Milliand — Full Stack Engineer & AI Builder",
  description:
    "Building production-ready AI products: multi-channel inbox, creator platforms, security SaaS, and more. NestJS · Next.js · Anthropic Claude.",
  authors: [{ name: "Valentin Milliand", url: "https://github.com/Maeglin10" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Valentin Milliand — Full Stack Engineer & AI Builder",
    description:
      "Building production-ready AI products with NestJS, Next.js, and Anthropic Claude.",
    url: "https://valentin-milliand.vercel.app",
    siteName: "Valentin Milliand",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentin Milliand — Full Stack Engineer & AI Builder",
    description:
      "Building production-ready AI products with NestJS, Next.js, and Anthropic Claude.",
  },
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
      <body className="min-h-full flex flex-col bg-[#09090b] text-white">
        <Nav />
        {children}
      </body>
    </html>
  );
}
