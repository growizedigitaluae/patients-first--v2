import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { guides } from "@/data/guides";
import { destinations } from "@/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
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
    "/process",
    "/wellness",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
  }));

  const destinationEntries: MetadataRoute.Sitemap = destinations.map((destination) => ({
    url: `${site.url}/destinations/${destination.slug}`,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${site.url}/guides/${guide.slug}`,
  }));

  return [...staticEntries, ...destinationEntries, ...guideEntries];
}
