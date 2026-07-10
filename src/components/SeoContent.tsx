"use client";

import { SEO_CONTENT } from "@/data/seo-content";
import { useLocale } from "@/i18n/LocaleProvider";
import SectionHeader from "@/components/ui/SectionHeader";

export default function SeoContent() {
  const { locale } = useLocale();
  const content = SEO_CONTENT[locale];

  return (
    <section className="py-20 md:py-28 border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        <div>
          <SectionHeader
            eyebrow={content.thingsToDo.eyebrow}
            title={content.thingsToDo.title}
            description={content.thingsToDo.intro}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {content.thingsToDo.sections.map((section) => (
              <article
                key={section.heading}
                className="p-6 border border-border rounded-sm bg-surface-elevated"
              >
                <h3 className="font-display text-xl text-cream font-semibold mb-3">
                  {section.heading}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow={content.destinations.eyebrow}
            title={content.destinations.title}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {content.destinations.items.map((dest) => (
              <div
                key={dest.name}
                className="p-5 border border-border rounded-sm hover:border-gold/20 transition-colors"
              >
                <h3 className="text-gold font-semibold text-sm mb-2">{dest.name}</h3>
                <p className="text-cream-muted text-sm leading-relaxed">{dest.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} />
          <div className="mt-10 space-y-4 max-w-4xl">
            {content.faq.items.map((item) => (
              <details
                key={item.question}
                className="group border border-border rounded-sm bg-surface-elevated open:border-gold/20"
              >
                <summary className="cursor-pointer list-none p-5 md:p-6 flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg text-cream font-semibold pr-4">
                    {item.question}
                  </h3>
                  <span className="text-gold text-xl shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="faq-answer px-5 md:px-6 pb-5 md:pb-6 text-cream-muted text-sm leading-relaxed border-t border-border pt-4">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
