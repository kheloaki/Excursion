"use client";

import Image from "next/image";
import { SITE } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { getHomePath, pagePath } from "@/i18n/routing";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { locale, dict } = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden grain">
      <Image
        src={SITE.heroImage}
        alt={dict.meta.seoTitle}
        fill
        className="object-cover scale-105"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-24 pt-36 md:pt-48">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.15em] mb-4">
            {dict.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.1] mb-6">
            {dict.hero.title}
            <span className="block text-gold italic">{dict.hero.titleAccent}</span>
          </h1>
          <p className="hero-subtitle text-cream-muted text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button href={`${getHomePath(locale)}#tours`}>{dict.hero.explore}</Button>
            <Button href={pagePath(locale, "contact")} variant="secondary">
              {dict.hero.plan}
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10">
            {[
              { value: dict.hero.statTours, label: dict.hero.statToursLabel },
              { value: dict.hero.statRating, label: dict.hero.statRatingLabel },
              { value: dict.hero.statPickup, label: dict.hero.statPickupLabel },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl md:text-3xl text-gold font-semibold">{stat.value}</div>
                <div className="text-xs text-cream-muted uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
