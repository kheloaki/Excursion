import { defaultLocale, locales, type Locale } from "./config";

const LOCALE_BY_LANGUAGE: Record<string, Locale> = {
  en: "en",
  fr: "fr",
  es: "es",
  ar: "ar",
  pl: "pl",
  de: "de",
};

/** Pick the best supported locale from the Accept-Language header. */
export function negotiateLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const candidates = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
      const normalized = tag.trim().toLowerCase();
      const language = normalized.split("-")[0];
      return { language, q: Number.isFinite(q) ? q : 0 };
    })
    .filter((entry) => entry.language && entry.q > 0)
    .sort((a, b) => b.q - a.q);

  for (const { language } of candidates) {
    const locale = LOCALE_BY_LANGUAGE[language];
    if (locale && locales.includes(locale)) return locale;
  }

  return defaultLocale;
}
