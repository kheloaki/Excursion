import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import JsonLd from "@/components/JsonLd";
import { isValidLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE, SERVICE_CATEGORIES } from "@/data/site";
import { getServicesSeo } from "@/data/services-seo";
import { buildServicesIndexAlternates, getLocalizedServicePath, getServicesIndexPath } from "@/data/services-routing";
import { buildServicesIndexJsonLd } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteCanonical } from "@/lib/canonical";
import { clampMetaDescription, formatSeoTitle, resolveStaticPageMeta } from "@/lib/seo-text";
import { imageAltFromSrc, siteHeroAlt } from "@/lib/image-metadata";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const seo = getServicesSeo(locale);
  const canonicalUrl = absoluteCanonical(getServicesIndexPath(locale));
  const pageMeta = resolveStaticPageMeta(seo.contentTitle, seo.intro);

  return buildPageMetadata({
    locale,
    title: formatSeoTitle(pageMeta.title),
    description: clampMetaDescription(pageMeta.description),
    keywords: dict.meta.keywords,
    canonicalUrl,
    alternateLanguages: buildServicesIndexAlternates(),
    image: SITE.heroImage,
    imageAlt: siteHeroAlt(dict.meta.siteName),
  });
}

export default async function ServicesIndexPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const seo = getServicesSeo(locale);
  const indexUrl = `${SITE.domain}${getServicesIndexPath(locale)}`;

  const serviceItems = SERVICE_CATEGORIES.map((cat) => ({
    name: seo.categories[cat.id].heading,
    url: `${SITE.domain}${getLocalizedServicePath(locale, cat.id)}`,
    description: seo.categories[cat.id].description,
  }));

  return (
    <>
      <JsonLd data={buildServicesIndexJsonLd(locale, dict, indexUrl, serviceItems)} />

      <main>
        <PageHeader
          eyebrow={dict.services.eyebrow}
          title={seo.contentTitle}
          description={seo.intro}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICE_CATEGORIES.map((cat) => {
              const content = seo.categories[cat.id];
              return (
                <Link
                  key={cat.id}
                  href={getLocalizedServicePath(locale, cat.id)}
                  className="group overflow-hidden rounded-sm border border-border bg-surface-elevated hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={imageAltFromSrc(cat.image, content.heading)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h2 className="font-display text-xl text-cream font-semibold mb-2 group-hover:text-gold transition-colors">
                      {content.heading}
                    </h2>
                    <p className="text-cream-muted text-sm leading-relaxed line-clamp-3 mb-4">
                      {content.paragraphs[0]}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider">
                      {dict.tours.viewDetails}
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
