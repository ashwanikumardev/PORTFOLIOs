# QuantaAI Studio — Full Website Development Prompt

Use this as the master brief. Paste it into Claude Code (or any AI coding tool) pointed at the repo, or hand it to a developer.

---

## 1. Project Overview

Build/convert a website into **QuantaAI Studio**, an AI-powered creative agency that produces advertising video, creative design, branding, and websites for brands. The existing repo is a personal developer portfolio (Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, framer-motion, lucide-react) — reuse this stack. Repurpose the homepage and remove/relocate personal-portfolio-only features (resume data, blog, GitHub calendar, command palette, sound provider) rather than deleting the repo's working infrastructure (routing, theming, analytics, SEO setup).

**Tagline:** AI Ads. Real Results.
**One-line positioning:** QuantaAI Studio is an AI-powered creative agency that helps brands grow through premium video advertising, creative design, branding, websites, and AI-driven marketing solutions.

## 2. Brand Identity

**Name:** QuantaAI Studio
**Mission:** Help businesses grow with cinematic AI-powered advertising, creative design, and digital branding.
**Vision:** Become one of the world's leading AI creative agencies, delivering world-class advertising, branding, and content production.
**Personality:** Premium, modern, minimal, AI-first, results-driven.

**Colors**
| Name | Hex | Usage |
|---|---|---|
| Black | `#0B0B0B` | Primary background |
| White | `#FFFFFF` | Primary text on dark, light-mode background |
| Electric Blue | `#3B82F6` | Accent — CTAs, links, icon highlights, gradient |
| Purple | `#7C3AED` | Accent — gradients, secondary highlights |

Use blue/purple as accents only (gradients, glows, icon color, small UI details) — do not fill large areas with them. Keep the base premium/minimal, not a "generic AI gradient" look.

**Fonts**
- **Space Grotesk** — display/headlines
- **Manrope** — body copy
- **Sora** — buttons, labels, eyebrows, nav
- Plus Jakarta Sans available as an alternate if variety is needed elsewhere

**Signature visual motif:** timecode-style labels (`00:00:XX:XX`) used as section eyebrows/dividers and in the process timeline, instead of generic numbered steps (01/02/03) — ties the design to video production, which is the core service.

## 3. Tech Requirements

- Next.js 14 (App Router), TypeScript
- Tailwind CSS with CSS-variable theme tokens (reuse existing `globals.css` variable pattern; add `electric` and `purple` as new color tokens)
- Component library: keep existing shadcn/ui primitives where useful (buttons, dialogs, tooltips) — don't force new UI kits
- Animation: framer-motion for entrance/scroll animations, used sparingly (page-load hero sequence + a few scroll reveals — avoid animating every element)
- Icons: lucide-react
- Fully responsive: mobile-first, test at 375px, 768px, 1024px, 1440px
- Accessible: visible keyboard focus states, semantic HTML, alt text on all images, respects `prefers-reduced-motion`
- SEO: update `metadata` in `layout.tsx` (title, description, OG image, Twitter card) to QuantaAI Studio branding; update `sitemap.xml`, `manifest.json`, favicons
- Deploy target: same as current (Vercel)

## 4. Site Structure & Section-by-Section Content

### Navbar
Logo "QuantaAI Studio" (wordmark, "AI" in electric blue) + links to Services, Portfolio, Process, Pricing, FAQ + "Book a Call" CTA button. Sticky, transparent at top, solid/blurred on scroll.

### 1. Hero
- **Headline:** AI-Powered Ads That Drive Real Results
- **Subheadline:** Create cinematic AI commercials, social media ads, and high-converting creatives for your brand.
- **CTAs:** "Book a Call" (primary), "View Portfolio" (secondary)
- Include a small stats row (ads produced, avg turnaround, brands served) — use placeholder numbers, flag as editable.

### 2. Trusted By
Logo strip or scrolling marquee of client logos / industries served. Use industry names as placeholder until real client logos exist: E-commerce, Restaurants & Cafés, Real Estate, Healthcare & Clinics, Fashion, Jewelry, Gyms, Salons, Startups, Local Businesses.

### 3. Services
Group into these categories (grid of cards, one per item, icon + short description):

**AI Advertising:** AI Video Ads, Commercials, Product Ads, Social Media Ads, YouTube Ads, UGC-Style Ads
**Creative Design:** Social Media Creatives, Banner Design, Product Posters, Carousel Ads, Story Ads
**Branding:** Logo Design, Brand Identity, Brand Guidelines, Packaging Concepts
**Video Production:** Motion Graphics, AI Animation, Short-form Content, Reels, Shorts
**Web & Digital:** Landing Pages, Business Websites, Portfolio Websites, Marketing Funnels
**AI Solutions:** AI Automation, AI Chatbots, Prompt Engineering, Workflow Automation

For the homepage, feature a curated top-9 subset (AI Video Ads, UGC Ads, Product Commercials, Social Media Creatives, Motion Graphics, Brand Identity, Website Design, AI Automation, Ad Campaign Strategy) and link to a full `/services` page listing everything above if the site grows beyond a single page.

### 4. Portfolio
Grid of case-study cards, filterable/categorized by: Fashion, Luxury, Food, Real Estate, Healthcare, Automotive, Technology. Each project card/page should show:
- Video preview (thumbnail or embedded player)
- Client objective
- Creative process summary
- Final outcome / result metric

Use placeholder projects (clearly marked as such) until real client work exists.

### 5. Why Choose QuantaAI Studio
Six short value props, icon + 1-2 line description each:
AI-powered production, Fast turnaround, Premium quality, Creative strategy, Scalable solutions, Dedicated support.

### 6. Our Process
Timeline of 6 steps (use timecode labels as the visual marker):
1. Discovery Call
2. Strategy & Script
3. AI Content Creation
4. Client Review
5. Final Delivery
6. Campaign Launch

### 7. Pricing
3-tier pricing (Starter / Growth / Scale or similar), clearly marked as illustrative until real rates are set. Include a features checklist per tier and a CTA on each.

### 8. Testimonials
Card grid or carousel of client quotes — name, role/company, quote. Use placeholders until real testimonials exist.

### 9. FAQ
Accordion covering: services offered, revision policy, timelines, file/asset ownership, workflow, and how AI production works. Minimum 5 questions.

### 10. Contact
- Contact form (name, email, company, project details)
- Direct email link
- WhatsApp link
- "Schedule a Call" link (placeholder for Calendly/Cal.com embed)
- Social media links

### Footer
Logo, copyright, quick links (Services, Portfolio, Contact), social icons.

## 5. Target Clients (for copy/tone reference)
E-commerce brands, restaurants & cafés, real estate companies, healthcare & clinics, fashion brands, jewelry brands, gyms, salons, startups, local businesses. Write all copy so it speaks to a business owner deciding whether AI-made ads look "cheap" — the tone should reassure on quality while emphasizing speed/cost advantage.

## 6. Copywriting Guidelines
- Active voice, plain language, no filler ("cutting-edge," "revolutionize," "game-changing" — avoid).
- Every CTA should say exactly what happens next ("Book a Call," not "Get Started").
- Keep section intros to 1–2 sentences; let the cards/list items carry detail.
- Numbers and outcomes (turnaround days, ROAS, results) should read as concrete claims, not vague superlatives — flag any placeholder metric clearly in code comments so it's not shipped as fact.

## 7. Explicitly Out of Scope for v1 (Future Expansion)
Do not build these now — just leave room to add later: AI SaaS products, AI influencer campaigns, 3D product animation, creative consulting, brand strategy retainers, enterprise marketing solutions.

## 8. Deliverables Checklist
- [ ] Updated `layout.tsx` metadata (title, description, OG/Twitter, favicon) for QuantaAI Studio
- [ ] New/updated Tailwind tokens for `electric` and `purple`, and font variables for Space Grotesk / Manrope / Sora
- [ ] All 10 sections above built as components, assembled on the homepage
- [ ] Mobile-responsive pass (375px–1440px)
- [ ] Contact form wired to a real backend (Formspree, Resend, or a Next.js API route + email service) — not just `preventDefault()`
- [ ] Removed or relocated personal-portfolio-only routes/content (resume, blog, GitHub calendar) so they don't appear on the new site unless intentionally kept
- [ ] `sitemap.xml`, `manifest.json`, and favicons updated to new branding
- [ ] Lighthouse pass: performance, accessibility, SEO all green

---

**How to use this prompt:** hand the whole document to Claude Code (or paste section-by-section) with the instruction: "Implement this against the existing repo, preserving working infrastructure (theming, analytics, SEO plumbing) and replacing personal-portfolio content with QuantaAI Studio content as specified above."