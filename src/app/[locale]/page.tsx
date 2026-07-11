import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import TourGrid from "@/components/TourGrid";
import ExperienceGallery from "@/components/ExperienceGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import GmbSection from "@/components/GmbSection";
import SeoContent from "@/components/SeoContent";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ServiceCards from "@/components/ServiceCards";
import JsonLd from "@/components/JsonLd";
import { buildAlternateLanguages, getHomePath, tourPublicPath } from "@/i18n/routing";
import { SITE, SERVICE_CATEGORIES } from "@/data/site";
import { getServicesSeo } from "@/data/services-seo";
import { getLocalizedServicePath } from "@/data/services-routing";
import { getTours } from "@/data/tours";
import { buildHomePageJsonLd } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteCanonical } from "@/lib/canonical";
import { clampMetaDescription, formatSeoTitle } from "@/lib/seo-text";
import { siteHeroAlt } from "@/lib/image-metadata";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const canonicalUrl = absoluteCanonical(getHomePath(locale));

  return buildPageMetadata({
    locale,
    title: formatSeoTitle(dict.meta.seoTitle),
    description: clampMetaDescription(dict.meta.seoDescription),
    keywords: dict.meta.keywords,
    canonicalUrl,
    alternateLanguages: buildAlternateLanguages((l) => getHomePath(l)),
    image: SITE.heroImage,
    imageAlt: siteHeroAlt(dict.meta.siteName),
    imageWidth: 1600,
    imageHeight: 900,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const homeUrl = `${SITE.domain}${getHomePath(locale)}`;
  const tours = getTours(locale);
  const servicesSeo = getServicesSeo(locale);
  const homeJsonLd = buildHomePageJsonLd(
    locale,
    dict,
    homeUrl,
    tours.map((t) => ({
      title: t.title,
      url: `${SITE.domain}${tourPublicPath(locale, t.slug)}`,
    })),
    dict.tours.title,
    SERVICE_CATEGORIES.map((cat) => ({
      name: servicesSeo.categories[cat.id].heading,
      url: `${SITE.domain}${getLocalizedServicePath(locale, cat.id)}`,
      description: servicesSeo.categories[cat.id].paragraphs[0],
    }))
  );

  return (
    <>
      <JsonLd data={homeJsonLd} />

      <main>
        <Hero />
        <TrustBar />
        <ServiceCards />
        <section id="tours" className="py-20 md:py-28 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow={dict.tours.eyebrow}
            title={dict.tours.title}
            description={dict.tours.description}
          />
          <TourGrid />
        </div>
      </section>
      <ExperienceGallery />
      <WhyChooseUs />
      <GmbSection />
      <SeoContent />
      <CTABanner />
      </main>
    </>
  );
}
