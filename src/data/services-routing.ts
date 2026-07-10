import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";
import { SITE, SERVICE_CATEGORIES, type ServiceCategoryId } from "./site";

export const serviceSegment: Record<Locale, string> = {
  en: "services",
  fr: "services",
  es: "servicios",
  ar: "خدمات",
  pl: "uslugi",
  de: "leistungen",
};

export const SERVICE_SLUGS: Record<Locale, Record<ServiceCategoryId, string>> = {
  en: {
    desert: "desert-trips-agadir",
    "quad-buggy": "quad-buggy-tours-agadir",
    "day-trips": "day-trips-from-agadir",
    coastal: "boat-trips-agadir",
    nature: "nature-wildlife-tours-agadir",
    culture: "culture-food-tours-agadir",
    transfers: "airport-transfers-agadir",
  },
  fr: {
    desert: "excursions-desert-agadir",
    "quad-buggy": "quad-buggy-agadir",
    "day-trips": "excursions-journee-agadir",
    coastal: "excursions-bateau-agadir",
    nature: "nature-faune-agadir",
    culture: "culture-cuisine-agadir",
    transfers: "transfert-aeroport-agadir",
  },
  es: {
    desert: "excursiones-desierto-agadir",
    "quad-buggy": "quad-buggy-agadir",
    "day-trips": "excursiones-dia-agadir",
    coastal: "excursiones-barco-agadir",
    nature: "naturaleza-agadir",
    culture: "cultura-gastronomia-agadir",
    transfers: "traslado-aeropuerto-agadir",
  },
  de: {
    desert: "wuestenausfluege-agadir",
    "quad-buggy": "quad-buggy-agadir",
    "day-trips": "tagesausfluege-agadir",
    coastal: "bootstouren-agadir",
    nature: "natur-touren-agadir",
    culture: "kultur-kulinarik-agadir",
    transfers: "flughafentransfer-agadir",
  },
  pl: {
    desert: "wycieczki-pustynia-agadir",
    "quad-buggy": "quad-buggy-agadir",
    "day-trips": "wycieczki-jednodniowe-agadir",
    coastal: "rejsy-agadir",
    nature: "natura-agadir",
    culture: "kultura-kuchnia-agadir",
    transfers: "transfer-lotnisko-agadir",
  },
  ar: {
    desert: "رحلات-الصحراء-أكادير",
    "quad-buggy": "دراجات-رباعية-أكادير",
    "day-trips": "رحلات-يومية-أكادير",
    coastal: "رحلات-بحرية-أكادير",
    nature: "طبيعة-أكادير",
    culture: "ثقافة-ومطبخ-أكادير",
    transfers: "نقل-المطار-أكادير",
  },
};

export function getServiceIdFromSlug(locale: Locale, slug: string): ServiceCategoryId | undefined {
  const slugs = SERVICE_SLUGS[locale];
  return (Object.keys(slugs) as ServiceCategoryId[]).find((id) => slugs[id] === slug);
}

export function resolveServiceId(locale: Locale, slug: string): ServiceCategoryId | undefined {
  return (
    getServiceIdFromSlug(locale, slug) ??
    resolveServiceIdFromAnyLocale(slug)
  );
}

/** Find service id when slug may belong to any locale (language switcher, bad URLs). */
export function resolveServiceIdFromAnyLocale(slug: string): ServiceCategoryId | undefined {
  for (const loc of locales) {
    const id = getServiceIdFromSlug(loc, slug);
    if (id) return id;
  }
  return undefined;
}

export function isServiceSegment(segment: string): boolean {
  return Object.values(serviceSegment).includes(segment);
}

export function getLocalizedServicePath(locale: Locale, serviceId: ServiceCategoryId): string {
  return `/${locale}/${serviceSegment[locale]}/${SERVICE_SLUGS[locale][serviceId]}`;
}

export function getServicesIndexPath(locale: Locale): string {
  return `/${locale}/${serviceSegment[locale]}`;
}

export function buildServiceAlternates(serviceId: ServiceCategoryId): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = `${SITE.domain}${getLocalizedServicePath(locale, serviceId)}`;
  }
  alternates["x-default"] = `${SITE.domain}${getLocalizedServicePath(defaultLocale, serviceId)}`;
  return alternates;
}

export function buildServicesIndexAlternates(): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = `${SITE.domain}${getServicesIndexPath(locale)}`;
  }
  alternates["x-default"] = `${SITE.domain}${getServicesIndexPath(defaultLocale)}`;
  return alternates;
}

export function getAllLocalizedServicePaths(): {
  locale: Locale;
  slug: string;
  id: ServiceCategoryId;
}[] {
  const paths: { locale: Locale; slug: string; id: ServiceCategoryId }[] = [];
  for (const locale of locales) {
    for (const cat of SERVICE_CATEGORIES) {
      paths.push({
        locale,
        slug: SERVICE_SLUGS[locale][cat.id],
        id: cat.id,
      });
    }
  }
  return paths;
}

export function getServiceCategory(serviceId: ServiceCategoryId) {
  return SERVICE_CATEGORIES.find((c) => c.id === serviceId);
}
