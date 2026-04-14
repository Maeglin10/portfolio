import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Valentin Milliand",
  description: "Production-ready AI products built by Valentin Milliand: SkyBot Inbox, AeviaLaunch, AeviaSecurity, AeviaLive, and more. Full Stack Engineering & AI.",
  openGraph: {
    title: "Projects by Valentin Milliand",
    description: "AI-powered SaaS, creator platforms, security tools and developer products built with NestJS, Next.js, and Claude.",
    url: "https://valentin-milliand.vercel.app/projects",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://valentin-milliand.vercel.app/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
