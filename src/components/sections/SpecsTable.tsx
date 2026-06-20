import { Button, SectionHeader } from "@/components/ui";
import { buildWhatsAppUrl, PRODUCTS } from "@/lib/constants";

const productMeta: Record<string, { bestFor: string; customPrint: string; headerClass: string }> = {
  "fruit-covers": {
    bestFor: "Orchards, fruits",
    customPrint: "Limited",
    headerClass: "bg-sage/30",
  },
  "leno-bags": {
    bestFor: "Vegetables, onions",
    customPrint: "Any color",
    headerClass: "bg-mint/10",
  },
  "pp-woven-bags": {
    bestFor: "Grains, fertilizer",
    customPrint: "Full color print",
    headerClass: "bg-amber/10",
  },
};

const rows = [
  { label: "Best for", value: (id: string) => productMeta[id].bestFor },
  { label: "Sizes available", value: (_id: string, sizes: string[]) => sizes.join(", ") },
  { label: "MOQ", value: (_id: string, _sizes: string[], moq: string) => moq },
  { label: "Custom print", value: (id: string) => productMeta[id].customPrint },
  { label: "Delivery time", value: (_id: string, _sizes: string[], _moq: string, deliveryTime: string) => deliveryTime },
  { label: "Free sample", value: () => "Available on request" },
];

export default function SpecsTable() {
  return (
    <section className="bg-white px-6 py-16" id="specs">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          align="center"
          eyebrow="COMPARE PRODUCTS"
          lead="Every product's key specs in one view."
          title="Which one fits your need?"
        />

        <div className="mt-8 hidden overflow-hidden rounded-2xl border-[0.5px] border-[#E5E7EB] md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="w-48 bg-white p-4 text-xs font-semibold uppercase text-text-muted">Spec</th>
                {PRODUCTS.map((product) => (
                  <th className={`p-4 font-display text-sm font-semibold text-forest ${productMeta[product.id].headerClass}`} key={product.id}>
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr className={index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"} key={row.label}>
                  <th className="p-4 text-xs font-medium uppercase text-text-muted">{row.label}</th>
                  {PRODUCTS.map((product) => (
                    <td className="p-4 text-sm text-ink" key={product.id}>
                      {row.value(product.id, product.sizes, product.moq, product.deliveryTime)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-white">
                <th className="p-4 text-xs font-medium uppercase text-text-muted">Enquire</th>
                {PRODUCTS.map((product) => (
                  <td className="p-4" key={product.id}>
                    <Button
                      href={buildWhatsAppUrl(`Hi, I want a quote for ${product.name}`)}
                      rel="noopener noreferrer"
                      size="sm"
                      target="_blank"
                      variant="whatsapp"
                    >
                      Enquire
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
          {PRODUCTS.map((product) => (
            <article className="rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white p-4" key={product.id}>
              <h3 className="font-display text-base font-semibold text-forest">{product.name}</h3>
              <div className="mt-4 space-y-3">
                {rows.map((row) => (
                  <div className="flex justify-between gap-4 border-b border-[#E5E7EB] pb-2 last:border-0" key={row.label}>
                    <span className="text-xs text-text-muted">{row.label}</span>
                    <span className="max-w-[58%] text-right text-sm font-medium text-ink">
                      {row.value(product.id, product.sizes, product.moq, product.deliveryTime)}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                className="mt-4 w-full"
                href={buildWhatsAppUrl(`Hi, I want a quote for ${product.name}`)}
                rel="noopener noreferrer"
                target="_blank"
                variant="whatsapp"
              >
                Enquire
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
