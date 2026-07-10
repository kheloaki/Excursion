import type { Locale } from "./config";
import { locales, defaultLocale } from "./config";
import { SITE } from "@/data/site";
import { getLocalizedTourPath, getTourIdFromSlug } from "@/data/tours";

type StaticPage = "about" | "contact" | "privacy-policy" | "terms-and-conditions";

const PAGE_SLUGS: Record<Locale, Record<StaticPage, string>> = {
  en: {
    about: "about",
    contact: "contact",
    "privacy-policy": "privacy-policy",
    "terms-and-conditions": "terms-and-conditions",
  },
  fr: {
    about: "a-propos",
    contact: "contact",
    "privacy-policy": "politique-de-confidentialite",
    "terms-and-conditions": "conditions-generales",
  },
  es: {
    about: "sobre-nosotros",
    contact: "contacto",
    "privacy-policy": "politica-de-privacidad",
    "terms-and-conditions": "terminos-y-condiciones",
  },
  ar: {
    about: "من-نحن",
    contact: "اتصل-بنا",
    "privacy-policy": "سياسة-الخصوصية",
    "terms-and-conditions": "الشروط-والأحكام",
  },
  pl: {
    about: "o-nas",
    contact: "kontakt",
    "privacy-policy": "polityka-prywatnosci",
    "terms-and-conditions": "regulamin",
  },
  de: {
    about: "uber-uns",
    contact: "kontakt",
    "privacy-policy": "datenschutz",
    "terms-and-conditions": "agb",
  },
};

export function localizedPath(locale: Locale, path: string = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function absoluteUrl(locale: Locale, path: string = ""): string {
  return `${SITE.domain}${localizedPath(locale, path)}`;
}

export function pagePath(locale: Locale, page: StaticPage): string {
  return localizedPath(locale, `/${PAGE_SLUGS[locale][page]}`);
}

export function tourPublicPath(locale: Locale, tourSlug: string): string {
  return getLocalizedTourPath(
    locale,
    getTourIdFromSlug(locale, tourSlug) ??
      getTourIdFromSlug("en", tourSlug) ??
      "desert-trip"
  );
}

export function getHomePath(locale: Locale): string {
  return localizedPath(locale);
}

export function buildAlternateLanguages(
  getPath: (locale: Locale) => string
): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = `${SITE.domain}${getPath(locale)}`;
  }
  alternates["x-default"] = `${SITE.domain}${getPath(defaultLocale)}`;
  return alternates;
}

export function buildTourAlternates(tourId: import("@/data/tours").TourId): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = `${SITE.domain}${getLocalizedTourPath(locale, tourId)}`;
  }
  alternates["x-default"] = `${SITE.domain}${getLocalizedTourPath(defaultLocale, tourId)}`;
  return alternates;
}

export { PAGE_SLUGS };
