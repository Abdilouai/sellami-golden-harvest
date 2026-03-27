export interface ProductVariant {
  weight: string;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  category: string;
  description: string;
  origin: string;
  benefits: string[];
  variants: ProductVariant[];
  image: string;
  badge?: string;
  isBestSeller?: boolean;
  isOnSale?: boolean;
  storage: string;
  harvestDate: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "miel-jujubier",
    name: "Miel de Jujubier (Sidr)",
    nameAr: "عسل السدر",
    category: "Jujubier",
    description: "Miel rare et précieux, récolté dans les forêts de jujubiers de Kasserine. Saveur riche et complexe.",
    origin: "Kasserine, Tunisie",
    benefits: ["Anti-bactérien puissant", "Renforce l'immunité", "Cicatrisation naturelle", "Énergie durable"],
    variants: [
      { weight: "250g", price: 35, originalPrice: 45 },
      { weight: "500g", price: 60, originalPrice: 80 },
      { weight: "1kg", price: 110, originalPrice: 145 },
    ],
    image: "honey-jujubier",
    badge: "−25%",
    isBestSeller: true,
    isOnSale: true,
    storage: "Conserver dans un endroit frais et sec, à l'abri de la lumière",
    harvestDate: "Récolte 2024",
  },
  {
    id: "2",
    slug: "miel-montagne",
    name: "Miel de Montagne",
    nameAr: "عسل الجبل",
    category: "Montagne",
    description: "Miel pur des montagnes de Zaghouan, aux arômes floraux intenses et à la texture crémeuse.",
    origin: "Zaghouan, Tunisie",
    benefits: ["Anti-inflammatoire", "Riche en antioxydants", "Soulage la toux", "Énergie naturelle"],
    variants: [
      { weight: "250g", price: 28 },
      { weight: "500g", price: 50 },
      { weight: "1kg", price: 90 },
    ],
    image: "honey-montagne",
    isBestSeller: true,
    storage: "Conserver dans un endroit frais et sec",
    harvestDate: "Récolte 2024",
  },
  {
    id: "3",
    slug: "miel-thym",
    name: "Miel de Thym",
    nameAr: "عسل الزعتر",
    category: "Thym",
    description: "Miel aromatique de thym sauvage, récolté dans les collines de Siliana. Goût herbacé et délicat.",
    origin: "Siliana, Tunisie",
    benefits: ["Antiseptique naturel", "Soulage les maux de gorge", "Améliore la digestion", "Renforce l'immunité"],
    variants: [
      { weight: "250g", price: 25 },
      { weight: "500g", price: 45 },
      { weight: "1kg", price: 80 },
    ],
    image: "honey-thym",
    isBestSeller: true,
    storage: "Conserver dans un endroit frais et sec",
    harvestDate: "Récolte 2024",
  },
  {
    id: "4",
    slug: "miel-multifloral",
    name: "Miel Multifloral",
    nameAr: "عسل متعدد الأزهار",
    category: "Multifloral",
    description: "Mélange de nectars de fleurs sauvages tunisiennes. Doux et polyvalent, parfait pour le quotidien.",
    origin: "Béja, Tunisie",
    benefits: ["Énergie quotidienne", "Riche en vitamines", "Adoucit la peau", "Renforce l'immunité"],
    variants: [
      { weight: "500g", price: 30, originalPrice: 40 },
      { weight: "1kg", price: 55, originalPrice: 70 },
      { weight: "2kg", price: 100, originalPrice: 130 },
    ],
    image: "honey-multifloral",
    badge: "−25%",
    isBestSeller: true,
    isOnSale: true,
    storage: "Conserver dans un endroit frais et sec",
    harvestDate: "Récolte 2024",
  },
  {
    id: "5",
    slug: "miel-eucalyptus",
    name: "Miel d'Eucalyptus",
    nameAr: "عسل الكالبتوس",
    category: "Exotique",
    description: "Miel aux notes mentholées d'eucalyptus. Excellent pour les voies respiratoires.",
    origin: "Cap Bon, Tunisie",
    benefits: ["Dégage les voies respiratoires", "Anti-tussif naturel", "Apaisant", "Riche en minéraux"],
    variants: [
      { weight: "500g", price: 40, originalPrice: 55 },
      { weight: "1kg", price: 70, originalPrice: 95 },
    ],
    image: "honey-eucalyptus",
    badge: "−30%",
    isOnSale: true,
    storage: "Conserver dans un endroit frais et sec",
    harvestDate: "Récolte 2024",
  },
  {
    id: "6",
    slug: "miel-harmel",
    name: "Miel Harmel",
    nameAr: "عسل الحرمل",
    category: "Exotique",
    description: "Miel de Sidr enrichi au Harmel. Connu pour ses propriétés thérapeutiques en médecine traditionnelle.",
    origin: "Kasserine, Tunisie",
    benefits: ["Propriétés thérapeutiques", "Anti-douleur naturel", "Aide à la digestion", "Tradition millénaire"],
    variants: [
      { weight: "250g", price: 40 },
      { weight: "500g", price: 70 },
    ],
    image: "honey-harmel",
    storage: "Conserver dans un endroit frais et sec, à l'abri de la lumière",
    harvestDate: "Récolte 2024",
  },
  {
    id: "7",
    slug: "gelee-royale",
    name: "Gelée Royale",
    nameAr: "غذاء ملكات النحل",
    category: "Exotique",
    description: "Gelée royale pure et fraîche, directement de nos ruches. Le superaliment de la ruche.",
    origin: "Zaghouan, Tunisie",
    benefits: ["Boost immunitaire puissant", "Anti-fatigue", "Régénère les cellules", "Riche en protéines"],
    variants: [
      { weight: "30g", price: 45 },
      { weight: "50g", price: 70 },
      { weight: "100g", price: 120 },
    ],
    image: "honey-gelee-royale",
    storage: "Conserver au réfrigérateur entre 2°C et 5°C",
    harvestDate: "Récolte 2024",
  },
  {
    id: "8",
    slug: "coffret-cadeau-luxe",
    name: "Coffret Cadeau Luxe",
    nameAr: "علبة هدية فاخرة",
    category: "Coffret",
    description: "Coffret luxueux contenant 2 pots de miel premium + 1 pot de propolis. L'idée cadeau parfaite.",
    origin: "Tunisie",
    benefits: ["Cadeau idéal", "3 produits premium", "Emballage luxueux", "Propolis offerte"],
    variants: [
      { weight: "Coffret complet", price: 120, originalPrice: 160 },
    ],
    image: "honey-coffret",
    badge: "−25%",
    isOnSale: true,
    storage: "Conserver dans un endroit frais et sec",
    harvestDate: "Récolte 2024",
  },
];

export const categories = [
  { name: "Jujubier", nameAr: "السدر", icon: "🍯" },
  { name: "Montagne", nameAr: "الجبل", icon: "⛰️" },
  { name: "Thym", nameAr: "الزعتر", icon: "🌿" },
  { name: "Multifloral", nameAr: "متعدد", icon: "🌸" },
  { name: "Exotique", nameAr: "غريب", icon: "✨" },
  { name: "Coffret", nameAr: "هدية", icon: "🎁" },
];

export const governorates = [
  "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan",
  "Bizerte", "Béja", "Jendouba", "Le Kef", "Siliana", "Sousse",
  "Monastir", "Mahdia", "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid",
  "Gabès", "Médenine", "Tataouine", "Gafsa", "Tozeur", "Kébili",
];
