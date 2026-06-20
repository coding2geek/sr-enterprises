import { getTranslations } from "next-intl/server";
import { Button, ProductCard, SectionHeader } from "@/components/ui";
import { PRODUCTS } from "@/lib/constants";

const productImages: Record<string, string> = {
  "fruit-covers": "/images/fruit-covers-product.jpeg",
  "leno-bags": "/images/leno-mesh-bags-vegetables.jpeg",
  "pp-woven-bags": "/images/pp-woven-bags-rice.jpeg",
};

export default async function ProductsOverview() {
  const t = await getTranslations("home.productsOverview");

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader eyebrow={t("eyebrow")} lead={t("lead")} title={t("title")} />
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard
              features={product.features.slice(0, 3)}
              id={product.id}
              imagePath={productImages[product.id] ?? ""}
              key={product.id}
              moq={product.moq}
              name={product.name}
              hindiName={product.hindiName}
              shortDesc={product.shortDesc}
              sizes={product.sizes.join(", ")}
              slug={product.slug}
              teluguName={product.teluguName}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="#specs" variant="ghost">
            {t("detailsLink")}
          </Button>
        </div>
      </div>
    </section>
  );
}
