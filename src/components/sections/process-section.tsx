"use client";

import { PROCESS_STEPS } from "@/data/site";
import { motion } from "framer-motion";

export function ProcessSection() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[400px] rounded-full opacity-10 blur-[150px]"
        style={{
          background: "radial-gradient(ellipse, hsl(217 91% 60%), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="timecode">00:00:06:00</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-body">
            From first call to campaign launch — here&apos;s how we bring your
            vision to life.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-[22px] top-0 bottom-0 w-px sm:left-1/2 sm:-translate-x-px"
            style={{
              background:
                "linear-gradient(to bottom, hsl(217 91% 60% / 0.4), hsl(263 70% 58% / 0.4), transparent)",
            }}
          />

          {PROCESS_STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Mobile layout (always left-aligned) */}
                <div className="flex gap-6 sm:hidden">
                  {/* Dot */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-electric/30 bg-background">
                    <span className="text-[10px] font-ui font-bold text-electric">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1 pb-2">
                    <span className="timecode text-[10px]">{step.timecode}</span>
                    <h3 className="mt-1 font-display text-base font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop layout (alternating) */}
                <div className="hidden sm:grid sm:grid-cols-[1fr_44px_1fr] sm:items-start sm:gap-6">
                  {/* Left content */}
                  <div
                    className={
                      isLeft
                        ? "text-right pr-2"
                        : "pr-2"
                    }
                  >
                    {isLeft && (
                      <>
                        <span className="timecode text-[10px]">{step.timecode}</span>
                        <h3 className="mt-1 font-display text-base font-semibold">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-electric/30 bg-background">
                    <span className="text-[10px] font-ui font-bold text-electric">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Right content */}
                  <div className={!isLeft ? "pl-2" : "pl-2"}>
                    {!isLeft && (
                      <>
                        <span className="timecode text-[10px]">{step.timecode}</span>
                        <h3 className="mt-1 font-display text-base font-semibold">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
