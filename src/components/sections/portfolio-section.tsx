"use client";

import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Convert various YouTube URL formats to an embeddable URL.
 * Supports: youtube.com/watch?v=, youtu.be/, youtube.com/shorts/
 */
function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);

    // youtube.com/shorts/VIDEO_ID
    const shortsMatch = u.pathname.match(/\/shorts\/([^/?]+)/);
    if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1&rel=0`;

    // youtube.com/watch?v=VIDEO_ID
    const watchId = u.searchParams.get("v");
    if (watchId) return `https://www.youtube.com/embed/${watchId}?autoplay=1&rel=0`;

    // youtu.be/VIDEO_ID
    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1);
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }

    return null;
  } catch {
    return null;
  }
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [videoModal, setVideoModal] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const openVideo = (videoUrl: string, title: string) => {
    const embedUrl = getYouTubeEmbedUrl(videoUrl);
    if (embedUrl) {
      setVideoModal({ url: embedUrl, title });
    }
  };

  const closeModal = useCallback(() => {
    setVideoModal(null);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (videoModal) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [videoModal, closeModal]);

  return (
    <>
      <section id="portfolio" className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center">
            <span className="timecode">00:00:04:00</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Our Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-body">
              See how we&apos;ve helped brands across industries create
              high-performing ads and campaigns.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-ui font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-electric/10 text-electric border border-electric/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40 border border-transparent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, i) => {
              const hasVideo = !!item.videoUrl;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  layout
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm card-hover",
                    hasVideo && "cursor-pointer"
                  )}
                  onClick={
                    hasVideo
                      ? () => openVideo(item.videoUrl!, item.title)
                      : undefined
                  }
                  role={hasVideo ? "button" : undefined}
                  tabIndex={hasVideo ? 0 : undefined}
                  onKeyDown={
                    hasVideo
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openVideo(item.videoUrl!, item.title);
                          }
                        }
                      : undefined
                  }
                  aria-label={
                    hasVideo ? `Play video: ${item.title}` : item.title
                  }
                >
                  {/* Thumbnail / Video placeholder */}
                  <div className="relative aspect-video bg-gradient-to-br from-electric/10 to-purple/10 flex items-center justify-center overflow-hidden">
                    {hasVideo ? (
                      <>
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-electric/90 text-white shadow-lg shadow-electric/30 transition-transform duration-200 group-hover:scale-110">
                            <Play className="size-6 ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-[5]" />
                        {/* Video badge */}
                        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 backdrop-blur-sm">
                          <Play className="size-3 text-electric" fill="currentColor" />
                          <span className="text-[10px] font-ui font-medium text-white">
                            Video
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                        <ExternalLink className="size-8" />
                        <span className="text-xs font-ui">Preview</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-electric/10 px-2 py-0.5 text-[10px] font-ui font-medium text-electric uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-base font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Result metric */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/60">
                      <div className="h-px flex-1 bg-border/40" />
                      <span className="font-ui">{item.result}</span>
                      <div className="h-px flex-1 bg-border/40" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Video Modal ─── */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="relative z-10 w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-ui font-medium text-white/70 transition-colors hover:text-white"
                aria-label="Close video"
              >
                <span className="hidden sm:inline">Close</span>
                <X className="size-5" />
              </button>

              {/* Title */}
              <p className="absolute -top-12 left-0 text-sm font-display font-medium text-white/70 truncate max-w-[60%]">
                {videoModal.title}
              </p>

              {/* Video container — responsive for both landscape and portrait (Shorts) */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/50">
                <div className="relative w-full" style={{ paddingTop: "min(177.78%, 80vh)" }}>
                  <iframe
                    src={videoModal.url}
                    title={videoModal.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
