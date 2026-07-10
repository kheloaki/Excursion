import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TourCard from "@/components/TourCard";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/JsonLd";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE } from "@/data/site";
import { SERVICE_TOUR_IDS } from "@/data/service-tours";
import { getServicePageMeta, getServicesSeo } from "@/data/services-seo";
import {
  buildServiceAlternates,
  getAllLocalizedServicePaths,
  getLocalizedServicePath,
  getServiceCategory,
  getServicesIndexPath,
  resolveServiceId,
} from "@/data/services-routing";
import { getTourById } from "@/data/tours";
import { buildBreadcrumbJsonLd, buildServicePageJsonLd } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";
import { getHomePath, tourPublicPath } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocalizedServicePaths().map(({ locale, slug }) => ({ locale, slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const serviceId = resolveServiceId(locale, slug);
  if (!serviceId) return {};

  const meta = getServicePageMeta(locale, serviceId);
  const category = getServiceCategory(serviceId);
  const canonicalUrl = `${SITE.domain}${getLocalizedServicePath(locale, serviceId)}`;

  return buildPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    canonicalUrl,
    alternateLanguages: buildServiceAlternates(serviceId),
    image: category?.image ?? SITE.heroImage,
    imageWidth: 1200,
    imageHeight: 630,
  });
}

export default async function ServicePage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const serviceId = resolveServiceId(locale, slug);
  if (!serviceId) notFound();

  const category = getServiceCategory(serviceId);
  if (!category) notFound();

  const seo = getServicesSeo(locale);
  const content = seo.categories[serviceId];
  const tourIds = SERVICE_TOUR_IDS[serviceId];
  const tours = tourIds
    .map((id) => getTourById(locale, id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const pageUrl = `${SITE.domain}${getLocalizedServicePath(locale, serviceId)}`;
  const serviceJsonLd = buildServicePageJsonLd(
    locale,
    {
      name: content.heading,
      description: content.paragraphs[0],
      image: category.image,
    },
    pageUrl,
    tours.map((t) => ({
      title: t.title,
      url: `${SITE.domain}${tourPublicPath(locale, t.slug)}`,
    }))
  );
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: dict.tour.home, url: `${SITE.domain}${getHomePath(locale)}` },
    { name: dict.nav.services, url: `${SITE.domain}${getServicesIndexPath(locale)}` },
    { name: content.heading, url: pageUrl },
  ]);

  return (
    <>
      <JsonLd data={[...serviceJsonLd, breadcrumbJsonLd]} />

      <header className="relative h-[36vh] md:h-[44vh] min-h-[260px] grain">
        <Image
          src={category.image}
          alt={content.heading}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 pb-8 md:pb-10">
          <nav aria-label="Breadcrumb" className="text-cream-muted text-sm mb-4">
            <Link href={getHomePath(locale)} className="hover:text-gold transition-colors">
              {dict.tour.home}
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <Link href={getServicesIndexPath(locale)} className="hover:text-gold transition-colors">
              {dict.nav.services}
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-cream">{content.title}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl text-cream font-semibold max-w-3xl leading-tight">
            {content.heading}
          </h1>
          <p className="mt-3 text-cream-muted text-sm max-w-2xl">{content.description}</p>
        </div>
      </header>

      <main>
        <article className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-6">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="service-overview text-cream-muted text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="border border-border rounded-sm bg-surface-elevated p-6 h-fit lg:sticky lg:top-24">
              <h2 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                {dict.tour.whatsIncluded}
              </h2>
              <ul className="space-y-3 mb-8">
                {content.highlights.map((item) => (
                  <li key={item} className="service-highlight flex items-start gap-2 text-sm text-cream-muted">
                    <span className="text-gold mt-0.5" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href={`https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi! I'm interested in: ${content.heading}`)}`}
                variant="whatsapp"
                external
                className="w-full"
              >
                {dict.tour.bookWhatsapp}
              </Button>
            </aside>
          </div>

          {tours.length > 0 && (
            <section className="mt-16 pt-14 border-t border-border" aria-labelledby="service-tours-heading">
              <h2 id="service-tours-heading" className="font-display text-3xl text-cream font-semibold mb-3">
                {seo.relatedToursLabel}
              </h2>
              <p className="text-cream-muted text-sm mb-8 max-w-2xl">
                {content.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {tours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} headingLevel="h3" />
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
