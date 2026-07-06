"use client";

import { PRICING_TIERS } from "@/data/site";
import { motion } from "framer-motion";
import { Check, X as XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="timecode">00:00:07:00</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-body">
            Choose a plan that fits your needs. Every plan includes
            agency-quality deliverables powered by AI.
          </p>
          {/* PLACEHOLDER: Pricing is illustrative — update before launch */}
          <p className="mt-2 text-xs text-muted-foreground/50 font-ui">
            Prices shown are illustrative. Book a call for a custom quote.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cn(
                "relative rounded-2xl border p-6 sm:p-8 backdrop-blur-sm",
                tier.highlighted
                  ? "border-electric/30 bg-electric/[0.03] shadow-lg shadow-electric/5"
                  : "border-border/40 bg-card/30"
              )}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-electric to-purple px-4 py-1 text-[11px] font-ui font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className="text-center">
                <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground font-ui">
                    {tier.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-border/40" />

              {/* Features */}
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-3 text-sm"
                  >
                    {feature.included ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-electric" />
                    ) : (
                      <XIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground/30" />
                    )}
                    <span
                      className={cn(
                        "font-body",
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground/40"
                      )}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className={cn(
                    "flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-ui font-semibold transition-all duration-200 hover:-translate-y-0.5",
                    tier.highlighted
                      ? "bg-gradient-to-r from-electric to-purple text-white shadow-lg shadow-electric/20 hover:shadow-xl hover:shadow-electric/30"
                      : "border border-border/60 bg-card/40 text-foreground hover:bg-card hover:border-border"
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
