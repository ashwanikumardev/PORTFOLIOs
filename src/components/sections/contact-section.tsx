"use client";

import { SITE } from "@/data/site";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle, Calendar } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", company: "", details: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-10 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, hsl(217 91% 60% / 0.4), hsl(263 70% 58% / 0.2), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="timecode">00:00:10:00</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground font-body">
            Ready to grow your brand with AI-powered creative? Tell us about
            your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-electric/20 bg-electric/5 p-12 text-center">
                <div className="mb-4 inline-flex rounded-full bg-electric/10 p-4">
                  <Send className="size-6 text-electric" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-body">
                  We&apos;ll review your project details and get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-ui font-medium text-electric hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-ui font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-border/50 bg-card/30 px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 backdrop-blur-sm transition-colors focus:border-electric/40 focus:outline-none focus:ring-1 focus:ring-electric/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-ui font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-border/50 bg-card/30 px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 backdrop-blur-sm transition-colors focus:border-electric/40 focus:outline-none focus:ring-1 focus:ring-electric/20"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block text-xs font-ui font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="w-full rounded-xl border border-border/50 bg-card/30 px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 backdrop-blur-sm transition-colors focus:border-electric/40 focus:outline-none focus:ring-1 focus:ring-electric/20"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-details"
                    className="mb-2 block text-xs font-ui font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="contact-details"
                    required
                    rows={5}
                    value={formState.details}
                    onChange={(e) =>
                      setFormState({ ...formState, details: e.target.value })
                    }
                    className="w-full rounded-xl border border-border/50 bg-card/30 px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 backdrop-blur-sm transition-colors focus:border-electric/40 focus:outline-none focus:ring-1 focus:ring-electric/20 resize-none"
                    placeholder="Tell us about your project — what do you need, your timeline, and any other relevant details."
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 font-ui">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-purple px-6 py-3 text-sm font-ui font-semibold text-white shadow-lg shadow-electric/20 transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:shadow-electric/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/20 px-5 py-4 text-sm font-body text-foreground transition-all hover:bg-card/40 hover:border-border"
            >
              <Mail className="size-5 text-electric" />
              <div>
                <p className="font-semibold font-display text-sm">Email Us</p>
                <p className="text-xs text-muted-foreground">{SITE.email}</p>
              </div>
            </a>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/20 px-5 py-4 text-sm font-body text-foreground transition-all hover:bg-card/40 hover:border-border"
            >
              <MessageCircle className="size-5 text-green-500" />
              <div>
                <p className="font-semibold font-display text-sm">WhatsApp</p>
                <p className="text-xs text-muted-foreground">
                  Chat with us directly
                </p>
              </div>
            </a>

            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/20 px-5 py-4 text-sm font-body text-foreground transition-all hover:bg-card/40 hover:border-border"
            >
              <Calendar className="size-5 text-purple" />
              <div>
                <p className="font-semibold font-display text-sm">
                  Schedule a Call
                </p>
                <p className="text-xs text-muted-foreground">
                  Pick a time that works
                </p>
              </div>
            </a>

            {/* Social links */}
            <div className="pt-4">
              <p className="mb-3 text-xs font-ui font-medium uppercase tracking-wider text-muted-foreground/60">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {Object.entries(SITE.social).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border/40 bg-card/20 p-2.5 text-muted-foreground transition-all hover:bg-card/40 hover:text-foreground hover:border-border"
                    aria-label={name}
                  >
                    <span className="text-xs font-ui font-medium capitalize">
                      {name.charAt(0).toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
