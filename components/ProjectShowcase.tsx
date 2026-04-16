"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectShowcaseProps {
  name: string;
  tagline: string;
  description: string;
  url: string;
  status: "live" | "soon";
  accentColor: string;
  screenshots: Screenshot[];
  features: string[];
}

export function ProjectShowcase({
  name, tagline, description, url, status,
  accentColor, screenshots, features
}: ProjectShowcaseProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % screenshots.length);
    }, 4000);
  }, [screenshots.length]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoPlay]);

  const goTo = useCallback((idx: number, dir: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(dir);
    setCurrent(idx);
    startAutoPlay();
  }, [startAutoPlay]);

  const prev = () => goTo((current - 1 + screenshots.length) % screenshots.length, -1);
  const next = () => goTo((current + 1) % screenshots.length, 1);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
      {/* Carousel */}
      <div className="relative aspect-[16/9] bg-zinc-950 overflow-hidden group">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={screenshots[current].src}
              alt={screenshots[current].alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            {screenshots[current].caption && (
              <div className="absolute bottom-3 left-4 text-xs text-zinc-400 font-medium">
                {screenshots[current].caption}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-800 cursor-pointer"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-800 cursor-pointer"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {screenshots.length > 1 && (
          <div className="absolute bottom-3 right-4 flex gap-1.5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === current ? "w-4 bg-white" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-bold text-xl">{name}</h3>
              {status === "live" ? (
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              ) : (
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 ring-1 ring-amber-500/20 px-2 py-0.5 rounded-full">
                  Coming soon
                </span>
              )}
            </div>
            <p className="text-sm font-medium" style={{ color: accentColor }}>{tagline}</p>
          </div>
          {status === "live" && url !== "#" && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-400 text-xs font-medium hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              Visit <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {features.map(f => (
            <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
