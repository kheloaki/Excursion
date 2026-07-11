import type { Locale } from "../config";

export interface TourAeoItem {
  question: string;
  answer: string;
}

export interface TourAeoContent {
  title: string;
  overviewHeading: string;
  locationLine: string;
  items: TourAeoItem[];
}

export const TOUR_AEO: Record<Locale, TourAeoContent> = {
  en: {
    title: "Questions about this tour",
    overviewHeading: "About this tour",
    locationLine: "Departing from Agadir & Taghazout · Souss-Massa, Morocco",
    items: [
      {
        question: "How do I book {title}?",
        answer:
          "Message us on WhatsApp ({phone}) with your hotel, dates, and group size. We confirm pickup time and price before you pay anything.",
      },
      {
        question: "Is hotel pickup included?",
        answer:
          "Yes — free pickup and drop-off from hotels in Agadir and Taghazout for {title}.",
      },
      {
        question: "How long does {title} take?",
        answer: "Allow {duration}. Exact pickup time depends on your hotel and the season.",
      },
      {
        question: "Where is Excursions Tours Flat based?",
        answer:
          "Our office is at {address}. We organise tours across Agadir, Taghazout, and southern Morocco.",
      },
    ],
  },
  fr: {
    title: "Questions sur cette excursion",
    overviewHeading: "À propos de cette excursion",
    locationLine: "Au départ d'Agadir & Taghazout · Souss-Massa, Maroc",
    items: [
      {
        question: "Comment réserver {title} ?",
        answer:
          "Écrivez-nous sur WhatsApp ({phone}) avec votre hôtel, dates et nombre de personnes. Nous confirmons l'heure de prise en charge et le prix avant tout paiement.",
      },
      {
        question: "La prise en charge à l'hôtel est-elle incluse ?",
        answer:
          "Oui — prise en charge et retour gratuits depuis les hôles d'Agadir et Taghazout pour {title}.",
      },
      {
        question: "Quelle est la durée de {title} ?",
        answer: "Prévoyez {duration}. L'heure exacte dépend de votre hôtel et de la saison.",
      },
      {
        question: "Où se trouve Excursions Tours Flat ?",
        answer:
          "Notre bureau est à {address}. Nous organisons des excursions à Agadir, Taghazout et dans le sud du Maroc.",
      },
    ],
  },
  es: {
    title: "Preguntas sobre este tour",
    overviewHeading: "Sobre este tour",
    locationLine: "Salida desde Agadir y Taghazout · Souss-Massa, Marruecos",
    items: [
      {
        question: "¿Cómo reservo {title}?",
        answer:
          "Escríbenos por WhatsApp ({phone}) con tu hotel, fechas y número de personas. Confirmamos hora de recogida y precio antes de pagar.",
      },
      {
        question: "¿Incluye recogida en el hotel?",
        answer:
          "Sí — recogida y regreso gratuitos desde hoteles en Agadir y Taghazout para {title}.",
      },
      {
        question: "¿Cuánto dura {title}?",
        answer: "Calcula {duration}. La hora exacta depende de tu hotel y la temporada.",
      },
      {
        question: "¿Dónde está Excursions Tours Flat?",
        answer:
          "Nuestra oficina está en {address}. Organizamos tours en Agadir, Taghazout y el sur de Marruecos.",
      },
    ],
  },
  ar: {
    title: "أسئلة حول هذه الرحلة",
    overviewHeading: "عن هذه الرحلة",
    locationLine: "انطلاق من أكادير وتغازوت · سوس ماسة، المغرب",
    items: [
      {
        question: "كيف أحجز {title}؟",
        answer:
          "راسلنا على واتساب ({phone}) مع اسم الفندق والتواريخ وعدد الأشخاص. نؤكد وقت الاستلام والسعر قبل أي دفع.",
      },
      {
        question: "هل يشمل الاستلام من الفندق؟",
        answer: "نعم — استلام وإعادة مجانية من فنادق أكادير وتغازوت لـ {title}.",
      },
      {
        question: "كم تستغرق {title}؟",
        answer: "خصص {duration}. يعتمد وقت الاستلام على فندقك والموسم.",
      },
      {
        question: "أين يقع Excursions Tours Flat؟",
        answer: "مكتبنا في {address}. ننظم جولات في أكادير وتغازوت وجنوب المغرب.",
      },
    ],
  },
  pl: {
    title: "Pytania o tę wycieczkę",
    overviewHeading: "O tej wycieczce",
    locationLine: "Wyjazd z Agadir i Taghazout · Souss-Massa, Maroko",
    items: [
      {
        question: "Jak zarezerwować {title}?",
        answer:
          "Napisz do nas na WhatsApp ({phone}) z hotelem, datami i liczbą osób. Potwierdzamy godzinę odbioru i cenę przed płatnością.",
      },
      {
        question: "Czy odbiór z hotelu jest wliczony?",
        answer:
          "Tak — bezpłatny odbiór i powrót z hoteli w Agadir i Taghazout na {title}.",
      },
      {
        question: "Ile trwa {title}?",
        answer: "Zarezerwuj {duration}. Dokładna godzina zależy od hotelu i sezonu.",
      },
      {
        question: "Gdzie znajduje się Excursions Tours Flat?",
        answer:
          "Nasze biuro: {address}. Organizujemy wycieczki w Agadir, Taghazout i południowym Maroku.",
      },
    ],
  },
  de: {
    title: "Fragen zu dieser Tour",
    overviewHeading: "Über diese Tour",
    locationLine: "Abfahrt von Agadir & Taghazout · Souss-Massa, Marokko",
    items: [
      {
        question: "Wie buche ich {title}?",
        answer:
          "Schreiben Sie uns auf WhatsApp ({phone}) mit Hotel, Datum und Gruppengröße. Wir bestätigen Abholzeit und Preis vor der Zahlung.",
      },
      {
        question: "Ist Hotelabholung inbegriffen?",
        answer:
          "Ja — kostenlose Abholung und Rückfahrt von Hotels in Agadir und Taghazout für {title}.",
      },
      {
        question: "Wie lange dauert {title}?",
        answer: "Planen Sie {duration}. Die genaue Abholzeit hängt von Ihrem Hotel und der Saison ab.",
      },
      {
        question: "Wo befindet sich Excursions Tours Flat?",
        answer:
          "Unser Büro: {address}. Wir organisieren Touren in Agadir, Taghazout und Südmarokko.",
      },
    ],
  },
};

const OFFICE_ADDRESS: Record<Locale, string> = {
  en: "Sonaba, Agadir 80000, Morocco",
  fr: "Sonaba, Agadir 80000, Maroc",
  es: "Sonaba, Agadir 80000, Marruecos",
  de: "Sonaba, Agadir 80000, Marokko",
  pl: "Sonaba, Agadir 80000, Maroko",
  ar: "سونابا، أكادير 80000، المغرب",
};

export function resolveTourAeo(
  locale: Locale,
  tour: { title: string; duration: string }
): TourAeoContent {
  const template = TOUR_AEO[locale];
  const vars: Record<string, string> = {
    "{title}": tour.title,
    "{duration}": tour.duration,
    "{phone}": "+212 6 18 77 88 71",
    "{address}": OFFICE_ADDRESS[locale],
  };

  const replace = (text: string) =>
    Object.entries(vars).reduce((acc, [key, value]) => acc.replaceAll(key, value), text);

  return {
    title: template.title,
    overviewHeading: template.overviewHeading,
    locationLine: template.locationLine,
    items: template.items.map((item) => ({
      question: replace(item.question),
      answer: replace(item.answer),
    })),
  };
}
