/** Descriptive alt text for tour and site images (SEO + accessibility). */
export const IMAGE_ALT: Record<string, string> = {
  "desert-sunset-dunes": "Sunset over sand dunes on a desert trip from Agadir, Morocco",
  "desert-sunset-ridge": "Golden desert ridge at sunset near Agadir",
  "desert-selfie": "Travelers on a desert excursion south of Agadir",
  "desert-guide-blue": "Local guide on a desert tour in the Souss region, Morocco",
  "desert-camp-landrover": "4x4 vehicle at a desert camp near Agadir",
  "desert-camp-tents": "Berber-style desert camp tents in southern Morocco",
  "desert-camp-wide": "Desert camp and dunes on a day trip from Agadir",
  "desert-camp-facilities": "Desert camp facilities on an Agadir desert excursion",
  "camel-guide-waving": "Camel ride guide welcoming guests in Agadir",
  "camel-tour-start": "Camel tour starting point near Agadir beach",
  "camel-caravan": "Camel caravan crossing sand dunes in Morocco",
  "camel-line-trees": "Camels lined up between argan trees near Agadir",
  "camel-group-four": "Group camel ride experience in Agadir",
  "camel-group-vans": "Tour group preparing for a camel ride from Agadir",
  "camel-beach-cliff": "Camels on Agadir coastline with cliffs in the background",
  "camel-desert-dunes": "Camel ride on golden dunes near Agadir",
  "legzira-camels": "Camels near Legzira beach on an Essaouira day trip from Agadir",
  "quad-beach-sunset": "Quad biking on Agadir beach at sunset",
  "quad-beach-group": "Group quad bike tour on the Atlantic coast near Agadir",
  "quad-beach-fun": "Quad biking adventure on Agadir beach",
  "quad-guide-beach": "Quad bike guide leading a tour on Agadir beach",
  "quad-dunes-group": "Quad biking group in sand dunes near Agadir",
  "quad-dunes-line": "Line of quad bikes on desert dunes in Morocco",
  "quad-dune-solo": "Quad bike riding on sand dunes near Agadir",
  "quad-fleet": "Quad bike fleet ready for Agadir desert tours",
  "buggy-cfmoto": "CFMOTO buggy tour in the Agadir countryside",
  "sandboarding-guide": "Sandboarding guide on dunes near Agadir",
  "sandboarding-group": "Group sandboarding on dunes south of Agadir",
  "goats-baby-hold": "Baby goat at the famous tree-climbing goats stop near Agadir",
  "goats-group-guide": "Guide with tree-climbing goats in the argan forest",
  "goats-tree-tourists": "Tourists photographing goats in argan trees near Agadir",
  "goats-tree-herd": "Herd of goats in argan trees on an Agadir tour",
  "goats-tree-wide": "Wide view of goats climbing argan trees in Morocco",
  "goats-smile": "Goats on argan tree — popular Agadir photo stop",
  "goats-friends": "Goats resting in argan trees near Agadir",
  "paradise-valley-group": "Group hiking in Paradise Valley on a day trip from Agadir",
  "boat-phantom": "Boat cruise in Agadir bay on the Atlantic coast",
  "boat-seafood-lunch": "Seafood lunch on a boat trip in Agadir",
  "boat-breakfast": "Breakfast on board during an Agadir bay boat tour",
  "boat-stern": "Rear deck view on an Agadir boat excursion",
  "boat-resort-lounge": "Coastal lounge area near Agadir marina",
  "legzira-arch": "Legzira beach natural arch on an Essaouira day trip from Agadir",
  "flamingos-lagoon-1": "Flamingos in the lagoon at Souss-Massa National Park",
  "flamingos-lagoon-2": "Birdwatching at Souss-Massa lagoon near Agadir",
  "souss-park-sign": "Souss-Massa National Park entrance near Agadir",
  "moroccan-tent": "Traditional Moroccan tent at a desert or cultural experience",
  "tajine-lunch": "Moroccan tagine lunch on a tour from Agadir",
  "mercedes-palm": "Tour transport vehicle under palm trees in Agadir",
  "mercedes-desert": "Tour minivan on a desert trip from Agadir",
  "mercedes-vito-street": "Private tour vehicle for Agadir hotel pickup",
  "minivan-night": "Evening tour transfer in Agadir",
  "electric-bikes-beach": "Electric bikes on Agadir beach promenade",
};

function filenameFromSrc(src: string): string {
  const file = src.split("/").pop() ?? "";
  return file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
}

function humanizeFilename(name: string): string {
  return name.replace(/-/g, " ");
}

/** Alt text for an image path, optionally prefixed with tour or page context. */
export function imageAltFromSrc(src: string, context?: string): string {
  const name = filenameFromSrc(src);
  const base = IMAGE_ALT[name] ?? `Morocco tour photo — ${humanizeFilename(name)}`;
  return context ? `${context}: ${base}` : base;
}

export function tourHeroAlt(tourTitle: string, imageSrc: string): string {
  return imageAltFromSrc(imageSrc, tourTitle);
}

export function tourGalleryAlt(tourTitle: string, imageSrc: string): string {
  return imageAltFromSrc(imageSrc, `${tourTitle} gallery`);
}

export function siteHeroAlt(siteName: string): string {
  return `${siteName} — desert sunset tour from Agadir, Morocco`;
}

export function fleetImageAlt(siteName: string): string {
  return `${siteName} tour transport and hotel pickup in Agadir`;
}
