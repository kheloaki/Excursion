import type { Locale } from "../config";
import type { ServiceCategoryId } from "@/data/site";

type ServiceLabels = Record<ServiceCategoryId, { title: string; description: string }>;

export const SERVICES_LOCALE: Record<
  Locale,
  { eyebrow: string; title: string; description: string; categories: ServiceLabels }
> = {
  en: {
    eyebrow: "Our Services",
    title: "Morocco Tours & Excursions",
    description: "Book day trips and activities from Agadir — desert, coast, and Atlas foothills. Office in Sonaba.",
    categories: {
      desert: { title: "Desert & Dunes", description: "Sand dunes, Berber villages, sunset desert trips from Agadir." },
      "quad-buggy": { title: "Quad & Buggy", description: "Beach and dune quad biking, CFMOTO buggy tours in Morocco." },
      "day-trips": { title: "Day Trips", description: "Marrakech, Essaouira, Paradise Valley and Taroudant from Agadir." },
      coastal: { title: "Boat & Coastal", description: "Atlantic boat trips, fishing, and coastal excursions in Agadir." },
      nature: { title: "Nature & Wildlife", description: "Souss-Massa National Park, flamingos, and argan forest tours." },
      culture: { title: "Culture & Food", description: "Moroccan cooking classes, dinner shows, and medina visits." },
      transfers: { title: "Airport Transfers", description: "Agadir airport to hotel transfers with professional drivers." },
    },
  },
  fr: {
    eyebrow: "Nos Services",
    title: "Tours & Excursions au Maroc",
    description: "Réservez des expériences au Maroc — aventures désert à Agadir et excursions vers les villes impériales.",
    categories: {
      desert: { title: "Désert & Dunes", description: "Dunes, villages berbères et couchers de soleil depuis Agadir." },
      "quad-buggy": { title: "Quad & Buggy", description: "Quad plage et dunes, buggy CFMOTO au Maroc." },
      "day-trips": { title: "Excursions Journée", description: "Marrakech, Essaouira, Paradise Valley et Taroudant." },
      coastal: { title: "Bateau & Côte", description: "Sorties en bateau sur l'Atlantique à Agadir." },
      nature: { title: "Nature & Faune", description: "Parc Souss-Massa, flamants roses et forêt d'argan." },
      culture: { title: "Culture & Cuisine", description: "Cours de cuisine, dîners spectacles et médina." },
      transfers: { title: "Transferts Aéroport", description: "Transfert aéroport Agadir vers hôtel." },
    },
  },
  es: {
    eyebrow: "Nuestros Servicios",
    title: "Tours y Excursiones en Marruecos",
    description: "Experiencias en Marruecos — aventuras en el desierto y excursiones de un día.",
    categories: {
      desert: { title: "Desierto y Dunas", description: "Dunas, aldeas bereberes y atardeceres desde Agadir." },
      "quad-buggy": { title: "Quad y Buggy", description: "Quad en playa y dunas, buggy en Marruecos." },
      "day-trips": { title: "Excursiones de Día", description: "Marrakech, Essaouira, Paradise Valley y Taroudant." },
      coastal: { title: "Barco y Costa", description: "Paseos en barco por el Atlántico en Agadir." },
      nature: { title: "Naturaleza", description: "Parque Souss-Massa, flamencos y bosque de argán." },
      culture: { title: "Cultura y Gastronomía", description: "Clases de cocina, cenas marroquíes y medina." },
      transfers: { title: "Traslados Aeropuerto", description: "Traslado aeropuerto Agadir al hotel." },
    },
  },
  de: {
    eyebrow: "Unsere Services",
    title: "Marokko Touren & Ausflüge",
    description: "Kuratierte Erlebnisse in Marokko — Wüstenabenteuer und Tagesausflüge.",
    categories: {
      desert: { title: "Wüste & Dünen", description: "Sanddünen, Berberdörfer und Sonnenuntergänge ab Agadir." },
      "quad-buggy": { title: "Quad & Buggy", description: "Strand- und Dünen-Quad, Buggy-Touren in Marokko." },
      "day-trips": { title: "Tagesausflüge", description: "Marrakesch, Essaouira, Paradisetal und Taroudant." },
      coastal: { title: "Boot & Küste", description: "Bootstouren an der Atlantikküste in Agadir." },
      nature: { title: "Natur & Wildtiere", description: "Souss-Massa Park, Flamingos und Arganwald." },
      culture: { title: "Kultur & Essen", description: "Kochkurse, marokkanische Shows und Medina." },
      transfers: { title: "Flughafentransfer", description: "Transfer vom Flughafen Agadir zum Hotel." },
    },
  },
  pl: {
    eyebrow: "Nasze Usługi",
    title: "Wycieczki po Maroku",
    description: "Kuratorowane doświadczenia w Maroku — pustynia i jednodniowe wycieczki.",
    categories: {
      desert: { title: "Pustynia i Wydmy", description: "Wydmy, wioski Berberów i zachody słońca z Agadir." },
      "quad-buggy": { title: "Quad i Buggy", description: "Quad na plaży i wydmach, buggy w Maroku." },
      "day-trips": { title: "Wycieczki Jednodniowe", description: "Marrakesz, Essaouira, Dolina Paradisu i Taroudant." },
      coastal: { title: "Łodzie i Wybrzeże", description: "Rejsy po Atlantyku w Agadirze." },
      nature: { title: "Natura", description: "Park Souss-Massa, flamingi i las arganowy." },
      culture: { title: "Kultura i Kuchnia", description: "Kursy gotowania, pokazy i medyna." },
      transfers: { title: "Transfer Lotniskowy", description: "Transfer z lotniska Agadir do hotelu." },
    },
  },
  ar: {
    eyebrow: "خدماتنا",
    title: "جولات ورحلات المغرب",
    description: "تجارب منسقة في المغرب — مغامرات الصحراء ورحلات اليوم الواحد.",
    categories: {
      desert: { title: "الصحراء والكثبان", description: "كثبان رملية وقرى أمازيغية وغروب الشمس من أكادير." },
      "quad-buggy": { title: "دراجات رباعية وباغي", description: "كواد على الشاطئ والكثبان في المغرب." },
      "day-trips": { title: "رحلات يومية", description: "مراكش والصويرة ووادي الجنة وتارودانت." },
      coastal: { title: "قوارب وساحل", description: "رحلات بحرية على المحيط الأطلسي في أكادير." },
      nature: { title: "طبيعة وحياة برية", description: "منتزه سوس ماسة والنحام وغابة الأركان." },
      culture: { title: "ثقافة ومطبخ", description: "دروس طبخ وعروض مغربية والمدينة القديمة." },
      transfers: { title: "نقل المطار", description: "نقل من مطار أكادير إلى الفندق." },
    },
  },
};

export const NAV_EXTRA: Record<Locale, { services: string; destinations: string; moroccoWide: string }> = {
  en: { services: "Services", destinations: "Destinations", moroccoWide: "Agadir · southern Morocco" },
  fr: { services: "Services", destinations: "Destinations", moroccoWide: "Tours à Travers le Maroc" },
  es: { services: "Servicios", destinations: "Destinos", moroccoWide: "Tours en Marruecos" },
  de: { services: "Services", destinations: "Reiseziele", moroccoWide: "Touren in Marokko" },
  pl: { services: "Usługi", destinations: "Destynacje", moroccoWide: "Wycieczki po Maroku" },
  ar: { services: "الخدمات", destinations: "الوجهات", moroccoWide: "جولات في جميع أنحاء المغرب" },
};

export const FOOTER_EXTRA: Record<
  Locale,
  {
    keywordsTitle: string;
    moroccoTitle: string;
    findUs: string;
    popularTours: string;
    seoParagraph: string;
    builtBy: string;
  }
> = {
  en: {
    keywordsTitle: "Popular Tours & Keywords",
    moroccoTitle: "Morocco Destinations",
    findUs: "Find us",
    popularTours: "Often booked",
    seoParagraph:
      "We organise outings from Agadir and Taghazout — desert dunes, Paradise Valley, Marrakech and Essaouira day trips, quad and buggy rides, boat trips, and airport transfers. Based in Sonaba; message us on WhatsApp with your dates and hotel.",
    builtBy: "Website built by",
  },
  fr: {
    keywordsTitle: "Tours Populaires & Mots-clés",
    moroccoTitle: "Destinations Maroc",
    findUs: "Nous trouver",
    popularTours: "Souvent réservé",
    seoParagraph:
      "Excursions depuis Agadir et Taghazout — désert, Paradise Valley, Marrakech, Essaouira, quad, bateau et transferts aéroport. Bureau à Sonaba ; contactez-nous sur WhatsApp.",
    builtBy: "Site web réalisé par",
  },
  es: {
    keywordsTitle: "Tours Populares y Palabras Clave",
    moroccoTitle: "Destinos en Marruecos",
    findUs: "Ubicación",
    popularTours: "Reservas frecuentes",
    seoParagraph:
      "Salidas desde Agadir y Taghazout: desierto, Paradise Valley, Marrakech, Essaouira, quad, barco y traslados al aeropuerto. Oficina en Sonaba.",
    builtBy: "Sitio web creado por",
  },
  de: {
    keywordsTitle: "Beliebte Touren & Keywords",
    moroccoTitle: "Marokko Reiseziele",
    findUs: "Standort",
    popularTours: "Oft gebucht",
    seoParagraph:
      "Touren ab Agadir und Taghazout — Wüste, Paradise Valley, Marrakesch, Essaouira, Quad, Boot und Flughafentransfer. Büro in Sonaba.",
    builtBy: "Website erstellt von",
  },
  pl: {
    keywordsTitle: "Popularne Wycieczki i Słowa Kluczowe",
    moroccoTitle: "Destynacje Maroko",
    findUs: "Lokalizacja",
    popularTours: "Często rezerwowane",
    seoParagraph:
      "Wycieczki z Agadir i Taghazout — pustynia, Paradise Valley, Marrakesz, Essaouira, quady, łodzie i transfery lotniskowe. Biuro w Sonaba.",
    builtBy: "Strona stworzona przez",
  },
  ar: {
    keywordsTitle: "جولات شائعة وكلمات مفتاحية",
    moroccoTitle: "وجهات المغرب",
    findUs: "موقعنا",
    popularTours: "الأكثر حجزاً",
    seoParagraph:
      "رحلات من أكادير وتاغازوت — الصحراء، وادي الجنة، مراكش، الصويرة، دراجات رباعية، قوارب ونقل المطار. مكتبنا في سونابا.",
    builtBy: "الموقع من تصميم",
  },
};
