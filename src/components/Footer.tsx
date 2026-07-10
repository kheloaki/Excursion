"use client";

import Link from "next/link";
import { SITE } from "@/data/site";
import { FOOTER_SEO_KEYWORDS } from "@/data/footer-keywords";
import { useLocale } from "@/i18n/LocaleProvider";
import { getHomePath, pagePath } from "@/i18n/routing";
import { getServicesIndexPath } from "@/data/services-routing";
import { getLocalizedTourPath } from "@/data/tours";

export default function Footer() {
  const { locale, dict } = useLocale();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="font-display text-xl text-cream font-semibold">{dict.meta.siteName}</div>
              <div className="text-[10px] text-gold uppercase tracking-[0.15em] mt-1">{dict.meta.tagline}</div>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed max-w-md mb-6">{dict.footer.description}</p>
            <div className="space-y-2 text-sm text-cream-muted">
              <p>
                <span className="text-cream font-medium">{dict.footer.findUs}: </span>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  {SITE.address.formatted}
                </a>
              </p>
              <p>
                <a href={`tel:${SITE.phone}`} className="hover:text-gold transition-colors">{SITE.phoneDisplay}</a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors">{SITE.email}</a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-cream text-sm font-semibold uppercase tracking-wider mb-4">{dict.footer.explore}</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: getServicesIndexPath(locale), label: dict.footer.links.allExcursions },
                { href: `${getHomePath(locale)}#tours`, label: dict.nav.allExcursions },
                { href: pagePath(locale, "about"), label: dict.footer.links.about },
                { href: pagePath(locale, "contact"), label: dict.footer.links.contact },
                { href: pagePath(locale, "privacy-policy"), label: dict.footer.links.privacy },
                { href: pagePath(locale, "terms-and-conditions"), label: dict.footer.links.terms },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream-muted hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream text-sm font-semibold uppercase tracking-wider mb-4">{dict.footer.moroccoTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {SITE.moroccoCities.map((city) => (
                <Link
                  key={city}
                  href={`${getHomePath(locale)}#tours`}
                  className="px-2.5 py-1 text-xs border border-border rounded-sm text-cream-muted hover:text-gold hover:border-gold/30 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-10 mb-10">
          <h3 className="text-cream text-sm font-semibold uppercase tracking-wider mb-4">{dict.footer.keywordsTitle}</h3>
          <div className="flex flex-wrap gap-2">
            {FOOTER_SEO_KEYWORDS.map((kw) => (
              <Link
                key={kw.label}
                href={getLocalizedTourPath(locale, kw.tourId)}
                className="px-3 py-1.5 text-[11px] leading-tight border border-border/80 rounded-sm text-cream-muted hover:text-gold hover:border-gold/25 bg-ink/40 transition-colors"
              >
                {kw.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-xs text-cream-muted/70 leading-relaxed border-t border-border pt-8 mb-8 max-w-4xl">
          {dict.footer.seoParagraph}
        </p>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream-muted">
          <p>© {new Date().getFullYear()} {dict.meta.siteName}. {dict.footer.rights}</p>
          <p>{dict.footer.seoLine}</p>
        </div>

        <p className="mt-4 text-center text-[11px] text-cream-muted/60">
          {dict.footer.builtBy}{" "}
          <a
            href="https://itagroupe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/80 hover:text-gold transition-colors uppercase tracking-wide"
          >
            ITAGROUPE.COM
          </a>
        </p>
      </div>
    </footer>
  );
}
