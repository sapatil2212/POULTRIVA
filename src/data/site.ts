export const SITE = {
  name: "POULTRIVA",
  tagline: "Nutrition • Health • Performance",
  company: "SAGL Life Sciences Pvt. Ltd.",
  phone: "+91 88550 15320",
  phoneHref: "tel:+918855015320",
  email: "sagllifescience@gmail.com",
  whatsapp: "918855015320",
  address:
    "First Floor, ABH Landmark, Office No. 101, Ashoka Marg, Opp. New Sagar Sweets, Kalpataru Nagar, Nashik, Maharashtra, India",
  city: "Nashik, Maharashtra, India",
};

export const DEFAULT_WA_MESSAGE =
  "Hello POULTRIVA, I would like to enquire about your poultry nutrition products.";

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productWaMessage(name: string) {
  return `Hello POULTRIVA, I would like more information about ${name}. Please share product specifications and availability.`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/quality", label: "Quality" },
  { to: "/resources", label: "Resources" },
  { to: "/contact-us", label: "Contact" },
] as const;
