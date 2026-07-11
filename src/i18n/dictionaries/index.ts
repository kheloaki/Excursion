import type { Dictionary, DictionaryBase } from "./types";
import type { Locale } from "../config";
import { SERVICES_LOCALE, NAV_EXTRA, FOOTER_EXTRA } from "./services-locale";
import { GMB_LOCALE } from "./gmb-locale";
import { esDictionary } from "./locale-es";
import { deDictionary } from "./locale-de";
import { plDictionary } from "./locale-pl";

const dictionaries: Record<Locale, DictionaryBase> = {
  en: {
    meta: {
      siteName: "Excursions Tours Flat",
      tagline: "Morocco · Tours & Activities",
      seoTitle: "Excursions Tours Flat | Things to Do in Morocco — Tours & Activities",
      seoDescription:
        "Day trips and tours from Agadir — desert, quad, Paradise Valley, Marrakech & Essaouira. Pickup from your hotel. Book on WhatsApp.",
      keywords: [
        "Excursions Tours Flat",
        "things to do Morocco",
        "things to do Agadir",
        "Morocco tours",
        "Morocco excursions",
        "Agadir tours",
        "Taghazout activities",
        "Paradise Valley day trip",
        "Marrakech day trip Agadir",
        "Morocco desert trip",
      ],
    },
    nav: {
      bookNow: "Book Now",
      home: "Home",
      allExcursions: "All Excursions",
      contact: "Contact",
      menu: "Menu",
      thingsAgadir: "Things to do in Agadir",
      thingsTaghazout: "Things to do in Taghazout",
      toursFromAgadir: "Tours from Agadir",
      airportTransfer: "Airport Transfer",
      about: "About",
    },
    hero: {
      eyebrow: "Agadir · Sonaba",
      title: "Tours & day trips",
      titleAccent: "along the coast",
      subtitle: "Desert, sea, and mountain outings with pickup from your hotel. Small groups, local drivers — message us on WhatsApp before you book.",
      explore: "See all tours",
      plan: "Message us",
      statTours: "27+",
      statToursLabel: "Tours & transfers",
      statRating: "Same day",
      statRatingLabel: "WhatsApp reply",
      statPickup: "Free",
      statPickupLabel: "Hotel pickup",
      scroll: "Scroll",
    },
    trust: {
      sectionTitle: "What we offer",
      rated: {
        title: "Google reviews",
        desc: "Happy to share the link",
      },
      pickup: {
        title: "Hotel pickup",
        desc: "Agadir, Taghazout & nearby",
      },
      bundle: {
        title: "A few days in town?",
        desc: "We'll help order the outings",
      },
      instant: {
        title: "No online payment",
        desc: "Confirm on WhatsApp first",
      },
    },
    tours: {
      eyebrow: "Tours",
      title: "What we run from Agadir",
      description: "Most trips start from Agadir or Taghazout. Filter by type or search by name.",
      showing: "Showing",
      experience: "tour",
      experiences: "tours",
      noResults: "Nothing matches that search.",
      clearFilters: "Clear filters",
      viewDetails: "View details",
      searchPlaceholder: "Search tours...",
      filters: {
        all: "All",
        adventure: "Adventure",
        dayTrip: "Day trips",
        coastal: "Coastal",
        transfer: "Transfers",
      },
    },
    why: {
      eyebrow: "Practical stuff",
      title: "Why book with us",
      description: "Small team in Sonaba — we know the roads and the timing, not a faceless booking site.",
      items: [
        {
          title: "We drive these routes",
          description: "Guides and drivers live here. No guesswork on travel times.",
        },
        {
          title: "Pickup included",
          description: "We collect you in Agadir or Taghazout and bring you back after.",
        },
        {
          title: "French & English",
          description: "WhatsApp in either language. Straight answers before you commit.",
        },
        {
          title: "Flexible plans",
          description: "One tour or several — tell us your dates and we fit things around them.",
        }
      ],
    },
    gallery: {
      eyebrow: "On the road",
      title: "Recent trips",
      description:
        "Photos from our outings — desert, quad days, boat trips, and day trips around Agadir.",
      imageAlt: "trip photo",
    },
    cta: {
      eyebrow: "Several days in Agadir?",
      title: "Send us your dates",
      description: "Tell us your hotel and what you'd like to do. We'll suggest an order that saves driving.",
      whatsapp: "Write on WhatsApp",
      contact: "Contact page",
    },
    tour: {
      bookThisTour: "Book this tour",
      quoteNote: "Message us on WhatsApp with your dates and group size. We'll confirm availability and price.",
      requestQuote: "Enquire",
      guestRating: "rating",
      whatsIncluded: "Included",
      whyBook: "Good to know",
      related: "Similar tours",
      photoGallery: "Photos",
      bookWhatsapp: "WhatsApp",
      bookEmail: "Email",
      home: "Home",
      excursions: "Tours",
      inclusions: [
        "Pickup & drop-off at your hotel",
        "Guide (French & English)",
        "Confirmation on WhatsApp",
        "Cancel free up to 24h before"
      ],
    },
    footer: {
      description: "Day trips and activities from Agadir — desert, coast, and Atlas foothills. Office in Sonaba.",
      explore: "Site",
      contact: "Contact",
      rights: "All rights reserved.",
      seoLine: "Tours from Agadir & Taghazout · southern Morocco",
      links: {
        allExcursions: "All Excursions",
        about: "About Us",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
      },
    },
    floating: {
      bookNow: "Book Now",
    },
    pages: {
      about: {
        title: "About us",
        eyebrow: "Who we are",
        description: "A small tour team based in Sonaba, Agadir.",
        sections: [
          {
            title: "Based in Agadir",
            content: "We organise day trips and activities around Agadir, Taghazout, and the Souss region — desert, coast, and the Atlas foothills.",
          },
          {
            title: "What we do",
            content: "Desert outings, quad and buggy days, Paradise Valley, Marrakech and Essaouira trips, boat days, transfers, and the usual Agadir favourites.",
          },
          {
            title: "How booking works",
            content: "Message us on WhatsApp with your dates and hotel. We confirm timing, pickup, and price before you pay anything.",
          }
        ],
        cta: "Get in touch",
      },
      contact: {
        title: "Contact",
        eyebrow: "Reach us",
        description: "WhatsApp is quickest. Send your hotel, dates, and which tours interest you.",
        whatsapp: {
          title: "WhatsApp",
          desc: "Usually reply within a few hours",
        },
        email: {
          title: "Email",
          desc: "For longer itineraries or groups",
        },
        phone: {
          title: "Phone",
          desc: "Call if you're already in Agadir",
        },
        formTitle: "Or send a message",
        formDesc: "We'll get back by email or WhatsApp.",
        name: "Name",
        emailLabel: "Email",
        phoneLabel: "Phone / WhatsApp",
        message: "Message",
        messagePlaceholder: "Hotel name, dates, tours you're interested in...",
        submit: "Send Message",
      },
      privacy: {
        title: "Privacy Policy",
        eyebrow: "Legal",
        sections: [
          {
            title: "Information We Collect",
            body: "Name, email, phone, hotel details when you book tours.",
          },
          {
            title: "How We Use It",
            body: "To process bookings, arrange pickup and improve our services.",
          },
          {
            title: "Your Rights",
            body: "Contact us to access, correct or delete your data.",
          }
        ],
      },
      terms: {
        title: "Terms & Conditions",
        eyebrow: "Legal",
        sections: [
          {
            title: "Bookings & Payment",
            body: "Bookings subject to availability. Quotes provided on request via WhatsApp or email.",
          },
          {
            title: "Cancellation",
            body: "Free cancellation up to 24 hours before your excursion.",
          },
          {
            title: "Pickup & Safety",
            body: "Be ready at hotel lobby. Follow guide instructions.",
          },
          {
            title: "Weather",
            body: "Unsafe weather: reschedule or full refund offered.",
          }
        ],
      },
    },
  },
  fr: {
    meta: {
      siteName: "Excursions Tours Flat",
      tagline: "Agadir · Maroc",
      seoTitle: "Excursions Tours Flat Agadir | Que Faire à Agadir & Taghazout",
      seoDescription: "Réservez des excursions inoubliables à Agadir avec Excursions Tours Flat. Désert, quad, Paradise Valley, Marrakech. Avis 5 étoiles.",
      keywords: [
        "Excursions Tours Flat Agadir",
        "que faire Agadir",
        "excursions Agadir",
        "Taghazout"
      ],
    },
    nav: {
      bookNow: "Réserver",
      home: "Accueil",
      allExcursions: "Toutes les Excursions",
      contact: "Contact",
      menu: "Menu",
      thingsAgadir: "À faire à Agadir",
      thingsTaghazout: "À faire à Taghazout",
      toursFromAgadir: "Excursions depuis Agadir",
      airportTransfer: "Transfert Aéroport",
      about: "À propos",
    },
    hero: {
      eyebrow: "Excursions Tours Flat · Agadir",
      title: "Expériences Marocaines",
      titleAccent: "d'Exception",
      subtitle: "Couchers de soleil dans le désert, vallées cachées et aventures côtières — excursions sélectionnées avec prise en charge hôtel et guides experts à Agadir & Taghazout.",
      explore: "Découvrir les Excursions",
      plan: "Planifier Votre Voyage",
      statTours: "27+",
      statToursLabel: "Excursions",
      statRating: "5.0",
      statRatingLabel: "Note Clients",
      statPickup: "Gratuit",
      statPickupLabel: "Prise en Charge",
      scroll: "Défiler",
    },
    trust: {
      sectionTitle: "Ce que nous proposons",
      rated: {
        title: "5 Étoiles",
        desc: "Approuvé par les voyageurs",
      },
      pickup: {
        title: "Prise en Charge Gratuite",
        desc: "Agadir & Taghazout",
      },
      bundle: {
        title: "Pack 3 Excursions",
        desc: "Économisez en réservant",
      },
      instant: {
        title: "Réservation Rapide",
        desc: "Confirmation WhatsApp",
      },
    },
    tours: {
      eyebrow: "Notre Collection",
      title: "Excursions Sélectionnées",
      description: "Filtrez par type ou recherchez votre expérience idéale. Prise en charge hôtel incluse.",
      showing: "Affichage de",
      experience: "excursion",
      experiences: "excursions",
      noResults: "Aucune excursion trouvée.",
      clearFilters: "Effacer les filtres",
      viewDetails: "Voir Détails",
      searchPlaceholder: "Rechercher...",
      filters: {
        all: "Toutes",
        adventure: "Aventure",
        dayTrip: "Journées",
        coastal: "Côtier",
        transfer: "Transferts",
      },
    },
    why: {
      eyebrow: "Pourquoi Nous",
      title: "La Différence Excursions Tours Flat",
      description: "Le luxe, c'est la simplicité de chaque détail.",
      items: [
        {
          title: "Sélection Rigoureuse",
          description: "Chaque excursion est choisie pour sa qualité et authenticité.",
        },
        {
          title: "Logistique Fluide",
          description: "Prise en charge et retour hôtel gérés pour vous.",
        },
        {
          title: "Expertise Locale",
          description: "Guides nés dans la région Souss-Massa.",
        },
        {
          title: "Réservation Flexible",
          description: "WhatsApp, dates modifiables, packs avantageux.",
        }
      ],
    },
    gallery: {
      eyebrow: "Moments Authentiques",
      title: "Nos Excursions en Images",
      description:
        "Photos réelles de nos excursions dans le désert, à dos de chameau, en quad, en bateau et plus encore à Agadir.",
      imageAlt: "photo d'excursion",
    },
    cta: {
      eyebrow: "Offre Exclusive",
      title: "3 Excursions, Plus d'Économies",
      description: "Créez votre pack personnalisé pour votre séjour à Agadir.",
      whatsapp: "Pack sur WhatsApp",
      contact: "Contactez-nous",
    },
    tour: {
      bookThisTour: "Réserver Cette Excursion",
      quoteNote: "Contactez-nous sur WhatsApp pour la disponibilité et un devis personnalisé.",
      requestQuote: "Devis",
      guestRating: "note clients",
      whatsIncluded: "Inclus",
      whyBook: "Pourquoi réserver avec Excursions Tours Flat Agadir?",
      related: "Vous Aimerez Aussi",
      photoGallery: "Galerie Photos",
      bookWhatsapp: "Réserver sur WhatsApp",
      bookEmail: "Réserver par Email",
      home: "Accueil",
      excursions: "Excursions",
      inclusions: [
        "Prise en charge hôtel gratuite",
        "Guide francophone/anglophone",
        "Confirmation WhatsApp",
        "Annulation flexible (24h)"
      ],
    },
    footer: {
      description: "Excursions sélectionnées à Agadir et Taghazout avec service 5 étoiles.",
      explore: "Explorer",
      contact: "Contact",
      rights: "Tous droits réservés.",
      seoLine: "Excursions Tours Flat Agadir — Que faire à Agadir & Taghazout",
      links: {
        allExcursions: "Toutes les Excursions",
        about: "À Propos",
        contact: "Contact",
        privacy: "Confidentialité",
        terms: "Conditions",
      },
    },
    floating: {
      bookNow: "Réserver",
    },
    pages: {
      about: {
        title: "À Propos",
        eyebrow: "Notre Histoire",
        description: "Premier opérateur d'excursions à Agadir.",
        sections: [
          {
            title: "Qui Sommes-Nous",
            content: "Entreprise locale à Agadir spécialisée en excursions désert et journées.",
          },
          {
            title: "Nos Offres",
            content: "27+ expériences avec prise en charge hôtel gratuite.",
          },
          {
            title: "Notre Promesse",
            content: "Service 5 étoiles, guides experts locaux et prise en charge hôtel dans toute la région Souss-Massa.",
          }
        ],
        cta: "Planifier Votre Voyage",
      },
      contact: {
        title: "Planifier Votre Excursion",
        eyebrow: "Contactez-nous",
        description: "Réponse rapide sur WhatsApp.",
        whatsapp: {
          title: "WhatsApp",
          desc: "Réponse en quelques minutes",
        },
        email: {
          title: "Email",
          desc: "Itinéraires détaillés",
        },
        phone: {
          title: "Téléphone",
          desc: "Parlez à notre équipe",
        },
        formTitle: "Envoyer un Message",
        formDesc: "Quelles excursions vous intéressent?",
        name: "Nom",
        emailLabel: "Email",
        phoneLabel: "Téléphone",
        message: "Message",
        messagePlaceholder: "Excursions, dates, nombre de personnes.",
        submit: "Envoyer",
      },
      privacy: {
        title: "Politique de Confidentialité",
        eyebrow: "Légal",
        description:
          "Comment Excursions Tours Flat collecte et utilise vos données lors d'une demande ou réservation à Agadir, Maroc.",
        sections: [
          {
            title: "Données Collectées",
            body: "Nom, email, téléphone lors des réservations.",
          },
          {
            title: "Utilisation",
            body: "Traitement des réservations et organisation des excursions.",
          },
          {
            title: "Vos Droits",
            body: "Contactez-nous pour accéder ou supprimer vos données.",
          }
        ],
      },
      terms: {
        title: "Conditions Générales",
        eyebrow: "Légal",
        description:
          "Conditions de réservation pour excursions et transferts avec Excursions Tours Flat — Agadir, Maroc.",
        sections: [
          {
            title: "Réservations",
            body: "Sous réserve de disponibilité. Prix en GBP.",
          },
          {
            title: "Annulation",
            body: "Gratuite jusqu'à 24h avant.",
          },
          {
            title: "Sécurité",
            body: "Suivez les consignes du guide.",
          },
          {
            title: "Météo",
            body: "Report ou remboursement si conditions dangereuses.",
          }
        ],
      },
    },
  },
  es: esDictionary,
  de: deDictionary,
  pl: plDictionary,
  ar: {
    meta: {
      siteName: "Excursions Tours Flat",
      tagline: "أكادير · المغرب",
      seoTitle: "Excursions Tours Flat أكادير | أشياء للقيام بها في أكادير وتاغازوت",
      seoDescription: "احجز رحلات لا تُنسى في أكادير. صحراء، كواد، وادي الجنة، مراكش. تقييم 5 نجوم.",
      keywords: [
        "Excursions Tours Flat أكادير",
        "أشياء للقيام بها أكادير",
        "رحلات أكادير"
      ],
    },
    nav: {
      bookNow: "احجز الآن",
      home: "الرئيسية",
      allExcursions: "جميع الرحلات",
      contact: "اتصل بنا",
      menu: "القائمة",
      thingsAgadir: "أنشطة أكادير",
      thingsTaghazout: "أنشطة تاغازوت",
      toursFromAgadir: "رحلات من أكادير",
      airportTransfer: "نقل المطار",
      about: "من نحن",
    },
    hero: {
      eyebrow: "Excursions Tours Flat · أكادير",
      title: "تجارب مغربية",
      titleAccent: "مختارة",
      subtitle: "غروب الصحراء، الوديان الخفية ومغامرات ساحلية — رحلات منتقاة مع استقبال من الفندق ومرشدين خبراء في أكادير وتاغازوت.",
      explore: "استكشف الرحلات",
      plan: "خطط لرحلتك",
      statTours: "+27",
      statToursLabel: "رحلة منتقاة",
      statRating: "5.0",
      statRatingLabel: "تقييم الضيوف",
      statPickup: "مجاني",
      statPickupLabel: "استقبال الفندق",
      scroll: "تمرير",
    },
    trust: {
      sectionTitle: "ما نقدمه",
      rated: {
        title: "5 نجوم",
        desc: "موثوق من المسافرين",
      },
      pickup: {
        title: "استقبال مجاني",
        desc: "أكادير وتاغازوت",
      },
      bundle: {
        title: "باقة 3 رحلات",
        desc: "وفر عند الحجز",
      },
      instant: {
        title: "حجز فوري",
        desc: "تأكيد واتساب",
      },
    },
    tours: {
      eyebrow: "مجموعتنا",
      title: "رحلات منتقاة",
      description: "صفّ حسب النوع أو ابحث عن تجربتك المثالية. استقبال من الفندق مشمول.",
      showing: "عرض",
      experience: "رحلة",
      experiences: "رحلات",
      noResults: "لا توجد رحلات مطابقة.",
      clearFilters: "مسح الفلاتر",
      viewDetails: "عرض التفاصيل",
      searchPlaceholder: "ابحث عن رحلات...",
      filters: {
        all: "الكل",
        adventure: "مغامرة",
        dayTrip: "رحلات يومية",
        coastal: "ساحلي",
        transfer: "نقل",
      },
    },
    why: {
      eyebrow: "لماذا نحن",
      title: "فرق Excursions Tours Flat",
      description: "الفخامة في سهولة كل تفصيلة.",
      items: [
        {
          title: "انتقاء بعناية",
          description: "كل رحلة مختارة للجودة والأصالة.",
        },
        {
          title: "لوجستيات سلسة",
          description: "نرتب الاستقبال والتوصيل.",
        },
        {
          title: "خبرة محلية",
          description: "مرشدون من منطقة سوس ماسة.",
        },
        {
          title: "حجز مرن",
          description: "واتساب، تغيير المواعيد، باقات توفير.",
        }
      ],
    },
    gallery: {
      eyebrow: "لحظات حقيقية",
      title: "من رحلاتنا",
      description:
        "صور أصلية من رحلات الصحراء، ركوب الجمال، الدراجات الرباعية، الرحلات البحرية والمزيد في أكادير.",
      imageAlt: "صورة رحلة",
    },
    cta: {
      eyebrow: "عرض حصري",
      title: "احجز 3 رحلات ووفر",
      description: "أخبرنا برحلاتك المفضلة لنصمم باقة مخصصة لرحلتك في أكادير.",
      whatsapp: "باقة عبر واتساب",
      contact: "تواصل معنا",
    },
    tour: {
      bookThisTour: "احجز هذه الرحلة",
      quoteNote: "تواصل معنا عبر واتساب للتوفر والحصول على عرض مخصص.",
      requestQuote: "اطلب عرضاً",
      guestRating: "تقييم الضيوف",
      whatsIncluded: "ما يشمله",
      whyBook: "لماذا الحجز مع Excursions Tours Flat أكادير؟",
      related: "قد يعجبك أيضاً",
      photoGallery: "معرض الصور",
      bookWhatsapp: "احجز عبر واتساب",
      bookEmail: "احجز بالبريد",
      home: "الرئيسية",
      excursions: "الرحلات",
      inclusions: [
        "استقبال وتوصيل مجاني",
        "مرشد محترف",
        "تأكيد واتساب فوري",
        "إلغاء مرن (24 ساعة)"
      ],
    },
    footer: {
      description: "رحلات منتقاة في أكادير وتاغازوت مع خدمة 5 نجوم.",
      explore: "استكشف",
      contact: "اتصل",
      rights: "جميع الحقوق محفوظة.",
      seoLine: "Excursions Tours Flat أكادير — أشياء للقيام بها في أكادير",
      links: {
        allExcursions: "جميع الرحلات",
        about: "من نحن",
        contact: "اتصل بنا",
        privacy: "الخصوصية",
        terms: "الشروط",
      },
    },
    floating: {
      bookNow: "احجز الآن",
    },
    pages: {
      about: {
        title: "من نحن",
        eyebrow: "قصتنا",
        description: "أفضل منظم رحلات في أكادير.",
        sections: [
          {
            title: "من نحن",
            content: "شركة محلية متخصصة في رحلات الصحراء والمغامرات.",
          },
          {
            title: "عروضنا",
            content: "+27 تجربة مع استقبال مجاني من الفندق.",
          },
          {
            title: "وعدنا",
            content: "خدمة 5 نجوم وأسعار عادلة.",
          }
        ],
        cta: "ابدأ التخطيط",
      },
      contact: {
        title: "خطط لرحلتك",
        eyebrow: "تواصل معنا",
        description: "نرد بسرعة على واتساب.",
        whatsapp: {
          title: "واتساب",
          desc: "رد خلال دقائق",
        },
        email: {
          title: "البريد",
          desc: "برامج مفصلة",
        },
        phone: {
          title: "الهاتف",
          desc: "تحدث مع فريقنا",
        },
        formTitle: "أرسل رسالة",
        formDesc: "ما الرحلات التي تهمك؟",
        name: "الاسم",
        emailLabel: "البريد",
        phoneLabel: "الهاتف",
        message: "رسالتك",
        messagePlaceholder: "الرحلات، التواريخ، عدد الأشخاص.",
        submit: "إرسال",
      },
      privacy: {
        title: "سياسة الخصوصية",
        eyebrow: "قانوني",
        sections: [
          {
            title: "البيانات المجمعة",
            body: "الاسم والبريد والهاتف عند الحجز.",
          },
          {
            title: "الاستخدام",
            body: "لمعالجة الحجوزات وتنظيم الرحلات.",
          },
          {
            title: "حقوقك",
            body: "تواصل معنا للوصول أو حذف بياناتك.",
          }
        ],
      },
      terms: {
        title: "الشروط والأحكام",
        eyebrow: "قانوني",
        sections: [
          {
            title: "الحجز والدفع",
            body: "حسب التوفر. الأسعار بالجنيه الإسترليني.",
          },
          {
            title: "الإلغاء",
            body: "مجاني حتى 24 ساعة قبل الرحلة.",
          },
          {
            title: "السلامة",
            body: "اتبع تعليمات المرشد.",
          },
          {
            title: "الطقس",
            body: "إعادة جدولة أو استرداد عند الخطر.",
          }
        ],
      },
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  const base = dictionaries[locale];
  return {
    ...base,
    nav: { ...base.nav, ...NAV_EXTRA[locale] },
    services: SERVICES_LOCALE[locale],
    footer: { ...base.footer, ...FOOTER_EXTRA[locale] },
    gmb: GMB_LOCALE[locale],
  };
}

export function getAllDictionaries(): Record<Locale, Dictionary> {
  return {
    en: getDictionary("en"),
    fr: getDictionary("fr"),
    es: getDictionary("es"),
    ar: getDictionary("ar"),
    pl: getDictionary("pl"),
    de: getDictionary("de"),
  };
}