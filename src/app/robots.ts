import type { MetadataRoute } from "next";

const BASE = "https://aspbranding.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [`${BASE}/sitemap.xml`, `${BASE}/llms.txt`, `${BASE}/llms-full.txt`],
    host: BASE,
  };
}
