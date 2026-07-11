import { SITE } from "@/data/site";

const MAX_TITLE = 60;
const MAX_DESCRIPTION = 155;

/** Strip prices, fake review claims, and filler from meta copy. */
export function cleanMetaDescription(text: string): string {
  return text
    .replace(/\s*(D[èe]s|from|ab|od)\s+\d+\s*[£€$]?\.?/gi, "")
    .replace(/\s*\d+\s*[£€$]/g, "")
    .replace(/\s*Book now\.?/gi, "")
    .replace(/\s*Avis 5 étoiles\.?/gi, "")
    .replace(/\s*تقييم 5 نجوم\.?/g, "")
    .replace(/\s*Service 5 étoiles[^.]*\.?/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+\./g, ".")
    .trim();
}

export function clampMetaDescription(text: string, maxLength = MAX_DESCRIPTION): string {
  const cleaned = cleanMetaDescription(text);
  if (!cleaned) return "";
  if (cleaned.length <= maxLength) return cleaned;
  const slice = cleaned.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const trimmed = (lastSpace > maxLength * 0.6 ? slice.slice(0, lastSpace) : slice).trim();
  return `${trimmed}…`;
}

function stripBrandFromTitle(title: string, siteName: string): string {
  const parts = title
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  const withoutBrand = parts.filter((part) => {
    const lower = part.toLowerCase();
    const brand = siteName.toLowerCase();
    return lower !== brand && !lower.startsWith(`${brand} `) && !lower.endsWith(` ${brand}`);
  });

  if (withoutBrand.length > 0) {
    return withoutBrand[0]!;
  }

  return parts[0]?.replace(siteName, "").replace(/\s+/g, " ").trim() || title.trim();
}

function truncateAtWord(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const slice = text.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${(lastSpace > maxLength * 0.5 ? slice.slice(0, lastSpace) : slice).trim()}…`;
}

/** Build a single SEO title ≤60 chars: "{page} | {siteName}". */
export function formatSeoTitle(title: string, siteName: string = SITE.name): string {
  const primary = stripBrandFromTitle(title, siteName);
  const suffix = ` | ${siteName}`;
  const maxPrimary = MAX_TITLE - suffix.length;

  if (maxPrimary < 8) {
    return truncateAtWord(primary, MAX_TITLE);
  }

  return `${truncateAtWord(primary, maxPrimary)}${suffix}`;
}

export function resolveTourSeoMeta(tour: {
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
}): { title: string; description: string } {
  return {
    title: formatSeoTitle(tour.metaTitle || tour.title),
    description: clampMetaDescription(tour.metaDescription || tour.description),
  };
}

export function resolveStaticPageMeta(
  pageTitle: string,
  description: string | undefined,
  fallbackBody?: string
): { title: string; description: string } {
  return {
    title: formatSeoTitle(pageTitle),
    description: clampMetaDescription(description || fallbackBody || SITE.seoDescription),
  };
}
