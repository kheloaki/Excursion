import type { TourId } from "./tours/types";

export interface FooterKeywordLink {
  label: string;
  tourId: TourId;
}

export const FOOTER_SEO_KEYWORDS: FooterKeywordLink[] = [
  { label: "Things to do in Agadir", tourId: "city-tour" },
  { label: "Things to do in Morocco", tourId: "desert-trip" },
  { label: "Agadir desert trip", tourId: "desert-trip" },
  { label: "Quad biking Agadir", tourId: "quad-bike" },
  { label: "Buggy tour Agadir", tourId: "buggy-tour" },
  { label: "Camel ride Agadir", tourId: "camel-ride" },
  { label: "Paradise Valley day trip", tourId: "paradise-valley" },
  { label: "Marrakech day trip from Agadir", tourId: "marrakech-day-trip" },
  { label: "Essaouira day trip Agadir", tourId: "essaouira" },
  { label: "Taroudant excursion", tourId: "taroudant" },
  { label: "Souss-Massa National Park", tourId: "souss-national-park" },
  { label: "Sandboarding Agadir", tourId: "sandboarding" },
  { label: "Boat trip Agadir", tourId: "boat-trip" },
  { label: "Goats on tree Morocco", tourId: "goats-tree" },
  { label: "Crocoparc Agadir", tourId: "crocoparc-tour" },
  { label: "Agadir airport transfer", tourId: "airport-transfer" },
  { label: "Taghazout excursions", tourId: "paradise-valley" },
  { label: "Moroccan cooking class Agadir", tourId: "cooking-class" },
  { label: "Hot air balloon Agadir", tourId: "hot-air-balloon" },
  { label: "Horse riding Agadir", tourId: "horse-riding" },
  { label: "Dolphin show Agadir", tourId: "dolphin-show" },
  { label: "Moroccan dinner show", tourId: "moroccan-show" },
  { label: "Agadir city tour", tourId: "city-tour" },
  { label: "Small desert trip Agadir", tourId: "small-desert" },
  { label: "Sandboard and quad Agadir", tourId: "sandboard-quad" },
  { label: "Paradise Valley and desert", tourId: "paradise-desert-combo" },
  { label: "Tours from Agadir Morocco", tourId: "desert-trip" },
  { label: "Excursions Agadir Morocco", tourId: "quad-bike" },
  { label: "Book tour Morocco", tourId: "marrakech-day-trip" },
  { label: "Morocco adventure tours", tourId: "buggy-tour" },
  { label: "Atlantic coast tours Morocco", tourId: "boat-trip" },
  { label: "Berber village tour Agadir", tourId: "small-desert" },
  { label: "Legzira beach day trip", tourId: "essaouira" },
  { label: "Atlas Mountains day trip", tourId: "paradise-valley" },
  { label: "Flamingo watching Morocco", tourId: "souss-park" },
  { label: "Agadir activities booking", tourId: "camel-ride" },
  { label: "Morocco family excursions", tourId: "goat-crocoparc" },
  { label: "Private tours Agadir", tourId: "airport-transfer" },
  { label: "WhatsApp tour booking Morocco", tourId: "city-tour" },
];
