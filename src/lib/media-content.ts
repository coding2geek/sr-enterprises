export type MediaCategory =
  | "factory"
  | "machines"
  | "fruit-covers"
  | "leno-bags"
  | "pp-woven-bags"
  | "printing"
  | "dispatch"
  | "usage";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: MediaCategory;
  heightClass: string;
};

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  category: MediaCategory;
  poster?: string;
  youtubeId?: string;
  duration?: string;
  featured?: boolean;
};

export const GALLERY_FILTERS: { label: string; category: MediaCategory | "all" }[] = [
  { label: "All", category: "all" },
  { label: "Factory", category: "factory" },
  { label: "Machines", category: "machines" },
  { label: "Fruit Covers", category: "fruit-covers" },
  { label: "Leno Bags", category: "leno-bags" },
  { label: "PP Woven Bags", category: "pp-woven-bags" },
  { label: "Dispatch", category: "dispatch" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "fruit-cover-sample",
    src: "/images/fruit-covers-product.jpeg",
    alt: "Fruit protection covers manufactured by SR Enterprises for mango and orchard crops",
    title: "Fruit protection covers",
    caption: "Replace with a close-up of current fruit cover stock, size labels and packed bundles.",
    category: "fruit-covers",
    heightClass: "h-64",
  },
  {
    id: "covered-mango-result",
    src: "/images/protected-mango.jpg",
    alt: "Mango protected with fruit cover to reduce insect marks and sun damage",
    title: "Fruit cover result",
    caption: "Use real orchard photos showing covers on fruit and final harvest quality.",
    category: "usage",
    heightClass: "h-72",
  },
  {
    id: "leno-bag-vegetables",
    src: "/images/leno-mesh-bags-vegetables.jpeg",
    alt: "Leno mesh bags for onions potatoes garlic and vegetable transport",
    title: "Leno mesh bags",
    caption: "Add photos of filled bags, empty bags, color variants and mesh roll stock.",
    category: "leno-bags",
    heightClass: "h-80",
  },
  {
    id: "pp-woven-rice-bags",
    src: "/images/pp-woven-bags-rice.jpeg",
    alt: "PP woven rice bags stacked for bulk dispatch from SR Enterprises",
    title: "PP woven bags",
    caption: "Replace with stacked printed bags from actual customer batches.",
    category: "pp-woven-bags",
    heightClass: "h-64",
  },
  {
    id: "pp-woven-fertilizer-bags",
    src: "/images/pp-woven-bags-fertilizer.jpeg",
    alt: "Printed PP woven bags for fertilizer grain and industrial packaging",
    title: "Printed PP woven bags",
    caption: "Show custom print clarity, stitching, lamination and load capacity examples.",
    category: "pp-woven-bags",
    heightClass: "h-72",
  },
  {
    id: "leno-machine",
    src: "/images/machine-leno.jpeg",
    alt: "Leno mesh bag manufacturing machine inside SR Enterprises factory",
    title: "Leno machine",
    caption: "Replace with machine working photos and short running videos.",
    category: "machines",
    heightClass: "h-72",
  },
  {
    id: "printing-machine",
    src: "/images/printer-for-pp-woven.jpg",
    alt: "Printing machine used for custom branded PP woven packaging bags",
    title: "Printing setup",
    caption: "Add customer-safe photos of print plates, ink setup and finished print samples.",
    category: "printing",
    heightClass: "h-80",
  },
  {
    id: "factory-process-placeholder",
    src: "/images/machine-paper-bag.jpeg",
    alt: "Factory process area for manufacturing agricultural packaging bags",
    title: "Factory process",
    caption: "Use wide photos of the factory place, raw material flow and working team.",
    category: "factory",
    heightClass: "h-60",
  },
  {
    id: "dispatch-placeholder",
    src: "/images/gallery-2.jpeg",
    alt: "Agricultural packaging bags prepared for dispatch to buyers across India",
    title: "Packing and dispatch",
    caption: "Replace with truck loading, bundle packing, labels and dispatch photos.",
    category: "dispatch",
    heightClass: "h-80",
  },
  {
    id: "quality-check-placeholder",
    src: "/images/gallery-3.jpeg",
    alt: "Quality check for fruit covers and packaging bags before dispatch",
    title: "Quality check",
    caption: "Add photos of weight, stitch, size and print checks before dispatch.",
    category: "factory",
    heightClass: "h-64",
  },
  {
    id: "cover-bundle-placeholder",
    src: "/images/cover-1.jpeg",
    alt: "Fruit cover bundles ready for farmer orders and sample requests",
    title: "Cover bundles",
    caption: "Show actual bundles, carton packing and SKU labels when available.",
    category: "fruit-covers",
    heightClass: "h-72",
  },
  {
    id: "leno-roll-placeholder",
    src: "/images/leno-mesh-rolls.jpeg",
    alt: "Leno mesh rolls used to manufacture vegetable packaging bags",
    title: "Leno mesh rolls",
    caption: "Add color variants, roll width and production stock photos.",
    category: "leno-bags",
    heightClass: "h-64",
  },
];

export const FACTORY_VIDEOS: VideoItem[] = [
  {
    id: "factory-walkthrough",
    title: "Factory walkthrough",
    description: "Show the factory place, machine layout, raw material area and finished goods area.",
    category: "factory",
    duration: "2 min",
    featured: true,
    poster: "/images/machine-paper-bag.jpeg",
  },
  {
    id: "leno-machine-working",
    title: "Leno mesh machine working",
    description: "Short video of mesh production, roll handling and bag conversion.",
    category: "machines",
    duration: "45 sec",
    poster: "/images/machine-leno.jpeg",
  },
  {
    id: "pp-woven-production",
    title: "PP woven bag production",
    description: "Show weaving, cutting, stitching and finished PP woven bag bundles.",
    category: "machines",
    duration: "60 sec",
    poster: "/images/pp-woven-bags-rice.jpeg",
  },
  {
    id: "custom-printing",
    title: "Custom printing process",
    description: "Show print setup, color checks and finished branded PP woven bags.",
    category: "printing",
    duration: "45 sec",
    poster: "/images/printer-for-pp-woven.jpg",
  },
  {
    id: "fruit-cover-packing",
    title: "Fruit cover packing",
    description: "Show sorting, counting, bundling and sample packing for fruit covers.",
    category: "fruit-covers",
    duration: "45 sec",
    poster: "/images/fruit-covers-product.jpeg",
  },
  {
    id: "dispatch-loading",
    title: "Packing and dispatch",
    description: "Show order labels, bundle stacking, truck loading and dispatch checks.",
    category: "dispatch",
    duration: "60 sec",
    poster: "/images/gallery-2.jpeg",
  },
];

export const HOME_MEDIA_HIGHLIGHTS = GALLERY_IMAGES.slice(0, 6);
