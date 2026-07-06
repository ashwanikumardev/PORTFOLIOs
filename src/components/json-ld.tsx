export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QuantaAI Studio",
    // PLACEHOLDER: Update with actual domain
    url: "https://quantaaistudio.com",
    description:
      "AI-powered creative agency delivering premium video ads, branding, creative design, and AI-driven marketing solutions.",
    foundingDate: "2024",
    logo: "https://quantaaistudio.com/logo.png",
    sameAs: [
      "https://instagram.com/quantaaistudio",
      "https://x.com/quantaaistudio",
      "https://linkedin.com/company/quantaaistudio",
      "https://youtube.com/@quantaaistudio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      // PLACEHOLDER: Update with actual email
      email: "hello@quantaaistudio.com",
      contactType: "customer service",
      availableLanguage: "English",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "499",
      highPrice: "2999",
      offerCount: "3",
    },
    knowsAbout: [
      "AI Video Advertising",
      "Brand Identity Design",
      "Social Media Marketing",
      "Motion Graphics",
      "Website Design",
      "AI Automation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
