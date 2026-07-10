import type { Locale } from "@/i18n/config";
import { SITE } from "@/data/site";

const MAP_LANG: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  es: "es",
  de: "de",
  pl: "pl",
  ar: "ar",
};

/** Embed map iframe src (no API key) centred on business coordinates */
export function googleMapsEmbedUrl(locale: Locale): string {
  const { latitude, longitude } = SITE.geo;
  const hl = MAP_LANG[locale];
  const q = encodeURIComponent(SITE.address.formatted);
  return `https://maps.google.com/maps?q=${q}&ll=${latitude},${longitude}&hl=${hl}&z=15&output=embed`;
}
