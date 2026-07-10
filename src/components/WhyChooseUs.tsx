"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";

const icons = ["✦", "◎", "◈", "★"];

export default function WhyChooseUs() {
  const { dict } = useLocale();

  return (
    <section className="py-20 md:py-28 bg-surface/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <SectionHeader
            eyebrow={dict.why.eyebrow}
            title={dict.why.title}
            description={dict.why.description}
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
            <Image
              src={SITE.fleetImage}
              alt={`${dict.meta.siteName} — premium transport fleet Agadir`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {dict.why.items.map((feature, i) => (
            <div
              key={feature.title}
              className="group p-8 border border-border rounded-sm bg-surface-elevated hover:border-gold/20 transition-all duration-500"
            >
              <span className="text-gold text-2xl mb-4 block">{icons[i]}</span>
              <h3 className="font-display text-2xl text-cream font-semibold mb-3">{feature.title}</h3>
              <p className="text-cream-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
