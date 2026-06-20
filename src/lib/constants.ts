export const WHATSAPP_NUMBER = "919985636699";
export const PHONE_1 = "+91 99856 36699";
export const PHONE_2 = "+91 95056 36699";
export const EMAIL = "srenterprises.mfg24@gmail.com";
export const ADDRESS =
  "Burri Venkateswarao Gardens, Vijayawada-Nuzivid Road, Pothavarappadu, Agiripalli Mandal, Eluru District, 521212, Andhra Pradesh, India";

export type Crop = {
  emoji: string;
  label: string;
};

export type FruitCoverSizeRow = {
  size: string;
  suitableFor: string;
  gsm: string;
  color: string;
  piecesPerBox: string;
};

export type LenoBagSizeRow = {
  capacity: string;
  dimensions: string;
  meshType: string;
  colors: string;
  moq: string;
};

export type PpWovenBagSizeRow = {
  capacity: string;
  dimensions: string;
  weightGsm: string;
  printOptions: string;
  moq: string;
};

export type ProductSizeRow = FruitCoverSizeRow | LenoBagSizeRow | PpWovenBagSizeRow;

export type FaqItem = {
  question: string;
  answer: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  teluguName: string;
  hindiName: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  moq: string;
  deliveryTime: string;
  sizes: string[];
  sizesTable: ProductSizeRow[];
  crops: Crop[];
  hasBeforeAfter: boolean;
  hasCustomizationGuide: boolean;
  hasVideo?: boolean;
  images: string[];
  faq: FaqItem[];
  testimonialIds: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  productUsed: string;
  language: "en" | "te" | "hi";
  avatarInitials: string;
  videoUrl?: string;
  category: string[];
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ramesh-kumar",
    language: "te",
    quote: "మా మామిడి తోటకి ఈ కవర్లు వాడిన తర్వాత, ధర రెట్టింపు అయింది. పురుగులు లేవు, మచ్చలు లేవు.",
    name: "Ramesh Kumar",
    role: "Mango farmer",
    location: "Krishna dist.",
    productUsed: "Fruit covers",
    avatarInitials: "RK",
    videoUrl: "dQw4w9WgXcQ",
    category: ["mango-farmers"],
  },
  {
    id: "suresh-patel",
    language: "en",
    quote:
      "We order 5,000 PP bags monthly for our rice mill. Quality is consistent, delivery is always on time.",
    name: "Suresh Patel",
    role: "Owner, Patel Rice Mills",
    location: "Nellore",
    productUsed: "PP woven bags",
    avatarInitials: "SP",
    videoUrl: "dQw4w9WgXcQ",
    category: ["rice-mills"],
  },
  {
    id: "vinod-singh",
    language: "hi",
    quote: "प्याज़ के लिए leno bags बहुत अच्छे हैं। हवा भी जाती है और मज़बूत भी हैं। दाम भी सही।",
    name: "Vinod Singh",
    role: "Onion trader",
    location: "Maharashtra",
    productUsed: "Leno bags",
    avatarInitials: "VS",
    category: ["onion-traders"],
  },
  {
    id: "lakshmi-narayana",
    language: "te",
    quote: "కవర్లు వేసిన మామిడి కాయలు శుభ్రంగా వచ్చాయి. మార్కెట్‌లో మంచి ధర వచ్చింది.",
    name: "Lakshmi Narayana",
    role: "Mango farmer",
    location: "Eluru",
    productUsed: "Fruit covers",
    avatarInitials: "LN",
    category: ["mango-farmers"],
  },
  {
    id: "anitha-devi",
    language: "te",
    quote: "మా తోటలో పురుగు నష్టం చాలా తగ్గింది. చిన్న ఆర్డర్‌తో మొదలుపెట్టి ఇప్పుడు రెగ్యులర్‌గా తీసుకుంటున్నాం.",
    name: "Anitha Devi",
    role: "Mango farmer",
    location: "Nuzvid",
    productUsed: "Fruit covers",
    avatarInitials: "AD",
    category: ["mango-farmers"],
  },
  {
    id: "gopal-rao",
    language: "te",
    quote: "సైజ్ గైడెన్స్ బాగా ఇచ్చారు. మా మామిడి కాయలకు 8 × 10 కవర్లు సరిగ్గా సరిపోయాయి.",
    name: "Gopal Rao",
    role: "Mango farmer",
    location: "Krishna dist.",
    productUsed: "Fruit covers",
    avatarInitials: "GR",
    videoUrl: "dQw4w9WgXcQ",
    category: ["mango-farmers"],
  },
  {
    id: "prasad-reddy",
    language: "te",
    quote: "మచ్చలు తగ్గడంతో కొనుగోలుదారులు వెంటనే తీసుకున్నారు. కవర్లు ఖర్చు మొదటి పంటలోనే తిరిగి వచ్చింది.",
    name: "Prasad Reddy",
    role: "Mango farmer",
    location: "Vijayawada rural",
    productUsed: "Fruit covers",
    avatarInitials: "PR",
    category: ["mango-farmers"],
  },
  {
    id: "meera-foods",
    language: "en",
    quote: "The PP woven bags are consistent in stitch quality and print clarity. They work well for our rice dispatches.",
    name: "Meera Foods",
    role: "Rice mill owner",
    location: "Guntur",
    productUsed: "PP woven bags",
    avatarInitials: "MF",
    category: ["rice-mills"],
  },
  {
    id: "raju-rice-industries",
    language: "en",
    quote: "We needed custom printed 25kg bags with reliable delivery. SR Enterprises handled the mockup and production smoothly.",
    name: "Raju Rice Industries",
    role: "Rice mill owner",
    location: "West Godavari",
    productUsed: "PP woven bags",
    avatarInitials: "RR",
    category: ["rice-mills"],
  },
  {
    id: "arif-khan",
    language: "hi",
    quote: "प्याज़ की ढुलाई में बैग मजबूत रहे। हवा पास होती है, इसलिए माल खराब नहीं हुआ.",
    name: "Arif Khan",
    role: "Onion trader",
    location: "Nashik",
    productUsed: "Leno bags",
    avatarInitials: "AK",
    category: ["onion-traders"],
  },
  {
    id: "mahesh-grapes",
    language: "hi",
    quote: "अंगूर के लिए कवर हल्के और सांस लेने वाले हैं। पैकिंग और डिलीवरी समय पर मिली.",
    name: "Mahesh Pawar",
    role: "Grape grower",
    location: "Sangli",
    productUsed: "Fruit covers",
    avatarInitials: "MP",
    videoUrl: "dQw4w9WgXcQ",
    category: ["grape-growers"],
  },
  {
    id: "sunita-grapes",
    language: "en",
    quote: "We tried fruit covers for a small grape block first. The clean bunches gave us confidence to order more.",
    name: "Sunita Jadhav",
    role: "Grape grower",
    location: "Maharashtra",
    productUsed: "Fruit covers",
    avatarInitials: "SJ",
    category: ["grape-growers"],
  },
  {
    id: "kisan-fertilisers",
    language: "en",
    quote: "Their PP woven bags handle stacking well and the print looks professional. Good support for bulk dispatch planning.",
    name: "Kisan Fertilisers",
    role: "Procurement manager",
    location: "Hyderabad",
    productUsed: "PP woven bags",
    avatarInitials: "KF",
    category: ["fertilizer-companies"],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "fruit-covers",
    slug: "fruit-covers",
    name: "Fruit Protection Covers",
    teluguName: "పండ్ల రక్షణ కవర్లు",
    hindiName: "फल सुरक्षा कवर",
    category: "Fruit protection",
    shortDesc:
      "Breathable reusable covers for protecting fruit from pests without chemicals.",
    fullDesc:
      "Fruit Protection Covers help farmers protect mangoes and other fruits from insects, sun marks, and dust while the fruit is still on the tree. The breathable material supports natural growth without chemicals and can be reused across multiple harvests.",
    features: ["pest-free", "reusable", "breathable", "no chemicals"],
    moq: "1,000 pieces",
    deliveryTime: "7-10 days",
    sizes: ["5 × 7 in", "8 × 10 in", "10 × 12 in", "12 × 14 in"],
    sizesTable: [
      {
        size: "5 × 7 in",
        suitableFor: "Small mango, orange",
        gsm: "17 GSM",
        color: "White",
        piecesPerBox: "5,000",
      },
      {
        size: "8 × 10 in",
        suitableFor: "Medium mango, pomegranate",
        gsm: "17 GSM",
        color: "White",
        piecesPerBox: "3,000",
      },
      {
        size: "10 × 12 in",
        suitableFor: "Large mango, papaya",
        gsm: "19 GSM",
        color: "White",
        piecesPerBox: "2,000",
      },
      {
        size: "12 × 14 in",
        suitableFor: "Jackfruit, watermelon",
        gsm: "19 GSM",
        color: "White",
        piecesPerBox: "1,500",
      },
    ],
    crops: [
      { emoji: "🥭", label: "Mango" },
      { emoji: "🍇", label: "Grapes" },
      { emoji: "🍊", label: "Orange" },
      { emoji: "🐉", label: "Dragon Fruit" },
      { emoji: "🔴", label: "Pomegranate" },
      { emoji: "🍐", label: "Guava" },
    ],
    hasBeforeAfter: true,
    hasCustomizationGuide: false,
    hasVideo: true,
    images: [
      "/images/fruit-covers-product.jpeg",
      "/images/protected-mango.jpg",
      "/images/mango-result.jpeg",
      "/images/cover-1.jpeg",
    ],
    faq: [
      {
        question: "Are your covers reusable?",
        answer: "Yes - 2 to 3 harvest seasons typically.",
      },
      {
        question: "Do I need to remove them before harvest?",
        answer: "No, they come off easily.",
      },
      {
        question: "How many covers per acre?",
        answer: "Roughly 400-600 for mango, depends on tree maturity.",
      },
      {
        question: "Are they safe for organic farming?",
        answer: "Yes, zero chemicals used.",
      },
      {
        question: "What's your minimum order?",
        answer: "1,000 pieces - we ship small orders too.",
      },
    ],
    testimonialIds: ["Ramesh Kumar"],
  },
  {
    id: "leno-bags",
    slug: "leno-bags",
    name: "Leno Mesh Bags",
    teluguName: "లెనో మెష్ బ్యాగులు",
    hindiName: "लेनो मेश बैग",
    category: "Vegetable packaging",
    shortDesc:
      "Strong ventilated mesh bags for onions, potatoes, vegetables, and garlic.",
    fullDesc:
      "Leno Mesh Bags are designed for vegetable traders and wholesalers who need airflow, strength, and quick handling. The open mesh keeps onions, potatoes, garlic, and peas ventilated during storage and transport.",
    features: ["ventilated", "strong", "any color", "custom sizes"],
    moq: "5,000 pieces",
    deliveryTime: "10-15 days",
    sizes: ["25kg capacity", "40kg capacity", "50kg capacity"],
    sizesTable: [
      {
        capacity: "25 kg",
        dimensions: "50 × 75 cm",
        meshType: "Extruded",
        colors: "Red, orange, yellow, green, purple",
        moq: "5,000",
      },
      {
        capacity: "40 kg",
        dimensions: "60 × 90 cm",
        meshType: "Extruded",
        colors: "All colors",
        moq: "5,000",
      },
      {
        capacity: "50 kg",
        dimensions: "65 × 100 cm",
        meshType: "Extruded",
        colors: "All colors",
        moq: "5,000",
      },
    ],
    crops: [
      { emoji: "🧅", label: "Onion" },
      { emoji: "🥔", label: "Potato" },
      { emoji: "🟢", label: "Green peas" },
      { emoji: "🧄", label: "Garlic" },
    ],
    hasBeforeAfter: false,
    hasCustomizationGuide: false,
    images: [
      "/images/leno-mesh-bags-vegetables.jpeg",
      "/images/leno-mesh-rolls.jpeg",
      "/images/machine-leno.jpeg",
      "/images/gallery-2.jpeg",
    ],
    faq: [
      {
        question: "Can I get them in custom colors?",
        answer: "Yes, any color - contact us with swatch.",
      },
      {
        question: "How much weight can they hold?",
        answer: "Depends on mesh - our 50kg bags are tested to 75kg.",
      },
      {
        question: "Are they reusable?",
        answer: "Yes, multiple times - wash and dry between uses.",
      },
      {
        question: "Can you print our logo?",
        answer: "Limited printing available - contact for options.",
      },
      {
        question: "What's the minimum order?",
        answer: "5,000 pieces.",
      },
    ],
    testimonialIds: ["Vinod Singh"],
  },
  {
    id: "pp-woven-bags",
    slug: "pp-woven-bags",
    name: "PP Woven Bags",
    teluguName: "పిపి వోవెన్ బ్యాగులు",
    hindiName: "पीपी वोवन बैग",
    category: "Bulk packaging",
    shortDesc:
      "Heavy-duty bulk packaging bags with custom printing for industrial supply.",
    fullDesc:
      "PP Woven Bags are built for bulk packaging where strength, stackability, and brand printing matter. They are suitable for rice mills, fertilizer companies, grain traders, cement suppliers, and other high-volume buyers.",
    features: ["heavy-duty", "custom printing", "bulk-ready"],
    moq: "10,000 pieces",
    deliveryTime: "15-20 days",
    sizes: [
      "5kg capacity",
      "10kg capacity",
      "25kg capacity",
      "50kg capacity",
      "100kg capacity",
    ],
    sizesTable: [
      {
        capacity: "5 kg",
        dimensions: "28 × 45 cm",
        weightGsm: "60 GSM",
        printOptions: "1-3 color print",
        moq: "10,000",
      },
      {
        capacity: "25 kg",
        dimensions: "50 × 75 cm",
        weightGsm: "70 GSM",
        printOptions: "Full color print",
        moq: "10,000",
      },
      {
        capacity: "50 kg",
        dimensions: "65 × 100 cm",
        weightGsm: "80 GSM",
        printOptions: "Full color print",
        moq: "10,000",
      },
      {
        capacity: "100 kg",
        dimensions: "75 × 115 cm",
        weightGsm: "90 GSM",
        printOptions: "Full color print",
        moq: "5,000",
      },
    ],
    crops: [
      { emoji: "🌾", label: "Rice" },
      { emoji: "🌽", label: "Maize" },
      { emoji: "🧪", label: "Fertilizer" },
      { emoji: "🏗️", label: "Cement" },
      { emoji: "🍚", label: "Sugar" },
    ],
    hasBeforeAfter: false,
    hasCustomizationGuide: true,
    images: [
      "/images/pp-woven-bags-rice.jpeg",
      "/images/pp-woven-bags-fertilizer.jpeg",
      "/images/printer-for-pp-woven.jpg",
      "/images/machine-paper-bag.jpeg",
    ],
    faq: [
      {
        question: "Can I customize the print?",
        answer: "Yes - full color printing, send us your design.",
      },
      {
        question: "How long does custom printing take?",
        answer: "15-20 days from approval.",
      },
      {
        question: "What's the minimum for custom-printed bags?",
        answer: "10,000 pieces.",
      },
      {
        question: "Do you do laminated bags?",
        answer: "Yes, BOPP lamination available.",
      },
      {
        question: "What weights can they hold?",
        answer: "From 5kg to 100kg, depending on specs.",
      },
    ],
    testimonialIds: ["Suresh Patel"],
  },
];
