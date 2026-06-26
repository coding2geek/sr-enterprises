import type { Metadata } from "next";
import ProductPageTemplate from "@/components/pages/ProductPageTemplate";
import { PRODUCTS } from "@/lib/constants";
import { SITE } from "@/lib/site-content";

const product = PRODUCTS.find((item) => item.id === "fruit-covers")!;

export const metadata: Metadata = {
  title: "Fruit Protection Covers Manufacturer | Mango Fruit Covers",
  description:
    "Buy fruit protection covers for mango, pomegranate, guava and orchard crops from SR Enterprises. Breathable reusable fruit covers with bulk supply and custom sizes.",
  keywords: [
    "fruit protection covers manufacturer",
    "mango fruit covers supplier",
    "fruit cover bags for farming",
    "orchard fruit protection covers",
    "fruit covers Andhra Pradesh",
  ],
  alternates: {
    canonical: "/en/products/fruit-covers",
  },
};

export default function FruitCoversPage() {
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
