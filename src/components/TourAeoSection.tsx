import type { Tour } from "@/data/tours";
import type { Locale } from "@/i18n/config";
import { resolveTourAeo } from "@/i18n/dictionaries/tour-aeo";

export default function TourAeoSection({
  locale,
  tour,
}: {
  locale: Locale;
  tour: Pick<Tour, "title" | "duration">;
}) {
  const aeo = resolveTourAeo(locale, tour);

  return (
    <section className="border-t border-border pt-10" aria-labelledby="tour-faq-heading">
      <h2 id="tour-faq-heading" className="font-display text-2xl text-cream font-semibold mb-6">
        {aeo.title}
      </h2>
      <div className="space-y-4">
        {aeo.items.map((item) => (
          <div
            key={item.question}
            className="p-5 border border-border rounded-sm bg-surface-elevated"
          >
            <h3 className="font-display text-lg text-cream font-semibold mb-2">{item.question}</h3>
            <p className="tour-faq-answer text-cream-muted text-sm leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
