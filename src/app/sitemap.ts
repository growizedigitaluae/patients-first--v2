import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { hospitals } from "@/data/hospitals";
import { guides } from "@/data/guides";
import { destinations } from "@/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/care-areas",
    "/contact",
    "/destinations",
    "/faq",
    "/guides",
    "/how-we-help",
    "/medical-journey",
    "/medical-specialties",
    "/membership",
    "/process",
    "/wellness",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      route === "/"
        ? 1
        : ["/care-areas", "/how-we-help", "/medical-specialties", "/destinations"].includes(
              route
            )
          ? 0.9
          : 0.8,
  }));

  const destinationRoutes = destinations.map((destination) => ({
    url: `${site.url}/destinations/${destination.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const hospitalRoutes = hospitals.map((hospital) => ({
    url: `${site.url}/hospitals/${hospital.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${site.url}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...destinationRoutes,
    ...hospitalRoutes,
    ...guideRoutes,
  ];
}