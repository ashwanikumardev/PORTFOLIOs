"use client";

import { TESTIMONIALS } from "@/data/site";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[150px]"
        style={{
          background: "radial-gradient(ellipse, hsl(263 70% 58%), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="timecode">00:00:08:00</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-body">
            Results speak louder than promises. Here&apos;s what brands we&apos;ve worked
            with have to say.
          </p>
        </div>

        {/* Testimonial Grid */}
        {/* PLACEHOLDER: Replace with real client testimonials */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border/40 bg-card/30 p-6 backdrop-blur-sm"
            >
              {/* Quote icon */}
              <Quote className="mb-4 size-5 text-electric/40" />

              {/* Quote text */}
              <p className="text-sm text-foreground/90 font-body leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric/20 to-purple/20">
                  <span className="text-xs font-ui font-bold text-electric">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold font-display">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-ui">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
