import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import Layout from "@/components/Layout";
import SetLocaleAttributes from "@/components/SetLocaleAttributes";
import JsonLd from "@/components/JsonLd";
import { buildLocalBusinessJsonLd } from "@/lib/seo";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "es" }, { locale: "ar" }, { locale: "pl" }, { locale: "de" }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const localBusinessJsonLd = buildLocalBusinessJsonLd(locale, dict);

  return (
    <LocaleProvider locale={locale} dict={dict}>
      <SetLocaleAttributes locale={locale} />
      <JsonLd data={localBusinessJsonLd} />
      <Layout>{children}</Layout>
    </LocaleProvider>
  );
}
