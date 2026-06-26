"use client";

import { ArrowRight, MapPin, Play, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Breadcrumb, Button, CtaBox, SectionHeader, VideoModal } from "@/components/ui";
import { buildWhatsAppUrl, PHONE_1 } from "@/lib/constants";
import { FACTORY_VIDEOS, GALLERY_IMAGES, type VideoItem } from "@/lib/media-content";
import { SITE } from "@/lib/site-content";

type FactoryPageClientProps = {
  locale: string;
};

const processSteps = [
  ["Raw material", "PP granules, non-woven rolls and mesh rolls are staged for production."],
  ["Manufacturing", "Machines produce covers, leno bags and PP woven packaging by specification."],
  ["Quality check", "Size, stitch, weight, print and packing checks happen before dispatch."],
  ["Dispatch", "Packed bundles are labelled and prepared for transport across India."],
] as const;

export default function FactoryPageClient({ locale }: FactoryPageClientProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const featuredVideo = FACTORY_VIDEOS.find((video) => video.featured) ?? FACTORY_VIDEOS[0];

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Factory tour" },
        ]}
      />

      <section className="bg-forest px-6 py-12 text-white">
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">STEP INSIDE</div>
            <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight lg:text-[40px]">
              See how your packaging is made.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              This page is built to show real factory place videos, machines working, print checks, packing and dispatch
              once your original media is ready.
            </p>
          </div>
          <button
            aria-label={`Play ${featuredVideo.title} video`}
            className="relative aspect-video w-full overflow-hidden rounded-2xl bg-leaf"
            onClick={() => setSelectedVideo(featuredVideo)}
            type="button"
          >
            {featuredVideo.poster ? (
              <Image
                alt={`${featuredVideo.title} video placeholder`}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={featuredVideo.poster}
              />
            ) : null}
            <span className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/30 text-white">
                <Play aria-hidden="true" className="h-6 w-6 fill-current" />
              </span>
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-forest/85 px-3 py-1 text-xs">
              {featuredVideo.title} · {featuredVideo.duration ?? "Video"}
            </span>
          </button>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader align="center" eyebrow="PROCESS" title="How we make every bag and cover." />
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {processSteps.map(([title, desc], index) => (
              <article className="relative rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white p-4 text-center" key={title}>
                {index < processSteps.length - 1 ? <ArrowRight className="absolute -right-5 top-8 hidden h-5 w-5 text-mint lg:block" /> : null}
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-sage font-display text-sm font-semibold text-leaf">
                  {index + 1}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-forest">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader eyebrow="OUR MACHINES" title="Ready for working videos." />
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FACTORY_VIDEOS.map((video) => (
              <button
                aria-label={`Play ${video.title} video`}
                className="relative aspect-video overflow-hidden rounded-xl bg-leaf"
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                type="button"
              >
                {video.poster ? (
                  <Image
                    alt={`${video.title} machine video placeholder`}
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
                <span className="absolute bottom-3 left-3 right-3 text-left text-xs font-semibold text-white">
                  {video.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-6 py-12 text-white">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader
            eyebrow="FACTORY PHOTOS"
            lead="Replace these with real photos of factory place, raw material, machine operators, packing and dispatch."
            title="Show buyers the real place."
          />
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_IMAGES.filter((image) => ["factory", "machines", "dispatch", "printing"].includes(image.category))
              .slice(0, 4)
              .map((image) => (
                <div className="relative h-56 overflow-hidden rounded-xl bg-leaf" key={image.id}>
                  <Image alt={image.alt} className="object-cover" fill sizes="(min-width: 1024px) 25vw, 100vw" src={image.src} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 to-transparent p-3">
                    <div className="text-xs font-semibold text-white">{image.title}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-2">
          <div className="h-[280px] overflow-hidden rounded-2xl">
            <iframe height="100%" loading="lazy" src={SITE.mapEmbedUrl} style={{ border: 0 }} title="SR Enterprises factory location map" width="100%" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-leaf">COME SEE IT YOURSELF</div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-forest">Visit our factory</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">{SITE.address}</p>
            <p className="mt-3 text-sm font-medium text-ink">{SITE.businessHours}</p>
            <p className="mt-2 text-sm text-text-muted">Call before visit to schedule a walkthrough.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={SITE.mapsUrl} rel="noopener noreferrer" target="_blank" variant="primary">
                <MapPin aria-hidden="true" className="h-4 w-4" /> Open in Maps
              </Button>
              <Button href={`tel:${PHONE_1.replace(/\s/g, "")}`} variant="outline">
                <Phone aria-hidden="true" className="h-4 w-4" /> Call first
              </Button>
              <Button href={buildWhatsAppUrl("Hi, I want to visit your factory")} rel="noopener noreferrer" target="_blank" variant="whatsapp">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <CtaBox
            description="WhatsApp us first and we will have product samples, machine details and quote answers ready when you arrive."
            primaryButton={{ label: "WhatsApp for quote", href: buildWhatsAppUrl("Hi, I need a quote before visiting your factory") }}
            title="Need a quote before you visit?"
            variant="amber"
          />
        </div>
      </section>

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
