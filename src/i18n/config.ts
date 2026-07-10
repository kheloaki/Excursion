export const locales = ["en", "fr", "es", "ar", "pl", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  ar: "العربية",
  pl: "Polski",
  de: "Deutsch",
};

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
  ar: "AR",
  pl: "PL",
  de: "DE",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  ar: "ar_MA",
  pl: "pl_PL",
  de: "de_DE",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}
