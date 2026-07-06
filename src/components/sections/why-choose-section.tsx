"use client";

import { VALUE_PROPS } from "@/data/site";
import { motion } from "framer-motion";

export function WhyChooseSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="timecode">00:00:05:00</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose QuantaAI Studio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-body">
            We combine AI production speed with human creative quality —
            delivering agency-level work at a fraction of the cost.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border/30 bg-card/20 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-electric/10 to-purple/10 p-3">
                <prop.icon className="size-5 text-electric" />
              </div>
              <h3 className="font-display text-base font-semibold tracking-tight">
                {prop.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
