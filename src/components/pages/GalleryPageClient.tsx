"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Breadcrumb, CtaBox, FadeInWhenVisible, Lightbox, SectionHeader, VideoModal } from "@/components/ui";
import { buildWhatsAppUrl, PHONE_1 } from "@/lib/constants";
import { cn } from "@/lib/utils";

type GalleryPageClientProps = {
  locale: string;
};

type GalleryCategory = "products" | "factory" | "results" | "farmers";

const filters: { label: string; category: GalleryCategory | "all" }[] = [
  { label: "All", category: "all" },
  { label: "Products", category: "products" },
  { label: "Factory", category: "factory" },
  { label: "Results", category: "results" },
  { label: "Farmers", category: "farmers" },
];

const galleryImages: { src: string; alt: string; category: GalleryCategory; height: string }[] = [
  { src: "/images/fruit-covers-product.jpeg", alt: "Fruit protection covers ready for packing", category: "products", height: "h-64" },
  { src: "/images/leno-mesh-bags-vegetables.jpeg", alt: "Leno mesh bags used for vegetables", category: "products", height: "h-80" },
  { src: "/images/pp-woven-bags-rice.jpeg", alt: "PP woven rice bags stacked for dispatch", category: "products", height: "h-64" },
  { src: "/images/machine-leno.jpeg", alt: "Leno mesh machine in factory", category: "factory", height: "h-72" },
  { src: "/images/machine-paper-bag.jpeg", alt: "Packaging machine at SR Enterprises", category: "factory", height: "h-60" },
  { src: "/images/printer-for-pp-woven.jpg", alt: "Custom printing machine for PP woven bags", category: "factory", height: "h-80" },
  { src: "/images/protected-mango.jpg", alt: "Protected mango fruit with cover", category: "results", height: "h-64" },
  { src: "/images/unprotected-mango.jpg", alt: "Unprotected mango showing damage", category: "results", height: "h-72" },
  { src: "/images/mango-result.jpeg", alt: "Clean mango result after using fruit cover", category: "results", height: "h-60" },
  { src: "/images/gallery-2.jpeg", alt: "Farmer inspecting agri packaging product", category: "farmers", height: "h-80" },
  { src: "/images/gallery-3.jpeg", alt: "Agri packaging in farm setting", category: "farmers", height: "h-64" },
  { src: "/images/cover-1.jpeg", alt: "Fruit cover product sample", category: "products", height: "h-72" },
];

const videoTitles = [
  "Fruit covers in orchard",
  "Leno machine running",
  "PP woven print sample",
  "Factory walkthrough",
  "Farmer result story",
  "Dispatch process",
];

export default function GalleryPageClient({ locale }: GalleryPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const filteredImages = useMemo(
    () => galleryImages.filter((image) => activeCategory === "all" || image.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Gallery" },
        ]}
      />

      <section className="bg-forest px-6 py-10 text-center text-white">
        <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">OUR WORK</div>
        <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight">Products, machines, and results.</h1>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              className={cn(
                "min-h-10 rounded-full border px-4 text-sm font-medium transition",
                activeCategory === filter.category
                  ? "border-mint bg-mint text-forest"
                  : "border-white/20 bg-white/10 text-white",
              )}
              key={filter.category}
              onClick={() => setActiveCategory(filter.category)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px] columns-1 gap-3 sm:columns-2 lg:columns-3">
          {filteredImages.map((image, index) => (
            <FadeInWhenVisible className="mb-3 break-inside-avoid" delay={index * 0.08} key={image.src}>
              <button
                aria-label={`Open ${image.alt}`}
                className={`relative w-full cursor-pointer overflow-hidden rounded-xl bg-leaf ${image.height}`}
                onClick={() => setSelectedImageIndex(index)}
                type="button"
              >
                <Image
                  alt={image.alt}
                  className="object-cover transition hover:scale-[1.02]"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={image.src}
                />
              </button>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader eyebrow="VIDEOS" title="Watch our work in action." />
          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {videoTitles.map((title, index) => (
              <FadeInWhenVisible delay={index * 0.08} key={title}>
                <button
                  aria-label={`Play ${title} video`}
                  className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-leaf via-mint to-forest"
                  onClick={() => setSelectedVideo(title)}
                  type="button"
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white">
                      <Play aria-hidden="true" className="h-5 w-5 fill-current" />
                    </span>
                  </span>
                  <span className="absolute bottom-3 left-3 right-3 text-left text-xs font-semibold text-white">
                    {title}
                  </span>
                </button>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <CtaBox
            description="Send us your product, quantity, and delivery location. We will reply with pricing and delivery estimate."
            primaryButton={{ label: "WhatsApp us", href: buildWhatsAppUrl("Hi, I saw your gallery and want to discuss products") }}
            secondaryButton={{ label: "Call", href: `tel:${PHONE_1.replace(/\s/g, "")}` }}
            title="Like what you see? Let's talk."
            variant="dark"
          />
        </div>
      </section>

      <Lightbox
        images={filteredImages.map(({ src, alt }) => ({ src, alt }))}
        onClose={() => setSelectedImageIndex(null)}
        onSelect={setSelectedImageIndex}
        selectedIndex={selectedImageIndex}
      />
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo ?? "Gallery video"}
        videoUrl="dQw4w9WgXcQ"
      />
    </>
  );
}
