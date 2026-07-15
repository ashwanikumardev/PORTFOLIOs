"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Video data — add / reorder as needed
───────────────────────────────────────────── */
const VIDEOS = [
  {
    id: "8EpGbGDgObo",
    title: "Latest AI Creative Showcase",
    description:
      "Our newest AI-powered creative production — see the future of digital advertising in action.",
    isShort: false,
  },
  {
    id: "Q5DK3KWPehk",
    title: "AI-Powered Brand Commercial",
    description:
      "Cinematic AI ad that brought the brand to life with stunning visuals and a compelling story.",
    isShort: false,
  },
  {
    id: "fjYVmOJArE4",
    title: "Short-Form Social Ad",
    description:
      "High-impact vertical short crafted to grab attention in the first three seconds.",
    isShort: true,
  },
  {
    id: "fqVaVcxtBcQ",
    title: "Product Launch Campaign",
    description:
      "Dynamic product reveal video designed to drive massive launch-day conversions.",
    isShort: false,
  },
  {
    id: "8Sze4U7BqQM",
    title: "Lifestyle Brand Story",
    description:
      "Emotionally resonant storytelling that connects audiences to the heart of the brand.",
    isShort: false,
  },
] as const;

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function embedUrl(id: string, isShort: boolean) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    rel: "0",
    modestbranding: "1",
    showinfo: "0",
    iv_load_policy: "3",
    controls: "1",
    playsinline: "1",
    fs: "1",
    enablejsapi: "1",
  });
  if (isShort) params.set("loop", "1");
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function thumbnailUrl(id: string) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function VideoShowcaseSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [iframeReady, setIframeReady] = useState(false);

  const video = VIDEOS[current];

  const goTo = useCallback((index: number, dir: 1 | -1) => {
    setIframeReady(false);
    setDirection(dir);
    setCurrent((index + VIDEOS.length) % VIDEOS.length);
  }, []);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: 0.15 },
    },
    exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
  };

  return (
    <section id="video-showcase" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="timecode">00:00:02:00</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Watch Our{" "}
            <span className="gradient-text">Latest Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-body">
            Premium AI-crafted video ads — auto-playing so you can sit back and
            watch the magic.
          </p>
        </div>

        {/* ── Main viewer ── */}
        <div className="relative">
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 rounded-3xl opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(217 91% 60% / 0.25), hsl(263 70% 58% / 0.15), transparent 70%)",
            }}
          />

          {/* Slide stage */}
          <div
            className={cn(
              "relative mx-auto overflow-hidden rounded-2xl border border-border/40 bg-black shadow-2xl shadow-black/40",
              video.isShort
                ? "max-w-[340px] aspect-[9/16]"
                : "max-w-4xl aspect-video"
            )}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {/* Blurred thumbnail while loading */}
                {!iframeReady && (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${thumbnailUrl(video.id)})`,
                      filter: "blur(4px) brightness(0.4)",
                    }}
                  />
                )}

                {/* Play spinner */}
                {!iframeReady && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-electric/90 shadow-lg shadow-electric/30 animate-pulse">
                      <Play className="size-6 ml-0.5 fill-white text-white" aria-hidden />
                    </span>
                  </div>
                )}

                {/* YouTube iframe — no raw link shown */}
                <iframe
                  key={video.id}
                  src={embedUrl(video.id, video.isShort)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  onLoad={() => setIframeReady(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Prev arrow ── */}
          <button
            onClick={prev}
            aria-label="Previous video"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-card hover:border-electric/40 hover:text-electric hover:shadow-lg hover:shadow-electric/10"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* ── Next arrow ── */}
          <button
            onClick={next}
            aria-label="Next video"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-card hover:border-electric/40 hover:text-electric hover:shadow-lg hover:shadow-electric/10"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* ── Animated title + description ── */}
        <div className="mt-8 text-center min-h-[5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground font-body max-w-lg mx-auto">
                {video.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Progress dots ── */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {VIDEOS.map((v, i) => (
            <button
              key={v.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to video ${i + 1}: ${v.title}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === current
                  ? "w-8 bg-electric"
                  : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              )}
            />
          ))}
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="mt-8 grid grid-cols-5 gap-3 sm:gap-4">
          {VIDEOS.map((v, i) => (
            <button
              key={v.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={cn(
                "group relative overflow-hidden rounded-xl border transition-all duration-200",
                i === current
                  ? "border-electric/60 ring-1 ring-electric/30 shadow-lg shadow-electric/10"
                  : "border-border/40 hover:border-border/80"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnailUrl(v.id)}
                alt={v.title}
                className={cn(
                  "w-full aspect-video object-cover transition-all duration-300",
                  i === current ? "opacity-100" : "opacity-60 group-hover:opacity-80"
                )}
              />
              {i === current && (
                <div className="absolute inset-0 bg-electric/10 pointer-events-none" />
              )}
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200",
                    i === current
                      ? "bg-electric text-white scale-110"
                      : "bg-black/50 text-white/80 group-hover:bg-electric/80 group-hover:text-white"
                  )}
                >
                  <Play className="size-3 ml-0.5 fill-current" />
                </span>
              </span>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-[9px] sm:text-[10px] font-ui font-medium text-white leading-tight line-clamp-2">
                  {v.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
