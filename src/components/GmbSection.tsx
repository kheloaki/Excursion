"use client";

import { SITE } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { googleMapsEmbedUrl } from "@/lib/google-maps";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function GmbSection() {
  const { locale, dict } = useLocale();
  const gmb = dict.gmb;
  const embedUrl = googleMapsEmbedUrl(locale);

  return (
    <section
      id="find-us"
      className="py-20 md:py-28 border-t border-border bg-surface/30 scroll-mt-28"
      aria-labelledby="gmb-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader eyebrow={gmb.eyebrow} title={gmb.title} description={gmb.description} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-4">
          <div className="border border-border rounded-sm bg-surface-elevated p-6 md:p-8 space-y-6">
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">
                  {gmb.addressLabel}
                </p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-gold transition-colors leading-relaxed"
                >
                  {SITE.address.formatted}
                </a>
              </div>
              <div>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">
                  {gmb.phoneLabel}
                </p>
                <a href={`tel:${SITE.phone}`} className="text-cream hover:text-gold transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                  {gmb.hoursLabel}
                </p>
                <p className="text-cream-muted">{gmb.hoursDaily}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <Button href={SITE.mapsUrl} variant="primary" external>
                {gmb.directions}
              </Button>
              <Button href={SITE.googleBusiness.profileUrl} variant="secondary" external>
                {gmb.viewOnGoogle}
              </Button>
              <Button href={SITE.googleBusiness.reviewUrl} variant="secondary" external>
                {gmb.leaveReview}
              </Button>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[400px] rounded-sm overflow-hidden border border-border bg-surface-elevated">
            <iframe
              title={gmb.mapTitle}
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
