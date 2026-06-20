import { Button, FadeInWhenVisible, ProductCard, SectionHeader } from "@/components/ui";
import { PRODUCTS } from "@/lib/constants";

const productImages: Record<string, string> = {
  "fruit-covers": "/images/fruit-covers-product.jpeg",
  "leno-bags": "/images/leno-mesh-bags-vegetables.jpeg",
  "pp-woven-bags": "/images/pp-woven-bags-rice.jpeg",
};

export default function ProductsOverview() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="WHAT WE MAKE"
          lead="From orchard to warehouse — protective covers for fruits, mesh bags for vegetables, and heavy-duty woven sacks for grains and fertilizer."
          title="Three products, built for every need."
        />
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <FadeInWhenVisible delay={index * 0.08} key={product.id}>
              <ProductCard
                features={product.features.slice(0, 3)}
                id={product.id}
                imagePath={productImages[product.id] ?? ""}
                moq={product.moq}
                name={product.name}
                shortDesc={product.shortDesc}
                sizes={product.sizes.join(", ")}
                slug={product.slug}
                teluguName={product.teluguName}
              />
            </FadeInWhenVisible>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="#specs" variant="ghost">
            See detailed specs for all products →
          </Button>
        </div>
      </div>
    </section>
  );
}
