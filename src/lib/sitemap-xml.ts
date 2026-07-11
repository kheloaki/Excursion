import { SITE } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getLocaleSitemapEntries, getLocaleSitemapPath, type SitemapUrlEntry } from "./sitemap-data";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatLastMod(date: Date): string {
  return date.toISOString();
}

export function buildSitemapIndexXml(lastModified = new Date()): string {
  const lastmod = formatLastMod(lastModified);
  const items = locales
    .map(
      (locale) => `  <sitemap>
    <loc>${escapeXml(getLocaleSitemapPath(locale))}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

export function buildUrlSetXml(entries: SitemapUrlEntry[]): string {
  const items = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${formatLastMod(entry.lastModified)}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

export function buildLocaleSitemapXml(locale: Locale): string {
  return buildUrlSetXml(getLocaleSitemapEntries(locale));
}

export const sitemapXmlHeaders = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=3600",
} as const;

export function sitemapIndexUrl(): string {
  return `${SITE.domain}/sitemap.xml`;
}
