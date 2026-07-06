import Navbar from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuantaAI Studio | AI-Powered Creative Agency",
  description:
    "QuantaAI Studio is an AI-powered creative agency that helps brands grow through premium video advertising, creative design, branding, websites, and AI-driven marketing solutions.",
  openGraph: {
    title: "QuantaAI Studio | AI Ads. Real Results.",
    description:
      "AI-powered creative agency delivering premium video ads, branding, and creative design for brands that want to grow.",
    // PLACEHOLDER: Update URL and images with actual domain
    url: "https://quantaaistudio.com",
    siteName: "QuantaAI Studio",
    images: [
      {
        url: "https://quantaaistudio.com/og.png",
        width: 1200,
        height: 630,
        alt: "QuantaAI Studio — AI Ads. Real Results.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantaAI Studio | AI Ads. Real Results.",
    description:
      "AI-powered creative agency delivering premium video ads, branding, and creative design.",
    images: ["https://quantaaistudio.com/og.png"],
    creator: "@quantaaistudio",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
