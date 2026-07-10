import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildAlternateLanguages, pagePath } from "@/i18n/routing";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { buildLocalBusinessJsonLd, buildWebPageJsonLd, pageBreadcrumbs } from "@/lib/seo";
import { buildPageMetadata, metaDescriptionFromSections } from "@/lib/metadata";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const page = dict.pages.privacy;
  const canonicalUrl = `${SITE.domain}${pagePath(locale, "privacy-policy")}`;

  return buildPageMetadata({
    locale,
    title: page.title,
    description: metaDescriptionFromSections(page.description, page.sections),
    canonicalUrl,
    alternateLanguages: buildAlternateLanguages((l) => pagePath(l, "privacy-policy")),
    robots: { index: true, follow: true },
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const page = dict.pages.privacy;
  const pageUrl = `${SITE.domain}${pagePath(locale, "privacy-policy")}`;
  const description = metaDescriptionFromSections(page.description, page.sections);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd(locale, page.title, description, pageUrl),
          buildLocalBusinessJsonLd(locale, dict),
          pageBreadcrumbs(locale, dict, page.title, pageUrl),
        ]}
      />
      <main>
        <PageHeader title={page.title} eyebrow={page.eyebrow} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-8 text-cream-muted text-sm leading-relaxed">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl text-cream font-semibold mb-3">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
