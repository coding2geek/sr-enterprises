"use client";

import { ArrowRight, MapPin, Play, Phone } from "lucide-react";
import { useState } from "react";
import { Breadcrumb, Button, CtaBox, SectionHeader, VideoModal } from "@/components/ui";
import { ADDRESS, buildWhatsAppUrl, PHONE_1 } from "@/lib/constants";

type FactoryPageClientProps = {
  locale: string;
};

const videos = [
  "Leno Mesh Loom",
  "PP Woven Circular Loom",
  "Flexographic Printing Press",
  "Bag Cutting Machine",
  "Seam Welding Machine",
  "Auto Stacker & Packer",
];

export default function FactoryPageClient({ locale }: FactoryPageClientProps) {
  const [videoTitle, setVideoTitle] = useState<string | null>(null);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Factory tour" },
        ]}
      />

      <section className="bg-forest px-6 py-12 text-center text-white">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">STEP INSIDE</div>
          <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight lg:text-[40px]">
            See how your packaging is made.
          </h1>
          <button
            aria-label="Play factory walkthrough video"
            className="relative mx-auto mt-8 aspect-video w-full max-w-[700px] overflow-hidden rounded-2xl bg-gradient-to-br from-leaf via-mint to-forest"
            onClick={() => setVideoTitle("Factory walkthrough · 2 min")}
            type="button"
          >
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/30 text-white">
                <Play aria-hidden="true" className="h-6 w-6 fill-current" />
              </span>
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-forest/85 px-3 py-1 text-xs">
              Factory walkthrough · 2 min
            </span>
          </button>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader align="center" eyebrow="PROCESS" title="How we make every bag." />
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {[
              ["Raw material", "PP granules, non-woven rolls"],
              ["Manufacturing", "Leno looms, woven looms, printing"],
              ["Quality check", "100% inspection, weight + stitch test"],
              ["Dispatch", "Packed, labeled, loaded for delivery"],
            ].map(([title, desc], index) => (
              <article className="relative rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white p-4 text-center" key={title}>
                {index < 3 ? <ArrowRight className="absolute -right-5 top-8 hidden h-5 w-5 text-mint lg:block" /> : null}
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-sage text-lg">🏭</div>
                <h3 className="mt-3 text-sm font-semibold text-forest">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">{desc}</p>
                <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-sage to-mint/50" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader eyebrow="OUR MACHINES" title="See them in action." />
          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {videos.map((title) => (
              <button
                aria-label={`Play ${title} video`}
                className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-leaf via-mint to-forest"
                key={title}
                onClick={() => setVideoTitle(title)}
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-6 py-12 text-center text-white">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="font-display text-[28px] font-semibold">Can&apos;t visit? Take a 360° tour.</h2>
          {/* Replace this placeholder with a real Google Business 360 embed URL or custom panorama viewer later. */}
          <div className="mt-7 flex h-[300px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white/75">
            Drag to explore the full factory
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-2">
          <div className="h-[280px] overflow-hidden rounded-2xl">
            <iframe
              height="100%"
              loading="lazy"
              src="https://www.google.com/maps?q=Pothavarappadu,Agiripalli+Mandal,Eluru+District,Andhra+Pradesh,521212&output=embed"
              style={{ border: 0 }}
              width="100%"
            />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-leaf">COME SEE IT YOURSELF</div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-forest">Visit our factory</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">{ADDRESS}</p>
            <p className="mt-3 text-sm font-medium text-ink">Mon-Sat · 9 AM to 6 PM</p>
            <p className="mt-2 text-sm text-text-muted">Call before visit to schedule a walkthrough.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={mapsUrl} rel="noopener noreferrer" target="_blank" variant="primary">
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
            description="WhatsApp us first and we'll have answers ready when you arrive."
            primaryButton={{ label: "WhatsApp for quote", href: buildWhatsAppUrl("Hi, I need a quote before visiting your factory") }}
            title="Need a quote before you visit?"
            variant="amber"
          />
        </div>
      </section>

      {videoTitle ? (
        <VideoModal
          isOpen={Boolean(videoTitle)}
          onClose={() => setVideoTitle(null)}
          title={videoTitle}
          videoUrl="dQw4w9WgXcQ"
        />
      ) : null}
    </>
  );
}
