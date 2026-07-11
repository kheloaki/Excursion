import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/i18n/config";
import { buildLocaleSitemapXml, sitemapXmlHeaders } from "@/lib/sitemap-xml";

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: Props) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;

  return new Response(buildLocaleSitemapXml(locale), {
    headers: sitemapXmlHeaders,
  });
}
