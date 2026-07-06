import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Sora } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BackToTop } from "@/components/back-to-top";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  // PLACEHOLDER: Update metadataBase with actual domain
  metadataBase: new URL("https://quantaaistudio.com"),
  title: {
    default: "QuantaAI Studio | AI-Powered Creative Agency",
    template: "%s | QuantaAI Studio",
  },
  description:
    "QuantaAI Studio is an AI-powered creative agency that helps brands grow through premium video advertising, creative design, branding, websites, and AI-driven marketing solutions.",
  keywords: [
    "AI ads",
    "AI video ads",
    "AI advertising agency",
    "AI creative agency",
    "video production",
    "brand identity",
    "AI marketing",
    "social media ads",
    "UGC ads",
    "creative design agency",
    "QuantaAI Studio",
  ],
  authors: [{ name: "QuantaAI Studio" }],
  creator: "QuantaAI Studio",
  publisher: "QuantaAI Studio",
  alternates: {
    canonical: "https://quantaaistudio.com",
  },
  openGraph: {
    title: "QuantaAI Studio | AI Ads. Real Results.",
    description:
      "AI-powered creative agency delivering premium video ads, branding, and creative design for brands that want to grow.",
    url: "https://quantaaistudio.com",
    siteName: "QuantaAI Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://quantaaistudio.com/og.png",
        width: 1200,
        height: 630,
        alt: "QuantaAI Studio — AI Ads. Real Results.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantaAI Studio | AI Ads. Real Results.",
    description:
      "AI-powered creative agency delivering premium video ads, branding, and creative design.",
    images: ["https://quantaaistudio.com/og.png"],
    creator: "@quantaaistudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicons/android-icon-192x192.png",
      },
    ],
  },
  manifest: "/favicons/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "QuantaAI Studio",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0B0B0B",
    "theme-color": "#0B0B0B",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          spaceGrotesk.variable,
          manrope.variable,
          sora.variable,
          "font-body antialiased"
        )}
      >
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider delayDuration={0}>
            {children}
            <Analytics />
            <SpeedInsights />
            <BackToTop />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}