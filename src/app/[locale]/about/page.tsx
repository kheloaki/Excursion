import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/JsonLd";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildAlternateLanguages, pagePath } from "@/i18n/routing";
import { SITE } from "@/data/site";
import { buildAboutPageJsonLd, pageBreadcrumbs } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const canonicalUrl = `${SITE.domain}${pagePath(locale, "about")}`;

  return buildPageMetadata({
    locale,
    title: dict.pages.about.title,
    description: dict.pages.about.description,
    keywords: dict.meta.keywords,
    canonicalUrl,
    alternateLanguages: buildAlternateLanguages((l) => pagePath(l, "about")),
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const page = dict.pages.about;
  const pageUrl = `${SITE.domain}${pagePath(locale, "about")}`;

  return (
    <>
      <JsonLd
        data={[
          ...buildAboutPageJsonLd(locale, dict, pageUrl),
          pageBreadcrumbs(locale, dict, page.title, pageUrl),
        ]}
      />
      <main>
        <PageHeader eyebrow={page.eyebrow} title={page.title} description={page.description} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-10">
          {page.sections.map((section) => (
            <section key={section.title} className="border-l-2 border-gold/30 pl-6">
              <h2 className="font-display text-2xl text-cream font-semibold mb-3">
                {section.title}
              </h2>
              <p className="text-cream-muted leading-relaxed">{section.content}</p>
            </section>
          ))}
          <div className="pt-6">
            <Button href={pagePath(locale, "contact")}>{page.cta}</Button>
          </div>
        </div>
      </main>
    </>
  );
}
