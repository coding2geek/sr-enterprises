export type CustomerStory = {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  productUsed: string;
  avatarInitials: string;
  category: string[];
  isPlaceholder: boolean;
  videoTitle?: string;
};

export const TESTIMONIAL_FILTERS = [
  { label: "All stories", category: "all" },
  { label: "Mango farmers", category: "mango-farmers" },
  { label: "Onion traders", category: "onion-traders" },
  { label: "Rice mills", category: "rice-mills" },
  { label: "Fertilizer buyers", category: "fertilizer-companies" },
  { label: "Vegetable wholesalers", category: "vegetable-wholesalers" },
] as const;

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    id: "mango-farmer-placeholder",
    name: "Mango Farmer",
    role: "Fruit cover buyer",
    location: "Andhra Pradesh",
    quote:
      "We used fruit protection covers to reduce insect marks and sun damage on mangoes. The clean fruit was easier to sort and sell.",
    productUsed: "Fruit Protection Covers",
    avatarInitials: "MF",
    category: ["mango-farmers"],
    isPlaceholder: true,
    videoTitle: "Mango farmer story placeholder",
  },
  {
    id: "onion-trader-placeholder",
    name: "Onion Trader",
    role: "Vegetable trader",
    location: "Maharashtra",
    quote:
      "The leno mesh bags helped us move onions with better airflow during loading, storage and transport.",
    productUsed: "Leno Mesh Bags",
    avatarInitials: "OT",
    category: ["onion-traders", "vegetable-wholesalers"],
    isPlaceholder: true,
  },
  {
    id: "rice-mill-placeholder",
    name: "Rice Mill Buyer",
    role: "Bulk packaging buyer",
    location: "Telangana",
    quote:
      "We needed PP woven bags with consistent size, stitch strength and clear printing for regular dispatches.",
    productUsed: "PP Woven Bags",
    avatarInitials: "RM",
    category: ["rice-mills"],
    isPlaceholder: true,
  },
  {
    id: "fertilizer-buyer-placeholder",
    name: "Fertilizer Supplier",
    role: "Industrial packaging buyer",
    location: "Karnataka",
    quote:
      "Custom printed PP woven bags gave our dispatch team stronger packing and cleaner brand presentation.",
    productUsed: "Custom Printed PP Woven Bags",
    avatarInitials: "FS",
    category: ["fertilizer-companies"],
    isPlaceholder: true,
  },
  {
    id: "vegetable-wholesaler-placeholder",
    name: "Vegetable Wholesaler",
    role: "Wholesale buyer",
    location: "Tamil Nadu",
    quote:
      "Leno mesh bags made counting, stacking and transport simpler for our vegetable market supply.",
    productUsed: "Leno Mesh Bags",
    avatarInitials: "VW",
    category: ["vegetable-wholesalers"],
    isPlaceholder: true,
  },
];
