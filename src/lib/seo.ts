import { SITE } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { SEO_CONTENT } from "@/data/seo-content";
import { getHomePath } from "@/i18n/routing";

function localAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.countryCode,
  };
}

function localGeo() {
  return {
    "@type": "GeoCoordinates" as const,
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  };
}

function openingHoursSpec() {
  const { opens, closes } = SITE.openingHours;
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens,
      closes,
    },
  ];
}

export function buildLocalBusinessJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "TouristInformationCenter"],
    "@id": `${SITE.domain}/#localbusiness`,
    name: SITE.name,
    alternateName: dict.meta.siteName,
    url: `${SITE.domain}${getHomePath(locale)}`,
    description: dict.meta.seoDescription,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.domain}${SITE.heroImage}`,
    logo: `${SITE.domain}${SITE.heroImage}`,
    priceRange: "$$",
    address: localAddress(),
    geo: localGeo(),
    hasMap: SITE.mapsUrl,
    openingHoursSpecification: openingHoursSpec(),
    areaServed: SITE.moroccoCities.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "Country", name: "Morocco" },
    })),
    knowsAbout: [
      "Things to do in Morocco",
      "Things to do in Agadir",
      "Morocco tours and excursions",
      "Agadir day trips",
      "Morocco desert tours",
      "Quad biking Morocco",
      "Paradise Valley Morocco",
    ],
    sameAs: [
      SITE.googleBusiness.profileUrl,
      SITE.social.facebook,
      SITE.social.instagram,
    ].filter((u) => u && u !== "#"),
  };
}

export function buildTourJsonLd(
  tour: {
    title: string;
    description: string;
    duration: string;
    rating: number;
    image: string;
  },
  locale: Locale,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.description,
    url,
    inLanguage: locale,
    image: `${SITE.domain}${tour.image}`,
    itinerary: {
      "@type": "Place",
      name: "Morocco",
      address: localAddress(),
      geo: localGeo(),
    },
    provider: {
      "@id": `${SITE.domain}/#localbusiness`,
    },
    touristType: "Leisure",
    offers: {
      "@type": "Offer",
      url,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        description: "Contact for personalised quote via WhatsApp",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      bestRating: 5,
    },
  };
}

export function buildOrganizationJsonLd(locale: Locale, dict: Dictionary) {
  return buildLocalBusinessJsonLd(locale, dict);
}

export function buildWebsiteJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: dict.meta.seoTitle,
    url: `${SITE.domain}${getHomePath(locale)}`,
    description: dict.meta.seoDescription,
    inLanguage: locale,
    publisher: { "@id": `${SITE.domain}/#localbusiness` },
    about: {
      "@type": "TouristDestination",
      name: "Morocco",
      description: "Tours and things to do across Morocco",
      geo: localGeo(),
      containedInPlace: { "@type": "Country", name: "Morocco" },
    },
  };
}

export function buildWebPageJsonLd(
  locale: Locale,
  name: string,
  description: string,
  url: string,
  options?: { speakableSelectors?: string[] }
) {
  const page: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", url: SITE.domain, name: SITE.name },
    about: { "@id": `${SITE.domain}/#localbusiness` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE.domain}${SITE.heroImage}` },
  };

  if (options?.speakableSelectors?.length) {
    page.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: options.speakableSelectors,
    };
  }

  return page;
}

export function buildFaqJsonLdFromItems(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildTourPageJsonLd(
  tour: {
    title: string;
    description: string;
    duration: string;
    rating: number;
    image: string;
  },
  locale: Locale,
  url: string,
  faqItems: { question: string; answer: string }[]
) {
  return [
    buildWebPageJsonLd(locale, tour.title, tour.description, url, {
      speakableSelectors: [".tour-overview", ".tour-faq-answer"],
    }),
    buildTourJsonLd(tour, locale, url),
    buildFaqJsonLdFromItems(faqItems),
  ];
}

export function buildServiceJsonLd(
  locale: Locale,
  name: string,
  description: string,
  url: string,
  image: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image: `${SITE.domain}${image}`,
    inLanguage: locale,
    provider: { "@id": `${SITE.domain}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: SITE.address.city,
      containedInPlace: { "@type": "Country", name: "Morocco" },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: SITE.phone,
    },
  };
}

export function buildServicePageJsonLd(
  locale: Locale,
  service: { name: string; description: string; image: string },
  url: string,
  tours: { title: string; url: string }[]
) {
  return [
    buildWebPageJsonLd(locale, service.name, service.description, url, {
      speakableSelectors: [".service-overview", ".service-highlight"],
    }),
    buildServiceJsonLd(locale, service.name, service.description, url, service.image),
    buildTourItemListJsonLd(tours, locale, service.name),
  ];
}

export function buildServicesIndexJsonLd(
  locale: Locale,
  dict: Dictionary,
  url: string,
  services: { name: string; url: string; description: string }[]
) {
  return [
    buildWebPageJsonLd(locale, dict.services.title, dict.services.description, url),
    buildServicesItemListJsonLd(locale, dict.services.title, services),
    buildLocalBusinessJsonLd(locale, dict),
  ];
}

export function buildServicesItemListJsonLd(
  locale: Locale,
  listName: string,
  services: { name: string; url: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    inLanguage: locale,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: service.url,
      description: service.description,
    })),
  };
}

export function buildHomePageJsonLd(
  locale: Locale,
  dict: Dictionary,
  url: string,
  tours: { title: string; url: string }[],
  listName: string,
  services: { name: string; url: string; description: string }[]
) {
  return [
    buildWebPageJsonLd(locale, dict.meta.seoTitle, dict.meta.seoDescription, url, {
      speakableSelectors: [".hero-subtitle", ".faq-answer"],
    }),
    buildWebsiteJsonLd(locale, dict),
    buildFaqJsonLd(locale),
    buildTourItemListJsonLd(tours, locale, listName),
    buildServicesItemListJsonLd(locale, dict.services.title, services),
  ];
}

export function buildAboutPageJsonLd(locale: Locale, dict: Dictionary, url: string) {
  return [
    buildWebPageJsonLd(locale, dict.pages.about.title, dict.pages.about.description, url),
    buildLocalBusinessJsonLd(locale, dict),
  ];
}

export function buildContactPageJsonLd(locale: Locale, dict: Dictionary, url: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: dict.pages.contact.title,
      description: dict.pages.contact.description,
      url,
      inLanguage: locale,
      mainEntity: { "@id": `${SITE.domain}/#localbusiness` },
    },
    buildLocalBusinessJsonLd(locale, dict),
  ];
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqJsonLd(locale: Locale) {
  const faq = SEO_CONTENT[locale].faq.items;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildTourItemListJsonLd(
  tours: { title: string; url: string }[],
  locale: Locale,
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    inLanguage: locale,
    numberOfItems: tours.length,
    itemListElement: tours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tour.title,
      url: tour.url,
    })),
  };
}

export function pageBreadcrumbs(
  locale: Locale,
  dict: Dictionary,
  pageName: string,
  pageUrl: string
) {
  return buildBreadcrumbJsonLd([
    { name: dict.tour.home, url: `${SITE.domain}${getHomePath(locale)}` },
    { name: pageName, url: pageUrl },
  ]);
}
