import type { Locale } from "@/i18n/config";
import type { ServiceCategoryId } from "./site";

export interface ServiceCategorySeo {
  title: string;
  description: string;
  heading: string;
  paragraphs: string[];
  highlights: string[];
}

export interface ServicesSeoContent {
  intro: string;
  contentTitle: string;
  relatedToursLabel: string;
  categories: Record<ServiceCategoryId, ServiceCategorySeo>;
}

export const SERVICES_SEO: Record<Locale, ServicesSeoContent> = {
  en: {
    intro:
      "We run day trips and activities from Agadir and Taghazout across the Souss-Massa region — desert dunes south of the city, Atlantic boat days, Atlas foothills, and longer runs to Marrakech or Essaouira. Every outing includes hotel pickup unless noted. Message us on WhatsApp with your dates and we suggest what fits your stay.",
    contentTitle: "Tour services from Agadir, Morocco",
    relatedToursLabel: "Tours in this category",
    categories: {
      desert: {
        title: "Desert & Dunes",
        description: "Sand dunes, Berber villages, and sunset trips south of Agadir.",
        heading: "Desert trips from Agadir",
        paragraphs: [
          "The nearest real dunes to Agadir sit around Timlalin and the Souss-Massa hinterland — about an hour south of the bay. We run half-day and full-day desert outings with 4×4 or minibus, tea in a Berber tent, and time on the sand before sunset.",
          "Popular with families and first-time visitors to Morocco. Pickup from Agadir, Taghazout, and hotels along the coast. Combine with a camel ride or a Paradise Valley stop if you have a full day.",
        ],
        highlights: [
          "Timlalin dunes & small desert landscapes",
          "Berber tea and photo stops",
          "Sunset desert trips available",
          "Hotel pickup in Agadir & Taghazout",
          "Half-day and full-day options",
        ],
      },
      "quad-buggy": {
        title: "Quad & Buggy",
        description: "Beach, dune, and countryside quad and buggy rides near Agadir.",
        heading: "Quad biking & buggy tours in Agadir",
        paragraphs: [
          "Quad and CFMOTO buggy outings run on tracks between the coast and the inland dunes — no licence needed, briefing included. Routes vary by season; summer often mixes beach sections with dune runs, winter stays more inland.",
          "We provide helmets and guide-led groups. Suitable for couples and small groups. Sandboarding can be added on combined desert–quad days.",
        ],
        highlights: [
          "Guided quad & buggy sessions",
          "Beach, dune, and argan forest routes",
          "No driving licence required",
          "Helmets and safety briefing included",
          "Morning and afternoon departures",
        ],
      },
      "day-trips": {
        title: "Day Trips",
        description: "Marrakech, Essaouira, Paradise Valley, and Taroudant from Agadir.",
        heading: "Day trips from Agadir to Marrakech, Essaouira & beyond",
        paragraphs: [
          "Agadir works well as a base for long day trips: Marrakech is roughly 3 hours each way, Essaouira about 2.5 hours, Paradise Valley under 1 hour into the Atlas foothills. We use comfortable minivans with a driver-guide who knows the timing.",
          "These are full days — early pickup, free time in the destination, and return to your hotel in the evening. Paradise Valley and Taroudant are easier half-day or full-day options closer to Agadir.",
        ],
        highlights: [
          "Marrakech medina & Jemaa el-Fnaa day trip",
          "Essaouira old port & ramparts",
          "Paradise Valley swimming & rock pools",
          "Taroudant walled city & souks",
          "Driver-guide, fuel, and pickup included",
        ],
      },
      coastal: {
        title: "Boat & Coastal",
        description: "Atlantic boat trips, fishing, and dolphin watching from Agadir marina.",
        heading: "Boat trips & coastal excursions in Agadir",
        paragraphs: [
          "Agadir sits on a wide Atlantic bay — boat trips leave from the marina for fishing, swimming stops, or simply coast views with lunch on board. Calmer mornings are best; we confirm sea conditions on WhatsApp the day before.",
          "Dolphin-watching trips run when boats are available in season. Good add-on if you want a slower day between desert or quad outings.",
        ],
        highlights: [
          "Marina departures in central Agadir",
          "Fishing & leisure boat options",
          "Dolphin-watching when available",
          "Half-day trips typical",
          "Coastal views of the Souss bay",
        ],
      },
      nature: {
        title: "Nature & Wildlife",
        description: "Souss-Massa National Park, flamingos, goats in argan trees, and Crocoparc.",
        heading: "Nature tours: Souss-Massa Park, flamingos & argan country",
        paragraphs: [
          "South of Agadir, Souss-Massa National Park protects estuary, steppe, and birdlife — including flamingos and bald ibis in season. Shorter trips combine the famous goats-in-trees photo stop with Crocoparc or the park entrance.",
          "Ideal for birdwatchers, families with kids, or anyone who wants a break from sand and sea. Most outings are half-day with light walking.",
        ],
        highlights: [
          "Souss-Massa National Park birdlife",
          "Flamingo lagoons (seasonal)",
          "Goats in argan trees photo stop",
          "Crocoparc reptile park visits",
          "Easy walking, family-friendly pace",
        ],
      },
      culture: {
        title: "Culture & Food",
        description: "Moroccan cooking classes, medina walks, horse rides, and dinner shows.",
        heading: "Culture & food experiences in Agadir",
        paragraphs: [
          "Agadir rebuilt its city after the 1960 earthquake — the old Kasbah hill and souk areas still give a feel for local life. We arrange Moroccan cooking classes (market visit + kitchen), city orientation tours, and evening dinner shows with music.",
          "Horse riding on the beach or inland is available for beginners and experienced riders. These pair well with a free afternoon after a morning desert trip.",
        ],
        highlights: [
          "Hands-on Moroccan cooking classes",
          "Agadir city & kasbah orientation",
          "Beach horse riding sessions",
          "Traditional dinner & music shows",
          "English & French-speaking hosts",
        ],
      },
      transfers: {
        title: "Airport Transfers",
        description: "Agadir Al-Massira airport to hotel — private meet & greet transfers.",
        heading: "Agadir airport transfers & private transport",
        paragraphs: [
          "Al-Massira Airport (AGA) lies about 25 km from Agadir centre and Taghazout. We meet you in arrivals with a name board, help with bags, and drive direct to your hotel — fixed quote on WhatsApp, no meter surprises.",
          "Also available: hotel-to-Crocoparc, one-way runs to Marrakech or Essaouira if you are changing base, and late-night flight pickups when pre-booked.",
        ],
        highlights: [
          "Agadir Al-Massira (AGA) meet & greet",
          "Hotels in Agadir, Taghazout & coast",
          "Private car or minivan by group size",
          "Fixed price confirmed on WhatsApp",
          "Late flight pickups on request",
        ],
      },
    },
  },
  fr: {
    intro:
      "Nous organisons des excursions et activités depuis Agadir et Taghazout dans la région Souss-Massa — dunes au sud, sorties en bateau sur l'Atlantique, contreforts de l'Atlas et journées vers Marrakech ou Essaouira. Prise en charge hôtel incluse sauf mention contraire. Contactez-nous sur WhatsApp avec vos dates.",
    contentTitle: "Services d'excursions depuis Agadir, Maroc",
    relatedToursLabel: "Excursions dans cette catégorie",
    categories: {
      desert: {
        title: "Désert & Dunes",
        description: "Dunes, villages berbères et coucher de soleil au sud d'Agadir.",
        heading: "Excursions désert depuis Agadir",
        paragraphs: [
          "Les plus proches dunes d'Agadir se trouvent vers Timlalin et l'arrière-pays Souss-Massa — environ une heure au sud de la baie. Demi-journée ou journée en 4×4 ou minibus, thé berbère et temps sur le sable avant le coucher du soleil.",
          "Idéal pour les familles et les premiers séjours au Maroc. Prise en charge à Agadir, Taghazout et le littoral. Combinable avec dromadaire ou Paradise Valley sur une journée complète.",
        ],
        highlights: [
          "Dunes de Timlalin & petit désert",
          "Thé berbère et pauses photo",
          "Sorties coucher de soleil",
          "Prise en charge Agadir & Taghazout",
          "Demi-journée ou journée",
        ],
      },
      "quad-buggy": {
        title: "Quad & Buggy",
        description: "Quad et buggy sur plage, dunes et campagne près d'Agadir.",
        heading: "Quad et buggy à Agadir",
        paragraphs: [
          "Sessions quad et buggy CFMOTO entre la côte et les dunes — pas de permis requis, briefing inclus. Itinéraires selon la saison : plage et dunes en été, plus à l'intérieur en hiver.",
          "Casques et guide en tête de groupe. Couples et petits groupes bienvenus. Sandboard possible en combo désert–quad.",
        ],
        highlights: [
          "Quad & buggy guidés",
          "Plage, dunes et forêt d'argan",
          "Sans permis de conduire",
          "Casques et consignes de sécurité",
          "Départs matin ou après-midi",
        ],
      },
      "day-trips": {
        title: "Excursions Journée",
        description: "Marrakech, Essaouira, Paradise Valley et Taroudant depuis Agadir.",
        heading: "Excursions journée : Marrakech, Essaouira et environs",
        paragraphs: [
          "Agadir est une bonne base pour les longues journées : Marrakech ~3 h aller-retour, Essaouira ~2 h 30, Paradise Valley moins d'1 h dans l'Atlas. Minibus confortable avec chauffeur-guide.",
          "Journées complètes — départ tôt, temps libre sur place, retour hôtel le soir. Paradise Valley et Taroudant restent plus proches pour une demi-journée ou une journée.",
        ],
        highlights: [
          "Marrakech médina & Jemaa el-Fnaa",
          "Essaouira port & remparts",
          "Paradise Valley & piscines naturelles",
          "Taroudant & souks",
          "Chauffeur, carburant, prise en charge",
        ],
      },
      coastal: {
        title: "Bateau & Côte",
        description: "Sorties en bateau, pêche et dauphins depuis la marina d'Agadir.",
        heading: "Sorties bateau & côte atlantique à Agadir",
        paragraphs: [
          "Agadir ouvre sur une large baie atlantique — départs marina pour pêche, baignade ou déjeuner à bord. Matinée calme de préférence ; nous confirmons la mer sur WhatsApp la veille.",
          "Observation dauphins selon disponibilité saisonnière. Bon complément entre deux sorties désert ou quad.",
        ],
        highlights: [
          "Départ marina Agadir",
          "Pêche & croisière loisir",
          "Dauphins si disponible",
          "Demi-journée typique",
          "Vue sur la baie du Souss",
        ],
      },
      nature: {
        title: "Nature & Faune",
        description: "Parc Souss-Massa, flamants, chèvres dans l'arganier et Crocoparc.",
        heading: "Nature : parc Souss-Massa, flamants & arganiers",
        paragraphs: [
          "Au sud d'Agadir, le parc national Souss-Massa protège estuaire, steppe et oiseaux — flamants et ibis chauve en saison. Circuits courts combinent chèvres dans les arbres et Crocoparc ou entrée du parc.",
          "Idéal pour les passionnés d'ornithologie, les familles ou une pause loin du sable. Demi-journée en général, marche légère.",
        ],
        highlights: [
          "Parc national Souss-Massa",
          "Flamants (saisonnier)",
          "Chèvres dans l'arganier",
          "Visite Crocoparc",
          "Rythme familial, marche facile",
        ],
      },
      culture: {
        title: "Culture & Cuisine",
        description: "Cours de cuisine, médina, équitation et dîners spectacles.",
        heading: "Culture & gastronomie à Agadir",
        paragraphs: [
          "Agadir a reconstruit sa ville après 1960 — la kasbah et les souks donnent encore le ton local. Cours de cuisine (marché + atelier), visites ville et dîners avec musique.",
          "Équitation plage ou intérieur, débutants acceptés. Se combine bien avec une matinée désert.",
        ],
        highlights: [
          "Cours de cuisine marocaine",
          "Visite ville & kasbah",
          "Équitation plage",
          "Dîner & spectacle traditionnel",
          "Hôtes FR & EN",
        ],
      },
      transfers: {
        title: "Transferts Aéroport",
        description: "Aéroport Al-Massira Agadir vers hôtel — accueil privé.",
        heading: "Transferts aéroport Agadir & transport privé",
        paragraphs: [
          "L'aéroport Al-Massira (AGA) est à ~25 km du centre Agadir et Taghazout. Accueil avec pancarte, aide bagages, trajet direct — prix fixe sur WhatsApp.",
          "Aussi : hôtel–Crocoparc, trajets vers Marrakech ou Essaouira, vols tardifs sur réservation.",
        ],
        highlights: [
          "Accueil AGA Al-Massira",
          "Hôtels Agadir, Taghazout & côte",
          "Voiture ou minibus selon groupe",
          "Prix fixe confirmé WhatsApp",
          "Vol tardif sur demande",
        ],
      },
    },
  },
  es: {
    intro:
      "Organizamos excursiones y actividades desde Agadir y Taghazout en la región Souss-Massa — dunas al sur, barco en el Atlántico, estribaciones del Atlas y viajes a Marrakech o Essaouira. Recogida en hotel incluida salvo indicación. Escríbenos por WhatsApp con tus fechas.",
    contentTitle: "Servicios de tours desde Agadir, Marruecos",
    relatedToursLabel: "Tours en esta categoría",
    categories: {
      desert: {
        title: "Desierto y Dunas",
        description: "Dunas, aldeas bereberes y atardeceres al sur de Agadir.",
        heading: "Excursiones al desierto desde Agadir",
        paragraphs: [
          "Las dunas más cercanas a Agadir están en Timlalin y el interior de Souss-Massa — unos 60 km al sur. Medio día o día completo en 4×4 o minibús, té bereber y tiempo en la arena antes del atardecer.",
          "Muy popular con familias y primer viaje a Marruecos. Recogida en Agadir, Taghazout y costa. Combina con camello o Paradise Valley en día completo.",
        ],
        highlights: [
          "Dunas Timlalin & pequeño desierto",
          "Té bereber y fotos",
          "Salidas al atardecer",
          "Recogida Agadir & Taghazout",
          "Medio día o día completo",
        ],
      },
      "quad-buggy": {
        title: "Quad y Buggy",
        description: "Quad y buggy en playa, dunas y campo cerca de Agadir.",
        heading: "Quad y buggy en Agadir",
        paragraphs: [
          "Rutas quad y buggy CFMOTO entre costa y dunas — sin carnet, briefing incluido. Verano: playa y dunas; invierno más tierra adentro.",
          "Cascos y guía al frente. Parejas y grupos pequeños. Sandboard en combo desierto–quad.",
        ],
        highlights: [
          "Quad & buggy guiados",
          "Playa, dunas y argán",
          "Sin carnet de conducir",
          "Cascos y seguridad",
          "Mañana o tarde",
        ],
      },
      "day-trips": {
        title: "Excursiones de Día",
        description: "Marrakech, Essaouira, Paradise Valley y Taroudant desde Agadir.",
        heading: "Excursiones de un día: Marrakech, Essaouira y más",
        paragraphs: [
          "Agadir es buena base: Marrakech ~3 h por trayecto, Essaouira ~2,5 h, Paradise Valley menos de 1 h al Atlas. Minibús cómodo con conductor-guía.",
          "Días completos — salida temprano, tiempo libre y vuelta al hotel. Paradise Valley y Taroudant más cerca para medio día.",
        ],
        highlights: [
          "Marrakech medina & Jemaa el-Fnaa",
          "Essaouira puerto & murallas",
          "Paradise Valley & pozas",
          "Taroudant & zocos",
          "Conductor, combustible, recogida",
        ],
      },
      coastal: {
        title: "Barco y Costa",
        description: "Barco, pesca y delfines desde la marina de Agadir.",
        heading: "Paseos en barco y costa atlántica en Agadir",
        paragraphs: [
          "Agadir tiene una amplia bahía atlántica — salidas desde la marina para pesca, baño o comida a bordo. Mejor por la mañana; confirmamos mar por WhatsApp.",
          "Avistamiento de delfines según temporada. Buen descanso entre desierto y quad.",
        ],
        highlights: [
          "Marina Agadir",
          "Pesca & ocio",
          "Delfines si hay",
          "Medio día típico",
          "Vista bahía Souss",
        ],
      },
      nature: {
        title: "Naturaleza",
        description: "Parque Souss-Massa, flamencos, cabras en argán y Crocoparc.",
        heading: "Naturaleza: parque Souss-Massa, flamencos y argán",
        paragraphs: [
          "Al sur, el parque Souss-Massa protege estuario, estepa y aves — flamencos e ibis calvo en temporada. Rutas cortas con cabras en árboles y Crocoparc.",
          "Ideal para familias o pausa del sol y arena. Medio día, caminata ligera.",
        ],
        highlights: [
          "Parque Souss-Massa",
          "Flamencos (temporada)",
          "Cabras en argán",
          "Crocoparc",
          "Ritmo familiar",
        ],
      },
      culture: {
        title: "Cultura y Gastronomía",
        description: "Clases de cocina, medina, equitación y cenas espectáculo.",
        heading: "Cultura y gastronomía en Agadir",
        paragraphs: [
          "Agadir se reconstruyó tras 1960 — kasbah y zocos muestran la vida local. Clases de cocina, visitas ciudad y cenas con música.",
          "Equitación playa o interior. Combina con mañana de desierto.",
        ],
        highlights: [
          "Clases cocina marroquí",
          "Ciudad & kasbah",
          "Equitación playa",
          "Cena & espectáculo",
          "Guías ES & EN",
        ],
      },
      transfers: {
        title: "Traslados Aeropuerto",
        description: "Aeropuerto Al-Massira Agadir al hotel — traslado privado.",
        heading: "Traslados aeropuerto Agadir y transporte privado",
        paragraphs: [
          "Al-Massira (AGA) ~25 km del centro y Taghazout. Cartel con nombre, equipaje, traslado directo — precio fijo por WhatsApp.",
          "También hotel–Crocoparc, traslados a Marrakech o Essaouira, vuelos nocturnos bajo reserva.",
        ],
        highlights: [
          "Recogida AGA Al-Massira",
          "Hoteles Agadir & Taghazout",
          "Coche o minibús",
          "Precio fijo WhatsApp",
          "Vuelos tardíos",
        ],
      },
    },
  },
  de: {
    intro:
      "Wir organisieren Tagesausflüge und Aktivitäten ab Agadir und Taghazout in der Region Souss-Massa — Wüste im Süden, Bootstouren am Atlantik, Atlas-Vorland und Tagesfahrten nach Marrakesch oder Essaouira. Hotelabholung inklusive. Schreiben Sie uns auf WhatsApp mit Ihren Daten.",
    contentTitle: "Tour-Services ab Agadir, Marokko",
    relatedToursLabel: "Touren in dieser Kategorie",
    categories: {
      desert: {
        title: "Wüste & Dünen",
        description: "Sanddünen, Berberdörfer und Sonnenuntergänge südlich von Agadir.",
        heading: "Wüstenausflüge ab Agadir",
        paragraphs: [
          "Die nächsten Dünen bei Agadir liegen bei Timlalin im Hinterland Souss-Massa — etwa eine Stunde südlich der Bucht. Halbtages- oder Ganztagesausflüge mit 4×4 oder Minibus, Berbertee und Zeit auf dem Sand vor Sonnenuntergang.",
          "Beliebt bei Familien und Marokko-Neulingen. Abholung in Agadir, Taghazout und an der Küste. Kombinierbar mit Kamelritt oder Paradise Valley.",
        ],
        highlights: [
          "Timlalin-Dünen & Kleine Wüste",
          "Berbertee & Fotostopps",
          "Sonnenuntergangs-Touren",
          "Abholung Agadir & Taghazout",
          "Halbtag oder Ganztag",
        ],
      },
      "quad-buggy": {
        title: "Quad & Buggy",
        description: "Quad- und Buggy-Fahrten an Strand, Dünen und Land bei Agadir.",
        heading: "Quad & Buggy Touren in Agadir",
        paragraphs: [
          "Geführte Quad- und CFMOTO-Buggy-Touren zwischen Küste und Dünen — kein Führerschein nötig, Einweisung inklusive. Routen je nach Saison.",
          "Helme und Guide vorweg. Für Paare und kleine Gruppen. Sandboarding auf Kombi-Touren möglich.",
        ],
        highlights: [
          "Geführte Quad & Buggy",
          "Strand, Dünen, Arganwald",
          "Ohne Führerschein",
          "Helme & Sicherheit",
          "Morgen oder Nachmittag",
        ],
      },
      "day-trips": {
        title: "Tagesausflüge",
        description: "Marrakesch, Essaouira, Paradise Valley und Taroudant ab Agadir.",
        heading: "Tagesausflüge: Marrakesch, Essaouira & mehr",
        paragraphs: [
          "Agadir eignet sich als Basis: Marrakesch ~3 Std. pro Strecke, Essaouira ~2,5 Std., Paradise Valley unter 1 Std. ins Atlas-Vorland. Minibus mit Fahrer-Guide.",
          "Volle Tage — frühe Abfahrt, Freizeit vor Ort, Rückkehr abends. Paradise Valley und Taroudant näher für Halbtagesoptionen.",
        ],
        highlights: [
          "Marrakesch Medina & Jemaa el-Fnaa",
          "Essaouira Hafen & Mauern",
          "Paradise Valley & Naturpools",
          "Taroudant & Souks",
          "Fahrer, Sprit, Abholung",
        ],
      },
      coastal: {
        title: "Boot & Küste",
        description: "Bootstouren, Angeln und Delfine ab Agadir Marina.",
        heading: "Bootstouren & Atlantikküste in Agadir",
        paragraphs: [
          "Agadir liegt an einer weiten Atlantikbucht — Abfahrt Marina für Angeln, Badestopps oder Mittagessen an Bord. Ruhige Morgen bevorzugt; Seegang per WhatsApp am Vortag.",
          "Delfin-Beobachtung saisonal. Gute Pause zwischen Wüste und Quad.",
        ],
        highlights: [
          "Abfahrt Marina Agadir",
          "Angeln & Freizeitboot",
          "Delfine wenn verfügbar",
          "Typisch Halbtag",
          "Blick auf Souss-Bucht",
        ],
      },
      nature: {
        title: "Natur & Wildtiere",
        description: "Souss-Massa Park, Flamingos, Ziegen in Arganbäumen, Crocoparc.",
        heading: "Natur: Souss-Massa Park, Flamingos & Arganland",
        paragraphs: [
          "Südlich von Agadir schützt der Nationalpark Souss-Massa Mündung, Steppe und Vögel — Flamingos und Waldibis in der Saison. Kurze Touren mit Ziegen-in-Bäumen und Crocoparc.",
          "Ideal für Vogelbeobachter und Familien. Meist Halbtag, leichtes Gehen.",
        ],
        highlights: [
          "Nationalpark Souss-Massa",
          "Flamingos (saisonal)",
          "Ziegen in Arganbäumen",
          "Crocoparc Besuch",
          "Familienfreundlich",
        ],
      },
      culture: {
        title: "Kultur & Essen",
        description: "Kochkurse, Medina, Reiten und Abendshows.",
        heading: "Kultur & Kulinarik in Agadir",
        paragraphs: [
          "Agadir wurde nach 1960 neu aufgebaut — Kasbah-Hügel und Souks zeigen lokales Leben. Marokkanische Kochkurse, Stadtführungen und Abendessen mit Musik.",
          "Strandreiten oder inland — Anfänger willkommen. Passt nach einem Wüstenmorgen.",
        ],
        highlights: [
          "Marokkanische Kochkurse",
          "Stadt & Kasbah",
          "Strandreiten",
          "Abendshow & Dinner",
          "DE & EN Guides",
        ],
      },
      transfers: {
        title: "Flughafentransfer",
        description: "Flughafen Al-Massira Agadir zum Hotel — privater Transfer.",
        heading: "Flughafentransfer Agadir & privater Transport",
        paragraphs: [
          "Al-Massira (AGA) ~25 km von Agadir und Taghazout. Abholung mit Namensschild, Gepäckhilfe, Direktfahrt — Festpreis per WhatsApp.",
          "Auch Hotel–Crocoparc, Fahrten nach Marrakesch/Essaouira, Spätflüge auf Anfrage.",
        ],
        highlights: [
          "AGA Al-Massira Abholung",
          "Hotels Agadir & Taghazout",
          "PKW oder Minibus",
          "Festpreis WhatsApp",
          "Spätflüge möglich",
        ],
      },
    },
  },
  pl: {
    intro:
      "Organizujemy wycieczki i aktywności z Agadir i Taghazout w regionie Souss-Massa — pustynia na południe, łodzie na Atlantyku, przedgórze Atlasu i jednodniowe wyjazdy do Marrakeszu lub Essaouiry. Odbiór z hotelu w cenie. Napisz na WhatsApp z datami.",
    contentTitle: "Usługi wycieczkowe z Agadir, Maroko",
    relatedToursLabel: "Wycieczki w tej kategorii",
    categories: {
      desert: {
        title: "Pustynia i Wydmy",
        description: "Wydmy, wioski Berberów i zachody słońca na południe od Agadir.",
        heading: "Wycieczki na pustynię z Agadir",
        paragraphs: [
          "Najbliższe wydmy od Agadir to Timlalin i interior Souss-Massa — ok. godzina na południe od zatoki. Pół dnia lub cały dzień 4×4/minibusem, herbata berberska i czas na piasku przed zachodem.",
          "Popularne wśród rodzin i osób pierwszy raz w Maroku. Odbiór Agadir, Taghazout i wybrzeże. Można połączyć z wielbłądem lub Paradise Valley.",
        ],
        highlights: [
          "Wydmy Timlalin",
          "Herbata berberska i zdjęcia",
          "Wycieczki o zachodzie",
          "Odbiór Agadir & Taghazout",
          "Pół dnia lub cały dzień",
        ],
      },
      "quad-buggy": {
        title: "Quad i Buggy",
        description: "Quady i buggy na plaży, wydmach i w okolicach Agadir.",
        heading: "Quady i buggy w Agadir",
        paragraphs: [
          "Wycieczki quad i buggy CFMOTO między wybrzeżem a wydmami — bez prawa jazdy, instruktaż w cenie. Trasy zależą od sezonu.",
          "Kaski i przewodnik. Pary i małe grupy. Sandboarding w combo z pustynią.",
        ],
        highlights: [
          "Quady i buggy z przewodnikiem",
          "Plaża, wydmy, las arganowy",
          "Bez prawa jazdy",
          "Kaski i bezpieczeństwo",
          "Rano lub popołudnie",
        ],
      },
      "day-trips": {
        title: "Wycieczki Jednodniowe",
        description: "Marrakesz, Essaouira, Paradise Valley i Taroudant z Agadir.",
        heading: "Jednodniowe wycieczki: Marrakesz, Essaouira i okolice",
        paragraphs: [
          "Agadir to dobra baza: Marrakesz ~3 h w jedną stronę, Essaouira ~2,5 h, Paradise Valley poniżej 1 h w Atlas. Minibus z kierowcą-przewodnikiem.",
          "Pełne dni — wczesny wyjazd, czas wolny, powrót wieczorem. Paradise Valley i Taroudant bliżej na pół dnia.",
        ],
        highlights: [
          "Marrakesz medyna & Jemaa el-Fnaa",
          "Essaouira port & mury",
          "Paradise Valley & baseny",
          "Taroudant & souki",
          "Kierowca, paliwo, odbiór",
        ],
      },
      coastal: {
        title: "Łodzie i Wybrzeże",
        description: "Rejsy, wędkowanie i delfiny z mariny Agadir.",
        heading: "Rejsy i wybrzeże Atlantyku w Agadir",
        paragraphs: [
          "Agadir leży na szerokiej zatoką Atlantyku — start z mariny: wędkowanie, kąpiel lub lunch na pokładzie. Spokojniejsze ranki; warunki na morzu potwierdzamy WhatsApp.",
          "Obserwacja delfinów sezonowo. Odpoczynek między pustynią a quadami.",
        ],
        highlights: [
          "Marina Agadir",
          "Wędkowanie i rejs",
          "Delfiny gdy dostępne",
          "Typowo pół dnia",
          "Widok na zatokę Souss",
        ],
      },
      nature: {
        title: "Natura",
        description: "Park Souss-Massa, flamingi, kozy w arganie, Crocoparc.",
        heading: "Natura: park Souss-Massa, flamingi i argan",
        paragraphs: [
          "Na południe od Agadir park Souss-Massa chroni ujście, step i ptaki — flamingi i ibis łysy sezonowo. Krótkie trasy z kozami na drzewach i Crocoparc.",
          "Dla ornitologów i rodzin. Zwykle pół dnia, lekki spacer.",
        ],
        highlights: [
          "Park narodowy Souss-Massa",
          "Flamingi (sezon)",
          "Kozy w drzewach arganowych",
          "Crocoparc",
          "Tempo rodzinne",
        ],
      },
      culture: {
        title: "Kultura i Kuchnia",
        description: "Kursy gotowania, medyna, jazda konna i kolacje z pokazem.",
        heading: "Kultura i kuchnia w Agadir",
        paragraphs: [
          "Agadir odbudowano po 1960 — kasba i souki pokazują lokalne życie. Kursy kuchni marokańskiej, zwiedzanie miasta i kolacje z muzyką.",
          "Jazda konna na plaży lub w interiorze. Dobre po porannym wyjeździe na pustynię.",
        ],
        highlights: [
          "Kursy kuchni marokańskiej",
          "Miasto i kasba",
          "Jazda konna na plaży",
          "Kolacja i pokaz",
          "PL & EN obsługa",
        ],
      },
      transfers: {
        title: "Transfer Lotniskowy",
        description: "Lotnisko Al-Massira Agadir do hotelu — prywatny transfer.",
        heading: "Transfer lotniskowy Agadir i transport prywatny",
        paragraphs: [
          "Al-Massira (AGA) ~25 km od centrum i Taghazout. Tablica z nazwiskiem, pomoc z bagażem, transfer bezpośredni — stała cena na WhatsApp.",
          "Też hotel–Crocoparc, przejazdy do Marrakeszu/Essaouiry, późne loty po wcześniejszej rezerwacji.",
        ],
        highlights: [
          "Odbiór AGA Al-Massira",
          "Hotele Agadir & Taghazout",
          "Samochód lub minibus",
          "Stała cena WhatsApp",
          "Późne loty",
        ],
      },
    },
  },
  ar: {
    intro:
      "ننظم رحلات وأنشطة من أكادير وتغازوت في منطقة سوس ماسة — الصحراء جنوب المدينة، رحلات بحرية على الأطلسي، سفوح الأطلس، ورحلات يومية إلى مراكش أو الصويرة. الاستلام من الفندق مشمول. راسلنا على واتساب مع تواريخك.",
    contentTitle: "خدمات الجولات من أكادير، المغرب",
    relatedToursLabel: "جولات في هذه الفئة",
    categories: {
      desert: {
        title: "الصحراء والكثبان",
        description: "كثبان رملية وقرى أمازيغية وغروب الشمس جنوب أكادير.",
        heading: "رحلات الصحراء من أكادير",
        paragraphs: [
          "أقرب الكثبان إلى أكادير عند Timlalin ومناطق سوس ماسة الداخلية — نحو ساعة جنوب الخليج. نصف يوم أو يوم كامل بسيارة 4×4 أو حافلة صغيرة، شاي أمازيغي ووقت على الرمال قبل الغروب.",
          "مناسبة للعائلات والزوار لأول مرة. استلام من أكادير وتغازوت والساحل. يمكن الجمع مع ركوب الجمال أو وادي الجنة.",
        ],
        highlights: [
          "كثبان Timlalin والصحراء الصغيرة",
          "شاي أمازيغي وتوقفات للصور",
          "رحلات غروب الشمس",
          "استلام أكادير وتغازوت",
          "نصف يوم أو يوم كامل",
        ],
      },
      "quad-buggy": {
        title: "دراجات رباعية وباغي",
        description: "دراجات رباعية وباغي على الشاطئ والكثبان قرب أكادير.",
        heading: "جولات الدراجات الرباعية والباغي في أكادير",
        paragraphs: [
          "جولات CFMOTO بين الساحل والكثبان — لا حاجة لرخصة، إرشادات مشمولة. المسارات تختلف حسب الموسم.",
          "خوذات ومرشد في المقدمة. للأزواج والمجموعات الصغيرة. التزلج على الرمال مع رحلات الصحراء.",
        ],
        highlights: [
          "دراجات رباعية وباغي بمرشد",
          "شاطئ وكثبان وغابة الأركان",
          "بدون رخصة قيادة",
          "خوذات وتعليمات السلامة",
          "صباحاً أو بعد الظهر",
        ],
      },
      "day-trips": {
        title: "رحلات يومية",
        description: "مراكش والصويرة ووادي الجنة وتارودانت من أكادير.",
        heading: "رحلات يومية: مراكش والصويرة وما حولها",
        paragraphs: [
          "أكادير قاعدة جيدة: مراكش ~3 ساعات ذهاباً، الصويرة ~2.5 ساعة، وادي الجنة أقل من ساعة في سفوح الأطلس. حافلة صغيرة مع سائق-مرشد.",
          "أيام كاملة — انطلاق مبكر، وقت حر، عودة مساءً. وادي الجنة وتارودانت أقرب لنصف يوم.",
        ],
        highlights: [
          "مراكش المدينة وجامع الفنا",
          "الصويرة الميناء والأسوار",
          "وادي الجنة والبرك",
          "تارودانت والأسواق",
          "سائق ووقود واستلام",
        ],
      },
      coastal: {
        title: "قوارب وساحل",
        description: "رحلات بحرية وصيد ودلافين من مارينا أكادير.",
        heading: "رحلات القوارب والساحل الأطلسي في أكادير",
        paragraphs: [
          "أكادير على خليج أطلسي واسع — انطلاق من المارينا للصيد أو السباحة أو غداء على متن القارب. الصباح أهدأ؛ نؤكد حالة البحر عبر واتساب.",
          "مراقبة الدلافين حسب الموسم. استراحة جيدة بين الصحراء والدراجات.",
        ],
        highlights: [
          "مارينا أكادير",
          "صيد وترفيه",
          "دلافين عند التوفر",
          "عادة نصف يوم",
          "إطلالة على خليج سوس",
        ],
      },
      nature: {
        title: "طبيعة وحياة برية",
        description: "منتزه سوس ماسة والنحام والماعز في أشجار الأركان وCrocoparc.",
        heading: "الطبيعة: منتزه سوس ماسة والنحام والأركان",
        paragraphs: [
          "جنوب أكادير يحمي منتزه سوس ماسة المياه والسهول والطيور — نحام وأبو منجل أصلع في الموسم. رحلات قصيرة مع الماعز على الأشجار وCrocoparc.",
          "مثالي للعائلات ومراقبي الطيور. غالباً نصف يوم، مشي خفيف.",
        ],
        highlights: [
          "منتزه سوس ماسة الوطني",
          "نحام (موسمي)",
          "ماعز في أشجار الأركان",
          "زيارة Crocoparc",
          "إيقاع عائلي",
        ],
      },
      culture: {
        title: "ثقافة ومطبخ",
        description: "دروس طبخ ومدينة قديمة و ركوب خيل وعشاء مع عروض.",
        heading: "الثقافة والمطبخ في أكادير",
        paragraphs: [
          "أعيد بناء أكادير بعد 1960 — القصبة والأسواق تعكس الحياة المحلية. دروس طبخ مغربي وجولات المدينة وعشاء مع موسيقى.",
          "ركوب خيل على الشاطئ أو الداخل. يناسب بعد صباح في الصحراء.",
        ],
        highlights: [
          "دروس الطبخ المغربي",
          "المدينة والقصبة",
          "ركوب خيل على الشاطء",
          "عشاء وعرض تقليدي",
          "مرشدون عربي وإنجليزي",
        ],
      },
      transfers: {
        title: "نقل المطار",
        description: "مطار المسيرة أكادير إلى الفندق — نقل خاص.",
        heading: "نقل مطار أكادير والمواصلات الخاصة",
        paragraphs: [
          "المسيرة (AGA) ~25 كم من المركز وتغازوت. استقبال بلافتة، مساعدة الأمتعة، نقل مباشر — سعر ثابت على واتساب.",
          "أيضاً فندق–Crocoparc، نقل إلى مراكش أو الصويرة، رحلات متأخرة بحجز مسبق.",
        ],
        highlights: [
          "استقبال AGA المسيرة",
          "فنادق أكادير وتغازوت",
          "سيارة أو حافلة صغيرة",
          "سعر ثابت واتساب",
          "رحلات متأخرة",
        ],
      },
    },
  },
};

export function getServicesSeo(locale: Locale): ServicesSeoContent {
  return SERVICES_SEO[locale];
}

export function getServicePageMeta(locale: Locale, serviceId: ServiceCategoryId) {
  const content = SERVICES_SEO[locale].categories[serviceId];
  const combined = content.paragraphs.join(" ");
  const description = combined.length > 160 ? `${combined.slice(0, 157).trim()}…` : combined;
  return {
    title: content.heading,
    description,
    keywords: [
      content.title,
      content.heading,
      "Agadir",
      "Taghazout",
      "Morocco",
      "Excursions Tours Flat",
      "Souss-Massa",
    ],
  };
}
