import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { ogLocales, type Locale } from "@/i18n/config";
import { absoluteCanonical } from "@/lib/canonical";

export function geoMetaTags(): Record<string, string> {
  return {
    "geo.region": SITE.geo.region,
    "geo.placename": SITE.geo.placename,
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  };
}

export interface PageMetadataOptions {
  locale: Locale;
  title: string;
  description: string;
  canonicalUrl: string;
  alternateLanguages?: Record<string, string>;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  ogType?: "website" | "article";
  robots?: { index: boolean; follow: boolean };
}

export function buildPageMetadata({
  locale,
  title,
  description,
  canonicalUrl,
  alternateLanguages,
  keywords,
  image = SITE.heroImage,
  imageAlt = title,
  imageWidth = 1200,
  imageHeight = 630,
  ogType = "website",
  robots = { index: true, follow: true },
}: PageMetadataOptions): Metadata {
  const imageUrl = image.startsWith("http") ? image : `${SITE.domain}${image}`;
  const canonical = absoluteCanonical(canonicalUrl.startsWith("http") ? new URL(canonicalUrl).pathname : canonicalUrl);

  return {
    title: { absolute: title },
    description,
    keywords,
    authors: [{ name: SITE.name, url: SITE.domain }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "travel",
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: ogLocales[locale],
      type: ogType,
      images: [{ url: imageUrl, width: imageWidth, height: imageHeight, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: { url: imageUrl, alt: imageAlt },
    },
    alternates: {
      canonical,
      ...(alternateLanguages ? { languages: alternateLanguages } : {}),
    },
    robots: {
      index: robots.index,
      follow: robots.follow,
      googleBot: {
        index: robots.index,
        follow: robots.follow,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      ...geoMetaTags(),
      "content-language": locale,
    },
  };
}

export function metaDescriptionFromSections(
  description: string | undefined,
  sections: { body: string }[],
  maxLength = 160
): string {
  if (description) return description;
  const combined = sections.map((s) => s.body).join(" ");
  if (combined.length <= maxLength) return combined;
  return `${combined.slice(0, maxLength - 1).trim()}…`;
}
