import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Valentin Milliand",
  description: "Get in touch with Valentin Milliand for freelance projects, collaborations, or consulting on AI, NestJS, or Next.js.",
  openGraph: {
    title: "Contact Valentin Milliand",
    description: "Available for freelance projects, collaborations, or consulting on AI and full-stack development.",
    url: "https://valentin-milliand.vercel.app/contact",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://valentin-milliand.vercel.app/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
