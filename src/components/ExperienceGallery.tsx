"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { ALL_EXPERIENCE_IMAGES } from "@/data/tour-images";
import { useLocale } from "@/i18n/LocaleProvider";
import { imageAltFromSrc } from "@/lib/image-metadata";

export default function ExperienceGallery() {
  const { dict } = useLocale();

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={dict.gallery.eyebrow}
          title={dict.gallery.title}
          description={dict.gallery.description}
        />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {ALL_EXPERIENCE_IMAGES.map((src, i) => (
            <div
              key={src}
              className="relative break-inside-avoid overflow-hidden rounded-sm border border-border group"
            >
              <Image
                src={src}
                alt={imageAltFromSrc(src, dict.meta.siteName)}
                width={600}
                height={i % 3 === 0 ? 750 : 450}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
