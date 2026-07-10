"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE, SERVICE_CATEGORIES } from "@/data/site";
import { getServicesSeo } from "@/data/services-seo";
import { getLocalizedServicePath, getServicesIndexPath } from "@/data/services-routing";
import { useLocale } from "@/i18n/LocaleProvider";
import { getHomePath, pagePath } from "@/i18n/routing";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

export default function Header() {
  const { locale, dict } = useLocale();
  const servicesSeo = getServicesSeo(locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setDestOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-ink border-b border-border/60 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between text-[11px] text-cream-muted">
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE.phone}`} className="hover:text-gold transition-colors">
              {SITE.phoneDisplay}
            </a>
            <span className="opacity-30">|</span>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              {SITE.address.formatted}
            </a>
          </div>
          <span className="text-gold uppercase tracking-widest">{dict.nav.moroccoWide}</span>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 top-0 md:top-9",
          scrolled
            ? "bg-ink/95 backdrop-blur-xl border-b border-border shadow-2xl shadow-black/20"
            : "bg-ink/80 md:bg-ink/60 backdrop-blur-md border-b border-border/40"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
            <Link href={getHomePath(locale)} className="group" onClick={closeAll}>
              <div className="font-display text-base md:text-lg font-semibold text-cream leading-none tracking-wide group-hover:text-gold transition-colors">
                {dict.meta.siteName}
              </div>
              <div className="text-[10px] text-gold uppercase tracking-[0.18em] mt-0.5">
                {dict.meta.tagline}
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "px-4 py-2 text-sm transition-colors flex items-center gap-1",
                    servicesOpen ? "text-gold" : "text-cream-muted hover:text-cream"
                  )}
                >
                  {dict.nav.services}
                  <span className="text-[10px]">▾</span>
                </button>
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                    servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="w-[640px] bg-surface border border-border rounded-sm shadow-2xl shadow-black/50 p-4 grid grid-cols-2 gap-3">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const labels = servicesSeo.categories[cat.id];
                      return (
                        <Link
                          key={cat.id}
                          href={getLocalizedServicePath(locale, cat.id)}
                          className="group flex gap-3 p-3 rounded-sm hover:bg-white/5 border border-transparent hover:border-gold/20 transition-all"
                        >
                          <div className="relative w-16 h-16 shrink-0 rounded-sm overflow-hidden border border-border">
                            <Image src={cat.image} alt={labels.title} fill className="object-cover" sizes="64px" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-gold text-xs">{cat.icon}</span>
                              <span className="text-cream text-sm font-semibold group-hover:text-gold transition-colors truncate">
                                {labels.title}
                              </span>
                            </div>
                            <p className="text-cream-muted text-xs leading-relaxed line-clamp-2">{labels.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setDestOpen(true)}
                onMouseLeave={() => setDestOpen(false)}
              >
                <button
                  className={cn(
                    "px-4 py-2 text-sm transition-colors flex items-center gap-1",
                    destOpen ? "text-gold" : "text-cream-muted hover:text-cream"
                  )}
                >
                  {dict.nav.destinations}
                  <span className="text-[10px]">▾</span>
                </button>
                <div
                  className={cn(
                    "absolute top-full left-0 pt-3 transition-all duration-200",
                    destOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="w-56 bg-surface border border-border rounded-sm shadow-2xl p-2">
                    {SITE.moroccoCities.map((city) => (
                      <Link
                        key={city}
                        href={`${getHomePath(locale)}#tours`}
                        className="block px-3 py-2.5 text-sm text-cream-muted hover:text-cream hover:bg-white/5 rounded-sm"
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href={getServicesIndexPath(locale)} className="px-4 py-2 text-sm text-cream-muted hover:text-cream transition-colors">
                {dict.nav.allExcursions}
              </Link>
              <Link href={pagePath(locale, "about")} className="px-4 py-2 text-sm text-cream-muted hover:text-cream transition-colors">
                {dict.nav.about}
              </Link>
              <Link href={pagePath(locale, "contact")} className="px-4 py-2 text-sm text-cream-muted hover:text-cream transition-colors">
                {dict.nav.contact}
              </Link>
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <LanguageSwitcher locale={locale} />
              <Button
                href={`https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}`}
                variant="primary"
                external
                className="hidden md:inline-flex !py-2.5 !px-5 !text-xs"
              >
                {dict.nav.bookNow}
              </Button>
              <button
                className="lg:hidden p-2 text-cream"
                onClick={() => setMenuOpen(true)}
                aria-label={dict.nav.menu}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden transition-opacity duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={closeAll} />
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-full max-w-md bg-surface border-l border-border transition-transform duration-300 overflow-y-auto",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-display text-xl text-cream">{dict.nav.menu}</span>
            <button onClick={closeAll} className="p-2 text-cream-muted hover:text-cream" aria-label="Close">
              ✕
            </button>
          </div>

          <div className="p-4 border-b border-border text-sm text-cream-muted space-y-1">
            <a href={`tel:${SITE.phone}`} className="block hover:text-gold">{SITE.phoneDisplay}</a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-gold">
              {SITE.address.formatted}
            </a>
          </div>

          <div className="p-4">
            <p className="text-[10px] uppercase tracking-widest text-gold mb-3">{dict.nav.services}</p>
            <div className="grid grid-cols-1 gap-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={getLocalizedServicePath(locale, cat.id)}
                  onClick={closeAll}
                  className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-gold/30"
                >
                  <span className="text-gold">{cat.icon}</span>
                  <span className="text-cream text-sm">{servicesSeo.categories[cat.id].title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="px-4 pb-4">
            <p className="text-[10px] uppercase tracking-widest text-gold mb-3">{dict.nav.destinations}</p>
            <div className="flex flex-wrap gap-2">
              {SITE.moroccoCities.map((city) => (
                <Link
                  key={city}
                  href={`${getHomePath(locale)}#tours`}
                  onClick={closeAll}
                  className="px-3 py-1.5 text-xs border border-border rounded-sm text-cream-muted hover:text-cream"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-border space-y-1">
            <Link href={pagePath(locale, "about")} onClick={closeAll} className="block px-4 py-3 text-cream rounded-sm hover:bg-white/5">
              {dict.nav.about}
            </Link>
            <Link href={pagePath(locale, "contact")} onClick={closeAll} className="block px-4 py-3 text-cream rounded-sm hover:bg-white/5">
              {dict.nav.contact}
            </Link>
          </div>

          <div className="p-4 border-t border-border">
            <Button href={`https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}`} variant="whatsapp" external className="w-full">
              {dict.nav.bookNow}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
