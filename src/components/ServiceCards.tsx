"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICE_CATEGORIES } from "@/data/site";
import { getServicesSeo } from "@/data/services-seo";
import { getLocalizedServicePath } from "@/data/services-routing";
import { useLocale } from "@/i18n/LocaleProvider";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServiceCards() {
  const { locale, dict } = useLocale();
  const seo = getServicesSeo(locale);

  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-28 border-b border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          description={dict.services.description}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mt-12">
          {SERVICE_CATEGORIES.map((cat) => {
            const labels = seo.categories[cat.id];
            return (
              <Link
                key={cat.id}
                href={getLocalizedServicePath(locale, cat.id)}
                className="group relative overflow-hidden rounded-sm border border-border bg-surface-elevated hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={labels.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-gold text-lg bg-ink/60 backdrop-blur-sm w-9 h-9 flex items-center justify-center rounded-sm border border-border">
                    {cat.icon}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-cream font-semibold mb-2 group-hover:text-gold transition-colors">
                    {labels.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed line-clamp-3 mb-4">
                    {labels.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                    {dict.tours.viewDetails}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
