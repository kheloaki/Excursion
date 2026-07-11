import type { Locale } from "@/i18n/config";

export interface SeoContentBlock {
  thingsToDo: {
    eyebrow: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
  destinations: {
    eyebrow: string;
    title: string;
    items: { name: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
}

export const SEO_CONTENT: Record<Locale, SeoContentBlock> = {
  en: {
    thingsToDo: {
      eyebrow: "Around Agadir",
      title: "Things to do in Agadir",
      intro:
        "We're a tour team in Sonaba, Agadir. Most of our outings are half- or full-day trips — desert dunes, Paradise Valley, the coast, and longer runs to Marrakech or Essaouira when you have the time.",
      sections: [
        {
          heading: "Desert & adventure",
          body: "Quad and buggy days, sandboarding, camel rides, and shorter desert trips are what people book most. We pick you up at your hotel in Agadir or Taghazout.",
        },
        {
          heading: "Day trips",
          body: "Paradise Valley, Taroudant, Essaouira, and Marrakech are all doable from Agadir in a day. We plan around real driving times so you're not rushed.",
        },
        {
          heading: "Sea & culture",
          body: "Boat trips on the bay, cooking classes, dinner shows, and the argan-tree goats on the road to Essaouira. Ask on WhatsApp — we'll tell you what's running that week.",
        },
      ],
    },
    destinations: {
      eyebrow: "Where we go",
      title: "From Agadir outward",
      items: [
        { name: "Agadir", description: "City tours, quads, camels, boats, Crocoparc, airport runs." },
        { name: "Taghazout", description: "Same trips — pickup from the surf villages north of town." },
        { name: "Paradise Valley", description: "Natural pools in the foothills; busy in summer, worth an early start." },
        { name: "Souss-Massa", description: "Birdlife and lagoons — flamingos if the season's right." },
        { name: "Essaouira", description: "Medina, fish port, and often a stop for the tree goats on the way." },
        { name: "Marrakech & Taroudant", description: "Long days. Leave early, back in the evening." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Common questions",
      items: [
        {
          question: "What's worth doing in Agadir?",
          answer:
            "Depends on your time. A half-day desert trip or quad ride fits most schedules. Paradise Valley needs a full morning. Marrakech is a long day but doable. Message us with your dates — we'll suggest an order.",
        },
        {
          question: "Do you pick up from the hotel?",
          answer:
            "Yes, in Agadir and Taghazout. Send the hotel name when you book. Airport transfers are separate — same WhatsApp number.",
        },
        {
          question: "How do we book?",
          answer:
            "WhatsApp or email with the tour, dates, and number of people. We confirm pickup time and price. No card payment on the website.",
        },
        {
          question: "Which day trips leave from Agadir?",
          answer:
            "Paradise Valley, Essaouira, Marrakech, Taroudant, Souss-Massa, and combined desert-and-valley days. Availability varies by season.",
        },
        {
          question: "Are guides local?",
          answer:
            "Yes. Our drivers and guides work this area regularly. Helmets and basic safety gear on quads and sandboarding.",
        },
      ],
    },
  },
  fr: {
    thingsToDo: {
      eyebrow: "Agadir & Taghazout",
      title: "Que Faire à Agadir, Maroc",
      intro:
        "Excursions Tours Flat est un opérateur local basé à Agadir, Maroc. Nous organisons des excursions, sorties d'une journée et activités dans la région Souss-Massa — du désert et Paradise Valley à Essaouira, Marrakech et le Parc National Souss-Massa.",
      sections: [
        {
          heading: "Aventure & désert",
          body: "Quad, buggy, sandboard, balades à dos de chameau et petites excursions désert sont parmi les activités les plus demandées à Agadir. Prise en charge hôtel incluse depuis Agadir et Taghazout.",
        },
        {
          heading: "Excursions d'une journée",
          body: "Paradise Valley, Taroudant, Essaouira, Marrakech et Souss-Massa — chaque itinéraire est conçu selon les temps de trajet réels depuis Agadir.",
        },
        {
          heading: "Activités côtières & culturelles",
          body: "Sorties en bateau, dîners spectacles marocains, cours de cuisine, médina et chèvres dans les arbres — réservation par WhatsApp avec confirmation rapide.",
        },
      ],
    },
    destinations: {
      eyebrow: "Zones couvertes",
      title: "Excursions dans la région Souss-Massa",
      items: [
        { name: "Agadir", description: "Visites, quad, chameaux, bateau, Crocoparc et transferts aéroport." },
        { name: "Taghazout", description: "Prise en charge pour Paradise Valley, désert et activités côtières." },
        { name: "Paradise Valley", description: "Piscines naturelles et contreforts de l'Atlas." },
        { name: "Parc Souss-Massa", description: "Flamants roses et lagunes protégées au sud d'Agadir." },
        { name: "Essaouira & Legzira", description: "Excursions côtières avec médina et arches rocheuses." },
        { name: "Marrakech & Taroudant", description: "Journées culturelles vers les villes impériales." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions Fréquentes",
      items: [
        {
          question: "Que faire à Agadir ?",
          answer:
            "Quad sur la plage, chameaux, Paradise Valley, bateau, sandboard et Souss-Massa figurent parmi les meilleures activités. Excursions Tours Flat propose 27+ expériences avec prise en charge hôtel.",
        },
        {
          question: "Proposez-vous la prise en charge à l'hôtel ?",
          answer: "Oui, depuis Agadir, Taghazout et environs. Transferts aéroport disponibles.",
        },
        {
          question: "Comment réserver ?",
          answer: "Contactez-nous par WhatsApp ou email avec la date et le nombre de personnes. Nous confirmons la disponibilité et envoyons un devis personnalisé.",
        },
        {
          question: "Quelles excursions d'une journée depuis Agadir ?",
          answer: "Paradise Valley, Essaouira, Marrakech, Taroudant, Souss-Massa et combinaisons désert-vallée.",
        },
        {
          question: "Vos guides sont-ils locaux ?",
          answer: "Oui, guides expérimentés de la région Souss-Massa. Équipement de sécurité fourni pour les activités d'aventure.",
        },
      ],
    },
  },
  es: {
    thingsToDo: {
      eyebrow: "Agadir y Taghazout",
      title: "Qué Hacer en Agadir, Marruecos",
      intro:
        "Excursions Tours Flat es un operador local en Agadir, Marruecos. Organizamos excursiones, viajes de un día y actividades en la región Souss-Massa.",
      sections: [
        { heading: "Aventura y desierto", body: "Quad, buggy, sandboard, camellos y excursiones al desierto con recogida en hotel." },
        { heading: "Excursiones de un día", body: "Paradise Valley, Taroudant, Essaouira, Marrakech y Parque Souss-Massa desde Agadir." },
        { heading: "Costa y cultura", body: "Paseos en barco, cenas marroquíes, clases de cocina y cabras en los árboles." },
      ],
    },
    destinations: {
      eyebrow: "Destinos",
      title: "Excursiones en Souss-Massa",
      items: [
        { name: "Agadir", description: "Tours urbanos, quad, camellos y barco." },
        { name: "Taghazout", description: "Recogida para Paradise Valley y desierto." },
        { name: "Paradise Valley", description: "Pozas naturales en el Atlas." },
        { name: "Souss-Massa", description: "Flamencos y lagunas protegidas." },
        { name: "Essaouira", description: "Día costero con medina." },
        { name: "Marrakech", description: "Excursión imperial de un día." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas Frecuentes",
      items: [
        { question: "¿Qué hacer en Agadir?", answer: "Quad, camellos, Paradise Valley, barco y Souss-Massa. Más de 27 experiencias con recogida en hotel." },
        { question: "¿Incluyen recogida en hotel?", answer: "Sí, en Agadir y Taghazout. También traslados al aeropuerto." },
        { question: "¿Cómo reservar?", answer: "WhatsApp o email con fecha y huéspedes. Confirmamos disponibilidad y enviamos presupuesto." },
        { question: "¿Excursiones de un día?", answer: "Paradise Valley, Essaouira, Marrakech, Taroudant y Souss-Massa." },
        { question: "¿Guías locales?", answer: "Sí, guías experimentados de la región con equipo de seguridad en aventuras." },
      ],
    },
  },
  de: {
    thingsToDo: {
      eyebrow: "Agadir & Taghazout",
      title: "Aktivitäten in Agadir, Marokko",
      intro: "Excursions Tours Flat ist ein lokaler Reiseveranstalter in Agadir mit Ausflügen in der Region Souss-Massa.",
      sections: [
        { heading: "Abenteuer & Wüste", body: "Quad, Buggy, Sandboarding, Kamelreiten und Wüstenausflüge mit Hotelabholung." },
        { heading: "Tagesausflüge", body: "Paradise Valley, Taroudant, Essaouira, Marrakesch und Souss-Massa Nationalpark." },
        { heading: "Küste & Kultur", body: "Bootstouren, marokkanische Shows, Kochkurse und Ziegen auf Arganbäumen." },
      ],
    },
    destinations: {
      eyebrow: "Regionen",
      title: "Ausflüge in Souss-Massa",
      items: [
        { name: "Agadir", description: "Stadttouren, Quad, Kamele, Boot." },
        { name: "Taghazout", description: "Abholung für Paradise Valley und Wüste." },
        { name: "Paradise Valley", description: "Natürliche Pools im Atlas." },
        { name: "Souss-Massa", description: "Flamingos und geschützte Lagunen." },
        { name: "Essaouira", description: "Küstentagesausflug." },
        { name: "Marrakesch", description: "Tagesausflug zur Kaiserstadt." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen",
      items: [
        { question: "Was tun in Agadir?", answer: "Quad, Kamele, Paradise Valley, Boot und Souss-Massa. Über 27 Erlebnisse mit Hotelabholung." },
        { question: "Hotelabholung?", answer: "Ja, in Agadir und Taghazout. Flughafentransfers verfügbar." },
        { question: "Wie buchen?", answer: "Per WhatsApp oder E-Mail. Wir bestätigen Verfügbarkeit und senden ein Angebot." },
        { question: "Tagesausflüge?", answer: "Paradise Valley, Essaouira, Marrakesch, Taroudant und Souss-Massa." },
        { question: "Lokale Guides?", answer: "Ja, erfahrene Guides aus der Region Souss-Massa." },
      ],
    },
  },
  pl: {
    thingsToDo: {
      eyebrow: "Agadir i Taghazout",
      title: "Atrakcje Agadir, Maroko",
      intro: "Excursions Tours Flat to lokalny organizator wycieczek w Agadirze z ofertą w regionie Souss-Massa.",
      sections: [
        { heading: "Przygoda i pustynia", body: "Quady, buggy, sandboarding, wielbłądy i wycieczki na pustynię z odbiorem z hotelu." },
        { heading: "Wycieczki jednodniowe", body: "Paradise Valley, Taroudant, Essaouira, Marrakesz i park Souss-Massa." },
        { heading: "Wybrzeże i kultura", body: "Rejsy, marokańskie show, kursy gotowania i kozy na drzewach." },
      ],
    },
    destinations: {
      eyebrow: "Regiony",
      title: "Wycieczki w Souss-Massa",
      items: [
        { name: "Agadir", description: "Zwiedzanie, quady, wielbłądy, łodzie." },
        { name: "Taghazout", description: "Odbiór na Paradise Valley i pustynię." },
        { name: "Paradise Valley", description: "Naturalne baseny w Atlasie." },
        { name: "Souss-Massa", description: "Flamingi i chronione laguny." },
        { name: "Essaouira", description: "Wycieczka nad ocean." },
        { name: "Marrakesz", description: "Jednodniowa wycieczka." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Często Zadawane Pytania",
      items: [
        { question: "Co robić w Agadirze?", answer: "Quady, wielbłądy, Paradise Valley, łodzie i Souss-Massa. Ponad 27 atrakcji z odbiorem z hotelu." },
        { question: "Odbiór z hotelu?", answer: "Tak, w Agadirze i Taghazout. Transfery lotniskowe dostępne." },
        { question: "Jak rezerwować?", answer: "WhatsApp lub email. Potwierdzamy dostępność i wysyłamy wycenę." },
        { question: "Wycieczki jednodniowe?", answer: "Paradise Valley, Essaouira, Marrakesz, Taroudant i Souss-Massa." },
        { question: "Lokalni przewodnicy?", answer: "Tak, doświadczeni przewodnicy z regionu Souss-Massa." },
      ],
    },
  },
  ar: {
    thingsToDo: {
      eyebrow: "أكادير وتاغازوت",
      title: "أشياء للقيام بها في أكادير، المغرب",
      intro: "Excursions Tours Flat مشغل رحلات محلي في أكادير يقدم رحلات ونشاطات في منطقة سوس ماسة — من الصحراء ووادي الجنة إلى الصويرة ومراكش والمنتزه الوطني.",
      sections: [
        { heading: "مغامرة وصحراء", body: "دراجات رباعية، باغي، تزلج على الرمال، ركوب الجمال ورحلات صحراوية مع استقبال من الفندق." },
        { heading: "رحلات يومية", body: "وادي الجنة، تارودانت، الصويرة، مراكش ومنتزه سوس ماسة من أكادير." },
        { heading: "ساحل وثقافة", body: "رحلات بحرية، عروض مغربية، دروس طبخ وماعز على أشجار الأركان." },
      ],
    },
    destinations: {
      eyebrow: "المناطق",
      title: "رحلات في سوس ماسة",
      items: [
        { name: "أكادير", description: "جولات المدينة، دراجات رباعية، جمال وقوارب." },
        { name: "تاغازوت", description: "استقبال لرحلات وادي الجنة والصحراء." },
        { name: "وادي الجنة", description: "برك طبيعية عند سفح الأطلس." },
        { name: "سوس ماسة", description: "نحام وبحيرات محمية." },
        { name: "الصويرة", description: "رحلة ساحلية يومية." },
        { name: "مراكش", description: "رحلة يومية إلى المدينة الإمبراطورية." },
      ],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "أسئلة متكررة",
      items: [
        { question: "ما أفضل الأنشطة في أكادير؟", answer: "الدراجات الرباعية، الجمال، وادي الجنة، القوارب وسوس ماسة. أكثر من 27 تجربة مع استقبال مجاني من الفندق." },
        { question: "هل يشمل الاستقبال من الفندق؟", answer: "نعم، من أكادير وتاغازوت. كما نوفر نقل المطار." },
        { question: "كيف أحجز؟", answer: "تواصل عبر واتساب أو البريد مع التاريخ وعدد الأشخاص. نؤكد التوفر ونرسل عرضاً مخصصاً." },
        { question: "رحلات يومية من أكادير؟", answer: "وادي الجنة، الصويرة، مراكش، تارودانت وسوس ماسة." },
        { question: "مرشدون محليون؟", answer: "نعم، مرشدون خبراء من منطقة سوس ماسة مع معدات السلامة للمغامرات." },
      ],
    },
  },
};
