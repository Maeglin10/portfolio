import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Valentin Milliand",
  description: "Full Stack Engineer & AI Builder based in France. 3+ years building production-ready SaaS, AI-powered products, and developer tools with NestJS, Next.js, and Anthropic Claude.",
  openGraph: {
    title: "About Valentin Milliand — Full Stack Engineer & AI Builder",
    description: "Building production-ready AI products: multi-channel inboxes, creator platforms, security SaaS, and developer tools.",
    url: "https://valentin-milliand.vercel.app/about",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://valentin-milliand.vercel.app/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
