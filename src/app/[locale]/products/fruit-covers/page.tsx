import type { Metadata } from "next";
import ProductPageTemplate from "@/components/pages/ProductPageTemplate";
import { PRODUCTS } from "@/lib/constants";

const product = PRODUCTS.find((item) => item.id === "fruit-covers")!;

export const metadata: Metadata = {
  title: `${product.name} | SR Enterprises`,
  description: product.shortDesc,
};

export default function FruitCoversPage() {
  return <ProductPageTemplate product={product} />;
}
