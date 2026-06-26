import { ADDRESS, EMAIL, PHONE_1, PHONE_2, WHATSAPP_NUMBER } from "./constants";

export const SITE_URL = "https://srenterprisesmfg.vercel.app";

export const SITE = {
  name: "SR Enterprises",
  shortName: "SR Enterprises",
  tagline: "Fruit covers, leno mesh bags and PP woven bags manufacturer",
  description:
    "SR Enterprises manufactures fruit protection covers, leno mesh bags and PP woven bags for farmers, traders, mills and bulk packaging buyers across India.",
  url: SITE_URL,
  phonePrimary: PHONE_1,
  phoneSecondary: PHONE_2,
  whatsappNumber: WHATSAPP_NUMBER,
  email: EMAIL,
  address: ADDRESS,
  businessHours: "Mon-Sat, 9 AM to 6 PM",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Pothavarappadu,Agiripalli+Mandal,Eluru+District,Andhra+Pradesh,521212&output=embed",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
  socials: [
    { label: "Facebook", href: "" },
    { label: "Instagram", href: "" },
    { label: "YouTube", href: "" },
  ],
} as const;

export const PRODUCT_NAV_LINKS = [
  { label: "Fruit Protection Covers", shortLabel: "Fruit Covers", href: "/products/fruit-covers" },
  { label: "Leno Mesh Bags", shortLabel: "Leno Bags", href: "/products/leno-bags" },
  { label: "PP Woven Bags", shortLabel: "PP Woven Bags", href: "/products/pp-woven-bags" },
] as const;

export const COMPANY_NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Factory tour", href: "/factory" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const DELIVERY_STATES = [
  "Andhra Pradesh",
  "Telangana",
  "Karnataka",
  "Tamil Nadu",
  "Maharashtra",
  "Gujarat",
  "Rajasthan",
  "Madhya Pradesh",
  "Uttar Pradesh",
  "Punjab",
  "West Bengal",
  "Kerala",
  "Odisha",
  "Chhattisgarh",
  "Haryana",
] as const;

export const TRUST_METRICS = [
  { label: "Product lines", value: "3" },
  { label: "Delivery coverage", value: "India" },
  { label: "Quote support", value: "WhatsApp" },
  { label: "Custom options", value: "Print + size" },
] as const;

export const TRUST_BADGES = [
  { label: "GST details", note: "Add registration number after verification" },
  { label: "MSME details", note: "Add Udyam number after verification" },
  { label: "Factory location", note: "Pothavarappadu, Andhra Pradesh" },
  { label: "Sample support", note: "Available on request" },
] as const;

export const SEO_KEYWORDS = [
  "fruit protection covers manufacturer",
  "mango fruit covers supplier India",
  "fruit cover bags for farming",
  "leno mesh bags manufacturer",
  "onion mesh bags supplier",
  "vegetable leno bags India",
  "PP woven bags manufacturer",
  "custom printed PP woven bags",
  "agricultural packaging bags supplier",
  "packaging bags manufacturer Andhra Pradesh",
] as const;
