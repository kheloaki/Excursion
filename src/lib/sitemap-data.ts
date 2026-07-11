import type { Locale } from "@/i18n/config";
import { absoluteCanonical } from "@/lib/canonical";
import { getHomePath, pagePath } from "@/i18n/routing";
import { getAllLocalizedTourPaths, getLocalizedTourPath } from "@/data/tours";
import {
  getAllLocalizedServicePaths,
  getLocalizedServicePath,
  getServicesIndexPath,
} from "@/data/services-routing";

const STATIC_PAGES = ["about", "contact", "privacy-policy", "terms-and-conditions"] as const;

export interface SitemapUrlEntry {
  loc: string;
  lastModified: Date;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export function getLocaleSitemapEntries(locale: Locale): SitemapUrlEntry[] {
  const entries: SitemapUrlEntry[] = [];
  const now = new Date();

  entries.push({
    loc: absoluteCanonical(getHomePath(locale)),
    lastModified: now,
    changeFrequency: "daily",
    priority: 1,
  });

  entries.push({
    loc: absoluteCanonical(getServicesIndexPath(locale)),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  for (const page of STATIC_PAGES) {
    entries.push({
      loc: absoluteCanonical(pagePath(locale, page)),
      lastModified: now,
      changeFrequency: page.includes("privacy") || page.includes("terms") ? "yearly" : "monthly",
      priority: 0.6,
    });
  }

  for (const { locale: entryLocale, id } of getAllLocalizedServicePaths()) {
    if (entryLocale !== locale) continue;
    entries.push({
      loc: absoluteCanonical(getLocalizedServicePath(locale, id)),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  for (const { locale: entryLocale, id } of getAllLocalizedTourPaths()) {
    if (entryLocale !== locale) continue;
    entries.push({
      loc: absoluteCanonical(getLocalizedTourPath(locale, id)),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  return entries;
}

export function getLocaleSitemapPath(locale: Locale): string {
  return absoluteCanonical(`/sitemap-pages-${locale}.xml`);
}
