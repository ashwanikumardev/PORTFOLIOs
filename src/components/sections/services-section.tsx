"use client";

import { FEATURED_SERVICES } from "@/data/site";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="timecode">00:00:03:00</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-body">
            From AI-powered video ads to complete brand identities, we deliver
            the creative assets your brand needs to grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border/40 bg-card/30 p-6 backdrop-blur-sm card-hover"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-xl border border-electric/10 bg-electric/5 p-3 text-electric">
                <service.icon className="size-5" />
              </div>

              {/* Content */}
              <h3 className="font-display text-base font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>

              {/* Hover border glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(217 91% 60% / 0.06), hsl(263 70% 58% / 0.06))",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Link to full services */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground/60 font-ui">
            And many more — including social media creatives, packaging design,
            AI chatbots, and marketing funnels.
          </p>
        </div>
      </div>
    </section>
  );
}
