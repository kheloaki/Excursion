import { SITE_IMAGES } from "./tour-images";
import type { TourId } from "./tours/types";

export const SITE = {
  name: "Excursions Tours Flat",
  tagline: "Morocco Tours & Excursions",
  domain: "https://www.booktourexcursions.com",
  email: "info@booktourexcursions.com",
  phone: "+212618778871",
  phoneDisplay: "+212 6 18 77 88 71",
  whatsapp: "+212618778871",
  address: {
    street: "Sonaba",
    city: "Agadir",
    region: "Souss-Massa",
    postalCode: "80000",
    country: "Morocco",
    countryCode: "MA",
    formatted: "Sonaba, Agadir 80000, Morocco",
  },
  geo: {
    latitude: 30.405,
    longitude: -9.588,
    region: "MA-AGD",
    placename: "Agadir, Morocco",
  },
  mapsUrl: "https://share.google/L3KUb1oer9PeJ3hoA",
  /** Google Business Profile — directions & profile */
  googleBusiness: {
    profileUrl: "https://share.google/L3KUb1oer9PeJ3hoA",
    reviewUrl: "https://share.google/L3KUb1oer9PeJ3hoA",
  },
  description:
    "Excursions Tours Flat — day trips and activities from Agadir and Taghazout. Desert, coast, Atlas day trips, transfers.",
  seoTitle:
    "Excursions Tours Flat | Things to Do in Morocco — Tours & Activities",
  seoDescription:
    "Tours and day trips from Agadir with Excursions Tours Flat. Desert, quad, Paradise Valley, Marrakech and Essaouira. Hotel pickup. WhatsApp booking.",
  heroImage: SITE_IMAGES.hero,
  fleetImage: SITE_IMAGES.fleet,
  logoText: "EXCURSIONS TOURS FLAT",
  logoSubtext: "MOROCCO TOURS & ACTIVITIES",
  social: {
    facebook: "#",
    instagram: "#",
    tripadvisor: "#",
    googleMaps: "https://share.google/L3KUb1oer9PeJ3hoA",
  },
  moroccoCities: [
    "Agadir",
    "Marrakech",
    "Essaouira",
    "Casablanca",
    "Fes",
    "Tangier",
    "Rabat",
    "Taghazout",
    "Taroudant",
    "Merzouga",
  ],
  openingHours: {
    opens: "08:00",
    closes: "22:00",
  },
} as const;

export type ServiceCategoryId =
  | "desert"
  | "quad-buggy"
  | "day-trips"
  | "coastal"
  | "nature"
  | "culture"
  | "transfers";

export interface ServiceCategory {
  id: ServiceCategoryId;
  icon: string;
  image: string;
  tourId: TourId;
  filter: "all" | "agadir" | "day-trip" | "taghazout" | "transfer";
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "desert", icon: "◈", image: SITE_IMAGES.hero, tourId: "desert-trip", filter: "agadir" },
  { id: "quad-buggy", icon: "◎", image: "/images/quad-beach-sunset.png", tourId: "quad-bike", filter: "agadir" },
  { id: "day-trips", icon: "✦", image: "/images/paradise-valley-group.png", tourId: "marrakech-day-trip", filter: "day-trip" },
  { id: "coastal", icon: "◇", image: "/images/boat-phantom.png", tourId: "boat-trip", filter: "agadir" },
  { id: "nature", icon: "★", image: "/images/flamingos-lagoon-1.png", tourId: "souss-national-park", filter: "day-trip" },
  { id: "culture", icon: "◆", image: "/images/moroccan-tent.png", tourId: "cooking-class", filter: "agadir" },
  { id: "transfers", icon: "→", image: SITE_IMAGES.fleet, tourId: "airport-transfer", filter: "transfer" },
];
