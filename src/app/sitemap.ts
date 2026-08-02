import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { hospitals } from "@/data/hospitals";
import { guides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/medical-journey",
    "/medical-specialties",
    "/membership",
    "/destinations",
    "/guides",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const hospitalRoutes = hospitals.map((h) => ({
    url: `${site.url}/hospitals/${h.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guideRoutes = guides.map((g) => ({
    url: `${site.url}/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...hospitalRoutes, ...guideRoutes];
}
