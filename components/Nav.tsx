"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles, Shield, MessageSquare, ChevronDown, ExternalLink } from "lucide-react";
import { AeviaLogo } from "@/components/AeviaLogo";

const navLinks = [
  { href: "/templates", label: "Sites web" },
  { href: "/contact", label: "Contact" },
];

const products = [
  {
    name: "AeviaLaunch",
    href: "https://aevia-launch.vercel.app",
    internal: "/templates",
    description: "Site web en 7 jours — 3 templates pro",
    icon: Sparkles,
    status: "live" as const,
    external: false,
  },
  {
    name: "AeviaSecurity",
    href: "https://aevia-security.vercel.app",
    internal: null,
    description: "Audit sécurité & performance en 60s",
    icon: Shield,
    status: "live" as const,
    external: true,
  },
  {
    name: "AeviaInbox",
    href: "#",
    internal: null,
    description: "CRM multi-canal — WhatsApp, Instagram, Email",
    icon: MessageSquare,
    status: "soon" as const,
    external: false,
  },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <AeviaLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors flex items-center gap-1">
              Produits
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-1 w-80 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden">
                <div className="p-2 flex flex-col gap-1">
                  {products.map((p) => {
                    const Icon = p.icon;
                    const isLive = p.status === "live";
                    const href = p.internal ?? (isLive ? p.href : "#");
                    const isExternal = p.external && isLive;

                    const content = (
                      <div className="flex gap-3 items-start p-2.5 rounded-lg hover:bg-zinc-800/60 transition-colors cursor-pointer group">
                        <Icon className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-semibold text-white text-sm group-hover:text-violet-300 transition-colors">
                              {p.name}
                            </span>
                            {p.status === "soon" ? (
                              <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Bientôt</span>
                            ) : (
                              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Live</span>
                            )}
                            {isExternal && <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />}
                          </div>
                          <p className="text-xs text-zinc-500">{p.description}</p>
                        </div>
                      </div>
                    );

                    if (p.internal) {
                      return <Link key={p.name} href={p.internal}>{content}</Link>;
                    }
                    if (isExternal) {
                      return <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">{content}</a>;
                    }
                    return <div key={p.name} className="opacity-60 cursor-not-allowed">{content}</div>;
                  })}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                pathname === l.href
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="https://aevia-security.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
          >
            Audit gratuit
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-zinc-800 bg-[#09090b] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`px-3 py-2.5 rounded-md text-sm transition-colors ${
                pathname === l.href ? "text-white bg-zinc-800" : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <div className="mt-2 pt-2 border-t border-zinc-800 flex flex-col gap-1">
            <p className="text-xs text-zinc-600 px-3 py-1 uppercase tracking-wider font-medium">Produits</p>
            {products.map((p) => {
              const isLive = p.status === "live";
              const href = p.internal ?? (p.external && isLive ? p.href : "#");
              const Tag = p.internal ? Link : "a";
              const extraProps = p.external && isLive && !p.internal ? { target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Tag
                  key={p.name}
                  href={href}
                  {...(extraProps as object)}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
                >
                  <span>{p.name}</span>
                  {p.status === "soon" ? (
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full">Bientôt</span>
                  ) : (
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full">Live</span>
                  )}
                </Tag>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-800">
            <a
              href="https://aevia-security.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
            >
              Audit gratuit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
