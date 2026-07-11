import { SITE } from "@/data/site";

/** Absolute canonical URL — no trailing slash, always uses SITE.domain. */
export function absoluteCanonical(path: string): string {
  if (!path || path === "/") return SITE.domain;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withoutTrailingSlash = normalized.replace(/\/+$/, "");
  return `${SITE.domain}${withoutTrailingSlash}`;
}
