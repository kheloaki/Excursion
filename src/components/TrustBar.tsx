"use client";

import { SITE } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";

export default function TrustBar() {
  const { dict } = useLocale();
  const items = [
    { ...dict.trust.rated, href: SITE.googleBusiness.reviewUrl, external: true },
    { ...dict.trust.pickup, href: `${SITE.mapsUrl}`, external: true },
    { ...dict.trust.bundle, href: undefined, external: false },
    { ...dict.trust.instant, href: undefined, external: false },
  ];
  const icons = ["★", "◆", "✦", "◎"];

  return (
    <section className="border-y border-border bg-surface/80" aria-labelledby="trust-bar-heading">
      <h2 id="trust-bar-heading" className="sr-only">
        {dict.trust.sectionTitle ?? "What we offer"}
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => {
            const inner = (
              <>
                <span className="text-gold text-lg mt-0.5" aria-hidden>
                  {icons[i]}
                </span>
                <div>
                  <h3 className="text-cream text-sm font-semibold group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-cream-muted text-xs mt-0.5">{item.desc}</p>
                </div>
              </>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-start gap-3 hover:opacity-90 transition-opacity"
              >
                {inner}
              </a>
            ) : (
              <div key={item.title} className="flex items-start gap-3">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
