"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import { tourGalleryAlt } from "@/lib/image-metadata";

export default function TourGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const { dict } = useLocale();
  const gallery = images.length > 1 ? images.slice(1) : images;

  if (gallery.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-2xl text-cream font-semibold mb-6">
        {dict.tour.photoGallery}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {gallery.map((src) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-surface-elevated"
          >
            <Image
              src={src}
              alt={tourGalleryAlt(title, src)}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
