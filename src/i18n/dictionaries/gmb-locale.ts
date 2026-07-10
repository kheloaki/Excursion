import type { Locale } from "../config";

export interface GmbContent {
  eyebrow: string;
  title: string;
  description: string;
  addressLabel: string;
  phoneLabel: string;
  hoursLabel: string;
  hoursWeekdays: string;
  hoursSaturday: string;
  hoursSunday: string;
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
      "Our office is on Google Maps — same listing as Book Tour Excursions. Drop by, get directions, or leave a review after your trip.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    hoursLabel: "Opening hours",
    hoursWeekdays: "Mon–Fri: 8:00 – 22:00",
    hoursSaturday: "Sat: 8:00 – 22:00",
    hoursSunday: "Sun: 9:00 – 20:00",
    directions: "Get directions",
    viewOnGoogle: "View on Google",
    leaveReview: "Leave a Google review",
    mapTitle: "Book Tour Excursions on Google Maps — Sonaba, Agadir",
  },
  fr: {
    eyebrow: "Nous trouver",
    title: "Retrouvez-nous à Sonaba, Agadir",
    description:
      "Notre bureau est sur Google Maps — la même fiche Book Tour Excursions. Passez nous voir, obtenez l'itinéraire ou laissez un avis après votre excursion.",
    addressLabel: "Adresse",
    phoneLabel: "Téléphone",
    hoursLabel: "Horaires",
    hoursWeekdays: "Lun–ven : 8h – 22h",
    hoursSaturday: "Sam : 8h – 22h",
    hoursSunday: "Dim : 9h – 20h",
    directions: "Itinéraire",
    viewOnGoogle: "Voir sur Google",
    leaveReview: "Laisser un avis Google",
    mapTitle: "Book Tour Excursions sur Google Maps — Sonaba, Agadir",
  },
  es: {
    eyebrow: "Ubicación",
    title: "Estamos en Sonaba, Agadir",
    description:
      "Nuestra oficina está en Google Maps — el mismo perfil de Book Tour Excursions. Pasa a vernos, pide indicaciones o deja una reseña después del tour.",
    addressLabel: "Dirección",
    phoneLabel: "Teléfono",
    hoursLabel: "Horario",
    hoursWeekdays: "Lun–vie: 8:00 – 22:00",
    hoursSaturday: "Sáb: 8:00 – 22:00",
    hoursSunday: "Dom: 9:00 – 20:00",
    directions: "Cómo llegar",
    viewOnGoogle: "Ver en Google",
    leaveReview: "Dejar reseña en Google",
    mapTitle: "Book Tour Excursions en Google Maps — Sonaba, Agadir",
  },
  de: {
    eyebrow: "Standort",
    title: "Besuchen Sie uns in Sonaba, Agadir",
    description:
      "Unser Büro steht auf Google Maps — dasselbe Profil wie Book Tour Excursions. Kommen Sie vorbei, holen Sie sich die Route oder hinterlassen Sie eine Bewertung.",
    addressLabel: "Adresse",
    phoneLabel: "Telefon",
    hoursLabel: "Öffnungszeiten",
    hoursWeekdays: "Mo–Fr: 8:00 – 22:00",
    hoursSaturday: "Sa: 8:00 – 22:00",
    hoursSunday: "So: 9:00 – 20:00",
    directions: "Route planen",
    viewOnGoogle: "Auf Google ansehen",
    leaveReview: "Google-Bewertung schreiben",
    mapTitle: "Book Tour Excursions auf Google Maps — Sonaba, Agadir",
  },
  pl: {
    eyebrow: "Lokalizacja",
    title: "Odwiedź nas w Sonaba, Agadir",
    description:
      "Nasze biuro jest na Google Maps — ten sam profil Book Tour Excursions. Wpadnij, wyznacz trasę lub zostaw opinię po wycieczce.",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    hoursLabel: "Godziny otwarcia",
    hoursWeekdays: "Pn–pt: 8:00 – 22:00",
    hoursSaturday: "Sob: 8:00 – 22:00",
    hoursSunday: "Ndz: 9:00 – 20:00",
    directions: "Wskazówki dojazdu",
    viewOnGoogle: "Zobacz w Google",
    leaveReview: "Dodaj opinię w Google",
    mapTitle: "Book Tour Excursions na Google Maps — Sonaba, Agadir",
  },
  ar: {
    eyebrow: "موقعنا",
    title: "زورونا في سونابا، أكادير",
    description:
      "مكتبنا على خرائط Google — نفس ملف Book Tour Excursions. مرّ علينا، احصل على الاتجاهات، أو اترك تقييماً بعد رحلتك.",
    addressLabel: "العنوان",
    phoneLabel: "الهاتف",
    hoursLabel: "ساعات العمل",
    hoursWeekdays: "الإثنين–الجمعة: 8:00 – 22:00",
    hoursSaturday: "السبت: 8:00 – 22:00",
    hoursSunday: "الأحد: 9:00 – 20:00",
    directions: "الاتجاهات",
    viewOnGoogle: "عرض على Google",
    leaveReview: "اترك تقييماً على Google",
    mapTitle: "Book Tour Excursions على خرائط Google — سونابا، أكادير",
  },
};
