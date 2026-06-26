"use client";

import { Play } from "lucide-react";
import { useMemo, useState } from "react";
import { Breadcrumb, CtaBox, StatCard, TestimonialCard, VideoModal } from "@/components/ui";
import { buildWhatsAppUrl, EMAIL } from "@/lib/constants";
import { CUSTOMER_STORIES, TESTIMONIAL_FILTERS } from "@/lib/testimonial-content";
import { cn } from "@/lib/utils";

type TestimonialsPageClientProps = {
  locale: string;
};

export default function TestimonialsPageClient({ locale }: TestimonialsPageClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const featured = CUSTOMER_STORIES[0];
  const visibleTestimonials = useMemo(() => {
    if (activeFilter === "all") {
      return CUSTOMER_STORIES;
    }

    return CUSTOMER_STORIES.filter((testimonial) => testimonial.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Testimonials" },
        ]}
      />

      <section className="bg-forest px-6 py-12 text-center text-white">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">
            CUSTOMER STORIES
          </div>
          <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight lg:text-[40px]">
            Customer stories ready for original proof.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-white/70">
            These sample stories are ready to replace with real farmer, trader, mill and bulk buyer testimonials
            when original photos or videos are available.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-5">
        <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-2">
          {TESTIMONIAL_FILTERS.map((filter) => (
            <button
              className={cn(
                "min-h-10 rounded-full border px-4 text-sm font-medium transition",
                activeFilter === filter.category
                  ? "border-forest bg-forest text-white"
                  : "border-[#E5E7EB] bg-white text-ink",
              )}
              key={filter.category}
              onClick={() => setActiveFilter(filter.category)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-2">
          <button
            aria-label={`Play ${featured.name} testimonial video placeholder`}
            className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-forest via-leaf to-mint"
            onClick={() => setIsFeaturedOpen(true)}
            type="button"
          >
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/30 text-white">
                <Play aria-hidden="true" className="h-6 w-6 fill-current" />
              </span>
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-forest/85 px-3 py-1 text-xs text-white">
              Video placeholder
            </span>
          </button>
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint font-semibold text-forest">
                {featured.avatarInitials}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{featured.name}</div>
                <div className="text-xs text-text-muted">
                  {featured.role} · {featured.location}
                </div>
              </div>
            </div>
            <p className="mt-5 text-xl leading-relaxed text-forest">&quot;{featured.quote}&quot;</p>
            <div className="mt-4 inline-flex rounded-full bg-sage px-3 py-1 text-xs font-medium text-leaf">
              Uses: {featured.productUsed}
            </div>
            {featured.isPlaceholder ? (
              <p className="mt-3 text-xs text-text-muted">
                Placeholder testimonial. Replace with real buyer name, location, quote, photo and optional video.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} language="en" />
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-3.5 lg:grid-cols-4">
          <StatCard label="Story types ready" value="5" />
          <StatCard label="Product lines covered" value="3" />
          <StatCard label="Video slots ready" value="1+" />
          <StatCard label="Replace with real proof" value="Next" />
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <CtaBox
            description="Record a short customer video or send a photo with your product result. We can feature it after approval."
            primaryButton={{
              label: "Send story on WhatsApp",
              href: buildWhatsAppUrl("Hi, I'd like to share my experience using your products"),
            }}
            secondaryButton={{
              label: "Upload photo via email",
              href: `mailto:${EMAIL}?subject=${encodeURIComponent("Customer story for SR Enterprises")}`,
            }}
            title="Used our products? Tell us your story."
            variant="amber"
          />
        </div>
      </section>

      <VideoModal
        isOpen={isFeaturedOpen}
        onClose={() => setIsFeaturedOpen(false)}
        title={featured.videoTitle ?? `${featured.name} testimonial`}
        videoUrl=""
      />
    </>
  );
}
