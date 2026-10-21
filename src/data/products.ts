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

export type ProductBenefit = { index: string; title: string; heading: string; description: string };
export type ProductApplication = { title: string; heading: string; description: string; focus: string[] };
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
    | "selenova";
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
  /** Optional rich content — rendered on the detail page only when present. */
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
};

const DISCLAIMER =
  "Product information on this website is for general reference. Always follow the approved product label and seek guidance from a qualified veterinarian or poultry nutrition professional before use.";

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
    composition: "Methionine activity, lysine HCl, choline chloride and selected minerals (see composition below)",
    packSizes: "1 Litre",
    dosage: "5–20 mL per 100 birds by growth stage (label-declared)",
    storage: "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
    disclaimer: DISCLAIMER,
    seoTitle: "AMINOVA GOLD | Poultry Amino Acid & Mineral Supplement | Poultriva",
    seoDescription:
      "Discover Poultriva AMINOVA GOLD, a liquid amino acid feed supplement containing methionine activity, lysine, choline, and minerals for poultry nutrition.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Essential Amino Acids. Stronger Nutritional Foundations. Better Growth Potential.",
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
      "Step 01 — Identify the growth stage: determine the flock's age and production category.",
      "Step 02 — Review the complete diet: assess existing methionine, lysine, choline, and mineral intake from the complete feed and other supplements.",
      "Step 03 — Confirm the appropriate amount following the manufacturer's validated dosage instructions and recommendations from a qualified veterinarian or poultry nutritionist.",
      "Step 04 — Use an approved administration method: the label does not clearly specify the dilution volume, route of administration, or dosing frequency, so these must be established before administration.",
      "Step 05 — Monitor the feeding program, evaluating flock condition, feed intake, production stage, and nutritional requirements under professional guidance.",
      "Excessive or imbalanced amino acid and mineral supplementation can adversely affect poultry nutrition, with particular attention to the total intake of trace minerals such as copper and cobalt. The label quantities are reproduced for reference and should not be interpreted as a complete independently validated dosing schedule.",
    ],
    advantages: [
      {
        title: "Multiple Nutritional Components",
        description: "Combines methionine activity, lysine hydrochloride, choline chloride, and selected minerals.",
      },
      {
        title: "Amino Acid-Focused Formulation",
        description: "Provides nutritional components relevant to protein synthesis, growth, and tissue maintenance.",
      },
      {
        title: "Choline-Based Metabolic Support",
        description: "Includes choline chloride, which contributes to normal liver lipid metabolism and cellular function.",
      },
      {
        title: "Growth-Stage Application",
        description: "The label provides differentiated quantities for early growth, later growth, and laying birds.",
      },
      {
        title: "Liquid Feed Supplement",
        description: "Available in a liquid format for measured administration according to confirmed product instructions.",
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
      "CALCONOVA by Poultriva is a liquid calcium and nutritional feed supplement developed to provide a combination of macro-minerals, trace minerals, vitamins, methionine and carbohydrates for poultry nutrition. Calcium, phosphorus and magnesium support normal skeletal formation, mineralization and metabolic processes, while Vitamin D helps birds utilize calcium and phosphorus — complementing professionally balanced feed during growth, maintenance and production.",
    image: calconovaImg,
    imageAlt:
      "Poultriva CALCONOVA 1 litre liquid calcium and mineral feed supplement with magnesium, phosphorus, methionine, and vitamins for poultry nutrition.",
    applications: [
      "Calcium, mineral and skeletal nutritional support",
      "Eggshell and bone mineral nutrition across production stages",
      "Use alongside a balanced mineral ration and professional guidance",
    ],
    composition: "Calcium, phosphorus, magnesium, trace minerals, methionine, carbohydrates and vitamins (see composition below)",
    packSizes: "1 Litre",
    dosage: "Obtain manufacturer-approved dosage (no dosage shown on supplied label)",
    storage: "Keep in a cool place away from direct sunlight; exact storage conditions require manufacturer confirmation.",
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
      "Step 01 — Identify the poultry category: determine the age, production stage, and nutritional requirements of the flock.",
      "Step 02 — Review existing feed composition: evaluate current calcium, phosphorus, magnesium, vitamin D, copper, and other nutrient contributions.",
      "Step 03 — Obtain the approved dosage from the manufacturer and have it reviewed by a qualified poultry nutritionist or veterinarian.",
      "Step 04 — Verify administration compatibility: confirm whether the formulation is approved for drinking-water administration, feed incorporation, or another method.",
      "Step 05 — Monitor nutritional balance and flock condition according to professional guidance.",
      "Avoid excessive calcium and phosphorus supplementation, account for the Vitamin D already present in the complete feed, confirm the elemental copper concentration before administration, and do not combine multiple concentrated mineral supplements without professional guidance.",
    ],
    advantages: [
      {
        title: "Calcium-Rich Formulation",
        description: "Provides a declared 55,000 mg of calcium per litre.",
      },
      {
        title: "Calcium & Phosphorus Combination",
        description: "Supplies two minerals essential for normal skeletal development and mineral physiology.",
      },
      {
        title: "Magnesium & Trace Minerals",
        description: "Includes magnesium and selected trace elements involved in enzymatic and cellular functions.",
      },
      {
        title: "Vitamin-Enriched Nutrition",
        description: "Contains declared Vitamins A, B, D, and H, with exact vitamin forms requiring technical verification.",
      },
      {
        title: "Methionine & Carbohydrates",
        description: "Includes additional nutritional components associated with protein and energy metabolism.",
      },
      {
        title: "Commercial Liquid Pack",
        description: "Supplied in a convenient 1 litre container for professionally guided animal nutrition applications.",
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
    storage: "Store in a cool, dry place away from direct sunlight; handle as a potentially corrosive concentrate.",
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
      "Step 01 — Test the source water: measure pH, alkalinity, hardness, and relevant microbial parameters.",
      "Step 02 — Verify product instructions: confirm the formulation, approved dosing procedure, and application with the manufacturer or veterinarian.",
      "Step 03 — Prepare a controlled dilution: only trained personnel should handle and dilute the concentrate using suitable protective equipment and manufacturer-approved procedures.",
      "Step 04 — Measure the final water pH after dosing rather than assuming a result from the volume added.",
      "Step 05 — Monitor water intake and flock response, adjusting the approved management plan if necessary.",
      "Do not mix the concentrate directly with chlorine-based sanitizers, bleach, or other water-treatment chemicals; confirm compatibility before use alongside vaccines, medicines, or other supplements. Excessively acidic water can reduce palatability, damage equipment, and affect flock performance.",
    ],
    advantages: [
      {
        title: "Organic Acid-Based Formulation",
        description: "Contains propionic, acetic, benzoic, and sorbic acids as declared on the label.",
      },
      {
        title: "Targeted Acidification Application",
        description: "Positioned for professionally managed drinking-water pH adjustment.",
      },
      {
        title: "Liquid Format",
        description: "Designed for measured dilution and application using an approved dosing process.",
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
        description: "Intended to complement routine water testing, hygiene, and poultry-management programs.",
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
        answer: "The declared organic acids include propionic acid, acetic acid, benzoic acid, and sorbic acid.",
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
          "Compatibility must be confirmed before use. Acidification may affect the stability or performance of certain medications and water-administered products, and changes in water chemistry may interfere with certain drinking-water vaccines — consult the vaccine manufacturer and veterinarian.",
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
    composition: "Organic acid blend with phosphoric acid and calcium propionate (see composition below)",
    packSizes: "25 kg",
    dosage: "1 kg per metric tonne of feed (label-declared)",
    storage: "Store in a cool, dry place away from direct sunlight; protect from moisture and contamination.",
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
    dosageTable: [{ category: "Complete feed (label-declared)", quantity: "1 kg per metric tonne (MT) of feed" }],
    dosageGuidance: [
      "GUTMAX is labeled for feed incorporation rather than drinking-water administration.",
      "Step 01 — Assess the feed formulation: review the feed's nutrient composition, buffering properties, and existing acidifying ingredients.",
      "Step 02 — Confirm the inclusion rate: have the manufacturer or qualified feed nutritionist validate the rate for the intended bird category and feed type.",
      "Step 03 — Prepare a premix when required, using an appropriate premixing procedure to help distribute the product uniformly.",
      "Step 04 — Incorporate into complete feed using suitable feed-manufacturing equipment and validated mixing procedures.",
      "Step 05 — Review feed quality and confirm the finished feed meets nutritional and safety requirements.",
      "Step 06 — Monitor the feeding program, observing bird condition, feed intake, and production outcomes under professional flock management.",
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
        description: "Provides multiple acidifying ingredients for professionally managed feed formulations.",
      },
      {
        title: "Preservative-Related Ingredient Profile",
        description: "Contains ingredients with established preservative properties under suitable conditions.",
      },
      {
        title: "Commercial Feed Application",
        description: "Supplied in a 25 kg pack intended for animal feed-related use.",
      },
      {
        title: "Targeted Nutritional Integration",
        description: "Can be considered as part of broader feed-quality and digestive nutritional programs.",
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
          "No. Based on its supplied composition, GUTMAX is a multi-acid feed acidifier — not a probiotic, digestive enzyme supplement, antibiotic, or veterinary medicine, and it cannot be assumed to prevent or treat disease.",
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
    storage: "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
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
      { category: "Broilers", quantity: "15–20 mL per 100 birds" },
      { category: "Layers", quantity: "15–20 mL per 100 birds" },
      { category: "Breeders", quantity: "20–25 mL per 100 birds" },
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
        answer: "No. Avivita Gold is labeled as a liquid feed supplement, not a medicine or antibiotic.",
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
    storage: "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
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
      "Step 01 — Evaluate nutritional requirements: assess the choline contribution from the complete feed and determine whether additional supplementation is necessary.",
      "Step 02 — Calculate the appropriate inclusion based on the feed formulation and declared choline chloride concentration.",
      "Step 03 — Ensure uniform feed mixing using suitable manufacturing and premixing procedures to distribute the supplement evenly throughout the ration.",
      "Step 04 — Monitor the feeding program and evaluate the flock's condition with professional guidance.",
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
    dosage: "2–5 mL per 100 birds daily in drinking water",
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
    dosageTable: [{ category: "Hens & Chicks", quantity: "2–5 mL per 100 birds daily (in drinking water)" }],
    dosageGuidance: [
      "Step 01 — Determine flock requirements: assess the poultry category, age, feed composition, and nutritional requirements with professional guidance.",
      "Step 02 — Measure the supplement according to the label and veterinarian-approved supplementation plan.",
      "Step 03 — Mix with drinking water: disperse the measured quantity into the drinking-water system using a manufacturer-approved dilution and mixing procedure.",
      "Step 04 — Follow professional guidance to ensure supplementation is appropriate for the flock's existing Vitamin A intake.",
      "Vitamin A is a fat-soluble vitamin and excessive supplementation can be harmful. Consider the total Vitamin A supplied by the complete feed, premixes, water supplements and other products before administration.",
      "The supplied label does not specify a water dilution volume or treatment duration beyond daily administration. Confirm these details with the manufacturer or a qualified veterinarian.",
    ],
    advantages: [
      {
        title: "Concentrated Vitamin A Source",
        description: "Provides a declared 100,000 IU of Vitamin A per mL for measured supplementation.",
      },
      {
        title: "Water-Miscible Formulation",
        description: "Designed for administration through poultry drinking water according to the product's directions.",
      },
      {
        title: "Targeted Nutrient Delivery",
        description: "Focuses specifically on Vitamin A rather than combining multiple unrelated supplemental ingredients.",
      },
      {
        title: "Support Across Physiological Functions",
        description: "Supplies a nutrient important for normal vision, immune activity, growth, tissue health, and reproductive processes.",
      },
      {
        title: "Application for Hens & Chicks",
        description: "Labeled for poultry supplementation involving hens and chicks.",
      },
      {
        title: "Practical Nutritional Integration",
        description: "Can complement well-balanced poultry diets under appropriate veterinary or nutritional supervision.",
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
        answer: "According to the supplied label, each millilitre contains 100,000 IU of Vitamin A.",
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
          "The label directs administration through drinking water, with a stated quantity of 2–5 mL per 100 birds daily. Confirm the appropriate dilution and suitability of the dose before use.",
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
    dosage: "10–20 mL per 100 birds for 7–20 days, or as directed by a veterinarian (label-declared)",
    storage: "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
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
      { category: "All poultry (label-declared)", quantity: "10–20 mL per 100 birds for 7–20 days, or as directed by a veterinarian" },
    ],
    dosageGuidance: [
      "This is a transcription of the label, not an independently verified dosing recommendation.",
      "Step 01 — Confirm the formula: ensure the actual ingredient concentrations and stated units have been verified by the manufacturer.",
      "Step 02 — Seek veterinary guidance: the veterinarian should assess the bird category, flock condition, existing diet, and possible renal or metabolic problems.",
      "Step 03 — Confirm the administration route: the label does not clearly state whether the product must be delivered through drinking water, directly, or by another method.",
      "Step 04 — Follow an approved treatment or nutrition plan, using only the dose, dilution, frequency, and duration approved for the specific product and flock.",
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
          "The label states 10–20 mL per 100 birds for 7–20 days or as directed by a veterinarian. Because the composition contains apparent errors, the dose should not be used until the formulation and instructions are confirmed.",
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
      "VETACEPLUS by Poultriva is a liquid multivitamin feed supplement developed to provide essential vitamin nutrition for poultry. The formulation combines Vitamins A, D3, E and C, which participate in several important physiological functions — from supporting healthy vision and epithelial tissues to maintaining calcium metabolism, antioxidant defenses and immune function — and is intended for convenient administration through drinking water under veterinary guidance.",
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
    dosage: "5–10 mL per 100 birds for one week every month, or as advised by a veterinarian (label-declared)",
    storage: "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing.",
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
      { category: "All poultry (label-declared)", quantity: "5–10 mL per 100 birds for one week every month, or as advised by a veterinarian" },
    ],
    dosageGuidance: [
      "VETACEPLUS is labeled for administration through poultry drinking water.",
      "Step 01 — Assess nutritional requirements: review the bird category, age, feed composition, and existing vitamin supplementation program.",
      "Step 02 — Confirm the appropriate dose: a qualified veterinarian should establish the correct quantity and administration frequency for the flock.",
      "Step 03 — Prepare drinking water: mix the manufacturer-approved amount into drinking water using suitable measuring and mixing equipment.",
      "Step 04 — Follow the supplementation schedule, using only the verified administration duration and frequency suitable for the specific flock.",
      "Step 05 — Monitor flock condition, reviewing drinking-water intake, flock health, and the overall nutritional program.",
      "Vitamins A and D3 can cause toxicity when administered in excessive amounts, so the total vitamin intake from commercial feed, premixes, supplements and other sources must be considered. The label does not specify the daily administration frequency during the one-week period or the dilution volume; confirm these details before use.",
    ],
    advantages: [
      {
        title: "Four Essential Vitamins",
        description: "Combines Vitamins A, D3, E, and C in a single liquid nutritional formulation.",
      },
      {
        title: "Complementary Nutritional Functions",
        description:
          "Includes vitamins involved in vision, skeletal development, antioxidant protection, and normal immune function.",
      },
      {
        title: "Drinking-Water Administration",
        description: "Designed for use through drinking water in accordance with approved instructions.",
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
        description: "Supplied in a 1 litre pack for poultry farming and animal nutrition supply requirements.",
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
        answer: "The product contains Vitamins A, D3, E, and C in the quantities declared on the supplied label.",
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
          "The supplied label states 5–10 mL per 100 birds for one week every month, or as advised by a veterinarian. Confirm the precise daily schedule and dilution before administration.",
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
      "CYNTREX is a Poultriva-branded product whose packaging describes chlortetracycline calcium complex technology. Chlortetracycline (CTC) is a tetracycline-class antibiotic used in certain authorized veterinary formulations, and the CYNTREX label emphasizes a water-insoluble calcium-complex form (referred to as Chlortech-T) with claimed stability advantages. CYNTREX should be evaluated as a potentially antimicrobial veterinary formulation — not an ordinary nutritional supplement — and used only where appropriately authorized and directed by a qualified veterinarian.",
    image: cyntrexImg,
    imageAlt:
      "Poultriva CYNTREX product label highlighting chlortetracycline calcium complex technology, formulation stability characteristics, and veterinary feed applications.",
    applications: [
      "Veterinary feed-related applications, subject to authorization",
      "Use only under qualified veterinary direction",
      "Evaluation against approved product documentation and regulations",
    ],
    composition: "Chlortetracycline calcium complex (Chlortech-T) — see label information below",
    packSizes: "Not stated on supplied label",
    dosage: "Not stated on label — obtain from approved veterinary documentation",
    storage: "Store in a cool, dry place away from direct sunlight. Shelf life 24 months from manufacturing (as printed).",
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
          "The supplied label describes Chlortech-T as essentially insoluble in water — a characteristic relevant to formulation development that must be considered when evaluating permitted administration methods.",
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
      "Step 01 — Confirm product identity: verify the actual chlortetracycline ingredient, concentration, and product registration.",
      "Step 02 — Establish the approved indication: determine the veterinary condition for which the product is legally authorized.",
      "Step 03 — Assess animal requirements: consider the target species, age, condition, and relevant clinical findings.",
      "Step 04 — Follow the approved treatment protocol as determined by a qualified veterinarian in accordance with authorized product instructions.",
      "Step 05 — Follow residue controls: observe withdrawal periods and any restrictions involving laying birds or eggs intended for human consumption.",
      "Step 06 — Maintain treatment records documenting administration, batch information, veterinary instructions and withdrawal completion dates.",
      "Do not use CYNTREX based solely on the website description or current packaging image. Its low-water-solubility claim does not establish suitability for drinking-water administration, and its dosage, route, duration, target species and food-safety restrictions require verified manufacturer documentation.",
    ],
    advantages: [
      {
        title: "Calcium Complex-Based Technology",
        description: "Built around a chlortetracycline calcium complex form distinct from conventional CTC hydrochloride.",
      },
      {
        title: "Formulation Chemistry Focus",
        description: "Presented around specialized physical characteristics including low water solubility and an alkaline pH range.",
      },
      {
        title: "Processing-Stability Positioning",
        description: "Label-claimed stability during extrusion and pelleting, pending manufacturer verification.",
      },
      {
        title: "Manufacturing Quality Emphasis",
        description: "Highlights microbial fermentation and quality control in the referenced production process.",
      },
      {
        title: "Veterinary Application Positioning",
        description: "Intended for authorized veterinary feed-related applications under professional direction.",
      },
      {
        title: "Technical Documentation Orientation",
        description: "Positioned for professional evaluation against verified specifications and regulatory authorization.",
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
        answer: "The packaging makes that comparison, but product-specific stability studies are needed to substantiate it.",
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
    composition: "Electrolyte salts, Vitamin C, carbohydrates and a microbial ingredient (see composition below)",
    packSizes: "1 kg",
    dosage: "1 kg per MT of feed, or 1 g in 2 litres of water for 3–5 days (label-declared)",
    storage: "Store in a cool, dry place away from direct sunlight; protect from moisture to help maintain microbial viability.",
    disclaimer: DISCLAIMER,
    seoTitle: "BIOLYTE | Poultry Electrolyte & Vitamin C Supplement | Poultriva",
    seoDescription:
      "Discover Poultriva BIOLYTE, a poultry electrolyte feed supplement containing essential mineral salts, Vitamin C, and nutritional ingredients for flock management.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Balanced Electrolytes. Better Hydration. Stronger Flock Vitality.",
    heroIntro: [
      "Support your flock through demanding environmental and management conditions with BIOLYTE, a specialized poultry feed supplement formulated with essential electrolyte salts, Vitamin C, carbohydrates, and a declared microbial component.",
      "Designed to complement balanced poultry nutrition, BIOLYTE provides ingredients involved in normal fluid regulation, electrolyte balance, acid-base physiology, and energy-related metabolism — whether managing seasonal temperature fluctuations, transportation, or routine poultry production.",
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
      { category: "Label duration", quantity: "3–5 days" },
    ],
    dosageGuidance: [
      "The BIOLYTE packaging states that the product may be incorporated into poultry feed or drinking water.",
      "Step 01 — Assess flock requirements: consider the poultry category, environmental conditions, water intake, feed composition, and health status.",
      "Step 02 — Select the appropriate route: confirm whether feed incorporation or drinking-water supplementation is appropriate under the manufacturer's approved instructions.",
      "Step 03 — Verify the dose is suitable for the flock's overall electrolyte intake and nutritional condition.",
      "Step 04 — Prepare the supplement: for drinking water use clean water and suitable measuring and mixing procedures; for feed incorporation ensure uniform distribution through the finished feed.",
      "Step 05 — Monitor the flock, observing drinking behavior, feed intake, droppings, and general condition throughout the supplementation period.",
      "The supplied label also suggests doubling the recommended level in cases of water and electrolyte imbalance. This instruction requires veterinary verification before use — electrolyte abnormalities can arise from different conditions, and increasing sodium, potassium, bicarbonate, or magnesium without assessment may worsen an imbalance. The product is not a substitute for veterinary treatment of dehydration or other medical emergencies.",
    ],
    advantages: [
      {
        title: "Comprehensive Electrolyte Blend",
        description: "Includes multiple sodium, potassium, calcium, and magnesium-containing ingredients.",
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
        description: "Includes a declared viable microbial component, subject to identity and potency verification.",
      },
      {
        title: "Feed & Water Applications",
        description: "The label lists both feed incorporation and drinking-water administration.",
      },
      {
        title: "Commercial 1 kg Pack",
        description: "Provided in a powder format suitable for measured farm use under confirmed instructions.",
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
          "The label lists 1 g per 2 litres of drinking water for 3–5 days, or 1 kg per metric tonne of feed. The correct application and uniform mixing should be confirmed with the manufacturer or veterinarian.",
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
        question: "What are the pack size and shelf life, and is BIOLYTE an antibiotic or medicine?",
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
    dosage: "200 g per MT of feed, or 5 g per 200 birds (50 for broilers) in water (label-declared)",
    storage: "Store in a cool, dry place away from direct sunlight; protect from moisture and heat.",
    disclaimer: DISCLAIMER,
    seoTitle: "SELENOVA | Vitamin E & Selenium Poultry Supplement | Poultriva",
    seoDescription:
      "Discover Poultriva SELENOVA, a Vitamin E, selenium, biotin and amino acid feed supplement for poultry antioxidant, immune and reproductive nutrition.",
    tagline: "Science in Nutrition. Excellence in Performance.",
    heroHeading: "Powerful Antioxidant Nutrition. Stronger Flock Foundations. Better Performance Potential.",
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
      { category: "Chicks, Growers & Layers — Feed", quantity: "200 g per metric tonne of feed" },
      { category: "Chicks, Growers & Layers — Water", quantity: "5 g per 200 birds" },
      { category: "Broilers — Water", quantity: "5 g per 50 birds" },
    ],
    dosageGuidance: [
      "SELENOVA is labeled for incorporation into feed or administration through drinking water, and the manufacturer directs that its use follow recommendations from a veterinarian or nutritionist.",
      "Step 01 — Identify the poultry category: determine bird age, production stage, and existing nutritional requirements.",
      "Step 02 — Evaluate the complete feed: consider Vitamin E and selenium already present in commercial feeds, premixes, and other supplements.",
      "Step 03 — Verify the appropriate dosage for the specific flock with a veterinarian or poultry nutritionist.",
      "Step 04 — Select the authorized application method (feed incorporation or drinking water) appropriate for the product formulation.",
      "Step 05 — Ensure uniform distribution using suitable measuring and mixing equipment to prevent uneven nutrient concentrations.",
      "Step 06 — Monitor flock condition, reviewing overall nutrition, feed intake, drinking-water consumption, and general condition.",
      "Selenium has a relatively narrow margin between nutritional adequacy and potentially harmful excess, so the total selenium supplied through the complete diet and all supplements must be considered. The label does not specify the drinking-water dilution volume, frequency, or duration — do not assume the per-bird quantity can be repeated daily without confirming the manufacturer's full instructions.",
    ],
    advantages: [
      {
        title: "Vitamin E & Selenium Combination",
        description: "Supplies two essential nutrients associated with complementary antioxidant functions.",
      },
      {
        title: "Biotin-Enriched Formulation",
        description: "Includes biotin for enzyme-dependent metabolism and normal tissue maintenance.",
      },
      {
        title: "Essential Amino Acid Components",
        description: "Contains lysine, methionine, and tryptophan as additional nutritional ingredients.",
      },
      {
        title: "Multiple Poultry Categories",
        description: "The label provides usage information for chicks, growers, layers, and broilers.",
      },
      {
        title: "Feed & Water Administration",
        description: "Offers two label-listed application routes, subject to verified product instructions.",
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
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
