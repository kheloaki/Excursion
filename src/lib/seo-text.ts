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

export function formatSeoTitle(title: string, siteName: string = SITE.name): string {
  const normalized = title.trim();
  if (normalized.includes(siteName)) {
    return normalized.length <= MAX_TITLE ? normalized : `${normalized.slice(0, MAX_TITLE - 1).trim()}…`;
  }

  const suffix = ` | ${siteName}`;
  const available = MAX_TITLE - suffix.length;
  if (available < 10) return normalized.slice(0, MAX_TITLE);

  const base = normalized.split("|")[0]?.trim() || normalized;
  if (base.length <= available) return `${base}${suffix}`;
  return `${base.slice(0, available - 1).trim()}…${suffix}`;
}

export function resolveTourSeoMeta(tour: {
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
}): { title: string; description: string } {
  const description = clampMetaDescription(tour.metaDescription || tour.description);
  const title = formatSeoTitle(
    tour.metaTitle.includes(SITE.name) ? tour.metaTitle : `${tour.title} | Excursions Tours Flat Agadir`
  );

  return { title, description };
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
