"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles, MessageSquare, Shield, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const ecosystemProducts = [
  {
    name: "AeviaLaunch",
    href: "https://aevia-launch.vercel.app",
    description: "Launch your projects with confidence",
    icon: Sparkles,
    status: "live" as const,
  },
  {
    name: "AeviaInbox",
    href: "#",
    description: "Unified inbox for all your communications",
    icon: MessageSquare,
    status: "soon" as const,
  },
  {
    name: "AeviaSecurity",
    href: "#",
    description: "Enterprise-grade security platform",
    icon: Shield,
    status: "soon" as const,
  },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const [desktopEcosystemOpen, setDesktopEcosystemOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm text-white tracking-tight">
          vm<span className="text-violet-400">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
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

          {/* Desktop Ecosystem Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopEcosystemOpen(true)}
            onMouseLeave={() => setDesktopEcosystemOpen(false)}
          >
            <button className="px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors flex items-center gap-1">
              Products
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  desktopEcosystemOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {desktopEcosystemOpen && (
              <div className="absolute left-0 mt-1 w-80 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-3 flex flex-col gap-2">
                  {ecosystemProducts.map((product) => {
                    const Icon = product.icon;
                    const isExternal = product.href !== "#";
                    const linkProps = isExternal
                      ? {
                          href: product.href,
                          target: "_blank" as const,
                          rel: "noopener noreferrer" as const,
                        }
                      : {};

                    const linkContent = (
                      <div className="flex gap-3 items-start p-2 rounded-md hover:bg-zinc-800/60 transition-colors cursor-pointer group">
                        <Icon className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-white text-sm group-hover:text-violet-400 transition-colors">
                              {product.name}
                            </span>
                            {product.status === "soon" && (
                              <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap">
                                Soon
                              </span>
                            )}
                            {product.status === "live" && (
                              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap">
                                Live
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 line-clamp-1">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    );

                    return isExternal ? (
                      <a key={product.name} {...linkProps}>
                        {linkContent}
                      </a>
                    ) : (
                      <div key={product.name}>{linkContent}</div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="https://linkedin.com/in/valentin-milliand"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
            aria-label="Visit my LinkedIn profile"
          >
            <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Maeglin10"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
            aria-label="Visit my GitHub profile"
          >
            <GithubIcon className="w-4 h-4" aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-zinc-800 bg-[#09090b] px-6 py-3 flex flex-col gap-1" id="mobile-nav">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                pathname === l.href
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile Ecosystem Section */}
          <div className="mt-2 pt-2 border-t border-zinc-800">
            <button
              onClick={() => setMobileEcosystemOpen(!mobileEcosystemOpen)}
              className="w-full px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-white flex items-center justify-between"
            >
              <span>Ecosystem</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  mobileEcosystemOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileEcosystemOpen && (
              <div className="flex flex-col gap-1 mt-2 pl-2">
                {ecosystemProducts.map((product) => {
                  const isExternal = product.href !== "#";
                  const linkProps = isExternal
                    ? {
                        href: product.href,
                        target: "_blank" as const,
                        rel: "noopener noreferrer" as const,
                      }
                    : {};

                  const linkContent = (
                    <div className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors">
                      <span>{product.name}</span>
                      {product.status === "soon" && (
                        <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                          Soon
                        </span>
                      )}
                      {product.status === "live" && (
                        <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                          Live
                        </span>
                      )}
                    </div>
                  );

                  return isExternal ? (
                    <a key={product.name} {...linkProps}>
                      {linkContent}
                    </a>
                  ) : (
                    <div key={product.name}>{linkContent}</div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-2 pt-2 border-t border-zinc-800 flex gap-2">
            <a
              href="https://linkedin.com/in/valentin-milliand"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-white"
              aria-label="Visit my LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Maeglin10"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-white"
              aria-label="Visit my GitHub profile"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
