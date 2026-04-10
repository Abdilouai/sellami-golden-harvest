import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "products": "عسلنا",
        "promos": "عروضنا",
        "about": "من نحن",
        "contact": "اتصل بنا",
        "cart": "سلة المشتريات",
        "menu": "القائمة"
      },
      "home": {
        "title1": "عسل تونسي حر",
        "subtitle": "اكتشف ثراء العسل التونسي، اللي جمعتو عائلة السلامي بشغف كبير لأجيال.",
        "btn_discover": "اكتشف عسلنا",
        "btn_call": "اتصل توة",
        "trust1": "طبيعي 100%",
        "trust2": "توصيل للدار",
        "trust3": "الدفع عند الاستلام",
        "trust4": "جودة مضمونة",
        "trust5": "تغليف هدايا متوفر",
        "cat_title": "أصنافنا",
        "best_title": "الأكثر مبيعاً",
        "view_all": "عرض الكل",
        "why_title": "علاش عسل السلامي؟",
        "why1_title": "نقي وطبيعي",
        "why1_desc": "عسل حر 100%، بلاش إضافات أو سكر. من خلايانا لطاولتك مباشرة.",
        "why2_title": "منتوج تونسي",
        "why2_desc": "مجني من مناطق طبيعية في تونس — القصرين، زغوان، باجة، وسليانة.",
        "why3_title": "توصيل سريع",
        "why3_desc": "توصيل إلى باب الدار في كامل تراب الجمهورية. الدفع عند الاستلام لراحتك.",
        "promo_text": "🎁 مع كل طلبية بـ 2 كغ : دبوزة بروبوليس (العكبر) مجاناً !",
        "promo_btn": "اطلب توة",
        "testim_title": "شنوة قالو حرفائنا"
      },
      "products": {
        "dt": "د.ت",
        "add_to_cart": "أضف للسلة",
        "out_of_stock": "نفذت الكمية",
        "kg": "كغ",
        "g": "غ"
      },
      "cart": {
        "title": "سلة المشتريات",
        "empty": "سلتك فارغة",
        "total": "المجموع",
        "checkout": "تأكيد الطلبية",
        "continue": "مواصلة التسوق",
        "promo_code": "كود الخصم",
        "apply": "تفعيل",
        "subtotal": "المجموع الفرعي",
        "discount": "تخفيض",
        "whatsapp_order": "الطلب عبر واتساب",
        "delivery_payment": "أطلب — الدفع عند الاستلام",
        "free": "مجاني"
      },
      "footer": {
        "desc": "عسل تونسي طبيعي وحرفي. 100% طبيعي بدون إضافات",
        "nav": "روابط سريعة",
        "contact": "اتصل بنا",
        "delivery": "التوصيل والدفع",
        "trust1": "توصيل إلى باب الدار في كامل تونس",
        "trust2": "الدفع عند الاستلام",
        "trust3": "تحويل بنكي متوفر",
        "trust4": "تغليف هدايا متوفر",
        "copyright": "© 2024 عسل السلامي — تربية النحل التونسية 100% محلية. جميع الحقوق محفوظة."
      },
      "common": {
        "loading": "جاري التحميل...",
        "error": "حدث خطأ ما."
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "products": "Nos Miels",
        "promos": "Promotions",
        "about": "À Propos",
        "contact": "Contact",
        "cart": "Panier",
        "menu": "Menu"
      },
      "home": {
        "title1": "Miel Pur de Tunisie",
        "subtitle": "Découvrez la richesse du miel tunisien, récolté avec passion par la famille Sellami depuis des générations.",
        "btn_discover": "Découvrir nos miels",
        "btn_call": "Appeler maintenant",
        "trust1": "100% Naturel",
        "trust2": "Livraison à domicile",
        "trust3": "Paiement à la livraison",
        "trust4": "Qualité garantie",
        "trust5": "Emballage cadeau disponible",
        "cat_title": "Nos Catégories",
        "best_title": "Nos Best Sellers",
        "view_all": "Voir tout",
        "why_title": "Pourquoi Sellami Honey?",
        "why1_title": "Pure & Naturel",
        "why1_desc": "100% miel pur, sans additifs ni sucre ajouté. Directement de nos ruches à votre table.",
        "why2_title": "Apiculture Locale",
        "why2_desc": "Récolté dans les régions naturelles de Tunisie — Kasserine, Zaghouan, Béja, Siliana.",
        "why3_title": "Livraison Rapide",
        "why3_desc": "Livraison à domicile sur toute la Tunisie. Paiement à la livraison pour votre confort.",
        "promo_text": "🎁 Pour toute commande de 2 kg : 1 pot de propolis OFFERT !",
        "promo_btn": "En profiter",
        "testim_title": "Ce que disent nos clients"
      },
      "products": {
        "dt": "DT",
        "add_to_cart": "Ajouter au panier",
        "out_of_stock": "Rupture de stock",
        "kg": "kg",
        "g": "g"
      },
      "cart": {
        "title": "Panier",
        "empty": "Votre panier est vide",
        "total": "Total",
        "checkout": "Commander",
        "continue": "Continuer vos achats",
        "promo_code": "Code promo",
        "apply": "Appliquer",
        "subtotal": "Sous-total",
        "discount": "Réduction",
        "whatsapp_order": "Commander par WhatsApp",
        "delivery_payment": "Commander — Paiement à la livraison",
        "free": "OFFERT"
      },
      "footer": {
        "desc": "Miel pur et artisanal de Tunisie. 100% naturel, sans additifs, sans sucre ajouté.",
        "nav": "Navigation",
        "contact": "Contact",
        "delivery": "Livraison & Paiement",
        "trust1": "Livraison à domicile sur toute la Tunisie",
        "trust2": "Paiement à la livraison",
        "trust3": "Virement bancaire disponible",
        "trust4": "Emballage cadeau disponible",
        "copyright": "© 2024 Sellami Honey — Apiculture Tunisienne 100% Locale. Tous droits réservés."
      },
      "common": {
        "loading": "Chargement...",
        "error": "Une erreur est survenue."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
