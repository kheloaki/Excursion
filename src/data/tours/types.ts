import type { Locale } from "@/i18n/config";
import { TOUR_MEDIA } from "../tour-images";

export type TourCategory = "agadir" | "taghazout" | "day-trip" | "transfer";

export type TourId =
  | "desert-trip"
  | "goat-crocoparc"
  | "marrakech-day-trip"
  | "sandboard-quad"
  | "crocoparc-transfer"
  | "paradise-desert-combo"
  | "moroccan-show"
  | "small-desert"
  | "horse-riding"
  | "airport-transfer"
  | "boat-trip"
  | "medina-coco-polizzi"
  | "buggy-tour"
  | "quad-bike"
  | "taroudant"
  | "souss-national-park"
  | "goats-tree"
  | "paradise-valley"
  | "sandboarding"
  | "camel-ride"
  | "city-tour"
  | "essaouira"
  | "crocoparc-tour"
  | "dolphin-show"
  | "hot-air-balloon"
  | "cooking-class"
  | "souss-park";

export interface TourBase {
  id: TourId;
  rating: number;
  image: string;
  images: string[];
  category: TourCategory;
}

export interface TourLocaleContent {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Tour extends TourBase, TourLocaleContent {
  id: TourId;
}

export const tourSegment: Record<Locale, string> = {
  en: "tours",
  fr: "excursions",
  es: "excursiones",
  ar: "rihlat",
  pl: "wycieczki",
  de: "ausfluge",
};

const tourMeta: Omit<TourBase, "image" | "images">[] = [
  { id: "desert-trip", rating: 5.0, category: "agadir" },
  { id: "goat-crocoparc", rating: 5.0, category: "agadir" },
  { id: "marrakech-day-trip", rating: 5.0, category: "day-trip" },
  { id: "sandboard-quad", rating: 5.0, category: "agadir" },
  { id: "crocoparc-transfer", rating: 5.0, category: "transfer" },
  { id: "paradise-desert-combo", rating: 5.0, category: "day-trip" },
  { id: "moroccan-show", rating: 5.0, category: "agadir" },
  { id: "small-desert", rating: 5.0, category: "agadir" },
  { id: "horse-riding", rating: 4.9, category: "agadir" },
  { id: "airport-transfer", rating: 5.0, category: "transfer" },
  { id: "boat-trip", rating: 5.0, category: "agadir" },
  { id: "medina-coco-polizzi", rating: 5.0, category: "agadir" },
  { id: "buggy-tour", rating: 5.0, category: "agadir" },
  { id: "quad-bike", rating: 5.0, category: "agadir" },
  { id: "taroudant", rating: 4.9, category: "day-trip" },
  { id: "souss-national-park", rating: 4.8, category: "day-trip" },
  { id: "goats-tree", rating: 4.8, category: "agadir" },
  { id: "paradise-valley", rating: 5.0, category: "agadir" },
  { id: "sandboarding", rating: 5.0, category: "agadir" },
  { id: "camel-ride", rating: 5.0, category: "agadir" },
  { id: "city-tour", rating: 5.0, category: "agadir" },
  { id: "essaouira", rating: 4.8, category: "day-trip" },
  { id: "crocoparc-tour", rating: 4.8, category: "agadir" },
  { id: "dolphin-show", rating: 4.8, category: "agadir" },
  { id: "hot-air-balloon", rating: 4.8, category: "agadir" },
  { id: "cooking-class", rating: 5.0, category: "agadir" },
  { id: "souss-park", rating: 5.0, category: "day-trip" },
];

export const TOUR_BASE: TourBase[] = tourMeta.map((tour) => {
  const media = TOUR_MEDIA[tour.id];
  return {
    ...tour,
    image: media.hero,
    images: media.gallery,
  };
});
