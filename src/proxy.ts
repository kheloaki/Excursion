import { NextRequest, NextResponse } from "next/server";
import { isValidLocale, type Locale } from "@/i18n/config";
import { negotiateLocale } from "@/i18n/negotiate-locale";
import { PAGE_SLUGS } from "@/i18n/routing";
import { tourSegment } from "@/data/tours";
import {
  getLocalizedServicePath,
  getServicesIndexPath,
  isServiceSegment,
  resolveServiceIdFromAnyLocale,
  serviceSegment,
} from "@/data/services-routing";

const PAGE_REVERSE: Partial<Record<Locale, Record<string, string>>> = {};

for (const locale of Object.keys(PAGE_SLUGS) as Locale[]) {
  PAGE_REVERSE[locale] = {};
  for (const [page, slug] of Object.entries(PAGE_SLUGS[locale])) {
    if (slug !== page) {
      PAGE_REVERSE[locale]![slug] = page;
    }
  }
}

function getLocaleFromPath(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return segment && isValidLocale(segment) ? segment : null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  const locale = getLocaleFromPath(pathname);

  if (!locale) {
    const preferredLocale = negotiateLocale(request.headers.get("accept-language"));
    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length < 2) return NextResponse.next();

  const [, second, ...rest] = segments;

  const expectedTourSegment = tourSegment[locale];
  if (second === expectedTourSegment && expectedTourSegment !== "tours") {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/tours/${rest.join("/")}`;
    return NextResponse.rewrite(url);
  }

  const expectedServiceSegment = serviceSegment[locale];
  if (second === expectedServiceSegment && expectedServiceSegment !== "services") {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/services/${rest.join("/")}`;
    return NextResponse.rewrite(url);
  }

  // Wrong service segment for locale (e.g. /ar/servicios/... ) — redirect to correct localized URL
  if (isServiceSegment(second) && second !== expectedServiceSegment) {
    if (rest.length === 0) {
      const url = request.nextUrl.clone();
      url.pathname = getServicesIndexPath(locale);
      return NextResponse.redirect(url);
    }
    const serviceId = resolveServiceIdFromAnyLocale(rest[0]);
    if (serviceId) {
      const url = request.nextUrl.clone();
      url.pathname = getLocalizedServicePath(locale, serviceId);
      return NextResponse.redirect(url);
    }
  }

  const reverse = PAGE_REVERSE[locale];
  if (reverse?.[second]) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/${reverse[second]}${rest.length ? `/${rest.join("/")}` : ""}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
