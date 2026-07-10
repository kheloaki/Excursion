"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeLabels, locales } from "@/i18n/config";
import { getLocalizedTourPath, getTourIdFromSlug, tourSegment } from "@/data/tours";
import type { TourId } from "@/data/tours";
import {
  getLocalizedServicePath,
  getServicesIndexPath,
  isServiceSegment,
  resolveServiceIdFromAnyLocale,
} from "@/data/services-routing";
import { PAGE_SLUGS } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
}

function resolveTourIdFromAnyLocale(slug: string): TourId | undefined {
  for (const loc of locales) {
    const id = getTourIdFromSlug(loc, slug);
    if (id) return id;
  }
  return undefined;
}

export function switchLocalePath(pathname: string, currentLocale: Locale, newLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${newLocale}`;

  const rest = segments.slice(1);

  if (rest.length === 0) return `/${newLocale}`;

  const first = rest[0];

  // Tour page: /locale/tours/slug or localized segment (excursiones, etc.)
  const tourSegs = Object.values(tourSegment);
  if (tourSegs.includes(first) && rest[1]) {
    const tourId =
      getTourIdFromSlug(currentLocale, rest[1]) ?? resolveTourIdFromAnyLocale(rest[1]);
    if (tourId) {
      return getLocalizedTourPath(newLocale, tourId);
    }
  }

  // Service page: /locale/services/slug or localized segment (servicios, خدمات, etc.)
  if (isServiceSegment(first)) {
    if (rest[1]) {
      const serviceId = resolveServiceIdFromAnyLocale(rest[1]);
      if (serviceId) {
        return getLocalizedServicePath(newLocale, serviceId);
      }
    }
    return getServicesIndexPath(newLocale);
  }

  // Static pages (match slug from any locale)
  for (const page of ["about", "contact", "privacy-policy", "terms-and-conditions"] as const) {
    const isThisPage = locales.some(
      (loc) => PAGE_SLUGS[loc][page] === first || first === page
    );
    if (isThisPage) {
      return `/${newLocale}/${PAGE_SLUGS[newLocale][page]}`;
    }
  }

  // Unknown path — go to homepage in new locale (avoid mixed-locale 404s)
  return `/${newLocale}`;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-semibold border rounded-sm transition-colors",
          "border-gold/40 text-cream hover:border-gold hover:bg-gold/10"
        )}
        aria-label="Select language"
        aria-expanded={open}
      >
        {localeLabels[locale]}
        <span className={cn("text-gold text-[10px] transition-transform", open && "rotate-180")}>
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[120px] bg-surface-elevated border border-border rounded-sm shadow-2xl overflow-hidden z-50 animate-fade-up">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                const newPath = switchLocalePath(pathname, locale, loc);
                router.push(newPath);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-2.5 text-sm transition-colors",
                loc === locale
                  ? "bg-gold/10 text-gold font-semibold"
                  : "text-cream-muted hover:text-cream hover:bg-white/5"
              )}
            >
              {localeLabels[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
