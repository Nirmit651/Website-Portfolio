import type { MetadataRoute } from "next";

const baseUrl = "https://nirmit.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
}
