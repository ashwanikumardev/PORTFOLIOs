"use client";

import { SITE, STATS } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, hsl(217 91% 60% / 0.3), hsl(263 70% 58% / 0.15), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="timecode">00:00:01:00</span>
        </motion.div>

        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5 text-xs font-ui font-medium text-electric">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
            </span>
            {SITE.tagline}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          AI-Powered Ads That
          <br />
          <span className="gradient-text">Drive Real Results</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl font-body leading-relaxed"
        >
          Create cinematic AI commercials, social media ads, and high-converting
          creatives for your brand.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-purple px-6 py-3 text-sm font-ui font-semibold text-white shadow-lg shadow-electric/20 transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:shadow-electric/30 hover:-translate-y-0.5"
          >
            Book a Call
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 px-6 py-3 text-sm font-ui font-semibold text-foreground backdrop-blur transition-all duration-200 hover:bg-card hover:border-border hover:-translate-y-0.5"
          >
            <Play className="size-4" />
            View Portfolio
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              {/* PLACEHOLDER: Replace with real metrics */}
              <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground font-ui uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
