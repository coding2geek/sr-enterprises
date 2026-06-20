"use client";

import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BeforeAfterStatic,
  Breadcrumb,
  Button,
  SectionHeader,
  TestimonialCard,
} from "@/components/ui";
import {
  buildWhatsAppUrl,
  EMAIL,
  PHONE_1,
  type Product,
  type ProductSizeRow,
  TESTIMONIALS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProductPageTemplateProps = {
  product: Product;
};

function humanizeKey(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase())
    .replace("Gsm", "GSM")
    .replace("Moq", "MOQ");
}

function getProductUseTitle(product: Product) {
  if (product.id === "fruit-covers") {
    return "Perfect for orchards and fruit farms";
  }

  if (product.id === "leno-bags") {
    return "Perfect for vegetable traders and wholesalers";
  }

  return "Perfect for mills, fertilizer brands, and bulk buyers";
}

function getCustomOptions(product: Product) {
  if (product.id === "fruit-covers") {
    return "Size guidance";
  }

  if (product.id === "leno-bags") {
    return "Any color, custom sizes";
  }

  return "Logo and full color print";
}

function tableValue(row: ProductSizeRow, key: string) {
  return String(row[key as keyof ProductSizeRow] ?? "");
}

function ProductImage({
  alt,
  className,
  imageKey,
  src,
}: {
  alt: string;
  className?: string;
  imageKey: string;
  src: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={cn("flex h-full w-full items-center justify-center bg-gradient-to-br from-leaf via-mint to-forest p-4 text-center font-display text-white", className)}>
        {alt}
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={cn("object-cover", className)}
      fill
      key={imageKey}
      onError={() => setFailed(true)}
      sizes="(min-width: 1024px) 50vw, 100vw"
      src={src}
    />
  );
}

export default function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const activeImage = product.images[activeImageIndex] ?? product.images[0] ?? "";
  const productDisplayName =
    locale === "te" ? product.teluguName : locale === "hi" ? product.hindiName : product.name;
  const productSubtitle = locale === "en" ? product.teluguName : product.name;
  const productSubtitleClass = locale === "hi" ? "font-devanagari" : "font-telugu";
  const tableHeaders = useMemo(() => Object.keys(product.sizesTable[0] ?? {}), [product.sizesTable]);
  const matchingTestimonials = TESTIMONIALS.filter((testimonial) =>
    product.testimonialIds.includes(testimonial.name),
  );

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      setShowStickyCta(heroBottom < 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Products", href: `/${locale}` },
          { label: productDisplayName },
        ]}
      />

      <section className="mx-auto grid max-w-[1100px] gap-10 px-6 py-12 lg:grid-cols-2" ref={heroRef}>
        <div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl bg-leaf lg:h-[500px]">
            {activeImage ? (
              <ProductImage
                alt={productDisplayName}
                imageKey={`${product.id}-${activeImageIndex}`}
                src={activeImage}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-leaf to-forest font-display text-white">
                {productDisplayName}
              </div>
            )}
          </div>

          <div className="mt-3 flex gap-3">
            {product.images.map((image, index) => (
              <button
                aria-label={`Show image ${index + 1}`}
                className={cn(
                  "relative h-[70px] w-[70px] overflow-hidden rounded-lg border bg-leaf",
                  activeImageIndex === index ? "border-forest" : "border-[#E5E7EB]",
                )}
                key={image}
                onClick={() => setActiveImageIndex(index)}
                type="button"
              >
                <ProductImage
                  alt={`${productDisplayName} thumbnail ${index + 1}`}
                  imageKey={`${product.id}-thumb-${index}`}
                  src={image}
                />
                {index === 0 && product.hasVideo ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                    <Play aria-hidden="true" className="h-5 w-5 fill-current" />
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-leaf">
            {product.category}
          </div>
          <h1 className="mt-2 font-display text-[32px] font-semibold leading-tight text-forest">
            {productDisplayName}
          </h1>
          <div className={`mt-1 text-base text-leaf ${productSubtitleClass}`}>{productSubtitle}</div>

          <div className="mt-5 flex flex-wrap gap-2">
            {product.features.map((feature) => (
              <span className="rounded-full bg-sage px-3 py-1 text-xs font-medium text-leaf" key={feature}>
                {feature}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-ink">{product.fullDesc}</p>

          <div className="my-4 border-t border-[#E5E7EB]" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              ["Best for", product.crops.map((crop) => crop.label).join(", ")],
              ["Available sizes", product.sizes.join(", ")],
              ["MOQ", product.moq],
              ["Custom options", getCustomOptions(product)],
              ["Delivery time", product.deliveryTime],
              ["Free sample", "✓ Yes"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-xs text-text-muted">{label}</div>
                <div className="mt-1 text-sm font-medium text-ink">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={buildWhatsAppUrl(`Hi, I want a quote for ${product.name}`)}
              rel="noopener noreferrer"
              target="_blank"
              variant="whatsapp"
            >
              Get WhatsApp quote
            </Button>
            <Button href={`tel:${PHONE_1.replace(/\s/g, "")}`} variant="outline">
              Call
            </Button>
            <Button
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Enquiry for ${product.name}`)}`}
              variant="ghost"
            >
              Email enquiry
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader eyebrow="WORKS FOR THESE" title={getProductUseTitle(product)} />
          <div className="mt-7 grid grid-cols-3 gap-3 md:grid-cols-6">
            {product.crops.map((crop) => (
              <div className="rounded-xl bg-white p-3 text-center" key={crop.label}>
                <div className="text-[28px] leading-none">{crop.emoji}</div>
                <div className="mt-2 text-[11px] font-medium text-ink">{crop.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader eyebrow="SPECIFICATIONS" title="Available sizes & options." />

          <div className="mt-7 hidden overflow-hidden rounded-2xl border-[0.5px] border-[#E5E7EB] md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-sage/40">
                  {tableHeaders.map((header) => (
                    <th className="p-4 text-xs font-semibold uppercase text-forest" key={header}>
                      {humanizeKey(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.sizesTable.map((row, rowIndex) => (
                  <tr className={rowIndex % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"} key={rowIndex}>
                    {tableHeaders.map((header) => (
                      <td className="p-4 text-ink" key={header}>
                        {tableValue(row, header)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-7 grid gap-4 md:hidden">
            {product.sizesTable.map((row, rowIndex) => (
              <article className="rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white p-4" key={rowIndex}>
                {tableHeaders.map((header) => (
                  <div className="flex justify-between gap-4 border-b border-[#E5E7EB] py-2 last:border-0" key={header}>
                    <span className="text-xs text-text-muted">{humanizeKey(header)}</span>
                    <span className="max-w-[58%] text-right text-sm font-medium text-ink">
                      {tableValue(row, header)}
                    </span>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <p className="mt-5 text-sm text-text-muted">
            Don&apos;t see your size?{" "}
            <a
              className="font-medium text-forest underline underline-offset-4"
              href={buildWhatsAppUrl(`Hi, I need a custom size for ${product.name}`)}
              rel="noopener noreferrer"
              target="_blank"
            >
              Ask for custom sizes →
            </a>
          </p>
        </div>
      </section>

      {product.hasBeforeAfter ? (
        <section className="bg-cream px-6 py-12">
          <div className="mx-auto max-w-[900px]">
            <SectionHeader
              align="center"
              eyebrow="BEFORE / AFTER"
              title="Clean fruit is easier to sell."
            />
            <div className="mt-7">
              <BeforeAfterStatic
                leftImage="/images/unprotected-mango.jpg"
                leftLabel="Without cover"
                rightImage="/images/protected-mango.jpg"
                rightLabel="With cover"
              />
            </div>
          </div>
        </section>
      ) : null}

      {product.hasCustomizationGuide ? (
        <section className="bg-cream px-6 py-12">
          <div className="mx-auto max-w-[1100px]">
            <SectionHeader eyebrow="HOW CUSTOM PRINTING WORKS" title="Logo bags in three simple steps." />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                "Send your logo + color requirements via WhatsApp",
                "We send digital mockup for approval within 48 hours",
                "Production starts - delivery in 15-20 days",
              ].map((step, index) => (
                <div className="relative rounded-2xl bg-white p-5" key={step}>
                  {index < 2 ? (
                    <div className="absolute left-[calc(100%-8px)] top-9 hidden h-px w-8 bg-mint md:block" />
                  ) : null}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-ink">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {matchingTestimonials.length > 0 ? (
        <section className="bg-forest px-6 py-12 text-white">
          <div className="mx-auto max-w-[1100px]">
            <header>
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">
                RELATED TESTIMONIALS
              </span>
              <h2 className="font-display text-[22px] font-semibold text-white lg:text-[28px]">
                Buyers using {product.name}
              </h2>
            </header>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {matchingTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-[800px]">
          <SectionHeader
            align="center"
            eyebrow="FAQ"
            title={`Common questions about ${product.name}`}
          />
          <div className="mt-7 divide-y divide-[#E5E7EB] overflow-hidden rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white">
            {product.faq.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={item.question}>
                  <button
                    className="flex min-h-12 w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-ink"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    type="button"
                  >
                    {item.question}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn("h-5 w-5 shrink-0 text-leaf transition-transform", isOpen && "rotate-180")}
                    />
                  </button>
                  {isOpen ? (
                    <div className="px-4 pb-4 text-sm leading-relaxed text-text-muted">{item.answer}</div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {showStickyCta ? (
        <div className="fixed bottom-0 left-0 right-0 z-40 hidden h-16 items-center border-t border-[#E5E7EB] bg-white px-6 shadow-[0_-8px_24px_rgba(31,41,55,0.08)] lg:flex">
          <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-forest">{product.name}</div>
              <div className="text-xs text-text-muted">Starting from MOQ {product.moq}</div>
            </div>
            <div className="flex gap-3">
              <Button
                href={buildWhatsAppUrl(`Hi, I want a quote for ${product.name}`)}
                rel="noopener noreferrer"
                size="sm"
                target="_blank"
                variant="whatsapp"
              >
                WhatsApp
              </Button>
              <Button href={`tel:${PHONE_1.replace(/\s/g, "")}`} size="sm" variant="outline">
                Call
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export type { ProductPageTemplateProps };
