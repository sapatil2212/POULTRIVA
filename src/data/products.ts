import calconovaImg from "@/assets/products/calconova.png";
import gutmaxImg from "@/assets/products/gutmax.png";
import aquacydImg from "@/assets/products/aquacyd.png";
import avivitaGoldImg from "@/assets/products/avivita_gold.png";
import uricovaImg from "@/assets/products/uricova.png";
import vetaceplusImg from "@/assets/products/vetaceplus.png";
import aminovaGoldImg from "@/assets/products/aminova_gold.png";
import cholinovaImg from "@/assets/products/cholinova.png";
import vaynexImg from "@/assets/products/vaynex.png";
import cyntrexImg from "@/assets/products/cyntrex.png";
import biolyteImg from "@/assets/products/biolyte.png";
import selenovaImg from "@/assets/products/selenova.png";
import daraGoldImg from "@/assets/products/dara_gold.png";
import hVitaGoldImg from "@/assets/products/h-vita.png";
import aminoLysImg from "@/assets/products/amino-lys.png";
import gutShieldImg from "@/assets/products/gut_shield.png";
import utriCureImg from "@/assets/products/utri_cure.png";
import sparkUpImg from "@/assets/products/sparkup.png";
import gasNilImg from "@/assets/products/gas_nil.png";
import nutriProImg from "@/assets/products/nutri_pro.png";
import livToxNilImg from "@/assets/products/liv_tox_nil.png";
import teetGrowImg from "@/assets/products/teet_grow.png";
import lactocalGelImg from "@/assets/products/lactocal_gel.png";
import zeroFlyImg from "@/assets/products/zero-fly.png";
import aminoLimitImg from "@/assets/products/amino_limit.png";

export type ProductBenefit = { index: string; title: string; heading: string; description: string };
export type ProductApplication = {
  title: string;
  heading: string;
  description: string;
  focus: string[];
};
export type ProductFormulaItem = { title: string; heading: string; description: string };
export type CompositionGroup = { title: string; rows: [string, string][] };
export type DosageRow = { category: string; quantity: string };
export type ProductAdvantage = { title: string; description: string };
export type ProductFaq = { question: string; answer: string };

export type Product = {
  id: string;
  slug:
    | "aminova-gold"
    | "calconova"
    | "aquacyd"
    | "gutmax"
    | "avivita-gold"
    | "cholinova-60"
    | "vaynex-a"
    | "uricova"
    | "vetaceplus"
    | "cyntrex"
    | "biolyte"
    | "selenova"
    | "dara-gold"
    | "h-vita-gold"
    | "amino-lys-98"
    | "gut-shield"
    | "utri-cure"
    | "spark-up"
    | "gas-nil"
    | "nutri-pro-elite"
    | "liv-tox-nil"
    | "teet-grow"
    | "lactocal-gel"
    | "zero-fly"
    | "amino-limit-99";
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
  /** Optional rich content â€” rendered on the detail page only when present. */
  tagline?: string;
  heroHeading?: string;
  heroIntro?: string[];
  highlights?: string[];
  overviewLabel?: string;
  overviewHeading?: string;
  overviewParagraphs?: string[];
  quickInfo?: [string, string][];
  benefits?: ProductBenefit[];
  detailedApplications?: ProductApplication[];
  formula?: ProductFormulaItem[];
  compositionGroups?: CompositionGroup[];
  compositionNote?: string;
  dosageTable?: DosageRow[];
  dosageGuidance?: string[];
  advantages?: ProductAdvantage[];
  handling?: string[];
  faqs?: ProductFaq[];
  /** Optional section copy overrides; the detail page falls back to the default poultry wording. */
  benefitsHeading?: string;
  applicationsEyebrow?: string;
  applicationsHeading?: string;
  advantageEyebrow?: string;
  advantageHeading?: string;
  /** Optional wording overrides for non-nutrition products; defaults keep the current wording. */
  compositionHeading?: string;
  dosageLabel?: string;
  finalCtaCopy?: string;
  keywords?: string[];
};

const DISCLAIMER =
  "Product information on this website is for general reference. Always follow the approved product label and seek guidance from a qualified veterinarian or poultry nutrition professional before use.";

const CATTLE_DISCLAIMER =
  "Product information on this website is for general reference. Always follow the approved product label and seek guidance from a qualified veterinarian or animal nutritionist before use.";

const LIVESTOCK_DISCLAIMER =
  "Product information on this website is for general reference. Always follow the approved product label and seek guidance from a qualified veterinarian or animal nutritionist before use.";

const FARM_HYGIENE_DISCLAIMER =
  "Product information on this website is for general reference. Always follow the approved product label and safety data sheet, and seek guidance from a qualified veterinarian or poultry professional before use.";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "aminova-gold",
    name: "Aminova Gold",
    index: "01",
    category: "Amino Acid Nutrition",
    focusArea: "Amino Acid, Choline & Mineral Nutrition",
    form: "Liquid amino acid & mineral supplement",
    shortDescription:
      "A concentrated liquid supplement with methionine activity, lysine, choline chloride and essential minerals for growth-stage poultry nutrition.",
    detailedDescription:
      "AMINOVA GOLD by Poultriva is a concentrated liquid feed supplement formulated with methionine activity supplied through a methionine hydroxy analogue, lysine hydrochloride, choline chloride and selected mineral ingredients. Amino acids are the building blocks of proteins essential for normal growth, muscle development, tissue maintenance and numerous metabolic functions, and the formula is designed to complement balanced feed formulations across different production stages.",
    image: aminovaGoldImg,
    imageAlt:
      "Poultriva AMINOVA GOLD 1 litre liquid poultry amino acid supplement containing methionine activity, lysine hydrochloride, choline chloride, and minerals.",
    applications: [
      "Amino acid, choline and mineral supplementation",
      "Nutritional support across chicks, broilers, layers and breeders",
      "Use alongside balanced feed and professional guidance",
    ],
    composition:
      "Methionine activity, lysine HCl, choline chloride and selected minerals (see composition below)",
    packSizes: "1 Litre",
    dosage: "5â€“20 mL per 100 birds by growth stage (label-declared)",
    storage:
      "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
    disclaimer: DISCLAIMER,
    seoTitle: "AMINOVA GOLD | Poultry Amino Acid & Mineral Supplement | Poultriva",
    seoDescription:
      "Discover Poultriva AMINOVA GOLD, a liquid amino acid feed supplement containing methionine activity, lysine, choline, and minerals for poultry nutrition.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading:
      "Essential Amino Acids. Stronger Nutritional Foundations. Better Growth Potential.",
    heroIntro: [
      "Unlock the nutritional potential of your poultry flock with AMINOVA GOLD, a specialized liquid feed supplement combining methionine activity, lysine hydrochloride, choline chloride, and essential mineral ingredients.",
      "Developed to complement professionally balanced poultry feeding programs, AMINOVA GOLD supplies important nutrients involved in protein synthesis, normal growth, liver lipid metabolism, skeletal development, and cellular function from early chick development to commercial broiler and layer management.",
    ],
    highlights: [
      "Methionine Hydroxy Analogue-Based Nutrition",
      "Essential Lysine Supplementation",
      "Choline Chloride for Metabolic Support",
      "Multiple Essential Mineral Ingredients",
      "Supports Normal Muscle & Tissue Development",
      "Contributes to Healthy Feather Development",
      "Supports Balanced Growth-Stage Nutrition",
      "Convenient 1 Litre Packaging",
    ],
    overviewLabel: "About Aminova Gold",
    overviewHeading: "Advanced Amino Acid Nutrition for Modern Poultry Farming",
    overviewParagraphs: [
      "AMINOVA GOLD by Poultriva is a concentrated liquid feed supplement formulated with methionine activity supplied through a methionine hydroxy analogue, lysine hydrochloride, choline chloride, and selected mineral ingredients.",
      "Amino acids are the building blocks of proteins and are essential for normal growth, muscle development, tissue maintenance, and numerous metabolic functions.",
      "Methionine and lysine are especially important in poultry nutrition because their dietary availability can limit protein synthesis and growth when supplied in insufficient quantities.",
      "Choline contributes to phospholipid synthesis, normal liver lipid metabolism, and other important physiological processes, while the formula also includes magnesium, manganese, iron, zinc, cobalt, copper, and phosphorus.",
      "AMINOVA GOLD is designed to complement balanced feed formulations and support the nutritional requirements of poultry at different production stages.",
    ],
    quickInfo: [
      ["Product Name", "AMINOVA GOLD"],
      ["Brand", "Poultriva"],
      ["Product Category", "Poultry & Animal Feed Supplement"],
      ["Product Type", "Liquid Amino Acid & Mineral Supplement"],
      ["Methionine Source", "Methionine Hydroxy Analogue"],
      ["Additional Amino Acid", "Lysine Hydrochloride"],
      ["Metabolic Nutrient", "Choline Chloride"],
      ["Additional Components", "Selected Mineral Ingredients"],
      ["Primary Application", "Poultry Nutritional Supplementation"],
      ["Net Quantity", "1 Litre"],
      ["Shelf Life", "24 Months from Manufacturing"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Muscle & Tissue Development",
        heading: "Essential Amino Acids for Protein Synthesis",
        description:
          "Methionine and lysine are important nutrients involved in protein synthesis and tissue development. An adequate dietary supply contributes to normal muscle formation, growth, and maintenance.",
      },
      {
        index: "02",
        title: "Growth-Stage Nutrition",
        heading: "Supporting Healthy Body Development",
        description:
          "Growing poultry require sufficient amino acids and minerals to support development. AMINOVA GOLD can complement feeding programs where additional nutrient supplementation is appropriate.",
      },
      {
        index: "03",
        title: "Feed Nutrient Utilization",
        heading: "Supporting Balanced Amino Acid Nutrition",
        description:
          "Adequate levels and proportions of essential amino acids are important for efficient dietary protein utilization. Supplementation may help correct specific nutrient shortfalls identified in the complete ration.",
      },
      {
        index: "04",
        title: "Liver Metabolic Function",
        heading: "Choline-Based Nutritional Support",
        description:
          "Choline contributes to phospholipid formation and normal transport of lipids from the liver. Its dietary adequacy supports normal lipid metabolism and cellular function.",
      },
      {
        index: "05",
        title: "Feather Development",
        heading: "Supporting Normal Plumage Formation",
        description:
          "Methionine is a sulfur-containing amino acid relevant to the production of proteins involved in feather development. Adequate amino acid nutrition contributes to normal feather growth and maintenance.",
      },
      {
        index: "06",
        title: "Skeletal & Cellular Nutrition",
        heading: "Selected Minerals for Essential Functions",
        description:
          "Minerals such as manganese, zinc, magnesium, copper, and phosphorus are involved in normal skeletal, enzymatic, and cellular processes. A balanced mineral supply contributes to healthy physiological development.",
      },
    ],
    detailedApplications: [
      {
        title: "Chicks",
        heading: "Building a Strong Nutritional Foundation",
        description:
          "Early-stage growth requires adequate dietary amino acids and minerals for normal tissue, muscle, and skeletal development.",
        focus: [
          "Early muscle and tissue formation",
          "Normal protein synthesis",
          "Feather development",
          "Metabolic nutritional support",
          "Healthy growth-stage nutrition",
        ],
      },
      {
        title: "Broilers",
        heading: "Supporting Growth-Oriented Feeding Programs",
        description:
          "Broiler nutrition requires carefully balanced amino acid levels to support growth and dietary protein utilization.",
        focus: [
          "Normal muscle development",
          "Protein synthesis",
          "Amino acid balance",
          "Feather maintenance",
          "General growth-related metabolism",
        ],
      },
      {
        title: "Layers",
        heading: "Supporting Productive Poultry Nutrition",
        description:
          "Laying hens require appropriate essential amino acid intake for body maintenance and egg protein synthesis.",
        focus: [
          "Dietary amino acid adequacy",
          "Egg protein nutritional requirements",
          "Liver lipid metabolism",
          "Feather maintenance",
          "General metabolic health",
        ],
      },
      {
        title: "Breeders",
        heading: "Supporting Reproductive Flock Nutrition",
        description:
          "Breeder flocks depend on balanced amino acids, minerals, and other nutrients for normal physiological and reproductive functions.",
        focus: [
          "Body condition maintenance",
          "Essential amino acid nutrition",
          "Normal protein metabolism",
          "Reproductive nutritional requirements",
          "Long-term flock condition",
        ],
      },
    ],
    formula: [
      {
        title: "Methionine Hydroxy Analogue",
        heading: "Supporting Protein Synthesis & Feather Nutrition",
        description:
          "Methionine is an essential sulfur-containing amino acid involved in normal protein synthesis and several metabolic pathways. Methionine hydroxy analogues are used as nutritional sources of methionine activity, important for growing poultry when dietary sulfur amino acids are limiting.",
      },
      {
        title: "Lysine Hydrochloride",
        heading: "Essential Amino Acid for Growth & Tissue Maintenance",
        description:
          "Lysine is an essential amino acid that poultry must obtain through their diet. It plays a central role in protein synthesis and is especially important in formulations designed to meet the requirements of rapidly growing birds.",
      },
      {
        title: "Choline Chloride",
        heading: "Supporting Liver Lipid & Cellular Metabolism",
        description:
          "Choline is involved in phospholipid formation, cell membrane structure, and normal liver fat transport. It also contributes to methyl-group metabolism and is a precursor of acetylcholine.",
      },
      {
        title: "Essential Minerals",
        heading: "Magnesium, Manganese, Iron, Zinc, Copper, Phosphorus & Cobalt",
        description:
          "Selected minerals contribute to enzyme and metabolic activity, skeletal development, oxygen transport, cellular and immune function, and energy metabolism. Cobalt is declared on the label and its appropriate inclusion level for poultry requires specialist evaluation.",
      },
    ],
    compositionGroups: [
      {
        title: "Each 500 mL Contains (label-declared)",
        rows: [
          ["Methionine Activity (Methionine Hydroxy Analogue)", "127.60 g"],
          ["Choline Chloride", "63.125 g"],
          ["Lysine Hydrochloride", "63.125 g"],
          ["Magnesium", "595.40 mg"],
          ["Manganese", "459.00 mg"],
          ["Ferrous (Iron)", "223.40 mg"],
          ["Zinc", "215.70 mg"],
          ["Cobalt", "206.25 mg"],
          ["Copper", "158.80 mg"],
          ["Phosphorus", "154.16 mg"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Physical Form", "Liquid"],
          ["Primary Nutrient Group", "Amino Acid Sources"],
          ["Additional Nutrients", "Choline & Minerals"],
          ["Composition Reference", "Per 500 mL"],
          ["Pack Size", "1 Litre"],
          ["Shelf Life", "24 Months"],
          ["Storage", "Cool & Dry Place"],
          ["Sunlight Protection", "Required"],
        ],
      },
    ],
    compositionNote:
      "The label states methionine activity derived from a methionine hydroxy analogue; the actual chemical form and activity-equivalence basis should be confirmed. The declared lysine hydrochloride quantity is not identical by mass to pure lysine, and the label states elemental mineral names without fully identifying the corresponding salts or compounds. Nutrient concentrations and the identity of each source ingredient should be confirmed through the manufacturer-approved technical specification and certificate of analysis.",
    dosageTable: [
      { category: "First Week", quantity: "5 mL per 100 birds" },
      { category: "Second Week", quantity: "10 mL per 100 birds" },
      { category: "Third Week Onwards", quantity: "15 mL per 100 birds" },
      { category: "Layers", quantity: "20 mL per 100 birds" },
    ],
    dosageGuidance: [
      "Step 01 â€” Identify the growth stage: determine the flock's age and production category.",
      "Step 02 â€” Review the complete diet: assess existing methionine, lysine, choline, and mineral intake from the complete feed and other supplements.",
      "Step 03 â€” Confirm the appropriate amount following the manufacturer's validated dosage instructions and recommendations from a qualified veterinarian or poultry nutritionist.",
      "Step 04 â€” Use an approved administration method: the label does not clearly specify the dilution volume, route of administration, or dosing frequency, so these must be established before administration.",
      "Step 05 â€” Monitor the feeding program, evaluating flock condition, feed intake, production stage, and nutritional requirements under professional guidance.",
      "Excessive or imbalanced amino acid and mineral supplementation can adversely affect poultry nutrition, with particular attention to the total intake of trace minerals such as copper and cobalt. The label quantities are reproduced for reference and should not be interpreted as a complete independently validated dosing schedule.",
    ],
    advantages: [
      {
        title: "Multiple Nutritional Components",
        description:
          "Combines methionine activity, lysine hydrochloride, choline chloride, and selected minerals.",
      },
      {
        title: "Amino Acid-Focused Formulation",
        description:
          "Provides nutritional components relevant to protein synthesis, growth, and tissue maintenance.",
      },
      {
        title: "Choline-Based Metabolic Support",
        description:
          "Includes choline chloride, which contributes to normal liver lipid metabolism and cellular function.",
      },
      {
        title: "Growth-Stage Application",
        description:
          "The label provides differentiated quantities for early growth, later growth, and laying birds.",
      },
      {
        title: "Liquid Feed Supplement",
        description:
          "Available in a liquid format for measured administration according to confirmed product instructions.",
      },
      {
        title: "Commercial Packaging",
        description: "Supplied in a convenient 1 litre pack for animal nutrition applications.",
      },
    ],
    handling: [
      "Keep the product in its original container and ensure it is closed securely after use.",
      "Check the manufacturing date, expiry information, and batch number.",
      "Use suitable measuring equipment and avoid product contamination during handling.",
      "Follow verified administration and mixing instructions.",
      "Do not combine with other supplements without confirming compatibility.",
      "Keep out of reach of children and unauthorized persons.",
    ],
    faqs: [
      {
        question: "What is AMINOVA GOLD?",
        answer:
          "AMINOVA GOLD is a Poultriva-branded liquid poultry and animal feed supplement containing methionine activity, lysine hydrochloride, choline chloride, and selected minerals.",
      },
      {
        question: "What are the main nutritional benefits of AMINOVA GOLD?",
        answer:
          "Its ingredients contribute to normal protein synthesis, growth, tissue maintenance, feather development, liver lipid metabolism, and mineral-dependent physiological functions.",
      },
      {
        question: "Why is methionine important for poultry?",
        answer:
          "Methionine is an essential sulfur-containing amino acid involved in protein synthesis and other metabolic processes. Adequate methionine nutrition is important for normal growth and feather development.",
      },
      {
        question: "What is the role of lysine in poultry nutrition?",
        answer:
          "Lysine is an essential amino acid needed for protein synthesis and normal tissue development, including muscle growth.",
      },
      {
        question: "Why does AMINOVA GOLD contain choline chloride?",
        answer:
          "Choline contributes to phospholipid synthesis, normal liver lipid metabolism, cell membrane structure, and other metabolic functions.",
      },
      {
        question: "Can AMINOVA GOLD support broiler growth and feed conversion?",
        answer:
          "Adequate amino acid nutrition is important for normal broiler growth and can influence protein utilization, but specific growth or FCR improvements have not been demonstrated by product-specific evidence supplied here.",
      },
      {
        question: "Does AMINOVA GOLD support feather development?",
        answer:
          "Methionine is involved in sulfur amino acid nutrition important for feather protein formation, and adequate amino acid intake supports normal feather development.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "The label lists 5 mL per 100 birds for the first week, 10 mL for the second week, 15 mL from the third week onward, and 20 mL for layers. The frequency and route need manufacturer confirmation.",
      },
      {
        question: "Can AMINOVA GOLD be mixed with drinking water?",
        answer:
          "The supplied label identifies a liquid feed supplement but does not clearly specify the administration route or water dilution. Confirm this before use.",
      },
      {
        question: "What minerals are included?",
        answer: "The label lists magnesium, manganese, iron, zinc, cobalt, copper, and phosphorus.",
      },
      {
        question: "Is AMINOVA GOLD a multivitamin supplement?",
        answer:
          "It is primarily an amino acid, choline, and mineral formulation based on its declared composition. Vitamins are not separately listed.",
      },
      {
        question: "Is AMINOVA GOLD a veterinary medicine or antibiotic?",
        answer:
          "No. It is labeled as an animal and poultry liquid feed supplement, not a medicine or antibiotic.",
      },
    ],
  },
  {
    id: "p2",
    slug: "calconova",
    name: "Calconova",
    index: "02",
    category: "Calcium Supplement",
    focusArea: "Calcium, Mineral & Skeletal Nutrition",
    form: "Liquid calcium & nutritional supplement",
    shortDescription:
      "A high-potency liquid calcium supplement with phosphorus, magnesium, trace minerals, methionine and vitamins for skeletal and eggshell nutrition.",
    detailedDescription:
      "CALCONOVA by Poultriva is a liquid calcium and nutritional feed supplement developed to provide a combination of macro-minerals, trace minerals, vitamins, methionine and carbohydrates for poultry nutrition. Calcium, phosphorus and magnesium support normal skeletal formation, mineralization and metabolic processes, while Vitamin D helps birds utilize calcium and phosphorus â€” complementing professionally balanced feed during growth, maintenance and production.",
    image: calconovaImg,
    imageAlt:
      "Poultriva CALCONOVA 1 litre liquid calcium and mineral feed supplement with magnesium, phosphorus, methionine, and vitamins for poultry nutrition.",
    applications: [
      "Calcium, mineral and skeletal nutritional support",
      "Eggshell and bone mineral nutrition across production stages",
      "Use alongside a balanced mineral ration and professional guidance",
    ],
    composition:
      "Calcium, phosphorus, magnesium, trace minerals, methionine, carbohydrates and vitamins (see composition below)",
    packSizes: "1 Litre",
    dosage: "Obtain manufacturer-approved dosage (no dosage shown on supplied label)",
    storage:
      "Keep in a cool place away from direct sunlight; exact storage conditions require manufacturer confirmation.",
    disclaimer: DISCLAIMER,
    seoTitle: "CALCONOVA | Calcium & Mineral Poultry Feed Supplement | Poultriva",
    seoDescription:
      "Explore Poultriva CALCONOVA, a liquid calcium and mineral supplement with phosphorus, magnesium, vitamins, and methionine for poultry skeletal nutrition.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Stronger Nutritional Foundations. Healthier Development. Better Flock Potential.",
    heroIntro: [
      "Give your poultry flock a foundation of essential mineral nutrition with CALCONOVA by Poultriva, a specialized liquid feed supplement formulated with calcium, phosphorus, magnesium, trace minerals, methionine, carbohydrates, and selected vitamins.",
      "Developed to complement balanced poultry feeding programs, CALCONOVA provides nutrients involved in normal bone formation, mineral metabolism, cellular function, growth, and reproductive nutrition from developing chicks to mature laying and breeding flocks.",
    ],
    highlights: [
      "High-Potency Calcium & Phosphorus Formula",
      "Magnesium & Essential Trace Minerals",
      "Vitamin D for Calcium Metabolism",
      "Methionine & Carbohydrate Nutrition",
      "Supports Normal Skeletal Development",
      "Nutritional Support for Eggshell Formation",
      "Supports Growth-Stage Mineral Requirements",
      "Convenient 1 Litre Liquid Pack",
    ],
    overviewLabel: "About Calconova",
    overviewHeading: "Comprehensive Mineral Nutrition for Modern Poultry Farming",
    overviewParagraphs: [
      "CALCONOVA by Poultriva is a liquid calcium and nutritional feed supplement developed to provide a combination of macro-minerals, trace minerals, vitamins, methionine, and carbohydrates for poultry nutrition.",
      "Calcium and phosphorus are essential minerals involved in normal skeletal formation, bone mineralization, and various metabolic processes.",
      "Magnesium contributes to enzymatic functions and normal neuromuscular activity, while zinc and copper participate in biological processes associated with tissue maintenance and metabolism.",
      "Vitamin D plays a central role in calcium and phosphorus regulation, helping birds utilize these important minerals. The formulation also includes methionine, an essential amino acid involved in protein synthesis, along with carbohydrates contributing to the nutritional composition.",
      "CALCONOVA is intended to complement professionally balanced feed formulations and support the nutritional requirements of poultry during growth, maintenance, and production.",
    ],
    quickInfo: [
      ["Product Name", "CALCONOVA"],
      ["Brand", "Poultriva"],
      ["Product Category", "Poultry & Animal Feed Supplement"],
      ["Product Type", "Liquid Calcium & Nutritional Supplement"],
      ["Primary Nutrients", "Calcium, Phosphorus & Magnesium"],
      ["Trace Nutrients", "Zinc, Copper, Cobalt & Potassium Iodide"],
      ["Additional Nutrients", "Methionine & Carbohydrates"],
      ["Vitamins", "A, B, D & H"],
      ["Primary Applications", "Mineral & Skeletal Nutritional Support"],
      ["Net Quantity", "1 Litre"],
      ["Manufacturer & Marketer", "SAGL Life Sciences Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Bone & Skeletal Development",
        heading: "Supporting Strong Skeletal Foundations",
        description:
          "Calcium and phosphorus are essential components of bone mineral structures. Together with Vitamin D, these minerals contribute to normal skeletal development, bone mineralization, and maintenance.",
      },
      {
        index: "02",
        title: "Eggshell Mineral Nutrition",
        heading: "Supporting Normal Eggshell Formation",
        description:
          "Calcium is a major mineral component of eggshells. Adequate calcium intake, supported by appropriate phosphorus and Vitamin D nutrition, contributes to normal eggshell mineralization in laying poultry.",
      },
      {
        index: "03",
        title: "Growth & Tissue Development",
        heading: "Nutritional Support for Developing Birds",
        description:
          "Methionine, minerals, and vitamins are involved in growth-related biological processes. An adequate supply contributes to normal tissue formation and physiological development.",
      },
      {
        index: "04",
        title: "Metabolic Nutritional Support",
        heading: "Supporting Essential Cellular Functions",
        description:
          "Magnesium, phosphorus, vitamins, and other nutrients participate in numerous metabolic pathways involved in normal cellular activity and energy utilization.",
      },
      {
        index: "05",
        title: "Liver-Related Metabolism",
        heading: "Nutrients Involved in Metabolic Processes",
        description:
          "Methionine participates in methyl-group metabolism and protein synthesis. The formulation also contains carbohydrates; specific liver-function or gluconeogenic benefits require additional product-specific evidence.",
      },
      {
        index: "06",
        title: "Overall Flock Nutrition",
        heading: "Supporting Balanced Nutrient Intake",
        description:
          "CALCONOVA provides a combination of macro-minerals, trace nutrients, and vitamins that can complement complete poultry feed when additional supplementation is professionally indicated.",
      },
    ],
    detailedApplications: [
      {
        title: "Chicks",
        heading: "Supporting Early Skeletal Development",
        description:
          "The early growth period is important for normal bone formation, tissue growth, and mineral utilization.",
        focus: [
          "Normal skeletal development",
          "Calcium and phosphorus nutrition",
          "Growth-stage mineral requirements",
          "Vitamin D nutritional support",
          "Healthy tissue development",
        ],
      },
      {
        title: "Broilers",
        heading: "Supporting Growth-Oriented Poultry Nutrition",
        description:
          "Broilers require appropriate mineral and amino acid nutrition to support their rapid growth and skeletal development.",
        focus: [
          "Bone mineralization",
          "Structural development",
          "Mineral metabolic functions",
          "Protein-related nutrient requirements",
          "Overall growth-stage nutrition",
        ],
      },
      {
        title: "Layers",
        heading: "Supporting Eggshell & Skeletal Nutrition",
        description:
          "Laying hens have substantial calcium requirements associated with eggshell formation, and maintaining appropriate mineral intake is important for normal production physiology and skeletal health.",
        focus: [
          "Eggshell calcium nutrition",
          "Bone mineral maintenance",
          "Calcium and phosphorus balance",
          "Vitamin D metabolism",
          "General layer nutritional requirements",
        ],
      },
      {
        title: "Breeders",
        heading: "Supporting Reproductive Flock Nutrition",
        description:
          "Breeding poultry require balanced mineral and vitamin nutrition to maintain body condition, skeletal function, and normal reproductive physiology.",
        focus: [
          "Skeletal maintenance",
          "Reproductive mineral nutrition",
          "Calcium utilization",
          "Micronutrient balance",
          "General breeder flock condition",
        ],
      },
    ],
    formula: [
      {
        title: "Calcium",
        heading: "The Foundation of Bone & Eggshell Mineralization",
        description:
          "One of the most important minerals in poultry nutrition, essential for skeletal structure, eggshell formation, muscle contraction, cellular signaling, and other physiological functions.",
      },
      {
        title: "Phosphorus",
        heading: "Supporting Skeletal & Energy Metabolism",
        description:
          "Phosphorus contributes to bone mineral structure and plays essential roles in energy-related compounds such as ATP; balanced calcium and phosphorus nutrition is important for normal mineral utilization.",
      },
      {
        title: "Magnesium",
        heading: "Essential for Enzymatic & Neuromuscular Function",
        description:
          "Magnesium participates in numerous enzyme systems and is important for normal muscle and nervous system activity and energy-related metabolism.",
      },
      {
        title: "Vitamin D",
        heading: "Helping Regulate Mineral Utilization",
        description:
          "Vitamin D supports the intestinal absorption and physiological regulation of calcium and phosphorus; adequate Vitamin D nutrition is important for normal skeletal development and eggshell mineralization.",
      },
      {
        title: "Trace Minerals",
        heading: "Zinc, Copper, Cobalt & Potassium Iodide",
        description:
          "Zinc supports enzymes and tissue maintenance, copper supports connective tissue and cellular metabolism, cobalt is a declared trace component requiring careful inclusion, and potassium iodide provides iodine for thyroid hormone production and metabolic regulation.",
      },
      {
        title: "Methionine, Carbohydrates & Vitamins",
        heading: "Supporting Protein, Energy & Metabolic Nutrition",
        description:
          "Methionine supports protein synthesis and methyl-group metabolism, carbohydrates contribute metabolizable energy depending on their identity, and Vitamins A, B and H (biotin) support vision, tissue function and carboxylase-dependent metabolic processes.",
      },
    ],
    compositionGroups: [
      {
        title: "Nutritional Value Per 1000 mL (label-declared)",
        rows: [
          ["Calcium", "55,000 mg"],
          ["Magnesium", "21,000 mg"],
          ["Phosphorus", "27,500 mg"],
          ["Zinc (as MHA)", "2,000 mg"],
          ["Copper (as MHA)", "5,000 mg"],
          ["Cobalt", "100 mg"],
          ["Potassium Iodide", "100 mg"],
          ["Methionine", "10 g"],
          ["Carbohydrates", "180,000 mg"],
          ["Vitamin A", "45,000 IU"],
          ["Vitamin B", "100 mcg"],
          ["Vitamin D", "800,000 IU"],
          ["Vitamin H", "20 mg"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Type", "Calcium + Gluconeogenic Nutrient Supplement"],
          ["Product Form", "Liquid"],
          ["Primary Minerals", "Calcium, Magnesium & Phosphorus"],
          ["Trace Components", "Zinc, Copper, Cobalt & Potassium Iodide"],
          ["Amino Acid", "Methionine"],
          ["Declared Vitamins", "A, B, D & H"],
          ["Composition Reference", "Per 1000 mL"],
          ["Net Quantity", "1 Litre"],
        ],
      },
    ],
    compositionNote:
      "Composition is stated per 1000 mL, not per individual dose. The label identifies zinc and copper as \u201CMHA\u201D; the exact chemical complexes and whether quantities represent elemental minerals or total compounds should be verified. The particular B vitamin, the Vitamin D form (D3 or other), the methionine specification, and the individual carbohydrate sources are not identified and must be confirmed against the manufacturer's approved technical specifications and certificate of analysis before publication.",
    dosageGuidance: [
      "No dosage instructions are visible on the supplied CALCONOVA label; the appropriate administration route, dilution method, frequency and quantity must be confirmed with the manufacturer.",
      "Step 01 â€” Identify the poultry category: determine the age, production stage, and nutritional requirements of the flock.",
      "Step 02 â€” Review existing feed composition: evaluate current calcium, phosphorus, magnesium, vitamin D, copper, and other nutrient contributions.",
      "Step 03 â€” Obtain the approved dosage from the manufacturer and have it reviewed by a qualified poultry nutritionist or veterinarian.",
      "Step 04 â€” Verify administration compatibility: confirm whether the formulation is approved for drinking-water administration, feed incorporation, or another method.",
      "Step 05 â€” Monitor nutritional balance and flock condition according to professional guidance.",
      "Avoid excessive calcium and phosphorus supplementation, account for the Vitamin D already present in the complete feed, confirm the elemental copper concentration before administration, and do not combine multiple concentrated mineral supplements without professional guidance.",
    ],
    advantages: [
      {
        title: "Calcium-Rich Formulation",
        description: "Provides a declared 55,000 mg of calcium per litre.",
      },
      {
        title: "Calcium & Phosphorus Combination",
        description:
          "Supplies two minerals essential for normal skeletal development and mineral physiology.",
      },
      {
        title: "Magnesium & Trace Minerals",
        description:
          "Includes magnesium and selected trace elements involved in enzymatic and cellular functions.",
      },
      {
        title: "Vitamin-Enriched Nutrition",
        description:
          "Contains declared Vitamins A, B, D, and H, with exact vitamin forms requiring technical verification.",
      },
      {
        title: "Methionine & Carbohydrates",
        description:
          "Includes additional nutritional components associated with protein and energy metabolism.",
      },
      {
        title: "Commercial Liquid Pack",
        description:
          "Supplied in a convenient 1 litre container for professionally guided animal nutrition applications.",
      },
    ],
    handling: [
      "Retain the product in its original labeled container and keep it tightly closed when not in use.",
      "Prevent contamination during handling and avoid unnecessary exposure to heat and direct sunlight unless manufacturer guidance specifies otherwise.",
      "Use clean measuring equipment and follow verified administration instructions.",
      "Check the batch number, manufacturing date, and expiry information.",
      "Keep out of reach of children and unauthorized persons.",
      "Exact storage conditions and shelf life are not stated on the visible label and must be confirmed before publication.",
    ],
    faqs: [
      {
        question: "What is CALCONOVA?",
        answer:
          "CALCONOVA is a Poultriva-branded liquid animal feed supplement containing calcium, phosphorus, magnesium, trace minerals, methionine, carbohydrates, and selected vitamins.",
      },
      {
        question: "What is the primary nutritional purpose of CALCONOVA?",
        answer:
          "The formulation supplies nutrients involved in normal skeletal development, mineral metabolism, tissue maintenance, and other physiological functions.",
      },
      {
        question: "How does calcium benefit poultry?",
        answer:
          "Calcium is essential for normal bone formation, eggshell mineralization, muscle function, and cellular processes.",
      },
      {
        question: "Why does CALCONOVA contain phosphorus and magnesium?",
        answer:
          "Phosphorus contributes to bone mineralization and cellular energy metabolism, while magnesium participates in normal enzymatic activity, neuromuscular function, and energy-related metabolism.",
      },
      {
        question: "Can CALCONOVA support healthy bones?",
        answer:
          "Its calcium, phosphorus, magnesium, and Vitamin D ingredients are relevant to normal skeletal nutrition. Actual results depend on the complete diet and flock condition.",
      },
      {
        question: "Does CALCONOVA help with eggshell formation and egg production?",
        answer:
          "Calcium and Vitamin D are important for normal eggshell formation, but specific improvements in eggshell quality or egg output require product-specific evidence not provided here.",
      },
      {
        question: "Is CALCONOVA suitable for chicks, broilers, layers and breeders?",
        answer:
          "Its ingredients are relevant across these categories, but their needs differ significantly, so product suitability and dosing should be established according to the complete feed formulation and professional guidance.",
      },
      {
        question: "What is the role of methionine and the carbohydrates?",
        answer:
          "Methionine is an essential amino acid involved in protein synthesis and metabolic reactions; carbohydrates contribute to the product's nutritional composition, with their specific energy contribution depending on the actual ingredients.",
      },
      {
        question: "Does CALCONOVA improve liver function?",
        answer:
          "The label highlights liver support, but no product-specific evidence has been provided to establish an improvement in liver function. Its methionine and other nutrients participate in normal metabolic processes.",
      },
      {
        question: "Which vitamins are included, and what is Vitamin H?",
        answer:
          "The label lists Vitamins A, B, D, and H. Vitamin H is another name for biotin, a vitamin involved in important enzymatic and metabolic processes. The exact form of Vitamin B and Vitamin D must be confirmed.",
      },
      {
        question: "How much calcium and Vitamin D does CALCONOVA contain?",
        answer:
          "The label declares 55,000 mg of calcium and 800,000 IU of Vitamin D per 1000 mL. The specific Vitamin D form and safe dosing instructions require manufacturer confirmation.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "The supplied label does not show a dosage schedule. Obtain the approved quantity, frequency, dilution, and administration route from the manufacturer or veterinarian.",
      },
      {
        question: "Is excessive calcium supplementation harmful?",
        answer:
          "Yes. Too much calcium or an inappropriate calcium-to-phosphorus balance can interfere with normal mineral nutrition and may adversely affect health.",
      },
      {
        question: "What is the available pack size, and is CALCONOVA a veterinary medicine?",
        answer:
          "CALCONOVA is supplied in a 1 litre pack. The supplied packaging identifies it as an animal feed supplement, not a veterinary medicine.",
      },
    ],
  },
  {
    id: "p3",
    slug: "aquacyd",
    name: "Aquacyd",
    index: "03",
    category: "Liquid Acidifier",
    focusArea: "Drinking-Water Management",
    form: "Organic acid-based liquid",
    shortDescription:
      "A propionic acid-based liquid acidifier for professional poultry drinking-water pH management.",
    detailedDescription:
      "Aquacyd by Poultriva is a liquid acidifier formulated for use in poultry drinking-water management programs. It combines propionic acid, acetic acid, benzoic acid, sorbic acid and other ingredients in a specialized formulation intended to influence the acidity of treated water, supporting a systematic approach to drinking-water treatment alongside routine water testing and farm hygiene.",
    image: aquacydImg,
    imageAlt:
      "Poultriva AQUACYD 5 litre liquid acidifier with propionic acid-based formulation for professional poultry drinking-water management.",
    applications: [
      "Controlled drinking-water pH management",
      "Part of routine water-quality and hygiene programs",
      "Use with regular water testing and professional guidance",
    ],
    composition: "Propionic acid 70.5% with supporting organic acids (see composition below)",
    packSizes: "5 Litres",
    dosage: "1 mL per 4 litres of water (label-declared)",
    storage:
      "Store in a cool, dry place away from direct sunlight; handle as a potentially corrosive concentrate.",
    disclaimer: DISCLAIMER,
    seoTitle: "AQUACYD | Liquid Acidifier for Poultry Drinking Water | Poultriva",
    seoDescription:
      "Discover Poultriva AQUACYD, an organic acid-based liquid poultry water acidifier designed for professional drinking-water pH management and farm water-care programs.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Balanced Water. Better Poultry Management.",
    heroIntro: [
      "Enhance your poultry water-management program with AQUACYD, a specialized liquid acidifier by Poultriva, formulated with a combination of organic acids and supporting ingredients.",
      "Developed for professional poultry farming applications, AQUACYD is intended to support drinking-water acidification and help maintain suitable water conditions as part of an integrated approach to flock health and farm hygiene.",
    ],
    highlights: [
      "Propionic Acid-Based Formulation",
      "Multiple Organic Acid Ingredients",
      "Intended for Drinking-Water Acidification",
      "Supports Water pH Management",
      "Complements Poultry Water-Hygiene Programs",
      "Liquid Formulation for Measured Use",
      "Commercial 5 Litre Packaging",
    ],
    overviewLabel: "About Aquacyd",
    overviewHeading: "Advanced Acidification for Modern Poultry Water Management",
    overviewParagraphs: [
      "AQUACYD by Poultriva is a liquid acidifier formulated for use in poultry drinking-water management programs.",
      "The product combines propionic acid, acetic acid, benzoic acid, sorbic acid, and other ingredients in a specialized formulation intended to influence the acidity of treated water.",
      "Water quality is a fundamental aspect of successful poultry farming. Its chemical composition, microbial status, mineral content, and pH can influence drinking behavior, water-system performance, and overall flock management.",
      "By incorporating an appropriately formulated acidifier into a controlled water-treatment program, poultry producers may be able to manage drinking-water pH and create conditions less favorable to the growth of certain microorganisms.",
      "The actual effect depends on initial water quality, alkalinity, treatment concentration, and the verified characteristics of the acidifier. AQUACYD is positioned as a professional water-management supplement for operations seeking a systematic approach to drinking-water treatment.",
    ],
    quickInfo: [
      ["Product Name", "AQUACYD"],
      ["Brand", "Poultriva"],
      ["Product Category", "Poultry/Animal Liquid Feed Supplement"],
      ["Product Type", "Liquid Acidifier"],
      ["Primary Ingredient", "Propionic Acid"],
      ["Declared Propionic Acid", "70.5%"],
      ["Formulation", "Organic Acid-Based Liquid"],
      ["Primary Application", "Poultry Drinking-Water Acidification"],
      ["Label Dosage", "1 mL per 4 Litres of Water"],
      ["Net Quantity", "5 Litres"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Drinking-Water pH Management",
        heading: "Supporting Controlled Water Acidification",
        description:
          "Organic acids can lower drinking-water pH when added at an appropriate concentration. AQUACYD is intended to help manage water acidity as part of a professionally monitored treatment program.",
      },
      {
        index: "02",
        title: "Water-Hygiene Support",
        heading: "Complementing Farm Hygiene Practices",
        description:
          "Acidified conditions can be less favorable to certain microorganisms. When appropriately formulated and validated, organic acid products may complement a wider water-hygiene strategy.",
      },
      {
        index: "03",
        title: "Digestive Environment Support",
        heading: "Complementing Poultry Nutritional Management",
        description:
          "Research on some organic acid preparations has identified effects on gastrointestinal conditions and microbial populations. Any such benefits from AQUACYD would require product-specific evidence.",
      },
      {
        index: "04",
        title: "Consistent Water Management",
        heading: "Supporting Structured Treatment Programs",
        description:
          "Measured supplementation can help farm operators implement a repeatable acidification procedure when accompanied by routine water testing and suitable dosing equipment.",
      },
      {
        index: "05",
        title: "Multi-Acid Formulation",
        heading: "Combining Different Organic Acid Ingredients",
        description:
          "AQUACYD contains several organic acids with different chemical properties, offering a formulation intended for specialized acidification applications.",
      },
      {
        index: "06",
        title: "Commercial Farm Convenience",
        heading: "Designed for Professional Operations",
        description:
          "The liquid formulation and 5 litre packaging provide a practical format for commercial poultry farms using approved and monitored water-treatment procedures.",
      },
    ],
    detailedApplications: [
      {
        title: "Chick Rearing",
        heading: "Supporting Early-Stage Water Management",
        description:
          "Young chicks require consistent access to clean, suitable drinking water during their critical development period.",
        focus: [
          "Drinking-water quality monitoring",
          "Appropriate water pH management",
          "Waterline hygiene practices",
          "Consistent drinking-water availability",
          "Professionally managed acidification",
        ],
      },
      {
        title: "Broiler Farming",
        heading: "Supporting Growth-Stage Water Quality",
        description:
          "Commercial broilers require reliable water intake to support normal physiological function and feed consumption.",
        focus: [
          "Water pH monitoring",
          "Routine water-quality assessment",
          "Drinking-system management",
          "Farm hygiene support",
          "Controlled acidification practices",
        ],
      },
      {
        title: "Layer Poultry",
        heading: "Supporting Productive Flock Management",
        description:
          "Laying hens depend on consistent water supply and appropriate nutritional management throughout production.",
        focus: [
          "Water-quality consistency",
          "Drinking-line maintenance",
          "Water pH assessment",
          "Long-term flock management",
          "Farm water-treatment programs",
        ],
      },
      {
        title: "Breeder Poultry",
        heading: "Supporting Professional Breeder Operations",
        description:
          "Breeder flocks require carefully managed drinking-water systems and appropriate environmental conditions.",
        focus: [
          "Consistent water availability",
          "Water chemistry monitoring",
          "Professional hygiene programs",
          "Suitable water-treatment practices",
          "Reproductive flock management",
        ],
      },
    ],
    formula: [
      {
        title: "Controlled Acidification",
        heading: "How Organic Acids Lower Water pH",
        description:
          "Organic acids can release hydrogen ions in water, changing its acidity. The final pH depends on the actual chemical composition of the product, its concentration, and the buffering capacity of the water.",
      },
      {
        title: "Water Environment Management",
        heading: "Influencing Microbial Conditions",
        description:
          "Changes in water pH can influence the conditions experienced by microorganisms. Some organic acids have antimicrobial properties under particular concentrations and pH conditions, but these effects are not equivalent to sterilization or disinfection.",
      },
      {
        title: "Drinking-Water Quality Monitoring",
        heading: "Measuring the Real Effect",
        description:
          "The effectiveness of a water acidifier should be evaluated by measuring relevant water-quality parameters, including pH, alkalinity, total dissolved solids, microbial quality, and drinking-water consumption.",
      },
      {
        title: "Integration with Farm Management",
        heading: "Part of a Wider Program",
        description:
          "Water acidification is most useful when integrated with regular water-system maintenance, safe sanitization procedures, appropriate feed, and veterinary flock management. An acidifier's effectiveness is not determined simply by the quantity of acid listed on its label.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Composition",
        rows: [
          ["Propionic Acid", "70.5%"],
          ["Sodium Hydroxide", "5%"],
          ["Acetic Acid", "2.5%"],
          ["Benzoic Acid", "2.5%"],
          ["Ammonium Hydroxide", "2%"],
          ["Sorbic Acid", "1%"],
          ["Methylparaben", "Not specified"],
          ["Propylparaben", "Not specified"],
          ["Water", "q.s."],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Physical Form", "Liquid"],
          ["Primary Ingredient", "Propionic Acid"],
          ["Intended Application", "Poultry Drinking Water"],
          ["Net Quantity", "5 Litre"],
          ["Storage", "Cool & Dry Place"],
          ["Sunlight Protection", "Required"],
        ],
      },
    ],
    compositionNote:
      "The composition is transcribed from the supplied packaging label. Final product pH, density, titratable acidity, equipment compatibility, shelf life, a complete safety data sheet, and regulatory classification require manufacturer confirmation, and the published composition should be checked against an approved formulation sheet or certificate of analysis before the product is marketed or administered.",
    dosageTable: [
      { category: "4 Litres of water", quantity: "1 mL AQUACYD" },
      { category: "20 Litres of water", quantity: "5 mL AQUACYD" },
      { category: "100 Litres of water", quantity: "25 mL AQUACYD" },
      { category: "500 Litres of water", quantity: "125 mL AQUACYD" },
      { category: "1,000 Litres of water", quantity: "250 mL AQUACYD" },
    ],
    dosageGuidance: [
      "Label-declared dosage is 1 mL per 4 litres of water. The values above are mathematical conversions of that printed dosage, not separate manufacturer-approved dosing schedules, and are not independently validated for every water source or poultry category.",
      "Step 01 â€” Test the source water: measure pH, alkalinity, hardness, and relevant microbial parameters.",
      "Step 02 â€” Verify product instructions: confirm the formulation, approved dosing procedure, and application with the manufacturer or veterinarian.",
      "Step 03 â€” Prepare a controlled dilution: only trained personnel should handle and dilute the concentrate using suitable protective equipment and manufacturer-approved procedures.",
      "Step 04 â€” Measure the final water pH after dosing rather than assuming a result from the volume added.",
      "Step 05 â€” Monitor water intake and flock response, adjusting the approved management plan if necessary.",
      "Do not mix the concentrate directly with chlorine-based sanitizers, bleach, or other water-treatment chemicals; confirm compatibility before use alongside vaccines, medicines, or other supplements. Excessively acidic water can reduce palatability, damage equipment, and affect flock performance.",
    ],
    advantages: [
      {
        title: "Organic Acid-Based Formulation",
        description:
          "Contains propionic, acetic, benzoic, and sorbic acids as declared on the label.",
      },
      {
        title: "Targeted Acidification Application",
        description: "Positioned for professionally managed drinking-water pH adjustment.",
      },
      {
        title: "Liquid Format",
        description:
          "Designed for measured dilution and application using an approved dosing process.",
      },
      {
        title: "Commercial Pack Size",
        description: "Available in a 5 litre pack for poultry farm supply requirements.",
      },
      {
        title: "Multiple Functional Ingredients",
        description:
          "Combines organic acids and other formulation substances, subject to confirmation of final chemical specifications.",
      },
      {
        title: "Integrated Farm Use",
        description:
          "Intended to complement routine water testing, hygiene, and poultry-management programs.",
      },
    ],
    handling: [
      "Keep in the original, securely closed and correctly labeled container.",
      "Store separately from incompatible chemicals, in a cool, dry place protected from direct sunlight.",
      "Avoid contact with eyes and skin; use appropriate gloves and eye/face protection as specified in the safety data sheet.",
      "Avoid inhaling vapors or mist, and do not transfer to food or drinking-water containers.",
      "Use chemical-resistant equipment where required, and follow the manufacturer's spill-response and first-aid instructions.",
      "Treat the concentrate as potentially corrosive until its final hazard classification is verified.",
      "Keep away from children and unauthorized personnel.",
    ],
    faqs: [
      {
        question: "What is AQUACYD?",
        answer:
          "AQUACYD is a Poultriva-branded liquid acidifier intended for poultry drinking-water management. Its label declares a formulation containing several organic acids and supporting ingredients.",
      },
      {
        question: "What is the main purpose of AQUACYD?",
        answer:
          "The product is intended for controlled drinking-water acidification as part of a professional poultry water-management program.",
      },
      {
        question: "What are the key organic acids in AQUACYD?",
        answer:
          "The declared organic acids include propionic acid, acetic acid, benzoic acid, and sorbic acid.",
      },
      {
        question: "How does a poultry water acidifier work?",
        answer:
          "Acidifiers can change drinking-water pH. Some organic acids may also influence microbial growth under suitable conditions, but the results depend on concentration, water chemistry, and the finished formulation.",
      },
      {
        question: "Can AQUACYD improve drinking-water quality?",
        answer:
          "Appropriate water acidification can form part of a water-quality program. The product's effectiveness must be verified through water testing and manufacturer-supported performance data.",
      },
      {
        question: "Does AQUACYD kill harmful bacteria?",
        answer:
          "The supplied label does not provide validated antimicrobial efficacy data. AQUACYD should not be marketed as a disinfectant or assumed to kill specific pathogens without appropriate testing and authorization.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "The label prints 1 mL per 4 litres of water. The final application rate must be verified against the product's technical documentation and the treated water's actual pH.",
      },
      {
        question: "Can AQUACYD be used for broilers, layers and breeders?",
        answer:
          "It is positioned for poultry water management, but suitability for each category should be confirmed through approved manufacturer instructions and veterinary guidance, considering bird category, water intake and flock health.",
      },
      {
        question: "Does AQUACYD improve digestion and feed conversion?",
        answer:
          "Organic acid formulations have been investigated for digestive and performance-related outcomes. However, no AQUACYD-specific clinical performance results have been supplied.",
      },
      {
        question: "Can AQUACYD be mixed with poultry medicines or used during vaccination?",
        answer:
          "Compatibility must be confirmed before use. Acidification may affect the stability or performance of certain medications and water-administered products, and changes in water chemistry may interfere with certain drinking-water vaccines â€” consult the vaccine manufacturer and veterinarian.",
      },
      {
        question: "Can AQUACYD replace a water sanitizer?",
        answer:
          "No. Acidification and sanitization serve different purposes. An acidifier should not be assumed to disinfect drinking water.",
      },
      {
        question: "Does AQUACYD work in hard or alkaline water?",
        answer:
          "The response depends on alkalinity and buffering capacity. Water testing and verification of the final pH are necessary.",
      },
      {
        question: "Can too much acidifier be harmful?",
        answer:
          "Yes. Excessive acidification can affect water palatability, bird performance, and drinking-system materials.",
      },
      {
        question: "What is the available pack size and how should it be stored?",
        answer:
          "The product label identifies a 5 litre pack. Keep it in a cool, dry place, protected from direct sunlight, and follow all chemical handling precautions supplied by the manufacturer.",
      },
    ],
  },
  {
    id: "p4",
    slug: "gutmax",
    name: "Gutmax",
    index: "04",
    category: "Powder Acidifier",
    focusArea: "Feed Acidification & Digestive Support",
    form: "Multi-acid powder feed acidifier",
    shortDescription:
      "A multi-organic acid powder feed acidifier with citric, lactic, formic and tartaric acids, phosphoric acid and calcium propionate.",
    detailedDescription:
      "GUTMAX is a specialized powder feed acidifier developed under the Poultriva brand for animal and poultry feeding applications. The formulation combines multiple organic acids, phosphoric acid and calcium propionate to provide an acid-based ingredient profile suitable for professionally formulated feed programs, supporting feed acidification, feed quality and the gastrointestinal environment as part of balanced nutrition and responsible poultry management.",
    image: gutmaxImg,
    imageAlt:
      "Poultriva GUTMAX 25 kg powder poultry feed acidifier containing multiple organic acids and calcium propionate for professional feed formulation.",
    applications: [
      "Poultry feed acidification",
      "Feed-quality and digestive-environment nutritional programs",
      "Incorporation into feed under professional guidance",
    ],
    composition:
      "Organic acid blend with phosphoric acid and calcium propionate (see composition below)",
    packSizes: "25 kg",
    dosage: "1 kg per metric tonne of feed (label-declared)",
    storage:
      "Store in a cool, dry place away from direct sunlight; protect from moisture and contamination.",
    disclaimer: DISCLAIMER,
    seoTitle: "GUTMAX | Poultry Powder Feed Acidifier | Poultriva",
    seoDescription:
      "Discover Poultriva GUTMAX, a multi-organic acid powder feed acidifier formulated with citric, lactic, formic, tartaric acids, and calcium propionate.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Better Feed Management. Balanced Digestive Nutrition.",
    heroIntro: [
      "Introducing GUTMAX by Poultriva, a specialized powder feed acidifier formulated with a combination of organic acids, phosphoric acid, and calcium propionate.",
      "Developed for use in professionally managed poultry feeding programs, GUTMAX is designed to support feed acidification and complement nutritional strategies focused on the gastrointestinal environment, feed quality, and efficient nutrient utilization.",
    ],
    highlights: [
      "Multi-Organic Acid Formulation",
      "Contains Citric, Lactic, Formic & Tartaric Acids",
      "Includes Phosphoric Acid & Calcium Propionate",
      "Designed for Poultry Feed Acidification",
      "Supports Feed Quality Management",
      "Complements Digestive Nutritional Programs",
      "Powder Formulation for Feed Mixing",
      "Commercial 25 kg Packaging",
    ],
    overviewLabel: "About Gutmax",
    overviewHeading: "Advanced Feed Acidification for Modern Poultry Nutrition",
    overviewParagraphs: [
      "GUTMAX is a specialized powder feed acidifier developed under the Poultriva brand for animal and poultry feeding applications.",
      "The formulation combines multiple organic acids, phosphoric acid, and calcium propionate to provide an acid-based ingredient profile suitable for consideration in professionally formulated feed programs.",
      "Feed acidifiers are used in animal nutrition to influence the chemical environment of feed and, depending on their formulation and application, may also affect conditions within the gastrointestinal tract.",
      "Maintaining appropriate digestive conditions is important for normal digestion, nutrient utilization, and the overall nutritional wellbeing of poultry. The effect of an acidifier depends on its composition, inclusion level, feed buffering capacity, bird age, and other dietary and physiological factors.",
      "GUTMAX is positioned as a targeted feed-additive solution that complements balanced nutrition and responsible poultry-management practices.",
    ],
    quickInfo: [
      ["Product Name", "GUTMAX"],
      ["Brand", "Poultriva"],
      ["Product Category", "Animal & Poultry Feed Acidifier"],
      ["Product Type", "Multi-Acid Powder Feed Supplement"],
      ["Physical Form", "Powder"],
      ["Primary Ingredients", "Organic Acid Blend"],
      ["Additional Ingredients", "O-Phosphoric Acid & Calcium Propionate"],
      ["Primary Application", "Feed Acidification"],
      ["Label Dosage", "1 kg per Metric Tonne of Feed"],
      ["Net Quantity", "25 kg"],
      ["Shelf Life", "24 Months from Manufacturing"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Feed Acidification",
        heading: "Supporting Appropriate Feed Acidity",
        description:
          "The acid blend is intended to influence feed acidity when incorporated at an appropriate inclusion level. The extent of acidification depends on the feed's composition and buffering capacity.",
      },
      {
        index: "02",
        title: "Digestive Environment",
        heading: "Complementing Gastrointestinal Nutrition",
        description:
          "Organic acid preparations have been studied for their potential influence on digestive conditions in poultry. GUTMAX can be considered as part of a nutritional program focused on supporting an appropriate gastrointestinal environment.",
      },
      {
        index: "03",
        title: "Feed Hygiene Management",
        heading: "Supporting Feed Quality Programs",
        description:
          "Certain organic acids and propionate ingredients possess preservative or antimicrobial properties under suitable conditions. Their effectiveness in a finished feed depends on moisture, concentration, storage conditions, and formulation.",
      },
      {
        index: "04",
        title: "Nutrient Utilization",
        heading: "Supporting Balanced Feeding Strategies",
        description:
          "Appropriate gastrointestinal conditions play a role in digestion and nutrient availability. Feed acidifiers may contribute to nutrient-management strategies, although measurable performance benefits require formulation-specific evidence.",
      },
      {
        index: "05",
        title: "Multi-Acid Formulation",
        heading: "Combining Complementary Acid Ingredients",
        description:
          "GUTMAX combines acids with different chemical properties, offering a multi-component approach to feed acidification.",
      },
      {
        index: "06",
        title: "Practical Feed Integration",
        heading: "Designed for Commercial Feed Formulation",
        description:
          "The powder format allows GUTMAX to be incorporated into suitable feed-manufacturing programs using validated weighing, premixing, and mixing procedures.",
      },
    ],
    detailedApplications: [
      {
        title: "Chick & Starter Feed",
        heading: "Supporting Early-Stage Feeding Programs",
        description:
          "Early growth requires high-quality feed, appropriate digestive conditions, and careful nutritional management.",
        focus: [
          "Starter feed formulation",
          "Feed acidification",
          "Feed quality management",
          "Early-stage digestive nutritional support",
          "Balanced nutrient utilization",
        ],
      },
      {
        title: "Broiler Feed",
        heading: "Supporting Growth-Oriented Feed Programs",
        description:
          "Commercial broilers require nutrient-dense diets that support normal growth and efficient digestion.",
        focus: [
          "Broiler feed acidification",
          "Feed quality consistency",
          "Gastrointestinal nutritional management",
          "Digestive environment support",
          "Balanced feed formulation",
        ],
      },
      {
        title: "Layer Feed",
        heading: "Supporting Productive Flock Nutrition",
        description:
          "Laying hens require consistent feed quality, appropriate mineral nutrition, and healthy digestive function throughout production.",
        focus: [
          "Feed quality management",
          "Controlled feed acidification",
          "General digestive nutritional support",
          "Consistent feed formulation",
          "Long-term flock nutritional management",
        ],
      },
      {
        title: "Breeder Feed",
        heading: "Supporting Professional Breeder Nutrition",
        description:
          "Breeder diets must be carefully balanced for reproductive performance, body condition, and overall health.",
        focus: [
          "Feed formulation management",
          "Digestive nutritional balance",
          "Feed quality control",
          "Nutrient availability considerations",
          "Professional breeder feeding programs",
        ],
      },
    ],
    formula: [
      {
        title: "Citric Acid (20%)",
        heading: "Organic Acid for Feed Acidification",
        description:
          "Citric acid is commonly used in food and animal-feed applications, contributing acidifying properties and participating in interactions with mineral ions.",
      },
      {
        title: "Lactic Acid (25%)",
        heading: "Organic Acid-Based Nutritional Ingredient",
        description:
          "A naturally occurring organic acid associated with fermentation processes; in feed formulations it can contribute to acidification and may influence microbial conditions under suitable circumstances.",
      },
      {
        title: "Formic Acid (10%)",
        heading: "Acidifying & Preservative-Related Ingredient",
        description:
          "Formic acid has established acidifying properties and can inhibit certain microorganisms at suitable concentrations; its performance depends on the finished formulation and feed conditions.",
      },
      {
        title: "Tartaric Acid (15%)",
        heading: "Complementary Organic Acid Component",
        description:
          "An organic acid that contributes acidity and may influence formulation characteristics and acid-base balance.",
      },
      {
        title: "O-Phosphoric Acid (5%)",
        heading: "Phosphoric Acid Formulation Component",
        description:
          "The label identifies O-Phosphoric Acid, which should be verified as the intended chemical grade and identity; phosphoric acid contributes acidic functionality to the formulation.",
      },
      {
        title: "Calcium Propionate (5%)",
        heading: "Organic Acid Salt with Preservative Properties",
        description:
          "A salt of propionic acid recognized for preservative use in certain food and feed applications; its effectiveness depends on formulation, concentration, moisture, and storage conditions.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Composition",
        rows: [
          ["Citric Acid", "20%"],
          ["Lactic Acid", "25%"],
          ["Formic Acid", "10%"],
          ["Tartaric Acid", "15%"],
          ["O-Phosphoric Acid", "5%"],
          ["Calcium Propionate", "5%"],
          ["Carrier Base", "q.s."],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Type", "Powder Feed Acidifier"],
          ["Physical Form", "Powder"],
          ["Primary Ingredient Group", "Organic Acids"],
          ["Administration", "Incorporation into Feed"],
          ["Label Dosage", "1 kg per MT of Feed"],
          ["Pack Size", "25 kg"],
          ["Shelf Life", "24 Months"],
          ["Storage", "Cool & Dry Place"],
        ],
      },
    ],
    compositionNote:
      "Values are transcribed from the supplied product packaging. The label lists 80% specified ingredients, with the remainder described as carrier base q.s.; the identity and proportion of the carrier should be confirmed. Finished product pH, titratable acidity, free-acid content, moisture, bulk density, mixing/pelleting stability, safety classification, and a certificate of analysis and safety data sheet should be established through the manufacturer's approved technical documentation.",
    dosageTable: [
      {
        category: "Complete feed (label-declared)",
        quantity: "1 kg per metric tonne (MT) of feed",
      },
    ],
    dosageGuidance: [
      "GUTMAX is labeled for feed incorporation rather than drinking-water administration.",
      "Step 01 â€” Assess the feed formulation: review the feed's nutrient composition, buffering properties, and existing acidifying ingredients.",
      "Step 02 â€” Confirm the inclusion rate: have the manufacturer or qualified feed nutritionist validate the rate for the intended bird category and feed type.",
      "Step 03 â€” Prepare a premix when required, using an appropriate premixing procedure to help distribute the product uniformly.",
      "Step 04 â€” Incorporate into complete feed using suitable feed-manufacturing equipment and validated mixing procedures.",
      "Step 05 â€” Review feed quality and confirm the finished feed meets nutritional and safety requirements.",
      "Step 06 â€” Monitor the feeding program, observing bird condition, feed intake, and production outcomes under professional flock management.",
      "The stated dosage is a label declaration, not an independently validated rate for all poultry categories. The product should not be administered directly to birds or added to drinking water without manufacturer-approved instructions, and unnecessary combined use with other acidifiers should be avoided unless total inclusion and compatibility have been evaluated.",
    ],
    advantages: [
      {
        title: "Six Declared Functional Components",
        description:
          "Combines citric acid, lactic acid, formic acid, tartaric acid, phosphoric acid, and calcium propionate.",
      },
      {
        title: "Powder Feed Format",
        description: "Designed for incorporation into compatible feed-manufacturing systems.",
      },
      {
        title: "Acidification-Focused Formulation",
        description:
          "Provides multiple acidifying ingredients for professionally managed feed formulations.",
      },
      {
        title: "Preservative-Related Ingredient Profile",
        description:
          "Contains ingredients with established preservative properties under suitable conditions.",
      },
      {
        title: "Commercial Feed Application",
        description: "Supplied in a 25 kg pack intended for animal feed-related use.",
      },
      {
        title: "Targeted Nutritional Integration",
        description:
          "Can be considered as part of broader feed-quality and digestive nutritional programs.",
      },
    ],
    handling: [
      "Keep the original packaging securely closed and prevent moisture exposure and powder contamination.",
      "Use suitable protective equipment according to the manufacturer's safety data sheet.",
      "Avoid generating or inhaling airborne dust, and prevent unnecessary skin or eye contact.",
      "Store separately from incompatible chemicals and follow approved feed premixing and handling procedures.",
      "Check the batch number, manufacturing date, and expiry before use.",
      "GUTMAX contains substantial concentrations of acid ingredients, including formic and phosphoric acids; follow the manufacturer's safety data sheet and workplace handling procedures.",
      "Keep away from children and unauthorized persons.",
    ],
    faqs: [
      {
        question: "What is GUTMAX?",
        answer:
          "GUTMAX is a Poultriva-branded powder feed acidifier containing a combination of organic acids, phosphoric acid, and calcium propionate.",
      },
      {
        question: "What is the primary purpose of GUTMAX?",
        answer:
          "GUTMAX is intended for feed acidification and for consideration within professionally managed poultry feed-quality and digestive nutritional programs.",
      },
      {
        question: "What are the main ingredients?",
        answer:
          "The formula contains citric acid, lactic acid, formic acid, tartaric acid, O-phosphoric acid, calcium propionate, and a carrier base.",
      },
      {
        question: "How do organic acids work in poultry feed?",
        answer:
          "Organic acids can affect feed acidity and, depending on concentration and conditions, may influence microbial environments and digestive processes.",
      },
      {
        question: "Can GUTMAX support poultry digestive health?",
        answer:
          "Its ingredients are relevant to feed acidification and digestive nutrition research. However, a specific digestive-health improvement from GUTMAX requires product-specific evidence.",
      },
      {
        question: "Is GUTMAX suitable for broilers, layers and breeders?",
        answer:
          "Its formulation is intended for animal-feed applications, but the appropriate inclusion and suitability for each category must be established by a qualified poultry nutritionist based on feed composition and mineral balance.",
      },
      {
        question: "Can GUTMAX improve feed conversion ratio?",
        answer:
          "Some organic acid formulations have demonstrated performance effects in certain poultry studies. However, no specific FCR improvement can be guaranteed for GUTMAX without controlled product testing.",
      },
      {
        question: "Does GUTMAX kill harmful bacteria?",
        answer:
          "The label does not provide validated pathogen-specific antimicrobial results. GUTMAX should not be advertised as killing pathogens or sterilizing feed without appropriate evidence and authorization.",
      },
      {
        question: "Can GUTMAX help maintain feed quality?",
        answer:
          "Certain ingredients in the formulation have acidifying and preservative properties. Their effectiveness in finished feed depends on concentration, moisture, pH, and storage conditions.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "The supplied label states 1 kg per metric tonne of feed. This rate should be confirmed for the intended feed formulation and poultry category.",
      },
      {
        question: "Can GUTMAX be mixed with drinking water?",
        answer:
          "No drinking-water administration instructions are provided. GUTMAX is labeled as a powder feed acidifier for incorporation into feed.",
      },
      {
        question: "Is GUTMAX a probiotic, enzyme supplement, or antibiotic?",
        answer:
          "No. Based on its supplied composition, GUTMAX is a multi-acid feed acidifier â€” not a probiotic, digestive enzyme supplement, antibiotic, or veterinary medicine, and it cannot be assumed to prevent or treat disease.",
      },
      {
        question: "What is the pack size and shelf life, and how should it be stored?",
        answer:
          "The product is supplied in a 25 kg pack with a 24-month shelf life from manufacturing. Store in a cool, dry place away from direct sunlight, protected from moisture and contamination.",
      },
      {
        question: "What is the difference between GUTMAX and a liquid water acidifier?",
        answer:
          "GUTMAX is a powder intended for feed incorporation, while a liquid water acidifier is formulated for drinking water. The two have different administration routes and should not be substituted without technical guidance.",
      },
    ],
  },
  {
    id: "p5",
    slug: "avivita-gold",
    name: "Avivita Gold",
    index: "05",
    category: "Performance Optimizer",
    focusArea: "Comprehensive Poultry Nutrition",
    form: "Liquid feed supplement",
    shortDescription:
      "A comprehensive liquid feed supplement with vitamins, minerals, amino acids, enzymes and yeast for all-stage poultry nutrition.",
    detailedDescription:
      "Avivita Gold is a liquid feed supplement developed to provide complementary nutritional support for modern poultry farming operations. Its multi-component formulation brings together vitamins, minerals, lysine, choline chloride, phytase, digestive enzymes and Saccharomyces cerevisiae to support important nutritional and physiological functions from early-stage chick development through broiler growth and layer and breeder management.",
    image: avivitaGoldImg,
    imageAlt:
      "Poultriva Avivita Gold Performance Optimizer liquid poultry feed supplement for chicks, broilers, layers, and breeders.",
    applications: [
      "Complementing balanced poultry feeding programs",
      "Nutritional support across chick, broiler, layer and breeder stages",
      "Use under veterinary or poultry nutrition guidance",
    ],
    composition: "See declared composition (per 5 mL) below",
    packSizes: "1 Litre",
    dosage: "See dosage table below",
    storage:
      "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
    disclaimer: DISCLAIMER,
    seoTitle: "Avivita Gold | Poultry Liquid Feed Supplement | Poultriva",
    seoDescription:
      "Explore Poultriva Avivita Gold, a liquid poultry feed supplement with vitamins, minerals, enzymes, and amino acids for comprehensive nutritional support.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Advanced Nutrition. Optimized Performance.",
    heroIntro: [
      "Unlock the potential of your poultry flock with Avivita Gold, a comprehensive liquid nutritional feed supplement formulated with essential vitamins, minerals, amino acids, enzymes, and supportive nutritional ingredients.",
      "Designed to complement balanced feeding programs, Avivita Gold helps support healthy development, efficient nutrient utilization, digestive function, and overall flock vitality from early growth to productive maturity.",
    ],
    highlights: [
      "Multi-Vitamin & Mineral Formula",
      "Digestive Enzyme & Yeast Blend",
      "Nutritional Support for Growth & Productivity",
      "Suitable for Chicks, Broilers, Layers & Breeders",
      "Convenient 1 Litre Pack",
    ],
    overviewLabel: "About the product",
    overviewHeading: "Complete Nutritional Support for Every Growth Stage",
    overviewParagraphs: [
      "Avivita Gold by Poultriva is a liquid feed supplement developed to provide complementary nutritional support for modern poultry farming operations.",
      "Its multi-component formulation brings together vitamins, minerals, lysine, choline chloride, phytase, digestive enzymes, and Saccharomyces cerevisiae to support important nutritional and physiological functions.",
      "From early-stage chick development to broiler growth and layer and breeder management, Avivita Gold can be incorporated into veterinary-guided nutritional programs to help maintain flock condition and productive potential.",
      "The combination of micronutrients and digestion-supporting ingredients is intended to complement well-formulated feed, promoting nutritional balance and efficient use of dietary nutrients.",
    ],
    quickInfo: [
      ["Product Name", "Avivita Gold"],
      ["Brand", "Poultriva"],
      ["Product Category", "Liquid Animal/Poultry Feed Supplement"],
      ["Product Type", "Performance Optimizer"],
      ["Primary Application", "Poultry Nutritional Supplementation"],
      ["Target Categories", "Chicks, Broilers, Layers, Breeders"],
      ["Net Quantity", "1 Litre"],
      ["Shelf Life", "24 Months from Manufacturing"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Digestive Efficiency",
        heading: "Supports Better Nutrient Utilization",
        description:
          "The enzyme blend, phytase, and yeast ingredients are included to support digestive processes and help poultry utilize nutrients from their feed.",
      },
      {
        index: "02",
        title: "Growth & Development",
        heading: "Supports Healthy Body Development",
        description:
          "Essential amino acids, vitamins, and minerals contribute to normal growth, tissue development, and the nutritional requirements of growing birds.",
      },
      {
        index: "03",
        title: "Immune Function",
        heading: "Nutritional Support for Natural Defenses",
        description:
          "Vitamins A, C, and E, together with zinc and other micronutrients, help support normal immune system function and general flock health.",
      },
      {
        index: "04",
        title: "Feed Utilization",
        heading: "Supporting Efficient Feed Programs",
        description:
          "Enzyme-based nutritional support can help improve accessibility of certain feed nutrients, complementing feed-management practices aimed at efficient feed conversion.",
      },
      {
        index: "05",
        title: "Bone & Structural Health",
        heading: "Essential Mineral Support",
        description:
          "Calcium, phosphorus, and vitamin D3 contribute to normal skeletal development, bone maintenance, and important physiological functions.",
      },
      {
        index: "06",
        title: "Reproductive Nutrition",
        heading: "Support for Layers & Breeders",
        description:
          "Selected vitamins, minerals, and metabolic nutrients provide nutritional support for reproductive functions and productive flock management.",
      },
    ],
    detailedApplications: [
      {
        title: "Chick Development",
        heading: "A Strong Nutritional Start",
        description:
          "Provides supplementary vitamins, minerals, and digestive-support ingredients during the important early-growth period.",
        focus: [
          "Early-stage nutritional development",
          "Healthy skeletal and tissue growth",
          "Digestive and nutrient-utilization support",
          "General chick vitality",
        ],
      },
      {
        title: "Broiler Farming",
        heading: "Nutrition for Growth-Oriented Production",
        description:
          "Complements balanced broiler feed programs with micronutrients, amino acids, and enzyme-based nutritional support.",
        focus: [
          "Normal muscle and body development",
          "Efficient nutrient utilization",
          "Metabolic nutritional support",
          "Overall flock condition",
        ],
      },
      {
        title: "Layer Poultry",
        heading: "Supporting Productive Flock Health",
        description:
          "Provides complementary nutrition for laying birds, including ingredients relevant to bone health, metabolism, and general physiological maintenance.",
        focus: [
          "Mineral and vitamin supplementation",
          "Skeletal maintenance",
          "Nutritional support during production",
          "General vitality and body condition",
        ],
      },
      {
        title: "Breeder Poultry",
        heading: "Supporting Reproductive Flock Nutrition",
        description:
          "Supplies selected vitamins, minerals, and other nutrients that play roles in normal reproductive physiology and overall breeder health.",
        focus: [
          "Breeder body condition",
          "Normal reproductive function",
          "Micronutrient availability",
          "Long-term flock nutritional management",
        ],
      },
    ],
    formula: [
      {
        title: "Essential Vitamins",
        heading: "Supporting Metabolism & Cellular Functions",
        description:
          "Vitamins A, B-complex, C, D3, E, and K3 participate in processes related to metabolism, immune function, bone health, and other essential biological functions.",
      },
      {
        title: "Macro & Trace Minerals",
        heading: "Building Blocks for Healthy Development",
        description:
          "Calcium, phosphorus, zinc, iron, copper, manganese, selenium, iodine, and chromium contribute to a range of normal physiological and metabolic activities.",
      },
      {
        title: "Digestive Enzymes & Phytase",
        heading: "Supporting Nutrient Accessibility",
        description:
          "Enzymes help facilitate the breakdown of certain dietary components, while phytase can support the release of phosphorus associated with phytate in plant-based feed ingredients.",
      },
      {
        title: "Yeast-Based Support",
        heading: "Complementing Digestive Nutrition",
        description:
          "Saccharomyces cerevisiae is included as a yeast-based nutritional ingredient, complementing the formulation's digestive-support profile.",
      },
      {
        title: "Amino Acids & Choline",
        heading: "Supporting Growth-Related Metabolism",
        description:
          "Lysine contributes to protein synthesis, while choline supports normal lipid metabolism and other important cellular functions.",
      },
      {
        title: "Fat & Energy-Related Nutrition",
        heading: "Supporting Nutritional Balance",
        description:
          "The formulation declares crude fat associated with Omega-3 on its label, contributing to its broader nutrient profile.",
      },
    ],
    compositionGroups: [
      {
        title: "Vitamins",
        rows: [
          ["Vitamin A", "80,000 IU"],
          ["Vitamin D3", "25,000 IU"],
          ["Vitamin C", "250 mg"],
          ["Vitamin E", "125 mg"],
          ["Vitamin B1", "25 mg"],
          ["Vitamin B2", "50 mg"],
          ["Vitamin B6", "50 mg"],
          ["Vitamin B12", "40 mg"],
          ["Vitamin K3", "25 mg"],
          ["Vitamin H", "250 mcg"],
          ["Nicotinamide", "50 mg"],
        ],
      },
      {
        title: "Minerals & Trace Elements",
        rows: [
          ["Calcium", "200 mg"],
          ["Phosphorus", "100 mg"],
          ["Copper", "15 mg"],
          ["Zinc", "25 mg"],
          ["Iodine", "500 mcg"],
          ["Iron", "40 mg"],
          ["Selenium", "7.5 mg"],
          ["Manganese", "5 mg"],
          ["Chromium", "20 mg"],
        ],
      },
      {
        title: "Other Nutritional & Functional Ingredients",
        rows: [
          ["Crude Fat (Omega-3)", "69%"],
          ["Crude Protein", "20%"],
          ["Lactose", "12%"],
          ["Lysine", "0.50%"],
          ["Phytase", "0.90%"],
          ["Multi-Enzymes Mixture", "125 mg"],
          ["Choline Chloride", "100 mg"],
          ["Saccharomyces cerevisiae", "100 mg"],
          ["Pentol (as printed on label)", "75 mcg"],
        ],
      },
    ],
    compositionNote:
      "Declared composition is per 5 mL and transcribed from the supplied product label. All quantitative values are label declarations, not independently verified laboratory results, and require manufacturer verification before final publication.",
    dosageTable: [
      { category: "Chicks", quantity: "10 mL per 100 birds" },
      { category: "Broilers", quantity: "15â€“20 mL per 100 birds" },
      { category: "Layers", quantity: "15â€“20 mL per 100 birds" },
      { category: "Breeders", quantity: "20â€“25 mL per 100 birds" },
    ],
    dosageGuidance: [
      "Use Avivita Gold under the guidance of a qualified veterinarian or poultry nutrition consultant. The appropriate frequency, dilution, and administration method should be confirmed before use.",
      "Supplementation requirements may vary depending on age, feed composition, flock condition, and management practices.",
      "This product is a feed supplement and is not intended for the diagnosis, prevention, or treatment of disease. It does not replace balanced feed, vaccination, veterinary care, or prescribed treatment.",
    ],
    advantages: [
      {
        title: "Comprehensive Nutrient Profile",
        description:
          "Combines multiple vitamins, trace minerals, amino acids, and digestion-supporting ingredients in one liquid formulation.",
      },
      {
        title: "Multi-Stage Application",
        description:
          "Positioned for nutritional supplementation across chick, broiler, layer, and breeder categories.",
      },
      {
        title: "Enzyme-Based Formulation",
        description:
          "Contains a combination of digestive enzymes and phytase for nutritional support related to feed utilization.",
      },
      {
        title: "Liquid Supplement Format",
        description:
          "A liquid formulation designed for measured supplementation according to veterinary directions.",
      },
      {
        title: "Nutrition-Focused Approach",
        description:
          "Developed around ingredients associated with key physiological functions important in poultry production.",
      },
    ],
    handling: [
      "Follow the instructions on the product packaging.",
      "Check the manufacturing date, batch number, and expiry information before use.",
      "Avoid contamination during handling.",
      "Keep away from children and unauthorized use.",
      "Follow veterinary or professional guidance for administration.",
    ],
    faqs: [
      {
        question: "What is Avivita Gold?",
        answer:
          "Avivita Gold is a liquid animal and poultry feed supplement under the Poultriva brand. Its formulation includes vitamins, minerals, lysine, enzymes, phytase, yeast, and other nutritional ingredients intended to complement poultry feeding programs.",
      },
      {
        question: "Which poultry categories can use Avivita Gold?",
        answer:
          "The product label provides dosage quantities for chicks, broilers, layers, and breeders. Use should be based on veterinary or poultry nutrition advice.",
      },
      {
        question: "What are the principal nutritional benefits?",
        answer:
          "The ingredients support functions associated with growth, normal immunity, mineral metabolism, digestive activity, and nutrient utilization. Actual production outcomes depend on several factors, including overall feed and farm management.",
      },
      {
        question: "Can Avivita Gold improve feed conversion ratio (FCR)?",
        answer:
          "The product contains enzymes and other nutrients relevant to feed utilization. However, a specific FCR improvement cannot be guaranteed without controlled performance data.",
      },
      {
        question: "Is Avivita Gold a medicine or antibiotic?",
        answer:
          "No. Avivita Gold is labeled as a liquid feed supplement, not a medicine or antibiotic.",
      },
      {
        question: "Can Avivita Gold be administered through drinking water?",
        answer:
          "The supplied label specifies quantities per 100 birds but does not clearly define the administration route or dilution instructions. Confirm the appropriate method with the manufacturer or veterinarian before use.",
      },
      {
        question: "Can it be used alongside medication or vaccination programs?",
        answer:
          "Consult a veterinarian before combining the supplement with medications or other products. Avivita Gold does not replace prescribed medicines or vaccination programs.",
      },
      {
        question: "How should Avivita Gold be stored?",
        answer:
          "Store the product in a cool, dry environment, protected from direct sunlight. The labeled shelf life is 24 months from manufacturing.",
      },
    ],
  },
  {
    id: "p6",
    slug: "cholinova-60",
    name: "Cholinova 60",
    index: "06",
    category: "Metabolic Nutrition",
    focusArea: "Choline & Liver Nutrition",
    form: "Choline Chloride 60% feed supplement",
    shortDescription:
      "A concentrated 60% choline chloride feed supplement supporting normal liver fat metabolism, growth and cellular function.",
    detailedDescription:
      "Cholinova 60 by Poultriva is a concentrated choline chloride feed supplement developed to support the nutritional requirements of poultry and other applicable livestock species. Choline is an important nutrient involved in lipid metabolism, cell membrane structure, nervous system function and the transfer of methyl groups used in essential metabolic reactions.",
    image: cholinovaImg,
    imageAlt:
      "Poultriva Cholinova 60 concentrated choline chloride 60 percent animal and poultry feed supplement, 25 kg pack.",
    applications: [
      "Incorporation into professionally balanced feed formulations",
      "Dietary choline supplementation across poultry production stages",
      "Use under veterinary or feed-formulator guidance",
    ],
    composition: "Choline Chloride 60% (see composition below)",
    packSizes: "25 kg",
    dosage: "Inclusion rate to be set by a qualified feed formulator",
    storage:
      "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
    disclaimer: DISCLAIMER,
    seoTitle: "Cholinova 60 | Choline Chloride 60% Feed Supplement | Poultriva",
    seoDescription:
      "Explore Poultriva Cholinova 60, a 60% choline chloride feed supplement supporting normal liver fat metabolism, growth, and poultry nutritional requirements.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Precision Choline Nutrition. Optimized Poultry Performance.",
    heroIntro: [
      "Power poultry nutrition with Cholinova 60, a concentrated 60% Choline Chloride feed supplement designed to provide an essential nutrient involved in fat metabolism, normal liver function, cellular development, and growth.",
      "Developed for incorporation into professionally balanced animal-feed formulations, Cholinova 60 helps support adequate dietary choline intake across important stages of poultry production.",
    ],
    highlights: [
      "60% Choline Chloride Composition",
      "Supports Normal Liver Fat Metabolism",
      "Contributes to Healthy Growth & Development",
      "Essential for Cellular & Nervous System Function",
      "Nutritional Support for Layers & Breeders",
      "25 kg Bulk Packaging",
    ],
    overviewLabel: "About Cholinova 60",
    overviewHeading: "Essential Choline Nutrition for Modern Poultry Farming",
    overviewParagraphs: [
      "Cholinova 60 by Poultriva is a concentrated choline chloride feed supplement developed to support the nutritional requirements of poultry and other applicable livestock species.",
      "Choline is an important nutrient involved in lipid metabolism, cell membrane structure, nervous system function, and the transfer of methyl groups used in essential metabolic reactions.",
      "In poultry, adequate dietary choline is particularly important during early growth, when nutritional deficiencies may affect normal skeletal development and overall performance.",
      "Cholinova 60 provides a concentrated source of choline chloride that can be incorporated into balanced feed formulations under professional nutritional guidance.",
      "By supporting normal fat transport and utilization in the liver, choline plays a valuable role in maintaining metabolic function and the nutritional foundation of productive poultry flocks.",
    ],
    quickInfo: [
      ["Product Name", "Cholinova 60"],
      ["Brand", "Poultriva"],
      ["Product Category", "Animal & Poultry Feed Supplement"],
      ["Active Ingredient", "Choline Chloride"],
      ["Declared Concentration", "60%"],
      ["Carrier", "Corn-based carrier (to be confirmed)"],
      ["Primary Purpose", "Choline Supplementation & Metabolic Nutrition"],
      ["Target Applications", "Poultry Feed Formulation"],
      ["Net Quantity", "25 kg"],
      ["Shelf Life", "24 Months from Manufacturing"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Liver Function Support",
        heading: "Maintaining Healthy Fat Metabolism",
        description:
          "Choline is required for the formation of phospholipids involved in transporting fats from the liver. Adequate dietary choline helps maintain normal lipid handling and liver metabolic function.",
      },
      {
        index: "02",
        title: "Healthy Growth & Development",
        heading: "Supporting Early-Stage Nutritional Needs",
        description:
          "Choline contributes to cell structure and growth-related metabolic processes, making adequate dietary intake particularly important for young and rapidly growing poultry.",
      },
      {
        index: "03",
        title: "Skeletal & Joint Development",
        heading: "Nutritional Support for Normal Cartilage Formation",
        description:
          "Choline is involved in normal skeletal development in young birds. Dietary deficiency can contribute to growth problems and perosis, a leg condition that can also have other nutritional causes.",
      },
      {
        index: "04",
        title: "Reproductive Nutrition",
        heading: "Supporting the Needs of Layers & Breeders",
        description:
          "Choline is a natural component of eggs and supports phospholipid formation and other metabolic functions relevant to reproductive nutrition.",
      },
      {
        index: "05",
        title: "Cellular Metabolism",
        heading: "Essential Support at the Cellular Level",
        description:
          "As a precursor of phosphatidylcholine, choline helps maintain cell membrane structure and the normal function of tissues throughout the body.",
      },
      {
        index: "06",
        title: "Metabolic Efficiency",
        heading: "Supporting Essential Nutrient Pathways",
        description:
          "Choline contributes methyl groups to metabolic reactions and helps support normal biochemical processes involved in nutrient metabolism.",
      },
    ],
    detailedApplications: [
      {
        title: "Chick Nutrition",
        heading: "Supporting a Healthy Start",
        description:
          "Young chicks require adequate choline for normal growth, cartilage formation, and metabolic development.",
        focus: [
          "Early growth and development",
          "Normal skeletal and cartilage formation",
          "Prevention of dietary choline insufficiency",
          "General metabolic nutrition",
        ],
      },
      {
        title: "Broiler Nutrition",
        heading: "Supporting Growth-Focused Feeding Programs",
        description:
          "Choline participates in metabolic pathways associated with body development, fat handling, and normal cellular function.",
        focus: [
          "Growth-related nutrient requirements",
          "Normal hepatic lipid metabolism",
          "Cell membrane development",
          "Balanced dietary choline supply",
        ],
      },
      {
        title: "Layer Nutrition",
        heading: "Supporting Productive Egg-Laying Flocks",
        description:
          "Choline is an important component of egg phospholipids and contributes to the metabolic processes required for normal physiological function.",
        focus: [
          "Nutritional support during egg production",
          "Liver fat metabolism",
          "Normal cellular function",
          "Maintaining dietary nutrient balance",
        ],
      },
      {
        title: "Breeder Nutrition",
        heading: "Supporting Reproductive Flock Management",
        description:
          "Breeder feeding programs must provide appropriate nutrient levels to support bird condition and reproductive function.",
        focus: [
          "Dietary choline adequacy",
          "Reproductive nutritional support",
          "Normal metabolic processes",
          "General breeder flock condition",
        ],
      },
    ],
    formula: [
      {
        title: "Lipid Transport & Liver Metabolism",
        heading: "Supporting Normal Fat Handling",
        description:
          "Choline is needed for phosphatidylcholine synthesis, which contributes to the assembly and movement of lipids within the body, making adequate choline nutrition important for normal fat transport and liver function.",
      },
      {
        title: "Phospholipid & Cell Membrane Formation",
        heading: "Maintaining Cellular Integrity",
        description:
          "Choline is a structural component of phospholipids found in cell membranes. These phospholipids help maintain cellular integrity and support normal tissue development.",
      },
      {
        title: "Methyl Group Metabolism",
        heading: "Supporting Biochemical Reactions",
        description:
          "Through its metabolic conversion to betaine, choline can provide methyl groups for important biochemical reactions, relevant to normal nutrient metabolism and interactions with other dietary methyl donors.",
      },
      {
        title: "Acetylcholine Synthesis",
        heading: "Supporting Nervous System Function",
        description:
          "Choline is a precursor of acetylcholine, a neurotransmitter involved in communication between nerve cells and in neuromuscular function.",
      },
      {
        title: "Cartilage Development",
        heading: "Supporting Normal Skeletal Growth",
        description:
          "Adequate choline intake contributes to normal cartilage development in growing poultry. Choline deficiency is one of several possible nutritional contributors to perosis in young birds.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Composition",
        rows: [
          ["Choline Chloride", "60%"],
          ["Carrier", "Corn-based carrier*"],
          ["Net Quantity", "25 kg"],
          ["Shelf Life", "24 Months from Manufacturing"],
          ["Application", "Animal & Poultry Feed Supplement"],
        ],
      },
    ],
    compositionNote:
      "The supplied label prints the carrier as \u201CCorn Con.\u201D The exact material name should be confirmed with the manufacturer before publication. Choline chloride is an essential nutrient involved in phospholipid synthesis, fat metabolism, methyl-group metabolism and acetylcholine production; its concentrated 60% content allows controlled incorporation into feed according to a qualified nutritionist's recommendations.",
    dosageGuidance: [
      "Cholinova 60 is intended for incorporation into animal and poultry feed formulations as advised by a qualified veterinarian, feed formulator, or poultry nutritionist. The inclusion level should be determined according to species, production category, bird age, the choline content of existing feed ingredients, and overall methyl-donor balance.",
      "Step 01 â€” Evaluate nutritional requirements: assess the choline contribution from the complete feed and determine whether additional supplementation is necessary.",
      "Step 02 â€” Calculate the appropriate inclusion based on the feed formulation and declared choline chloride concentration.",
      "Step 03 â€” Ensure uniform feed mixing using suitable manufacturing and premixing procedures to distribute the supplement evenly throughout the ration.",
      "Step 04 â€” Monitor the feeding program and evaluate the flock's condition with professional guidance.",
      "No numerical feed inclusion rate is stated on the supplied label. Dosage and mixing ratios must be confirmed with the manufacturer or a qualified animal nutritionist before use.",
    ],
    advantages: [
      {
        title: "High-Concentration Formula",
        description:
          "Provides a declared 60% choline chloride concentration for incorporation into balanced feed formulations.",
      },
      {
        title: "Essential Metabolic Nutrient",
        description:
          "Supplies a nutrient required for several metabolic and structural functions, including normal liver lipid transport.",
      },
      {
        title: "Targeted Nutritional Application",
        description:
          "Useful where a feed formulation requires additional choline to satisfy established dietary requirements.",
      },
      {
        title: "Multiple Production Categories",
        description:
          "Relevant to professionally formulated nutritional programs for chicks, broilers, layers, and breeders.",
      },
      {
        title: "Bulk Pack Convenience",
        description:
          "Supplied in a 25 kg pack suitable for commercial purchasing and feed-formulation operations.",
      },
      {
        title: "Farm-Focused Nutrition",
        description:
          "Designed around the practical role of choline in animal nutrition and feed management.",
      },
    ],
    handling: [
      "Keep the product protected from moisture and excessive heat.",
      "Store in a clean, dry, designated feed-storage environment.",
      "Prevent contamination by foreign materials.",
      "Follow the manufacturer's handling and mixing recommendations.",
      "Verify batch number, manufacturing date, and expiry information before use.",
      "Store securely away from children and unauthorized access.",
    ],
    faqs: [
      {
        question: "What is Cholinova 60?",
        answer:
          "Cholinova 60 is a Poultriva-branded feed supplement containing a declared 60% choline chloride concentration. It is intended to supply supplemental choline in professionally balanced animal-feed formulations.",
      },
      {
        question: "Why is choline important for poultry?",
        answer:
          "Choline contributes to liver fat metabolism, phospholipid synthesis, cell membrane development, methyl-group metabolism, and nervous system function. Adequate dietary choline is particularly important during early growth.",
      },
      {
        question: "Does Cholinova 60 support liver health?",
        answer:
          "Choline is involved in normal lipid transport and utilization in the liver. Ensuring adequate choline intake can support normal hepatic metabolism, but the supplement is not a treatment for liver disease.",
      },
      {
        question: "Can Cholinova 60 help with perosis in chicks?",
        answer:
          "Dietary choline deficiency is one recognized contributor to perosis in young poultry. Appropriate nutritional correction may help address a choline deficiency, but perosis can have other causes and requires professional evaluation.",
      },
      {
        question: "Is Cholinova 60 suitable for broilers and layers?",
        answer:
          "Choline is nutritionally relevant to both broilers and laying hens. However, their dietary requirements and need for supplementation differ, so inclusion must be based on the complete feed formulation.",
      },
      {
        question: "Does Cholinova 60 improve egg production?",
        answer:
          "Choline is important for egg phospholipids and normal metabolism. Specific improvements in egg production, egg size, or hatchability cannot be guaranteed without product-specific performance evidence.",
      },
      {
        question: "How much Cholinova 60 should be mixed with feed?",
        answer:
          "The supplied label does not provide a numerical inclusion rate. The recommended quantity must be established by a qualified feed formulator or veterinarian based on the complete ration.",
      },
      {
        question: "Can Cholinova 60 be mixed with drinking water?",
        answer:
          "The product label does not establish suitability for drinking-water administration. Use it only through a manufacturer-confirmed route and formulation.",
      },
      {
        question: "What is the pack size?",
        answer: "Cholinova 60 is supplied in a 25 kg pack.",
      },
      {
        question: "How should the product be stored?",
        answer:
          "Store Cholinova 60 in a cool and dry location away from direct sunlight, following the manufacturer's storage instructions.",
      },
      {
        question: "Is Cholinova 60 an antibiotic or veterinary medicine?",
        answer:
          "No. Cholinova 60 is labeled as an animal and poultry feed supplement, not an antibiotic or veterinary medicine.",
      },
    ],
  },
  {
    id: "p7",
    slug: "vaynex-a",
    name: "Vaynex-A",
    index: "07",
    category: "Vitamin Supplement",
    focusArea: "Vitamin A Nutrition",
    form: "Water-miscible Vitamin A supplement",
    shortDescription:
      "A concentrated, water-miscible Vitamin A supplement (100,000 IU/mL as Vitamin A Palmitate) for hens and chicks.",
    detailedDescription:
      "Vaynex-A by Poultriva is a concentrated Vitamin A nutritional supplement developed to provide essential vitamin support for hens and chicks. Vitamin A contributes to visual function, epithelial tissue maintenance, immune system activity, growth and reproductive processes. Its water-miscible format allows administration through drinking water according to label directions and professional veterinary guidance.",
    image: vaynexImg,
    imageAlt:
      "Poultriva Vaynex-A water-miscible Vitamin A poultry supplement bottle with 100,000 IU of Vitamin A per mL for hens and chicks.",
    applications: [
      "Vitamin A supplementation through drinking water",
      "Nutritional support for hens, chicks and growing poultry",
      "Use under veterinary or poultry nutrition guidance",
    ],
    composition: "Vitamin A 100,000 IU per mL (as Vitamin A Palmitate)",
    packSizes: "See label (pack volume to be confirmed)",
    dosage: "2â€“5 mL per 100 birds daily in drinking water",
    storage: "Store as directed on the container, protected from unsuitable temperature and light.",
    disclaimer: DISCLAIMER,
    seoTitle: "Vaynex-A | Vitamin A Poultry Supplement for Hens & Chicks | Poultriva",
    seoDescription:
      "Discover Poultriva Vaynex-A, a water-miscible Vitamin A supplement containing 100,000 IU/mL to support normal vision, immunity, and growth in poultry.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Essential Vitamin A. Healthier Growth. Stronger Nutritional Support.",
    heroIntro: [
      "Support the nutritional foundation of your poultry flock with Vaynex-A, a concentrated, water-miscible Vitamin A supplement formulated for convenient administration through drinking water.",
      "Containing 100,000 IU of Vitamin A per mL as Vitamin A Palmitate, Vaynex-A delivers an essential fat-soluble vitamin involved in normal vision, immune function, tissue development, and reproductive physiology.",
    ],
    highlights: [
      "100,000 IU Vitamin A per mL",
      "Vitamin A Palmitate Formulation",
      "Water-Miscible Supplement",
      "Supports Normal Vision",
      "Supports Immune System Function",
      "Contributes to Healthy Growth & Development",
      "Nutritional Support for Hens & Chicks",
    ],
    overviewLabel: "About Vaynex-A",
    overviewHeading: "Targeted Vitamin A Nutrition for Poultry Health",
    overviewParagraphs: [
      "Vaynex-A by Poultriva is a concentrated Vitamin A nutritional supplement developed to provide essential vitamin support for hens and chicks.",
      "Vitamin A plays an important role in poultry physiology, contributing to visual function, epithelial tissue maintenance, immune system activity, growth, and reproductive processes.",
      "The formulation contains Vitamin A as Vitamin A Palmitate, a commonly used supplemental form of preformed Vitamin A.",
      "Its water-miscible format allows the supplement to be administered through drinking water according to the directions stated on the product label and professional veterinary guidance.",
      "By supporting adequate Vitamin A intake, Vaynex-A can complement balanced feeding programs and help maintain the normal physiological functions essential for poultry health and productivity.",
    ],
    quickInfo: [
      ["Product Name", "Vaynex-A"],
      ["Brand", "Poultriva"],
      ["Category", "Poultry Vitamin Supplement"],
      ["Product Type", "Water-Miscible Vitamin A Supplement"],
      ["Active Nutrient", "Vitamin A"],
      ["Vitamin Form", "Vitamin A Palmitate"],
      ["Strength", "100,000 IU per mL"],
      ["Administration", "Through Drinking Water"],
      ["Target Poultry", "Hens & Chicks"],
      ["Primary Application", "Vitamin A Nutritional Supplementation"],
    ],
    benefits: [
      {
        index: "01",
        title: "Vision Support",
        heading: "Essential Nutrition for Healthy Eyesight",
        description:
          "Vitamin A is necessary for normal visual function, particularly in the retina, where it participates in light detection and visual adaptation, helping maintain the visual processes birds use to respond to their environment.",
      },
      {
        index: "02",
        title: "Immune System Support",
        heading: "Supporting Natural Defense Mechanisms",
        description:
          "Vitamin A plays an important role in maintaining normal immune system function and supporting the integrity of protective epithelial tissues, contributing to the body's normal defenses against environmental challenges.",
      },
      {
        index: "03",
        title: "Healthy Growth",
        heading: "Supporting Normal Development",
        description:
          "Vitamin A is involved in cellular differentiation and tissue development, making it particularly important during the early growth stages of poultry and supporting normal physiological development.",
      },
      {
        index: "04",
        title: "Reproductive Nutrition",
        heading: "Supporting Productive Hens",
        description:
          "Vitamin A contributes to normal reproductive physiology and tissue function, and adequate levels are important within complete nutritional programs for laying and breeding poultry.",
      },
      {
        index: "05",
        title: "Epithelial Tissue Health",
        heading: "Maintaining Natural Protective Barriers",
        description:
          "Vitamin A supports the normal development and maintenance of epithelial tissues found in the eyes, respiratory tract, digestive tract, and other body surfaces that form important health barriers.",
      },
      {
        index: "06",
        title: "Nutritional Balance",
        heading: "Convenient Targeted Supplementation",
        description:
          "The water-miscible format provides a practical way to administer supplementary Vitamin A when professional nutritional assessment indicates additional intake is appropriate.",
      },
    ],
    detailedApplications: [
      {
        title: "Chicks",
        heading: "A Healthy Nutritional Foundation",
        description:
          "Young chicks require appropriate Vitamin A intake to support normal vision, cellular development, epithelial tissue health, and immune function.",
        focus: [
          "Normal early-stage development",
          "Vision and eye health",
          "Epithelial tissue maintenance",
          "Immune nutritional support",
          "Dietary Vitamin A adequacy",
        ],
      },
      {
        title: "Growing Poultry",
        heading: "Supporting Normal Development",
        description:
          "As birds grow, Vitamin A continues to play important roles in tissue differentiation, visual function, and maintenance of physiological systems.",
        focus: [
          "Normal cellular development",
          "Vision maintenance",
          "Immune function",
          "Tissue health",
          "Balanced micronutrient nutrition",
        ],
      },
      {
        title: "Laying Hens",
        heading: "Supporting the Nutritional Needs of Production",
        description:
          "Adequate Vitamin A nutrition is important for the normal physiological and reproductive functions of laying hens.",
        focus: [
          "Reproductive nutritional support",
          "Normal vision",
          "Epithelial tissue maintenance",
          "Immune system function",
          "Overall nutritional balance",
        ],
      },
      {
        title: "Breeder Flocks",
        heading: "Supporting Reproductive Nutrition",
        description:
          "Vitamin A is relevant to reproductive physiology and embryonic development. Appropriate dietary intake is an important part of complete breeder nutritional management.",
        focus: [
          "Normal reproductive function",
          "Embryonic nutritional development",
          "Maintenance of breeder health",
          "Balanced Vitamin A intake",
        ],
      },
    ],
    formula: [
      {
        title: "Visual Function",
        heading: "Supporting the Retina & Visual Cycle",
        description:
          "Vitamin A contributes to the formation of visual pigments required by the retina, making adequate Vitamin A important for normal eyesight and visual adaptation.",
      },
      {
        title: "Immune Regulation",
        heading: "Supporting Immune Cell Function",
        description:
          "Vitamin A supports the development and functioning of immune cells and contributes to the maintenance of healthy protective tissues; deficient intake can impair normal immune function.",
      },
      {
        title: "Cellular Differentiation",
        heading: "Regulating Normal Development",
        description:
          "Vitamin A metabolites, particularly retinoic acid, participate in the regulation of gene expression associated with cell development and differentiation, contributing to normal growth and tissue maintenance.",
      },
      {
        title: "Epithelial Protection",
        heading: "Maintaining Healthy Barriers",
        description:
          "Vitamin A supports the maintenance of epithelial linings in the respiratory, digestive, ocular, and other systems, an important part of normal animal physiology.",
      },
      {
        title: "Reproductive Function",
        heading: "Supporting Breeding Birds",
        description:
          "Vitamin A is involved in reproductive processes and embryonic development, making appropriate Vitamin A levels important in nutritional programs for breeding birds.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Nutritional Value (per mL)",
        rows: [
          ["Vitamin A", "100,000 IU"],
          ["Vitamin A Source", "Vitamin A Palmitate"],
          ["Physical Form", "Water-Miscible Liquid"],
          ["Target Poultry", "Hens & Chicks"],
          ["Administration Route", "Drinking Water"],
        ],
      },
    ],
    compositionNote:
      "Vitamin A Palmitate is an esterified form of preformed Vitamin A providing Vitamin A activity for normal vision, epithelial maintenance, immune function and cellular differentiation. Product strength and formulation details are transcribed from the supplied bottle label; a formal certificate of analysis and manufacturer technical data sheet should be used to verify final published specifications.",
    dosageTable: [
      { category: "Hens & Chicks", quantity: "2â€“5 mL per 100 birds daily (in drinking water)" },
    ],
    dosageGuidance: [
      "Step 01 â€” Determine flock requirements: assess the poultry category, age, feed composition, and nutritional requirements with professional guidance.",
      "Step 02 â€” Measure the supplement according to the label and veterinarian-approved supplementation plan.",
      "Step 03 â€” Mix with drinking water: disperse the measured quantity into the drinking-water system using a manufacturer-approved dilution and mixing procedure.",
      "Step 04 â€” Follow professional guidance to ensure supplementation is appropriate for the flock's existing Vitamin A intake.",
      "Vitamin A is a fat-soluble vitamin and excessive supplementation can be harmful. Consider the total Vitamin A supplied by the complete feed, premixes, water supplements and other products before administration.",
      "The supplied label does not specify a water dilution volume or treatment duration beyond daily administration. Confirm these details with the manufacturer or a qualified veterinarian.",
    ],
    advantages: [
      {
        title: "Concentrated Vitamin A Source",
        description:
          "Provides a declared 100,000 IU of Vitamin A per mL for measured supplementation.",
      },
      {
        title: "Water-Miscible Formulation",
        description:
          "Designed for administration through poultry drinking water according to the product's directions.",
      },
      {
        title: "Targeted Nutrient Delivery",
        description:
          "Focuses specifically on Vitamin A rather than combining multiple unrelated supplemental ingredients.",
      },
      {
        title: "Support Across Physiological Functions",
        description:
          "Supplies a nutrient important for normal vision, immune activity, growth, tissue health, and reproductive processes.",
      },
      {
        title: "Application for Hens & Chicks",
        description: "Labeled for poultry supplementation involving hens and chicks.",
      },
      {
        title: "Practical Nutritional Integration",
        description:
          "Can complement well-balanced poultry diets under appropriate veterinary or nutritional supervision.",
      },
    ],
    handling: [
      "Follow the storage instructions on the original product container.",
      "Keep the container securely closed when not in use.",
      "Prevent contamination during handling and mixing.",
      "Protect the product from unsuitable temperature and light exposure according to manufacturer guidance.",
      "Use an accurate measuring device when preparing drinking-water supplementation.",
      "Avoid unnecessary simultaneous use of multiple Vitamin A-containing supplements to prevent excessive total intake.",
      "Keep away from children and unauthorized use, and check batch, manufacturing and expiry details before administration.",
    ],
    faqs: [
      {
        question: "What is Vaynex-A?",
        answer:
          "Vaynex-A is a Poultriva-branded water-miscible Vitamin A supplement formulated for hens and chicks. It contains Vitamin A as Vitamin A Palmitate.",
      },
      {
        question: "How much Vitamin A does Vaynex-A contain?",
        answer:
          "According to the supplied label, each millilitre contains 100,000 IU of Vitamin A.",
      },
      {
        question: "What are the main nutritional benefits of Vitamin A for poultry?",
        answer:
          "Vitamin A contributes to normal vision, immune system function, epithelial tissue maintenance, cellular development, and reproductive physiology.",
      },
      {
        question: "Can Vaynex-A support eyesight?",
        answer:
          "Yes. Vitamin A is essential for normal retinal function and the visual cycle. Adequate Vitamin A intake supports normal eyesight, but the supplement is not a treatment for eye disease.",
      },
      {
        question: "Does Vaynex-A improve poultry immunity?",
        answer:
          "Vitamin A supports normal immune function. It should not be interpreted as guaranteeing disease resistance or replacing vaccination and other health-management practices.",
      },
      {
        question: "Is Vaynex-A suitable for chicks?",
        answer:
          "The label identifies chicks as a target category. Supplementation should account for chick age, existing diet, and professional veterinary advice.",
      },
      {
        question: "Can Vaynex-A be used for laying hens?",
        answer:
          "Yes. The label identifies hens as a target category. Vitamin A contributes to normal reproductive physiology and overall nutritional health.",
      },
      {
        question: "Does Vaynex-A increase egg production?",
        answer:
          "Adequate Vitamin A is important for reproductive nutrition, but a specific increase in egg production cannot be guaranteed without controlled product-specific evidence.",
      },
      {
        question: "How should Vaynex-A be administered?",
        answer:
          "The label directs administration through drinking water, with a stated quantity of 2â€“5 mL per 100 birds daily. Confirm the appropriate dilution and suitability of the dose before use.",
      },
      {
        question: "Can Vitamin A be given every day?",
        answer:
          "The supplied label describes daily administration. However, excessive Vitamin A can be harmful, so the frequency and duration must be assessed alongside the flock's complete dietary Vitamin A intake.",
      },
      {
        question: "Is Vaynex-A a multivitamin supplement?",
        answer:
          "No. Based on the supplied label, Vaynex-A is a concentrated Vitamin A supplement rather than a broad-spectrum multivitamin formulation.",
      },
      {
        question: "Is Vaynex-A an antibiotic or veterinary medicine?",
        answer:
          "It is presented as a vitamin nutritional supplement, not an antibiotic or treatment for poultry diseases.",
      },
    ],
  },
  {
    id: "p8",
    slug: "uricova",
    name: "Uricova",
    index: "08",
    category: "Metabolic Nutrition",
    focusArea: "Kidney & Uric Acid Metabolism",
    form: "Liquid feed supplement",
    shortDescription:
      "A specialized liquid supplement with citrate and electrolyte ingredients for veterinary-guided poultry renal and metabolic support.",
    detailedDescription:
      "URICOVA is a liquid feed supplement developed under the Poultriva brand with a formulation centered on citrate compounds, electrolyte salts, Vitamin K3 and other declared ingredients. In poultry the kidneys perform essential functions associated with nitrogenous waste elimination, fluid regulation and mineral balance, and uric acid is a major end product of nitrogen metabolism normally eliminated through the urinary system. URICOVA is intended for use as part of a professionally managed poultry care and nutrition program under veterinary guidance.",
    image: uricovaImg,
    imageAlt:
      "Poultriva URICOVA 1 litre liquid poultry feed supplement with citrate and electrolyte ingredients for kidney-focused nutritional management.",
    applications: [
      "Kidney-focused nutritional and metabolic management",
      "Use within professionally managed poultry care programs",
      "Administration under veterinary guidance",
    ],
    composition: "Citrate compounds, electrolyte salts and Vitamin K3 (see composition below)",
    packSizes: "1 Litre",
    dosage:
      "10â€“20 mL per 100 birds for 7â€“20 days, or as directed by a veterinarian (label-declared)",
    storage:
      "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
    disclaimer: DISCLAIMER,
    seoTitle: "URICOVA | Poultry Kidney & Uric Acid Support Supplement | Poultriva",
    seoDescription:
      "Discover Poultriva URICOVA, a specialized liquid poultry supplement formulated with citrate and electrolyte ingredients for veterinary-guided renal and metabolic management.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Supporting Kidney Health. Promoting Nutritional Balance.",
    heroIntro: [
      "Introducing URICOVA by Poultriva, a specialized liquid animal and poultry feed supplement formulated with citrate compounds, electrolyte salts, Vitamin K3, and additional ingredients.",
      "Designed for use under veterinary guidance, URICOVA is positioned to complement poultry-management programs focused on renal health, metabolic balance, and overall flock wellbeing.",
    ],
    highlights: [
      "Kidney-Focused Nutritional Formulation",
      "Citrate & Electrolyte Ingredients",
      "Uric Acid Metabolism Support Focus",
      "Specialized Poultry Supplement",
      "Veterinary-Guided Administration",
      "Convenient 1 Litre Packaging",
    ],
    overviewLabel: "About Uricova",
    overviewHeading: "Specialized Nutritional Support for Poultry Kidney Health",
    overviewParagraphs: [
      "URICOVA is a liquid feed supplement developed under the Poultriva brand with a formulation centered on citrate compounds, electrolyte salts, Vitamin K3, and other declared ingredients.",
      "In poultry, the kidneys perform essential functions associated with nitrogenous waste elimination, fluid regulation, and mineral balance.",
      "Uric acid is a major end product of nitrogen metabolism in birds and is normally eliminated through the urinary system.",
      "Maintaining healthy renal function is therefore important for normal metabolic processes and overall flock wellbeing.",
      "URICOVA is intended for use as part of a professionally managed poultry care and nutrition program. Its formulation and suitability for individual flocks should be assessed by a qualified veterinarian.",
    ],
    quickInfo: [
      ["Product Name", "URICOVA"],
      ["Brand", "Poultriva"],
      ["Product Category", "Animal & Poultry Feed Supplement"],
      ["Product Format", "Liquid"],
      ["Formulation Focus", "Citrate & Electrolyte-Based Ingredients"],
      ["Primary Application", "Renal & Metabolic Nutritional Support"],
      ["Target Application", "Poultry, under veterinary guidance"],
      ["Net Quantity", "1 Litre"],
      ["Shelf Life", "24 Months from Manufacturing"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Renal Health Focus",
        heading: "Supporting Kidney-Centered Management",
        description:
          "Developed for consideration within poultry health programs focused on normal renal function and appropriate veterinary management.",
      },
      {
        index: "02",
        title: "Uric Acid Metabolism",
        heading: "Focused on Poultry Waste Elimination",
        description:
          "Uric acid metabolism and elimination are important aspects of poultry physiology. URICOVA's intended use focuses on this area, although a direct uric-acid-lowering effect requires product-specific validation.",
      },
      {
        index: "03",
        title: "Electrolyte Composition",
        heading: "Supporting Nutritional Balance",
        description:
          "The formulation declares sodium and potassium salts. These are associated with electrolyte physiology, although their net effects depend on formulation accuracy, administered dose, and the bird's condition.",
      },
      {
        index: "04",
        title: "Metabolic Management",
        heading: "A Targeted Formulation Approach",
        description:
          "URICOVA is positioned for use alongside professional assessment of diet, mineral balance, hydration, and metabolic health.",
      },
      {
        index: "05",
        title: "Flock Health Management",
        heading: "Complementing Responsible Poultry Care",
        description:
          "The product can be evaluated as one component of a broader program that prioritizes appropriate feed, clean drinking water, environmental management, and veterinary monitoring.",
      },
      {
        index: "06",
        title: "Practical Liquid Format",
        heading: "Designed for Measured Use",
        description:
          "Available in a liquid format for measured administration according to confirmed manufacturer instructions and veterinary recommendations.",
      },
    ],
    detailedApplications: [
      {
        title: "Chick Management",
        heading: "Supporting Early-Stage Health Monitoring",
        description:
          "During early development, chicks depend on balanced nutrition, appropriate mineral intake, and adequate hydration.",
        focus: [
          "Normal renal development",
          "Balanced dietary minerals",
          "Clean drinking-water availability",
          "Appropriate chick-feed composition",
          "Early veterinary evaluation of abnormalities",
        ],
      },
      {
        title: "Broiler Management",
        heading: "Supporting Growth-Stage Metabolic Care",
        description:
          "Rapid growth places significant demands on nutrient metabolism and overall flock management.",
        focus: [
          "Nutritionally balanced feeding",
          "Adequate water availability",
          "Renal health monitoring",
          "Appropriate mineral and protein intake",
          "Veterinary assessment of metabolic abnormalities",
        ],
      },
      {
        title: "Layer Management",
        heading: "Supporting Productive Flock Wellbeing",
        description:
          "Laying hens require carefully balanced mineral nutrition, particularly calcium and phosphorus, alongside adequate hydration.",
        focus: [
          "Kidney function monitoring",
          "Mineral balance",
          "Water intake management",
          "Appropriate layer-feed formulation",
          "General physiological health",
        ],
      },
      {
        title: "Breeder Management",
        heading: "Supporting Long-Term Flock Health",
        description:
          "Breeder poultry programs require consistent nutritional management and veterinary oversight.",
        focus: [
          "Renal and metabolic health assessment",
          "Balanced electrolyte nutrition",
          "Appropriate feed formulations",
          "Long-term flock management",
          "Reproductive flock wellbeing",
        ],
      },
    ],
    formula: [
      {
        title: "Potassium Citrate",
        heading: "Citrate-Based Formulation Component",
        description:
          "Potassium citrate is a potassium-containing citrate salt. Citrates participate in acid-base chemistry, but the specific physiological effect of URICOVA cannot be determined from the ingredient name alone.",
      },
      {
        title: "Sodium Citrate",
        heading: "Sodium & Citrate Ingredient",
        description:
          "Sodium citrate contributes sodium and citrate to the formulation. Its role and physiological effects must be evaluated in the context of the complete ingredient concentrations and administration instructions.",
      },
      {
        title: "Potassium Chloride",
        heading: "Potassium Electrolyte Source",
        description:
          "Potassium is an essential electrolyte involved in normal cellular and neuromuscular functions. Supplementation must be carefully controlled, particularly when renal function is impaired.",
      },
      {
        title: "Ammonium Chloride",
        heading: "Specialized Formulation Ingredient",
        description:
          "Ammonium chloride influences acid-base physiology and requires appropriate dosing. Its inclusion should be reviewed by a qualified veterinary nutrition specialist.",
      },
      {
        title: "Vitamin K3",
        heading: "Vitamin K Nutritional Activity",
        description:
          "Vitamin K3, also known as menadione, is associated with Vitamin K activity, which is important for normal blood-clotting processes. Its presence does not, by itself, establish a kidney-protective effect.",
      },
      {
        title: "Additional Declared Ingredients",
        heading: "Formulation-Specific Components",
        description:
          "The label also lists an unspecified anti-gout agent and a sorbitol-type excipient. The exact identity, purpose, safety, and regulatory classification of these components require manufacturer confirmation.",
      },
    ],
    compositionGroups: [
      {
        title: "Each 5 mL Contains (label-declared)",
        rows: [
          ["Potassium Citrate", "18.0 g"],
          ["Sodium Citrate", "12.0 g"],
          ["Anti-gout Agent", "15 mg"],
          ["Vitamin K3", "0.12 g"],
          ["Ammonium Chloride", "15 g"],
          ["Potassium Chloride", "15 g"],
          ["Sorbital (as excipient)", "q.s."],
        ],
      },
      {
        title: "General Product Details",
        rows: [
          ["Declared Form", "Liquid"],
          ["Net Quantity", "1 Litre"],
          ["Shelf Life", "24 Months"],
          ["Product Classification", "Animal & Poultry Feed Supplement"],
          ["Storage", "Cool, Dry Place"],
          ["Sunlight Protection", "Protect from Direct Sunlight"],
        ],
      },
    ],
    compositionNote:
      "CRITICAL TECHNICAL VERIFICATION REQUIRED: the listed gram quantities are physically inconsistent with a 5 mL liquid serving and should not be treated as validated product specifications. Confirm whether the concentrations are expressed per litre, per batch, or on another formulation basis, and verify the exact identity of the \u201Canti-gout agent\u201D and the excipient name before this table is published on the live website.",
    dosageTable: [
      {
        category: "All poultry (label-declared)",
        quantity: "10â€“20 mL per 100 birds for 7â€“20 days, or as directed by a veterinarian",
      },
    ],
    dosageGuidance: [
      "This is a transcription of the label, not an independently verified dosing recommendation.",
      "Step 01 â€” Confirm the formula: ensure the actual ingredient concentrations and stated units have been verified by the manufacturer.",
      "Step 02 â€” Seek veterinary guidance: the veterinarian should assess the bird category, flock condition, existing diet, and possible renal or metabolic problems.",
      "Step 03 â€” Confirm the administration route: the label does not clearly state whether the product must be delivered through drinking water, directly, or by another method.",
      "Step 04 â€” Follow an approved treatment or nutrition plan, using only the dose, dilution, frequency, and duration approved for the specific product and flock.",
      "Do not administer based solely on the current label transcription. Renal dysfunction can affect electrolyte handling, making inaccurate potassium or ammonium dosing potentially hazardous.",
    ],
    advantages: [
      {
        title: "Kidney-Focused Product Positioning",
        description:
          "URICOVA is designed around the nutritional and metabolic management needs associated with poultry renal health.",
      },
      {
        title: "Multi-Ingredient Formula",
        description:
          "The label describes a combination of citrate compounds, electrolyte salts, Vitamin K3, and additional formulation ingredients.",
      },
      {
        title: "Liquid Supplement Format",
        description: "Available as a liquid product for measured use under professional guidance.",
      },
      {
        title: "Commercial Poultry Application",
        description: "Positioned for evaluation in veterinary-managed poultry farming operations.",
      },
      {
        title: "Convenient Packaging",
        description: "Supplied in a 1 litre container suitable for commercial product handling.",
      },
      {
        title: "Poultriva Product Portfolio",
        description:
          "Part of Poultriva's animal nutrition range, centered on specialized nutritional products for poultry and livestock management.",
      },
    ],
    handling: [
      "Retain the product in its original labeled container.",
      "Check the batch number, manufacturing date, and expiry information.",
      "Prevent contamination during handling and keep the container securely closed.",
      "Do not mix with medications, chemicals, or other supplements without compatibility guidance.",
      "Use only after the composition and administration instructions have been verified.",
      "Keep out of reach of children and unauthorized persons.",
    ],
    faqs: [
      {
        question: "What is URICOVA?",
        answer:
          "URICOVA is a Poultriva-branded liquid animal and poultry supplement formulated with citrate salts, electrolyte ingredients, Vitamin K3, and other declared components. It is positioned for kidney-focused nutritional and metabolic management.",
      },
      {
        question: "What is the main purpose of URICOVA?",
        answer:
          "Its intended application focuses on poultry renal health and uric acid metabolism. The product's specific clinical or nutritional effects require verified technical documentation.",
      },
      {
        question: "Why is uric acid important in poultry?",
        answer:
          "Uric acid is a major nitrogenous waste product in birds. Healthy renal function supports normal urate elimination.",
      },
      {
        question: "What causes high uric acid or gout in chickens?",
        answer:
          "Abnormal urate accumulation may be associated with renal dysfunction, dehydration, infectious disease, nutritional imbalance, and certain toxic exposures.",
      },
      {
        question: "Can URICOVA cure poultry gout?",
        answer:
          "There is insufficient verified information to claim that URICOVA cures or treats poultry gout. Suspected gout requires veterinary diagnosis and management.",
      },
      {
        question: "Does URICOVA lower uric acid levels?",
        answer:
          "The supplied product label presents URICOVA as a uric-acid-related supplement, but no validated product-specific studies demonstrating a reduction in uric acid levels have been provided.",
      },
      {
        question: "What are the main ingredients?",
        answer:
          "The label lists potassium citrate, sodium citrate, an unspecified anti-gout agent, Vitamin K3, ammonium chloride, potassium chloride, and an excipient. Ingredient quantities require correction or verification.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "The label states 10â€“20 mL per 100 birds for 7â€“20 days or as directed by a veterinarian. Because the composition contains apparent errors, the dose should not be used until the formulation and instructions are confirmed.",
      },
      {
        question: "Can URICOVA be mixed with drinking water?",
        answer:
          "The supplied label does not specify the administration route or dilution volume. Confirm these details directly with the manufacturer or veterinarian.",
      },
      {
        question: "Is URICOVA suitable for chicks, broilers, layers, and breeders?",
        answer:
          "Suitability must be determined according to the approved product instructions, bird age, production category, and veterinary assessment.",
      },
      {
        question: "Can URICOVA replace veterinary treatment for kidney disease?",
        answer:
          "No. Birds with suspected renal disease, gout, or unexplained mortality require professional veterinary evaluation.",
      },
      {
        question: "What is the available pack size and how should it be stored?",
        answer:
          "The supplied label identifies a 1 litre pack. Store the product in a cool, dry place away from direct sunlight; the declared shelf life is 24 months from manufacturing.",
      },
    ],
  },
  {
    id: "p9",
    slug: "vetaceplus",
    name: "Vetaceplus",
    index: "09",
    category: "Vitamin Supplement",
    focusArea: "Multivitamin Nutrition (A, D3, E & C)",
    form: "Liquid multivitamin supplement",
    shortDescription:
      "A liquid multivitamin supplement with Vitamins A, D3, E and C for immune, bone and antioxidant nutritional support.",
    detailedDescription:
      "VETACEPLUS by Poultriva is a liquid multivitamin feed supplement developed to provide essential vitamin nutrition for poultry. The formulation combines Vitamins A, D3, E and C, which participate in several important physiological functions â€” from supporting healthy vision and epithelial tissues to maintaining calcium metabolism, antioxidant defenses and immune function â€” and is intended for convenient administration through drinking water under veterinary guidance.",
    image: vetaceplusImg,
    imageAlt:
      "Poultriva VETACEPLUS liquid multivitamin poultry supplement containing Vitamins A, D3, E, and C in a 1 litre pack.",
    applications: [
      "Vitamin A, D3, E & C supplementation through drinking water",
      "Nutritional support across chicks, broilers, layers and breeders",
      "Veterinary-guided poultry supplementation",
    ],
    composition: "Vitamins A, D3, E & C with Amia extract (see composition below)",
    packSizes: "1 Litre",
    dosage:
      "5â€“10 mL per 100 birds for one week every month, or as advised by a veterinarian (label-declared)",
    storage:
      "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
    disclaimer: DISCLAIMER,
    seoTitle: "VETACEPLUS | Vitamin A D3 E C Poultry Supplement | Poultriva",
    seoDescription:
      "Discover Poultriva VETACEPLUS, a liquid poultry multivitamin supplement containing Vitamins A, D3, E, and C for immune, bone, and antioxidant nutritional support.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Essential Vitamins. Stronger Nutritional Foundations. Healthier Flocks.",
    heroIntro: [
      "Support your poultry flock's essential nutritional requirements with VETACEPLUS, a specialized liquid vitamin supplement formulated with Vitamins A, D3, E, C, and an additional extract ingredient.",
      "Designed to complement balanced poultry feeding programs, VETACEPLUS delivers essential micronutrients involved in normal immune function, healthy skeletal development, antioxidant protection, tissue maintenance, and reproductive physiology.",
    ],
    highlights: [
      "Comprehensive Vitamins A, D3, E & C Formula",
      "Supports Normal Immune Function",
      "Contributes to Bone & Skeletal Health",
      "Antioxidant Nutritional Support",
      "Supports Healthy Growth & Development",
      "Suitable for Veterinary-Guided Poultry Supplementation",
      "Convenient 1 Litre Pack",
    ],
    overviewLabel: "About Vetaceplus",
    overviewHeading: "Comprehensive Vitamin Nutrition for Poultry Wellbeing",
    overviewParagraphs: [
      "VETACEPLUS by Poultriva is a liquid multivitamin feed supplement developed to provide essential vitamin nutrition for poultry.",
      "The formulation combines Vitamins A, D3, E, and C, which participate in several important physiological functions necessary for normal poultry development and health.",
      "From supporting healthy vision and epithelial tissues to maintaining calcium metabolism, antioxidant defenses, and immune function, these vitamins contribute to the nutritional foundation of a healthy flock.",
      "Vitamin A supports normal vision, tissue development, and immune function. Vitamin D3 plays an essential role in calcium and phosphorus metabolism. Vitamin E contributes to antioxidant protection, while Vitamin C participates in collagen formation and other metabolic processes.",
      "When used appropriately, VETACEPLUS can help complement poultry feeding programs where additional vitamin supplementation is recommended.",
    ],
    quickInfo: [
      ["Product Name", "VETACEPLUS"],
      ["Brand", "Poultriva"],
      ["Product Category", "Poultry & Animal Feed Supplement"],
      ["Product Type", "Liquid Multivitamin Supplement"],
      ["Key Nutrients", "Vitamin A, D3, E & C"],
      ["Additional Ingredient", "Amia Extract (as printed on label)"],
      ["Primary Purpose", "Vitamin Nutritional Supplementation"],
      ["Administration", "Drinking Water"],
      ["Net Quantity", "1 Litre"],
      ["Shelf Life", "24 Months from Manufacturing"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Immune Function Support",
        heading: "Nourishing the Body's Natural Defenses",
        description:
          "Vitamins A, E, and C contribute to important functions involved in normal immune activity. Vitamin A helps maintain protective epithelial tissues, while Vitamins E and C contribute to antioxidant defense systems.",
      },
      {
        index: "02",
        title: "Healthy Growth & Development",
        heading: "Building a Foundation for Productive Flocks",
        description:
          "Essential vitamins participate in cellular differentiation, tissue maintenance, bone development, and important metabolic functions, particularly during periods of growth and physiological development.",
      },
      {
        index: "03",
        title: "Bone & Skeletal Health",
        heading: "Supporting Normal Calcium Metabolism",
        description:
          "Vitamin D3 plays a central role in calcium and phosphorus absorption and utilization. Appropriate intake supports normal skeletal mineralization and bone maintenance.",
      },
      {
        index: "04",
        title: "Antioxidant Nutrition",
        heading: "Supporting Cellular Protection",
        description:
          "Vitamins E and C participate in antioxidant defense mechanisms that help protect biological components against oxidative damage, contributing to normal cellular function.",
      },
      {
        index: "05",
        title: "Reproductive Nutritional Support",
        heading: "Supporting Layers & Breeders",
        description:
          "Vitamins A, D3, and E are relevant to reproductive physiology, mineral metabolism, and normal tissue function, forming an important part of balanced layer and breeder feeding programs.",
      },
      {
        index: "06",
        title: "General Flock Vitality",
        heading: "Supporting Everyday Nutritional Requirements",
        description:
          "VETACEPLUS supplies essential vitamins involved in multiple physiological processes, helping address supplementary nutritional requirements when professional assessment indicates a need.",
      },
    ],
    detailedApplications: [
      {
        title: "Chicks",
        heading: "Supporting Healthy Early Development",
        description:
          "Young chicks depend on adequate vitamin nutrition for normal skeletal formation, tissue development, vision, and immune function.",
        focus: [
          "Early growth and development",
          "Normal bone formation",
          "Epithelial tissue maintenance",
          "Nutritional immune support",
          "Antioxidant nutrient supply",
        ],
      },
      {
        title: "Broilers",
        heading: "Nutrition for Growth-Oriented Poultry Farming",
        description:
          "Fast-growing broilers require balanced supplies of essential vitamins to support normal metabolic activity and structural development.",
        focus: [
          "Growth-stage vitamin nutrition",
          "Calcium and phosphorus metabolism",
          "Normal cellular function",
          "Skeletal development",
          "Antioxidant support",
        ],
      },
      {
        title: "Layers",
        heading: "Supporting Productive Hen Nutrition",
        description:
          "Laying hens require adequate micronutrients, particularly Vitamin D3, to support calcium metabolism and normal physiological function during production.",
        focus: [
          "Bone mineral metabolism",
          "Reproductive nutritional requirements",
          "Normal immune function",
          "Antioxidant nutrition",
          "General flock condition",
        ],
      },
      {
        title: "Breeders",
        heading: "Nutritional Support for Reproductive Flocks",
        description:
          "Appropriate vitamin nutrition contributes to the physiological requirements of breeder birds and supports normal reproductive processes.",
        focus: [
          "Reproductive nutrient adequacy",
          "Normal embryonic development",
          "Antioxidant protection",
          "Metabolic health",
          "Overall breeder body condition",
        ],
      },
    ],
    formula: [
      {
        title: "Vitamin A",
        heading: "Vision, Immunity & Tissue Development",
        description:
          "An essential fat-soluble vitamin involved in normal visual function, cellular differentiation, and epithelial tissue maintenance, as well as normal immune function and reproductive physiology.",
      },
      {
        title: "Vitamin D3",
        heading: "Bone Health & Mineral Metabolism",
        description:
          "Necessary for normal calcium and phosphorus absorption and metabolism, playing an important role in skeletal development and mineral utilization relevant to growing birds and laying hens.",
      },
      {
        title: "Vitamin E",
        heading: "Antioxidant & Cellular Nutrition",
        description:
          "A fat-soluble antioxidant that helps protect cell membranes from oxidative damage, contributing to normal cellular integrity and immune-related physiological processes.",
      },
      {
        title: "Vitamin C",
        heading: "Collagen Formation & Antioxidant Function",
        description:
          "Also known as ascorbic acid, it participates in collagen synthesis and antioxidant defense; although poultry can synthesize Vitamin C, its nutritional relevance may vary with environmental conditions and physiological demands.",
      },
    ],
    compositionGroups: [
      {
        title: "Each 5 mL Contains (label-declared)",
        rows: [
          ["Vitamin A", "250,000 IU"],
          ["Vitamin D3", "24,000 IU"],
          ["Vitamin E", "500 mg"],
          ["Vitamin C", "150 mg"],
          ["Amia Extract", "0.25 g"],
          ["Excipients", "q.s. to 5.0 mL"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Type", "Multivitamin Liquid Supplement"],
          ["Physical Form", "Liquid"],
          ["Key Nutrients", "A, D3, E & C"],
          ["Administration Route", "Drinking Water"],
          ["Pack Size", "1 Litre"],
          ["Shelf Life", "24 Months"],
          ["Storage", "Cool & Dry Place"],
          ["Sunlight Protection", "Required"],
        ],
      },
    ],
    compositionNote:
      "Vitamins A, D3 and E are fat-soluble and their intake must be balanced with the existing feed and any other supplements, while Vitamin C is water-soluble. The label identifies an ingredient as \u201CAmia extract\u201D; its botanical or chemical identity requires confirmation before any specific functional claim can be made. The composition reproduces the supplied product label, and nutrient potencies, extract identity and finished product specifications should be verified using the manufacturer's approved technical documentation.",
    dosageTable: [
      {
        category: "All poultry (label-declared)",
        quantity:
          "5â€“10 mL per 100 birds for one week every month, or as advised by a veterinarian",
      },
    ],
    dosageGuidance: [
      "VETACEPLUS is labeled for administration through poultry drinking water.",
      "Step 01 â€” Assess nutritional requirements: review the bird category, age, feed composition, and existing vitamin supplementation program.",
      "Step 02 â€” Confirm the appropriate dose: a qualified veterinarian should establish the correct quantity and administration frequency for the flock.",
      "Step 03 â€” Prepare drinking water: mix the manufacturer-approved amount into drinking water using suitable measuring and mixing equipment.",
      "Step 04 â€” Follow the supplementation schedule, using only the verified administration duration and frequency suitable for the specific flock.",
      "Step 05 â€” Monitor flock condition, reviewing drinking-water intake, flock health, and the overall nutritional program.",
      "Vitamins A and D3 can cause toxicity when administered in excessive amounts, so the total vitamin intake from commercial feed, premixes, supplements and other sources must be considered. The label does not specify the daily administration frequency during the one-week period or the dilution volume; confirm these details before use.",
    ],
    advantages: [
      {
        title: "Four Essential Vitamins",
        description:
          "Combines Vitamins A, D3, E, and C in a single liquid nutritional formulation.",
      },
      {
        title: "Complementary Nutritional Functions",
        description:
          "Includes vitamins involved in vision, skeletal development, antioxidant protection, and normal immune function.",
      },
      {
        title: "Drinking-Water Administration",
        description:
          "Designed for use through drinking water in accordance with approved instructions.",
      },
      {
        title: "Growth & Production Applications",
        description:
          "Provides nutrients relevant to multiple stages of poultry growth and production, subject to appropriate dosing guidance.",
      },
      {
        title: "Concentrated Formulation",
        description: "Offers declared vitamin quantities in a measured 5 mL volume.",
      },
      {
        title: "Practical Commercial Packaging",
        description:
          "Supplied in a 1 litre pack for poultry farming and animal nutrition supply requirements.",
      },
    ],
    handling: [
      "Keep the product in its original labeled container.",
      "Check the batch number and expiry information before use.",
      "Use clean, appropriate measuring equipment and prevent contamination during handling.",
      "Follow the manufacturer-approved dilution procedure.",
      "Avoid unnecessary simultaneous use of additional Vitamin A or D3 supplements.",
      "Store away from children and unauthorized users.",
      "Consult a veterinarian before changing the recommended supplementation schedule.",
    ],
    faqs: [
      {
        question: "What is VETACEPLUS?",
        answer:
          "VETACEPLUS is a Poultriva liquid multivitamin supplement containing Vitamins A, D3, E, C, and an additional extract ingredient. It is intended for nutritional supplementation through poultry drinking water.",
      },
      {
        question: "What are the main benefits of VETACEPLUS?",
        answer:
          "Its vitamins support normal vision, immune function, bone development, antioxidant defenses, tissue maintenance, and reproductive physiology.",
      },
      {
        question: "Which vitamins are present in VETACEPLUS?",
        answer:
          "The product contains Vitamins A, D3, E, and C in the quantities declared on the supplied label.",
      },
      {
        question: "Does VETACEPLUS support poultry immunity?",
        answer:
          "Vitamins A, E, C, and D3 contribute to functions associated with normal immune physiology. However, the product should not be considered a substitute for vaccination or veterinary disease management.",
      },
      {
        question: "Can VETACEPLUS support healthy poultry growth?",
        answer:
          "Adequate vitamin intake is important for normal growth and development. VETACEPLUS can complement balanced nutrition where additional vitamin supplementation is appropriate.",
      },
      {
        question: "How does Vitamin D3 benefit poultry?",
        answer:
          "Vitamin D3 supports calcium and phosphorus metabolism and normal skeletal mineralization, particularly important for growing birds and laying hens.",
      },
      {
        question: "Is VETACEPLUS suitable for broilers, layers and breeders?",
        answer:
          "Its ingredients are nutritionally relevant across these categories, but appropriate use and dosage should be confirmed with the manufacturer or a qualified veterinarian in relation to the complete diet.",
      },
      {
        question: "Does VETACEPLUS increase egg production?",
        answer:
          "Adequate vitamin nutrition supports normal reproductive function, but a direct increase in egg production has not been established for this specific product.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "The supplied label states 5â€“10 mL per 100 birds for one week every month, or as advised by a veterinarian. Confirm the precise daily schedule and dilution before administration.",
      },
      {
        question: "Can excessive vitamin supplementation cause problems?",
        answer:
          "Yes. Fat-soluble vitamins, particularly Vitamins A and D3, can be harmful when supplied in excessive quantities. Total vitamin intake must be considered.",
      },
      {
        question: "What is the additional extract in VETACEPLUS?",
        answer:
          "The supplied label identifies an ingredient as \u201CAmia extract.\u201D Its exact identity and intended function require manufacturer confirmation.",
      },
      {
        question: "Is VETACEPLUS an antibiotic or medicine?",
        answer:
          "No. It is labeled as a poultry and animal liquid feed supplement, not an antibiotic or veterinary medicine.",
      },
    ],
  },
  {
    id: "p10",
    slug: "cyntrex",
    name: "Cyntrex",
    index: "10",
    category: "Veterinary Formulation",
    focusArea: "Chlortetracycline Calcium Complex Technology",
    form: "Veterinary feed formulation (subject to authorization)",
    shortDescription:
      "A specialized chlortetracycline calcium complex-based veterinary feed formulation for authorized, veterinary-guided use.",
    detailedDescription:
      "CYNTREX is a Poultriva-branded product whose packaging describes chlortetracycline calcium complex technology. Chlortetracycline (CTC) is a tetracycline-class antibiotic used in certain authorized veterinary formulations, and the CYNTREX label emphasizes a water-insoluble calcium-complex form (referred to as Chlortech-T) with claimed stability advantages. CYNTREX should be evaluated as a potentially antimicrobial veterinary formulation â€” not an ordinary nutritional supplement â€” and used only where appropriately authorized and directed by a qualified veterinarian.",
    image: cyntrexImg,
    imageAlt:
      "Poultriva CYNTREX product label highlighting chlortetracycline calcium complex technology, formulation stability characteristics, and veterinary feed applications.",
    applications: [
      "Veterinary feed-related applications, subject to authorization",
      "Use only under qualified veterinary direction",
      "Evaluation against approved product documentation and regulations",
    ],
    composition: "Chlortetracycline calcium complex (Chlortech-T) â€” see label information below",
    packSizes: "Not stated on supplied label",
    dosage: "Not stated on label â€” obtain from approved veterinary documentation",
    storage:
      "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing (as printed).",
    disclaimer:
      "CYNTREX references an antibiotic ingredient and is for veterinary use only where legally authorized. It must not be used as a routine growth promoter or administered without appropriate veterinary and regulatory authorization. Always follow the approved product label, observe applicable withdrawal periods, and seek guidance from a qualified veterinarian.",
    seoTitle: "CYNTREX | Chlortetracycline Calcium Complex Technology | Poultriva",
    seoDescription:
      "Explore CYNTREX by Poultriva, a chlortetracycline calcium complex-based product focused on formulation technology, technical quality, and veterinary applications.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Advanced Formulation. Controlled Quality. Responsible Veterinary Care.",
    heroIntro: [
      "Discover CYNTREX by Poultriva, a specialized product presented around chlortetracycline calcium complex technology and formulation characteristics relevant to veterinary feed applications.",
      "The product's label highlights a water-insoluble calcium-complex form of chlortetracycline, together with claimed stability advantages over conventional chlortetracycline hydrochloride formulations.",
      "Developed around principles of formulation chemistry, manufacturing consistency, and controlled product quality, CYNTREX is positioned for veterinary applications where its composition and use are appropriately authorized.",
    ],
    highlights: [
      "Chlortetracycline Calcium Complex-Based Technology",
      "Water-Insoluble Form Described on Label",
      "Specialized Formulation Chemistry",
      "Claimed Stability During Feed Processing",
      "Manufacturing Quality Focus",
      "Technical Application for Animal Feed Operations",
      "Veterinary-Guided Use",
    ],
    overviewLabel: "About Cyntrex",
    overviewHeading: "Specialized Formulation Technology for Veterinary Feed Applications",
    overviewParagraphs: [
      "CYNTREX is a Poultriva-branded product whose packaging describes chlortetracycline calcium complex technology.",
      "Chlortetracycline, commonly abbreviated CTC, belongs to the tetracycline class of antibiotics and is used in certain authorized veterinary medicinal formulations.",
      "The supplied CYNTREX label places particular emphasis on the calcium-complex form of chlortetracycline, referring to a preparation called Chlortech-T, described as having low water solubility and intended to provide particular formulation characteristics compared with water-soluble chlortetracycline hydrochloride.",
      "The label also highlights manufacturing-related claims concerning fermentation consistency, stability, and resistance to certain feed-processing conditions, which require confirmation through manufacturer-approved technical specifications, finished-product stability data, and the applicable veterinary regulatory authorization.",
      "CYNTREX should be evaluated as a potentially antimicrobial veterinary formulation, rather than an ordinary vitamin or nutritional feed supplement.",
    ],
    quickInfo: [
      ["Product Name", "CYNTREX"],
      ["Brand", "Poultriva"],
      ["Product Technology", "Chlortetracycline Calcium Complex"],
      ["Antibiotic Class", "Tetracycline"],
      ["Label-Referenced Preparation", "Chlortech-T"],
      ["Primary Technical Focus", "Calcium Complex & Stability Characteristics"],
      ["Intended Application", "Veterinary Feed-Related, Subject to Authorization"],
      ["Physical Form", "Requires Confirmation"],
      ["Active Ingredient Strength", "Not Stated"],
      ["Pack Quantity", "Not Stated"],
      ["Shelf Life", "24 Months from Manufacturing (as printed)"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Calcium Complex Technology",
        heading: "A Distinct Form of Chlortetracycline",
        description:
          "The label describes a chlortetracycline-calcium complex, distinguishing the referenced ingredient form from conventional chlortetracycline hydrochloride.",
      },
      {
        index: "02",
        title: "Low Water Solubility",
        heading: "Specialized Physical Characteristics",
        description:
          "The supplied label describes Chlortech-T as essentially insoluble in water â€” a characteristic relevant to formulation development that must be considered when evaluating permitted administration methods.",
      },
      {
        index: "03",
        title: "Formulation Stability",
        heading: "Designed Around Stability Considerations",
        description:
          "The packaging claims greater intrinsic stability than generic chlortetracycline hydrochloride; this comparison requires supporting analytical studies under equivalent test conditions.",
      },
      {
        index: "04",
        title: "Processing Compatibility",
        heading: "Feed-Manufacturing Technology Focus",
        description:
          "The label claims stability during extrusion and pelleting, making processing performance an important subject for manufacturer verification.",
      },
      {
        index: "05",
        title: "Manufacturing Consistency",
        heading: "Emphasis on Controlled Production",
        description:
          "The packaging highlights microbial fermentation and quality control as important elements of the referenced chlortetracycline production process.",
      },
      {
        index: "06",
        title: "Technical Quality",
        heading: "Supporting Responsible Product Evaluation",
        description:
          "Confirmed active ingredient potency, impurity limits, microbial quality, and stability information are essential for assessing the finished product.",
      },
    ],
    detailedApplications: [
      {
        title: "Veterinary Professionals",
        heading: "Clinical Assessment & Responsible Antimicrobial Selection",
        description:
          "Veterinary professionals are responsible for determining whether an antimicrobial is necessary and appropriate for a diagnosed or clinically justified bacterial condition.",
        focus: [
          "Clinical assessment",
          "Bacterial susceptibility",
          "Approved indications",
          "Appropriate treatment protocols",
          "Withdrawal requirements",
        ],
      },
      {
        title: "Feed Manufacturers",
        heading: "Authorized Medicated Feed Production",
        description:
          "Where permitted by law and product authorization, chlortetracycline-containing veterinary preparations may be used in specifically approved medicated-feed manufacturing systems.",
        focus: [
          "Regulatory authorization",
          "Verified active ingredient potency",
          "Mixing and processing compatibility",
          "Cross-contamination prevention",
          "Finished-feed quality control",
        ],
      },
      {
        title: "Poultry Integrators",
        heading: "Veterinary-Led Flock Health Management",
        description:
          "Integrated poultry operations require coordinated veterinary oversight, traceability, and safe management of antimicrobial use.",
        focus: [
          "Flock health assessment",
          "Veterinary authorization",
          "Treatment documentation",
          "Food-residue management",
          "Antimicrobial stewardship",
        ],
      },
      {
        title: "Veterinary Distributors",
        heading: "Responsible Product Supply & Technical Information",
        description:
          "Veterinary product distributors require accurate technical documentation and compliance with applicable sales and distribution requirements.",
        focus: [
          "Product authorization",
          "Genuine batch documentation",
          "Approved labeling",
          "Suitable storage and transportation",
          "Technical information availability",
        ],
      },
    ],
    formula: [
      {
        title: "Antibacterial Mechanism",
        heading: "Interfering with Bacterial Protein Synthesis",
        description:
          "Chlortetracycline acts primarily by interfering with bacterial protein synthesis, binding to the bacterial 30S ribosomal subunit and inhibiting normal protein production.",
      },
      {
        title: "Bacteriostatic Activity",
        heading: "Inhibiting Bacterial Multiplication",
        description:
          "Chlortetracycline is generally considered a bacteriostatic antibiotic, meaning it primarily inhibits bacterial multiplication rather than directly killing all exposed bacteria.",
      },
      {
        title: "Antimicrobial Susceptibility",
        heading: "Not All Bacteria Are Susceptible",
        description:
          "Resistance can occur, and veterinary antimicrobial selection should consider diagnostic findings and susceptibility information wherever appropriate.",
      },
      {
        title: "Calcium Complex Formulation",
        heading: "Distinct Chemical & Physical Properties",
        description:
          "The chlortetracycline molecule can interact with metal ions including calcium, influencing properties such as the label-described low water solubility and an alkaline pH range (label-reported above 8.0, average around 10.0), each of which requires a defined test method to be technically meaningful.",
      },
      {
        title: "Chemical & Processing Stability",
        heading: "Requires Experimental Confirmation",
        description:
          "Tetracycline stability may be influenced by pH, temperature, moisture and light. Claims of superior stability and stability during extrusion and pelleting should be established through recovery and degradation studies under representative manufacturing conditions.",
      },
      {
        title: "Responsible Antimicrobial Use",
        heading: "Not a Vitamin, Enzyme, Probiotic or Growth Supplement",
        description:
          "Antimicrobials should be used only where clinically justified, legally permitted, and appropriately directed by a qualified veterinarian. Approval of other chlortetracycline products does not establish an authorized indication for CYNTREX.",
      },
    ],
    compositionGroups: [
      {
        title: "Available Label Information",
        rows: [
          ["Referenced Ingredient", "Chlortetracycline"],
          ["Antibiotic Class", "Tetracycline"],
          ["Described Chemical Form", "Chlortetracycline Calcium Complex"],
          ["Referenced Technology", "Chlortech-T"],
          ["Water Solubility", "Described as essentially insoluble"],
          ["pH", "Label claims above 8.0, average approx. 10.0"],
          ["Processing Stability", "Claimed stable during extrusion & pelleting"],
          ["Active Concentration", "Not disclosed"],
          ["Product Form", "Not confirmed"],
          ["Net Quantity", "Blank on supplied label"],
          ["Shelf Life", "24 Months from Manufacturing"],
          ["Storage", "Cool & Dry Place"],
        ],
      },
    ],
    compositionNote:
      "The supplied label discusses chlortetracycline calcium complex and its formulation characteristics but does not provide a quantitative composition table. Before publishing a complete data sheet, obtain the exact active ingredient and chemical identity, chlortetracycline potency per unit, excipient/carrier composition, physical form, solubility and pH testing conditions, stability and degradation characteristics, regulatory registration details, approved target species and indications, approved dosage and route, contraindications, meat and egg withdrawal restrictions, certificate of analysis, safety data sheet and approved package insert. No independent finished-product stability, fermentation, or comparative laboratory data have been supplied.",
    dosageGuidance: [
      "The supplied CYNTREX label does not state a dosage, active ingredient concentration, treatment duration, or approved administration route, so no numerical administration schedule can be established from the available packaging.",
      "Step 01 â€” Confirm product identity: verify the actual chlortetracycline ingredient, concentration, and product registration.",
      "Step 02 â€” Establish the approved indication: determine the veterinary condition for which the product is legally authorized.",
      "Step 03 â€” Assess animal requirements: consider the target species, age, condition, and relevant clinical findings.",
      "Step 04 â€” Follow the approved treatment protocol as determined by a qualified veterinarian in accordance with authorized product instructions.",
      "Step 05 â€” Follow residue controls: observe withdrawal periods and any restrictions involving laying birds or eggs intended for human consumption.",
      "Step 06 â€” Maintain treatment records documenting administration, batch information, veterinary instructions and withdrawal completion dates.",
      "Do not use CYNTREX based solely on the website description or current packaging image. Its low-water-solubility claim does not establish suitability for drinking-water administration, and its dosage, route, duration, target species and food-safety restrictions require verified manufacturer documentation.",
    ],
    advantages: [
      {
        title: "Calcium Complex-Based Technology",
        description:
          "Built around a chlortetracycline calcium complex form distinct from conventional CTC hydrochloride.",
      },
      {
        title: "Formulation Chemistry Focus",
        description:
          "Presented around specialized physical characteristics including low water solubility and an alkaline pH range.",
      },
      {
        title: "Processing-Stability Positioning",
        description:
          "Label-claimed stability during extrusion and pelleting, pending manufacturer verification.",
      },
      {
        title: "Manufacturing Quality Emphasis",
        description:
          "Highlights microbial fermentation and quality control in the referenced production process.",
      },
      {
        title: "Veterinary Application Positioning",
        description:
          "Intended for authorized veterinary feed-related applications under professional direction.",
      },
      {
        title: "Technical Documentation Orientation",
        description:
          "Positioned for professional evaluation against verified specifications and regulatory authorization.",
      },
    ],
    handling: [
      "Retain the product in its original container and check batch number, manufacturing date, and expiry information.",
      "Avoid unnecessary moisture and heat exposure, and prevent accidental contamination of feed or water.",
      "Follow the manufacturer's safety data sheet and use suitable protective equipment for handling the actual product form.",
      "Segregate the product from food and unrelated feed materials where required, and prevent access by unauthorized individuals.",
      "Dispose of unused or expired veterinary antimicrobial products according to applicable requirements.",
      "For veterinary use only where legally authorized. Not for human use.",
    ],
    faqs: [
      {
        question: "What is CYNTREX?",
        answer:
          "CYNTREX is a Poultriva-branded product whose packaging describes chlortetracycline calcium complex technology and associated formulation characteristics.",
      },
      {
        question: "What is chlortetracycline?",
        answer:
          "Chlortetracycline is a tetracycline-class antibiotic with activity against certain susceptible bacteria.",
      },
      {
        question: "What is chlortetracycline calcium complex?",
        answer:
          "It is a calcium-associated form of chlortetracycline that can exhibit different physical and chemical properties from some other chlortetracycline formulations.",
      },
      {
        question: "Is CYNTREX an antibiotic?",
        answer:
          "The packaging repeatedly references chlortetracycline, which is an antibiotic. The precise active ingredient concentration and registered classification of CYNTREX itself must be confirmed.",
      },
      {
        question: "What does the CYNTREX label say about water solubility?",
        answer:
          "The label describes its referenced Chlortech-T calcium-complex ingredient as essentially insoluble in water.",
      },
      {
        question: "Is CYNTREX more stable than ordinary chlortetracycline hydrochloride?",
        answer:
          "The packaging makes that comparison, but product-specific stability studies are needed to substantiate it.",
      },
      {
        question: "Can CYNTREX be incorporated into poultry feed?",
        answer:
          "This depends on the product's authorization, active concentration, formulation, and approved administration instructions. The packaging alone does not establish permitted feed inclusion.",
      },
      {
        question: "Can CYNTREX be mixed with drinking water?",
        answer:
          "The supplied packaging does not provide drinking-water administration instructions, and the referenced ingredient is described as essentially water-insoluble. Suitability must be confirmed before use.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "No dosage is stated on the supplied label. Dosage must be obtained from approved product documentation and a qualified veterinarian.",
      },
      {
        question: "What bacterial diseases can CYNTREX treat?",
        answer:
          "No product-specific approved indications are provided. Treatment claims must be based on the registered product label and appropriate veterinary diagnosis.",
      },
      {
        question: "Can CYNTREX improve growth or feed conversion?",
        answer:
          "It should not be promoted or used for routine growth enhancement. Antibiotic use must be clinically justified and comply with applicable regulations.",
      },
      {
        question: "Can CYNTREX be given to laying hens, and what is the withdrawal period?",
        answer:
          "Use in laying birds, restrictions involving eggs for human consumption, and the required withdrawal period must all be established from the product's approved regulatory labeling; the supplied label states neither.",
      },
      {
        question: "Why is antimicrobial resistance important?",
        answer:
          "Inappropriate antimicrobial use can select for resistant bacteria and reduce the future effectiveness of important veterinary and human medicines.",
      },
      {
        question: "What is the difference between CYNTREX and a vitamin supplement?",
        answer:
          "CYNTREX references an antibiotic ingredient, whereas vitamin supplements provide nutrients for normal physiological functions. They have different purposes, risks, and regulatory requirements.",
      },
      {
        question: "What are the shelf life, pack size and manufacturer?",
        answer:
          "The label states best before 24 months from manufacturing; the net quantity field is blank and the commercial pack size requires confirmation. SAGL Life Science Pvt. Ltd. is identified as the manufacturer and marketer.",
      },
    ],
  },
  {
    id: "p11",
    slug: "biolyte",
    name: "Biolyte",
    index: "11",
    category: "Electrolyte Supplement",
    focusArea: "Electrolyte, Hydration & Stress Nutrition",
    form: "Electrolyte & nutritional powder",
    shortDescription:
      "A powdered electrolyte supplement with mineral salts, Vitamin C, carbohydrates and a declared microbial component for hydration and stress-related nutrition.",
    detailedDescription:
      "BIOLYTE by Poultriva is a powdered poultry feed supplement developed to provide a combination of electrolytes, Vitamin C, carbohydrates and a microbial ingredient for nutritional supplementation. Electrolytes participate in normal fluid distribution, cellular function, nerve signaling, muscle activity and acid-base balance, which can change during challenging conditions such as elevated temperatures and transportation. BIOLYTE is intended to complement appropriate feed and water-management practices under professional guidance.",
    image: biolyteImg,
    imageAlt:
      "Poultriva BIOLYTE 1 kg poultry electrolyte powder containing potassium and sodium salts, Vitamin C, and nutritional ingredients.",
    applications: [
      "Electrolyte and hydration-related nutritional support",
      "Nutritional management during heat and transportation stress",
      "Feed or drinking-water administration under professional guidance",
    ],
    composition:
      "Electrolyte salts, Vitamin C, carbohydrates and a microbial ingredient (see composition below)",
    packSizes: "1 kg",
    dosage: "1 kg per MT of feed, or 1 g in 2 litres of water for 3â€“5 days (label-declared)",
    storage:
      "Store in a cool, dry place away from direct sunlight; protect from moisture to help maintain microbial viability.",
    disclaimer: DISCLAIMER,
    seoTitle: "BIOLYTE | Poultry Electrolyte & Vitamin C Supplement | Poultriva",
    seoDescription:
      "Discover Poultriva BIOLYTE, a poultry electrolyte feed supplement containing essential mineral salts, Vitamin C, and nutritional ingredients for flock management.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Balanced Electrolytes. Better Hydration. Stronger Flock Vitality.",
    heroIntro: [
      "Support your flock through demanding environmental and management conditions with BIOLYTE, a specialized poultry feed supplement formulated with essential electrolyte salts, Vitamin C, carbohydrates, and a declared microbial component.",
      "Designed to complement balanced poultry nutrition, BIOLYTE provides ingredients involved in normal fluid regulation, electrolyte balance, acid-base physiology, and energy-related metabolism â€” whether managing seasonal temperature fluctuations, transportation, or routine poultry production.",
    ],
    highlights: [
      "Multi-Electrolyte Nutritional Formula",
      "Sodium, Potassium, Calcium & Magnesium Sources",
      "Contains Vitamin C for Antioxidant Nutrition",
      "Carbohydrate-Based Nutritional Components",
      "Declared Microbial Supplement Ingredient",
      "Intended for Stress-Related Nutritional Management",
      "Feed & Drinking-Water Application Listed on Label",
      "Convenient 1 kg Packaging",
    ],
    overviewLabel: "About Biolyte",
    overviewHeading: "Advanced Electrolyte Nutrition for Modern Poultry Management",
    overviewParagraphs: [
      "BIOLYTE by Poultriva is a powdered poultry feed supplement developed to provide a combination of electrolytes, Vitamin C, carbohydrates, and a microbial ingredient for nutritional supplementation.",
      "Electrolytes are essential minerals that participate in maintaining normal fluid distribution, cellular function, nerve signaling, muscle activity, and acid-base balance.",
      "Poultry may experience changes in water consumption, electrolyte requirements, and physiological balance during challenging conditions such as elevated environmental temperatures and transportation.",
      "BIOLYTE contains potassium chloride, sodium bicarbonate, sodium citrate, sodium acid phosphate, calcium lactate, magnesium sulphate, and other nutritional ingredients.",
      "Its composition is intended to complement appropriate feed and water-management practices, helping poultry producers address supplemental nutritional requirements under professional guidance.",
    ],
    quickInfo: [
      ["Product Name", "BIOLYTE"],
      ["Brand", "Poultriva"],
      ["Product Category", "Poultry Feed Supplement"],
      ["Product Type", "Electrolyte & Nutritional Powder"],
      ["Primary Nutrient Group", "Electrolyte Salts"],
      ["Additional Nutrients", "Vitamin C, Lactose & Dextrose"],
      ["Microbial Ingredient", "Lactobacillus Viable Spores, as printed"],
      ["Primary Application", "Electrolyte Nutritional Support"],
      ["Label Administration", "Feed or Drinking Water"],
      ["Net Quantity", "1 kg"],
      ["Shelf Life", "24 Months from Manufacturing"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Electrolyte Balance",
        heading: "Supporting Essential Mineral Regulation",
        description:
          "Sodium, potassium, chloride, and other ions participate in maintaining normal electrolyte concentrations and physiological functions. BIOLYTE supplies several electrolyte-containing ingredients intended to complement dietary mineral nutrition.",
      },
      {
        index: "02",
        title: "Hydration-Related Nutrition",
        heading: "Supporting Normal Fluid Balance",
        description:
          "Electrolytes contribute to the regulation of fluid movement between body compartments. Adequate electrolyte nutrition is important alongside continuous access to clean, suitable drinking water.",
      },
      {
        index: "03",
        title: "Heat-Stress Nutritional Management",
        heading: "Support During High-Temperature Conditions",
        description:
          "Heat exposure can change drinking behavior and electrolyte physiology in poultry. BIOLYTE contains ingredients relevant to professionally managed supplementation programs during temperature-related challenges.",
      },
      {
        index: "04",
        title: "Acid-Base Physiology",
        heading: "Supporting Normal Metabolic Regulation",
        description:
          "Sodium bicarbonate, phosphate, and citrate ingredients participate in acid-base chemistry. Their physiological effects depend on the total composition, administered quantity, and the bird's condition.",
      },
      {
        index: "05",
        title: "Antioxidant Nutrition",
        heading: "Vitamin C for Cellular Function",
        description:
          "Vitamin C contributes to antioxidant defense and collagen synthesis, and its nutritional role may be relevant during periods of increased physiological demand.",
      },
      {
        index: "06",
        title: "Carbohydrate Nutrition",
        heading: "Additional Energy-Related Ingredients",
        description:
          "Lactose and dextrose form part of the declared carbohydrate composition. Their nutritional contribution depends on the amount consumed and the bird's ability to digest and utilize them.",
      },
    ],
    detailedApplications: [
      {
        title: "Chicks",
        heading: "Supporting Early-Stage Nutritional Management",
        description:
          "Young chicks are particularly sensitive to inadequate water availability and unsuitable environmental conditions.",
        focus: [
          "Early hydration management",
          "Electrolyte nutritional support",
          "Appropriate brooding conditions",
          "Nutritional support around transportation",
          "General chick wellbeing",
        ],
      },
      {
        title: "Broilers",
        heading: "Supporting Growth-Stage Water & Mineral Balance",
        description:
          "Broilers have substantial water requirements, especially under warm environmental conditions.",
        focus: [
          "Electrolyte nutritional balance",
          "Heat-management programs",
          "Normal physiological hydration",
          "Support around flock transportation",
          "General metabolic nutrition",
        ],
      },
      {
        title: "Layers",
        heading: "Supporting Productive Hen Management",
        description:
          "Laying hens require appropriate water availability and electrolyte balance to maintain normal physiological functions.",
        focus: [
          "Water and electrolyte management",
          "Normal acid-base physiology",
          "Nutritional support during heat exposure",
          "Consistent flock management",
          "General production-stage wellbeing",
        ],
      },
      {
        title: "Breeders",
        heading: "Supporting Long-Term Flock Care",
        description:
          "Breeder poultry benefit from controlled environmental management, balanced feeding, and suitable electrolyte nutrition.",
        focus: [
          "Electrolyte adequacy",
          "Environmental-stress management",
          "Transportation-related nutritional planning",
          "Normal fluid regulation",
          "General flock condition",
        ],
      },
    ],
    formula: [
      {
        title: "Sodium",
        heading: "Fluid & Cellular Regulation",
        description:
          "Sodium participates in extracellular fluid regulation, nerve signaling, and normal physiological transport processes.",
      },
      {
        title: "Potassium",
        heading: "Cellular & Muscle Function",
        description:
          "Potassium is a major intracellular electrolyte important for membrane electrical activity and normal muscle function.",
      },
      {
        title: "Chloride & Bicarbonate",
        heading: "Fluid & Acid-Base Balance",
        description:
          "Chloride contributes to electrolyte equilibrium and acid-base physiology, while bicarbonate is an important component of the body's buffering systems that help regulate acid-base conditions.",
      },
      {
        title: "Calcium & Magnesium",
        heading: "Muscle, Skeletal & Enzymatic Functions",
        description:
          "Calcium is involved in muscle contraction, cellular signaling, and skeletal mineralization, while magnesium participates in numerous enzymatic reactions and normal nerve and muscle activity.",
      },
      {
        title: "Vitamin C (Ascorbic Acid)",
        heading: "Antioxidant Nutrition",
        description:
          "Vitamin C participates in antioxidant defense, collagen synthesis, and enzyme-dependent processes; supplemental Vitamin C has been investigated under environmental and physiological stress.",
      },
      {
        title: "Carbohydrates & Microbial Component",
        heading: "Energy-Related Ingredients & Declared Microbial Supplement",
        description:
          "Dextrose is a readily metabolizable glucose source while lactose utilization by poultry may be limited. The label lists \u201CLactobacillus Viable Spores\u201D; the precise microorganism, strain and viability require verification, and the wording needs correction because Lactobacillus organisms are generally non-spore-forming.",
      },
    ],
    compositionGroups: [
      {
        title: "Each 100 g Contains (label-declared)",
        rows: [
          ["Sodium Chloride", "0.008 g"],
          ["Potassium Chloride", "5.000 g"],
          ["Sodium Bicarbonate", "3.000 g"],
          ["Sodium Acid Phosphate", "0.800 g"],
          ["Sodium Citrate", "6.500 g"],
          ["Calcium Lactate", "1.700 g"],
          ["Magnesium Sulphate", "1.000 g"],
          ["Lactose", "25.000 g"],
          ["Ascorbic Acid (Coated)", "1.200 g"],
          ["Lactobacillus Viable Spores", "3,000 million"],
          ["Dextrose", "q.s."],
        ],
      },
      {
        title: "General Product Specifications",
        rows: [
          ["Product Type", "Electrolyte & Nutritional Feed Supplement"],
          ["Physical Form", "Powder"],
          ["Nutritional Category", "Electrolyte, Vitamin & Carbohydrate Blend"],
          ["Microbial Component", "Declared; strain to be confirmed"],
          ["Composition Reference", "Per 100 g"],
          ["Pack Size", "1 kg"],
          ["Label Administration", "Feed or Drinking Water"],
          ["Shelf Life", "24 Months"],
          ["Storage", "Cool & Dry Place"],
        ],
      },
    ],
    compositionNote:
      "These quantities are taken from the supplied label and should be reviewed against manufacturer-approved analytical specifications before publication. Final moisture content, powder flowability, sodium and potassium ion concentrations, water-solubility, finished-water pH at the proposed dilution, total dietary electrolyte contribution, and the microorganism identity, strain, guaranteed viable count and viability throughout shelf life all require confirmation, along with a certificate of analysis.",
    dosageTable: [
      { category: "Feed incorporation", quantity: "1 kg per metric tonne of feed" },
      { category: "Drinking-water application", quantity: "1 g in 2 litres of water" },
      { category: "Label duration", quantity: "3â€“5 days" },
    ],
    dosageGuidance: [
      "The BIOLYTE packaging states that the product may be incorporated into poultry feed or drinking water.",
      "Step 01 â€” Assess flock requirements: consider the poultry category, environmental conditions, water intake, feed composition, and health status.",
      "Step 02 â€” Select the appropriate route: confirm whether feed incorporation or drinking-water supplementation is appropriate under the manufacturer's approved instructions.",
      "Step 03 â€” Verify the dose is suitable for the flock's overall electrolyte intake and nutritional condition.",
      "Step 04 â€” Prepare the supplement: for drinking water use clean water and suitable measuring and mixing procedures; for feed incorporation ensure uniform distribution through the finished feed.",
      "Step 05 â€” Monitor the flock, observing drinking behavior, feed intake, droppings, and general condition throughout the supplementation period.",
      "The supplied label also suggests doubling the recommended level in cases of water and electrolyte imbalance. This instruction requires veterinary verification before use â€” electrolyte abnormalities can arise from different conditions, and increasing sodium, potassium, bicarbonate, or magnesium without assessment may worsen an imbalance. The product is not a substitute for veterinary treatment of dehydration or other medical emergencies.",
    ],
    advantages: [
      {
        title: "Comprehensive Electrolyte Blend",
        description:
          "Includes multiple sodium, potassium, calcium, and magnesium-containing ingredients.",
      },
      {
        title: "Vitamin C Enrichment",
        description: "Supplies coated ascorbic acid, an antioxidant-related vitamin ingredient.",
      },
      {
        title: "Carbohydrate Components",
        description: "Contains lactose and dextrose as declared formulation ingredients.",
      },
      {
        title: "Microbial Ingredient",
        description:
          "Includes a declared viable microbial component, subject to identity and potency verification.",
      },
      {
        title: "Feed & Water Applications",
        description: "The label lists both feed incorporation and drinking-water administration.",
      },
      {
        title: "Commercial 1 kg Pack",
        description:
          "Provided in a powder format suitable for measured farm use under confirmed instructions.",
      },
    ],
    handling: [
      "Keep the product in its original packaging and close it securely after use.",
      "Prevent moisture exposure and avoid contamination during handling.",
      "Use clean and dry measuring equipment and follow verified mixing instructions.",
      "Keep away from incompatible chemicals and unauthorized access.",
      "Check manufacturing and expiry details before administration.",
      "Protect the product against unsuitable storage conditions that may affect microbial viability.",
    ],
    faqs: [
      {
        question: "What is BIOLYTE?",
        answer:
          "BIOLYTE is a Poultriva-branded powdered poultry feed supplement containing electrolyte salts, Vitamin C, carbohydrates, and a declared microbial component.",
      },
      {
        question: "What is the primary purpose of BIOLYTE?",
        answer:
          "BIOLYTE is intended to provide supplemental electrolyte and related nutritional ingredients for poultry management, particularly where additional nutritional support may be appropriate.",
      },
      {
        question: "Why are electrolytes important for poultry?",
        answer:
          "Electrolytes contribute to normal fluid regulation, muscle activity, nerve signaling, and acid-base balance.",
      },
      {
        question: "Can BIOLYTE support poultry during hot weather?",
        answer:
          "Its electrolyte and Vitamin C ingredients are relevant to heat-stress nutrition research. However, its specific effect on heat tolerance or flock performance has not been independently established.",
      },
      {
        question: "Is BIOLYTE useful around poultry transportation?",
        answer:
          "The label lists use before and after transportation. Appropriate supplementation may be considered as part of professional transport-management planning.",
      },
      {
        question: "Does BIOLYTE improve water intake or reduce stress?",
        answer:
          "Water intake and stress depend on temperature, water quality, and flock condition. An increase in water consumption or a measurable reduction in stress from BIOLYTE has not been established through supplied product-specific testing.",
      },
      {
        question: "Which electrolytes are present in BIOLYTE?",
        answer:
          "The label lists sodium chloride, potassium chloride, sodium bicarbonate, sodium acid phosphate, sodium citrate, calcium lactate, and magnesium sulphate.",
      },
      {
        question: "Does BIOLYTE contain Vitamin C?",
        answer: "Yes. The supplied label declares 1.200 g of coated ascorbic acid per 100 g.",
      },
      {
        question: "Does BIOLYTE contain probiotics?",
        answer:
          "The label states \u201CLactobacillus Viable Spores.\u201D The precise microorganism, strain, and viability specifications must be verified before describing it as a validated probiotic product.",
      },
      {
        question: "How is BIOLYTE administered?",
        answer:
          "The label lists 1 g per 2 litres of drinking water for 3â€“5 days, or 1 kg per metric tonne of feed. The correct application and uniform mixing should be confirmed with the manufacturer or veterinarian.",
      },
      {
        question: "Can BIOLYTE be given to chicks, broilers and layers?",
        answer:
          "Its electrolyte ingredients are relevant to poultry nutrition generally, but the appropriate dosage and category-specific suitability must be established with professional guidance.",
      },
      {
        question: "Can excessive electrolyte supplementation be harmful?",
        answer:
          "Yes. Excess amounts of sodium, potassium, bicarbonate, or other electrolytes can disrupt normal physiological balance.",
      },
      {
        question: "Should the dosage be doubled during electrolyte imbalance?",
        answer:
          "The label includes that statement, but it should not be followed automatically. A veterinarian should first assess the cause and severity of the imbalance.",
      },
      {
        question:
          "What are the pack size and shelf life, and is BIOLYTE an antibiotic or medicine?",
        answer:
          "BIOLYTE is supplied in a 1 kg pack with a 24-month shelf life from manufacturing. No antibiotic ingredient is identified on the supplied label; it is presented as a poultry feed concentrate and marked not for medical use.",
      },
    ],
  },
  {
    id: "p12",
    slug: "selenova",
    name: "Selenova",
    index: "12",
    category: "Antioxidant Supplement",
    focusArea: "Vitamin E, Selenium & Antioxidant Nutrition",
    form: "Vitamin, trace mineral & amino acid powder",
    shortDescription:
      "A powdered feed supplement with Vitamin E, selenium, biotin and essential amino acids for antioxidant, immune and reproductive nutrition.",
    detailedDescription:
      "SELENOVA by Poultriva is a specialized poultry feed supplement containing Vitamin E, selenium, biotin, L-lysine, DL-methionine and tryptophan. It combines antioxidant-related micronutrients with essential amino acids that participate in normal growth, tissue maintenance, metabolism and reproductive function, and is intended to complement properly balanced feeding programs when professional nutritional assessment indicates additional supplementation is appropriate.",
    image: selenovaImg,
    imageAlt:
      "Poultriva SELENOVA 1 kg poultry feed supplement containing Vitamin E, selenium, biotin, lysine, methionine and tryptophan for antioxidant nutritional support.",
    applications: [
      "Antioxidant and micronutrient nutritional support",
      "Immune and reproductive nutrition across production stages",
      "Feed or drinking-water administration under professional guidance",
    ],
    composition: "Vitamin E, selenium, biotin and essential amino acids (see composition below)",
    packSizes: "1 kg",
    dosage:
      "200 g per MT of feed, or 5 g per 200 birds (50 for broilers) in water (label-declared)",
    storage:
      "Store in a cool, dry place away from direct sunlight; protect from moisture and heat.",
    disclaimer: DISCLAIMER,
    seoTitle: "SELENOVA | Vitamin E & Selenium Poultry Supplement | Poultriva",
    seoDescription:
      "Discover Poultriva SELENOVA, a Vitamin E, selenium, biotin and amino acid feed supplement for poultry antioxidant, immune and reproductive nutrition.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading:
      "Powerful Antioxidant Nutrition. Stronger Flock Foundations. Better Performance Potential.",
    heroIntro: [
      "Support your poultry flock with SELENOVA, a specialized feed supplement from Poultriva formulated with Vitamin E, selenium, biotin, and selected essential amino acids.",
      "Designed to complement balanced poultry nutrition programs, SELENOVA brings together nutrients involved in antioxidant defense, normal immune function, reproductive physiology, cellular protection, and healthy growth from developing chicks to commercial broilers and laying flocks.",
    ],
    highlights: [
      "High-Concentration Vitamin E Formulation",
      "Selenium-Based Antioxidant Nutrition",
      "Biotin for Normal Metabolic Function",
      "L-Lysine, DL-Methionine & Tryptophan",
      "Supports Normal Immune Function",
      "Nutritional Support for Reproductive Health",
      "Supports Healthy Growth & Tissue Development",
      "Convenient 1 kg Powder Pack",
    ],
    overviewLabel: "About Selenova",
    overviewHeading: "Advanced Antioxidant & Micronutrient Nutrition for Poultry",
    overviewParagraphs: [
      "SELENOVA by Poultriva is a specialized poultry feed supplement containing Vitamin E, selenium, biotin, L-lysine, DL-methionine, and tryptophan.",
      "The formulation combines antioxidant-related micronutrients with essential amino acids that participate in normal biological processes important for poultry growth, tissue maintenance, metabolism, and reproductive function.",
      "Vitamin E is a fat-soluble antioxidant that helps protect cellular membranes against oxidative damage, while selenium is an essential trace mineral required for selenoproteins involved in antioxidant defense, thyroid hormone metabolism, and other physiological functions.",
      "Biotin participates in enzyme-dependent metabolic processes, while lysine, methionine, and tryptophan are essential amino acids involved in protein synthesis and other biological pathways.",
      "SELENOVA is intended to complement properly balanced feeding programs when professional nutritional assessment indicates additional supplementation is appropriate.",
    ],
    quickInfo: [
      ["Product Name", "SELENOVA"],
      ["Brand", "Poultriva"],
      ["Product Category", "Poultry Feed Supplement"],
      ["Product Type", "Vitamin, Trace Mineral & Amino Acid Supplement"],
      ["Primary Nutrients", "Vitamin E & Selenium"],
      ["Additional Vitamin", "Biotin"],
      ["Essential Amino Acids", "L-Lysine, DL-Methionine & Tryptophan"],
      ["Main Application", "Antioxidant & Nutritional Support"],
      ["Physical Form", "Powder"],
      ["Administration", "Feed or Drinking Water, as labeled"],
      ["Net Quantity", "1 kg"],
      ["Shelf Life", "24 Months from Manufacturing"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefits: [
      {
        index: "01",
        title: "Antioxidant Protection",
        heading: "Supporting Cellular Defense Mechanisms",
        description:
          "Vitamin E and selenium contribute to complementary antioxidant pathways that protect biological components from oxidative damage. Adequate intake helps maintain normal cellular function.",
      },
      {
        index: "02",
        title: "Immune Function Support",
        heading: "Nourishing Natural Defense Systems",
        description:
          "Vitamin E and selenium participate in biological processes associated with normal immune function. Balanced micronutrient nutrition helps support the physiological systems involved in healthy immune responses.",
      },
      {
        index: "03",
        title: "Reproductive Nutrition",
        heading: "Supporting Breeder & Layer Requirements",
        description:
          "Vitamin E and selenium are important components of balanced reproductive nutrition, and adequate micronutrient intake contributes to normal reproductive physiology and embryonic development.",
      },
      {
        index: "04",
        title: "Growth & Tissue Development",
        heading: "Essential Nutrients for Healthy Development",
        description:
          "Lysine, methionine, and tryptophan contribute to protein synthesis and normal tissue formation; the product supplies these nutrients as part of its broader micronutrient formulation.",
      },
      {
        index: "05",
        title: "Skin & Feather Nutrition",
        heading: "Supporting Normal Tissue Maintenance",
        description:
          "Biotin is important for several metabolic processes and contributes to the maintenance of normal skin and associated tissues, while methionine is relevant to feather protein formation.",
      },
      {
        index: "06",
        title: "Environmental Stress Nutrition",
        heading: "Supporting Antioxidant Requirements",
        description:
          "Environmental challenges may increase oxidative demands in poultry. Adequate Vitamin E and selenium nutrition contributes to normal antioxidant defense, alongside proper environmental and veterinary management.",
      },
    ],
    detailedApplications: [
      {
        title: "Chicks",
        heading: "Supporting Early-Stage Nutritional Development",
        description:
          "Young chicks require appropriate vitamins, trace minerals, and essential amino acids for normal growth and physiological function.",
        focus: [
          "Normal immune development",
          "Antioxidant nutritional support",
          "Early growth-related metabolism",
          "Healthy tissue formation",
          "Essential micronutrient adequacy",
        ],
      },
      {
        title: "Growers",
        heading: "Supporting Healthy Development",
        description:
          "Growing poultry require balanced nutrient intake for tissue development and normal metabolic activity.",
        focus: [
          "Growth-stage antioxidant nutrition",
          "Normal cellular development",
          "Protein-related nutrient requirements",
          "Skin and feather maintenance",
          "Overall nutritional balance",
        ],
      },
      {
        title: "Broilers",
        heading: "Supporting Growth-Oriented Poultry Management",
        description:
          "Commercial broilers require carefully balanced nutritional programs and appropriate environmental management.",
        focus: [
          "Vitamin E and selenium nutrition",
          "Normal immune system function",
          "Tissue and muscle development",
          "Antioxidant defense",
          "Growth-stage metabolic support",
        ],
      },
      {
        title: "Layers & Breeders",
        heading: "Supporting Productive & Reproductive Flock Nutrition",
        description:
          "Laying hens require adequate micronutrient nutrition throughout egg production, and Vitamin E and selenium are relevant to normal reproductive physiology in breeders. Use in breeder flocks should be confirmed against approved manufacturer instructions.",
        focus: [
          "Reproductive nutritional requirements",
          "Normal immune function",
          "Antioxidant defense",
          "Tissue maintenance and body condition",
          "Normal embryonic development",
        ],
      },
    ],
    formula: [
      {
        title: "Vitamin E",
        heading: "Antioxidant & Cellular Support",
        description:
          "An essential fat-soluble vitamin involved in protecting cellular membranes against oxidative damage, supporting normal antioxidant defense, immune-related functions, reproductive nutrition and tissue maintenance.",
      },
      {
        title: "Selenium",
        heading: "Essential Trace Mineral for Antioxidant Enzymes",
        description:
          "Required for several selenoproteins involved in antioxidant defense, thyroid hormone metabolism, normal immune function and reproductive physiology.",
      },
      {
        title: "Biotin",
        heading: "Supporting Metabolic & Tissue Functions",
        description:
          "Also known as Vitamin B7 or Vitamin H, biotin participates in multiple carboxylase-dependent metabolic reactions involved in fatty acid metabolism, energy processes and normal skin and tissue maintenance.",
      },
      {
        title: "L-Lysine",
        heading: "Essential Amino Acid for Protein Synthesis",
        description:
          "An essential amino acid that must be supplied through the diet, important for protein synthesis, normal muscle development and tissue maintenance.",
      },
      {
        title: "DL-Methionine",
        heading: "Sulfur Amino Acid Nutrition",
        description:
          "An essential sulfur-containing amino acid involved in protein synthesis, feather protein formation, tissue development and methyl-group metabolism.",
      },
      {
        title: "Tryptophan",
        heading: "Essential Amino Acid & Metabolic Precursor",
        description:
          "Required for protein synthesis and a precursor for several biologically important molecules, including serotonin, contributing to normal metabolic pathways.",
      },
    ],
    compositionGroups: [
      {
        title: "Each 1 Gram Contains (label-declared)",
        rows: [
          ["Vitamin E", "100 mg"],
          ["Selenium", "200 mcg"],
          ["Biotin", "4 mcg"],
          ["L-Lysine", "8 mg"],
          ["DL-Methionine", "5 mg"],
          ["Tryptophan", "200 mcg"],
        ],
      },
      {
        title: "General Product Specifications",
        rows: [
          ["Product Type", "Vitamin, Trace Mineral & Amino Acid Feed Supplement"],
          ["Physical Form", "Powder"],
          ["Primary Nutrients", "Vitamin E & Selenium"],
          ["Additional Vitamin", "Biotin"],
          ["Amino Acids", "Lysine, Methionine & Tryptophan"],
          ["Composition Reference", "Per Gram"],
          ["Administration", "Feed or Drinking Water"],
          ["Pack Size", "1 kg"],
          ["Shelf Life", "24 Months"],
          ["Storage", "Cool & Dry Place"],
        ],
      },
    ],
    compositionNote:
      "Values are transcribed from the supplied packaging and should be verified against manufacturer-approved specifications before publication. The chemical form and source of selenium, its elemental-basis concentration, the form and potency basis of Vitamin E, biotin and amino acid assays, carrier/excipient composition, water solubility, moisture content, stability, a certificate of analysis and safety data sheet all require confirmation.",
    dosageTable: [
      { category: "Chicks, Growers & Layers â€” Feed", quantity: "200 g per metric tonne of feed" },
      { category: "Chicks, Growers & Layers â€” Water", quantity: "5 g per 200 birds" },
      { category: "Broilers â€” Water", quantity: "5 g per 50 birds" },
    ],
    dosageGuidance: [
      "SELENOVA is labeled for incorporation into feed or administration through drinking water, and the manufacturer directs that its use follow recommendations from a veterinarian or nutritionist.",
      "Step 01 â€” Identify the poultry category: determine bird age, production stage, and existing nutritional requirements.",
      "Step 02 â€” Evaluate the complete feed: consider Vitamin E and selenium already present in commercial feeds, premixes, and other supplements.",
      "Step 03 â€” Verify the appropriate dosage for the specific flock with a veterinarian or poultry nutritionist.",
      "Step 04 â€” Select the authorized application method (feed incorporation or drinking water) appropriate for the product formulation.",
      "Step 05 â€” Ensure uniform distribution using suitable measuring and mixing equipment to prevent uneven nutrient concentrations.",
      "Step 06 â€” Monitor flock condition, reviewing overall nutrition, feed intake, drinking-water consumption, and general condition.",
      "Selenium has a relatively narrow margin between nutritional adequacy and potentially harmful excess, so the total selenium supplied through the complete diet and all supplements must be considered. The label does not specify the drinking-water dilution volume, frequency, or duration â€” do not assume the per-bird quantity can be repeated daily without confirming the manufacturer's full instructions.",
    ],
    advantages: [
      {
        title: "Vitamin E & Selenium Combination",
        description:
          "Supplies two essential nutrients associated with complementary antioxidant functions.",
      },
      {
        title: "Biotin-Enriched Formulation",
        description:
          "Includes biotin for enzyme-dependent metabolism and normal tissue maintenance.",
      },
      {
        title: "Essential Amino Acid Components",
        description:
          "Contains lysine, methionine, and tryptophan as additional nutritional ingredients.",
      },
      {
        title: "Multiple Poultry Categories",
        description:
          "The label provides usage information for chicks, growers, layers, and broilers.",
      },
      {
        title: "Feed & Water Administration",
        description:
          "Offers two label-listed application routes, subject to verified product instructions.",
      },
      {
        title: "Commercial Powder Packaging",
        description: "Available in a 1 kg pack for poultry nutritional supplementation.",
      },
    ],
    handling: [
      "Store in the original labeled packaging and keep the container or packet securely closed.",
      "Protect from moisture, heat, and contamination, and use clean, dry measuring equipment.",
      "Prevent accidental over-supplementation and do not mix with other mineral supplements without confirming total selenium exposure.",
      "Check the batch number, manufacturing date, and expiry before use.",
      "Follow manufacturer instructions for product preparation and storage.",
      "Keep away from children and unauthorized persons.",
    ],
    faqs: [
      {
        question: "What is SELENOVA?",
        answer:
          "SELENOVA is a Poultriva-branded powder feed supplement containing Vitamin E, selenium, biotin, L-lysine, DL-methionine, and tryptophan.",
      },
      {
        question: "What are the main nutritional benefits of SELENOVA?",
        answer:
          "Its ingredients support normal antioxidant defense, immune function, protein synthesis, metabolism, tissue maintenance, and reproductive physiology.",
      },
      {
        question: "Why are Vitamin E and selenium important together?",
        answer:
          "Vitamin E protects cellular membranes against oxidation, while selenium supports selenoproteins involved in antioxidant and other metabolic processes.",
      },
      {
        question: "Does SELENOVA improve poultry immunity?",
        answer:
          "Vitamin E and selenium contribute to normal immune-related functions. However, a measurable improvement in disease resistance from SELENOVA requires product-specific evidence.",
      },
      {
        question: "Can SELENOVA reduce poultry stress?",
        answer:
          "The label presents stress reduction as a benefit. Its ingredients support normal antioxidant nutrition, but a specific reduction in physiological stress has not been independently established for this product.",
      },
      {
        question: "Is SELENOVA suitable for chicks, broilers and layers?",
        answer:
          "The label lists chicks, growers, layers, and broilers among its application categories. Actual administration should follow verified manufacturer instructions and account for age and existing nutrient intake.",
      },
      {
        question: "Does SELENOVA improve hatchability?",
        answer:
          "Vitamin E and selenium are important nutrients in reproductive physiology. However, increased hatchability cannot be guaranteed without controlled product-specific evidence.",
      },
      {
        question: "Can SELENOVA improve growth and feed conversion ratio?",
        answer:
          "Its amino acids and micronutrients are involved in normal growth-related processes, but a specific improvement in weight gain or FCR has not been demonstrated by supplied SELENOVA trial data.",
      },
      {
        question: "What is the role of biotin, lysine, methionine and tryptophan?",
        answer:
          "Biotin participates in enzyme reactions and tissue functions; lysine and methionine support protein synthesis and tissue development; and tryptophan supports protein synthesis and serves as a precursor for compounds including serotonin. The amino acid quantities present are relatively small compared with total dietary requirements.",
      },
      {
        question: "How much Vitamin E and selenium does SELENOVA contain?",
        answer:
          "According to the supplied label, each gram contains 100 mg of Vitamin E and 200 mcg of selenium.",
      },
      {
        question: "What are the feed and drinking-water dosages?",
        answer:
          "The label states 200 g per metric tonne of feed for chicks, growers and layers; 5 g per 200 birds in water for chicks, growers and layers; and 5 g per 50 birds in water for broilers. The water volume and frequency require confirmation.",
      },
      {
        question: "Can excess selenium be harmful?",
        answer:
          "Yes. Excessive selenium intake can be toxic. The full dietary selenium contribution must be assessed before supplementation.",
      },
      {
        question: "Is SELENOVA a probiotic or antibiotic?",
        answer:
          "No probiotic or antibiotic ingredient is listed on the supplied label. It is presented as a nutritional feed supplement.",
      },
      {
        question: "What are the pack size, shelf life and storage?",
        answer:
          "SELENOVA is supplied in a 1 kg pack with a 24-month shelf life from manufacturing. Store in a cool, dry place, protected from direct sunlight and moisture.",
      },
    ],
  },
  {
    id: "p13",
    slug: "dara-gold",
    name: "Dara Gold",
    index: "13",
    category: "Cattle Feed Supplement",
    focusArea: "Bypass Fat, Protein & Mineral Nutrition",
    form: "Bypass fat cattle feed supplement",
    shortDescription:
      "A cattle feed supplement combining bypass fat, protein, minerals, vitamins, amino acids, sulphur and Bacillus subtilis for dairy animal nutrition.",
    detailedDescription:
      "DARA GOLD by Sarvadhenu is a specialized cattle feed supplement formulated with bypass fat, protein, selected minerals, essential vitamins, amino acids, sulphur, sodium acid phosphate, and Bacillus subtilis, designed to complement balanced cattle feed formulations and support the nutritional requirements of dairy animals.",
    image: daraGoldImg,
    imageAlt:
      "Sarvadhenu DARA GOLD cattle feed supplement containing bypass fat, protein, vitamins, minerals, amino acids, and Bacillus subtilis for dairy animal nutrition.",
    applications: [
      "Bypass fat, protein and mineral supplementation for dairy cattle",
      "Feed concentrate enrichment for lactating and high-yielding cows",
      "Use under veterinary or animal nutritionist guidance",
    ],
    composition:
      "Bypass fat, protein, minerals, vitamins, amino acids and Bacillus subtilis (see composition below)",
    packSizes: "Not specified on supplied label",
    dosage: "1 kg per 100 kg feed concentrate (label-declared)",
    storage: "Not specified on supplied label; follow manufacturer-approved storage instructions",
    disclaimer: CATTLE_DISCLAIMER,
    seoTitle: "DARA GOLD | Bypass Fat Cattle Feed Supplement | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu DARA GOLD, a cattle feed supplement containing bypass fat, protein, vitamins, minerals, amino acids, and Bacillus subtilis for dairy animal nutrition.",
    tagline: "Better Nutrition. Healthier Animals. Productive Dairy Farming.",
    heroHeading: "Better Nutrition. Improved Milk Fat. Stronger Dairy Performance.",
    heroIntro: [
      "Unlock the nutritional potential of your dairy animals with DARA GOLD, a specialized cattle feed supplement combining bypass fat, protein, essential minerals, vitamins, amino acids, sulphur, and beneficial probiotic ingredients.",
      "Developed to complement professionally balanced cattle feeding programs, DARA GOLD provides important nutritional components involved in energy supply, protein metabolism, normal skeletal development, digestive health, and overall animal nutrition. From lactating dairy cows to modern commercial dairy farming operations, DARA GOLD offers comprehensive nutritional supplementation for productive dairy management.",
    ],
    highlights: [
      "Bypass Fat-Based Energy Nutrition",
      "Protein Supplementation",
      "Essential Mineral Ingredients",
      "Vitamin A & Vitamin D Nutrition",
      "Amino Acid Supplementation",
      "Bacillus subtilis Probiotic Inclusion",
      "Supports Balanced Dairy Nutrition",
      "Supports Milk Fat Nutritional Requirements",
      "Convenient Feed Concentrate Mixing",
    ],
    overviewLabel: "About Dara Gold",
    overviewHeading: "Advanced Cattle Nutrition for Modern Dairy Farming",
    overviewParagraphs: [
      "DARA GOLD by Sarvadhenu is a specialized cattle feed supplement formulated with bypass fat, protein, selected minerals, essential vitamins, amino acids, sulphur, sodium acid phosphate, and Bacillus subtilis.",
      "Bypass fat is a concentrated dietary energy source used in dairy nutrition to complement the energy requirements of lactating animals.",
      "Protein and amino acids are important nutritional components involved in tissue maintenance, protein synthesis, and normal metabolic functions.",
      "The formulation also includes calcium, phosphorus, potassium, manganese, iron, zinc, cobalt, copper, and sulphur.",
      "Vitamin A and Vitamin D contribute to important physiological processes, while Bacillus subtilis provides a probiotic component within the nutritional formulation.",
      "DARA GOLD is designed to complement balanced cattle feed formulations and support the nutritional requirements of dairy animals.",
    ],
    quickInfo: [
      ["Product Name", "DARA GOLD"],
      ["Brand", "Sarvadhenu"],
      ["Brand Category", "Animal Feed & Nutrition"],
      ["Product Category", "Cattle Feed Supplement"],
      ["Product Type", "Nutritional Feed Supplement"],
      ["Primary Nutritional Component", "Bypass Fat"],
      ["Additional Nutrients", "Protein, Minerals & Vitamins"],
      ["Vitamin Components", "Vitamin A & Vitamin D"],
      ["Probiotic Component", "Bacillus subtilis"],
      ["Additional Ingredients", "Amino Acid, Sulphur & Sodium Acid Phosphate"],
      ["Primary Application", "Dairy Cattle Nutrition"],
      ["Recommended Mixing Ratio", "1 kg per 100 kg Feed Concentrate"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Supporting Essential Nutritional Functions for Productive Dairy Animals",
    applicationsEyebrow: "Dairy cattle nutrition applications",
    applicationsHeading: "Essential Nutritional Support Across Dairy Production Stages",
    advantageEyebrow: "The Dara Gold advantage",
    advantageHeading: "Specialized Nutrition for Modern Dairy Operations",
    benefits: [
      {
        index: "01",
        title: "Milk Yield Nutritional Support",
        heading: "Bypass Fat-Based Energy Nutrition",
        description:
          "Lactating dairy animals require adequate dietary energy to support milk production and normal body functions. Bypass fat provides concentrated dietary energy and can complement balanced dairy feeding programs.",
      },
      {
        index: "02",
        title: "Milk Fat Nutritional Support",
        heading: "Supporting Balanced Dairy Nutrition",
        description:
          "Dietary fat composition and overall ration balance are important factors in milk fat synthesis. DARA GOLD includes bypass fat as part of its formulation to complement the nutritional requirements of dairy animals.",
      },
      {
        index: "03",
        title: "Energy & Body Condition",
        heading: "Supporting Essential Energy Requirements",
        description:
          "Energy is an important nutritional component for lactating animals. Bypass fat provides an additional source of concentrated dietary energy that can support properly formulated dairy feeding programs.",
      },
      {
        index: "04",
        title: "Protein & Tissue Development",
        heading: "Protein and Amino Acid Nutrition",
        description:
          "Protein and amino acids are essential for protein synthesis, tissue maintenance, and normal metabolic functions. Adequate protein nutrition contributes to the nutritional requirements of dairy animals.",
      },
      {
        index: "05",
        title: "Digestive Health Support",
        heading: "Bacillus subtilis Probiotic Inclusion",
        description:
          "Bacillus subtilis is a beneficial bacterial species used in animal feed formulations. Its inclusion provides probiotic-based nutritional support as part of balanced feeding and digestive management.",
      },
      {
        index: "06",
        title: "Skeletal & Metabolic Nutrition",
        heading: "Selected Minerals & Vitamins",
        description:
          "Minerals such as calcium, phosphorus, manganese, zinc, and magnesium are involved in normal skeletal and metabolic functions. Vitamin A and Vitamin D contribute to normal physiological processes and overall animal nutrition.",
      },
    ],
    detailedApplications: [
      {
        title: "Lactating Cows",
        heading: "Supporting Productive Dairy Nutrition",
        description:
          "Lactating cows require sufficient dietary energy, protein, minerals, and vitamins to support milk production and normal body maintenance.",
        focus: [
          "Dietary energy supplementation",
          "Bypass fat nutrition",
          "Milk fat nutritional support",
          "Protein and amino acid nutrition",
          "Mineral and vitamin intake",
          "Overall lactation nutrition",
        ],
      },
      {
        title: "High-Yielding Dairy Cows",
        heading: "Supporting Increased Nutritional Demands",
        description:
          "High-producing dairy cows have increased nutritional requirements and require carefully balanced feeding programs.",
        focus: [
          "Concentrated dietary energy",
          "Bypass fat supplementation",
          "Nutritional energy balance",
          "Protein requirements",
          "Mineral and vitamin nutrition",
          "Body condition management",
        ],
      },
      {
        title: "Early Lactation Animals",
        heading: "Building a Strong Nutritional Foundation",
        description:
          "Early lactation is an important stage when dairy animals experience changing energy and nutritional requirements.",
        focus: [
          "Energy intake management",
          "Bypass fat-based supplementation",
          "Protein nutrition",
          "Essential mineral intake",
          "Vitamin supplementation",
          "Balanced feeding management",
        ],
      },
      {
        title: "Dairy Herds",
        heading: "Supporting Consistent Dairy Nutrition",
        description:
          "Maintaining a balanced feeding program is important for the nutritional management of animals across commercial dairy operations. The product's suitability and inclusion level for specific cattle categories should be confirmed using veterinary guidance and the complete feed formulation.",
        focus: [
          "Consistent nutritional supplementation",
          "Feed concentrate enrichment",
          "Mineral and vitamin supply",
          "Protein and energy nutrition",
          "Digestive nutritional support",
          "General herd management",
        ],
      },
    ],
    formula: [
      {
        title: "Bypass Fat",
        heading: "Supporting Energy Supply & Dairy Nutrition",
        description:
          "A specialized dietary fat source used in dairy nutrition to provide concentrated energy while reducing the extent of ruminal breakdown compared with ordinary dietary fats. Adequate energy intake is important for lactating animals, particularly when nutritional requirements increase during milk production.",
      },
      {
        title: "Protein",
        heading: "Supporting Tissue Development & Maintenance",
        description:
          "An essential nutritional component required for the formation and maintenance of body tissues; supplies amino acids involved in numerous metabolic processes and contributes to the nutritional requirements of milk-producing animals.",
      },
      {
        title: "Bacillus subtilis",
        heading: "Supporting Probiotic-Based Digestive Nutrition",
        description:
          "A bacterial species commonly used in animal nutrition formulations as a probiotic ingredient; its inclusion complements balanced feeding and appropriate digestive management practices.",
      },
      {
        title: "Calcium",
        heading: "Skeletal Structure & Muscle Function",
        description: "Involved in skeletal structure, muscle contraction, and nerve function.",
      },
      {
        title: "Phosphorus",
        heading: "Skeletal Development & Energy Metabolism",
        description: "Involved in skeletal development and energy metabolism.",
      },
      {
        title: "Potassium",
        heading: "Muscle, Nerve & Fluid Balance",
        description: "Involved in muscle function, nerve activity, and fluid balance.",
      },
      {
        title: "Manganese",
        heading: "Bone Development & Enzyme Activity",
        description: "Involved in bone development, connective tissue, and enzyme activity.",
      },
      {
        title: "Iron",
        heading: "Hemoglobin Formation & Oxygen Transport",
        description: "Involved in hemoglobin formation and oxygen transport.",
      },
      {
        title: "Zinc",
        heading: "Enzyme Activity, Protein Synthesis & Immune Function",
        description: "Involved in enzyme activity, protein synthesis, and immune function.",
      },
      {
        title: "Copper",
        heading: "Connective Tissue, Iron Metabolism & Antioxidant Functions",
        description:
          "Involved in connective tissue formation, iron metabolism, and antioxidant functions.",
      },
      {
        title: "Cobalt",
        heading: "Rumen Microorganisms & Vitamin B12",
        description: "Rumen microorganisms use cobalt to synthesise Vitamin B12.",
      },
      {
        title: "Sulphur",
        heading: "Amino Acids & Metabolic Processes",
        description: "A component of certain amino acids and involved in metabolic processes.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Composition (as on product label)",
        rows: [
          ["Protein", "15 gm"],
          ["Cobalt", "5 mg"],
          ["Bypass Fat", "75 gm"],
          ["Manganese", "350 mg"],
          ["Calcium", "20 gm"],
          ["Potassium", "25 mg"],
          ["Phosphorus", "12 gm"],
          ["Zinc", "500 gm*"],
          ["Ferrous (Iron)", "250 mg"],
          ["Copper", "60 mg"],
          ["Sulphur", "5 gm"],
          ["Vitamin A", "75,000 IU"],
          ["Vitamin D", "10,000 IU"],
          ["Amino Acid", "500 mg"],
          ["Sodium Acid Phosphate", "5 gm"],
          ["Bacillus subtilis", "5 Billion CFU"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Name", "DARA GOLD"],
          ["Brand", "Sarvadhenu"],
          ["Product Category", "Cattle Feed Supplement"],
          ["Product Form", "Feed Supplement"],
          ["Primary Nutrient Group", "Bypass Fat & Protein"],
          ["Additional Nutrients", "Minerals, Vitamins & Amino Acids"],
          ["Probiotic Component", "Bacillus subtilis"],
          ["Composition Reference", "Not specified on supplied label"],
          ["Recommended Mixing Ratio", "1 kg per 100 kg Feed Concentrate"],
          ["Pack Size", "Not specified on supplied label"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Storage", "Manufacturer-approved instructions required"],
        ],
      },
    ],
    compositionNote:
      "*The zinc quantity is reproduced exactly as printed on the supplied product label; its unit requires manufacturer verification before it is treated as a validated specification. The declared bypass fat source and percentage, protein analytical basis and source, vitamin A/D source forms, Bacillus subtilis strain identification and guaranteed viable count, and the identity of the mineral salts should be confirmed through the manufacturer-approved technical specification and certificate of analysis.",
    dosageTable: [
      { category: "Cattle feed concentrate", quantity: "1 kg per 100 kg of feed concentrate" },
    ],
    dosageGuidance: [
      "Step 01 â€” Identify the feed requirement: determine the quantity of cattle feed concentrate required.",
      "Step 02 â€” Measure DARA GOLD: 1 kg for every 100 kg of feed concentrate.",
      "Step 03 â€” Mix thoroughly to ensure uniform distribution.",
      "Step 04 â€” Incorporate into the balanced daily ration.",
      "Step 05 â€” Monitor feed intake, milk production, animal condition, and nutritional requirements under professional guidance.",
      "Follow the mixing ratio stated on the label and consider the nutrient contribution of other feed ingredients and supplements. Avoid excessive mineral supplementation, maintain access to clean drinking water, and consult a veterinarian or animal nutritionist when adjusting the program. The label specifies a mixing ratio only and gives no separate daily per-animal dosage or feeding frequency.",
    ],
    advantages: [
      {
        title: "Multiple Nutritional Components",
        description:
          "Combines bypass fat, protein, amino acids, vitamins, minerals, and probiotic ingredients.",
      },
      {
        title: "Bypass Fat-Based Formulation",
        description:
          "Provides a concentrated dietary energy component relevant to dairy feeding programs.",
      },
      {
        title: "Comprehensive Mineral Nutrition",
        description:
          "Includes multiple declared minerals involved in important physiological functions.",
      },
      {
        title: "Vitamin A & D Supplementation",
        description:
          "Includes two essential vitamins that contribute to normal animal health and metabolic functions.",
      },
      {
        title: "Probiotic-Based Formulation",
        description:
          "Includes Bacillus subtilis as a probiotic ingredient in the nutritional formulation.",
      },
      {
        title: "Convenient Feed Concentrate Application",
        description:
          "The product label specifies a mixing ratio of 1 kg per 100 kg of feed concentrate.",
      },
      {
        title: "Dairy-Focused Nutrition",
        description:
          "Designed to complement balanced feeding programs for modern dairy farming operations.",
      },
    ],
    handling: [
      "Keep the product in its original packaging.",
      "Protect from moisture and contamination.",
      "Follow manufacturer-recommended storage conditions.",
      "Check the manufacturing date, expiry information, and batch number.",
      "Use appropriate measuring equipment.",
      "Ensure uniform mixing with feed concentrate.",
      "Avoid excessive supplementation.",
      "Follow verified mixing and feeding instructions.",
      "Keep out of reach of children and unauthorized persons.",
      "Animal cattle feed supplement; not for human use and not a veterinary medicine.",
      "Pack size and shelf life are to be confirmed from manufacturer-approved specifications.",
    ],
    faqs: [
      {
        question: "What is DARA GOLD?",
        answer:
          "DARA GOLD is a Sarvadhenu-branded cattle feed supplement containing bypass fat, protein, minerals, vitamins, amino acids, and Bacillus subtilis.",
      },
      {
        question: "What are the main nutritional benefits of DARA GOLD?",
        answer:
          "Its nutritional components contribute to dietary energy supply, protein nutrition, normal skeletal development, metabolic functions, and probiotic-based digestive nutrition.",
      },
      {
        question: "Why is bypass fat important for dairy cattle?",
        answer:
          "Bypass fat provides concentrated dietary energy and can complement the increased energy requirements of lactating dairy animals.",
      },
      {
        question: "Does DARA GOLD support milk yield?",
        answer:
          "DARA GOLD contains bypass fat and other nutritional ingredients that complement dairy feeding programs. Actual milk production depends on overall nutrition, animal genetics, health, lactation stage, and management.",
      },
      {
        question: "Does DARA GOLD support milk fat?",
        answer:
          "Dietary fat composition and balanced nutrition are important factors in milk fat synthesis. DARA GOLD includes bypass fat as part of its nutritional formulation.",
      },
      {
        question: "What is the role of protein in DARA GOLD?",
        answer:
          "Protein supplies amino acids required for tissue maintenance, protein synthesis, and normal metabolic functions.",
      },
      {
        question: "Why does DARA GOLD contain Bacillus subtilis?",
        answer:
          "Bacillus subtilis is a bacterial species used as a probiotic ingredient in animal feed formulations to complement digestive and nutritional management.",
      },
      {
        question: "Which minerals are included in DARA GOLD?",
        answer:
          "The product label lists cobalt, manganese, calcium, potassium, phosphorus, zinc, ferrous iron, copper, and sulphur.",
      },
      {
        question: "Does DARA GOLD contain vitamins?",
        answer:
          "Yes. The product label declares Vitamin A at 75,000 IU and Vitamin D at 10,000 IU.",
      },
      {
        question: "What is the role of Vitamin A and Vitamin D?",
        answer:
          "Vitamin A contributes to normal vision, tissue maintenance, immune functions, and reproduction. Vitamin D plays an important role in calcium and phosphorus absorption and normal skeletal development.",
      },
      {
        question: "What is the recommended dosage of DARA GOLD?",
        answer:
          "The product label specifies mixing 1 kg of DARA GOLD into 100 kg of feed concentrate.",
      },
      {
        question: "Can DARA GOLD be mixed directly into cattle feed?",
        answer:
          "Yes. The declared usage instruction specifies mixing the supplement with cattle feed concentrate at the recommended ratio.",
      },
      {
        question: "Is DARA GOLD suitable for lactating cows?",
        answer:
          "The product is positioned for cattle nutritional supplementation. Its suitability and inclusion level for lactating cows should be confirmed according to the complete ration and professional guidance.",
      },
      {
        question: "Can DARA GOLD replace regular cattle feed?",
        answer:
          "No. DARA GOLD is a nutritional supplement intended to complement a balanced cattle feeding program, not replace regular cattle feed or quality forage.",
      },
      {
        question: "Does DARA GOLD contain amino acids?",
        answer: "Yes. The product label declares an amino acid component of 500 mg.",
      },
      {
        question: "What is the role of cobalt in cattle nutrition?",
        answer:
          "Cobalt is an important trace mineral for ruminants because rumen microorganisms use it in Vitamin B12 synthesis.",
      },
      {
        question: "Is DARA GOLD a veterinary medicine?",
        answer: "No. DARA GOLD is labeled as an animal feed supplement, not a veterinary medicine.",
      },
    ],
  },
  {
    id: "p14",
    slug: "h-vita-gold",
    name: "H-VITA GOLD",
    index: "14",
    category: "Livestock & Poultry Feed Supplement",
    focusArea: "Vitamin H (Biotin), Multivitamin & Mineral Nutrition",
    form: "Liquid multivitamin & mineral supplement",
    shortDescription:
      "A liquid multivitamin and mineral feed supplement with Vitamin H (Biotin), Vitamins A, D3, E and C, zinc, cobalt and selenium for livestock and poultry nutrition.",
    detailedDescription:
      "H-VITA GOLD by Sarvadhenu is a specialized liquid vitamin and mineral feed supplement formulated with Vitamin A, Vitamin D3, Vitamin E, Vitamin H (Biotin), Vitamin C, zinc, cobalt, and selenium, designed to complement balanced feeding programs for dairy cattle, buffaloes, calves, sheep, goats, and poultry.",
    image: hVitaGoldImg,
    imageAlt:
      "Sarvadhenu H-VITA GOLD liquid multivitamin and mineral feed supplement containing Vitamin H Biotin, Vitamins A, D3, E, C, Zinc, Cobalt, and Selenium.",
    applications: [
      "Vitamin H (Biotin), multivitamin and trace mineral supplementation",
      "Nutritional support for cattle, buffaloes, calves, sheep, goats and poultry",
      "Use under veterinary or animal nutritionist guidance",
    ],
    composition:
      "Vitamins A, D3, E, H (Biotin) and C with zinc, cobalt and selenium (see composition below)",
    packSizes: "250 mL, 500 mL & 1 Litre",
    dosage: "Category-specific daily dosage (label-declared), or as directed by a veterinarian",
    storage: "Not specified on supplied label; follow manufacturer-approved storage instructions",
    disclaimer: LIVESTOCK_DISCLAIMER,
    seoTitle: "H-VITA GOLD | Biotin, Multivitamin & Mineral Supplement for Animals | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu H-VITA GOLD, a liquid multivitamin and mineral feed supplement containing Biotin, Vitamins A, D3, E, C, Zinc, Cobalt, and Selenium for livestock and poultry nutrition.",
    tagline: "Essential Vitamins. Stronger Animal Health. Better Nutritional Support.",
    heroHeading: "Advanced Vitamin H, Multivitamin & Mineral Feed Supplement",
    heroIntro: [
      "Unlock the nutritional potential of your animals with H-VITA GOLD, a specialized multivitamin and mineral feed supplement enriched with Vitamin H (Biotin), Vitamin A, Vitamin D3, Vitamin E, Vitamin C, zinc, cobalt, and selenium.",
      "Developed to complement professionally balanced animal feeding programs, H-VITA GOLD provides essential nutritional components involved in normal tissue maintenance, skeletal development, reproductive functions, skin health, and metabolic processes. From dairy cattle and buffaloes to calves, sheep, goats, and poultry, it offers targeted vitamin and mineral supplementation for modern animal husbandry.",
    ],
    highlights: [
      "Vitamin H (Biotin)-Enriched Nutrition",
      "Vitamin A for Essential Physiological Functions",
      "Vitamin D3 for Skeletal Nutrition",
      "Vitamin E & Vitamin C Supplementation",
      "Zinc, Cobalt & Selenium Mineral Support",
      "Supports Normal Udder Tissue Maintenance",
      "Contributes to Skin & Hair Health",
      "Supports Reproductive Nutritional Requirements",
      "Multiple Animal Category Applications",
      "Available in 250 mL, 500 mL & 1 Litre Packaging",
    ],
    overviewLabel: "About H-VITA GOLD",
    overviewHeading: "Advanced Multivitamin & Mineral Nutrition for Modern Animal Farming",
    overviewParagraphs: [
      "H-VITA GOLD by Sarvadhenu is a specialized liquid vitamin and mineral feed supplement formulated with Vitamin A, Vitamin D3, Vitamin E, Vitamin H (Biotin), Vitamin C, zinc, cobalt, and selenium.",
      "Vitamins and minerals are essential nutrients involved in normal growth, tissue maintenance, skin health, skeletal development, immune functions, and reproduction.",
      "Vitamin H, commonly known as Biotin, plays an important role in normal metabolic processes and contributes to healthy skin and tissue maintenance.",
      "Vitamin A contributes to normal vision, epithelial tissue maintenance, and reproductive functions, while Vitamin D3 supports calcium and phosphorus metabolism. Vitamin E and Vitamin C contribute to antioxidant functions and normal physiological processes.",
      "The formulation also includes zinc, cobalt, and selenium, important trace minerals involved in enzyme activity, metabolic functions, and overall animal nutrition.",
      "H-VITA GOLD is designed to complement balanced feeding formulations and support the nutritional requirements of different animal categories.",
    ],
    quickInfo: [
      ["Product Name", "H-VITA GOLD"],
      ["Brand", "Sarvadhenu"],
      ["Brand Category", "Animal Feed & Nutrition"],
      ["Product Category", "Animal Feed Supplement"],
      ["Product Type", "Liquid Multivitamin & Mineral Supplement"],
      ["Primary Vitamin", "Vitamin H (Biotin)"],
      ["Additional Vitamins", "Vitamin A, D3, E & C"],
      ["Mineral Components", "Zinc, Cobalt & Selenium"],
      ["Primary Application", "Livestock & Poultry Nutrition"],
      ["Available Pack Sizes", "250 mL, 500 mL & 1 Litre"],
      ["Recommended Usage", "Animal and poultry category-specific dosage"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Supporting Essential Nutritional Functions for Healthy Animals",
    applicationsEyebrow: "Animal nutrition applications",
    applicationsHeading: "Essential Vitamin & Mineral Support Across Different Animal Categories",
    advantageEyebrow: "The H-VITA GOLD advantage",
    advantageHeading: "Complete Vitamin Nutrition for Livestock and Poultry",
    benefits: [
      {
        index: "01",
        title: "Udder Tissue & Muscle Nutrition",
        heading: "Supporting Normal Tissue Maintenance",
        description:
          "Vitamin and mineral nutrition contributes to normal tissue maintenance and physiological functions. H-VITA GOLD provides biotin and selected nutrients to complement the nutritional requirements associated with healthy tissue and muscle maintenance.",
      },
      {
        index: "02",
        title: "Udder Health Support",
        heading: "Vitamin & Mineral-Based Nutritional Support",
        description:
          "Balanced nutrition is an important component of dairy animal health management. H-VITA GOLD supplies selected vitamins and minerals that contribute to normal physiological functions and can complement appropriate udder health management.",
      },
      {
        index: "03",
        title: "Reproductive Nutrition",
        heading: "Supporting Normal Reproductive Functions",
        description:
          "Vitamins and minerals play important roles in reproductive physiology and metabolic functions. Adequate nutritional intake is an important part of maintaining the overall condition of breeding animals.",
      },
      {
        index: "04",
        title: "Skin & Hair Health",
        heading: "Vitamin H (Biotin)-Based Nutritional Support",
        description:
          "Biotin is involved in normal fatty acid metabolism and the maintenance of skin and other tissues. Adequate biotin nutrition contributes to normal skin and hair condition.",
      },
      {
        index: "05",
        title: "Antioxidant Nutritional Support",
        heading: "Vitamin E & Vitamin C Nutrition",
        description:
          "Vitamin E and Vitamin C contribute to antioxidant functions and help support normal cellular processes. Their dietary adequacy forms part of balanced animal nutrition.",
      },
      {
        index: "06",
        title: "Skeletal & Metabolic Nutrition",
        heading: "Essential Vitamins & Trace Minerals",
        description:
          "Vitamin D3 contributes to calcium and phosphorus metabolism, while zinc, cobalt, and selenium participate in important metabolic and physiological functions. A balanced supply of these nutrients supports normal animal development and maintenance.",
      },
    ],
    detailedApplications: [
      {
        title: "Cattle & Buffalo",
        heading: "Supporting Productive Dairy Animal Nutrition",
        description:
          "Dairy cattle and buffaloes require adequate vitamins and minerals to support normal physiological functions, tissue maintenance, reproduction, and overall health.",
        focus: [
          "Vitamin H nutritional support",
          "Normal udder tissue maintenance",
          "Skin and hair nutrition",
          "Reproductive nutritional requirements",
          "Essential vitamin supplementation",
          "Trace mineral nutrition",
        ],
      },
      {
        title: "Calves",
        heading: "Building a Strong Nutritional Foundation",
        description:
          "Growing calves require appropriate vitamin and mineral intake to support normal growth, skeletal development, and physiological functions.",
        focus: [
          "Growth-stage vitamin nutrition",
          "Normal skeletal development",
          "Tissue maintenance",
          "Skin and hair health",
          "Metabolic nutritional support",
        ],
      },
      {
        title: "Sheep & Goats",
        heading: "Supporting Small Ruminant Nutrition",
        description:
          "Sheep and goats require balanced vitamin and mineral nutrition for normal growth, body maintenance, and reproductive functions.",
        focus: [
          "Vitamin supplementation",
          "Skin and coat maintenance",
          "Normal metabolic functions",
          "Trace mineral nutrition",
          "General physiological support",
        ],
      },
      {
        title: "Poultry",
        heading: "Supporting Balanced Poultry Nutrition",
        description:
          "Poultry require appropriate vitamins and minerals for normal growth, skeletal development, feather maintenance, and metabolic functions. The product's suitability and inclusion level for each animal category should be confirmed using veterinary guidance and the complete feed formulation.",
        focus: [
          "Vitamin H supplementation",
          "Normal feather development",
          "Skin and tissue maintenance",
          "Skeletal nutritional support",
          "Essential vitamin intake",
          "Mineral nutrition",
        ],
      },
    ],
    formula: [
      {
        title: "Vitamin H (Biotin)",
        heading: "Fatty Acid Metabolism, Skin & Hair Health",
        description:
          "Involved in normal fatty acid metabolism and contributes to the maintenance of skin, hair and coat.",
      },
      {
        title: "Vitamin A",
        heading: "Vision, Epithelial Tissue & Reproduction",
        description:
          "Contributes to normal vision, epithelial tissue maintenance, reproductive functions, and immune functions.",
      },
      {
        title: "Vitamin D3",
        heading: "Calcium & Phosphorus Metabolism",
        description:
          "Supports calcium and phosphorus metabolism and contributes to normal bone development.",
      },
      {
        title: "Vitamin E",
        heading: "Antioxidant, Immune & Reproductive Functions",
        description:
          "Contributes to antioxidant functions, immune functions, and normal reproductive processes.",
      },
      {
        title: "Vitamin C",
        heading: "Antioxidant Functions & Connective Tissue",
        description:
          "Contributes to antioxidant functions, collagen formation, and connective tissue maintenance.",
      },
      {
        title: "Zinc",
        heading: "Enzyme Systems, Skin, Protein Synthesis & Immunity",
        description:
          "Involved in enzyme systems, skin maintenance, protein synthesis, and immune function.",
      },
      {
        title: "Cobalt",
        heading: "Rumen Microorganisms & Vitamin B12",
        description: "Rumen microorganisms use cobalt to synthesise Vitamin B12.",
      },
      {
        title: "Selenium",
        heading: "Antioxidant Enzymes & Thyroid Metabolism",
        description: "Involved in antioxidant enzyme systems and thyroid hormone metabolism.",
      },
      {
        title: "Why Nutrient Balance Matters",
        heading: "Targeted, Balanced Supplementation",
        description:
          "Vitamin requirements, skin and hair condition, skeletal development, antioxidant status and reproductive nutrition all depend on a balanced feeding program and targeted supplementation. Balanced nutrient supply is more important than simply increasing the total quantity of supplementation.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Composition (each 10 mL contains, as on product label)",
        rows: [
          ["Vitamin A", "120,000 IU"],
          ["Vitamin D3", "6,000 IU"],
          ["Vitamin E", "15 mg"],
          ["Vitamin H (Biotin)", "1.5 mg"],
          ["Vitamin C", "10 mg"],
          ["Zinc", "180 mg"],
          ["Cobalt", "1 mg"],
          ["Selenium", "1 mg"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Name", "H-VITA GOLD"],
          ["Brand", "Sarvadhenu"],
          ["Product Category", "Animal Feed Supplement"],
          ["Physical Form", "Liquid"],
          ["Composition Reference", "Per 10 mL"],
          ["Pack Sizes", "250 mL, 500 mL & 1 Litre"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Storage", "Manufacturer-approved instructions required"],
        ],
      },
    ],
    compositionNote:
      "Appropriate overages are added to compensate for loss on storage, as declared on the label. The Vitamin A and Vitamin E source forms, and the identity of the mineral salts, should be confirmed through the manufacturer-approved technical specification and certificate of analysis.",
    dosageTable: [
      { category: "Cattle & Buffalo", quantity: "20 mL per day" },
      { category: "Calves", quantity: "5 mL per day" },
      { category: "Sheep & Goats", quantity: "5 mL daily" },
      { category: "Chicks", quantity: "5 mL per 100 birds daily" },
      { category: "Growers", quantity: "7 mL per 100 birds daily" },
      { category: "Layers", quantity: "10 mL per 100 birds daily" },
    ],
    dosageGuidance: [
      "Label-declared dosage as above, or as directed by a veterinarian.",
      "Step 01 â€” Identify the animal category.",
      "Step 02 â€” Determine the quantity from the label for that category.",
      "Step 03 â€” Review the complete diet, including other feed ingredients and supplements.",
      "Step 04 â€” Follow the approved administration instructions.",
      "Step 05 â€” Monitor animal condition and nutritional requirements under professional guidance.",
      "Avoid excessive supplementation, count contributions from other feed and premixes, and watch total selenium and zinc intake. Maintain access to clean drinking water and consult a veterinarian or animal nutritionist when adjusting the program. The label does not specify the administration route or dilution method; confirm with the manufacturer.",
      "Dairy management practices such as hygiene, milking practices, housing and veterinary care remain essential. H-VITA GOLD is intended to complement these practices rather than guarantee prevention or treatment of udder diseases or reproductive disorders.",
      "Specific improvements in fertility, egg production, hatchability, feather growth, or disease prevention have not been established for H-VITA GOLD without product-specific trials.",
    ],
    advantages: [
      {
        title: "Five Essential Vitamins",
        description: "Combines Vitamin A, D3, E, H (Biotin) and C in a single liquid formulation.",
      },
      {
        title: "Biotin-Enriched Formulation",
        description:
          "Includes Vitamin H (Biotin), involved in fatty acid metabolism and skin and tissue maintenance.",
      },
      {
        title: "Essential Mineral Nutrition",
        description:
          "Includes zinc, cobalt, and selenium, trace minerals involved in metabolic functions.",
      },
      {
        title: "Udder & Tissue Nutritional Support",
        description:
          "Provides nutrients that complement normal udder tissue maintenance within sound dairy management.",
      },
      {
        title: "Skin & Hair Nutrition",
        description: "Biotin-based nutrition that contributes to normal skin and hair condition.",
      },
      {
        title: "Multi-Species Application",
        description:
          "Label-declared dosage for cattle, buffalo, calves, sheep, goats, chicks, growers and layers.",
      },
      {
        title: "Multiple Packaging Options",
        description: "Available in 250 mL, 500 mL and 1 Litre packs.",
      },
    ],
    handling: [
      "Evaluate the complete feed composition before supplementing.",
      "Maintain vitamin balance and consider existing supplements.",
      "Avoid excessive mineral intake, particularly selenium and zinc.",
      "Monitor animal condition and follow dairy hygiene practices.",
      "Seek professional guidance on the feeding program.",
      "Keep the product in its original container and close it securely.",
      "Check the manufacturing date, expiry information, and batch number.",
      "Use appropriate measuring equipment and avoid contamination.",
      "Do not combine with other supplements without confirming compatibility.",
      "Keep out of reach of children and unauthorized persons.",
      "Animal and poultry feed supplement; not for human use and not a veterinary medicine.",
      "Shelf life and storage conditions are to be confirmed from manufacturer-approved specifications.",
    ],
    faqs: [
      {
        question: "What is H-VITA GOLD?",
        answer:
          "H-VITA GOLD is a Sarvadhenu-branded liquid multivitamin and mineral feed supplement containing Vitamin H (Biotin), Vitamins A, D3, E and C, zinc, cobalt and selenium.",
      },
      {
        question: "What are the main benefits of H-VITA GOLD?",
        answer:
          "Its components contribute to normal tissue maintenance, skin and hair condition, skeletal nutrition, antioxidant functions, reproductive nutrition and metabolic processes.",
      },
      {
        question: "What is Vitamin H?",
        answer:
          "Vitamin H is commonly known as Biotin, a vitamin involved in normal metabolic processes and the maintenance of skin and tissues.",
      },
      {
        question: "Why is biotin included?",
        answer:
          "Biotin is involved in fatty acid metabolism and contributes to normal skin, hair and coat condition.",
      },
      {
        question: "Why is Vitamin A included?",
        answer:
          "Vitamin A contributes to normal vision, epithelial tissue maintenance, reproductive functions and immune functions.",
      },
      {
        question: "What is the role of Vitamin D3?",
        answer:
          "Vitamin D3 supports calcium and phosphorus metabolism and contributes to normal bone development.",
      },
      {
        question: "Why is Vitamin E included?",
        answer:
          "Vitamin E contributes to antioxidant, immune and reproductive functions as part of balanced nutrition.",
      },
      {
        question: "What is the role of Vitamin C?",
        answer:
          "Vitamin C contributes to antioxidant functions, collagen formation and connective tissue maintenance.",
      },
      {
        question: "Which minerals are included in H-VITA GOLD?",
        answer:
          "The product label lists zinc, cobalt and selenium, trace minerals involved in enzyme systems, Vitamin B12 synthesis by rumen microorganisms, and antioxidant enzymes.",
      },
      {
        question: "Does H-VITA GOLD support udder health?",
        answer:
          "It supplies vitamins and minerals that contribute to normal physiological functions and can complement appropriate udder health management. Hygiene and veterinary care remain essential.",
      },
      {
        question: "Can H-VITA GOLD prevent mastitis?",
        answer:
          "No. H-VITA GOLD should not be considered a proven mastitis preventive or treatment. Hygiene, good dairy management and veterinary care remain essential.",
      },
      {
        question: "Does H-VITA GOLD support reproductive nutrition?",
        answer:
          "Vitamins and minerals play roles in reproductive physiology, and H-VITA GOLD can complement the nutrition of breeding animals. Specific fertility outcomes have not been established without product-specific trials.",
      },
      {
        question: "What is the dosage for cattle and buffalo?",
        answer: "The product label declares 20 mL per day, or as directed by a veterinarian.",
      },
      {
        question: "What is the dosage for calves?",
        answer: "The product label declares 5 mL per day, or as directed by a veterinarian.",
      },
      {
        question: "What is the dosage for sheep and goats?",
        answer: "The product label declares 5 mL daily, or as directed by a veterinarian.",
      },
      {
        question: "What is the dosage for chicks?",
        answer:
          "The product label declares 5 mL per 100 birds daily, or as directed by a veterinarian.",
      },
      {
        question: "What is the dosage for growers?",
        answer:
          "The product label declares 7 mL per 100 birds daily, or as directed by a veterinarian.",
      },
      {
        question: "What is the dosage for layers?",
        answer:
          "The product label declares 10 mL per 100 birds daily, or as directed by a veterinarian.",
      },
      {
        question: "What pack sizes are available?",
        answer: "H-VITA GOLD is available in 250 mL, 500 mL and 1 Litre packs.",
      },
      {
        question: "Is H-VITA GOLD a veterinary medicine?",
        answer:
          "No. H-VITA GOLD is an animal and poultry feed supplement, not a veterinary medicine, and is not for human use.",
      },
    ],
  },
  {
    id: "p15",
    slug: "amino-lys-98",
    name: "AMINO-LYS 98%",
    index: "15",
    category: "Poultry Feed Supplement",
    focusArea: "Essential Amino Acid (L-Lysine HCl 98%) Nutrition",
    form: "Essential amino acid feed supplement (physical form not specified on supplied label)",
    shortDescription:
      "An essential amino acid feed supplement with commercial-grade L-Lysine Hydrochloride 98% for balanced protein nutrition in poultry feed formulations.",
    detailedDescription:
      "AMINO-LYS 98% by Sarvadhenu is a specialized essential amino acid feed supplement containing commercial-grade L-Lysine Hydrochloride 98%. Lysine is involved in protein synthesis, muscle development, tissue maintenance and normal growth, and the product is designed to complement balanced poultry feed formulations at different production stages.",
    image: aminoLysImg,
    imageAlt:
      "Sarvadhenu AMINO-LYS 98% L-Lysine Hydrochloride 98% essential amino acid supplement for poultry feed formulations, supplied in 25 kg bags.",
    applications: [
      "Essential lysine supplementation in poultry feed formulations",
      "Nutritional support across chicks, broilers, layers and breeders",
      "Use alongside balanced feed and professional guidance",
    ],
    composition: "L-Lysine Hydrochloride, commercial grade 98% (see specifications below)",
    packSizes: "25 kg / Bag",
    dosage:
      "Not specified on supplied label; calculate inclusion from the complete feed formulation",
    storage: "Cool & dry place, in unopened original packaging. Shelf life 24 months.",
    disclaimer: DISCLAIMER,
    seoTitle: "AMINO-LYS 98% | L-Lysine HCl 98% Poultry Feed Supplement | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu AMINO-LYS 98%, an essential poultry amino acid supplement containing L-Lysine Hydrochloride 98% for balanced protein nutrition, muscle development, and poultry growth.",
    tagline: "Essential Amino Acids. Balanced Protein Nutrition. Better Growth Potential.",
    heroHeading:
      "Advanced L-Lysine Nutrition for Poultry Growth, Muscle Development & Feed Efficiency",
    heroIntro: [
      "SARVADHENU | ADVANCED POULTRY NUTRITION",
      "Unlock the nutritional potential of your poultry flock with AMINO-LYS 98%, a specialized essential amino acid feed supplement formulated with commercial-grade L-Lysine Hydrochloride 98%.",
      "Lysine is an essential amino acid that poultry cannot synthesize in sufficient quantities to meet their nutritional requirements and must obtain through their diet. From early chick development to commercial broiler and layer management, AMINO-LYS 98% provides targeted lysine supplementation for modern poultry production.",
    ],
    highlights: [
      "98% L-Lysine Hydrochloride",
      "Essential Amino Acid Supplementation",
      "Supports Normal Protein Synthesis",
      "Contributes to Muscle & Tissue Development",
      "Supports Balanced Poultry Nutrition",
      "Helps Optimize Dietary Amino Acid Balance",
      "Supports Growth-Stage Nutritional Requirements",
      "Suitable for Poultry Feed Formulations",
      "Convenient 25 kg Commercial Packaging",
    ],
    overviewLabel: "About AMINO-LYS 98%",
    overviewHeading: "Advanced Lysine Nutrition for Modern Poultry Farming",
    overviewParagraphs: [
      "AMINO-LYS 98% by Sarvadhenu is a specialized essential amino acid feed supplement containing commercial-grade L-Lysine Hydrochloride 98%.",
      "Lysine is one of the essential amino acids required by poultry for normal growth, protein synthesis, muscle development, and tissue maintenance. Because poultry cannot produce sufficient lysine to meet their nutritional requirements, it must be supplied through balanced feed formulations.",
      "Lysine plays an important role in protein deposition and is particularly important in poultry diets formulated for growing broilers and productive layers.",
      "Commercial L-Lysine Hydrochloride 98% provides approximately 78.4% lysine amino acid on an equivalent basis, as declared on the supplied product label.",
      "AMINO-LYS 98% is designed to complement balanced poultry feed formulations and help address lysine requirements at different production stages.",
      "About Sarvadhenu: science-informed nutrition, poultry-focused formulations, balanced support, responsible supplementation, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "AMINO-LYS 98%"],
      ["Brand", "Sarvadhenu"],
      ["Brand Category", "Animal Feed & Nutrition"],
      ["Product Category", "Poultry Feed Supplement"],
      ["Product Type", "Essential Amino Acid Supplement"],
      ["Primary Nutrient", "L-Lysine Hydrochloride"],
      ["Purity / Assay", "98.5â€“100.5%"],
      ["Approximate Available Lysine", "78.4%"],
      ["Primary Application", "Poultry Feed Formulation"],
      ["Physical Form", "Not specified on supplied label"],
      ["Packaging", "25 kg / Bag"],
      ["Shelf Life", "24 Months"],
      ["Storage", "Cool & Dry Place in Unopened Original Packaging"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Supporting Essential Nutritional Functions for Productive Poultry",
    benefits: [
      {
        index: "01",
        title: "Muscle & Tissue Development",
        heading: "Essential Lysine for Protein Synthesis",
        description:
          "Lysine is an essential amino acid involved in the formation of body proteins. Adequate lysine intake contributes to normal muscle development, tissue formation, and maintenance in poultry.",
      },
      {
        index: "02",
        title: "Growth-Stage Nutrition",
        heading: "Supporting Healthy Body Development",
        description:
          "Growing poultry require sufficient quantities of essential amino acids to support normal growth and development. AMINO-LYS 98% can complement feeding programs where additional lysine supplementation is nutritionally appropriate.",
      },
      {
        index: "03",
        title: "Feed Protein Utilization",
        heading: "Supporting Balanced Amino Acid Nutrition",
        description:
          "Adequate levels and proportions of essential amino acids are important for efficient utilization of dietary protein. Lysine supplementation may help correct specific dietary shortfalls identified through feed formulation.",
      },
      {
        index: "04",
        title: "Dietary Amino Acid Balance",
        heading: "Supporting Essential Nutritional Requirements",
        description:
          "Lysine is an important reference amino acid in poultry feed formulation. Maintaining suitable lysine levels contributes to balanced protein nutrition and normal growth-related metabolic functions.",
      },
      {
        index: "05",
        title: "Broiler Growth Nutrition",
        heading: "Supporting Normal Muscle Protein Formation",
        description:
          "Broilers require appropriate lysine intake to support muscle protein synthesis and normal body development. Adequate dietary lysine is an important component of growth-focused poultry feeding programs.",
      },
      {
        index: "06",
        title: "Layer Nutritional Requirements",
        heading: "Supporting Productive Poultry Nutrition",
        description:
          "Laying hens require essential amino acids for body maintenance, protein synthesis, and egg protein production. Balanced lysine nutrition contributes to the overall dietary requirements of productive poultry.",
      },
    ],
    applicationsEyebrow: "Poultry nutrition applications",
    applicationsHeading: "Essential Lysine Support Across Poultry Growth Stages",
    detailedApplications: [
      {
        title: "Chicks",
        heading: "Building a Strong Nutritional Foundation",
        description:
          "Early-stage growth requires adequate dietary essential amino acids to support normal muscle, tissue, and skeletal development.",
        focus: [
          "Early muscle and tissue formation",
          "Normal protein synthesis",
          "Essential amino acid intake",
          "Growth-stage nutritional support",
          "Balanced dietary protein",
        ],
      },
      {
        title: "Broilers",
        heading: "Supporting Growth-Oriented Feeding Programs",
        description:
          "Broiler nutrition requires carefully balanced lysine levels to support muscle development, protein deposition, and dietary protein utilization. AMINO-LYS 98% is intended to complement these practices rather than guarantee faster growth or improved feed conversion.",
        focus: [
          "Normal muscle development",
          "Protein synthesis",
          "Lysine supplementation",
          "Balanced amino acid nutrition",
          "Growth-related metabolism",
        ],
      },
      {
        title: "Layers",
        heading: "Supporting Productive Poultry Nutrition",
        description:
          "Laying hens require appropriate essential amino acid intake for body maintenance, protein synthesis, and egg protein nutritional requirements.",
        focus: [
          "Dietary lysine adequacy",
          "Egg protein nutritional requirements",
          "Body tissue maintenance",
          "Balanced amino acid supply",
          "Productive feeding programs",
        ],
      },
      {
        title: "Breeders",
        heading: "Supporting Reproductive Flock Nutrition",
        description:
          "Breeder flocks depend on balanced amino acids, protein, energy, vitamins, and minerals for normal physiological and reproductive functions. Specific increases in egg production, egg weight, fertility, or hatchability have not been established for AMINO-LYS 98% without product-specific trials. The product's suitability and inclusion level for each poultry category should be confirmed using veterinary guidance and the complete feed formulation.",
        focus: [
          "Body condition maintenance",
          "Essential amino acid nutrition",
          "Normal protein metabolism",
          "Balanced nutritional requirements",
          "Long-term flock condition",
        ],
      },
    ],
    formula: [
      {
        title: "L-Lysine Hydrochloride 98%",
        heading: "Supporting Protein Synthesis & Muscle Development",
        description:
          "Lysine is an essential amino acid that poultry must obtain through their diet. It plays a central role in protein synthesis and muscle development, and the product label states approximately 78.4% lysine on an equivalent basis.",
      },
      {
        title: "Essential Amino Acid Nutrition",
        heading: "Dietary Supply of Amino Acids Poultry Cannot Synthesize Sufficiently",
        description:
          "Essential amino acids must be supplied through the diet in adequate amounts and proportions to support normal growth, tissue maintenance and protein metabolism.",
      },
      {
        title: "L-Lysine HCl & Available Lysine",
        heading: "Why Equivalence Matters",
        description:
          "L-Lysine HCl 98% provides approximately 78.4% lysine on an equivalent basis. This equivalence matters in feed formulation calculations so that the lysine actually supplied is counted correctly.",
      },
      {
        title: "Quality Parameters",
        heading: "Defined Technical Specifications",
        description:
          "Declared parameters include assay of 98.5â€“100.5%, specific rotation of +20.7Â° to +21.5Â°, water content up to 0.40%, residue on ignition up to 0.10% and heavy metals up to 10 ppm, supporting product consistency.",
      },
      {
        title: "Amino Acid Balance",
        heading: "Protein Synthesis, Limiting Amino Acids & Targeted Supplementation",
        description:
          "Protein synthesis depends on a balanced supply of amino acids, and a limiting amino acid can restrict protein utilization. Lysine serves as a reference amino acid in poultry feed formulation, so balanced feeding and targeted supplementation matter. Balanced nutrient supply is more important than simply increasing the total quantity of supplementation.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Technical Specifications (as on product label)",
        rows: [
          ["Product", "L-Lysine Hydrochloride"],
          ["Grade", "Commercial Grade 98%"],
          ["Assay", "98.5â€“100.5%"],
          ["Approx. Available Lysine", "78.4%"],
          ["Specific Rotation", "+20.7Â° to +21.5Â°"],
          ["Heavy Metals", "â‰¤10 ppm"],
          ["Water Content", "â‰¤0.40%"],
          ["Residue on Ignition", "â‰¤0.10%"],
          ["pH", "5.0â€“6.0"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Packaging", "25 kg / Bag"],
          ["Shelf Life", "24 Months"],
          ["Storage", "Cool & Dry Place"],
          ["Packaging Condition", "Unopened Original Packaging"],
          ["Physical Form", "Not specified on supplied label"],
        ],
      },
    ],
    compositionNote:
      "Please confirm final specifications and batch quality through the manufacturer-approved specification sheet and Certificate of Analysis (CoA).",
    dosageGuidance: [
      "The product label does not specify an inclusion rate or animal-wise dosage. Calculate inclusion from the complete feed formulation.",
      "Step 01 â€” Identify the poultry category: chicks, broilers, layers or breeders.",
      "Step 02 â€” Review the complete feed formulation, including lysine from soybean meal and other ingredients.",
      "Step 03 â€” Calculate the lysine requirement by age and production stage.",
      "Step 04 â€” Consider the 78.4% lysine equivalence of L-Lysine HCl 98%.",
      "Step 05 â€” Incorporate per the feed manufacturer's approved mixing procedures to ensure uniform distribution.",
      "Step 06 â€” Monitor growth, feed intake and flock condition.",
      "Use professionally calculated inclusion rates, count all lysine sources, maintain amino acid ratios, ensure uniform distribution, avoid excess, and consult a poultry nutritionist or feed formulator.",
      "AMINO-LYS 98% is intended to complement these practices rather than guarantee faster growth or improved feed conversion.",
      "Specific increases in egg production, egg weight, fertility, or hatchability have not been established for AMINO-LYS 98% without product-specific trials.",
    ],
    advantages: [
      {
        title: "High-Purity L-Lysine Source",
        description:
          "Commercial-grade L-Lysine Hydrochloride 98% with a declared assay of 98.5â€“100.5%.",
      },
      {
        title: "Essential Amino Acid Supplementation",
        description:
          "Supplies lysine, an essential amino acid poultry must obtain through the diet.",
      },
      {
        title: "Defined Technical Specifications",
        description:
          "Declared assay, specific rotation, water content, residue on ignition, heavy metals and pH.",
      },
      {
        title: "Supports Balanced Protein Nutrition",
        description: "Helps address lysine shortfalls identified through feed formulation.",
      },
      {
        title: "Growth-Stage Application",
        description:
          "Relevant to chicks, broilers, layers and breeders under professional guidance.",
      },
      {
        title: "Commercial Feed Manufacturing Application",
        description: "Suitable for poultry feed formulations prepared by feed manufacturers.",
      },
      {
        title: "Commercial Packaging",
        description: "Supplied in 25 kg bags.",
      },
    ],
    handling: [
      "Evaluate the complete feed composition before supplementing.",
      "Balance lysine with other amino acids and consider existing protein sources.",
      "Calculate available lysine using the correct equivalence (approx. 78.4%).",
      "Avoid excess and monitor the flock; seek professional guidance.",
      "Keep the product in its original packaging and keep the bag sealed.",
      "Store in a cool, dry place and protect from moisture.",
      "Check the manufacturing date, expiry information, and batch number.",
      "Avoid contamination and use suitable weighing equipment.",
      "Follow approved mixing procedures.",
      "Keep out of reach of children.",
      "Not for Human Use. Not for Medical Use.",
      "Shelf life: best before 24 months.",
    ],
    faqs: [
      {
        question: "What is AMINO-LYS 98%?",
        answer:
          "AMINO-LYS 98% is a Sarvadhenu-branded essential amino acid feed supplement containing commercial-grade L-Lysine Hydrochloride 98% for poultry feed formulations.",
      },
      {
        question: "What are the main benefits of AMINO-LYS 98%?",
        answer:
          "It supplies lysine, which contributes to protein synthesis, muscle and tissue development, balanced amino acid nutrition and normal growth.",
      },
      {
        question: "Why is lysine important for poultry?",
        answer:
          "Lysine is an essential amino acid that poultry cannot synthesize in sufficient quantities, so it must be supplied through the diet for protein synthesis and normal growth.",
      },
      {
        question: "What is L-Lysine HCl 98%?",
        answer:
          "It is a commercial-grade hydrochloride salt of the essential amino acid L-Lysine, used as a lysine source in feed formulations.",
      },
      {
        question: "What is the available lysine content?",
        answer:
          "The product label declares approximately 78.4% lysine on an equivalent basis. This should be used in feed formulation calculations.",
      },
      {
        question: "Does AMINO-LYS 98% support broiler growth?",
        answer:
          "Lysine supports muscle protein synthesis and normal body development as part of a balanced diet. AMINO-LYS 98% complements good feeding practice and does not guarantee faster growth.",
      },
      {
        question: "Can AMINO-LYS 98% improve feed conversion ratio (FCR)?",
        answer:
          "Lysine is important for protein utilization, but an improvement in FCR from AMINO-LYS 98% itself has not been demonstrated by product-specific evidence.",
      },
      {
        question: "Does it support muscle development?",
        answer:
          "Lysine is involved in the formation of body proteins and contributes to normal muscle development when dietary supply is adequate.",
      },
      {
        question: "Is AMINO-LYS 98% suitable for chicks?",
        answer:
          "Chicks need adequate essential amino acids for early tissue development. Suitability and inclusion level should be confirmed with veterinary guidance and the complete feed formulation.",
      },
      {
        question: "Is AMINO-LYS 98% suitable for layers?",
        answer:
          "Laying hens need lysine for body maintenance and egg protein requirements. Specific increases in egg production or egg weight have not been established without product-specific trials.",
      },
      {
        question: "Is AMINO-LYS 98% suitable for breeders?",
        answer:
          "Breeders need balanced amino acids and other nutrients. Specific increases in fertility or hatchability have not been established for the product without product-specific trials.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "The product label does not specify an inclusion rate. A poultry nutritionist or feed formulator should calculate it from the complete feed formulation.",
      },
      {
        question: "How is AMINO-LYS 98% mixed with feed?",
        answer:
          "Incorporate it using the feed manufacturer's approved mixing procedures to ensure uniform distribution.",
      },
      {
        question: "What are the quality specifications?",
        answer:
          "Assay 98.5â€“100.5%, specific rotation +20.7Â° to +21.5Â°, water content â‰¤0.40%, residue on ignition â‰¤0.10%, heavy metals â‰¤10 ppm and pH 5.0â€“6.0.",
      },
      {
        question: "What packaging is available?",
        answer: "AMINO-LYS 98% is supplied in 25 kg bags.",
      },
      {
        question: "What is the shelf life?",
        answer: "The shelf life is 24 months (best before 24 months).",
      },
      {
        question: "How should AMINO-LYS 98% be stored?",
        answer:
          "Store in a cool, dry place in the unopened original packaging, keep the bag sealed and protect it from moisture.",
      },
      {
        question: "Is AMINO-LYS 98% a multivitamin?",
        answer: "No. It is an essential amino acid supplement containing L-Lysine Hydrochloride.",
      },
      {
        question: "Is AMINO-LYS 98% a veterinary medicine or antibiotic?",
        answer:
          "No. It is a poultry feed supplement, not a veterinary medicine or antibiotic, and is not for human use.",
      },
    ],
  },
  {
    id: "p16",
    slug: "gut-shield",
    name: "GUT SHIELD",
    index: "16",
    category: "Livestock & Poultry Feed Additive",
    focusArea: "Broad-Spectrum Mycotoxin Binding & Feed Protection",
    form: "Broad-spectrum mycotoxin binder feed additive (physical form not specified on supplied label)",
    shortDescription:
      "A broad-spectrum mycotoxin binder with hydrated sodium calcium alumino silicate, MOS, activated charcoal, antioxidants, kaolin and fungal inhibitors for livestock and poultry feed.",
    detailedDescription:
      "GUT SHIELD by Sarvadhenu is a specialized broad-spectrum mycotoxin binder formulated to help manage mycotoxin contamination in livestock and poultry feed. It combines multiple adsorbent and functional ingredients designed to bind mycotoxins in feed and help reduce their availability for absorption through the intestinal tract, and is intended to complement good-quality feed management, proper storage practices and balanced animal nutrition programs.",
    image: gutShieldImg,
    imageAlt:
      "Sarvadhenu GUT SHIELD broad-spectrum mycotoxin binder for livestock and poultry feed containing hydrated sodium calcium alumino silicate, mannanoligosaccharide, activated charcoal, antioxidants, and kaolin.",
    applications: [
      "Mycotoxin binding and feed contamination management in livestock and poultry feed",
      "Feed protection for dairy cattle, buffaloes, poultry, sheep and goats",
      "Use under veterinary or animal nutritionist guidance",
    ],
    composition:
      "Hydrated sodium calcium alumino silicate (chlorite / illite), mannanoligosaccharide, activated charcoal, antioxidants, kaolin and fungal inhibitors (see composition below)",
    packSizes: null,
    dosage:
      "Prevention: 300â€“500 gm per tonne of feed; higher inclusion 500â€“3000 gm per tonne as directed by a nutritionist",
    storage: "Cool & dry place. Shelf life not specified on supplied label.",
    disclaimer: LIVESTOCK_DISCLAIMER,
    seoTitle: "GUT SHIELD | Broad-Spectrum Mycotoxin Binder for Livestock & Poultry | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu GUT SHIELD, a broad-spectrum mycotoxin binder containing hydrated sodium calcium alumino silicate, MOS, activated charcoal, and kaolin for livestock and poultry feed protection.",
    tagline: "Bind Mycotoxins. Support Gut Health. Protect Nutritional Performance.",
    heroHeading:
      "Advanced Mycotoxin Management for Healthy Livestock, Poultry & Balanced Feed Nutrition",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL NUTRITION",
      "Protect your animals from the nutritional challenges associated with mycotoxin-contaminated feed with GUT SHIELD, a specialized broad-spectrum mycotoxin binder formulated with hydrated sodium calcium alumino silicate, mannanoligosaccharide, activated charcoal, antioxidants, kaolin, and fungal inhibitors.",
      "Developed to complement professionally balanced animal feeding programs, GUT SHIELD combines multiple adsorbent and functional ingredients designed to bind mycotoxins in feed and help reduce their absorption through the intestinal tract.",
      "With its broad-spectrum binding approach, GUT SHIELD provides nutritional support for modern livestock and poultry operations by helping manage feed contamination risks and maintain feed quality.",
      "Cleaner Feed. Better Gut Protection. Healthier Livestock.",
    ],
    highlights: [
      "Broad-Spectrum Mycotoxin Binding Formulation",
      "Hydrated Sodium Calcium Alumino Silicate",
      "Mannanoligosaccharide (MOS) Inclusion",
      "Activated Charcoal & Kaolin",
      "Antioxidant & Fungal Inhibitor Ingredients",
      "Helps Bind Mycotoxins in Feed",
      "Supports Gut Health Management",
      "Suitable for Different Feed Formulations",
      "Compatible with Multiple Feed Ingredients",
      "Low-Inclusion Feed Application",
    ],
    overviewLabel: "About GUT SHIELD",
    overviewHeading: "Advanced Mycotoxin Binding Nutrition for Modern Animal Farming",
    overviewParagraphs: [
      "GUT SHIELD by Sarvadhenu is a specialized broad-spectrum mycotoxin binder formulated to help manage mycotoxin contamination in livestock and poultry feed.",
      "Mycotoxins are toxic compounds produced by certain fungi that may contaminate agricultural raw materials, grains, and animal feed ingredients during cultivation, harvesting, processing, and storage. Exposure to contaminated feed can create nutritional and health challenges for animals and may interfere with normal digestive and metabolic functions.",
      "GUT SHIELD combines hydrated sodium calcium alumino silicate (chlorite / illite), mannanoligosaccharide, activated charcoal, antioxidants, kaolin, and fungal inhibitors, incorporated to provide multiple binding and feed-protection functions. The product is designed to bind a broad range of mycotoxins and help reduce their availability for absorption through the intestinal tract.",
      "GUT SHIELD is intended to complement good-quality feed management, proper storage practices, and balanced animal nutrition programs.",
      "About Sarvadhenu: science-informed nutrition, feed protection solutions, balanced support, responsible supplementation, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "GUT SHIELD"],
      ["Brand", "Sarvadhenu"],
      ["Brand Category", "Animal Feed & Nutrition"],
      ["Product Category", "Mycotoxin Binder"],
      ["Product Type", "Broad-Spectrum Feed Additive"],
      ["Primary Ingredient", "Hydrated Sodium Calcium Alumino Silicate"],
      ["Mineral Components", "Chlorite / Illite"],
      ["Additional Ingredients", "Mannanoligosaccharide, Activated Charcoal & Kaolin"],
      ["Functional Components", "Antioxidants & Fungal Inhibitors"],
      ["Primary Application", "Livestock & Poultry Feed"],
      ["Application Method", "Feed Mixing"],
      ["Prevention Dosage", "300â€“500 gm per tonne"],
      ["Higher-Inclusion Label Guidance", "500â€“3000 gm per tonne, as directed by nutritionist"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Supporting Essential Feed Protection & Digestive Health Functions",
    applicationsEyebrow: "Animal nutrition applications",
    applicationsHeading: "Broad-Spectrum Mycotoxin Management Across Livestock & Poultry",
    advantageEyebrow: "The GUT SHIELD advantage",
    advantageHeading: "Advanced Mycotoxin Management for Livestock and Poultry Feed",
    benefits: [
      {
        index: "01",
        title: "Broad-Spectrum Mycotoxin Binding",
        heading: "Helping Manage Multiple Mycotoxin Challenges",
        description:
          "Mycotoxins can contaminate different feed ingredients and create nutritional challenges for livestock and poultry. GUT SHIELD uses multiple adsorbent ingredients designed to bind a wide range of mycotoxins in feed.",
      },
      {
        index: "02",
        title: "Gut Health Support",
        heading: "Supporting the Intestinal Environment",
        description:
          "Mycotoxin exposure can interfere with normal digestive and intestinal functions. GUT SHIELD is formulated to help bind mycotoxins and reduce their availability for absorption through the intestinal tract.",
      },
      {
        index: "03",
        title: "Nutritional Protection",
        heading: "Supporting Balanced Feed Utilization",
        description:
          "Feed contamination can compromise the nutritional quality of animal diets. GUT SHIELD is designed to help manage mycotoxin-related feed contamination while maintaining compatibility with important feed nutrients.",
      },
      {
        index: "04",
        title: "Feed Ingredient Compatibility",
        heading: "Supporting Balanced Feed Formulations",
        description:
          "The product label declares compatibility with different feed ingredients. It also states that GUT SHIELD does not affect or absorb vitamins, minerals, coccidiostats, antibiotics, or other feed additives.",
      },
      {
        index: "05",
        title: "Uniform Feed Distribution",
        heading: "Supporting Consistent Mixing",
        description:
          "GUT SHIELD is designed for rapid and uniform dispersion during feed mixing. Uniform distribution is important for maintaining consistency throughout prepared animal feed.",
      },
      {
        index: "06",
        title: "Feed Processing Stability",
        heading: "Supporting Feed Manufacturing Operations",
        description:
          "The product label highlights stability during feed processing, particularly pelleting and storage, making it suitable for consideration in commercial feed manufacturing programs.",
      },
    ],
    detailedApplications: [
      {
        title: "Dairy Cattle",
        heading: "Supporting Feed Quality & Dairy Nutrition",
        description:
          "Dairy cattle require consistent, high-quality feed to support normal digestive functions, milk production, and overall nutritional requirements. Mycotoxin-contaminated feed can create challenges for dairy feeding programs.",
        focus: [
          "Mycotoxin binding in cattle feed",
          "Feed quality management",
          "Digestive nutritional support",
          "Balanced dietary nutrient intake",
          "Feed storage management",
          "Overall dairy nutrition",
        ],
      },
      {
        title: "Buffaloes",
        heading: "Supporting Balanced Feed & Nutritional Management",
        description:
          "Buffaloes require appropriate dietary energy, protein, minerals, and other nutrients for normal body maintenance and productive dairy management.",
        focus: [
          "Broad-spectrum mycotoxin binding",
          "Feed contamination management",
          "Feed ingredient protection",
          "Digestive health management",
          "Balanced nutritional intake",
        ],
      },
      {
        title: "Poultry",
        heading: "Supporting Poultry Feed Quality",
        description:
          "Poultry diets frequently include grains and other agricultural feed ingredients that may be susceptible to fungal contamination and mycotoxin formation. GUT SHIELD is intended to complement feed quality control and veterinary care rather than replace them. Specific improvements in growth, feed conversion ratio, egg production, or flock health have not been established for GUT SHIELD without product-specific performance trials.",
        focus: [
          "Mycotoxin binding in poultry feed",
          "Feed quality management",
          "Intestinal nutritional support",
          "Balanced feed utilization",
          "Commercial feed processing compatibility",
        ],
      },
      {
        title: "Sheep & Goats",
        heading: "Supporting Small Ruminant Feed Management",
        description:
          "Sheep and goats require good-quality feed and balanced nutritional intake to support normal growth, body maintenance, and production. The product's suitability and inclusion level for each animal category should be confirmed using veterinary guidance, feed analysis, and the complete feed formulation.",
        focus: [
          "Feed contamination management",
          "Mycotoxin binding",
          "Digestive nutritional support",
          "Feed quality maintenance",
          "General animal nutrition",
        ],
      },
    ],
    formula: [
      {
        title: "Hydrated Sodium Calcium Alumino Silicate (HSCAS)",
        heading: "Mineral-Based Adsorbent",
        description:
          "A mineral adsorbent used in feed additives. Depending on composition, it may adsorb certain mycotoxins, particularly aflatoxins. The label lists chlorite / illite as mineral components.",
      },
      {
        title: "Mannanoligosaccharide (MOS)",
        heading: "Gut Health, Intestinal Nutrition & Microbial Balance",
        description:
          "A functional carbohydrate ingredient associated with gut health, intestinal nutrition and microbial balance in animal feeding programs.",
      },
      {
        title: "Activated Charcoal",
        heading: "Porous Adsorbent Ingredient",
        description:
          "A porous adsorbent material included to contribute to the binding of substances in feed.",
      },
      {
        title: "Kaolin",
        heading: "Clay-Based Adsorbent Support",
        description:
          "A clay-based adsorbent that supports the overall binding approach of the formulation.",
      },
      {
        title: "Antioxidants",
        heading: "Feed Protection Support",
        description:
          "Functional ingredients included for feed protection. Individual antioxidant sources and concentrations are not specified on the supplied packaging.",
      },
      {
        title: "Fungal Inhibitors",
        heading: "Feed Protection Support",
        description:
          "Included to complement hygiene, moisture control and storage practices. The specific fungal inhibitor identities are not specified on the supplied packaging. Individual ingredient concentrations and validated binding capacities are also not specified.",
      },
      {
        title: "Why Mycotoxin Management Matters",
        heading: "Aflatoxin Contamination, Feed Quality & Targeted Supplementation",
        description:
          "Understanding mycotoxins, aflatoxin contamination, feed quality management, mycotoxin binding, nutritional compatibility and targeted supplementation all matter. Effective mycotoxin management requires a combination of good-quality feed ingredients, proper storage, feed testing, and suitable supplementation.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Ingredients (as on product label, quantities not specified)",
        rows: [
          ["Hydrated Sodium Calcium Alumino Silicate", "Mineral-Based Adsorbent"],
          ["Chlorite / Illite", "Declared Mineral Components"],
          ["Mannanoligosaccharide", "Functional Carbohydrate Ingredient"],
          ["Activated Charcoal", "Adsorbent Ingredient"],
          ["Antioxidants", "Functional Feed Protection Ingredients"],
          ["Kaolin", "Clay-Based Adsorbent"],
          ["Fungal Inhibitors", "Feed Protection Ingredients"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Name", "GUT SHIELD"],
          ["Brand", "Sarvadhenu"],
          ["Product Category", "Mycotoxin Binder"],
          ["Physical Form", "Not specified on supplied label"],
          ["Packaging", "Not specified on supplied label"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Storage", "Cool & Dry Place"],
        ],
      },
    ],
    compositionNote:
      "The identities and quantities of the antioxidants and fungal inhibitors are not provided on the supplied packaging. Binding capacity for individual mycotoxins, including aflatoxins, should be verified through manufacturer documentation and laboratory testing. Please confirm final specifications and batch quality through the manufacturer-approved specification sheet and Certificate of Analysis (CoA).",
    dosageTable: [
      { category: "Prevention", quantity: "300â€“500 gm per tonne of feed" },
      {
        category: "Higher inclusion / treatment guidance",
        quantity: "500â€“3000 gm per tonne of feed, as directed by a nutritionist",
      },
    ],
    dosageGuidance: [
      "Label-declared inclusion: 300â€“500 gm per tonne of feed for prevention, and 500â€“3000 gm per tonne of feed for treatment or as directed by a nutritionist (reproduced from packaging). The label does not provide an animal-wise daily dosage; inclusion is per tonne of feed.",
      "Step 01 â€” Evaluate feed quality.",
      "Step 02 â€” Determine the application requirement.",
      "Step 03 â€” Measure the required quantity.",
      "Step 04 â€” Mix thoroughly in the mixer with the other ingredients to obtain a homogeneous feed.",
      "Step 05 â€” Monitor the animals and feed.",
      "Follow the recommended inclusion rate, ensure uniform mixing and consider the degree of contamination. Do not use the higher-inclusion range without professional guidance and feed testing, and consult a nutritionist or veterinarian.",
      "GUT SHIELD is intended to complement these practices rather than replace feed quality control or veterinary treatment.",
      "Specific improvements in growth, feed conversion ratio, egg production, or flock health have not been established for GUT SHIELD without product-specific performance trials.",
    ],
    advantages: [
      {
        title: "Broad-Spectrum Binding Approach",
        description: "Designed to bind a wide range of mycotoxins in feed.",
      },
      {
        title: "Multiple Adsorbent Components",
        description:
          "Combines hydrated sodium calcium alumino silicate, activated charcoal and kaolin.",
      },
      {
        title: "Gut Health-Oriented Formulation",
        description: "Includes mannanoligosaccharide (MOS) to support intestinal nutrition.",
      },
      {
        title: "Feed Ingredient Compatibility",
        description:
          "Label states it does not affect or absorb vitamins, minerals, coccidiostats, antibiotics or other feed additives.",
      },
      {
        title: "Uniform Feed Distribution",
        description: "Designed for rapid and uniform dispersion during feed mixing.",
      },
      {
        title: "Processing Stability",
        description: "Label highlights stability during pelleting and storage.",
      },
      {
        title: "Low Inclusion Application",
        description: "Label-declared preventive inclusion of 300â€“500 gm per tonne of feed.",
      },
      {
        title: "Feed Protection Formulation",
        description: "Includes antioxidants and fungal inhibitors alongside adsorbent ingredients.",
      },
    ],
    handling: [
      "Evaluate raw materials before use.",
      "Use proper storage and moisture control.",
      "Monitor mycotoxin contamination through feed testing.",
      "Select the inclusion level according to the level of contamination.",
      "Consider nutritional compatibility with the complete feed.",
      "Ensure uniform mixing and monitor the animals.",
      "Seek professional guidance from a nutritionist or veterinarian.",
      "GUT SHIELD should complement good-quality feed ingredients and proper storage rather than compensate for severely contaminated or unsuitable feed.",
      "Keep the product in its original packaging, protect it from moisture and keep it closed.",
      "Store in a cool, dry place.",
      "Check the manufacturing date, expiry information, and batch number.",
      "Use suitable weighing equipment and avoid contamination.",
      "Keep out of reach of children.",
      "Not for Human Use. Not a Veterinary Medicine.",
    ],
    faqs: [
      {
        question: "What is GUT SHIELD?",
        answer:
          "GUT SHIELD is a Sarvadhenu-branded broad-spectrum mycotoxin binder feed additive for livestock and poultry feed.",
      },
      {
        question: "What are the main benefits of GUT SHIELD?",
        answer:
          "It is designed to bind mycotoxins in feed, support gut health management, and help manage feed contamination while remaining compatible with feed nutrients.",
      },
      {
        question: "What are mycotoxins?",
        answer:
          "Mycotoxins are toxic compounds produced by certain fungi that may contaminate grains and feed ingredients during cultivation, harvesting, processing and storage.",
      },
      {
        question: "Why are mycotoxin binders important?",
        answer:
          "Binders are designed to bind mycotoxins in feed and help reduce their absorption through the intestinal tract, as part of broader feed quality management.",
      },
      {
        question: "What ingredients does GUT SHIELD contain?",
        answer:
          "Hydrated sodium calcium alumino silicate (chlorite / illite), mannanoligosaccharide, activated charcoal, antioxidants, kaolin and fungal inhibitors.",
      },
      {
        question: "How does GUT SHIELD work?",
        answer:
          "Per the label, it works through adsorption and electrostatic interactions, and the bound material is intended to pass through the intestinal tract.",
      },
      {
        question: "Does GUT SHIELD bind aflatoxins?",
        answer:
          "The label describes binding through electrostatic attraction to aluminium ions when mixed with water. Actual performance depends on formulation, concentration and testing conditions.",
      },
      {
        question: "Does it bind multiple mycotoxins?",
        answer:
          "It is designed as a broad-spectrum binder. Binding of individual mycotoxins should be confirmed through testing.",
      },
      {
        question: "Does GUT SHIELD support gut health?",
        answer:
          "It is formulated to help bind mycotoxins and includes MOS, which is associated with intestinal nutrition and microbial balance.",
      },
      {
        question: "Can GUT SHIELD be used in poultry feed?",
        answer:
          "Poultry is a listed application. Suitability and inclusion level should be confirmed with veterinary guidance and the complete feed formulation.",
      },
      {
        question: "Can it be used for cattle and buffaloes?",
        answer:
          "Dairy cattle and buffaloes are listed applications. Confirm suitability and inclusion level with veterinary guidance, feed analysis and the complete feed formulation.",
      },
      {
        question: "What is the prevention dosage?",
        answer: "The product label declares 300â€“500 gm per tonne of feed.",
      },
      {
        question: "What is the higher inclusion level?",
        answer:
          "The label declares 500â€“3000 gm per tonne of feed for treatment or as directed by a nutritionist. It should not be used without professional guidance and feed testing.",
      },
      {
        question: "How is GUT SHIELD mixed with feed?",
        answer:
          "Measure the required quantity and mix thoroughly in the mixer with the other ingredients to obtain a homogeneous feed.",
      },
      {
        question: "Does GUT SHIELD affect vitamins and minerals?",
        answer:
          "The label declares that it does not affect or absorb vitamins, minerals, coccidiostats, antibiotics or other feed additives.",
      },
      {
        question: "Is GUT SHIELD suitable for commercial feed processing?",
        answer:
          "The label highlights rapid, uniform dispersion and stability during pelleting and storage.",
      },
      {
        question: "Does GUT SHIELD contain activated charcoal?",
        answer: "Yes. Activated charcoal is a declared ingredient and acts as a porous adsorbent.",
      },
      {
        question: "What is the role of kaolin?",
        answer: "Kaolin is a clay-based adsorbent that supports the overall binding approach.",
      },
      {
        question: "How should GUT SHIELD be stored?",
        answer:
          "Store in a cool, dry place, in the original packaging, protected from moisture and kept closed.",
      },
      {
        question: "What is the shelf life?",
        answer:
          "The shelf life is not specified on the supplied label. Please confirm it with the manufacturer.",
      },
      {
        question: "Is GUT SHIELD a veterinary medicine?",
        answer:
          "No. GUT SHIELD is a feed additive and mycotoxin binder, not a veterinary medicine, and is not for human use.",
      },
    ],
  },
  {
    id: "p17",
    slug: "utri-cure",
    name: "UTRI CURE",
    index: "17",
    category: "Animal Healthcare Supplement",
    focusArea: "Uterine Tonic for Post-Calving Care & Reproductive Health",
    form: "Oral uterine tonic (physical form not specified on supplied label)",
    shortDescription:
      "A complete uterine tonic with niacinamide, copper sulphate, manganese, magnesium sulphate, zinc sulphate, iron, calcium, folic acid, vitamins and herbal ingredients for post-calving care in cattle, buffaloes, sheep and goats.",
    detailedDescription:
      "UTRI CURE by Sarvadhenu is a specialized uterine tonic formulated to support reproductive healthcare and post-calving management in livestock. It provides nutritional and herbal support for uterine health, normal uterine involution and postpartum recovery in cattle, buffaloes, sheep and goats, and is intended to complement appropriate veterinary care rather than replace diagnosis or treatment of postpartum reproductive disorders.",
    image: utriCureImg,
    imageAlt:
      "Sarvadhenu UTRI CURE complete uterine tonic containing niacinamide, copper sulphate, manganese, magnesium sulphate, zinc sulphate, iron, calcium, folic acid, vitamins, and herbal ingredients for livestock.",
    applications: [
      "Post-calving nutritional and herbal support for uterine health and normal uterine involution",
      "Postpartum management in cattle, buffaloes, sheep and goats",
      "Use according to animal category-specific dosage and veterinary recommendations",
    ],
    composition:
      "Each 500 mL contains: niacinamide, copper sulphate, manganese, magnesium sulphate, zinc sulphate, iron, calcium, folic acid, vitamins and herbal ingredients (individual quantities not specified on supplied label)",
    packSizes: null,
    dosage:
      "Cows & buffaloes: 200 mL after calving, then 100 mL for the next three days; sheep & goats: 50 mL for 3-5 days",
    storage:
      "The supplied packaging does not clearly specify storage conditions. Confirm with the manufacturer.",
    disclaimer: LIVESTOCK_DISCLAIMER,
    seoTitle: "UTRI CURE | Complete Uterine Tonic for Cattle & Buffaloes | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu UTRI CURE, a complete uterine tonic formulated with niacinamide, folic acid, essential minerals, vitamins, and herbal ingredients for post-calving uterine care in livestock.",
    tagline: "Complete Uterine Care. Better Recovery. Healthier Reproductive Management.",
    heroHeading:
      "Specialized Uterine Tonic for Post-Calving Care, Uterine Involution & Reproductive Health",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL NUTRITION",
      "Support your dairy animals during the critical post-calving period with UTRI CURE, a specialized uterine tonic formulated with niacinamide, copper sulphate, manganese, magnesium sulphate, zinc sulphate, iron, calcium, folic acid, vitamins, and herbal ingredients.",
      "Developed to complement post-calving reproductive management, UTRI CURE provides nutritional and herbal support for uterine health, normal uterine involution, and postpartum recovery.",
      "Its specialized formulation is designed for cattle, buffaloes, sheep, and goats, helping farmers incorporate targeted nutritional support into their animal reproductive healthcare programs.",
      "Better Uterine Care. Healthier Recovery. Improved Reproductive Management.",
    ],
    highlights: [
      "Complete Uterine Tonic Formulation",
      "Niacinamide-Enriched Composition",
      "Copper, Zinc, Iron & Mineral Nutrition",
      "Magnesium Sulphate & Calcium",
      "Folic Acid & Vitamin Enrichment",
      "Fortified with Herbal Ingredients",
      "Supports Post-Calving Uterine Care",
      "Supports Normal Uterine Involution",
      "Nutritional Support During Postpartum Recovery",
      "Available for Multiple Livestock Categories",
    ],
    overviewLabel: "About UTRI CURE",
    overviewHeading: "A Complete Uterine Tonic for Modern Dairy Farming",
    overviewParagraphs: [
      "UTRI CURE by Sarvadhenu is a specialized uterine tonic formulated to support reproductive healthcare and post-calving management in livestock. The formulation combines niacinamide, copper sulphate, manganese, magnesium sulphate, zinc sulphate, iron, calcium, folic acid, vitamins, and herbal ingredients.",
      "The post-calving period is an important stage in the reproductive cycle of dairy animals. During this period, the uterus undergoes physiological changes and gradually returns towards its normal non-pregnant condition through a process known as uterine involution.",
      "Proper nutritional management, reproductive monitoring, and veterinary care are important components of postpartum animal health. UTRI CURE is designed to complement these practices by providing selected vitamins, minerals, and herbal ingredients associated with nutritional and reproductive healthcare.",
      "The product is positioned for post-calving uterine care, normal uterine involution, and nutritional support during reproductive recovery.",
      "About Sarvadhenu: science-informed nutrition, reproductive health focus, balanced support, responsible supplementation, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "UTRI CURE"],
      ["Brand", "Sarvadhenu"],
      ["Product Category", "Animal Healthcare Supplement"],
      ["Product Type", "Uterine Tonic"],
      ["Primary Application", "Uterine & Reproductive Health"],
      ["Primary Vitamin", "Niacinamide"],
      ["Additional Nutrients", "Folic Acid & Vitamins"],
      [
        "Mineral Components",
        "Copper Sulphate, Manganese, Magnesium Sulphate, Zinc Sulphate, Iron & Calcium",
      ],
      ["Additional Components", "Herbal Ingredients"],
      ["Primary Application Stage", "Post-Calving Management"],
      ["Suitable Animals", "Cattle, Buffaloes, Sheep & Goats"],
      ["Administration", "Oral"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Specialized Nutritional Support for Uterine Health & Post-Calving Recovery",
    applicationsEyebrow: "Livestock reproductive care",
    applicationsHeading: "Specialized Uterine Support Across Different Animal Categories",
    advantageEyebrow: "The UTRI CURE advantage",
    advantageHeading: "Complete Uterine Nutrition for Post-Calving Livestock Care",
    benefits: [
      {
        index: "01",
        title: "Post-Calving Uterine Care",
        heading: "Supporting Postpartum Reproductive Management",
        description:
          "The period following calving is important for uterine recovery and reproductive health. UTRI CURE is formulated to complement nutritional management during this stage.",
      },
      {
        index: "02",
        title: "Normal Uterine Involution",
        heading: "Supporting the Natural Uterine Recovery Process",
        description:
          "Uterine involution is the physiological process through which the uterus gradually returns towards its normal size following delivery. UTRI CURE is positioned as a nutritional supplement for supporting normal postpartum uterine management.",
      },
      {
        index: "03",
        title: "Placental Management Support",
        heading: "Supporting Post-Calving Reproductive Care",
        description:
          "The product label identifies placental retention prevention as one of its intended applications. Appropriate post-calving monitoring and timely veterinary intervention remain essential for managing retained placenta.",
      },
      {
        index: "04",
        title: "Retained Placenta Management",
        heading: "Supporting Postpartum Care",
        description:
          "The product label mentions support for the removal of retained placenta and associated tissue debris. Retained placenta requires appropriate veterinary assessment and management. UTRI CURE should not replace professional intervention.",
      },
      {
        index: "05",
        title: "Reproductive Nutritional Support",
        heading: "Essential Vitamins & Minerals",
        description:
          "The formulation contains niacinamide, folic acid, vitamins, and selected minerals that contribute to normal metabolic and physiological functions.",
      },
      {
        index: "06",
        title: "Herbal-Enriched Formulation",
        heading: "Complementary Nutritional Ingredients",
        description:
          "UTRI CURE is fortified with herbal ingredients as declared on the product packaging, complementing its vitamin and mineral composition.",
      },
    ],
    detailedApplications: [
      {
        title: "Cattle",
        heading: "Supporting Post-Calving Uterine Care",
        description:
          "Cattle require appropriate nutritional and reproductive management following calving. The postpartum period involves important physiological changes, including uterine involution and reproductive recovery.",
        focus: [
          "Post-calving uterine care",
          "Normal uterine involution",
          "Placental management support",
          "Reproductive nutritional support",
          "Vitamin and mineral supplementation",
          "Postpartum animal management",
        ],
      },
      {
        title: "Buffaloes",
        heading: "Supporting Dairy Buffalo Reproductive Health",
        description:
          "Buffaloes require appropriate postpartum nutritional management and reproductive monitoring following calving.",
        focus: [
          "Uterine health support",
          "Post-calving nutritional management",
          "Normal uterine recovery",
          "Placental management support",
          "Essential vitamin and mineral nutrition",
        ],
      },
      {
        title: "Sheep",
        heading: "Supporting Small Ruminant Reproductive Care",
        description:
          "Sheep require appropriate nutritional and reproductive management during pregnancy and after lambing. Use according to the animal category-specific dosage and veterinary recommendations.",
        focus: [
          "Post-lambing nutritional support",
          "Reproductive healthcare management",
          "Essential vitamin supplementation",
          "Mineral nutritional support",
          "Overall animal wellness",
        ],
      },
      {
        title: "Goats",
        heading: "Supporting Post-Kidding Reproductive Management",
        description:
          "Goats require balanced nutritional support and appropriate reproductive care following kidding. Use according to the animal category-specific dosage and veterinary recommendations.",
        focus: [
          "Post-kidding nutritional management",
          "Reproductive health support",
          "Vitamin and mineral supplementation",
          "General physiological support",
          "Postpartum care",
        ],
      },
    ],
    formula: [
      {
        title: "Niacinamide",
        heading: "Supporting Energy Metabolism",
        description:
          "A form of Vitamin B3 involved in important metabolic processes, contributing to coenzymes involved in energy metabolism.",
      },
      {
        title: "Folic Acid",
        heading: "Supporting Cellular Functions",
        description: "Involved in DNA synthesis, cell division and blood cell formation.",
      },
      {
        title: "Copper Sulphate",
        heading: "Supporting Enzyme & Tissue Functions",
        description:
          "A copper source associated with enzyme activity, iron metabolism and connective tissue functions.",
      },
      {
        title: "Zinc Sulphate",
        heading: "Supporting Protein Synthesis & Tissue Maintenance",
        description:
          "A zinc source associated with protein synthesis, tissue maintenance and immune functions.",
      },
      {
        title: "Magnesium Sulphate",
        heading: "Supporting Metabolic, Muscle & Nerve Functions",
        description:
          "A magnesium source associated with energy metabolism, muscle function and nerve function.",
      },
      {
        title: "Iron, Calcium & Manganese",
        heading: "Additional Mineral Support",
        description:
          "Iron is associated with haemoglobin and oxygen transport. Calcium supports skeletal and muscular functions. Manganese is associated with enzyme, bone and metabolic functions. The manganese source and quantity are not specified on the supplied label.",
      },
      {
        title: "Vitamins & Herbal Ingredients",
        heading: "Declared Complementary Ingredients",
        description:
          "The label declares vitamins and herbal ingredients. Exact vitamin composition beyond the declared ingredients is not detailed, and specific herb names, quantities and standardized extracts are not specified.",
      },
      {
        title: "Why Post-Calving Care Matters",
        heading: "Involution, Placental Management & Targeted Supplementation",
        description:
          "Post-calving care involves uterine involution, placental management, postpartum nutritional requirements, mineral nutrition, reproductive monitoring and targeted supplementation. Post-calving care should always include appropriate veterinary monitoring, particularly when retained placenta, abnormal discharge, fever, or reduced feed intake is observed. UTRI CURE is intended to complement postpartum nutritional management and should not replace veterinary treatment for retained placenta or uterine infections. Manual removal of retained placenta should not be attempted without veterinary direction because it can cause injury and complications.",
      },
    ],
    compositionGroups: [
      {
        title: "Each 500 mL contains (quantities not specified)",
        rows: [
          ["Niacinamide", "Included"],
          ["Copper Sulphate", "Included"],
          ["Manganese", "Included"],
          ["Magnesium Sulphate", "Included"],
          ["Zinc Sulphate", "Included"],
          ["Iron", "Included"],
          ["Calcium", "Included"],
          ["Folic Acid", "Included"],
          ["Vitamins", "Included"],
          ["Herbal Ingredients", "Included"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Name", "UTRI CURE"],
          ["Brand", "Sarvadhenu"],
          ["Product Category", "Uterine Tonic"],
          ["Physical Form", "Not specified on supplied label"],
          ["Administration", "Oral"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Storage", "To be confirmed by manufacturer"],
        ],
      },
    ],
    compositionNote:
      "The label lists these ingredients per 500 mL but does not provide individual quantities or concentrations. The manganese source and quantity are not specified, the vitamins are not named, and the identities and concentrations of the herbal ingredients are not provided. Please confirm final specifications and batch quality through the manufacturer-approved specification sheet and Certificate of Analysis (CoA).",
    dosageTable: [
      {
        category: "Cows & Buffaloes",
        quantity:
          "200 mL after calving (initial administration), then 100 mL for the next three days",
      },
      { category: "Sheep & Goats", quantity: "50 mL for 3-5 days" },
    ],
    dosageGuidance: [
      "Label-declared dosage: cows & buffaloes 200 mL after calving (initial administration), then 100 mL for the next three days; sheep & goats 50 mL for 3-5 days. The label does not specify further dosage frequency; please confirm with the manufacturer.",
      "Step 01 â€” Identify the animal category.",
      "Step 02 â€” Follow the post-calving schedule for cows and buffaloes.",
      "Step 03 â€” Follow the small ruminant dosage for sheep and goats.",
      "Step 04 â€” Administer orally according to manufacturer and veterinary guidance.",
      "Step 05 â€” Monitor postpartum recovery.",
      "Follow the animal-wise dosage and duration, use suitable measuring equipment, and do not exceed the recommended dosage without veterinary advice.",
      "Seek veterinary attention if the placenta is retained or if abnormal discharge, fever, weakness or reduced appetite is observed.",
      "UTRI CURE should complement appropriate veterinary care rather than replace diagnosis or treatment of postpartum reproductive disorders.",
    ],
    advantages: [
      {
        title: "Complete Uterine Tonic Formulation",
        description: "Combines vitamins, minerals and herbal ingredients in a single oral tonic.",
      },
      {
        title: "Vitamin-Enriched Composition",
        description: "Includes niacinamide, folic acid and additional vitamins.",
      },
      {
        title: "Essential Mineral Components",
        description:
          "Includes copper sulphate, manganese, magnesium sulphate, zinc sulphate, iron and calcium.",
      },
      {
        title: "Herbal-Enriched Formulation",
        description: "Fortified with herbal ingredients as declared on the packaging.",
      },
      {
        title: "Post-Calving Application",
        description: "Positioned for post-calving uterine care and nutritional recovery support.",
      },
      {
        title: "Multi-Species Application",
        description: "Designed for cattle, buffaloes, sheep and goats.",
      },
      {
        title: "Defined Dosage Instructions",
        description: "Label-declared dosage for cows & buffaloes and for sheep & goats.",
      },
      {
        title: "Reproductive Nutritional Support",
        description: "Supports postpartum nutritional management alongside veterinary care.",
      },
    ],
    handling: [
      "Provide balanced nutrition during the transition and postpartum period.",
      "Monitor postpartum recovery.",
      "Maintain reproductive hygiene.",
      "Monitor placental expulsion after calving.",
      "Maintain mineral balance in the ration.",
      "Follow the recommended dosage.",
      "Avoid unsupervised manual intervention for retained placenta.",
      "Seek professional guidance from a veterinarian.",
      "Keep the product in its original packaging and close the bottle after use.",
      "Check the manufacturing date and expiry information.",
      "Use suitable measuring equipment and handle hygienically.",
      "Store according to the manufacturer's instructions. The supplied packaging does not clearly specify storage conditions.",
      "Keep out of reach of children.",
      "Not for Human Use. Not a Substitute for Veterinary Treatment.",
    ],
    faqs: [
      {
        question: "What is UTRI CURE?",
        answer:
          "UTRI CURE is a Sarvadhenu-branded uterine tonic for post-calving care in cattle, buffaloes, sheep and goats.",
      },
      {
        question: "What are the main benefits of UTRI CURE?",
        answer:
          "It is positioned for post-calving uterine care, normal uterine involution, placental management support and reproductive nutritional support.",
      },
      {
        question: "What ingredients does UTRI CURE contain?",
        answer:
          "Niacinamide, copper sulphate, manganese, magnesium sulphate, zinc sulphate, iron, calcium, folic acid, vitamins and herbal ingredients. Individual quantities are not specified on the supplied label.",
      },
      {
        question: "What is uterine involution?",
        answer:
          "It is the physiological process through which the uterus gradually returns towards its normal non-pregnant condition after delivery.",
      },
      {
        question: "Can UTRI CURE be used after calving?",
        answer:
          "Yes. Post-calving use is its positioned application, according to the label dosage and veterinary recommendations.",
      },
      {
        question: "Does UTRI CURE support placental management?",
        answer:
          "The label identifies placental retention prevention as an intended application. Monitoring and timely veterinary intervention remain essential.",
      },
      {
        question: "Can UTRI CURE be used for retained placenta?",
        answer:
          "Retained placenta is a veterinary condition. It should not be managed through supplementation or manual removal without professional direction, and UTRI CURE should not replace veterinary treatment.",
      },
      {
        question: "What is the role of niacinamide?",
        answer: "Niacinamide is a form of Vitamin B3 involved in energy metabolism.",
      },
      {
        question: "What is the role of folic acid?",
        answer: "Folic acid is involved in DNA synthesis, cell division and blood cell formation.",
      },
      {
        question: "What is the role of copper?",
        answer:
          "Copper is associated with enzyme activity, iron metabolism and connective tissue functions.",
      },
      {
        question: "What is the role of zinc?",
        answer:
          "Zinc is associated with protein synthesis, tissue maintenance and immune functions.",
      },
      {
        question: "What is the role of magnesium?",
        answer:
          "Magnesium is associated with energy metabolism, muscle function and nerve function.",
      },
      {
        question: "What do calcium and iron contribute?",
        answer:
          "Calcium supports skeletal and muscular functions. Iron is associated with haemoglobin and oxygen transport.",
      },
      {
        question: "Can it be used for cattle and buffaloes?",
        answer:
          "Yes. Cattle and buffaloes are listed applications, with the label dosage and veterinary guidance.",
      },
      {
        question: "What is the dosage for cows and buffaloes?",
        answer:
          "The label declares 200 mL after calving (initial administration), then 100 mL for the next three days.",
      },
      {
        question: "What is the dosage for sheep and goats?",
        answer: "The label declares 50 mL for 3-5 days.",
      },
      {
        question: "How is UTRI CURE administered?",
        answer:
          "Orally, following manufacturer and veterinary guidance, using suitable measuring equipment to measure the mL amount on the label.",
      },
      {
        question: "Is UTRI CURE a hormonal product?",
        answer:
          "The label does not declare any hormonal ingredient. It lists vitamins, minerals and herbal ingredients.",
      },
      {
        question: "Does UTRI CURE treat uterine infections?",
        answer:
          "The packaging does not establish it as a treatment for uterine infections. Uterine infections need veterinary diagnosis and treatment.",
      },
      {
        question: "Is UTRI CURE a veterinary medicine?",
        answer:
          "The packaging identifies it as a uterine tonic. Its precise regulatory classification should be confirmed with the manufacturer. It is not for human use.",
      },
    ],
  },
  {
    id: "p18",
    slug: "spark-up",
    name: "SPARK UP",
    index: "18",
    category: "Animal Energy Supplement",
    focusArea: "Energy Boost Formula for Ketosis Management, Peak Lactation & Postpartum Nutrition",
    form: "Liquid energy boost formula (physical form not specified on supplied label)",
    shortDescription:
      "An advanced energy boost formula with glucogenic precursors fortified with Nicotinamide and Cyanocobalamin for cattle and buffaloes during ketosis-related nutritional management, peak lactation, and pre- and post-partum periods.",
    detailedDescription:
      "SPARK UP by Sarvadhenu is a specialized energy boost formula containing glucogenic precursors fortified with Nicotinamide and Cyanocobalamin. It is formulated to support glucose availability, help manage ketone body formation and enhance rumen fermentation in dairy cattle and buffaloes, and is relevant during peak lactation and the pre- and post-partum periods. It is intended to complement a balanced feeding program and veterinary care rather than replace diagnosis or treatment of ketosis.",
    image: sparkUpImg,
    imageAlt:
      "Sarvadhenu SPARK UP energy boost formula containing glucogenic precursors fortified with Nicotinamide and Cyanocobalamin for cattle and buffaloes.",
    applications: [
      "Energy and glucose availability support in dairy cattle and buffaloes",
      "Ketosis-related nutritional management, peak lactation, and pre- and post-partum feeding programs",
      "Use according to the declared dosage and veterinary recommendations",
    ],
    composition:
      "Glucogenic precursors, Nicotinamide (Vitamin B3) and Cyanocobalamin (Vitamin B12) (individual quantities and glucogenic precursor identities not specified on supplied label)",
    packSizes: "500 mL & 1 Litre",
    dosage:
      "Cattle & buffaloes: 200 mL twice daily for the first 2 days, then 100 mL daily for the next 2 days",
    storage:
      "The supplied packaging does not clearly specify storage conditions. Confirm with the manufacturer.",
    disclaimer: CATTLE_DISCLAIMER,
    seoTitle: "SPARK UP | Energy Boost Formula for Cattle & Buffaloes | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu SPARK UP, an advanced energy boost formula containing glucogenic precursors fortified with Nicotinamide and Cyanocobalamin for cattle and buffaloes during ketosis-related nutritional management, peak lactation, and pre- and post-partum periods.",
    tagline: "More Energy. Better Metabolism. Stronger Dairy Performance.",
    heroHeading:
      "Advanced Glucogenic Energy Formula for Ketosis Management, Peak Lactation & Postpartum Nutrition",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL NUTRITION",
      "SPARK UP is a specialized energy boost formula containing glucogenic precursors fortified with Nicotinamide and Cyanocobalamin.",
      "It is formulated to support glucose availability, help manage ketone body formation, and enhance rumen fermentation, and is relevant during peak lactation and the pre- and post-partum periods.",
      "More Energy. Better Metabolism. Healthier Dairy Animals.",
    ],
    highlights: [
      "Advanced Energy Boost Formula",
      "Glucogenic Precursors",
      "Fortified with Nicotinamide",
      "Enriched with Cyanocobalamin (Vitamin B12)",
      "Helps Increase Glucose Availability",
      "Helps Manage Ketone Body Formation",
      "Supports Rumen Fermentation",
      "Ketosis-Related Nutritional Management",
      "Peak Lactation Nutrition",
      "Pre- & Post-Partum Feeding Programs",
      "Convenient Liquid Packaging",
      "Available in 500 mL & 1 Litre",
    ],
    overviewLabel: "About SPARK UP",
    overviewHeading: "Advanced Energy Nutrition for Modern Dairy Farming",
    overviewParagraphs: [
      "SPARK UP by Sarvadhenu is an energy boost formula built around glucogenic precursors, which are associated with glucose production and energy metabolism. This is especially relevant around calving and during peak lactation, when energy demand is high.",
      "The formula is fortified with Nicotinamide (Vitamin B3) and Cyanocobalamin (Vitamin B12), nutrients involved in metabolic processes.",
      "Why energy balance matters: dairy animals have high energy and glucose requirements, particularly during the transition period and peak lactation. When demand exceeds intake, animals can enter negative energy balance, mobilise body fat and form ketone bodies. Targeted supplementation is one tool for supporting energy intake during these stages.",
      "Balanced feeding, appropriate body condition management, and veterinary monitoring remain essential for maintaining dairy animal energy balance.",
      "SPARK UP is intended to complement dairy feeding practices rather than guarantee a specific increase in milk production.",
      "About Sarvadhenu: science-informed nutrition, dairy-focused formulations, balanced support, responsible supplementation, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "SPARK UP"],
      ["Brand", "Sarvadhenu"],
      ["Category", "Animal Energy Supplement"],
      ["Type", "Energy Boost Formula"],
      ["Primary Components", "Glucogenic Precursors"],
      ["B3 Component", "Nicotinamide"],
      ["B12 Component", "Cyanocobalamin"],
      ["Primary Application", "Energy Metabolism Support"],
      ["Indications", "Ketosis, Peak Lactation, Pre & Post-Partum"],
      ["Suitable Animals", "Cattle & Buffaloes"],
      ["Administration", "Confirm manufacturer-approved instructions"],
      ["Pack Sizes", "500 mL & 1 Litre"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Targeted Energy Support for Dairy Cattle & Buffaloes",
    applicationsEyebrow: "Dairy production stages",
    applicationsHeading: "Energy Support Across Key Stages of the Dairy Cycle",
    advantageEyebrow: "The SPARK UP advantage",
    advantageHeading: "Glucogenic Energy Nutrition for Dairy Cattle & Buffaloes",
    benefits: [
      {
        index: "01",
        title: "Increased Glucose Availability",
        heading: "Glucogenic Precursors for Energy Metabolism",
        description:
          "Glucogenic precursors are associated with glucose production and energy metabolism. SPARK UP is formulated to support glucose availability when energy demand is high.",
      },
      {
        index: "02",
        title: "Ketone Body Management",
        heading: "Supporting Ketosis-Related Nutritional Management",
        description:
          "SPARK UP is positioned to help manage ketone body formation as part of appropriate nutritional and veterinary management. It does not replace veterinary diagnosis or treatment of ketosis.",
      },
      {
        index: "03",
        title: "Rumen Fermentation Support",
        heading: "Supporting the Rumen Environment",
        description:
          "The label identifies support for rumen fermentation, which is important for energy supply in ruminants.",
      },
      {
        index: "04",
        title: "Peak Lactation Nutrition",
        heading: "Energy Support When Demand Is Highest",
        description:
          "Energy and glucose requirements are high during peak lactation. SPARK UP can complement the ration during this stage.",
      },
      {
        index: "05",
        title: "Pre-Partum Nutritional Support",
        heading: "Preparing for the Transition Period",
        description:
          "The period before calving is important for metabolic preparation. SPARK UP is relevant to pre-partum feeding programs.",
      },
      {
        index: "06",
        title: "Post-Partum Energy Support",
        heading: "Supporting Recovery After Calving",
        description:
          "Energy demand rises sharply after calving. SPARK UP is relevant to post-partum feeding programs and nutritional recovery.",
      },
    ],
    detailedApplications: [
      {
        title: "Dairy Cattle",
        heading: "Supporting Energy Metabolism in Dairy Cows",
        description:
          "Dairy cattle have high energy requirements around calving and peak lactation. The label identifies cattle and buffaloes; use according to the declared dosage and veterinary recommendations.",
        focus: [
          "Glucose availability",
          "Ketosis-related nutritional management",
          "Peak lactation",
          "Pre-partum nutrition",
          "Post-partum nutrition",
          "Rumen fermentation",
        ],
      },
      {
        title: "Dairy Buffaloes",
        heading: "Supporting Energy Metabolism in Dairy Buffaloes",
        description:
          "Dairy buffaloes also face high energy demand during the transition period and lactation. Use according to the declared dosage and veterinary recommendations.",
        focus: [
          "Glucose availability",
          "Ketosis-related nutritional management",
          "Peak lactation",
          "Pre-partum nutrition",
          "Post-partum nutrition",
          "Rumen fermentation",
        ],
      },
      {
        title: "Production Stages",
        heading: "Where SPARK UP Fits in the Dairy Cycle",
        description:
          "Relevant stages include peak lactation, pre-partum, post-partum, and ketosis-related management, which should be veterinarian-supervised.",
        focus: [
          "Peak Lactation",
          "Pre-Partum",
          "Post-Partum",
          "Ketosis-Related Management (veterinarian-supervised)",
        ],
      },
    ],
    formula: [
      {
        title: "Glucogenic Precursors",
        heading: "Supporting Glucose Availability & Energy Metabolism",
        description:
          "Glucogenic precursors are compounds associated with glucose production and energy metabolism in ruminants. Their individual identities are not specified on the supplied label.",
      },
      {
        title: "Nicotinamide (Vitamin B3)",
        heading: "Precursor of NAD & NADP Coenzymes",
        description:
          "Nicotinamide is a form of Vitamin B3 and a precursor of the NAD and NADP coenzymes involved in energy metabolism.",
      },
      {
        title: "Cyanocobalamin (Vitamin B12)",
        heading: "Supporting Propionate Metabolism & Glucose Production",
        description:
          "Vitamin B12 is involved in propionate metabolism, which is relevant to glucose production in ruminants.",
      },
      {
        title: "Metabolic Support",
        heading: "Glucose, Ketones & Rumen Fermentation",
        description:
          "SPARK UP is positioned to support glucose availability and help manage ketone body formation, which can rise during negative energy balance and fat mobilisation. Nicotinamide, cyanocobalamin and support for rumen fermentation complement these functions.",
      },
      {
        title: "Why Energy Balance Matters",
        heading: "Energy Requirements, Negative Energy Balance & Targeted Supplementation",
        description:
          "Energy and glucose requirements rise in the transition period and at peak lactation. If intake falls short, negative energy balance and ketone formation can follow. Targeted supplementation can help support energy intake at these stages. Balanced feeding, appropriate body condition management, and veterinary monitoring remain essential for maintaining dairy animal energy balance.",
      },
    ],
    compositionGroups: [
      {
        title: "Composition (quantities not specified)",
        rows: [
          ["Glucogenic Precursors", "Glucose-Related Nutritional Components"],
          ["Nicotinamide", "Vitamin B3"],
          ["Cyanocobalamin", "Vitamin B12"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Name", "SPARK UP"],
          ["Brand", "Sarvadhenu"],
          ["Physical Form", "Not specified on supplied label"],
          ["Pack Sizes", "500 mL & 1 Litre"],
          ["Administration", "Confirm manufacturer-approved instructions"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Storage", "To be confirmed from manufacturer"],
        ],
      },
    ],
    compositionNote:
      "The label identifies these components but does not specify individual quantities or concentrations, and the identities of the glucogenic precursors are not specified. Please confirm final specifications and batch quality through the manufacturer-approved specification sheet and Certificate of Analysis (CoA).",
    dosageTable: [
      {
        category: "Cattle & Buffaloes",
        quantity: "200 mL twice daily for the first 2 days, then 100 mL daily for the next 2 days",
      },
    ],
    dosageGuidance: [
      "Label-declared dosage for cattle & buffaloes: 200 mL twice daily for the first 2 days, then 100 mL daily for the next 2 days.",
      "Step 01 â€” Identify the animal category.",
      "Step 02 â€” Initial phase: 200 mL twice daily for 2 days.",
      "Step 03 â€” Follow-up phase: 100 mL daily for 2 days.",
      "Step 04 â€” Follow the manufacturer's approved route and method of administration.",
      "Step 05 â€” Monitor appetite, feed intake, milk output and body condition.",
      "Follow the label dosage, maintain the schedule, use suitable measuring equipment, and do not exceed the recommended dosage. Consider the animal's complete nutrition.",
      "Seek veterinary guidance if ketosis or other metabolic disorders are suspected.",
      "The label does not specify the administration route; please confirm with the manufacturer.",
      "SPARK UP is intended to complement dairy feeding practices rather than guarantee a specific increase in milk production.",
      "SPARK UP should complement a balanced feeding program rather than replace veterinary diagnosis or treatment of ketosis and other metabolic disorders.",
    ],
    advantages: [
      {
        title: "Glucogenic Precursor Formulation",
        description: "Built around glucogenic precursors associated with energy metabolism.",
      },
      {
        title: "Nicotinamide Fortification",
        description: "Fortified with Nicotinamide (Vitamin B3).",
      },
      {
        title: "Cyanocobalamin Fortification",
        description: "Enriched with Cyanocobalamin (Vitamin B12).",
      },
      {
        title: "Glucose Availability Support",
        description: "Formulated to support glucose availability when energy demand is high.",
      },
      {
        title: "Ketone Body Management",
        description:
          "Positioned to help manage ketone body formation alongside veterinary management.",
      },
      {
        title: "Rumen Fermentation Support",
        description: "Identified on the label as supporting rumen fermentation.",
      },
      {
        title: "Dairy Production Applications",
        description: "Relevant to peak lactation and pre- and post-partum feeding programs.",
      },
      {
        title: "Convenient Packaging",
        description: "Available in 500 mL and 1 litre bottles.",
      },
    ],
    handling: [
      "Maintain balanced energy intake in the ration.",
      "Monitor body condition.",
      "Support glucose metabolism through appropriate feeding.",
      "Balance protein and energy in the ration.",
      "Monitor animals closely at peak lactation.",
      "Observe ketosis-related signs and seek veterinary advice early.",
      "Consider any existing supplements in the feeding program.",
      "Seek professional guidance from a veterinarian or animal nutritionist.",
      "Keep the product in its original packaging and close the bottle after use.",
      "Check the manufacturing date and expiry information.",
      "Use suitable measuring equipment and follow the dosage schedule.",
      "Avoid contamination of the product.",
      "Store according to the manufacturer's instructions. The supplied packaging does not clearly specify storage conditions.",
      "Keep out of reach of children.",
      "Not for Human Use. Not a Substitute for Veterinary Treatment.",
    ],
    faqs: [
      {
        question: "What is SPARK UP?",
        answer:
          "SPARK UP is a Sarvadhenu energy boost formula with glucogenic precursors fortified with Nicotinamide and Cyanocobalamin, for cattle and buffaloes.",
      },
      {
        question: "What are the main benefits of SPARK UP?",
        answer:
          "It is positioned to support glucose availability, help manage ketone body formation and support rumen fermentation, with relevance to peak lactation and pre- and post-partum periods.",
      },
      {
        question: "Which animals can use SPARK UP?",
        answer:
          "The label identifies cattle and buffaloes. Use according to the declared dosage and veterinary recommendations.",
      },
      {
        question: "What are glucogenic precursors?",
        answer:
          "They are compounds associated with glucose production and energy metabolism. The specific precursors are not identified on the supplied label.",
      },
      {
        question: "Why is glucose important for dairy animals?",
        answer:
          "Dairy animals have high glucose requirements, especially around calving and at peak lactation, to support energy metabolism and milk synthesis.",
      },
      {
        question: "Can SPARK UP help with ketosis?",
        answer:
          "The label identifies ketosis as an indication and states it helps stop ketone body formation. It is used as part of appropriate veterinary and nutritional management and does not replace veterinary diagnosis or treatment.",
      },
      {
        question: "What is the role of Nicotinamide?",
        answer:
          "Nicotinamide is a form of Vitamin B3 and a precursor of the NAD and NADP coenzymes involved in energy metabolism.",
      },
      {
        question: "What is the role of Cyanocobalamin?",
        answer:
          "Cyanocobalamin is Vitamin B12, involved in propionate metabolism and glucose production in ruminants.",
      },
      {
        question: "Is SPARK UP suitable for peak lactation?",
        answer:
          "Peak lactation is a listed indication, as energy and glucose demand are high at that stage. Follow the label dosage and veterinary advice.",
      },
      {
        question: "Can SPARK UP be used before calving?",
        answer:
          "Pre-partum feeding programs are a listed indication. Follow the label dosage and veterinary advice.",
      },
      {
        question: "Can SPARK UP be used after calving?",
        answer:
          "Post-partum feeding programs are a listed indication. Follow the label dosage and veterinary advice.",
      },
      {
        question: "Does SPARK UP support rumen fermentation?",
        answer: "Yes. The label identifies support for rumen fermentation.",
      },
      {
        question: "What is the dosage of SPARK UP?",
        answer:
          "The label declares 200 mL twice daily for the first 2 days, then 100 mL daily for the next 2 days.",
      },
      {
        question: "How long should SPARK UP be given?",
        answer:
          "The declared schedule runs for 4 days in total. For longer or repeated use, seek veterinary guidance.",
      },
      {
        question: "What pack sizes are available?",
        answer: "500 mL and 1 Litre.",
      },
      {
        question: "Is SPARK UP a multivitamin?",
        answer:
          "No. It is an energy boost formula with glucogenic precursors, Nicotinamide and Cyanocobalamin.",
      },
      {
        question: "Can SPARK UP replace balanced feed?",
        answer: "No. It is meant to complement a balanced feeding program, not replace it.",
      },
      {
        question: "Is SPARK UP a veterinary medicine?",
        answer:
          "The packaging identifies it as an energy boost formula. Its regulatory classification should be confirmed with the manufacturer. It is not a replacement for veterinary treatment.",
      },
      {
        question: "What is the shelf life?",
        answer:
          "The shelf life is not specified on the supplied label. Please confirm it with the manufacturer.",
      },
      {
        question: "How is SPARK UP administered?",
        answer:
          "Follow the label dosage schedule. The label does not specify the administration route, so confirm it with the manufacturer.",
      },
    ],
  },
  {
    id: "p19",
    slug: "gas-nil",
    name: "GAS NIL",
    index: "19",
    category: "Poultry Farm Hygiene Product",
    focusArea: "Ammonia Binder for Poultry Litter Management",
    form: "Powder",
    shortDescription:
      "A specialized ammonia binder formulated with siliceous powder, diatomaceous powder, precipitated silica, inactive culture and paraformaldehyde/formaldehyde for poultry litter management in broiler and layer farms.",
    detailedDescription:
      "GAS NIL by Sarvadhenu is a specialized ammonia binder for poultry litter management. It is formulated with siliceous powder, diatomaceous powder, precipitated silica, inactive culture and paraformaldehyde/formaldehyde, and is designed to help control ammonia, absorb excess moisture, reduce unpleasant odours, remove wetness and reduce bacterial load in broiler and layer farms.",
    image: gasNilImg,
    imageAlt:
      "Sarvadhenu GAS NIL ammonia binder powder for poultry litter management, formulated with siliceous powder, diatomaceous powder, precipitated silica, inactive culture, and paraformaldehyde/formaldehyde.",
    applications: [
      "Ammonia control and moisture management in poultry litter",
      "Broiler and layer farm litter management",
      "Use according to the declared application rate and manufacturer-approved instructions",
    ],
    composition:
      "Siliceous powder, diatomaceous powder, precipitated silica, inactive culture and paraformaldehyde/formaldehyde (quantities not specified on supplied label)",
    packSizes: "Not specified on supplied label",
    dosage:
      "Broiler: 3 kg per 1,000 sq. ft.; layer: 10-20 kg per 1,000 sq. ft.; sprinkle over litter; repeat after 12 days",
    storage: "To be confirmed from manufacturer",
    disclaimer: FARM_HYGIENE_DISCLAIMER,
    seoTitle: "GAS NIL | Ammonia Binder for Poultry Litter & Livestock | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu GAS NIL, an advanced ammonia binder for poultry litter management. Helps control ammonia, absorb moisture, reduce odour, manage wetness, and reduce bacterial load in broiler and layer farms.",
    keywords: [
      "Ammonia Binder for Poultry Farms",
      "GAS NIL",
      "Sarvadhenu GAS NIL",
      "ammonia binder for poultry",
      "ammonia control for poultry farms",
      "poultry litter ammonia control",
      "poultry litter moisture absorber",
      "poultry litter management powder",
      "broiler farm litter management",
      "layer farm litter management",
      "poultry house odour control",
      "ammonia control powder",
      "poultry litter wetness management",
      "poultry farm hygiene product",
      "diatomaceous powder poultry litter",
      "precipitated silica poultry litter",
      "livestock ammonia binder",
      "poultry bacterial load management",
    ],
    tagline: "Control Ammonia. Absorb Moisture. Maintain a Healthier Farm Environment.",
    heroHeading:
      "Advanced Ammonia Binding Formula for Poultry Litter Management, Odour Reduction & Moisture Control",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL FARM MANAGEMENT",
      "GAS NIL is a specialized ammonia binder formulated with siliceous powder, diatomaceous powder, precipitated silica, inactive culture and paraformaldehyde/formaldehyde.",
      "It is intended for poultry litter management and is designed to help control ammonia, absorb excess moisture, reduce unpleasant odours, remove wetness and reduce bacterial load in broiler and layer farms.",
      "Less Ammonia. Less Moisture. Better Litter Management.",
    ],
    highlights: [
      "Advanced Ammonia Binder",
      "Helps Control Ammonia",
      "Absorbs Excess Moisture",
      "Helps Reduce Unpleasant Odours",
      "Litter Wetness Management",
      "Helps Reduce Bacterial Load",
      "Siliceous Powder-Based",
      "Contains Diatomaceous Powder",
      "Contains Precipitated Silica",
      "Includes Inactive Culture",
      "Suitable for Broiler & Layer Farms",
      "Convenient Litter Application",
    ],
    overviewLabel: "About GAS NIL",
    overviewHeading: "Ammonia Binding for Better Poultry Litter Management",
    overviewParagraphs: [
      "Poultry litter accumulates moisture, ammonia and other unwanted compounds over time. GAS NIL is applied directly over the litter, with different quantities declared for broiler and layer farms.",
      "GAS NIL is intended to complement regular litter maintenance and routine poultry house hygiene.",
      "Product science: Siliceous powder is included for moisture-management support. Diatomaceous powder consists of silica-rich fossilized diatom deposits and is an absorbent material. Precipitated silica is a synthetic amorphous silica with a high surface area.",
      "Declared components: Inactive culture is listed on the label, but its identity, concentration and mechanism are not provided. Paraformaldehyde/formaldehyde is also declared; its concentration, chemical form and technical function are not specified. Handling, exposure precautions, regulatory compliance and application safety must be confirmed through the manufacturer's approved SDS and technical documentation.",
      "The packaging does not provide ingredient percentages or validated performance data.",
      "Why management matters: ammonia, moisture, odour, bacterial load and wet litter all affect the poultry house environment. Regular treatment and targeted application are part of litter management.",
      "Effective poultry litter management requires proper ventilation, suitable stocking density, drinker maintenance, moisture control, and regular monitoring in addition to litter treatment products.",
      "About Sarvadhenu: science-informed formulations, farm hygiene solutions, practical farm applications, responsible product handling, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "GAS NIL"],
      ["Brand", "Sarvadhenu"],
      ["Category", "Poultry Farm Hygiene Product"],
      ["Type", "Ammonia Binder"],
      ["Primary Application", "Poultry Litter Management"],
      ["Primary Function", "Ammonia Control"],
      ["Additional Functions", "Moisture Absorption & Odour Reduction"],
      [
        "Ingredients",
        "Siliceous Powder, Diatomaceous Powder, Precipitated Silica, Inactive Culture, Paraformaldehyde/Formaldehyde",
      ],
      ["Application Method", "Direct Litter Sprinkling"],
      ["Broiler Rate", "3 kg per 1,000 sq. ft."],
      ["Layer Rate", "10-20 kg per 1,000 sq. ft."],
      ["Repeat Application", "After 12 Days"],
      ["Suitable For", "Broiler & Layer Poultry Farms"],
      ["Physical Form", "Powder"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Ammonia, Moisture & Odour Management for Poultry Litter",
    applicationsEyebrow: "Poultry farm applications",
    applicationsHeading: "Litter Management for Broiler and Layer Houses",
    advantageEyebrow: "The GAS NIL advantage",
    advantageHeading: "A Mineral-Based Ammonia Binder for Poultry Litter",
    compositionHeading: "Declared Ingredients & Specifications",
    dosageLabel: "Application rate",
    finalCtaCopy: "Less Ammonia. Less Moisture. Better Poultry Litter Management.",
    benefits: [
      {
        index: "01",
        title: "Ammonia Control",
        heading: "Ammonia Binding in Poultry Litter",
        description:
          "Ammonia control is the primary function highlighted on the label. GAS NIL is designed to help control ammonia in poultry litter. No quantitative ammonia reduction data were supplied.",
      },
      {
        index: "02",
        title: "Moisture Absorption",
        heading: "Absorbing Excess Litter Moisture",
        description:
          "GAS NIL is designed to absorb excess moisture in litter, supported by its mineral-based powder components.",
      },
      {
        index: "03",
        title: "Odour Reduction",
        heading: "Helping Reduce Unpleasant Odours",
        description:
          "By helping manage ammonia and moisture, GAS NIL is intended to help reduce unpleasant odours in the poultry house.",
      },
      {
        index: "04",
        title: "Wetness Management",
        heading: "Removing Wetness From Litter",
        description:
          "The label identifies litter wetness removal as an intended function. Wet litter should also be addressed at its source, such as water leakage and drinker management.",
      },
      {
        index: "05",
        title: "Bacterial Load Reduction",
        heading: "Intended Support for Litter Hygiene",
        description:
          "The label identifies reduction of bacterial load as an intended benefit. No microbial data were supplied.",
      },
      {
        index: "06",
        title: "Poultry Farm Management",
        heading: "Broiler and Layer Recommendations",
        description:
          "Separate application rates are declared for broiler and layer farms, with repeat application after 12 days.",
      },
    ],
    detailedApplications: [
      {
        title: "Broiler Farms",
        heading: "3 kg per 1,000 sq. ft.",
        description:
          "Applied by sprinkling directly over broiler litter and repeated after 12 days. GAS NIL should complement proper ventilation, drinker management, litter inspection, and routine poultry house hygiene. The appropriate application rate should be selected according to litter condition and manufacturer-approved instructions.",
        focus: [
          "Ammonia control",
          "Moisture absorption",
          "Odour reduction",
          "Wetness management",
          "Bacterial load reduction",
        ],
      },
      {
        title: "Layer Farms",
        heading: "10-20 kg per 1,000 sq. ft.",
        description:
          "The rate depends on litter condition. Apply by sprinkling directly over layer litter and repeat after 12 days. GAS NIL should complement proper ventilation, drinker management, litter inspection, and routine poultry house hygiene. The appropriate application rate should be selected according to litter condition and manufacturer-approved instructions.",
        focus: [
          "Ammonia control",
          "Moisture absorption",
          "Odour reduction",
          "Wetness management",
          "Bacterial load reduction",
        ],
      },
      {
        title: "Poultry House Management",
        heading: "Part of Routine Litter Maintenance",
        description:
          "The packaging identifies broiler and layer farm applications. Other livestock housing uses should be confirmed with the manufacturer.",
        focus: ["Broiler housing", "Layer housing", "Routine litter maintenance"],
      },
    ],
    formula: [
      {
        title: "Siliceous Powder",
        heading: "Moisture-Management Support",
        description: "A mineral-based powder included for moisture-management support.",
      },
      {
        title: "Diatomaceous Powder",
        heading: "Silica-Rich Absorbent Material",
        description: "Silica-rich fossilized diatom deposits used as an absorbent material.",
      },
      {
        title: "Precipitated Silica",
        heading: "Synthetic Amorphous Silica",
        description: "A synthetic amorphous silica with a high surface area.",
      },
      {
        title: "Inactive Culture",
        heading: "Declared Formulation Component",
        description:
          "Its identity, concentration and mechanism are not provided on the supplied label.",
      },
      {
        title: "Paraformaldehyde / Formaldehyde",
        heading: "Declared Formulation Component",
        description:
          "Its concentration, chemical form and technical function are not specified. Handling, exposure precautions, regulatory compliance and application safety must be confirmed through the manufacturer's approved SDS and technical documentation.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Ingredients (quantities not specified)",
        rows: [
          ["Siliceous Powder", "Mineral-Based Powder"],
          ["Diatomaceous Powder", "Silica-Rich Absorbent Material"],
          ["Precipitated Silica", "Silica-Based Powder"],
          ["Inactive Culture", "Declared Formulation Component"],
          ["Paraformaldehyde / Formaldehyde", "Declared Formulation Component"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Name", "GAS NIL"],
          ["Brand", "Sarvadhenu"],
          ["Physical Form", "Powder"],
          ["Application Method", "Sprinkle directly on litter"],
          ["Broiler Rate", "3 kg / 1,000 sq. ft."],
          ["Layer Rate", "10-20 kg / 1,000 sq. ft."],
          ["Repeat Application", "After 12 days"],
          ["Packaging Size", "Not specified on supplied label"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Storage", "To be confirmed from manufacturer"],
        ],
      },
    ],
    compositionNote:
      "The label does not provide ingredient quantities or concentrations. Quantitative ammonia reduction data, testing conditions and duration were not provided, and moisture absorbent capacity is not specified. Bacterial load reduction is declared without testing results. Please confirm final specifications through the manufacturer-approved specification sheet and SDS.",
    dosageTable: [
      { category: "Broiler farm", quantity: "3 kg per 1,000 sq. ft." },
      { category: "Layer farm", quantity: "10-20 kg per 1,000 sq. ft. (per litter condition)" },
      { category: "Repeat application", quantity: "After 12 days" },
    ],
    dosageGuidance: [
      "Label-declared application: broiler farm 3 kg per 1,000 sq. ft.; layer farm 10-20 kg per 1,000 sq. ft. depending on litter condition; repeat after 12 days.",
      "Step 01 - Evaluate the litter condition.",
      "Step 02 - Identify the farm category (broiler or layer).",
      "Step 03 - Measure the product by floor area.",
      "Step 04 - Sprinkle directly over the litter.",
      "Step 05 - Repeat after 12 days.",
      "Calculate the quantity by floor area and assess the litter before selecting the layer rate.",
      "Follow manufacturer-approved instructions and maintain ventilation during and after application.",
      "Follow the SDS and protective equipment requirements, and prevent unnecessary dust exposure.",
      "Do not intentionally mix the product into feed. Avoid unintended feed and drinking water contamination; feed-contact safety must be confirmed with the manufacturer's approved safety documentation.",
    ],
    advantages: [
      {
        title: "Ammonia Binder Formulation",
        description: "A powder formulated as an ammonia binder for poultry litter.",
      },
      {
        title: "Multiple Mineral-Based Components",
        description: "Combines siliceous powder, diatomaceous powder and precipitated silica.",
      },
      {
        title: "Moisture Absorption Support",
        description: "Designed to absorb excess moisture in litter.",
      },
      {
        title: "Odour Reduction",
        description: "Intended to help reduce unpleasant poultry house odours.",
      },
      {
        title: "Wetness Management",
        description: "Intended to help remove wetness from litter.",
      },
      {
        title: "Bacterial Load Reduction",
        description:
          "Identified on the label as an intended benefit; no microbial data were supplied.",
      },
      {
        title: "Broiler & Layer Applications",
        description: "Separate application rates are declared for broiler and layer farms.",
      },
      {
        title: "Area-Based Application",
        description: "Quantities are declared per 1,000 sq. ft. of floor area.",
      },
      {
        title: "Repeat Application Guidance",
        description: "The label declares repeat application after 12 days.",
      },
    ],
    handling: [
      "Best practices: maintain proper ventilation and control water leakage.",
      "Monitor litter moisture, stocking density and ammonia levels.",
      "Keep up regular cleaning, follow application guidelines and repeat appropriately.",
      "Follow safety precautions, including protective equipment and the SDS, because a formaldehyde-related ingredient is declared.",
      "GAS NIL should complement comprehensive poultry house hygiene practices rather than replace proper cleaning, ventilation, and moisture management.",
      "Keep the product in its original packaging and keep it closed.",
      "Store according to the manufacturer's instructions and protect from moisture.",
      "Use protective equipment, avoid dust inhalation and avoid eye and skin contact.",
      "Do not intentionally mix the product into feed. Avoid unintended feed and drinking water contamination; feed-contact safety must be confirmed with the manufacturer's approved safety documentation.",
      "Ensure ventilation during application and restrict access to treated areas as advised.",
      "Follow the SDS and check manufacturing and expiry information.",
      "Important safety information: the packaging declares paraformaldehyde/formaldehyde. Handling, exposure, feed-contact and animal safety must be established through the manufacturer's approved safety documentation.",
      "Not for Human Use.",
    ],
    faqs: [
      {
        question: "What is GAS NIL?",
        answer:
          "GAS NIL is a Sarvadhenu ammonia binder powder for poultry litter management in broiler and layer farms.",
      },
      {
        question: "What are the main benefits of GAS NIL?",
        answer:
          "It is designed to help control ammonia, absorb excess moisture, reduce unpleasant odours, remove wetness and reduce bacterial load in litter.",
      },
      {
        question: "What ingredients does GAS NIL contain?",
        answer:
          "Siliceous powder, diatomaceous powder, precipitated silica, inactive culture and paraformaldehyde/formaldehyde. Quantities are not specified on the supplied label.",
      },
      {
        question: "What is the primary application of GAS NIL?",
        answer: "Poultry litter management, with ammonia control as the primary function.",
      },
      {
        question: "Can GAS NIL be used in broiler farms?",
        answer: "Yes. The label declares a broiler application rate.",
      },
      {
        question: "Can GAS NIL be used in layer farms?",
        answer: "Yes. The label declares a layer application rate.",
      },
      {
        question: "What is the broiler dosage?",
        answer: "3 kg per 1,000 sq. ft.",
      },
      {
        question: "What is the layer dosage?",
        answer: "10-20 kg per 1,000 sq. ft., selected according to litter condition.",
      },
      {
        question: "How often should GAS NIL be applied?",
        answer: "The label declares repeat application after 12 days.",
      },
      {
        question: "How is GAS NIL applied?",
        answer: "Sprinkle it directly over the litter.",
      },
      {
        question: "Does GAS NIL control ammonia?",
        answer:
          "The label highlights ammonia control as the primary function. No quantitative ammonia reduction data were supplied.",
      },
      {
        question: "Does GAS NIL absorb moisture?",
        answer:
          "It is designed to absorb excess moisture. The moisture absorbent capacity is not specified.",
      },
      {
        question: "Does GAS NIL reduce odour?",
        answer:
          "It is intended to help reduce unpleasant odours by helping manage ammonia and moisture.",
      },
      {
        question: "Can GAS NIL help with wet litter?",
        answer:
          "It is intended to help manage litter wetness. Wet litter should also be addressed at its source, such as water leakage and drinker management.",
      },
      {
        question: "Does GAS NIL reduce bacterial load?",
        answer:
          "The label identifies this as an intended benefit. No microbial data were supplied.",
      },
      {
        question: "What is diatomaceous powder?",
        answer: "Silica-rich fossilized diatom deposits used as an absorbent material.",
      },
      {
        question: "What is precipitated silica?",
        answer: "A synthetic amorphous silica with a high surface area.",
      },
      {
        question: "What is siliceous powder?",
        answer: "A mineral-based powder included for moisture-management support.",
      },
      {
        question: "Does GAS NIL contain formaldehyde-related ingredients?",
        answer:
          "Paraformaldehyde/formaldehyde is declared on the label. Please confirm its concentration and safety requirements with the manufacturer's approved SDS.",
      },
      {
        question: "Can GAS NIL fall into poultry feed?",
        answer:
          "GAS NIL is for application over litter and should not be intentionally mixed into feed. Feed-contact safety should be confirmed through manufacturer-approved documentation, and contamination of feed and water should be avoided.",
      },
      {
        question: "What area does the recommended quantity cover?",
        answer: "The declared quantities are per 1,000 sq. ft. of floor area.",
      },
      {
        question: "Is GAS NIL a veterinary medicine?",
        answer:
          "The packaging identifies it as an ammonia binder for poultry litter management, not a veterinary medicine.",
      },
      {
        question: "What is the shelf life of GAS NIL?",
        answer:
          "The shelf life is not specified on the supplied label. Please confirm it with the manufacturer.",
      },
    ],
  },
  {
    id: "p20",
    slug: "nutri-pro-elite",
    name: "NUTRI PRO ELITE",
    index: "20",
    category: "Animal Healthcare Supplement",
    focusArea: "Unique Protein Supplement for Advanced Livestock Nutrition",
    form: "Oral supplement",
    shortDescription:
      "A unique protein supplement formulated with rumen-protected protein, propylene glycol, biotin, and micronised calcium and phosphorus for livestock nutritional support in cattle, buffaloes, horses, calves, heifers, goats and sheep.",
    detailedDescription:
      "NUTRI PRO ELITE by Sarvadhenu is a specialized nutritional supplement formulated with rumen-protected protein, propylene glycol, biotin, and micronised calcium and phosphorus. It is designed to complement balanced animal feeding programs and support the nutritional requirements of dairy and other livestock animals, including cattle, buffaloes, horses, calves, heifers, goats and sheep.",
    image: nutriProImg,
    imageAlt:
      "Sarvadhenu NUTRI PRO ELITE unique protein supplement containing rumen-protected protein, propylene glycol, biotin, and micronised calcium and phosphorus for cattle, buffaloes, horses, calves, heifers, goats, and sheep.",
    applications: [
      "Nutritional support for milk production, udder health and hoof health in dairy animals",
      "Cattle, buffaloes, horses, calves, heifers, goats and sheep",
      "Use according to the declared animal-wise dosage and manufacturer-approved instructions",
    ],
    composition:
      "Rumen-protected protein, propylene glycol, biotin, micronised calcium and micronised phosphorus (quantities not specified on supplied label)",
    packSizes: "250 mL, 1 L, 2 L, 2.5 L, 5 L & 20 L",
    dosage:
      "Cattle & buffaloes and horses: 100 mL twice daily; calves & heifers: 25-30 mL twice daily; goats & sheep: 10-20 mL twice daily; oral",
    storage: "Cool & Dry Place, Away from Direct Sunlight",
    disclaimer: LIVESTOCK_DISCLAIMER,
    seoTitle: "NUTRI PRO ELITE | Unique Protein Supplement for Livestock | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu NUTRI PRO ELITE, a unique protein supplement containing rumen-protected protein, propylene glycol, biotin, and micronised calcium and phosphorus for livestock nutritional support.",
    keywords: [
      "Protein Supplement for Dairy Cattle",
      "NUTRI PRO ELITE",
      "Sarvadhenu NUTRI PRO ELITE",
      "rumen-protected protein supplement",
      "protein supplement for cattle",
      "dairy cow protein supplement",
      "buffalo nutritional supplement",
      "propylene glycol cattle supplement",
      "biotin supplement for cattle",
      "hoof health supplement for dairy cows",
      "calcium phosphorus cattle supplement",
      "energy supplement for dairy animals",
      "cattle milk production supplement",
      "livestock protein supplement",
      "animal healthcare nutritional supplement",
      "goat and sheep nutritional supplement",
      "horse nutritional supplement",
      "cattle udder health supplement",
      "dairy animal ketosis prevention nutrition",
    ],
    tagline: "Better Nutrition. Improved Milk Production. Stronger Dairy Performance.",
    heroHeading:
      "Advanced Protein & Energy Supplement for Milk Production, Udder Health, Hoof Health & Overall Animal Wellness",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL NUTRITION",
      "Support your dairy animals with NUTRI PRO ELITE, a specialized nutritional supplement formulated with rumen-protected protein, propylene glycol, biotin, and micronised calcium and phosphorus.",
      "Designed to complement balanced animal feeding programs, it provides nutritional components associated with milk production, normal udder health, hoof maintenance, musculoskeletal functions, and energy metabolism. It is suitable for cattle, buffaloes, horses, calves, heifers, goats, and sheep.",
      "Better Protein. Balanced Energy. Healthier Animals.",
    ],
    highlights: [
      "Unique Rumen-Protected Protein Supplement",
      "Propylene Glycol Enriched Formulation",
      "Biotin-Based Nutritional Support",
      "Micronised Calcium & Phosphorus",
      "Supports Milk Production Nutrition",
      "Helps Maintain Udder Health",
      "Supports Hoof Health",
      "Helps Support Musculoskeletal Nutrition",
      "Supports Energy Metabolism",
      "Helps Reduce Nutritional Stress",
      "Supports Ketosis Risk Management Through Nutritional Management",
      "Convenient Oral Administration",
      "Available in Six Pack Sizes",
    ],
    overviewLabel: "About NUTRI PRO ELITE",
    overviewHeading: "A Unique Protein Supplement for Modern Dairy Farming",
    overviewParagraphs: [
      "NUTRI PRO ELITE by Sarvadhenu is a specialized nutritional supplement formulated to support the nutritional requirements of dairy and other livestock animals. The formulation combines rumen-protected protein, propylene glycol, biotin, and micronised calcium and phosphorus.",
      "Rumen-protected protein is an additional source of protein designed to reduce degradation within the rumen and improve protein availability for digestion in the lower digestive tract.",
      "Propylene glycol is an energy-related nutritional ingredient used in dairy feeding programs, while biotin contributes to normal metabolic functions and hoof tissue maintenance. Calcium and phosphorus are essential minerals involved in skeletal development, muscle functions, and normal physiological processes.",
      "NUTRI PRO ELITE is intended to complement balanced dairy feeding practices rather than guarantee a specific increase in milk production.",
      "Product science - Rumen-protected protein: protein that resists breakdown in the rumen so more reaches the lower digestive tract. Propylene glycol: an energy-related ingredient used in dairy feeding programs. Biotin: a vitamin that participates in normal metabolic processes and contributes to keratin formation. Micronised calcium & phosphorus: essential minerals provided in finely processed form.",
      "Mineral and metabolic nutrition: calcium and phosphorus support skeletal development, bone maintenance and normal muscular functions; biotin supports normal metabolic processes and hoof tissue; protein supports tissue maintenance and production; propylene glycol is an energy-related ingredient.",
      "Why balance matters: protein, energy, vitamins and minerals work together. Balanced nutrient supply is more important than simply increasing the total quantity of supplementation.",
      "About Sarvadhenu: science-informed nutrition, dairy-focused formulations, balanced support, responsible supplementation, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "NUTRI PRO ELITE"],
      ["Brand", "Sarvadhenu"],
      ["Category", "Animal Healthcare Supplement"],
      ["Type", "Unique Protein Supplement"],
      ["Primary Ingredient", "Rumen-Protected Protein"],
      ["Energy Component", "Propylene Glycol"],
      ["Vitamin", "Biotin"],
      ["Minerals", "Micronised Calcium & Phosphorus"],
      ["Application", "Livestock Nutritional Support"],
      ["Suitable For", "Cattle, Buffaloes, Horses, Calves, Heifers, Goats & Sheep"],
      ["Administration", "Oral"],
      ["Frequency", "Twice Daily (BID)"],
      ["Pack Sizes", "250 mL, 1 L, 2 L, 2.5 L, 5 L & 20 L"],
      ["Storage", "Cool & Dry Place, Away from Direct Sunlight"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Comprehensive Nutritional Support for Productive & Healthy Animals",
    applicationsEyebrow: "Livestock nutrition applications",
    applicationsHeading: "Specialized Nutritional Support Across Different Animal Categories",
    advantageEyebrow: "The NUTRI PRO ELITE advantage",
    advantageHeading: "Protein, Energy, Biotin and Minerals in One Supplement",
    compositionHeading: "Declared Ingredients & Specifications",
    dosageLabel: "Dosage",
    finalCtaCopy: "Better Protein. Balanced Energy. Stronger Dairy Foundations.",
    benefits: [
      {
        index: "01",
        title: "Increased Milk Production",
        heading: "Supporting Dairy Nutritional Requirements",
        description:
          "Milk production requires adequate protein, energy, minerals and other essential nutrients. NUTRI PRO ELITE provides rumen-protected protein and complementary ingredients to support balanced dairy feeding programs. It is intended to complement balanced dairy feeding practices rather than guarantee a specific increase in milk production.",
      },
      {
        index: "02",
        title: "Udder Health Maintenance",
        heading: "Supporting Normal Udder Functions",
        description:
          "Balanced protein, energy and mineral nutrition contributes to normal tissue maintenance and overall dairy animal health. NUTRI PRO ELITE complements nutritional management associated with udder health. It is not a treatment for mastitis or udder infections.",
      },
      {
        index: "03",
        title: "Hoof Health Support",
        heading: "Biotin-Based Nutritional Support",
        description:
          "Biotin participates in normal metabolic processes and contributes to keratin formation. Adequate biotin nutrition is important for maintaining normal hoof structure and tissue health.",
      },
      {
        index: "04",
        title: "Musculoskeletal Support",
        heading: "Supporting Bones & Muscle Functions",
        description:
          "Calcium and phosphorus are essential minerals involved in skeletal development, bone maintenance and normal muscular functions. The formulation provides micronised calcium and phosphorus. Existing weakness or disease requires veterinary evaluation.",
      },
      {
        index: "05",
        title: "Stress Reduction Support",
        heading: "Supporting Nutritional Balance",
        description:
          "Animals experiencing increased nutritional or environmental demands may require appropriate nutritional management. NUTRI PRO ELITE provides complementary protein, energy, vitamin and mineral components to support overall nutritional requirements.",
      },
      {
        index: "06",
        title: "Ketosis Prevention Support",
        heading: "Supporting Energy Balance",
        description:
          "Energy balance is an important consideration in dairy animals, particularly around calving and early lactation. Propylene glycol is an energy-related ingredient used in dairy feeding programs to complement energy metabolism and ketosis risk management.",
      },
    ],
    detailedApplications: [
      {
        title: "Cattle",
        heading: "Supporting Productive Dairy Nutrition",
        description:
          "Dairy cattle require adequate protein, energy, vitamins and minerals to support milk production, normal body maintenance and overall health.",
        focus: [
          "Milk production nutritional support",
          "Rumen-protected protein supplementation",
          "Energy metabolism support",
          "Udder health maintenance",
          "Hoof health nutrition",
          "Calcium and phosphorus supplementation",
          "Overall dairy nutrition",
        ],
      },
      {
        title: "Buffaloes",
        heading: "Supporting Balanced Dairy Nutrition",
        description:
          "Buffaloes require appropriate dietary protein, energy and minerals to support milk production and normal physiological functions.",
        focus: [
          "Protein supplementation",
          "Milk production support",
          "Energy-related nutrition",
          "Udder health maintenance",
          "Hoof health support",
          "Skeletal nutritional support",
        ],
      },
      {
        title: "Horses",
        heading: "Supporting Equine Nutritional Requirements",
        description:
          "Horses require balanced protein, energy and mineral nutrition to support normal muscle maintenance, skeletal functions and physical condition.",
        focus: [
          "Protein nutrition",
          "Energy-related supplementation",
          "Skeletal mineral support",
          "Muscle maintenance",
          "Overall nutritional management",
        ],
      },
      {
        title: "Calves & Heifers",
        heading: "Building a Strong Nutritional Foundation",
        description:
          "Growing calves and heifers require adequate protein, minerals and other essential nutrients to support normal growth and development.",
        focus: [
          "Protein supplementation",
          "Normal skeletal development",
          "Calcium and phosphorus nutrition",
          "Tissue maintenance",
          "Growth-stage nutritional support",
        ],
      },
      {
        title: "Goats & Sheep",
        heading: "Supporting Small Ruminant Nutrition",
        description:
          "Goats and sheep require balanced protein, energy and mineral nutrition for normal growth, body maintenance and physiological functions.",
        focus: [
          "Protein supplementation",
          "Energy-related nutrition",
          "Calcium and phosphorus nutrition",
          "Hoof health support",
          "Growth and body maintenance",
        ],
      },
    ],
    formula: [
      {
        title: "Rumen-Protected Protein",
        heading: "Protein Availability in the Lower Tract",
        description:
          "Designed to reduce degradation within the rumen and improve protein availability for digestion in the lower digestive tract.",
      },
      {
        title: "Propylene Glycol",
        heading: "Energy-Related Nutritional Ingredient",
        description:
          "An energy-related ingredient used in dairy feeding programs to complement energy metabolism.",
      },
      {
        title: "Biotin",
        heading: "Metabolic & Hoof Tissue Support",
        description:
          "A vitamin that participates in normal metabolic processes and contributes to keratin formation and hoof tissue maintenance.",
      },
      {
        title: "Micronised Calcium & Phosphorus",
        heading: "Skeletal & Muscle Minerals",
        description:
          "Essential minerals involved in skeletal development, bone maintenance and normal muscular functions.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Ingredients (quantities not specified)",
        rows: [
          ["Rumen-Protected Protein", "Included"],
          ["Propylene Glycol", "Included"],
          ["Biotin", "Included"],
          ["Micronised Calcium", "Included"],
          ["Micronised Phosphorus", "Included"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Physical Form", "Not specified on supplied label"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Administration", "Oral"],
          ["Frequency", "Twice Daily (BID)"],
          ["Pack Sizes", "250 mL, 1 L, 2 L, 2.5 L, 5 L & 20 L"],
          ["Storage", "Cool & Dry Place, Away from Direct Sunlight"],
        ],
      },
    ],
    compositionNote:
      "The label identifies the ingredients but gives no quantities or percentages per dose. The protein source, protection technology, protein percentage and rumen bypass rate are not identified. Propylene glycol concentration, biotin concentration, and calcium and phosphorus sources and amounts are not specified. Please confirm final specifications through the manufacturer-approved specification sheet and certificate of analysis (CoA).",
    dosageTable: [
      { category: "Cattle & Buffaloes", quantity: "100 mL twice daily (BID)" },
      { category: "Horses", quantity: "100 mL twice daily (BID)" },
      { category: "Calves & Heifers", quantity: "25-30 mL twice daily (BID)" },
      { category: "Goats & Sheep", quantity: "10-20 mL twice daily (BID)" },
      { category: "Route", quantity: "Oral" },
    ],
    dosageGuidance: [
      "Label-declared dosage: cattle & buffaloes 100 mL twice daily (BID); horses 100 mL BID; calves & heifers 25-30 mL BID; goats & sheep 10-20 mL BID; route oral.",
      "Step 01 - Identify the animal category.",
      "Step 02 - Measure the recommended quantity per label.",
      "Step 03 - Administer twice daily.",
      "Step 04 - Administer orally.",
      "Step 05 - Monitor feed intake, milk, body condition and hoof condition.",
      "Follow the animal-wise dosage and administer orally.",
      "Maintain the declared frequency and do not exceed the recommended dosage.",
      "Consider other supplements already being given.",
      "Consult a veterinarian or animal nutritionist for specific animal conditions.",
    ],
    advantages: [
      {
        title: "Rumen-Protected Protein Formulation",
        description: "Provides a protein source designed to resist degradation in the rumen.",
      },
      {
        title: "Propylene Glycol Inclusion",
        description: "Includes an energy-related ingredient used in dairy feeding programs.",
      },
      {
        title: "Biotin-Enriched Nutrition",
        description: "Biotin supports normal metabolic processes and hoof tissue maintenance.",
      },
      {
        title: "Micronised Calcium & Phosphorus",
        description: "Essential minerals for skeletal and muscle functions.",
      },
      {
        title: "Dairy-Focused Nutritional Support",
        description:
          "Formulated to complement balanced dairy feeding for milk production, udder health and hoof health.",
      },
      {
        title: "Multi-Species Application",
        description: "Declared for cattle, buffaloes, horses, calves, heifers, goats and sheep.",
      },
      {
        title: "Convenient Oral Administration",
        description: "Administered orally with animal-wise dosage declared on the label.",
      },
      {
        title: "Multiple Packaging Options",
        description: "Available in 250 mL, 1 L, 2 L, 2.5 L, 5 L and 20 L bottles.",
      },
    ],
    handling: [
      "Best practices: evaluate feed quality, protein balance, energy intake and calcium/phosphorus balance.",
      "Maintain hoof care and hygiene, review existing supplements, and monitor animal condition.",
      "Seek professional guidance for specific animal needs.",
      "NUTRI PRO ELITE should complement an appropriately balanced diet rather than compensate for poor-quality or incomplete feed.",
      "Keep the product in its original packaging and store in a cool, dry place away from direct sunlight.",
      "Keep the bottle closed after use and check manufacturing and expiry information.",
      "Use clean measuring equipment, follow the declared dosage and avoid contamination.",
      "Keep out of reach of children.",
      "Not for Human Use. Not a Substitute for Veterinary Treatment.",
    ],
    faqs: [
      {
        question: "What is NUTRI PRO ELITE?",
        answer:
          "NUTRI PRO ELITE is a Sarvadhenu unique protein supplement for livestock, containing rumen-protected protein, propylene glycol, biotin, and micronised calcium and phosphorus.",
      },
      {
        question: "What are the main benefits of NUTRI PRO ELITE?",
        answer:
          "It is designed to support milk production nutrition, udder health maintenance, hoof health, musculoskeletal nutrition, energy metabolism and overall nutritional balance.",
      },
      {
        question: "What ingredients does NUTRI PRO ELITE contain?",
        answer:
          "Rumen-protected protein, propylene glycol, biotin, micronised calcium and micronised phosphorus. Quantities are not specified on the supplied label.",
      },
      {
        question: "What is rumen-protected protein?",
        answer:
          "Protein designed to reduce degradation in the rumen and improve protein availability for digestion in the lower digestive tract.",
      },
      {
        question: "Why is rumen-protected protein important for dairy animals?",
        answer:
          "Dairy animals have high protein requirements, and a protein source that resists ruminal degradation improves the protein available in the lower digestive tract.",
      },
      {
        question: "What is propylene glycol used for?",
        answer:
          "It is an energy-related nutritional ingredient used in dairy feeding programs to complement energy metabolism.",
      },
      {
        question: "What does biotin do?",
        answer:
          "Biotin participates in normal metabolic processes and contributes to keratin formation and hoof tissue maintenance.",
      },
      {
        question: "Why is calcium important?",
        answer:
          "Calcium is involved in skeletal development, bone maintenance and normal muscular functions.",
      },
      {
        question: "Why is phosphorus important?",
        answer:
          "Phosphorus is an essential mineral involved in skeletal development, energy-related processes and normal physiological functions.",
      },
      {
        question: "Can NUTRI PRO ELITE increase milk production?",
        answer:
          "It supports the nutritional requirements of dairy animals, but milk production depends on complete nutrition, genetics, lactation stage, health and management. It is not a guarantee of a specific increase.",
      },
      {
        question: "Does NUTRI PRO ELITE support udder health?",
        answer:
          "Balanced nutrition contributes to normal tissue maintenance. It is not a treatment for udder infections or mastitis.",
      },
      {
        question: "Does NUTRI PRO ELITE support hoof health?",
        answer:
          "Biotin contributes to keratin formation and hoof tissue maintenance as part of balanced nutrition.",
      },
      {
        question: "Does NUTRI PRO ELITE support musculoskeletal health?",
        answer:
          "Calcium and phosphorus support skeletal and muscle functions. Existing weakness or disease requires veterinary evaluation.",
      },
      {
        question: "Does NUTRI PRO ELITE support energy balance?",
        answer:
          "Propylene glycol is an energy-related ingredient used in dairy feeding programs to complement energy metabolism and ketosis risk management.",
      },
      {
        question: "What is the dosage for cattle and buffaloes?",
        answer: "100 mL twice daily (BID), administered orally.",
      },
      {
        question: "What is the dosage for horses?",
        answer: "100 mL twice daily (BID), administered orally.",
      },
      {
        question: "What is the dosage for calves and heifers?",
        answer: "25-30 mL twice daily (BID), administered orally.",
      },
      {
        question: "What is the dosage for goats and sheep?",
        answer: "10-20 mL twice daily (BID), administered orally.",
      },
      {
        question: "How is NUTRI PRO ELITE administered?",
        answer: "Orally, using the animal-wise dosage declared on the label.",
      },
      {
        question: "What pack sizes are available?",
        answer: "250 mL, 1 L, 2 L, 2.5 L, 5 L and 20 L.",
      },
      {
        question: "How should NUTRI PRO ELITE be stored?",
        answer: "Store in a cool, dry place, away from direct sunlight.",
      },
      {
        question: "Is NUTRI PRO ELITE a veterinary medicine?",
        answer:
          "The packaging describes it as an animal healthcare product and a unique protein supplement. It is not a substitute for veterinary diagnosis or treatment.",
      },
    ],
  },
  {
    id: "p21",
    slug: "liv-tox-nil",
    name: "LIV TOX NIL",
    index: "21",
    category: "Animal Healthcare Supplement",
    focusArea: "Complete Liver Tonic for Poultry & Livestock",
    form: "Liquid oral tonic",
    shortDescription:
      "A complete liver tonic with choline chloride, chelated minerals, essential vitamins, DL-methionine, liver extracts, yeast extracts and malt extract for cattle, calves, broilers, growers and layers.",
    detailedDescription:
      "LIV TOX NIL by Sarvadhenu is a specialized liver tonic formulated with choline chloride, chelated ferrous glycinate, chelated cobalt glycinate, essential vitamins, DL-methionine, liver extracts, yeast extracts and malt extract. It is designed to support liver health and nutritional performance, and is formulated to help protect the liver from feed- and water-related toxins and contaminants while supporting the utilization of feed ingredients.",
    image: livToxNilImg,
    imageAlt:
      "Sarvadhenu LIV TOX NIL complete liver tonic containing choline chloride, chelated ferrous glycinate, chelated cobalt glycinate, vitamins, methionine, liver extracts, and yeast extracts for poultry and livestock.",
    applications: [
      "Liver health and nutritional support in cattle, calves, broilers, growers and layers",
      "Supports feed utilization within a balanced feeding program",
      "Use according to the label-declared dosage or as directed by the veterinarian",
    ],
    composition:
      "Each 10 mL provides approximately: choline chloride 1000 mg, chelated ferrous glycinate 2250 mg, chelated cobalt glycinate 30 mg, folic acid 8.7 mg, vitamin E 10 IU, DL-methionine 40 mg, calcium lactate 400 mg, malt extract 1 g, biotin 60 mcg, liver extracts 500 mg, yeast extracts 250 mg, vitamin B1 5 mg, vitamin B12 7.5 mcg and niacinamide 55 mg (approximate overages are added)",
    packSizes: null,
    dosage:
      "Cattle: 50 mL twice daily; calves: 5-10 mL daily; broilers: 5-10 mL per 100 birds daily (2nd to 6th week); growers/layers: 20 mL daily for 10 days; or as directed by the veterinarian",
    storage: null,
    disclaimer: LIVESTOCK_DISCLAIMER,
    seoTitle: "LIV TOX NIL | Complete Liver Tonic for Poultry & Livestock | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu LIV TOX NIL, a complete liver tonic formulated with choline chloride, chelated minerals, vitamins, methionine, liver extracts, and yeast extracts for poultry and livestock nutrition, feed utilization, growth, and production support.",
    keywords: [
      "Liver Tonic for Poultry & Livestock",
      "LIV TOX NIL",
      "Sarvadhenu LIV TOX NIL",
      "complete liver tonic for animals",
      "liver tonic for cattle",
      "liver tonic for poultry",
      "poultry liver tonic",
      "cattle liver supplement",
      "calf liver tonic",
      "broiler liver tonic",
      "layer liver tonic",
      "choline chloride animal supplement",
      "chelated iron supplement for cattle",
      "chelated cobalt glycinate",
      "livestock liver health supplement",
      "poultry feed utilization supplement",
      "poultry FCR improvement supplement",
      "egg production nutritional supplement",
      "milk production supplement for cattle",
      "milk fat percentage support",
      "animal liver tonic",
      "poultry nutritional supplement",
      "livestock feed supplement",
    ],
    tagline: "Protect Liver Health. Improve Feed Utilization. Enhance Animal Performance.",
    heroHeading: "Complete Liver Tonic for Poultry, Cattle & Other Livestock",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL NUTRITION",
      "LIV TOX NIL is a specialized liver tonic formulated with choline chloride, chelated minerals, essential vitamins, amino acids, liver extracts, yeast extracts and malt extract. It is designed to support liver health and nutritional performance.",
      "It is formulated to help protect the liver from feed- and water-related toxins and contaminants while supporting the utilization of feed ingredients. It does not replace feed quality control, clean water, or veterinary care.",
      "Healthy Liver. Better Nutrition. Improved Farm Performance.",
    ],
    highlights: [
      "Complete Liver Tonic",
      "Supports Liver Health",
      "Helps Protect Against Feed & Water-Related Toxins",
      "Supports Feed Ingredient Utilization",
      "Supports Growth",
      "Supports FCR",
      "Supports Egg Production",
      "Supports Livability",
      "Supports Milk Production",
      "Supports Milk Fat Percentage",
      "Choline Chloride",
      "Chelated Minerals",
      "Essential Vitamins & Amino Acids",
      "Liver & Yeast Extracts",
    ],
    overviewLabel: "About LIV TOX NIL",
    overviewHeading: "A Complete Liver Tonic for Poultry & Livestock Nutrition",
    overviewParagraphs: [
      "The liver is central to metabolism: it takes part in nutrient, fat and protein metabolism, energy regulation and the handling of substances arriving through feed and water. Sound liver function is an important part of animal nutrition and productivity.",
      "LIV TOX NIL by Sarvadhenu combines choline chloride, chelated ferrous glycinate, chelated cobalt glycinate, folic acid, vitamin E, DL-methionine, calcium lactate, malt extract, biotin, liver extracts, yeast extracts, vitamin B1, vitamin B12 and niacinamide.",
      "The label lists feed conversion ratio (FCR), growth, egg production, livability, milk production and milk fat percentage as intended benefits. LIV TOX NIL is formulated to complement balanced feeding and supports these areas; it does not guarantee them. Specific improvements in growth, FCR, egg production, livability, milk yield or milk fat percentage have not been established without product-specific trials.",
      "LIV TOX NIL is formulated to help protect the liver from feed- and water-related toxins and contaminants. It does not replace feed quality control, clean water, or veterinary care.",
      "LIV TOX NIL should complement a complete animal nutrition and farm management program rather than replace feed quality control or veterinary treatment.",
      "Why liver health matters: the liver is involved in nutrient, fat and protein metabolism and energy regulation, and it is exposed to what is in feed and water. Liver condition is linked to growth and productivity, and targeted nutritional supplementation can support it. Effective liver health management also requires good-quality feed, clean drinking water, proper storage, and appropriate veterinary guidance.",
      "About Sarvadhenu: science-informed nutrition, specialized formulations, multi-species solutions, balanced support, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "LIV TOX NIL"],
      ["Brand", "Sarvadhenu"],
      ["Category", "Animal Healthcare Supplement"],
      ["Type", "Complete Liver Tonic"],
      ["Primary Application", "Liver Health Support"],
      ["Main Component", "Choline Chloride"],
      ["Minerals", "Chelated Ferrous Glycinate & Chelated Cobalt Glycinate"],
      ["Vitamins", "E, B1, B12, Folic Acid, Biotin & Niacinamide"],
      ["Amino Acid", "DL-Methionine"],
      ["Additional", "Calcium Lactate, Malt Extract, Liver Extracts & Yeast Extracts"],
      ["Suitable For", "Cattle, Calves, Broilers, Growers & Layers"],
      ["Administration", "Oral"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Comprehensive Liver & Nutritional Support Across Poultry and Livestock",
    applicationsEyebrow: "Livestock nutrition applications",
    applicationsHeading: "Liver and Nutritional Support Across Different Animal Categories",
    advantageEyebrow: "The LIV TOX NIL advantage",
    advantageHeading: "Liver Nutrition, Minerals, Vitamins and Extracts in One Tonic",
    compositionHeading: "Declared Composition & Specifications",
    dosageLabel: "Dosage",
    finalCtaCopy: "Healthy Liver. Better Feed Utilization. Improved Farm Performance.",
    benefits: [
      {
        index: "01",
        title: "Liver Protection",
        heading: "Supporting Liver Health",
        description:
          "Formulated to help protect the liver from feed- and water-related toxins and contaminants. It does not replace feed quality control, clean water, or veterinary care.",
      },
      {
        index: "02",
        title: "Better Feed Utilization",
        heading: "Supporting Nutrient Use",
        description:
          "A healthy liver is central to metabolism. LIV TOX NIL supports the utilization of feed ingredients as part of a balanced feeding program.",
      },
      {
        index: "03",
        title: "Promotes Growth",
        heading: "Supporting Growth-Stage Nutrition",
        description:
          "Supports growth by supplying liver-related and metabolic nutrients. A specific improvement in growth has not been established without product-specific trials.",
      },
      {
        index: "04",
        title: "Improved FCR Support",
        heading: "Supporting Feed Conversion",
        description:
          "FCR is a label-identified intended benefit. LIV TOX NIL is formulated to complement balanced feeding and does not guarantee an improvement in FCR.",
      },
      {
        index: "05",
        title: "Egg Production Support",
        heading: "Supporting Layer Nutrition",
        description:
          "Supports nutritional needs of layers. A specific improvement in egg production has not been established without product-specific trials.",
      },
      {
        index: "06",
        title: "Livability Support",
        heading: "Supporting Flock Condition",
        description:
          "Supports overall nutritional condition as part of good management. A specific improvement in livability has not been established without product-specific trials.",
      },
      {
        index: "07",
        title: "Milk Production Support",
        heading: "Supporting Dairy Nutrition",
        description:
          "Supports the nutritional needs of dairy cattle. A specific improvement in milk yield has not been established without product-specific trials.",
      },
      {
        index: "08",
        title: "Milk Fat Percentage Support",
        heading: "Supporting Milk Composition Nutrition",
        description:
          "Supports nutritional balance in dairy animals. A specific improvement in milk fat percentage has not been established without product-specific trials.",
      },
    ],
    detailedApplications: [
      {
        title: "Dairy Cattle",
        heading: "Supporting Liver Health in Dairy Animals",
        description: "Dairy cattle depend on sound liver function for metabolism and productivity.",
        focus: [
          "Liver health support",
          "Feed utilization",
          "Milk production support",
          "Milk fat percentage support",
          "Vitamin and mineral supplementation",
        ],
      },
      {
        title: "Calves",
        heading: "Supporting Growing Calves",
        description:
          "Growing calves benefit from balanced vitamins, minerals and metabolic nutrients.",
        focus: [
          "Liver health support",
          "Feed utilization",
          "Growth support",
          "Vitamin and mineral supplementation",
        ],
      },
      {
        title: "Broilers",
        heading: "Supporting Broiler Nutrition",
        description:
          "Broilers are managed for efficient feed use and growth, with the liver central to metabolism.",
        focus: [
          "Liver health support",
          "Feed utilization",
          "Growth support",
          "FCR support",
          "Vitamin and mineral supplementation",
        ],
      },
      {
        title: "Growers",
        heading: "Supporting Growing Birds",
        description:
          "Growing birds need balanced nutrition and healthy metabolism for development.",
        focus: [
          "Liver health support",
          "Feed utilization",
          "Growth support",
          "Vitamin and mineral supplementation",
        ],
      },
      {
        title: "Layers",
        heading: "Supporting Layer Nutrition",
        description:
          "Layers have high metabolic demands, and liver health is part of overall productive nutrition.",
        focus: [
          "Liver health support",
          "Feed utilization",
          "Egg production support",
          "Vitamin and mineral supplementation",
        ],
      },
    ],
    formula: [
      {
        title: "Choline Chloride",
        heading: "Lipid Metabolism & Cell Membranes",
        description:
          "Involved in phospholipid formation, cell membrane structure and lipid metabolism.",
      },
      {
        title: "Chelated Ferrous Glycinate",
        heading: "Iron for Haemoglobin & Oxygen Transport",
        description:
          "A chelated iron source involved in haemoglobin formation and oxygen transport.",
      },
      {
        title: "Chelated Cobalt Glycinate",
        heading: "Cobalt for Ruminant B12 Synthesis",
        description: "A chelated cobalt source that ruminants use for vitamin B12 synthesis.",
      },
      {
        title: "DL-Methionine",
        heading: "Protein Synthesis & Methylation",
        description: "An amino acid involved in protein synthesis and methylation reactions.",
      },
      {
        title: "Liver Extracts",
        heading: "Liver-Derived Nutritional Component",
        description:
          "The source, concentration and standardized profile of the liver extracts are not provided on the supplied label.",
      },
      {
        title: "Yeast Extracts",
        heading: "Yeast-Derived Nutritional Component",
        description:
          "A yeast-derived component included alongside malt extract in the formulation.",
      },
      {
        title: "Vitamins & Minerals",
        heading: "Supplementary Vitamin and Mineral Nutrition",
        description:
          "Vitamin E, folic acid, biotin, vitamin B1, vitamin B12, niacinamide, calcium lactate, chelated iron and chelated cobalt supplement the vitamin and mineral supply.",
      },
    ],
    compositionGroups: [
      {
        title: "Each 10 mL Provides Approximately",
        rows: [
          ["Choline Chloride", "1000 mg"],
          ["Chelated Ferrous Glycinate", "2250 mg"],
          ["Chelated Cobalt Glycinate", "30 mg"],
          ["Folic Acid", "8.7 mg"],
          ["Vitamin E", "10 IU"],
          ["DL-Methionine", "40 mg"],
          ["Calcium Lactate", "400 mg"],
          ["Malt Extract", "1 g"],
          ["Biotin", "60 mcg"],
          ["Liver Extracts", "500 mg"],
          ["Yeast Extracts", "250 mg"],
          ["Vitamin B1", "5 mg"],
          ["Vitamin B12", "7.5 mcg"],
          ["Niacinamide", "55 mg"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Physical Form", "Liquid"],
          ["Administration", "Oral"],
          ["Dosage Frequency", "Depends on animal category"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Storage", "To be confirmed from manufacturer"],
        ],
      },
    ],
    compositionNote:
      "The label states that approximate overages are added. Please confirm elemental iron and cobalt concentrations, chelate specifications and extract sources through the manufacturer-approved specification sheet and certificate of analysis (CoA).",
    dosageTable: [
      { category: "Cattle", quantity: "50 mL twice daily" },
      { category: "Calves", quantity: "5-10 mL daily" },
      { category: "Broilers", quantity: "5-10 mL per 100 birds daily, from 2nd to 6th week" },
      { category: "Growers / Layers", quantity: "20 mL daily for 10 days" },
      { category: "Route", quantity: "Oral" },
    ],
    dosageGuidance: [
      "Label-declared dosage: cattle 50 mL twice daily; calves 5-10 mL daily; broilers 5-10 mL per 100 birds daily (2nd to 6th week); growers/layers 20 mL daily for 10 days; or as directed by the veterinarian.",
      "Step 01 - Identify the animal category.",
      "Step 02 - Measure the recommended quantity.",
      "Step 03 - Follow the schedule declared for that category.",
      "Step 04 - Administer according to the manufacturer's approved oral instructions.",
      "Step 05 - Monitor animal condition, feed intake and performance.",
      "Follow the animal-specific dosage and maintain the schedule.",
      "For poultry, confirm the distribution method and water or feed mixing with the manufacturer, as the label does not state it.",
      "Do not exceed the recommended dosage.",
      "Consult a veterinarian for specific animal conditions.",
      "LIV TOX NIL should complement a complete animal nutrition and farm management program rather than replace feed quality control or veterinary treatment.",
    ],
    advantages: [
      {
        title: "Complete Liver Tonic Formulation",
        description: "Combines choline, minerals, vitamins, amino acid and extracts in one tonic.",
      },
      {
        title: "Chelated Mineral Enrichment",
        description: "Includes chelated ferrous glycinate and chelated cobalt glycinate.",
      },
      {
        title: "Essential Vitamin Combination",
        description: "Vitamin E, B1, B12, folic acid, biotin and niacinamide.",
      },
      {
        title: "Amino Acid Nutrition",
        description: "Provides DL-methionine, involved in protein synthesis and methylation.",
      },
      {
        title: "Liver & Yeast Extracts",
        description: "Includes liver extracts and yeast extracts alongside malt extract.",
      },
      {
        title: "Feed Utilization Support",
        description: "Supports the utilization of feed ingredients within a balanced ration.",
      },
      {
        title: "Growth & FCR Support",
        description: "Intended to support growth and FCR; improvements are not guaranteed.",
      },
      {
        title: "Poultry Production Support",
        description: "Intended to support egg production and livability in poultry.",
      },
      {
        title: "Dairy Production Support",
        description: "Intended to support milk production and milk fat percentage in dairy cattle.",
      },
      {
        title: "Multi-Species Applications",
        description: "Declared for cattle, calves, broilers, growers and layers.",
      },
    ],
    handling: [
      "Best practices: provide good-quality feed and clean water, keep nutrition balanced, store feed properly, and monitor performance and FCR.",
      "Follow the declared dosage and maintain poultry and dairy hygiene.",
      "Seek veterinary guidance in case of illness, reduced production, abnormal appetite or suspected toxin exposure.",
      "Keep the product in its original packaging, store as per manufacturer instructions, and keep the container closed after use.",
      "Check manufacturing and expiry information, use clean measuring equipment and avoid contamination.",
      "Storage conditions are not clearly specified on the packaging; confirm with the manufacturer.",
      "Keep out of reach of children.",
      "Not for Human Use. Not a Substitute for Veterinary Treatment.",
    ],
    faqs: [
      {
        question: "What is LIV TOX NIL?",
        answer:
          "LIV TOX NIL is a Sarvadhenu complete liver tonic for poultry and livestock, containing choline chloride, chelated minerals, vitamins, DL-methionine, liver extracts, yeast extracts and malt extract.",
      },
      {
        question: "What are the benefits of LIV TOX NIL?",
        answer:
          "The label identifies liver health support, feed utilization, growth, FCR, egg production, livability, milk production and milk fat percentage as intended benefits. These are supported, not guaranteed.",
      },
      {
        question: "What ingredients does LIV TOX NIL contain?",
        answer:
          "Choline chloride, chelated ferrous glycinate, chelated cobalt glycinate, folic acid, vitamin E, DL-methionine, calcium lactate, malt extract, biotin, liver extracts, yeast extracts, vitamin B1, vitamin B12 and niacinamide.",
      },
      {
        question: "What does choline chloride do?",
        answer: "It is involved in phospholipid formation, cell membranes and lipid metabolism.",
      },
      {
        question: "What is chelated ferrous glycinate?",
        answer:
          "A chelated iron source involved in iron nutrition, haemoglobin formation and oxygen transport.",
      },
      {
        question: "What is chelated cobalt glycinate?",
        answer: "A chelated cobalt source that ruminants use for vitamin B12 synthesis.",
      },
      {
        question: "Why is methionine included?",
        answer:
          "DL-Methionine (40 mg per 10 mL) is an amino acid involved in protein synthesis and methylation.",
      },
      {
        question: "Which vitamins does LIV TOX NIL contain?",
        answer: "Vitamin E, folic acid, biotin, vitamin B1, vitamin B12 and niacinamide.",
      },
      {
        question: "Does LIV TOX NIL support feed utilization?",
        answer:
          "It is formulated to support the utilization of feed ingredients as part of a balanced feeding program.",
      },
      {
        question: "Does LIV TOX NIL improve FCR?",
        answer:
          "FCR is a label-identified intended benefit, but an improvement is not guaranteed. A specific FCR improvement has not been established without product-specific trials.",
      },
      {
        question: "Does LIV TOX NIL support poultry growth?",
        answer:
          "It supports growth-related nutrition, but a specific improvement in growth has not been established without product-specific trials.",
      },
      {
        question: "Does LIV TOX NIL support egg production?",
        answer:
          "Egg production is a label-identified intended benefit; an improvement is not guaranteed and has not been established without product-specific trials.",
      },
      {
        question: "What is the dosage for broilers?",
        answer:
          "5-10 mL per 100 birds daily, from the 2nd to the 6th week, or as directed by the veterinarian.",
      },
      {
        question: "What is the dosage for growers and layers?",
        answer: "20 mL daily for 10 days, or as directed by the veterinarian.",
      },
      {
        question: "What is the dosage for cattle?",
        answer: "50 mL twice daily, or as directed by the veterinarian.",
      },
      {
        question: "What is the dosage for calves?",
        answer: "5-10 mL daily, or as directed by the veterinarian.",
      },
      {
        question: "Does LIV TOX NIL support milk production?",
        answer:
          "It supports the nutritional needs of dairy cattle, but a specific improvement in milk yield has not been established without product-specific trials.",
      },
      {
        question: "Does LIV TOX NIL support milk fat percentage?",
        answer:
          "Milk fat percentage is a label-identified intended benefit. A specific improvement has not been established without product-specific trials.",
      },
      {
        question: "What is the composition of LIV TOX NIL?",
        answer:
          "Each 10 mL provides approximately: choline chloride 1000 mg, chelated ferrous glycinate 2250 mg, chelated cobalt glycinate 30 mg, folic acid 8.7 mg, vitamin E 10 IU, DL-methionine 40 mg, calcium lactate 400 mg, malt extract 1 g, biotin 60 mcg, liver extracts 500 mg, yeast extracts 250 mg, vitamin B1 5 mg, vitamin B12 7.5 mcg and niacinamide 55 mg. Approximate overages are added.",
      },
      {
        question: "How is LIV TOX NIL administered?",
        answer:
          "Orally, according to the manufacturer's approved instructions and the dosage for the animal category.",
      },
      {
        question: "Is LIV TOX NIL a veterinary medicine?",
        answer:
          "The packaging identifies it as a complete liver tonic. Its regulatory classification should be confirmed with the manufacturer. It is not a replacement for veterinary treatment.",
      },
      {
        question: "What is the shelf life of LIV TOX NIL?",
        answer:
          "The shelf life is not specified on the supplied label. Please confirm it with the manufacturer.",
      },
    ],
  },
  {
    id: "p22",
    slug: "teet-grow",
    name: "TEET GROW",
    index: "22",
    category: "Animal Feed Supplement",
    focusArea: "Udder Health & Milk Production Support",
    form: "Oral powder",
    shortDescription:
      "A proteolytic enzyme-based animal feed supplement with serratiopeptidase, essential vitamins, minerals, methionine and live yeast, designed to support udder health and milk production in dairy cattle and buffaloes.",
    detailedDescription:
      "TEET GROW by Sarvadhenu is an animal feed supplement formulated with proteolytic enzymes (serratiopeptidase and trisodium citrate), vitamins A, D3, E, K3, biotin, niacin, methionine, pantothenic acid, essential minerals and live yeast. It is designed to support udder health and better milk production in dairy cattle and buffaloes. It is labelled as an animal feed supplement, not for medicinal use.",
    image: teetGrowImg,
    imageAlt:
      "Sarvadhenu TEET GROW proteolytic enzyme-based animal feed supplement containing serratiopeptidase, essential vitamins, minerals, methionine, and live yeast for dairy udder health and milk production support.",
    applications: [
      "Udder health and milk production nutritional support in dairy cattle and buffaloes",
      "Recommended on the packaging for sub-clinical mastitis and as an adjunct to antibiotic therapy in clinical mastitis; it is an animal feed supplement, not a medicinal product",
      "50 g once daily for 3 consecutive days, oral, as per the label",
    ],
    composition:
      "Each approximately 50 g contains: trisodium citrate 25 g, vitamin A 70,000 I.U., vitamin D3 20,000 I.U., vitamin E 1,000 I.U., vitamin K3 10 mg, potassium iodide 1,000 mg, serratiopeptidase 100 mg, niacin 2,000 mg, thiamine hydrochloride 200 mg, riboflavin 200 mg, pantothenic acid 50 mg, biotin 20 mg, methionine 10 mg, manganese sulphate 4,000 mg, copper sulphate 1,200 mg, zinc sulphate 500 mg, cobalt sulphate 50 mg, selenium 4 mg and live yeast 50,000 million CFU",
    packSizes: null,
    dosage: "50 g once daily for 3 consecutive days, mixed with jaggery or as an electuary (oral)",
    storage: null,
    disclaimer: CATTLE_DISCLAIMER,
    seoTitle: "TEET GROW | Proteolytic Enzyme & Udder Health Supplement | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu TEET GROW, a proteolytic enzyme-based animal feed supplement containing serratiopeptidase, essential vitamins, minerals, methionine, and live yeast for udder health and milk production support.",
    keywords: [
      "Udder Health Supplement for Cattle",
      "TEET GROW",
      "Sarvadhenu TEET GROW",
      "proteolytic enzyme supplement for cattle",
      "serratiopeptidase animal supplement",
      "udder health supplement for cows",
      "dairy cattle udder health",
      "milk production supplement for cattle",
      "buffalo udder health supplement",
      "animal feed supplement for mastitis management",
      "sub-clinical mastitis nutritional support",
      "dairy enzyme supplement",
      "biotin supplement for cattle",
      "methionine supplement for dairy animals",
      "live yeast cattle supplement",
      "vitamin mineral supplement for cows",
      "dairy animal nutritional supplement",
      "proteolytic enzyme animal feed supplement",
    ],
    tagline: "Better Udder Health. Better Milk Production. Better Dairy Performance.",
    heroHeading:
      "Advanced Proteolytic Enzyme Formulation for Udder Health & Dairy Nutritional Support",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL NUTRITION",
      "TEET GROW is an animal feed supplement formulated with proteolytic enzymes (serratiopeptidase and trisodium citrate), vitamins A, D3, E, K3, biotin, niacin, methionine and pantothenic acid, essential minerals and live yeast. It is designed to support udder health and better milk production in dairy cattle and buffaloes.",
      "The packaging recommends TEET GROW for sub-clinical mastitis and as an adjunct to antibiotic therapy in clinical mastitis. TEET GROW is an animal feed supplement, not a medicinal product. It does not replace antibiotics, diagnosis or veterinary treatment; do not discontinue prescribed treatment, and follow veterinarian-prescribed milk withdrawal periods.",
      "Better Udder Health. Balanced Nutrition. Improved Dairy Performance.",
    ],
    highlights: [
      "Highly Effective Proteolytic Enzyme Formulation",
      "Serratiopeptidase-Enriched",
      "Supports Udder Health",
      "Supports Milk Production",
      "Essential Vitamins",
      "Biotin & Methionine",
      "Essential Minerals",
      "Live Yeast",
      "Label Recommendation: Sub-Clinical Mastitis",
      "Label Recommendation: Adjunct to Antibiotic Therapy in Clinical Mastitis (Not a Replacement)",
      "Convenient Powder Formulation",
      "Simple Three-Day Schedule",
    ],
    overviewLabel: "About TEET GROW",
    overviewHeading: "A Proteolytic Enzyme-Based Supplement for Dairy Udder Health Nutrition",
    overviewParagraphs: [
      "TEET GROW by Sarvadhenu is an animal feed supplement designed to support udder health and milk production in dairy cattle and buffaloes. It combines proteolytic enzymes with vitamins, minerals, amino acid and live yeast.",
      "Ingredients: serratiopeptidase, trisodium citrate, vitamins A, D3, E and K3, potassium iodide, niacin, thiamine HCl, riboflavin, pantothenic acid, biotin, methionine, manganese sulphate, copper sulphate, zinc sulphate, cobalt sulphate, selenium and live yeast.",
      "The packaging recommends TEET GROW for sub-clinical mastitis and as an adjunct to antibiotic therapy in clinical mastitis. TEET GROW is labelled as an animal feed supplement, not for medicinal use. It does not replace antibiotics, diagnosis or veterinary treatment. Do not discontinue prescribed treatment, and follow veterinarian-prescribed milk withdrawal periods.",
      "TEET GROW is a complementary feed supplement and should not be presented as a treatment for mastitis or as a guaranteed milk-yield enhancer.",
      "Product science - Serratiopeptidase: a proteolytic enzyme and the primary enzyme in the formulation. Trisodium citrate: a formulation ingredient. Methionine: an essential sulphur-containing amino acid. Biotin: a vitamin involved in normal metabolic processes. Live yeast: a live microbial ingredient, declared at 50,000 million CFU per approximately 50 g.",
      "Vitamins and minerals: vitamin A, D3, E, K3, niacin, thiamine HCl, riboflavin and pantothenic acid, with manganese sulphate, copper sulphate, zinc sulphate, cobalt sulphate and selenium, supplement the vitamin and mineral supply in dairy diets.",
      "Why udder health matters: udder health is closely linked to milk production and dairy performance. Sub-clinical mastitis shows no obvious signs, so regular milk testing matters. Clinical mastitis requires veterinary diagnosis and treatment. Milk production management, nutritional support, farm hygiene and targeted supplementation work together.",
      "Mastitis is a veterinary health condition. Nutritional supplementation must not replace appropriate diagnostic testing, antibiotic therapy when prescribed, or veterinary treatment.",
      "About Sarvadhenu: science-informed nutrition, specialized formulations, dairy-focused solutions, responsible supplementation, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "TEET GROW"],
      ["Brand", "Sarvadhenu"],
      ["Category", "Animal Feed Supplement"],
      ["Type", "Proteolytic Enzyme Supplement"],
      ["Primary Enzyme", "Serratiopeptidase"],
      ["Additional Ingredient", "Trisodium Citrate"],
      ["Vitamins", "A, D3, E, K3, B1, B2, B3, B5 & Biotin"],
      ["Amino Acid", "Methionine"],
      ["Minerals", "Potassium Iodide, Manganese, Copper, Zinc, Cobalt & Selenium"],
      ["Additional", "Live Yeast"],
      ["Primary Application", "Udder Health & Milk Production Support"],
      [
        "Label Recommendations",
        "Sub-Clinical Mastitis; Adjunct to Antibiotic Therapy in Clinical Mastitis",
      ],
      ["Administration", "Oral"],
      ["Recommended Duration", "3 Consecutive Days"],
      ["Quantity", "50 g Daily"],
      ["Suitable For", "Dairy Cattle & Buffaloes"],
      ["Physical Form", "Powder"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Comprehensive Nutritional Support for Udder Health & Milk Production",
    applicationsEyebrow: "Dairy nutrition applications",
    applicationsHeading: "Udder Health Nutritional Support for Dairy Cattle & Buffaloes",
    advantageEyebrow: "The TEET GROW advantage",
    advantageHeading: "Enzymes, Vitamins, Minerals and Live Yeast in One Supplement",
    compositionHeading: "Declared Composition & Specifications",
    dosageLabel: "Dosage",
    finalCtaCopy: "Better Udder Health. Better Milk Production. Better Dairy Performance.",
    benefits: [
      {
        index: "01",
        title: "Proteolytic Enzyme Support",
        heading: "Serratiopeptidase-Enriched Formulation",
        description:
          "Serratiopeptidase is the primary proteolytic enzyme in the formulation, supported by trisodium citrate. Confirm enzyme activity units with the manufacturer's specification.",
      },
      {
        index: "02",
        title: "Udder Health Support",
        heading: "Nutritional Support for the Udder",
        description:
          "Designed to support udder health as part of a complete udder health management program. The packaging recommends it for sub-clinical mastitis and as an adjunct to antibiotic therapy in clinical mastitis. It is an animal feed supplement, not a medicinal product, and does not replace antibiotics, diagnosis or veterinary treatment.",
      },
      {
        index: "03",
        title: "Better Milk Production Support",
        heading: "Supporting Dairy Nutrition",
        description:
          "Supports the nutritional needs of dairy animals as part of balanced feeding and management. Milk production depends on complete nutrition, genetics, lactation stage, health and management; a specific increase is not guaranteed.",
      },
      {
        index: "04",
        title: "Essential Vitamin Nutrition",
        heading: "Vitamins A, D3, E, K3, B-Complex & Biotin",
        description:
          "Provides vitamins A, D3, E and K3 with niacin, thiamine HCl, riboflavin, pantothenic acid and biotin to supplement the vitamin supply in dairy diets.",
      },
      {
        index: "05",
        title: "Mineral & Amino Acid Support",
        heading: "Minerals and Methionine",
        description:
          "Includes potassium iodide, manganese, copper, zinc and cobalt sulphates and selenium, together with the amino acid methionine.",
      },
      {
        index: "06",
        title: "Live Yeast Enrichment",
        heading: "50,000 Million CFU per Approx. 50 g",
        description:
          "Contains live yeast, declared at 50,000 million CFU per approximately 50 g, as a live microbial nutritional ingredient.",
      },
    ],
    detailedApplications: [
      {
        title: "Dairy Cattle",
        heading: "Supporting Udder Health Nutrition in Dairy Cattle",
        description:
          "Dairy cattle benefit from balanced nutrition and good hygiene as part of udder health management.",
        focus: [
          "Udder health nutritional support",
          "Proteolytic enzyme supplementation",
          "Milk production support",
          "Vitamin, mineral and amino acid nutrition",
          "Nutritional support during mastitis management",
        ],
      },
      {
        title: "Dairy Buffaloes",
        heading: "Supporting Udder Health Nutrition in Buffaloes",
        description:
          "Dairy buffaloes need balanced nutrition and sound management to support udder health and milk production.",
        focus: [
          "Udder health nutritional support",
          "Proteolytic enzyme supplementation",
          "Milk production support",
          "Vitamin, mineral and amino acid nutrition",
          "Nutritional support during mastitis management",
        ],
      },
      {
        title: "Sub-Clinical Mastitis",
        heading: "Label Recommendation",
        description:
          "The label recommends TEET GROW for sub-clinical mastitis. Sub-clinical mastitis shows no obvious signs, so regular milk testing matters. TEET GROW is an animal feed supplement, not a medicinal product, and mastitis diagnosis requires veterinary supervision.",
        focus: [
          "Recommended on the packaging",
          "Regular milk testing",
          "Veterinary diagnosis and supervision",
        ],
      },
      {
        title: "Clinical Mastitis Management",
        heading: "Label Recommendation as an Adjunct",
        description:
          "The label recommends TEET GROW as an adjunct to antibiotic therapy in clinical mastitis. It does not replace antibiotics or veterinary treatment. Do not discontinue prescribed treatment, and follow veterinarian-prescribed milk withdrawal periods.",
        focus: [
          "Adjunct only; not a replacement for antibiotics",
          "Veterinary diagnosis and treatment required",
          "Continue prescribed therapy",
          "Follow milk withdrawal periods",
        ],
      },
      {
        title: "Milk Production Support",
        heading: "Nutritional Support for Dairy Performance",
        description:
          "TEET GROW supports the nutritional needs of dairy animals as part of balanced feeding. TEET GROW is an animal feed supplement, not a medicinal product; mastitis diagnosis and treatment require veterinary supervision.",
        focus: [
          "Complete udder health management program",
          "Balanced nutrition",
          "Farm and milking hygiene",
          "Targeted supplementation",
        ],
      },
    ],
    formula: [
      {
        title: "Serratiopeptidase",
        heading: "Proteolytic Enzyme",
        description:
          "The primary enzyme in the formulation, declared at 100 mg per approximately 50 g. Enzyme activity units are not specified on the supplied label.",
      },
      {
        title: "Trisodium Citrate",
        heading: "Formulation Ingredient",
        description: "Included at 25 g per approximately 50 g as a formulation ingredient.",
      },
      {
        title: "Methionine",
        heading: "Essential Amino Acid",
        description: "A sulphur-containing amino acid involved in protein synthesis.",
      },
      {
        title: "Biotin",
        heading: "Metabolic Vitamin",
        description: "A vitamin that participates in normal metabolic processes.",
      },
      {
        title: "Live Yeast",
        heading: "Live Microbial Ingredient",
        description: "Declared at 50,000 million CFU per approximately 50 g.",
      },
      {
        title: "Vitamins",
        heading: "Vitamin A, D3, E, K3, Niacin, Thiamine HCl, Riboflavin & Pantothenic Acid",
        description:
          "A combination of fat-soluble and B-group vitamins that supplements the vitamin supply in dairy diets.",
      },
      {
        title: "Minerals",
        heading: "Manganese, Copper, Zinc, Cobalt Sulphates & Selenium",
        description:
          "Mineral ingredients that supplement the mineral supply. Mineral sources and analytical composition should be confirmed with the manufacturer.",
      },
    ],
    compositionGroups: [
      {
        title: "Each Approximately 50 g Contains",
        rows: [
          ["Trisodium Citrate", "25 g"],
          ["Vitamin A", "70,000 I.U."],
          ["Vitamin D3", "20,000 I.U."],
          ["Vitamin E", "1,000 I.U."],
          ["Vitamin K3", "10 mg"],
          ["Potassium Iodide", "1,000 mg"],
          ["Serratiopeptidase", "100 mg"],
          ["Niacin", "2,000 mg"],
          ["Thiamine Hydrochloride", "200 mg"],
          ["Riboflavin", "200 mg"],
          ["Pantothenic Acid", "50 mg"],
          ["Biotin", "20 mg"],
          ["Methionine", "10 mg"],
          ["Manganese Sulphate", "4,000 mg"],
          ["Copper Sulphate", "1,200 mg"],
          ["Zinc Sulphate", "500 mg"],
          ["Cobalt Sulphate", "50 mg"],
          ["Selenium", "4 mg"],
          ["Live Yeast", "50,000 Million CFU"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Physical Form", "Powder"],
          ["Quantity", "50 g daily"],
          ["Frequency", "Once daily"],
          ["Duration", "3 consecutive days"],
          ["Administration", "Oral"],
          ["Mixing Method", "With jaggery or as an electuary"],
          ["Shelf Life", "Not specified on supplied label"],
          ["Storage", "To be confirmed from manufacturer"],
        ],
      },
    ],
    compositionNote:
      "Please confirm enzyme activity units, mineral sources and analytical composition through the manufacturer-approved specification sheet and certificate of analysis (CoA).",
    dosageTable: [
      { category: "Dairy Cattle & Buffaloes", quantity: "50 g once daily for 3 consecutive days" },
      { category: "Method", quantity: "Mixed with jaggery or as an electuary" },
      { category: "Route", quantity: "Oral" },
    ],
    dosageGuidance: [
      "Label-declared dosage: 50 g once daily for 3 consecutive days, mixed with jaggery or as an electuary (oral).",
      "Step 01 - Measure 50 g of TEET GROW.",
      "Step 02 - Prepare with jaggery or as an electuary.",
      "Step 03 - Administer orally according to the manufacturer's instructions.",
      "Step 04 - Follow the three-day schedule.",
      "Step 05 - Monitor udder condition, milk appearance, appetite and overall health.",
      "Follow 50 g daily for three consecutive days and do not exceed this without professional advice.",
      "Follow veterinary recommendations for mastitis management.",
      "Do not discontinue prescribed antibiotic therapy or other treatment.",
      "Follow veterinarian-prescribed milk withdrawal periods.",
      "Label: Animal Feed Supplement, Not for Medicinal Use.",
      "TEET GROW is explicitly labelled as an animal feed supplement, not a medicinal product. It does not replace antibiotics or veterinary treatment.",
      "TEET GROW should complement a complete udder health management program and must not replace appropriate mastitis treatment.",
    ],
    advantages: [
      {
        title: "Proteolytic Enzyme Formulation",
        description: "Built around serratiopeptidase with trisodium citrate.",
      },
      {
        title: "Comprehensive Vitamin Combination",
        description:
          "Vitamins A, D3, E, K3, niacin, thiamine, riboflavin, pantothenic acid and biotin.",
      },
      {
        title: "Essential Mineral Nutrition",
        description: "Potassium iodide, manganese, copper, zinc, cobalt and selenium.",
      },
      {
        title: "Methionine Enrichment",
        description: "Includes the amino acid methionine.",
      },
      {
        title: "Live Yeast Inclusion",
        description: "Declared at 50,000 million CFU per approximately 50 g.",
      },
      {
        title: "Udder Health Support",
        description: "Designed to support udder health within a complete management program.",
      },
      {
        title: "Milk Production Support",
        description: "Supports the nutritional needs of dairy animals; yield is not guaranteed.",
      },
      {
        title: "Defined Administration Schedule",
        description: "50 g daily for 3 consecutive days.",
      },
      {
        title: "Convenient Powder Formulation",
        description: "Powder given orally with jaggery or as an electuary.",
      },
    ],
    handling: [
      "Best practices: maintain milking hygiene, monitor udder condition and milk quality, keep housing clean, and provide balanced nutrition.",
      "Look after hoof and overall health, follow prescribed treatment, use supplements responsibly, and comply with milk withdrawal periods.",
      "Keep the product in its original packaging and store as per manufacturer instructions; protect it from moisture and keep the packaging closed.",
      "Check manufacturing and expiry information, use proper weighing equipment, follow the declared dosage and avoid contamination.",
      "Classification: Animal Feed Supplement, Not for Medicinal Use.",
      "Storage conditions are not specified on the packaging; confirm with the manufacturer.",
      "Keep out of reach of children.",
      "Not for Human Use. Not a Substitute for Veterinary Treatment.",
    ],
    faqs: [
      {
        question: "What is TEET GROW?",
        answer:
          "TEET GROW is a Sarvadhenu proteolytic enzyme-based animal feed supplement with serratiopeptidase, vitamins, minerals, methionine and live yeast, designed to support udder health and milk production in dairy cattle and buffaloes.",
      },
      {
        question: "What is the primary enzyme in TEET GROW?",
        answer:
          "Serratiopeptidase, a proteolytic enzyme, declared at 100 mg per approximately 50 g.",
      },
      {
        question: "What are the main benefits of TEET GROW?",
        answer:
          "It is designed to support udder health and milk production through proteolytic enzyme, vitamin, mineral, amino acid and live yeast nutrition.",
      },
      {
        question: "What ingredients does TEET GROW contain?",
        answer:
          "Serratiopeptidase, trisodium citrate, vitamins A, D3, E and K3, potassium iodide, niacin, thiamine HCl, riboflavin, pantothenic acid, biotin, methionine, manganese sulphate, copper sulphate, zinc sulphate, cobalt sulphate, selenium and live yeast.",
      },
      {
        question: "What is serratiopeptidase?",
        answer: "A proteolytic enzyme, and the primary enzyme in the TEET GROW formulation.",
      },
      {
        question: "Does TEET GROW support udder health?",
        answer:
          "It is designed to support udder health as part of a complete management program including hygiene, milk testing and veterinary care.",
      },
      {
        question: "Does TEET GROW support milk production?",
        answer:
          "It supports the nutritional needs of dairy animals, but milk production depends on nutrition, genetics, lactation stage, health and management. A specific increase is not guaranteed.",
      },
      {
        question: "Is TEET GROW recommended for sub-clinical mastitis?",
        answer:
          "The packaging recommends it for sub-clinical mastitis. It is an animal feed supplement, not a medicinal product, and diagnosis requires veterinary supervision.",
      },
      {
        question: "Is TEET GROW recommended for clinical mastitis?",
        answer:
          "The label recommends it as an adjunct to antibiotic therapy in clinical mastitis. It must not replace prescribed antibiotics or veterinary treatment, and prescribed treatment should not be discontinued.",
      },
      {
        question: "Which vitamins does TEET GROW contain?",
        answer:
          "Vitamins A, D3, E and K3, niacin, thiamine hydrochloride, riboflavin, pantothenic acid and biotin.",
      },
      {
        question: "What does biotin do?",
        answer: "Biotin is a vitamin that participates in normal metabolic processes.",
      },
      {
        question: "Why is methionine included?",
        answer:
          "Methionine is an essential sulphur-containing amino acid involved in protein synthesis.",
      },
      {
        question: "Does TEET GROW contain live yeast?",
        answer: "Yes, 50,000 million CFU per approximately 50 g.",
      },
      {
        question: "What is the dosage of TEET GROW?",
        answer: "50 g daily for three consecutive days.",
      },
      {
        question: "How is TEET GROW administered?",
        answer: "Orally, mixed with jaggery or given as an electuary.",
      },
      {
        question: "How long should TEET GROW be given?",
        answer:
          "For three consecutive days, once daily, unless your veterinarian advises otherwise.",
      },
      {
        question: "Does TEET GROW replace antibiotics in mastitis?",
        answer:
          "No. It does not replace antibiotics, diagnosis or veterinary treatment. Do not discontinue prescribed treatment, and follow veterinarian-prescribed milk withdrawal periods.",
      },
      {
        question: "Is TEET GROW a veterinary medicine?",
        answer:
          "No. The packaging identifies it as an animal feed supplement, not for medicinal use.",
      },
      {
        question: "What is the composition of TEET GROW?",
        answer:
          "Each approximately 50 g contains trisodium citrate 25 g, vitamin A 70,000 I.U., vitamin D3 20,000 I.U., vitamin E 1,000 I.U., vitamin K3 10 mg, potassium iodide 1,000 mg, serratiopeptidase 100 mg, niacin 2,000 mg, thiamine hydrochloride 200 mg, riboflavin 200 mg, pantothenic acid 50 mg, biotin 20 mg, methionine 10 mg, manganese sulphate 4,000 mg, copper sulphate 1,200 mg, zinc sulphate 500 mg, cobalt sulphate 50 mg, selenium 4 mg and live yeast 50,000 million CFU.",
      },
      {
        question: "What is the shelf life of TEET GROW?",
        answer:
          "The shelf life is not specified on the supplied label. Please confirm it with the manufacturer.",
      },
    ],
  },
  {
    id: "p23",
    slug: "lactocal-gel",
    name: "LACTOCAL GEL",
    index: "23",
    category: "Animal Healthcare Supplement",
    focusArea: "Calcium & Phosphorus Support for Calving & Lactation",
    form: "Oral gel",
    shortDescription:
      "An advanced oral calcium and phosphorus gel enriched with Vitamin D3, Vitamin B12, Chandan Shoor and methylcobalamin, designed to support calcium balance around calving and lactation in dairy cattle and buffaloes.",
    detailedDescription:
      "LACTOCAL GEL by Sarvadhenu is a specialized oral calcium and phosphorus supplement enriched with Vitamin D3, Vitamin B12, Chandan Shoor and methylcobalamin for dairy cattle and buffaloes. The label recommends it as an aid in preventing milk fever and associated complications, and to support normal uterine contraction and timely expulsion of the placenta. Milk fever is a veterinary condition; LACTOCAL GEL is a supplement and does not replace veterinary evaluation or treatment.",
    image: lactocalGelImg,
    imageAlt:
      "Sarvadhenu LACTOCAL GEL oral calcium and phosphorus supplement with Vitamin D3, Vitamin B12, Chandan Shoor, and Methylcobalamin for dairy cattle and buffaloes.",
    applications: [
      "Calcium and phosphorus supplementation in dairy cattle and buffaloes around calving and during lactation",
      "Label-stated aid in preventing milk fever and associated complications; milk fever is a veterinary emergency and oral supplementation must not delay veterinary care",
      "Oral gel; use per the label and veterinarian recommendations",
    ],
    composition:
      "Each 100 g provides: calcium 8600 mg, phosphorus 3800 mg, vitamin D3 32000 I.U., vitamin B12 400 mcg, Chandan Shoor 200 mg and methylcobalamin 1500 mcg",
    packSizes: "300 g",
    dosage:
      "One bottle per animal per day for 5-10 days (higher milk yield); milk fever prevention: one bottle at first sign of calving and another 8-12 hours after calving, repeat every 12 hours as needed or as directed by the veterinarian",
    storage: "Cool & Dry Place; Protect from Light",
    disclaimer: CATTLE_DISCLAIMER,
    seoTitle: "LACTOCAL GEL | Oral Calcium & Phosphorus Supplement for Cattle | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu LACTOCAL GEL, an advanced oral calcium and phosphorus supplement enriched with Vitamin D3 and B12 for dairy cattle and buffaloes. Supports milk fever prevention, calving management, and lactation nutrition.",
    keywords: [
      "Calcium Supplement for Dairy Cattle",
      "LACTOCAL GEL",
      "Sarvadhenu LACTOCAL GEL",
      "oral calcium gel for cattle",
      "calcium phosphorus supplement for cows",
      "calcium gel for buffaloes",
      "milk fever prevention supplement",
      "calcium supplement after calving",
      "calcium gel for dairy animals",
      "phosphorus supplement for cattle",
      "Vitamin D3 cattle supplement",
      "Vitamin B12 dairy supplement",
      "methylcobalamin cattle supplement",
      "dairy animal calcium nutrition",
      "post-calving calcium supplement",
      "lactation support supplement",
      "milk production supplement for cattle",
      "milk fat nutrition supplement",
      "calcium gel for milk fever prevention",
      "cattle calving nutritional supplement",
    ],
    tagline: "Stronger Bones. Better Lactation. Healthier Calving.",
    heroHeading:
      "Advanced Oral Calcium & Phosphorus Supplement for Milk Fever Prevention Support, Calving Management & Lactation",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL NUTRITION",
      "LACTOCAL GEL is a specialized oral calcium and phosphorus supplement enriched with Vitamin D3, Vitamin B12, Chandan Shoor and methylcobalamin. It provides essential minerals and vitamins associated with calcium and phosphorus metabolism, skeletal health and lactation.",
      "The label states that it aids in preventing milk fever and associated complications, supports normal uterine contraction and promotes timely expulsion of the placenta. It is particularly useful during calving and post-calving, when calcium and mineral requirements rise.",
      "Milk fever is a veterinary condition. Animals showing signs of milk fever need immediate veterinary evaluation and treatment, and oral supplementation must not delay emergency care. LACTOCAL GEL is not a standalone treatment for retained placenta, difficult calving or milk fever.",
      "Specific improvements in milk yield or milk fat percentage have not been established without product-specific trials and are not guaranteed.",
      "Balanced Calcium. Stronger Dairy Animals. Better Lactation.",
    ],
    highlights: [
      "Advanced Oral Calcium & Phosphorus Supplement",
      "Enriched with Vitamin D3",
      "Fortified with Vitamin B12",
      "Contains Methylcobalamin",
      "Milk Fever Prevention Support",
      "Calcium & Phosphorus Balance",
      "Uterine Contraction Support",
      "Timely Placental Expulsion Support",
      "Supports Recovery from Milk Fever (Label-Stated; Not a Replacement for Veterinary Treatment)",
      "Supports Milk Yield",
      "Supports Milk Fat Percentage",
      "Supports Lactation",
      "Bone & Muscle Strength",
      "Convenient Oral Gel",
      "300 g Packaging",
    ],
    overviewLabel: "About LACTOCAL GEL",
    overviewHeading: "Advanced Calcium & Phosphorus Nutrition for Dairy Animals",
    overviewParagraphs: [
      "LACTOCAL GEL by Sarvadhenu is a specialized oral mineral supplement formulated with calcium, phosphorus, Vitamin D3, Vitamin B12, Chandan Shoor and methylcobalamin.",
      "Calcium and phosphorus are essential minerals involved in skeletal structure, muscle function and several physiological processes. Vitamin D3 plays a role in calcium and phosphorus absorption and utilization, while Vitamin B12 and methylcobalamin contribute to metabolic functions.",
      "The formulation is designed for critical periods around calving and early lactation, when adequate calcium availability matters. It is recommended as an aid in preventing milk fever and associated complications, and to support normal uterine contraction, normal calving and timely expulsion of the placenta.",
      "Milk fever is a veterinary condition. Animals showing signs of milk fever require immediate veterinary evaluation and treatment, and oral supplementation must not delay emergency care. LACTOCAL GEL is not a standalone treatment for retained placenta, difficult calving or milk fever.",
      "Product science - Calcium: an essential mineral for skeletal structure, muscle function and milk production. Phosphorus: works with calcium in skeletal and energy metabolism. Vitamin D3: supports calcium and phosphorus absorption and utilization. Vitamin B12 and methylcobalamin: contribute to metabolic functions. Chandan Shoor: a declared component; its source, chemical composition and mechanism are not detailed on the label.",
      "Why calcium balance matters: lactation draws heavily on calcium, so requirements rise sharply at the start of milk production. Milk fever is associated with low blood calcium (hypocalcemia) around calving and early lactation. Calcium is also needed for normal muscle function, and phosphorus balance matters alongside it. Vitamin D3 supports absorption. Targeted post-calving supplementation can complement a complete transition-period feeding program.",
      "Milk fever is a veterinary condition. Animals showing signs of milk fever require immediate veterinary evaluation and appropriate treatment. Oral supplementation must not delay emergency care.",
      "Retained placenta, difficult calving, and milk fever require veterinary assessment. LACTOCAL GEL should not be represented as a standalone treatment for these conditions. LACTOCAL GEL should complement a complete transition-period feeding program and veterinary care.",
      "Milk yield and milk fat: the label identifies improved milk yield and milk fat percentage as intended benefits. Specific improvements have not been established without product-specific trials and are not guaranteed.",
      "About Sarvadhenu: science-informed nutrition, dairy-focused formulations, balanced support, responsible supplementation, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "LACTOCAL GEL"],
      ["Brand", "Sarvadhenu"],
      ["Category", "Animal Healthcare Supplement"],
      ["Type", "Oral Calcium & Phosphorus Supplement"],
      ["Primary Minerals", "Calcium & Phosphorus"],
      ["Vitamins", "Vitamin D3 & Vitamin B12"],
      ["Additional Components", "Chandan Shoor & Methylcobalamin"],
      ["Primary Application", "Calcium Supplementation"],
      ["Key Indication", "Milk Fever Prevention Support"],
      ["Additional Applications", "Calving & Lactation Management"],
      ["Suitable For", "Dairy Cattle & Buffaloes"],
      ["Administration", "Oral"],
      ["Physical Form", "Gel"],
      ["Packaging", "300 g"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Complete Mineral Support for Better Dairy Performance",
    applicationsEyebrow: "Dairy animal applications",
    applicationsHeading: "Specialized Calcium Nutrition for Dairy Cattle & Buffaloes",
    advantageEyebrow: "The LACTOCAL GEL advantage",
    advantageHeading: "Calcium, Phosphorus and Vitamins in One Oral Gel",
    compositionHeading: "Declared Composition & Specifications",
    dosageLabel: "Dosage",
    finalCtaCopy: "Stronger Bones. Better Calving. Improved Dairy Performance.",
    benefits: [
      {
        index: "01",
        title: "Milk Fever Prevention Support",
        heading: "Supporting Calcium Balance Around Calving",
        description:
          "Milk fever is associated with low blood calcium around the onset of lactation. LACTOCAL GEL provides calcium and phosphorus to help support calcium management in this period. Milk fever is a veterinary condition and animals showing signs need immediate veterinary care.",
      },
      {
        index: "02",
        title: "Faster Recovery Support",
        heading: "Supporting Calcium & Phosphorus Replenishment",
        description:
          "The label states the product is formulated to support faster recovery from milk fever through calcium and phosphorus supplementation. This is label-stated and does not replace veterinary treatment.",
      },
      {
        index: "03",
        title: "Better Milk Yield Support",
        heading: "Supporting Lactation Nutrition",
        description:
          "Milk production raises nutritional demand. LACTOCAL GEL provides minerals and vitamins to complement dairy feeding programs. A specific increase in milk yield is not guaranteed and has not been established without product-specific trials.",
      },
      {
        index: "04",
        title: "Milk Fat Percentage Support",
        heading: "Supporting Dairy Milk Composition",
        description:
          "Balanced nutrition matters for milk composition. The label identifies improved milk fat percentage as an intended benefit; a specific change in milk fat percentage is not guaranteed and has not been established without product-specific trials.",
      },
      {
        index: "05",
        title: "Uterine Contraction Support",
        heading: "Supporting Normal Calving Processes",
        description:
          "Calcium plays an important role in normal muscle contraction. The formulation is intended to aid normal uterine contraction during calving. Difficult calving requires veterinary assessment.",
      },
      {
        index: "06",
        title: "Timely Placental Expulsion Support",
        heading: "Supporting Post-Calving Management",
        description:
          "Normal expulsion of the placenta is part of the post-calving process. LACTOCAL GEL is positioned to complement nutritional management for timely placental expulsion. Retained placenta requires veterinary assessment.",
      },
      {
        index: "07",
        title: "Stronger Bones & Muscles",
        heading: "Supporting Essential Mineral Functions",
        description:
          "Calcium and phosphorus are important for skeletal development, bone maintenance and normal muscular function.",
      },
      {
        index: "08",
        title: "Lactation Support",
        heading: "Supporting Productive Dairy Animals",
        description:
          "Contains essential mineral and vitamin components designed to support dairy animals during lactation.",
      },
    ],
    detailedApplications: [
      {
        title: "Dairy Cattle",
        heading: "Supporting Calcium Balance & Lactation",
        description:
          "Dairy cattle have increased calcium requirements in the transition from pregnancy to lactation. Adequate calcium availability matters for muscle function, skeletal health and milk production.",
        focus: [
          "Calcium supplementation",
          "Phosphorus supplementation",
          "Milk fever prevention support",
          "Pre- and post-calving nutritional management",
          "Normal uterine contraction support",
          "Placental expulsion support",
          "Milk production nutrition",
          "Bone and muscle maintenance",
        ],
      },
      {
        title: "Dairy Buffaloes",
        heading: "Supporting Mineral Nutrition & Dairy Performance",
        description:
          "Buffaloes need balanced mineral and vitamin nutrition to support calving, lactation and overall physiological function.",
        focus: [
          "Calcium and phosphorus nutrition",
          "Milk fever prevention support",
          "Calving-period supplementation",
          "Post-calving nutritional support",
          "Lactation support",
          "Milk yield and milk fat nutrition",
          "Skeletal and muscular functions",
        ],
      },
      {
        title: "Pre-Calving",
        heading: "Production-Stage Application",
        description:
          "Supports nutritional calcium management around the calving period. Use per the label and veterinarian recommendations.",
        focus: ["Calcium management around calving", "Monitor pre-calving animals"],
      },
      {
        title: "During Calving",
        heading: "Production-Stage Application",
        description:
          "Provides calcium and phosphorus supplementation according to the recommended usage instructions. Difficult calving requires veterinary assessment.",
        focus: ["Follow label usage instructions", "Call the veterinarian for difficult calving"],
      },
      {
        title: "Post-Calving",
        heading: "Production-Stage Application",
        description:
          "Complements mineral replenishment and lactation nutritional management. The label identifies the post-calving dose as very beneficial.",
        focus: [
          "Mineral replenishment",
          "Observe behaviour and milk",
          "Veterinary care for abnormal signs",
        ],
      },
      {
        title: "During Lactation",
        heading: "Production-Stage Application",
        description: "Supports the mineral requirements associated with milk production.",
        focus: ["Lactation nutrition", "Balanced feeding program"],
      },
    ],
    formula: [
      {
        title: "Calcium",
        heading: "Essential Mineral",
        description:
          "Involved in skeletal structure, muscle function (including uterine contraction) and milk production. Declared at 8600 mg per 100 g.",
      },
      {
        title: "Phosphorus",
        heading: "Essential Mineral",
        description:
          "Works with calcium in skeletal development and metabolism; balance between the two matters. Declared at 3800 mg per 100 g.",
      },
      {
        title: "Vitamin D3",
        heading: "Absorption Support",
        description:
          "Supports calcium and phosphorus absorption and utilization. Declared at 32000 I.U. per 100 g.",
      },
      {
        title: "Vitamin B12",
        heading: "Metabolic Vitamin",
        description: "Contributes to metabolic functions. Declared at 400 mcg per 100 g.",
      },
      {
        title: "Methylcobalamin",
        heading: "Active Form of Vitamin B12",
        description: "Contributes to metabolic functions. Declared at 1500 mcg per 100 g.",
      },
      {
        title: "Chandan Shoor",
        heading: "Declared Component",
        description:
          "Declared at 200 mg per 100 g. Its source, chemical composition and mechanism are not detailed on the label.",
      },
    ],
    compositionGroups: [
      {
        title: "Each 100 g Provides",
        rows: [
          ["Calcium", "8600 mg"],
          ["Phosphorus", "3800 mg"],
          ["Vitamin D3", "32000 I.U."],
          ["Vitamin B12", "400 mcg"],
          ["Chandan Shoor", "200 mg"],
          ["Methylcobalamin", "1500 mcg"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Physical Form", "Gel"],
          ["Administration", "Oral"],
          ["Packaging", "300 g"],
          ["Storage", "Cool & Dry Place; Protect from Light"],
          ["Shelf Life", "Not specified on supplied label"],
        ],
      },
    ],
    compositionNote:
      "Please confirm elemental calcium and phosphorus sources and analytical composition through the manufacturer-approved specification sheet and certificate of analysis (CoA). Shelf life is not specified on the supplied label.",
    dosageTable: [
      {
        category: "Higher milk yield (label)",
        quantity: "One bottle per animal per day for 5-10 days, or per veterinary recommendation",
      },
      {
        category: "Milk fever prevention (label)",
        quantity:
          "One bottle at first sign of calving; another bottle 8-12 hours after calving; repeat every 12 hours as needed or as directed by the veterinarian",
      },
      {
        category: "Additional label timing",
        quantity:
          "Oral administration 12 hours before and after calving, repeated after 24 hours; confirm with the manufacturer and veterinarian",
      },
      { category: "Route", quantity: "Oral" },
    ],
    dosageGuidance: [
      "Label-declared dosage for higher milk yield: one bottle per animal per day for 5-10 days, or per veterinary recommendation.",
      "Label-declared dosage for milk fever prevention: one bottle at the first sign of calving and another bottle 8-12 hours after calving; repeat every 12 hours as needed or as directed by the veterinarian. The label identifies the post-calving dose as very beneficial.",
      "The label also mentions oral administration 12 hours before and after calving, repeated after 24 hours. This is additional label timing; confirm these timings with the manufacturer and veterinarian before combining them into a single schedule.",
      "Step 01 - Remove the seal.",
      "Step 02 - Hold the animal's head in a normal to slightly elevated position.",
      "Step 03 - Carefully insert the nozzle into the back of the mouth.",
      "Step 04 - Slowly squeeze the entire contents of the bottle.",
      "Step 05 - Ensure the animal can swallow.",
      "Administer orally and follow the labelled quantity and timing.",
      "Do not give to animals unable to swallow, and do not force administration.",
      "Seek veterinary guidance when milk fever is suspected and do not delay emergency treatment.",
      "Milk fever is a veterinary condition. Animals showing signs of milk fever need immediate veterinary evaluation and treatment. Oral supplementation must not delay emergency care.",
      "Retained placenta, difficult calving, and milk fever require veterinary assessment. LACTOCAL GEL should not be represented as a standalone treatment for these conditions.",
      "LACTOCAL GEL should complement a complete transition-period feeding program and veterinary care.",
    ],
    advantages: [
      {
        title: "Balanced Calcium & Phosphorus",
        description: "Provides both minerals in a single oral gel.",
      },
      {
        title: "Vitamin D3 Enrichment",
        description: "Supports calcium and phosphorus absorption and utilization.",
      },
      {
        title: "Vitamin B12 Fortification",
        description: "Adds Vitamin B12 for metabolic function.",
      },
      {
        title: "Methylcobalamin Inclusion",
        description: "Includes the active form of Vitamin B12.",
      },
      {
        title: "Milk Fever Prevention Support",
        description:
          "Label-stated aid in preventing milk fever; veterinary care is still required.",
      },
      {
        title: "Lactation Support",
        description: "Supports mineral needs during lactation; yield is not guaranteed.",
      },
      {
        title: "Uterine Function Support",
        description: "Supports normal uterine contraction during calving.",
      },
      {
        title: "Faster Recovery Support",
        description: "Label-stated; does not replace veterinary treatment.",
      },
      {
        title: "Convenient Oral Gel",
        description: "Practical oral administration for dairy farmers.",
      },
      {
        title: "Practical Packaging",
        description: "Supplied in a 300 g bottle.",
      },
    ],
    handling: [
      "Best practices: provide balanced mineral nutrition, monitor pre-calving animals, support post-calving nutrition, maintain Vitamin D3 supply, observe behaviour, monitor milk, follow the label and veterinarian advice, and maintain good feeding practices.",
      "Call a veterinarian immediately for signs of milk fever, difficult calving, retained placenta or abnormal post-calving behaviour.",
      "Keep the product in its original packaging, protect it from direct light and store in a cool, dry place.",
      "Check manufacturing and expiry information, keep the bottle closed before use and avoid contamination.",
      "Ensure the animal can swallow before administration.",
      "Keep out of reach of children.",
      "Not for Human Use. Not a Substitute for Emergency Veterinary Treatment.",
    ],
    faqs: [
      {
        question: "What is LACTOCAL GEL?",
        answer:
          "LACTOCAL GEL is a Sarvadhenu oral calcium and phosphorus gel enriched with Vitamin D3, Vitamin B12, Chandan Shoor and methylcobalamin for dairy cattle and buffaloes.",
      },
      {
        question: "Which animals is LACTOCAL GEL for?",
        answer: "Dairy cattle and buffaloes.",
      },
      {
        question: "What are the main benefits of LACTOCAL GEL?",
        answer:
          "It provides calcium, phosphorus and vitamins to support calcium balance around calving, normal uterine contraction, timely placental expulsion, bone and muscle function and lactation.",
      },
      {
        question: "What is the composition of LACTOCAL GEL?",
        answer:
          "Each 100 g provides calcium 8600 mg, phosphorus 3800 mg, vitamin D3 32000 I.U., vitamin B12 400 mcg, Chandan Shoor 200 mg and methylcobalamin 1500 mcg.",
      },
      {
        question: "Why is calcium important for dairy animals?",
        answer:
          "Calcium is essential for skeletal structure, muscle function and milk production, and requirements rise sharply at the start of lactation.",
      },
      {
        question: "Why is phosphorus included?",
        answer:
          "Phosphorus works with calcium in skeletal development and metabolism, and the balance between the two minerals matters.",
      },
      {
        question: "What does Vitamin D3 do?",
        answer: "Vitamin D3 supports calcium and phosphorus absorption and utilization.",
      },
      {
        question: "Why is Vitamin B12 included?",
        answer: "Vitamin B12 contributes to metabolic functions.",
      },
      {
        question: "What is methylcobalamin?",
        answer:
          "Methylcobalamin is an active form of Vitamin B12 that contributes to metabolic functions.",
      },
      {
        question: "Does LACTOCAL GEL help prevent milk fever?",
        answer:
          "The label recommends it as an aid in preventing milk fever and associated complications. Milk fever is a veterinary condition, so use it as part of veterinary-supervised transition management.",
      },
      {
        question: "When should LACTOCAL GEL be given around calving?",
        answer:
          "The label states one bottle at the first sign of calving and another 8-12 hours after calving. The label also mentions administration 12 hours before and after calving, repeated after 24 hours. Confirm the schedule with your veterinarian and the manufacturer.",
      },
      {
        question: "Does LACTOCAL GEL increase milk production?",
        answer:
          "The label identifies support for milk yield as an intended benefit, but a specific improvement has not been established without product-specific trials and is not guaranteed.",
      },
      {
        question: "Does LACTOCAL GEL improve milk fat?",
        answer:
          "The label identifies improved milk fat percentage as an intended benefit, but a specific change has not been established without product-specific trials and is not guaranteed.",
      },
      {
        question: "Does it support uterine contraction?",
        answer:
          "The formulation is intended to aid normal uterine contraction during calving. Difficult calving requires veterinary assessment.",
      },
      {
        question: "Does it support placental expulsion?",
        answer:
          "It is positioned to complement nutritional management for timely placental expulsion. Retained placenta requires veterinary assessment and LACTOCAL GEL is not a standalone treatment for it.",
      },
      {
        question: "How is LACTOCAL GEL administered?",
        answer:
          "Orally. Remove the seal, hold the head in a normal to slightly elevated position, carefully insert the nozzle into the back of the mouth and slowly squeeze the entire contents, making sure the animal can swallow.",
      },
      {
        question: "Can it be given to an animal that cannot swallow?",
        answer: "No. Do not give it to animals unable to swallow, and do not force administration.",
      },
      {
        question: "What quantity is given for higher milk yield?",
        answer: "One bottle per animal per day for 5-10 days, or as directed by the veterinarian.",
      },
      {
        question: "How often can it be repeated around calving?",
        answer: "Every 12 hours as needed, or as directed by the veterinarian.",
      },
      {
        question: "What packaging is available?",
        answer: "300 g.",
      },
      {
        question: "How should LACTOCAL GEL be stored?",
        answer: "Store in a cool, dry place and protect from light.",
      },
      {
        question: "Is LACTOCAL GEL a treatment for severe milk fever?",
        answer:
          "No. Severe or suspected milk fever needs immediate veterinary attention, and oral supplementation must not delay emergency care.",
      },
    ],
  },
  {
    id: "p24",
    slug: "zero-fly",
    name: "ZERO FLY",
    index: "24",
    category: "Farm Hygiene & Fly Control Solution",
    focusArea: "Natural Herbal House Fly Control for Poultry & Livestock Farms",
    form: "Herbal fly-control formulation (physical form not specified on supplied leaflet)",
    shortDescription:
      "A natural herbal fly-control formulation with Neem Oil, Castor Oil, Clove Oil and an Organic Carrier, designed to lure and trap house flies and support farm hygiene in poultry and livestock environments.",
    detailedDescription:
      "ZERO FLY by Sarvadhenu is a specialized natural herbal fly-control formulation developed with Neem Oil, Castor Oil, Clove Oil and an Organic Carrier. It is designed to lure and trap house flies, helps manage fly activity in affected areas and supports farm hygiene. It is mixed thoroughly with 1 kg of powder sugar and sprinkled in areas where fly activity is higher. ZERO FLY is a fly-control product, not an animal nutritional supplement or a treatment for insect-borne diseases.",
    image: zeroFlyImg,
    imageAlt:
      "Sarvadhenu ZERO FLY natural herbal house fly control formulation containing Neem Oil, Castor Oil, Clove Oil, and Organic Carrier for poultry and livestock farm hygiene.",
    applications: [
      "House fly management in poultry and livestock farm environments",
      "Area-specific application where fly activity is higher",
      "Use only as per the label and manufacturer-approved instructions; keep prepared bait away from animals, children, feed and water",
    ],
    composition:
      "Neem Oil, Castor Oil, Clove Oil and Organic Carrier (quantities not specified on supplied leaflet)",
    packSizes: "Not specified on supplied leaflet",
    dosage: "Mix thoroughly with 1 kg powder sugar and sprinkle in areas with higher fly activity",
    storage: "Cool & Dry Place",
    disclaimer: FARM_HYGIENE_DISCLAIMER,
    seoTitle: "ZERO FLY | Natural Herbal Fly Control for Poultry & Livestock Farms | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu ZERO FLY, a natural herbal fly-control formulation containing Neem Oil, Castor Oil, Clove Oil, and Organic Carrier to help lure and trap house flies and support farm hygiene.",
    keywords: [
      "Natural Fly Control for Poultry & Livestock Farms",
      "ZERO FLY",
      "Sarvadhenu ZERO FLY",
      "natural fly control",
      "herbal fly control",
      "house fly control for dairy farms",
      "house fly control for poultry farms",
      "livestock farm fly management",
      "Neem Oil fly control",
      "Castor Oil fly control",
      "Clove Oil fly control",
      "natural herbal fly-control formulation",
      "house fly lure and trap",
      "farm hygiene solution",
      "poultry farm hygiene",
      "dairy farm fly control",
      "livestock environmental hygiene",
      "herbal farm fly control",
      "fly control for cattle farms",
      "farm sanitation solutions",
      "natural fly management",
    ],
    tagline: "Natural Fly Control. Cleaner Farms. Healthier Environments.",
    heroHeading: "Natural Herbal Fly Control Formulation for Effective House Fly Management",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL FARM SOLUTIONS",
      "ZERO FLY is a specialized natural herbal fly-control formulation developed with Neem Oil, Castor Oil, Clove Oil and an Organic Carrier.",
      "Designed to lure and trap house flies, it helps manage fly activity in affected areas and supports improved farm hygiene in livestock farms, poultry facilities and other areas where house fly activity is a concern.",
      "It is mixed thoroughly with 1 kg of powder sugar and sprinkled in areas where fly activity is higher.",
      "Natural Fly Control. Better Farm Hygiene. Cleaner Surroundings.",
    ],
    highlights: [
      "Natural Herbal Fly Control Formulation",
      "Helps Control House Flies",
      "Contains Neem Oil",
      "Contains Castor Oil",
      "Contains Clove Oil",
      "Organic Carrier-Based Formulation",
      "Designed to Lure & Trap House Flies",
      "Supports Better Farm Hygiene",
      "Suitable for Livestock & Poultry Farm Environments",
      "Label-Declared Low Toxicity to Humans & Mammals",
      "Convenient Powder Sugar Mixing Application",
      "Easy Area-Specific Application",
    ],
    overviewLabel: "About ZERO FLY",
    overviewHeading: "Natural Herbal Fly Control for Modern Farm Management",
    overviewParagraphs: [
      "House flies are a common concern in agricultural and livestock environments, particularly where organic waste, feed residues and moisture accumulate. Excessive fly activity can create hygiene and management challenges for farmers and livestock owners.",
      "ZERO FLY combines Neem Oil, Castor Oil, Clove Oil and an Organic Carrier in a product designed to lure and trap house flies. It is intended to complement routine farm sanitation and environmental fly-management practices.",
      "Herbal science: Neem Oil is a traditional botanical oil. Castor Oil is a vegetable oil obtained from castor seeds. Clove Oil is an aromatic botanical oil obtained from cloves. The Organic Carrier is the base component of the formulation; its identity is not specified on the supplied leaflet. No efficacy figures are claimed for any individual ingredient.",
      "Understanding house fly management: house flies are drawn to organic waste, feed residues, moisture and poorly drained areas. Sanitation, waste removal, drainage and area-specific control work together as part of integrated fly management, and ZERO FLY is one tool within that approach.",
      "Why fly control matters: managing fly activity is an important component of livestock and poultry farm hygiene. ZERO FLY can complement regular cleaning and sanitation but does not replace them.",
      "Directions (label-declared): mix ZERO FLY thoroughly with 1 kg of powder sugar and sprinkle the prepared mixture in areas where fly activity is higher. The leaflet does not specify the amount of ZERO FLY per 1 kg of sugar or the application frequency; confirm with the manufacturer.",
      "Application steps: identify areas with high fly activity; take 1 kg of powder sugar; mix ZERO FLY thoroughly into it; select placement away from animals, children, feed and water; sprinkle in suitable areas following the manufacturer's approved application quantity; maintain regular farm hygiene.",
      "Precautions: mix thoroughly and apply only in suitable locations. Do not apply directly to animals. Do not mix with feed or drinking water. Prevent accidental ingestion by animals, birds and children, because the prepared sugar-based bait may attract them. Use gloves and a mask, avoid unnecessary direct contact, and follow manufacturer-approved quantities.",
      "Best practices: clean regularly, remove organic waste, keep feeding areas clean, manage moisture and drainage, identify high-activity areas, apply correctly, monitor results, and consult the manufacturer or a qualified pest-management professional for quantities, placement and repeated use.",
      "Handling: use gloves and a mask, avoid direct contact, keep away from children, prevent ingestion by humans and animals, do not use in feeding or drinking areas, store in a cool, dry place in the original packaging, follow manufacturer instructions, and dispose of unused product and packaging responsibly.",
      "Important caution: label-declared low toxicity to humans and mammals does not mean non-toxic or safe for ingestion. Keep the prepared bait inaccessible to animals, birds and children.",
      "ZERO FLY is a fly-control product, not an animal nutritional supplement or a treatment for insect-borne diseases.",
      "About Sarvadhenu: herbal-based formulations, practical farm solutions, environmental hygiene, responsible product use, quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "ZERO FLY"],
      ["Brand", "Sarvadhenu"],
      ["Product Category", "Farm Hygiene & Fly Control Solution"],
      ["Product Type", "Natural Herbal Fly Control"],
      ["Primary Application", "House Fly Control"],
      ["Main Ingredients", "Neem Oil, Castor Oil & Clove Oil"],
      ["Additional Component", "Organic Carrier"],
      ["Control Approach", "Lure & Trap House Flies"],
      ["Application Method", "Mix with 1 kg Powder Sugar"],
      ["Application Area", "Areas with High Fly Activity"],
      ["Suitable Environments", "Poultry & Livestock Farms"],
      ["Toxicity Statement", "Label-declared low toxicity to humans and mammals"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading: "Natural Fly Control. Improved Farm Hygiene. Better Environmental Management.",
    applicationsEyebrow: "Farm & environmental applications",
    applicationsHeading: "Practical Fly Control Across Different Farm Environments",
    advantageEyebrow: "The ZERO FLY advantage",
    advantageHeading: "A Herbal Oil-Based Approach to House Fly Management",
    compositionHeading: "Declared Ingredients & Specifications",
    dosageLabel: "Application",
    finalCtaCopy: "Natural Fly Control. Cleaner Farms. Better Farm Hygiene.",
    benefits: [
      {
        index: "01",
        title: "House Fly Control",
        heading: "Targeting Common Farm Fly Problems",
        description:
          "House flies are frequently found around livestock housing, poultry facilities and areas containing organic waste. ZERO FLY is formulated to help lure and trap house flies in affected areas.",
      },
      {
        index: "02",
        title: "Natural Herbal Formulation",
        heading: "Powered by Selected Herbal Oils",
        description:
          "The formulation contains Neem Oil, Castor Oil and Clove Oil, combined with an Organic Carrier. These ingredients form the basis of its natural herbal fly-control positioning.",
      },
      {
        index: "03",
        title: "Lure & Trap Application",
        heading: "Supporting Area-Specific Fly Management",
        description:
          "ZERO FLY is designed to lure and trap house flies. Farmers prepare a mixture and place it in areas where fly activity is more prominent, away from animals, children, feed and water.",
      },
      {
        index: "04",
        title: "Better Farm Hygiene",
        heading: "Supporting Cleaner Farm Environments",
        description:
          "Managing fly activity is an important component of livestock and poultry farm hygiene. ZERO FLY can complement regular cleaning and sanitation practices.",
      },
      {
        index: "05",
        title: "Low-Toxicity Positioning",
        heading: "Designed for Responsible Farm Use",
        description:
          "The product label describes ZERO FLY as having low toxicity to humans and mammals. This does not mean non-toxic or safe for ingestion, and gloves and a mask are still required during application.",
      },
      {
        index: "06",
        title: "Convenient Application",
        heading: "Simple Preparation & Use",
        description:
          "The label provides a straightforward method: mix ZERO FLY thoroughly with 1 kg of powder sugar and sprinkle the mixture in areas with higher fly activity.",
      },
      {
        index: "07",
        title: "Multi-Environment Application",
        heading: "Supporting Poultry & Livestock Farm Hygiene",
        description:
          "Fly management is important across different agricultural environments. ZERO FLY is positioned for use in farm surroundings where house fly activity is a concern.",
      },
    ],
    detailedApplications: [
      {
        title: "Dairy Farms",
        heading: "Supporting Cleaner Dairy Farm Surroundings",
        description:
          "Dairy farms can experience fly activity around animal housing, feeding areas, manure collection points and waste-handling locations.",
        focus: [
          "House fly management",
          "Fly activity around farm surroundings",
          "Supporting farm hygiene",
          "Area-specific fly control",
          "Complementary sanitation practices",
        ],
      },
      {
        title: "Cattle & Buffalo Housing",
        heading: "Supporting Better Animal Housing Hygiene",
        description:
          "Fly activity around cattle and buffalo housing can create additional environmental management challenges.",
        focus: [
          "Fly management around animal housing",
          "Cleaner farm surroundings",
          "Area-specific application",
          "Supporting routine hygiene practices",
        ],
      },
      {
        title: "Poultry Farms",
        heading: "Supporting Poultry Facility Hygiene",
        description:
          "Poultry environments require consistent sanitation and waste management to control unwanted insect activity. Prevent birds from accessing the prepared bait.",
        focus: [
          "House fly management",
          "Fly activity around poultry surroundings",
          "Supporting waste-area hygiene",
          "Complementary environmental management",
        ],
      },
      {
        title: "Livestock Waste Areas",
        heading: "Supporting Fly Management Around Waste Collection",
        description: "Organic waste and accumulated residues can attract flies.",
        focus: [
          "Fly activity around waste areas",
          "Manure collection surroundings",
          "Organic waste management areas",
          "Supporting farm sanitation",
        ],
      },
      {
        title: "Farm Storage & Utility Areas",
        heading: "Supporting Cleaner Farm Surroundings",
        description:
          "Fly activity may also occur around utility areas, storage spaces and other farm locations. Apply only in suitable locations where animals and children cannot access the prepared bait, and follow the manufacturer's approved application and safety instructions.",
        focus: [
          "Farm utility surroundings",
          "Suitable fly-control application areas",
          "Area-specific hygiene management",
          "Supporting environmental cleanliness",
        ],
      },
    ],
    formula: [
      {
        title: "Neem Oil",
        heading: "A Traditional Botanical Oil",
        description: "A botanical oil traditionally obtained from the neem tree.",
      },
      {
        title: "Castor Oil",
        heading: "A Vegetable Oil",
        description: "A vegetable oil obtained from castor seeds.",
      },
      {
        title: "Clove Oil",
        heading: "An Aromatic Botanical Oil",
        description: "An aromatic botanical oil obtained from cloves.",
      },
      {
        title: "Organic Carrier",
        heading: "Base Component of the Formulation",
        description:
          "The carrier forms the base of the formulation. Its identity is not specified on the supplied leaflet.",
      },
    ],
    compositionGroups: [
      {
        title: "Declared Ingredients (quantities not specified)",
        rows: [
          ["Neem Oil", "Included"],
          ["Castor Oil", "Included"],
          ["Clove Oil", "Included"],
          ["Organic Carrier", "Included"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Product Name", "ZERO FLY"],
          ["Brand", "Sarvadhenu"],
          ["Preparation", "Mix with 1 kg Powder Sugar"],
          ["Application", "Sprinkle in areas with high fly activity"],
          ["Toxicity Statement", "Label-declared low toxicity to humans and mammals"],
          ["Packaging Size", "Not specified on supplied leaflet"],
          ["Shelf Life", "Not specified on supplied leaflet"],
          ["Physical Form", "Not specified on supplied leaflet"],
          ["Storage", "Cool & Dry Place"],
        ],
      },
    ],
    compositionNote:
      "The leaflet identifies four ingredients but gives no quantities or percentages. Ingredient concentrations, physical form, active constituents and application rate should be confirmed with the manufacturer. Low toxicity to humans and mammals is a label-declared statement and does not mean the product is non-toxic or safe for ingestion.",
    dosageTable: [
      { category: "Preparation", quantity: "Mix ZERO FLY thoroughly with 1 kg powder sugar" },
      { category: "Application", quantity: "Sprinkle in areas with higher fly activity" },
      {
        category: "Placement",
        quantity: "Away from animals, birds, children, feed and drinking water",
      },
      {
        category: "ZERO FLY per 1 kg sugar",
        quantity: "Not specified on leaflet; confirm with manufacturer",
      },
      { category: "Frequency", quantity: "Not specified on leaflet; follow manufacturer" },
    ],
    dosageGuidance: [
      "Label-declared application: mix ZERO FLY thoroughly with 1 kg of powder sugar and sprinkle the prepared mixture in areas where fly activity is higher.",
      "Step 01 - Identify areas with high fly activity.",
      "Step 02 - Take 1 kg of powder sugar.",
      "Step 03 - Mix ZERO FLY thoroughly with the sugar.",
      "Step 04 - Select placement away from animals, children, feed and water.",
      "Step 05 - Sprinkle in suitable areas following the manufacturer's approved application quantity.",
      "Step 06 - Maintain regular farm hygiene.",
      "The leaflet does not specify the amount of ZERO FLY per 1 kg of sugar or the application frequency; confirm with the manufacturer.",
    ],
    advantages: [
      {
        title: "Herbal Oil Combination",
        description: "Combines Neem Oil, Castor Oil and Clove Oil.",
      },
      {
        title: "Organic Carrier-Based Formulation",
        description: "Built on an organic carrier base.",
      },
      {
        title: "House Fly Targeting",
        description: "Designed to lure and trap house flies.",
      },
      {
        title: "Convenient Preparation",
        description: "Mixed thoroughly with 1 kg of powder sugar.",
      },
      {
        title: "Area-Specific Application",
        description: "Sprinkled where fly activity is higher.",
      },
      {
        title: "Farm Hygiene Support",
        description: "Complements routine cleaning and sanitation practices.",
      },
      {
        title: "Low-Toxicity Positioning",
        description:
          "Label-declared low toxicity to humans and mammals; gloves and a mask are still required.",
      },
      {
        title: "Practical Farm Application",
        description: "A simple preparation method suited to routine farm use.",
      },
      {
        title: "Multiple Farm Environments",
        description: "Positioned for poultry and livestock farm surroundings.",
      },
    ],
    handling: [
      "Best practices: clean regularly, remove organic waste, keep feeding areas clean, and manage moisture and drainage.",
      "Identify high-activity areas, apply correctly and monitor results.",
      "Consult the manufacturer or a qualified pest-management professional for quantities, placement and repeated use.",
      "Use gloves and a mask, and avoid direct contact.",
      "Keep away from children and prevent accidental ingestion by humans, animals and birds.",
      "Do not use in feeding or drinking areas, and do not apply directly to animals.",
      "Store in a cool, dry place in the original packaging.",
      "Follow manufacturer instructions and dispose of unused product and packaging responsibly.",
      "Important caution: the low toxicity statement does not mean the product is non-toxic or safe for ingestion.",
    ],
    faqs: [
      {
        question: "What is ZERO FLY?",
        answer:
          "ZERO FLY is a Sarvadhenu natural herbal fly-control formulation for poultry and livestock farms.",
      },
      {
        question: "What ingredients does ZERO FLY contain?",
        answer:
          "Neem Oil, Castor Oil, Clove Oil and an Organic Carrier. Quantities are not specified on the supplied leaflet.",
      },
      {
        question: "What is ZERO FLY used for?",
        answer:
          "It is used for house fly management and farm hygiene support in areas with higher fly activity.",
      },
      {
        question: "Is ZERO FLY a natural herbal product?",
        answer:
          "It is positioned as a natural herbal fly-control formulation containing Neem Oil, Castor Oil and Clove Oil.",
      },
      {
        question: "How does ZERO FLY work?",
        answer: "The leaflet describes it as designed to lure and trap house flies.",
      },
      {
        question: "How is ZERO FLY prepared?",
        answer:
          "Mix ZERO FLY thoroughly with 1 kg of powder sugar, following manufacturer-approved instructions.",
      },
      {
        question: "Where should ZERO FLY be applied?",
        answer:
          "Sprinkle the prepared mixture in areas with higher fly activity, away from animals, children, feed and water.",
      },
      {
        question: "Can ZERO FLY be used on dairy farms?",
        answer:
          "It is positioned for livestock farm environments, including areas around dairy housing and waste points. Keep the bait where animals cannot reach it.",
      },
      {
        question: "Can ZERO FLY be used on poultry farms?",
        answer:
          "It is positioned for poultry farm surroundings. Prevent birds from accessing the prepared bait.",
      },
      {
        question: "Is ZERO FLY safe for animals?",
        answer:
          "The leaflet declares low toxicity to humans and mammals. This does not mean non-toxic or safe for ingestion. Keep the prepared bait inaccessible to animals, birds and children, do not apply it directly to animals, and do not mix it with feed or drinking water.",
      },
      {
        question: "Is ZERO FLY toxic to humans?",
        answer:
          "The label declares low toxicity to humans and mammals. Gloves and a mask are still required during handling and application.",
      },
      {
        question: "Should gloves be used?",
        answer: "Yes. Use gloves and avoid unnecessary direct contact.",
      },
      {
        question: "Should a mask be used?",
        answer: "Yes. Use a mask while preparing and applying the mixture.",
      },
      {
        question: "Can ZERO FLY be mixed with animal feed?",
        answer: "No. Do not mix it with animal feed.",
      },
      {
        question: "Can ZERO FLY be added to drinking water?",
        answer: "No. Do not add it to drinking water.",
      },
      {
        question: "How should ZERO FLY be stored?",
        answer: "Store in a cool, dry place in the original packaging.",
      },
      {
        question: "Should ZERO FLY be kept away from children?",
        answer: "Yes. Keep the product and the prepared mixture away from children.",
      },
      {
        question: "What is the recommended mixing quantity?",
        answer:
          "The label states mixing with 1 kg of powder sugar. The leaflet does not specify the amount of ZERO FLY per kg of sugar, so confirm it with the manufacturer.",
      },
      {
        question: "How often should ZERO FLY be applied?",
        answer:
          "Application frequency is not specified on the leaflet. Follow the manufacturer's instructions.",
      },
      {
        question: "Does ZERO FLY replace farm cleaning?",
        answer:
          "No. It is designed to complement regular cleaning, waste removal and sanitation, not replace them.",
      },
      {
        question: "What is the shelf life of ZERO FLY?",
        answer:
          "The shelf life is not specified on the supplied leaflet. Please confirm it with the manufacturer.",
      },
      {
        question: "Is ZERO FLY an animal feed supplement?",
        answer:
          "No. It is an environmental fly-control product, not an animal nutritional supplement or a treatment for insect-borne diseases.",
      },
    ],
  },
  {
    id: "p25",
    slug: "amino-limit-99",
    name: "AMINO LIMIT 99%",
    index: "25",
    category: "Animal Feed & Nutrition",
    focusArea: "High-Purity Essential Sulfur-Containing Amino Acid for Poultry & Dairy Nutrition",
    form: "White to yellowish powder",
    shortDescription:
      "A high-purity essential sulfur-containing amino acid manufactured through chemical synthesis, with an assay specification greater than 99%, for poultry and high-yielding dairy cow feed applications.",
    detailedDescription:
      "AMINO LIMIT 99% by Sarvadhenu is a high-purity essential sulfur-containing amino acid manufactured through chemical synthesis from petrochemical raw materials. It carries an assay specification greater than 99% and is intended for nutritional applications where sulfur-containing amino acids may be limiting, particularly in poultry and high-yielding dairy cows. The supplied leaflet does not state the chemical name; the exact identity must be confirmed through the manufacturer's technical data sheet and CoA.",
    image: aminoLimitImg,
    imageAlt:
      "Sarvadhenu AMINO LIMIT 99% high-purity essential sulfur-containing amino acid in white to yellowish powder form, suitable for poultry and high-yielding dairy cow feed applications.",
    applications: [
      "Poultry feed formulations where sulfur-containing amino acids may be limiting",
      "High-yielding dairy cow feed formulations",
      "Feed manufacturing, premixes and specialized feeds, after identity and suitability are verified",
    ],
    composition:
      "Essential sulfur-containing amino acid, assay greater than 99% (NT) (TLC); exact chemical identity to be confirmed through the manufacturer's technical data sheet and CoA",
    packSizes: "25 kg Bag",
    dosage:
      "Not specified on supplied leaflet; inclusion to be determined by a qualified animal nutritionist after verifying chemical identity and the complete formulation",
    storage:
      "Cool, dry, ventilated warehouse; protect from static electricity, moisture and rain; keep in original packaging. Shelf life 5 years in original packaging.",
    disclaimer: LIVESTOCK_DISCLAIMER,
    seoTitle: "AMINO LIMIT 99% | High-Purity Amino Acid for Poultry & Dairy Feed | Sarvadhenu",
    seoDescription:
      "Discover Sarvadhenu AMINO LIMIT 99%, a high-purity essential sulfur-containing amino acid with greater than 99% assay specification for poultry and high-yielding dairy cow feed applications.",
    keywords: [
      "High-Purity Amino Acid for Poultry & Dairy Feed",
      "AMINO LIMIT 99%",
      "Sarvadhenu AMINO LIMIT 99%",
      "99% purity amino acid",
      "sulfur-containing amino acid for poultry",
      "amino acid for dairy cows",
      "poultry feed amino acid",
      "dairy feed amino acid",
      "animal feed amino acid ingredient",
      "high-purity animal feed ingredient",
      "amino acid feed formulation",
      "essential amino acid nutrition",
      "poultry amino acid supplement",
      "dairy amino acid nutrition",
      "amino acid for high-yielding cows",
      "25 kg amino acid bag",
      "high-purity feed ingredient",
      "animal nutrition raw material",
      "amino acid for commercial feed manufacturing",
    ],
    tagline: "Essential Amino Acid. High Purity. Better Nutritional Balance.",
    heroHeading:
      "High-Purity Essential Sulfur-Containing Amino Acid for Poultry & High-Yielding Dairy Cows",
    heroIntro: [
      "SARVADHENU | ADVANCED ANIMAL NUTRITION",
      "Support animal nutrition with AMINO LIMIT 99%, a high-purity essential sulfur-containing amino acid manufactured through chemical synthesis using petrochemical raw materials.",
      "Produced through a controlled chemical reaction process, AMINO LIMIT 99% is designed to deliver a high-quality product with a purity assay greater than 99%.",
      "Its specialized formulation addresses an important nutritional requirement in poultry and high-yielding dairy cows, where sulfur-containing amino acids may be limiting in the diet.",
      "Manufactured under an appropriate quality-control system, it is characterized by defined product quality parameters, including appearance, assay, infrared spectrometry, moisture loss, residue on ignition, heavy metal limits, transmittance, sulfate content, melting point and pH value.",
      "High Purity. Essential Nutrition. Quality You Can Trust.",
    ],
    highlights: [
      "99%+ Purity Assay Specification",
      "Essential Sulfur-Containing Amino Acid",
      "Suitable for Poultry Nutrition Applications",
      "Suitable for High-Yielding Dairy Cow Nutrition Applications",
      "High-Purity Chemical Synthesis",
      "Controlled Manufacturing Process",
      "Defined Product Quality Standards",
      "Conformed Infrared Spectrometry",
      "Low Loss on Drying",
      "Controlled Heavy Metal Specification",
      "25 kg Bag Packaging",
      "5-Year Shelf Life in Original Packaging",
    ],
    overviewLabel: "About AMINO LIMIT 99%",
    overviewHeading: "High-Purity Amino Acid Nutrition for Modern Animal Feed",
    overviewParagraphs: [
      "AMINO LIMIT 99% by Sarvadhenu is a high-purity essential sulfur-containing amino acid manufactured through chemical synthesis from petrochemical raw materials.",
      "The manufacturing process involves a complete chemical reaction designed to obtain a high-quality product without unreacted materials remaining, as described in the product leaflet. The operation is conducted under an appropriate quality-control system to maintain the product's defined quality standards.",
      "With an assay specification greater than 99%, AMINO LIMIT 99% is intended for nutritional applications where sulfur-containing amino acids may be limiting, particularly in poultry and high-yielding dairy cows. It offers a high-purity ingredient option for animal feed formulations where appropriate amino acid balance is required.",
      "Nutritional science: sulfur-containing amino acids are important components of animal nutrition and contribute to protein synthesis and normal metabolic functions. Amino acid balance, poultry protein nutrition, dairy protein nutrition and the use of a high-purity ingredient are the key considerations in feed formulation.",
      "Identity note: the supplied leaflet does not explicitly identify the chemical name. The exact chemical identity, molecular formula, CAS number and analytical method must be confirmed through the manufacturer's technical data sheet and CoA before assigning any ingredient-specific functions.",
      "Quality and manufacturing: chemical synthesis from petrochemical raw materials; a complete reaction process; an assay standard of greater than 99% (NT) (TLC); infrared spectrometry conformance; moisture control with loss on drying below 0.2%; and impurity control through residue on ignition, heavy metal and sulfate limits.",
      "Why sulfur-containing amino acids matter: they are part of balanced protein nutrition, may be limiting in poultry and high-yielding dairy cow diets, and are best addressed through precise, professionally balanced feed formulation based on verified ingredient identity and specifications.",
      "Best practices and storage: store in a cool, dry, ventilated warehouse; protect from static electricity, moisture and rain; keep in the original packaging; follow validated feed manufacturing procedures; verify specifications; maintain batch records; consult nutritionists; and monitor the finished feed.",
      "Handling: follow standard industrial powder-handling precautions, use protective equipment per the manufacturer's safety documentation, and check manufacturing and expiry dates. Not for human use.",
      "About Sarvadhenu: quality-focused ingredients, controlled manufacturing, nutritional applications, technical transparency, commitment to quality, and customer-centered service.",
    ],
    quickInfo: [
      ["Product Name", "AMINO LIMIT 99%"],
      ["Brand", "Sarvadhenu"],
      ["Product Category", "Animal Feed & Nutrition"],
      ["Product Type", "Essential Sulfur-Containing Amino Acid"],
      ["Assay", "Greater than 99% (NT) (TLC)"],
      ["Manufacturing Method", "Chemical Synthesis"],
      ["Raw Material Source", "Petrochemical Raw Materials"],
      ["Appearance", "White to Yellowish Powder"],
      ["Infrared Spectrometry", "Conformed"],
      ["Primary Applications", "Poultry & High-Yielding Dairy Cows"],
      ["Packaging", "25 kg Bag"],
      ["Shelf Life", "5 Years in Original Packaging"],
      ["Manufacturer & Marketer", "SAGL Life Science Pvt. Ltd."],
    ],
    benefitsHeading:
      "High-Purity Amino Acid Nutrition. Better Formulation Control. Consistent Quality.",
    applicationsEyebrow: "Animal nutrition applications",
    applicationsHeading:
      "Targeted Sulfur-Containing Amino Acid Nutrition for Poultry & Dairy Animals",
    advantageEyebrow: "The AMINO LIMIT 99% advantage",
    advantageHeading: "A High-Purity Amino Acid Ingredient with Defined Quality Parameters",
    compositionHeading: "Declared Specifications",
    dosageLabel: "Feed inclusion",
    finalCtaCopy: "High Purity. Essential Amino Acid Nutrition. Quality Assured.",
    benefits: [
      {
        index: "01",
        title: "High Purity",
        heading: "Greater Than 99% Assay Specification",
        description:
          "AMINO LIMIT 99% has an assay specification greater than 99%, making purity one of its defining product characteristics.",
      },
      {
        index: "02",
        title: "Essential Amino Acid Nutrition",
        heading: "Supporting Balanced Feed Formulations",
        description:
          "Sulfur-containing amino acids play important roles in animal protein nutrition. AMINO LIMIT 99% is intended for applications where these amino acids may be limiting.",
      },
      {
        index: "03",
        title: "Poultry Nutrition",
        heading: "Supporting Amino Acid Requirements",
        description:
          "Poultry diets require appropriate amino acid balance to support normal growth, development and productive performance. AMINO LIMIT 99% is positioned for poultry feed applications.",
      },
      {
        index: "04",
        title: "High-Yielding Dairy Cow Nutrition",
        heading: "Addressing Important Nutritional Requirements",
        description:
          "High-yielding dairy cows have substantial nutritional demands associated with milk production. Sulfur-containing amino acids may be limiting in their diets, making appropriate amino acid balance an important consideration.",
      },
      {
        index: "05",
        title: "Controlled Manufacturing",
        heading: "Manufactured Under Defined Quality Systems",
        description:
          "The product is manufactured through a controlled chemical synthesis process under an appropriate quality-control system.",
      },
      {
        index: "06",
        title: "High Product Quality",
        heading: "Defined Analytical Specifications",
        description:
          "The product leaflet specifies assay, infrared spectrometry, loss on drying, residue on ignition, heavy metal limits, transmittance, sulfate content, melting point and pH value.",
      },
      {
        index: "07",
        title: "Consistent Product Specifications",
        heading: "Supporting Feed Ingredient Selection",
        description:
          "Defined quality parameters help manufacturers and feed formulators evaluate product specifications.",
      },
      {
        index: "08",
        title: "Long Shelf Life",
        heading: "Convenient Bulk Storage",
        description:
          "AMINO LIMIT 99% has a declared shelf life of 5 years in its original packaging, subject to the specified storage conditions.",
      },
    ],
    detailedApplications: [
      {
        title: "Poultry",
        heading: "Supporting Balanced Poultry Feed Formulations",
        description:
          "Poultry diets require an appropriate balance of essential amino acids to support growth, tissue development and productive performance. Sulfur-containing amino acids are important components of poultry protein nutrition.",
        focus: [
          "Essential amino acid supplementation",
          "Balanced poultry feed formulations",
          "Protein nutrition",
          "Amino acid requirement management",
          "Feed formulation optimization",
          "Nutritional balance",
        ],
      },
      {
        title: "High-Yielding Dairy Cows",
        heading: "Supporting Nutritional Requirements During Lactation",
        description:
          "High-yielding dairy cows have increased nutritional demands because of their milk production requirements. Sulfur-containing amino acids may be limiting in dairy diets, so their appropriate inclusion is an important consideration, and formulation should be handled by a dairy nutritionist.",
        focus: [
          "Sulfur-containing amino acid nutrition",
          "Dairy feed formulation",
          "Protein nutrition",
          "Amino acid balance",
          "Lactation nutrition",
          "High-yielding dairy animal feeding programs",
        ],
      },
      {
        title: "Feed Manufacturing Applications",
        heading: "Ingredient for Verified Feed Formulations",
        description:
          "AMINO LIMIT 99% can be considered as an ingredient in appropriate feed formulation processes where its identity, purity, inclusion rate and nutritional specifications have been verified. Use according to the verified amino acid identity, nutritional formulation and the manufacturer's technical recommendations.",
        focus: [
          "Poultry feed manufacturing",
          "Dairy feed formulation",
          "Animal nutrition premixes",
          "Specialized feed formulations",
          "Commercial animal feed production",
        ],
      },
    ],
    formula: [
      {
        title: "Essential Sulfur-Containing Amino Acid",
        heading: "Core Ingredient",
        description:
          "The leaflet does not state the chemical name. The exact chemical identity, molecular formula, CAS number and analytical method must be confirmed through the manufacturer's technical data sheet and CoA.",
      },
    ],
    compositionGroups: [
      {
        title: "Product Quality Standards",
        rows: [
          ["Appearance", "White to Yellowish Powder"],
          ["Assay (%)", "Greater than 99% (NT) (TLC)"],
          ["Infrared Spectrometry", "Conformed"],
          ["Loss on Drying (%)", "Less than 0.2"],
          ["Residue on Ignition (%)", "Less than 0.1"],
          ["Heavy Metal (Pb)", "Less than 10 ppm"],
          ["Transmittance (%)", "Greater than 95 (1.0 cm, 2N HCl, 430 nm)"],
          ["Sulfate (SO4)", "Less than 200 ppm"],
          ["Melting Point (C)", "284 (Decomposition), Lit."],
          ["pH Value", "5.6-6.1 (1% Solution, 25 C)"],
        ],
      },
      {
        title: "Product Specifications",
        rows: [
          ["Packaging", "25 kg Bag"],
          ["Shelf Life", "5 Years in Original Packaging"],
          ["Manufacturing Method", "Chemical Synthesis"],
          ["Raw Material Source", "Petrochemical Raw Materials"],
        ],
      },
    ],
    compositionNote:
      "These are the specifications declared on the supplied leaflet. The leaflet does not state the chemical name, molecular formula, CAS number or analytical method. Confirm the exact chemical identity, molecular formula, CAS number, analytical method and feed-grade specifications through the manufacturer's technical data sheet and CoA before use.",
    dosageTable: [
      {
        category: "Feed inclusion",
        quantity:
          "Not specified on supplied leaflet; to be determined by a qualified animal nutritionist",
      },
      { category: "Animal-wise dosage", quantity: "Not specified on supplied leaflet" },
      {
        category: "Inclusion percentage / daily quantity",
        quantity: "Not specified on supplied leaflet",
      },
    ],
    dosageGuidance: [
      "The supplied leaflet gives no animal-wise dosage, inclusion percentage or daily quantity. Inclusion is to be determined by a qualified animal nutritionist after verifying chemical identity and the complete formulation.",
      "Step 01 - Verify product identity.",
      "Step 02 - Assess nutritional requirements.",
      "Step 03 - Analyze the existing feed composition.",
      "Step 04 - Determine the inclusion level.",
      "Step 05 - Ensure uniform mixing per the feed manufacturer's validated procedure.",
      "Step 06 - Monitor feed quality.",
      "There is no universal inclusion rate. Confirm identity first, follow the manufacturer's technical recommendations and consult a nutritionist.",
      "Use appropriate mixing and storage practices. Do not administer directly to animals unless specifically instructed by the manufacturer.",
    ],
    advantages: [
      {
        title: "Greater than 99% Assay",
        description: "Assay specification of greater than 99% (NT) (TLC).",
      },
      {
        title: "Essential Sulfur-Containing Amino Acid",
        description: "Positioned for diets where sulfur-containing amino acids may be limiting.",
      },
      {
        title: "Controlled Chemical Synthesis",
        description: "Produced through a controlled chemical reaction process.",
      },
      {
        title: "Defined Manufacturing Process",
        description: "A complete reaction process described in the product leaflet.",
      },
      {
        title: "Quality-Controlled Manufacturing",
        description: "Manufactured under an appropriate quality-control system.",
      },
      {
        title: "Conformed Infrared Spectrometry",
        description: "Infrared spectrometry is declared as conformed.",
      },
      { title: "Low Loss on Drying", description: "Loss on drying of less than 0.2%." },
      {
        title: "Controlled Heavy Metal Specification",
        description: "Heavy metal (Pb) of less than 10 ppm.",
      },
      {
        title: "Defined Analytical Parameters",
        description:
          "Transmittance, sulfate, melting point and pH value are specified alongside other parameters.",
      },
      { title: "Bulk Packaging", description: "Supplied in 25 kg bags." },
      {
        title: "Extended Shelf Life",
        description: "Declared 5-year shelf life in original packaging.",
      },
    ],
    handling: [
      "Store in a cool, dry, ventilated warehouse.",
      "Protect from static electricity, moisture and rain.",
      "Keep in the original packaging.",
      "Follow validated feed manufacturing procedures and verify specifications.",
      "Maintain batch records, consult nutritionists and monitor the finished feed.",
      "Follow standard industrial powder-handling precautions and use protective equipment per the manufacturer's safety documentation.",
      "Check manufacturing and expiry dates.",
      "Not for human use.",
    ],
    faqs: [
      {
        question: "What is AMINO LIMIT 99%?",
        answer:
          "AMINO LIMIT 99% is a Sarvadhenu high-purity essential sulfur-containing amino acid for poultry and high-yielding dairy cow feed applications.",
      },
      {
        question: "What is the purity of AMINO LIMIT 99%?",
        answer:
          "The assay specification is greater than 99% (NT) (TLC), as printed on the leaflet.",
      },
      {
        question: "What is the main application of AMINO LIMIT 99%?",
        answer:
          "It is positioned for animal feed formulations where sulfur-containing amino acids may be limiting.",
      },
      {
        question: "Which animals is AMINO LIMIT 99% intended for?",
        answer: "Poultry and high-yielding dairy cows.",
      },
      {
        question: "What is a sulfur-containing amino acid?",
        answer:
          "It is an amino acid that contains sulfur and contributes to protein synthesis and normal metabolic functions in animal nutrition.",
      },
      {
        question: "Why are sulfur-containing amino acids important for poultry?",
        answer:
          "Poultry diets require appropriate amino acid balance to support growth, development and productive performance, and sulfur-containing amino acids are part of that balance.",
      },
      {
        question: "Why are sulfur-containing amino acids important for dairy cows?",
        answer:
          "High-yielding dairy cows have substantial nutritional demands for milk production, and sulfur-containing amino acids may be limiting in their diets.",
      },
      {
        question: "How is AMINO LIMIT 99% manufactured?",
        answer: "Through chemical synthesis using petrochemical raw materials.",
      },
      {
        question: "What manufacturing process is described?",
        answer:
          "The leaflet describes a complete chemical reaction designed to obtain a high-quality product without unreacted materials remaining.",
      },
      {
        question: "How is quality controlled?",
        answer:
          "The product is manufactured under an appropriate quality-control system with defined quality parameters.",
      },
      {
        question: "What is the appearance of AMINO LIMIT 99%?",
        answer: "White to yellowish powder.",
      },
      {
        question: "What is the loss on drying?",
        answer: "Less than 0.2%.",
      },
      {
        question: "What is the residue on ignition?",
        answer: "Less than 0.1%.",
      },
      {
        question: "What is the heavy metal specification?",
        answer: "Heavy metal (Pb) of less than 10 ppm.",
      },
      {
        question: "What is the sulfate specification?",
        answer: "Sulfate (SO4) of less than 200 ppm.",
      },
      {
        question: "What is the pH value?",
        answer: "5.6-6.1 (1% solution, 25 C).",
      },
      {
        question: "What is the melting point?",
        answer: "284 C (decomposition), as cited in the literature on the leaflet.",
      },
      {
        question: "What is the packaging of AMINO LIMIT 99%?",
        answer: "25 kg bag.",
      },
      {
        question: "What is the shelf life?",
        answer: "5 years in original packaging, subject to the specified storage conditions.",
      },
      {
        question: "How should AMINO LIMIT 99% be stored?",
        answer:
          "Store in a cool, dry, ventilated warehouse, protected from static electricity, moisture and rain, in the original packaging.",
      },
      {
        question: "What is the recommended dosage?",
        answer:
          "The leaflet does not specify a dosage. Consult the manufacturer's documentation and a qualified animal nutritionist.",
      },
      {
        question: "Does the leaflet mention the exact chemical identity?",
        answer:
          "No. The leaflet does not give the chemical name. Confirm the identity, molecular formula, CAS number and analytical method through the manufacturer's technical data sheet and CoA.",
      },
      {
        question: "Can it be used in commercial feed manufacturing?",
        answer:
          "Only after confirming its identity, regulatory suitability and feed-grade specifications with the manufacturer.",
      },
      {
        question: "What does greater than 99% assay mean?",
        answer:
          "It is the declared purity specification of the product, reported as greater than 99% (NT) (TLC). Confirm the analytical method through the manufacturer's CoA.",
      },
      {
        question: "Who manufactures AMINO LIMIT 99%?",
        answer:
          "SAGL Life Science Pvt. Ltd. manufactures and markets it under the Sarvadhenu brand.",
      },
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
