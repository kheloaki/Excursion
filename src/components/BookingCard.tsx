"use client";

import type { Tour } from "@/data/tours";
import { SITE } from "@/data/site";
import Button from "@/components/ui/Button";
import { useLocale } from "@/i18n/LocaleProvider";
import { formatRating } from "@/lib/utils";

export default function BookingCard({ tour }: { tour: Tour }) {
  const { dict } = useLocale();

  return (
    <div className="bg-surface-elevated border border-border rounded-sm p-6 md:p-8 sticky top-24">
      <h2 className="font-display text-2xl text-cream font-semibold mb-2">
        {dict.tour.bookThisTour}
      </h2>
      <p className="text-cream-muted text-sm leading-relaxed mb-6">
        {dict.tour.quoteNote}
      </p>
      <p className="text-cream-muted text-xs uppercase tracking-widest mb-1">
        {tour.duration}
      </p>
      <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border">
        <span className="text-gold">★★★★★</span>
        <span className="text-cream text-sm font-medium">{formatRating(tour.rating)}</span>
        <span className="text-cream-muted text-sm">{dict.tour.guestRating}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {dict.tour.inclusions.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-cream-muted">
            <span className="text-gold mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="space-y-3">
        <Button
          href={`https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi! I'd like a quote for: ${tour.title}`)}`}
          variant="whatsapp"
          external
          className="w-full"
        >
          {dict.tour.bookWhatsapp}
        </Button>
        <Button
          href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Quote request: ${tour.title}`)}`}
          variant="secondary"
          className="w-full"
        >
          {dict.tour.bookEmail}
        </Button>
      </div>
    </div>
  );
}
