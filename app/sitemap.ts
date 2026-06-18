import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { TRACKS } from "@/constants/tracks";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/level-test`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/tracks`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const trackRoutes: MetadataRoute.Sitemap = TRACKS.flatMap((track) => [
    {
      url: `${base}/tracks/${track.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tracks/${track.slug}/curriculum`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]);

  return [...staticRoutes, ...trackRoutes];
}
