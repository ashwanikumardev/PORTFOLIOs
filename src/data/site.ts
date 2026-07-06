import {
  Video,
  Megaphone,
  Palette,
  Globe,
  Bot,
  Sparkles,
  Zap,
  Clock,
  Award,
  Lightbulb,
  TrendingUp,
  HeadphonesIcon,
  Play,
  Layers,
  PenTool,
  Layout,
  Clapperboard,
  Image,
  type LucideIcon,
} from "lucide-react";

// ─── Site Configuration ───

export const SITE = {
  name: "QuantaAI Studio",
  tagline: "AI Ads. Real Results.",
  description:
    "QuantaAI Studio is an AI-powered creative agency that helps brands grow through premium video advertising, creative design, branding, websites, and AI-driven marketing solutions.",
  // PLACEHOLDER: Update with actual domain once acquired
  url: "https://quantaaistudio.com",
  email: "hello@quantaaistudio.com",
  phone: "",
  whatsapp: "https://wa.me/1234567890", // PLACEHOLDER: Update with actual WhatsApp number
  calendly: "https://calendly.com/quantaaistudio", // PLACEHOLDER: Update with actual scheduling link
  social: {
    instagram: "https://instagram.com/quantaaistudio",
    twitter: "https://x.com/quantaaistudio",
    linkedin: "https://linkedin.com/company/quantaaistudio",
    youtube: "https://youtube.com/@quantaaistudio",
  },
};

// ─── Navigation ───

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// ─── Stats ───

export interface Stat {
  value: string;
  label: string;
}

// PLACEHOLDER: Replace with real metrics before launch
export const STATS: Stat[] = [
  { value: "150+", label: "Ads Produced" },
  { value: "48h", label: "Avg. Turnaround" },
  { value: "80+", label: "Brands Served" },
];

// ─── Trusted By ───

export const TRUSTED_BY: string[] = [
  "E-commerce",
  "Restaurants & Cafés",
  "Real Estate",
  "Healthcare & Clinics",
  "Fashion",
  "Jewelry",
  "Gyms",
  "Salons",
  "Startups",
  "Local Businesses",
];

// ─── Services ───

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export const ALL_SERVICES: Service[] = [
  // AI Advertising
  { title: "AI Video Ads", description: "High-converting video ads created with AI production pipelines.", icon: Video, category: "AI Advertising" },
  { title: "Commercials", description: "Cinematic brand commercials that tell your story in seconds.", icon: Clapperboard, category: "AI Advertising" },
  { title: "Product Ads", description: "Showcase your products with stunning AI-generated visuals.", icon: Image, category: "AI Advertising" },
  { title: "Social Media Ads", description: "Scroll-stopping ads optimized for every platform.", icon: Megaphone, category: "AI Advertising" },
  { title: "YouTube Ads", description: "Pre-roll and mid-roll ads that hold attention and convert.", icon: Play, category: "AI Advertising" },
  { title: "UGC-Style Ads", description: "Authentic-feeling user-generated content at scale.", icon: Sparkles, category: "AI Advertising" },

  // Creative Design
  { title: "Social Media Creatives", description: "On-brand graphics for posts, stories, and campaigns.", icon: Palette, category: "Creative Design" },
  { title: "Banner Design", description: "Eye-catching banners for web, email, and display networks.", icon: Layout, category: "Creative Design" },
  { title: "Product Posters", description: "Premium product photography and poster compositions.", icon: Image, category: "Creative Design" },
  { title: "Carousel Ads", description: "Multi-slide carousels that guide viewers through your offer.", icon: Layers, category: "Creative Design" },
  { title: "Story Ads", description: "Vertical-first ads designed for Instagram and TikTok stories.", icon: Sparkles, category: "Creative Design" },

  // Branding
  { title: "Logo Design", description: "Memorable logos that capture your brand essence.", icon: PenTool, category: "Branding" },
  { title: "Brand Identity", description: "Complete visual identity systems from colors to typography.", icon: Palette, category: "Branding" },
  { title: "Brand Guidelines", description: "Detailed style guides to keep your brand consistent everywhere.", icon: Layers, category: "Branding" },
  { title: "Packaging Concepts", description: "Product packaging designs that stand out on shelves and screens.", icon: Award, category: "Branding" },

  // Video Production
  { title: "Motion Graphics", description: "Dynamic animated graphics for ads, explainers, and social.", icon: Sparkles, category: "Video Production" },
  { title: "AI Animation", description: "Character and product animations powered by AI tools.", icon: Bot, category: "Video Production" },
  { title: "Short-form Content", description: "Reels, Shorts, and TikToks optimized for engagement.", icon: Video, category: "Video Production" },

  // Web & Digital
  { title: "Landing Pages", description: "High-converting landing pages built for speed and results.", icon: Globe, category: "Web & Digital" },
  { title: "Business Websites", description: "Professional websites that establish trust and drive leads.", icon: Globe, category: "Web & Digital" },
  { title: "Portfolio Websites", description: "Showcase your work with a beautifully designed portfolio.", icon: Layout, category: "Web & Digital" },
  { title: "Marketing Funnels", description: "End-to-end funnel design from awareness to conversion.", icon: TrendingUp, category: "Web & Digital" },

  // AI Solutions
  { title: "AI Automation", description: "Automate repetitive tasks and workflows with AI agents.", icon: Bot, category: "AI Solutions" },
  { title: "AI Chatbots", description: "Intelligent chatbots that handle customer queries 24/7.", icon: HeadphonesIcon, category: "AI Solutions" },
  { title: "Prompt Engineering", description: "Custom AI prompts tailored to your creative and business needs.", icon: Lightbulb, category: "AI Solutions" },
  { title: "Workflow Automation", description: "Streamline your operations with intelligent process automation.", icon: Zap, category: "AI Solutions" },
];

// Homepage featured subset (top 9)
export const FEATURED_SERVICES: Service[] = [
  ALL_SERVICES.find((s) => s.title === "AI Video Ads")!,
  ALL_SERVICES.find((s) => s.title === "UGC-Style Ads")!,
  ALL_SERVICES.find((s) => s.title === "Commercials")!,
  ALL_SERVICES.find((s) => s.title === "Social Media Creatives")!,
  ALL_SERVICES.find((s) => s.title === "Motion Graphics")!,
  ALL_SERVICES.find((s) => s.title === "Brand Identity")!,
  ALL_SERVICES.find((s) => s.title === "Business Websites")!,
  ALL_SERVICES.find((s) => s.title === "AI Automation")!,
  ALL_SERVICES.find((s) => s.title === "Marketing Funnels")!,
];

// ─── Portfolio ───

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  objective: string;
  process: string;
  result: string;
  thumbnail: string; // path or placeholder
  videoUrl?: string; // YouTube or video embed URL
}

// PLACEHOLDER: Replace with real case studies (first item is a real video)
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "AI-Powered Brand Ad Demo",
    category: "AI Advertising",
    description: "A showcase reel demonstrating QuantaAI Studio's AI-powered ad production capabilities.",
    objective: "Demonstrate the quality and speed of AI-generated video advertising.",
    process: "AI video generation, cinematic editing, and brand-aligned post-production.",
    result: "Watch the full demo to see AI ads in action.",
    thumbnail: "/portfolio/demo-thumbnail.jpg",
    videoUrl: "https://youtube.com/shorts/EndU_MGXWr8",
  },
  {
    title: "LuxeWear Spring Campaign",
    category: "Fashion",
    description: "A cinematic AI video campaign for a luxury fashion brand's spring collection launch.",
    objective: "Drive pre-orders and brand awareness for the new collection.",
    process: "AI-generated lookbook visuals combined with motion graphics and soundtrack design.",
    result: "3.2x ROAS within the first 2 weeks of campaign launch.", // PLACEHOLDER metric
    thumbnail: "/portfolio/fashion-placeholder.jpg",
  },
  {
    title: "GreenBite Restaurant Rebrand",
    category: "Food",
    description: "Complete brand identity and social media ad package for an organic restaurant chain.",
    objective: "Rebrand from casual dining to premium organic dining experience.",
    process: "Brand strategy, logo redesign, menu photography, and 30-day social content calendar.",
    result: "45% increase in social engagement within 30 days.", // PLACEHOLDER metric
    thumbnail: "/portfolio/food-placeholder.jpg",
  },
  {
    title: "SkyView Properties Launch",
    category: "Real Estate",
    description: "AI-powered virtual tour videos and property listing ads for a luxury real estate developer.",
    objective: "Generate qualified leads for a new luxury apartment complex.",
    process: "AI virtual staging, drone footage integration, and targeted social media ad creatives.",
    result: "120+ qualified leads in the first month.", // PLACEHOLDER metric
    thumbnail: "/portfolio/realestate-placeholder.jpg",
  },
  {
    title: "VitaCare Clinic Awareness",
    category: "Healthcare",
    description: "Patient-friendly video ads and social content for a multi-specialty healthcare clinic.",
    objective: "Build trust and drive appointment bookings through digital channels.",
    process: "Testimonial-style AI videos, educational content series, and Google Ads creatives.",
    result: "2x increase in online appointment bookings.", // PLACEHOLDER metric
    thumbnail: "/portfolio/healthcare-placeholder.jpg",
  },
  {
    title: "AutoPrime Launch Film",
    category: "Automotive",
    description: "A 60-second AI-generated product launch film for an electric vehicle brand.",
    objective: "Create buzz around the EV launch with a premium brand film.",
    process: "AI cinematic sequences, sound design, and multi-platform ad cut-downs.",
    result: "500K+ views across platforms in the first week.", // PLACEHOLDER metric
    thumbnail: "/portfolio/auto-placeholder.jpg",
  },
  {
    title: "NexTech SaaS Explainer",
    category: "Technology",
    description: "Motion graphics explainer video and landing page for a B2B SaaS product.",
    objective: "Simplify a complex product offering and increase demo requests.",
    process: "Script writing, AI animation, landing page design, and A/B tested ad creatives.",
    result: "35% increase in demo signups.", // PLACEHOLDER metric
    thumbnail: "/portfolio/tech-placeholder.jpg",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "AI Advertising",
  "Fashion",
  "Luxury",
  "Food",
  "Real Estate",
  "Healthcare",
  "Automotive",
  "Technology",
];

// ─── Why Choose Us ───

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "AI-Powered Production",
    description: "We use cutting-edge AI tools to create premium content faster and more affordably than traditional production.",
    icon: Bot,
  },
  {
    title: "Fast Turnaround",
    description: "Most projects delivered within 48–72 hours. No weeks of back-and-forth — just results.",
    icon: Zap,
  },
  {
    title: "Premium Quality",
    description: "Every deliverable looks and feels like it came from a top-tier agency. AI-powered, human-refined.",
    icon: Award,
  },
  {
    title: "Creative Strategy",
    description: "We don't just make ads — we build campaigns grounded in data, audience insight, and conversion psychology.",
    icon: Lightbulb,
  },
  {
    title: "Scalable Solutions",
    description: "From a single ad to a full campaign suite, our production scales with your business needs.",
    icon: TrendingUp,
  },
  {
    title: "Dedicated Support",
    description: "A real person manages your project from start to finish. No AI chatbot support — just human attention.",
    icon: HeadphonesIcon,
  },
];

// ─── Process ───

export interface ProcessStep {
  timecode: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    timecode: "00:00:01:00",
    title: "Discovery Call",
    description: "We learn about your brand, goals, audience, and budget. No commitment — just a conversation.",
  },
  {
    timecode: "00:00:02:00",
    title: "Strategy & Script",
    description: "We craft a creative brief, write scripts, and define the visual direction for your campaign.",
  },
  {
    timecode: "00:00:03:00",
    title: "AI Content Creation",
    description: "Our team produces your ads, visuals, and videos using AI-powered production tools.",
  },
  {
    timecode: "00:00:04:00",
    title: "Client Review",
    description: "You review the first draft and share feedback. We refine until it's exactly right.",
  },
  {
    timecode: "00:00:05:00",
    title: "Final Delivery",
    description: "You receive all final files in every format you need — ready to publish.",
  },
  {
    timecode: "00:00:06:00",
    title: "Campaign Launch",
    description: "We help you launch and optimize your campaigns for maximum reach and conversions.",
  },
];

// ─── Pricing ───

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  highlighted: boolean;
}

// PLACEHOLDER: All pricing is illustrative — update before launch
export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$499",
    period: "/project",
    description: "Perfect for small businesses and first-time clients testing AI-powered creative.",
    features: [
      { text: "1 AI video ad (up to 30s)", included: true },
      { text: "2 static ad creatives", included: true },
      { text: "1 revision round", included: true },
      { text: "Social media sizing", included: true },
      { text: "48-hour turnaround", included: true },
      { text: "Brand strategy session", included: false },
      { text: "Campaign management", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Book a Call",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    period: "/month",
    description: "For growing brands that need consistent, high-quality creative every month.",
    features: [
      { text: "4 AI video ads per month", included: true },
      { text: "8 static ad creatives", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "All platform sizing", included: true },
      { text: "24-hour turnaround", included: true },
      { text: "Brand strategy session", included: true },
      { text: "Basic campaign guidance", included: true },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Book a Call",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$2,999",
    period: "/month",
    description: "Full-service creative partnership for brands ready to scale their advertising.",
    features: [
      { text: "Unlimited AI video ads", included: true },
      { text: "Unlimited static creatives", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "All platform sizing", included: true },
      { text: "Same-day turnaround", included: true },
      { text: "Full brand strategy", included: true },
      { text: "Campaign management", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Book a Call",
    highlighted: false,
  },
];

// ─── Testimonials ───

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// PLACEHOLDER: Replace with real client testimonials before launch
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "QuantaAI delivered our entire ad campaign in 3 days. The quality was indistinguishable from what our previous agency took 3 weeks to produce.",
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "LuxeWear",
  },
  {
    quote: "We were skeptical about AI-made ads, but the results speak for themselves. Our ROAS doubled within the first month.",
    name: "Marcus Rivera",
    role: "Founder",
    company: "GreenBite",
  },
  {
    quote: "The combination of speed, quality, and price is unmatched. QuantaAI is our go-to for all video and creative needs.",
    name: "Priya Sharma",
    role: "Head of Growth",
    company: "NexTech",
  },
  {
    quote: "From concept to final delivery, QuantaAI made the entire process effortless. Our property listings have never looked better.",
    name: "James Whitfield",
    role: "CEO",
    company: "SkyView Properties",
  },
  {
    quote: "Their AI-powered production is genuinely premium. Every video and graphic they've delivered has exceeded our expectations.",
    name: "Aisha Patel",
    role: "Brand Manager",
    company: "VitaCare Clinics",
  },
  {
    quote: "We needed 20 ad variants in a week for A/B testing. QuantaAI delivered 30 — all on brief, all on time.",
    name: "David Kim",
    role: "Performance Marketer",
    company: "AutoPrime",
  },
];

// ─── FAQ ───

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What services does QuantaAI Studio offer?",
    answer:
      "We provide AI-powered video ads, social media creatives, brand identity design, motion graphics, website design, and AI automation solutions. Whether you need a single product ad or a full campaign suite, we've got you covered.",
  },
  {
    question: "How does AI-powered ad production work?",
    answer:
      "We use a combination of state-of-the-art AI generation tools and human creative direction. AI handles the heavy production work — generating visuals, compositing footage, and creating variations — while our creative team directs the strategy, scripting, and quality assurance. The result is agency-quality work delivered in a fraction of the time and cost.",
  },
  {
    question: "What is your revision policy?",
    answer:
      "Starter projects include 1 round of revisions. Growth and Scale plans include unlimited revisions. We work with you until you're completely satisfied with the final deliverable.",
  },
  {
    question: "How fast is the turnaround?",
    answer:
      "Most projects are delivered within 48–72 hours. Growth plan clients enjoy 24-hour turnaround, and Scale plan clients receive same-day delivery for standard requests.",
  },
  {
    question: "Who owns the final files and assets?",
    answer:
      "You do. Once a project is delivered and paid for, all final files, source assets, and rights transfer to you completely. You're free to use, modify, and distribute the work however you like.",
  },
  {
    question: "Do I need to provide any materials to get started?",
    answer:
      "Not necessarily. If you have brand guidelines, logos, product photos, or specific references, we'll use them. If you're starting from scratch, we can handle everything from brand creation to final delivery.",
  },
];
