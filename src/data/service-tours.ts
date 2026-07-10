import type { ServiceCategoryId } from "./site";
import type { TourId } from "./tours/types";

/** Tours linked from each service category for internal SEO cross-linking */
export const SERVICE_TOUR_IDS: Record<ServiceCategoryId, TourId[]> = {
  desert: ["desert-trip", "small-desert", "camel-ride", "paradise-desert-combo", "moroccan-show"],
  "quad-buggy": ["quad-bike", "buggy-tour", "sandboard-quad", "sandboarding"],
  "day-trips": ["marrakech-day-trip", "essaouira", "paradise-valley", "taroudant", "medina-coco-polizzi"],
  coastal: ["boat-trip", "dolphin-show"],
  nature: ["souss-national-park", "souss-park", "goats-tree", "goat-crocoparc", "crocoparc-tour"],
  culture: ["cooking-class", "city-tour", "horse-riding", "moroccan-show"],
  transfers: ["airport-transfer", "crocoparc-transfer"],
};
