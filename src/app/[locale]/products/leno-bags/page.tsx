import type { Metadata } from "next";
import ProductPageTemplate from "@/components/pages/ProductPageTemplate";
import { PRODUCTS } from "@/lib/constants";

const product = PRODUCTS.find((item) => item.id === "leno-bags")!;

export const metadata: Metadata = {
  title: `${product.name} | SR Enterprises`,
  description: product.shortDesc,
};

export default function LenoBagsPage() {
  return <ProductPageTemplate product={product} />;
}
