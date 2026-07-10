"use client";

import { SITE } from "@/data/site";
import Button from "@/components/ui/Button";
import { useLocale } from "@/i18n/LocaleProvider";
import { pagePath } from "@/i18n/routing";

export default function CTABanner() {
  const { locale, dict } = useLocale();

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-sm border border-gold/20 bg-gradient-to-br from-surface-elevated via-surface to-ink p-10 md:p-16 text-center grain">
          <div className="relative">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4">{dict.cta.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-5xl text-cream font-semibold mb-4">{dict.cta.title}</h2>
            <p className="text-cream-muted text-lg max-w-xl mx-auto mb-8 leading-relaxed">{dict.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent("Hi! I'd like to book a bundle of 3 tours.")}`}
                variant="whatsapp"
                external
              >
                {dict.cta.whatsapp}
              </Button>
              <Button href={pagePath(locale, "contact")} variant="secondary">
                {dict.cta.contact}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
