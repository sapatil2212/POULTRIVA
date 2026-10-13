import layers from "@/assets/layers.jpg";
import water from "@/assets/water.jpg";
import feed from "@/assets/feed.jpg";

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  relatedProduct: string;
  body: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "calcium-in-poultry-nutrition",
    title: "Understanding Calcium's Role in Poultry Nutrition",
    category: "Mineral Nutrition",
    excerpt:
      "Why calcium matters for skeletal development and the particular considerations for laying birds.",
    image: layers,
    imageAlt: "Laying hens with fresh brown eggs",
    relatedProduct: "calconova",
    body: [
      {
        paragraphs: [
          "Calcium is one of the most important minerals in poultry diets. It contributes to skeletal structure, muscle function, nerve signalling and — in laying birds — eggshell formation.",
        ],
      },
      {
        heading: "Skeletal requirements",
        paragraphs: [
          "Growing birds need adequate calcium, in appropriate balance with phosphorus and vitamin D, to build a sound skeleton. Imbalances in any of these can affect bone development.",
        ],
      },
      {
        heading: "Considerations for laying birds",
        paragraphs: [
          "Laying hens have a considerably higher calcium requirement than growing birds because a large amount of calcium is deposited into each eggshell. Particle size, timing of supply and the overall mineral balance of the ration all influence how calcium is used.",
        ],
      },
      {
        heading: "Practical points",
        list: [
          "Formulate rations according to bird type and production stage.",
          "Consider calcium together with phosphorus and vitamin D.",
          "Use supplements according to the approved label.",
          "Seek advice from a poultry nutritionist or veterinarian.",
        ],
      },
    ],
  },
  {
    slug: "drinking-water-quality-in-poultry",
    title: "Why Drinking-Water Quality Matters in Poultry Farming",
    category: "Water Management",
    excerpt:
      "Water supply, cleanliness, mineral content and pH monitoring as part of everyday flock management.",
    image: water,
    imageAlt: "Poultry drinking-water nipple line",
    relatedProduct: "aquacyd",
    body: [
      {
        paragraphs: [
          "Birds typically consume more water than feed, which makes water one of the most important — and most overlooked — nutrients on a poultry farm.",
        ],
      },
      {
        heading: "Supply and cleanliness",
        paragraphs: [
          "A reliable supply of clean, fresh water is essential. Drinker lines, tanks and nipples can accumulate biofilm and deposits, so routine cleaning and flushing form part of good practice.",
        ],
      },
      {
        heading: "Mineral quality and pH",
        paragraphs: [
          "Water sources vary in hardness, mineral content and pH. Periodic testing helps farm managers understand their water and make informed decisions about treatment or acidification.",
        ],
      },
      {
        heading: "Responsible water management",
        list: [
          "Test water periodically at the source and at the drinker end.",
          "Clean and flush drinker systems on a regular schedule.",
          "Use water acidifiers only according to label directions.",
          "Consult a professional when changing water-treatment programs.",
        ],
      },
    ],
  },
  {
    slug: "digestive-management-in-poultry",
    title: "The Importance of Digestive Management in Poultry",
    category: "Digestive Care",
    excerpt:
      "How balanced feed, digestive conditions and hygiene come together in sound nutritional management.",
    image: feed,
    imageAlt: "Poultry feed grains in a wooden scoop",
    relatedProduct: "gutmax",
    body: [
      {
        paragraphs: [
          "The digestive system is where feed becomes nutrition. Supporting a stable digestive environment is therefore central to good poultry management.",
        ],
      },
      {
        heading: "Balanced feed",
        paragraphs: [
          "Feed quality, ingredient selection and consistent formulation all influence digestive conditions. Sudden changes in feed can be disruptive, so transitions are best managed gradually.",
        ],
      },
      {
        heading: "Hygiene and environment",
        paragraphs: [
          "Litter condition, ventilation, biosecurity and clean water all interact with digestive health. Nutritional tools work best within a well-managed environment.",
        ],
      },
      {
        heading: "Responsible use of acidifiers",
        list: [
          "Treat acidifiers as one part of a broader management approach.",
          "Follow the approved label for any feed additive.",
          "Monitor flock performance and consult professionals.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
