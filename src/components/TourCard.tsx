"use client";

import Link from "next/link";
import Image from "next/image";
import type { Tour } from "@/data/tours";
import { useLocale } from "@/i18n/LocaleProvider";
import { tourPublicPath } from "@/i18n/routing";
import { formatRating } from "@/lib/utils";

const CATEGORY_BADGE: Record<Tour["category"], string> = {
  agadir: "Agadir",
  "day-trip": "Day trip",
  taghazout: "Coast",
  transfer: "Transfer",
};

export default function TourCard({
  tour,
  headingLevel = "h2",
}: {
  tour: Tour;
  headingLevel?: "h2" | "h3";
}) {
  const { locale, dict } = useLocale();
  const Heading = headingLevel;

  return (
    <Link
      href={tourPublicPath(locale, tour.slug)}
      className="group block bg-surface-elevated border border-border rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 left-4 flex flex-col gap-1.5">
          <span className="inline-block bg-ink/70 backdrop-blur-sm border border-border text-cream-muted text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm">
            {tour.duration}
          </span>
          <span className="inline-block bg-surface/80 backdrop-blur-sm border border-gold/20 text-gold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm w-fit">
            {CATEGORY_BADGE[tour.category]}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-gold/90 text-ink text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-sm">
            {dict.tour.requestQuote}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-1 text-gold text-xs font-medium">
            <span>★</span>
            <span>{formatRating(tour.rating)}</span>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <Heading className="font-display text-xl text-cream font-semibold mb-2 leading-snug group-hover:text-gold transition-colors line-clamp-2">
          {tour.title}
        </Heading>
        <p className="text-cream-muted text-sm leading-relaxed line-clamp-2 mb-4">
          {tour.description}
        </p>
        <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-all">
          {dict.tours.viewDetails}
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
