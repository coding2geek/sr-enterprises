"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Breadcrumb, CtaBox, FadeInWhenVisible, Lightbox, SectionHeader, VideoModal } from "@/components/ui";
import { FACTORY_VIDEOS, GALLERY_FILTERS, GALLERY_IMAGES, type MediaCategory, type VideoItem } from "@/lib/media-content";
import { buildWhatsAppUrl, PHONE_1 } from "@/lib/constants";
import { cn } from "@/lib/utils";

type GalleryPageClientProps = {
  locale: string;
};

export default function GalleryPageClient({ locale }: GalleryPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<MediaCategory | "all">("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const filteredImages = useMemo(
    () => GALLERY_IMAGES.filter((image) => activeCategory === "all" || image.category === activeCategory),
    [activeCategory],
  );
  const filteredVideos = useMemo(
    () => FACTORY_VIDEOS.filter((video) => activeCategory === "all" || video.category === activeCategory),
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
        <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight">
          Factory, machines, covers and bags.
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
          Placeholder media is structured for SEO now. Replace each image and video with real machine working,
          factory place, product, packing and dispatch media as it becomes available.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {GALLERY_FILTERS.map((filter) => (
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
            <FadeInWhenVisible className="mb-3 break-inside-avoid" delay={index * 0.05} key={image.id}>
              <button
                aria-label={`Open ${image.title}`}
                className={`relative w-full cursor-pointer overflow-hidden rounded-xl bg-leaf ${image.heightClass}`}
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
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 to-transparent p-4 text-left">
                  <span className="block text-sm font-semibold text-white">{image.title}</span>
                  <span className="mt-1 block text-[11px] leading-relaxed text-white/75">{image.caption}</span>
                </span>
              </button>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader
            eyebrow="VIDEOS"
            lead="Each tile is ready for a real YouTube ID or hosted video later."
            title="Machine and factory videos."
          />
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video, index) => (
              <FadeInWhenVisible delay={index * 0.05} key={video.id}>
                <button
                  aria-label={`Play ${video.title} video`}
                  className="relative aspect-video w-full overflow-hidden rounded-xl bg-leaf"
                  onClick={() => setSelectedVideo(video)}
                  type="button"
                >
                  {video.poster ? (
                    <Image
                      alt={`${video.title} video placeholder`}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      src={video.poster}
                    />
                  ) : null}
                  <span className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white">
                      <Play aria-hidden="true" className="h-5 w-5 fill-current" />
                    </span>
                  </span>
                  <span className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="block text-xs font-semibold text-white">{video.title}</span>
                    <span className="mt-1 block text-[11px] text-white/70">{video.description}</span>
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
            description="Send us your product, quantity, delivery location and branding requirement. We will reply with pricing and next steps."
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
      {selectedVideo ? (
        <VideoModal
          isOpen={Boolean(selectedVideo)}
          onClose={() => setSelectedVideo(null)}
          title={selectedVideo.title}
          videoUrl={selectedVideo.youtubeId ?? ""}
        />
      ) : null}
    </>
  );
}
