import type { Locale } from "../config";
import type { GmbContent } from "./gmb-locale";

export type Dictionary = DictionaryBase & {
  nav: DictionaryBase["nav"] & {
    services: string;
    destinations: string;
    moroccoWide: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<
      import("@/data/site").ServiceCategoryId,
      { title: string; description: string }
    >;
  };
  footer: DictionaryBase["footer"] & {
    keywordsTitle: string;
    moroccoTitle: string;
    findUs: string;
    popularTours: string;
    seoParagraph: string;
    builtBy: string;
  };
  gmb: GmbContent;
};

export interface DictionaryBase {
  meta: {
    siteName: string;
    tagline: string;
    seoTitle: string;
    seoDescription: string;
    keywords: string[];
  };
  nav: {
    bookNow: string;
    home: string;
    allExcursions: string;
    contact: string;
    menu: string;
    thingsAgadir: string;
    thingsTaghazout: string;
    toursFromAgadir: string;
    airportTransfer: string;
    about: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    explore: string;
    plan: string;
    statTours: string;
    statToursLabel: string;
    statRating: string;
    statRatingLabel: string;
    statPickup: string;
    statPickupLabel: string;
    scroll: string;
  };
  trust: {
    sectionTitle?: string;
    rated: { title: string; desc: string };
    pickup: { title: string; desc: string };
    bundle: { title: string; desc: string };
    instant: { title: string; desc: string };
  };
  tours: {
    eyebrow: string;
    title: string;
    description: string;
    showing: string;
    experience: string;
    experiences: string;
    noResults: string;
    clearFilters: string;
    viewDetails: string;
    searchPlaceholder: string;
    filters: {
      all: string;
      adventure: string;
      dayTrip: string;
      coastal: string;
      transfer: string;
    };
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    whatsapp: string;
    contact: string;
  };
  tour: {
    bookThisTour: string;
    quoteNote: string;
    requestQuote: string;
    guestRating: string;
    whatsIncluded: string;
    whyBook: string;
    related: string;
    photoGallery: string;
    bookWhatsapp: string;
    bookEmail: string;
    home: string;
    excursions: string;
    inclusions: string[];
  };
  footer: {
    description: string;
    explore: string;
    contact: string;
    rights: string;
    seoLine: string;
    links: {
      allExcursions: string;
      about: string;
      contact: string;
      privacy: string;
      terms: string;
    };
  };
  floating: { bookNow: string };
  pages: {
    about: {
      title: string;
      eyebrow: string;
      description: string;
      sections: { title: string; content: string }[];
      cta: string;
    };
    contact: {
      title: string;
      eyebrow: string;
      description: string;
      whatsapp: { title: string; desc: string };
      email: { title: string; desc: string };
      phone: { title: string; desc: string };
      formTitle: string;
      formDesc: string;
      name: string;
      emailLabel: string;
      phoneLabel: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    privacy: {
      title: string;
      eyebrow: string;
      description?: string;
      sections: { title: string; body: string }[];
    };
    terms: {
      title: string;
      eyebrow: string;
      description?: string;
      sections: { title: string; body: string }[];
    };
  };
}

export type Dictionaries = Record<Locale, Dictionary>;
