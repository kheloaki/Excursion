import type { NextConfig } from "next";

const tourRewrites = [
  { source: "/fr/excursions/:slug*", destination: "/fr/tours/:slug*" },
  { source: "/es/excursiones/:slug*", destination: "/es/tours/:slug*" },
  { source: "/ar/rihlat/:slug*", destination: "/ar/tours/:slug*" },
  { source: "/pl/wycieczki/:slug*", destination: "/pl/tours/:slug*" },
  { source: "/de/ausfluge/:slug*", destination: "/de/tours/:slug*" },
];

const pageRewrites = [
  { source: "/fr/a-propos", destination: "/fr/about" },
  { source: "/fr/politique-de-confidentialite", destination: "/fr/privacy-policy" },
  { source: "/fr/conditions-generales", destination: "/fr/terms-and-conditions" },
  { source: "/es/sobre-nosotros", destination: "/es/about" },
  { source: "/es/contacto", destination: "/es/contact" },
  { source: "/es/politica-de-privacidad", destination: "/es/privacy-policy" },
  { source: "/es/terminos-y-condiciones", destination: "/es/terms-and-conditions" },
  { source: "/ar/من-نحن", destination: "/ar/about" },
  { source: "/ar/اتصل-بنا", destination: "/ar/contact" },
  { source: "/ar/سياسة-الخصوصية", destination: "/ar/privacy-policy" },
  { source: "/ar/الشروط-والأحكام", destination: "/ar/terms-and-conditions" },
  { source: "/pl/o-nas", destination: "/pl/about" },
  { source: "/pl/kontakt", destination: "/pl/contact" },
  { source: "/pl/polityka-prywatnosci", destination: "/pl/privacy-policy" },
  { source: "/pl/regulamin", destination: "/pl/terms-and-conditions" },
  { source: "/de/uber-uns", destination: "/de/about" },
  { source: "/de/kontakt", destination: "/de/contact" },
  { source: "/de/datenschutz", destination: "/de/privacy-policy" },
  { source: "/de/agb", destination: "/de/terms-and-conditions" },
];

const serviceRewrites = [
  { source: "/es/servicios/:slug*", destination: "/es/services/:slug*" },
  { source: "/ar/خدمات/:slug*", destination: "/ar/services/:slug*" },
  { source: "/pl/uslugi/:slug*", destination: "/pl/services/:slug*" },
  { source: "/de/leistungen/:slug*", destination: "/de/services/:slug*" },
  { source: "/es/servicios", destination: "/es/services" },
  { source: "/ar/خدمات", destination: "/ar/services" },
  { source: "/pl/uslugi", destination: "/pl/services" },
  { source: "/de/leistungen", destination: "/de/services" },
];

const sitemapRewrites = [
  { source: "/sitemap-pages-en.xml", destination: "/sitemap-pages/en" },
  { source: "/sitemap-pages-fr.xml", destination: "/sitemap-pages/fr" },
  { source: "/sitemap-pages-es.xml", destination: "/sitemap-pages/es" },
  { source: "/sitemap-pages-ar.xml", destination: "/sitemap-pages/ar" },
  { source: "/sitemap-pages-pl.xml", destination: "/sitemap-pages/pl" },
  { source: "/sitemap-pages-de.xml", destination: "/sitemap-pages/de" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [...tourRewrites, ...pageRewrites, ...serviceRewrites, ...sitemapRewrites];
  },
};

export default nextConfig;
