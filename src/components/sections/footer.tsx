import { SITE, NAV_ITEMS } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/10">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-0.5">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                Quanta
              </span>
              <span className="font-display text-base font-bold tracking-tight text-electric">
                AI
              </span>
              <span className="font-display text-base font-bold tracking-tight text-foreground ml-1">
                Studio
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground font-body leading-relaxed">
              AI-powered creative agency delivering premium video ads, branding,
              and design for brands that want to grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-ui font-medium uppercase tracking-wider text-muted-foreground/60">
              Navigation
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground font-body transition-colors hover:text-foreground w-fit"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-ui font-medium uppercase tracking-wider text-muted-foreground/60">
              Services
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <span className="text-sm text-muted-foreground font-body">
                AI Video Ads
              </span>
              <span className="text-sm text-muted-foreground font-body">
                Brand Identity
              </span>
              <span className="text-sm text-muted-foreground font-body">
                Social Media Creative
              </span>
              <span className="text-sm text-muted-foreground font-body">
                Website Design
              </span>
              <span className="text-sm text-muted-foreground font-body">
                AI Automation
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-ui font-medium uppercase tracking-wider text-muted-foreground/60">
              Contact
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-muted-foreground font-body transition-colors hover:text-foreground w-fit"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground font-body transition-colors hover:text-foreground w-fit"
              >
                WhatsApp
              </a>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground font-body transition-colors hover:text-foreground w-fit"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground/50 font-ui">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {Object.entries(SITE.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/50 font-ui capitalize transition-colors hover:text-foreground"
                aria-label={name}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
