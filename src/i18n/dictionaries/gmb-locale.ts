import type { Locale } from "../config";

export interface GmbContent {
  eyebrow: string;
  title: string;
  description: string;
  addressLabel: string;
  phoneLabel: string;
  hoursLabel: string;
  hoursDaily: string;
  directions: string;
  viewOnGoogle: string;
  leaveReview: string;
  mapTitle: string;
}

export const GMB_LOCALE: Record<Locale, GmbContent> = {
  en: {
    eyebrow: "Find us",
    title: "Visit us in Sonaba, Agadir",
    description:
      "Our office is on Google Maps — same listing as Excursions Tours Flat. Drop by, get directions, or leave a review after your trip.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    hoursLabel: "Opening hours",
    hoursDaily: "Daily: 8:00 AM – 10:00 PM",
    directions: "Get directions",
    viewOnGoogle: "View on Google",
    leaveReview: "Leave a Google review",
    mapTitle: "Excursions Tours Flat on Google Maps — Sonaba, Agadir",
  },
  fr: {
    eyebrow: "Nous trouver",
    title: "Retrouvez-nous à Sonaba, Agadir",
    description:
      "Notre bureau est sur Google Maps — la même fiche Excursions Tours Flat. Passez nous voir, obtenez l'itinéraire ou laissez un avis après votre excursion.",
    addressLabel: "Adresse",
    phoneLabel: "Téléphone",
    hoursLabel: "Horaires",
    hoursDaily: "Tous les jours : 8h – 22h",
    directions: "Itinéraire",
    viewOnGoogle: "Voir sur Google",
    leaveReview: "Laisser un avis Google",
    mapTitle: "Excursions Tours Flat sur Google Maps — Sonaba, Agadir",
  },
  es: {
    eyebrow: "Ubicación",
    title: "Estamos en Sonaba, Agadir",
    description:
      "Nuestra oficina está en Google Maps — el mismo perfil de Excursions Tours Flat. Pasa a vernos, pide indicaciones o deja una reseña después del tour.",
    addressLabel: "Dirección",
    phoneLabel: "Teléfono",
    hoursLabel: "Horario",
    hoursDaily: "Todos los días: 8:00 – 22:00",
    directions: "Cómo llegar",
    viewOnGoogle: "Ver en Google",
    leaveReview: "Dejar reseña en Google",
    mapTitle: "Excursions Tours Flat en Google Maps — Sonaba, Agadir",
  },
  de: {
    eyebrow: "Standort",
    title: "Besuchen Sie uns in Sonaba, Agadir",
    description:
      "Unser Büro steht auf Google Maps — dasselbe Profil wie Excursions Tours Flat. Kommen Sie vorbei, holen Sie sich die Route oder hinterlassen Sie eine Bewertung.",
    addressLabel: "Adresse",
    phoneLabel: "Telefon",
    hoursLabel: "Öffnungszeiten",
    hoursDaily: "Täglich: 8:00 – 22:00",
    directions: "Route planen",
    viewOnGoogle: "Auf Google ansehen",
    leaveReview: "Google-Bewertung schreiben",
    mapTitle: "Excursions Tours Flat auf Google Maps — Sonaba, Agadir",
  },
  pl: {
    eyebrow: "Lokalizacja",
    title: "Odwiedź nas w Sonaba, Agadir",
    description:
      "Nasze biuro jest na Google Maps — ten sam profil Excursions Tours Flat. Wpadnij, wyznacz trasę lub zostaw opinię po wycieczce.",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    hoursLabel: "Godziny otwarcia",
    hoursDaily: "Codziennie: 8:00 – 22:00",
    directions: "Wskazówki dojazdu",
    viewOnGoogle: "Zobacz w Google",
    leaveReview: "Dodaj opinię w Google",
    mapTitle: "Excursions Tours Flat na Google Maps — Sonaba, Agadir",
  },
  ar: {
    eyebrow: "موقعنا",
    title: "زورونا في سونابا، أكادير",
    description:
      "مكتبنا على خرائط Google — نفس ملف Excursions Tours Flat. مرّ علينا، احصل على الاتجاهات، أو اترك تقييماً بعد رحلتك.",
    addressLabel: "العنوان",
    phoneLabel: "الهاتف",
    hoursLabel: "ساعات العمل",
    hoursDaily: "يومياً: 8:00 ص – 10:00 م",
    directions: "الاتجاهات",
    viewOnGoogle: "عرض على Google",
    leaveReview: "اترك تقييماً على Google",
    mapTitle: "Excursions Tours Flat على خرائط Google — سونابا، أكادير",
  },
};
