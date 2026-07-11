import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingCard from "@/components/BookingCard";
import TourCard from "@/components/TourCard";
import TourGallery from "@/components/TourGallery";
import TourAeoSection from "@/components/TourAeoSection";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { resolveTourAeo } from "@/i18n/dictionaries/tour-aeo";
import { buildTourAlternates, getHomePath, tourPublicPath } from "@/i18n/routing";
import { getAllLocalizedTourPaths, getTourBySlug, getTours } from "@/data/tours";
import { SITE } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { buildTourPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteCanonical } from "@/lib/canonical";
import { resolveTourSeoMeta } from "@/lib/seo-text";
import { tourHeroAlt } from "@/lib/image-metadata";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocalizedTourPaths().map(({ locale, slug }) => ({
    locale,
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const tour = getTourBySlug(locale, slug);
  if (!tour) return {};

  const canonicalUrl = absoluteCanonical(tourPublicPath(locale, slug));
  const seo = resolveTourSeoMeta(tour);

  return buildPageMetadata({
    locale,
    title: seo.title,
    description: seo.description,
    keywords: tour.keywords,
    canonicalUrl,
    alternateLanguages: buildTourAlternates(tour.id),
    image: tour.image,
    imageAlt: tourHeroAlt(tour.title, tour.image),
    imageWidth: 800,
    imageHeight: 600,
  });
}

export default async function TourPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const tour = getTourBySlug(locale, slug);
  if (!tour) notFound();

  const aeo = resolveTourAeo(locale, tour);
  const relatedTours = getTours(locale)
    .filter((t) => t.id !== tour.id && t.category === tour.category)
    .slice(0, 3);

  const tourUrl = `${SITE.domain}${tourPublicPath(locale, slug)}`;
  const tourJsonLd = buildTourPageJsonLd(tour, locale, tourUrl, aeo.items);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: dict.tour.home, url: `${SITE.domain}${getHomePath(locale)}` },
    { name: dict.tour.excursions, url: `${SITE.domain}${getHomePath(locale)}#tours` },
    { name: tour.title, url: tourUrl },
  ]);

  return (
    <>
      <JsonLd data={[...tourJsonLd, breadcrumbJsonLd]} />

      <header className="relative h-[40vh] md:h-[50vh] min-h-[280px] grain">
        <Image
          src={tour.image}
          alt={tourHeroAlt(tour.title, tour.image)}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 pb-8 md:pb-12">
          <nav aria-label="Breadcrumb" className="text-cream-muted text-sm mb-4">
            <Link href={getHomePath(locale)} className="hover:text-gold transition-colors">
              {dict.tour.home}
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <Link href={`${getHomePath(locale)}#tours`} className="hover:text-gold transition-colors">
              {dict.tour.excursions}
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-cream">{tour.title}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl text-cream font-semibold max-w-3xl leading-tight">
            {tour.title}
          </h1>
          <p className="mt-3 text-cream-muted text-sm">{aeo.locationLine}</p>
        </div>
      </header>

      <main>
        <article className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2 space-y-10">
              <section aria-labelledby="tour-overview-heading">
                <p className="text-cream-muted text-xs uppercase tracking-widest mb-2">
                  {tour.duration}
                </p>
                <h2
                  id="tour-overview-heading"
                  className="font-display text-2xl text-cream font-semibold mb-4"
                >
                  {aeo.overviewHeading}
                </h2>
                <p className="tour-overview text-cream text-lg leading-relaxed">{tour.longDescription}</p>
              </section>

              <section aria-labelledby="tour-included-heading">
                <h2
                  id="tour-included-heading"
                  className="font-display text-2xl text-cream font-semibold mb-6"
                >
                  {dict.tour.whatsIncluded}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-3 p-4 border border-border rounded-sm bg-surface-elevated"
                    >
                      <span className="text-gold text-lg" aria-hidden>
                        ✦
                      </span>
                      <span className="text-cream-muted text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              <TourGallery images={tour.images} title={tour.title} />

              <section className="border-t border-border pt-10" aria-labelledby="tour-why-heading">
                <h2
                  id="tour-why-heading"
                  className="font-display text-2xl text-cream font-semibold mb-4"
                >
                  {dict.tour.whyBook}
                </h2>
                <p className="text-cream-muted leading-relaxed">
                  {dict.meta.siteName} — {tour.title}. {tour.description}
                </p>
              </section>

              <TourAeoSection locale={locale} tour={tour} />
            </div>

            <aside className="lg:col-span-1" aria-label={dict.tour.bookThisTour}>
              <BookingCard tour={tour} />
            </aside>
          </div>

          {relatedTours.length > 0 && (
            <section className="mt-20 pt-16 border-t border-border" aria-labelledby="related-tours-heading">
              <h2
                id="related-tours-heading"
                className="font-display text-3xl text-cream font-semibold mb-8"
              >
                {dict.tour.related}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedTours.map((t) => (
                  <TourCard key={t.id} tour={t} headingLevel="h3" />
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
