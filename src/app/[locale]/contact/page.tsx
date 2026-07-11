import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import GmbSection from "@/components/GmbSection";
import JsonLd from "@/components/JsonLd";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildAlternateLanguages, pagePath } from "@/i18n/routing";
import { SITE } from "@/data/site";
import { buildContactPageJsonLd, pageBreadcrumbs } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteCanonical } from "@/lib/canonical";
import { resolveStaticPageMeta } from "@/lib/seo-text";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const canonicalUrl = absoluteCanonical(pagePath(locale, "contact"));

  const pageMeta = resolveStaticPageMeta(dict.pages.contact.title, dict.pages.contact.description);

  return buildPageMetadata({
    locale,
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: [...dict.meta.keywords, "contact Agadir tours", SITE.address.formatted],
    canonicalUrl,
    alternateLanguages: buildAlternateLanguages((l) => pagePath(l, "contact")),
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const page = dict.pages.contact;
  const pageUrl = `${SITE.domain}${pagePath(locale, "contact")}`;

  const methods = [
    { ...page.whatsapp, href: `https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}`, external: true, value: SITE.whatsapp },
    { ...page.email, href: `mailto:${SITE.email}`, external: false, value: SITE.email },
    { ...page.phone, href: `tel:${SITE.phone}`, external: false, value: SITE.phoneDisplay },
    { title: dict.footer.findUs, desc: SITE.address.formatted, href: SITE.mapsUrl, external: true, value: dict.footer.findUs },
  ];

  return (
    <>
      <JsonLd
        data={[
          ...buildContactPageJsonLd(locale, dict, pageUrl),
          pageBreadcrumbs(locale, dict, page.title, pageUrl),
        ]}
      />
      <main>
        <PageHeader eyebrow={page.eyebrow} title={page.title} description={page.description} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <section aria-labelledby="contact-methods-heading">
            <h2 id="contact-methods-heading" className="sr-only">
              {page.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {methods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group p-8 border border-border rounded-sm bg-surface-elevated hover:border-gold/30 transition-all duration-300"
                >
                  <h3 className="font-display text-xl text-cream font-semibold mb-2 group-hover:text-gold transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-cream-muted text-sm mb-4">{method.desc}</p>
                  <p className="text-gold text-sm font-medium">{method.value}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="border border-border rounded-sm bg-surface-elevated p-8 md:p-12" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="font-display text-2xl text-cream font-semibold mb-2">
              {page.formTitle}
            </h2>
            <p className="text-cream-muted text-sm mb-8">{page.formDesc}</p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-cream-muted text-xs uppercase tracking-wider mb-2">
                    {page.name} *
                  </label>
                  <input type="text" required className="w-full bg-ink border border-border rounded-sm px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/50" />
                </div>
                <div>
                  <label className="block text-cream-muted text-xs uppercase tracking-wider mb-2">
                    {page.emailLabel} *
                  </label>
                  <input type="email" required className="w-full bg-ink border border-border rounded-sm px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/50" />
                </div>
              </div>
              <div>
                <label className="block text-cream-muted text-xs uppercase tracking-wider mb-2">
                  {page.phoneLabel}
                </label>
                <input type="tel" className="w-full bg-ink border border-border rounded-sm px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/50" />
              </div>
              <div>
                <label className="block text-cream-muted text-xs uppercase tracking-wider mb-2">
                  {page.message} *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={page.messagePlaceholder}
                  className="w-full bg-ink border border-border rounded-sm px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/50 resize-none placeholder:text-cream-muted/40"
                />
              </div>
              <Button type="submit" variant="primary">{page.submit}</Button>
            </form>
          </section>
        </div>
        <GmbSection />
      </main>
    </>
  );
}
