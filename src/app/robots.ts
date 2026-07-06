import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // PLACEHOLDER: Update domain when acquired
  const baseUrl = "https://quantaaistudio.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
