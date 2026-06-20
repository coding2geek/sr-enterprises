import { Check } from "lucide-react";
import { Button } from "@/components/ui";
import { buildWhatsAppUrl, PHONE_1 } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="bg-forest px-6 py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-mint/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Manufacturer · Since 2026
          </div>
          <h1 className="mt-5 max-w-[620px] font-display text-[28px] font-semibold leading-tight text-white lg:text-[40px]">
            Quality packaging for every <span className="text-mint">harvest</span>.
          </h1>
          <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-white/80">
            Fruit covers, leno mesh bags, and PP woven bags — made right here in Andhra Pradesh.
            Trusted by farmers and businesses across India.
          </p>

          <div className="mt-6 flex flex-wrap gap-5">
            {[
              ["3+", "Product lines"],
              ["All India", "Delivery"],
              ["Custom", "Print & Sizing"],
            ].map(([value, label], index) => (
              <div className={index === 0 ? "" : "border-l border-white/20 pl-5"} key={label}>
                <div className="font-display text-lg font-semibold leading-none text-mint">{value}</div>
                <div className="mt-1 text-xs text-white/60">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={buildWhatsAppUrl("Hi, I'm interested in your products")} rel="noopener noreferrer" target="_blank" variant="whatsapp">
              WhatsApp us
            </Button>
            <Button href="#enquiry" variant="amber">
              Get a quote →
            </Button>
            <Button href={`tel:${PHONE_1.replace(/\s/g, "")}`} inverted variant="outline">
              Call now
            </Button>
          </div>
        </div>

        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-leaf">
          <div className="absolute inset-0 bg-gradient-to-br from-leaf via-mint to-forest" />
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center font-display text-2xl font-semibold text-white/85">
            SR Enterprises Factory
          </div>
          <div className="absolute left-4 top-4 rounded bg-forest/85 px-2.5 py-1 text-[10px] font-medium text-white">
            ● Live from factory
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-2.5 rounded-xl bg-white p-3 text-left">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-leaf">
              <Check aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-ink">Free sample available</div>
              <div className="text-[11px] text-text-muted">WhatsApp to request</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
