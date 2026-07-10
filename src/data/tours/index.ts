import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { TOUR_BASE, tourSegment } from "./types";
import type { Tour, TourId } from "./types";
import { TOUR_LOCALE_CONTENT } from "./locale-content";

export { TOUR_BASE, tourSegment } from "./types";
export type { Tour, TourId, TourCategory, TourLocaleContent } from "./types";

export function getTours(locale: Locale): Tour[] {
  return TOUR_BASE.map((base) => {
    const content = TOUR_LOCALE_CONTENT[locale][base.id];
    return { ...base, ...content };
  });
}

export function getTourBySlug(locale: Locale, slug: string): Tour | undefined {
  return getTours(locale).find((t) => t.slug === slug);
}

export function getTourById(locale: Locale, id: TourId): Tour | undefined {
  const base = TOUR_BASE.find((t) => t.id === id);
  if (!base) return undefined;
  return { ...base, ...TOUR_LOCALE_CONTENT[locale][id] };
}

export function getTourSlugById(locale: Locale, id: TourId): string {
  return TOUR_LOCALE_CONTENT[locale][id].slug;
}

export function getAllTourSlugs(locale: Locale): string[] {
  return getTours(locale).map((t) => t.slug);
}

export function getTourIdFromSlug(locale: Locale, slug: string): TourId | undefined {
  return getTourBySlug(locale, slug)?.id;
}

export function getLocalizedTourPath(locale: Locale, tourId: TourId): string {
  const segment = tourSegment[locale];
  const slug = getTourSlugById(locale, tourId);
  return `/${locale}/${segment}/${slug}`;
}

export function getAllLocalizedTourPaths(): { locale: Locale; slug: string; id: TourId }[] {
  const paths: { locale: Locale; slug: string; id: TourId }[] = [];
  for (const locale of locales) {
    for (const base of TOUR_BASE) {
      paths.push({
        locale,
        slug: TOUR_LOCALE_CONTENT[locale][base.id].slug,
        id: base.id,
      });
    }
  }
  return paths;
}
