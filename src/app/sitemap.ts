import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { buildAlternateLanguages, buildTourAlternates, getHomePath, pagePath } from "@/i18n/routing";
import { getAllLocalizedTourPaths, getLocalizedTourPath } from "@/data/tours";
import {
  buildServiceAlternates,
  buildServicesIndexAlternates,
  getAllLocalizedServicePaths,
  getLocalizedServicePath,
  getServicesIndexPath,
} from "@/data/services-routing";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["about", "contact", "privacy-policy", "terms-and-conditions"] as const;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${SITE.domain}${getHomePath(locale)}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
      alternates: { languages: buildAlternateLanguages((l) => getHomePath(l)) },
    });
  }

  for (const locale of locales) {
    entries.push({
      url: `${SITE.domain}${getServicesIndexPath(locale)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: buildServicesIndexAlternates() },
    });
  }

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${SITE.domain}${pagePath(locale, page)}`,
        lastModified: new Date(),
        changeFrequency: page.includes("privacy") || page.includes("terms") ? "yearly" : "monthly",
        priority: 0.6,
        alternates: { languages: buildAlternateLanguages((l) => pagePath(l, page)) },
      });
    }
  }

  for (const { locale, id } of getAllLocalizedServicePaths()) {
    entries.push({
      url: `${SITE.domain}${getLocalizedServicePath(locale, id)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: { languages: buildServiceAlternates(id) },
    });
  }

  for (const { locale, id } of getAllLocalizedTourPaths()) {
    entries.push({
      url: `${SITE.domain}${getLocalizedTourPath(locale, id)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: buildTourAlternates(id) },
    });
  }

  return entries;
}
