import feed from "@/assets/feed.jpg";
import layers from "@/assets/layers.jpg";
import water from "@/assets/water.jpg";
import hero from "@/assets/hero-farm.jpg";
import nutritionLab from "@/assets/nutrition-lab.jpg";
import biotechLab from "@/assets/biotech-lab.jpg";

export type Product = {
  id: string;
  slug: "aminova-gold" | "calconova" | "aquacyd" | "gutmax";
  name: string;
  index: string;
  category: string;
  focusArea: string;
  form: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  imageAlt: string;
  applications: string[];
  /** Unverified fields stay null until approved documentation is supplied. */
  composition: string | null;
  packSizes: string | null;
  dosage: string | null;
  storage: string | null;
  disclaimer: string;
  seoTitle: string;
  seoDescription: string;
};

const DISCLAIMER =
  "Product information on this website is for general reference. Always follow the approved product label and seek guidance from a qualified veterinarian or poultry nutrition professional before use.";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "aminova-gold",
    name: "Aminova Gold",
    index: "01",
    category: "Nutritional Support",
    focusArea: "Nutritional Support",
    form: "Nutritional supplement",
    shortDescription:
      "A nutritional supplement positioned to support poultry metabolic and productive nutrition programs.",
    detailedDescription:
      "Aminova Gold is a POULTRIVA nutritional supplement positioned for nutritional and metabolic support within poultry feeding programs. It is intended to complement a balanced ration as part of a professionally planned nutrition strategy.",
    image: nutritionLab,
    imageAlt: "Life sciences nutrition laboratory developing amino acid and metabolic feed supplement formulations",
    applications: [
      "Complementing balanced poultry feeding programs",
      "Nutritional support during production phases",
      "Use alongside professional nutrition guidance",
    ],
    composition: null,
    packSizes: null,
    dosage: null,
    storage: null,
    disclaimer: DISCLAIMER,
    seoTitle: "Aminova Gold — Poultry Nutritional Supplement | POULTRIVA",
    seoDescription:
      "Aminova Gold by POULTRIVA: a nutritional supplement positioned for poultry metabolic and productive nutrition programs.",
  },
  {
    id: "p2",
    slug: "calconova",
    name: "Calconova",
    index: "02",
    category: "Calcium Supplement",
    focusArea: "Calcium & Mineral Nutrition",
    form: "High-potency calcium supplement",
    shortDescription:
      "A high-potency poultry calcium supplement for calcium-related nutritional support.",
    detailedDescription:
      "Calconova is a high-potency calcium supplement positioned for supplemental calcium nutrition in poultry. Calcium is an essential mineral in poultry diets, and supplementation should be planned according to the bird type, production stage and professional advice.",
    image: layers,
    imageAlt: "Brown laying hens beside fresh brown eggs",
    applications: [
      "Supplemental calcium nutrition",
      "Mineral nutrition programs for layers and broilers",
      "Use alongside a balanced mineral ration",
    ],
    composition: null,
    packSizes: null,
    dosage: null,
    storage: null,
    disclaimer: DISCLAIMER,
    seoTitle: "Calconova — Poultry Calcium Supplement | POULTRIVA",
    seoDescription:
      "Calconova by POULTRIVA: a high-potency poultry calcium supplement for calcium-related nutritional support.",
  },
  {
    id: "p3",
    slug: "aquacyd",
    name: "Aquacyd",
    index: "03",
    category: "Liquid Acidifier",
    focusArea: "Drinking-Water Management",
    form: "Water-miscible liquid",
    shortDescription:
      "A water-miscible liquid acidifier for poultry drinking-water pH management.",
    detailedDescription:
      "Aquacyd is a water-miscible liquid acidifier positioned for appropriate drinking-water pH management in poultry production. Water quality is a foundation of flock management, and acidifier use should follow label directions and regular water monitoring.",
    image: biotechLab,
    imageAlt: "Life sciences biotechnology researcher formulating water-miscible liquid acidification solutions",
    applications: [
      "Drinking-water pH management",
      "Part of routine water-quality programs",
      "Use with regular water monitoring",
    ],
    composition: null,
    packSizes: null,
    dosage: null,
    storage: null,
    disclaimer: DISCLAIMER,
    seoTitle: "Aquacyd — Liquid Acidifier for Poultry Water | POULTRIVA",
    seoDescription:
      "Aquacyd by POULTRIVA: a water-miscible liquid acidifier for poultry drinking-water pH management.",
  },
  {
    id: "p4",
    slug: "gutmax",
    name: "Gutmax",
    index: "04",
    category: "Powder Acidifier",
    focusArea: "Digestive Environment Support",
    form: "Powder acidifier",
    shortDescription:
      "A powder acidifier positioned for poultry digestive-environment management.",
    detailedDescription:
      "Gutmax is a powdered acidifier positioned for digestive-environment management in poultry. It is intended to be used as part of a broader approach that includes feed quality, hygiene and sound nutritional management.",
    image: hero,
    imageAlt: "Healthy broiler chickens in a clean poultry house",
    applications: [
      "Digestive-environment management",
      "Feed-based acidification programs",
      "Use alongside feed quality and hygiene practices",
    ],
    composition: null,
    packSizes: null,
    dosage: null,
    storage: null,
    disclaimer: DISCLAIMER,
    seoTitle: "Gutmax — Powder Acidifier for Poultry | POULTRIVA",
    seoDescription:
      "Gutmax by POULTRIVA: a powder acidifier positioned for poultry digestive-environment management.",
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
