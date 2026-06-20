"use client";

import { Play } from "lucide-react";
import { useMemo, useState } from "react";
import { Breadcrumb, CtaBox, StatCard, TestimonialCard, VideoModal } from "@/components/ui";
import { buildWhatsAppUrl, EMAIL, TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TestimonialsPageClientProps = {
  locale: string;
};

const filters = [
  { label: "All stories", category: "all" },
  { label: "Mango farmers", category: "mango-farmers" },
  { label: "Onion traders", category: "onion-traders" },
  { label: "Rice mills", category: "rice-mills" },
  { label: "Fertilizer cos.", category: "fertilizer-companies" },
  { label: "Grape growers", category: "grape-growers" },
];

export default function TestimonialsPageClient({ locale }: TestimonialsPageClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const featured = TESTIMONIALS.find((testimonial) => testimonial.name === "Ramesh Kumar")!;
  const visibleTestimonials = useMemo(() => {
    if (activeFilter === "all") {
      return TESTIMONIALS;
    }

    return TESTIMONIALS.filter((testimonial) => testimonial.category.includes(activeFilter));
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
            FARMER & BUSINESS STORIES
          </div>
          <h1 className="mt-3 font-display text-[30px] font-semibold leading-tight lg:text-[40px]">
            Real results, in their own words.
          </h1>
          <p className="mt-4 text-[13px] text-white/70">1000+ farmers · 15+ states · 4.8★ average rating</p>
        </div>
      </section>

      <section className="bg-cream px-6 py-5">
        <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-2">
          {filters.map((filter) => (
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
            aria-label="Play featured Ramesh Kumar testimonial video"
            className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-forest via-leaf to-mint"
            onClick={() => setIsFeaturedOpen(true)}
            type="button"
          >
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/30 text-white">
                <Play aria-hidden="true" className="h-6 w-6 fill-current" />
              </span>
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
            <p className="mt-5 font-telugu text-xl leading-relaxed text-forest">&quot;{featured.quote}&quot;</p>
            <p className="mt-3 text-[13px] italic leading-relaxed text-text-muted">
              &quot;After using these covers on my mango orchard, the price doubled.&quot;
            </p>
            <div className="mt-4 inline-flex rounded-full bg-sage px-3 py-1 text-xs font-medium text-leaf">
              Uses: {featured.productUsed}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 py-10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-3.5 lg:grid-cols-4">
          <StatCard label="Price doubled after using covers" value="2×" />
          <StatCard label="Less pest damage reported" value="90%" />
          <StatCard label="Lower post-harvest losses" value="30%" />
          <StatCard label="Better margins overall" value="₹₹₹" />
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <CtaBox
            description="Record a 30-second video on WhatsApp. We'll feature you on this page and send you a thank-you gift."
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
        title="Ramesh Kumar testimonial"
        videoUrl={featured.videoUrl ?? "dQw4w9WgXcQ"}
      />
    </>
  );
}
