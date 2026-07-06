"use client";

import { TRUSTED_BY } from "@/data/site";

export function TrustedBySection() {
  // Duplicate items for seamless infinite scroll
  const items = [...TRUSTED_BY, ...TRUSTED_BY];

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden border-y border-border/30">
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center">
        <p className="text-xs font-ui font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
          Trusted by leading brands in
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex overflow-hidden">
          <div
            className="animate-marquee flex shrink-0 items-center gap-8"
            style={{ "--marquee-duration": "35s" } as React.CSSProperties}
          >
            {items.map((industry, i) => (
              <span
                key={`${industry}-${i}`}
                className="shrink-0 rounded-full border border-border/40 bg-card/30 px-5 py-2 text-sm font-ui font-medium text-muted-foreground/80 backdrop-blur-sm whitespace-nowrap"
              >
                {industry}
              </span>
            ))}
          </div>
          <div
            className="animate-marquee flex shrink-0 items-center gap-8"
            style={{ "--marquee-duration": "35s" } as React.CSSProperties}
            aria-hidden
          >
            {items.map((industry, i) => (
              <span
                key={`${industry}-dup-${i}`}
                className="shrink-0 rounded-full border border-border/40 bg-card/30 px-5 py-2 text-sm font-ui font-medium text-muted-foreground/80 backdrop-blur-sm whitespace-nowrap"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
