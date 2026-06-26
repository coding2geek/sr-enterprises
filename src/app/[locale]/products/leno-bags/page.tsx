import type { Metadata } from "next";
import ProductPageTemplate from "@/components/pages/ProductPageTemplate";
import { PRODUCTS } from "@/lib/constants";
import { SITE } from "@/lib/site-content";

const product = PRODUCTS.find((item) => item.id === "leno-bags")!;

export const metadata: Metadata = {
  title: "Leno Mesh Bags Manufacturer | Onion & Vegetable Mesh Bags",
  description:
    "Order leno mesh bags for onions, potatoes, garlic and vegetables from SR Enterprises. Strong ventilated bags with color and size options for bulk buyers.",
  keywords: [
    "leno mesh bags manufacturer",
    "onion mesh bags supplier",
    "vegetable mesh bags India",
    "potato leno bags",
    "agricultural mesh bags manufacturer",
  ],
  alternates: {
    canonical: "/en/products/leno-bags",
  },
};

export default function LenoBagsPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((image) => `${SITE.url}${image}`),
    description: product.fullDesc,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    category: product.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }}
      />
      <ProductPageTemplate product={product} />
    </>
  );
}
