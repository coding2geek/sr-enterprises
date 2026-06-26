import type { Metadata } from "next";
import ProductPageTemplate from "@/components/pages/ProductPageTemplate";
import { PRODUCTS } from "@/lib/constants";
import { SITE } from "@/lib/site-content";

const product = PRODUCTS.find((item) => item.id === "pp-woven-bags")!;

export const metadata: Metadata = {
  title: "PP Woven Bags Manufacturer | Custom Printed Packaging Bags",
  description:
    "Order PP woven bags and custom printed packaging bags for rice, grains, fertilizer and industrial supply from SR Enterprises. Bulk sizes and print options available.",
  keywords: [
    "PP woven bags manufacturer",
    "custom printed PP woven bags",
    "rice bag manufacturer India",
    "fertilizer packaging bags",
    "bulk packaging bags Andhra Pradesh",
  ],
  alternates: {
    canonical: "/en/products/pp-woven-bags",
  },
};

export default function PpWovenBagsPage() {
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
