"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import VideoModal from "./VideoModal";

type TestimonialCardProps = {
  name: string;
  role: string;
  location: string;
  quote: string;
  productUsed: string;
  language: "en" | "te" | "hi";
  videoUrl?: string;
  avatarInitials: string;
};

export default function TestimonialCard({
  name,
  role,
  location,
  quote,
  productUsed,
  language,
  videoUrl,
  avatarInitials,
}: TestimonialCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const quoteFont = language === "te" ? "font-telugu" : language === "hi" ? "font-devanagari" : "font-sans";

  return (
    <article className="rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white p-4">
      {videoUrl ? (
        <button
          aria-label={`Play ${name} testimonial video`}
          className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-forest to-leaf"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white">
              <Play aria-hidden="true" className="h-5 w-5 fill-current" />
            </span>
          </span>
        </button>
      ) : null}

      <p className={cn("mb-3 text-[13px] leading-relaxed text-ink", quoteFont, !videoUrl && "italic")}>
        &quot;{quote}&quot;
      </p>

      <div className="mb-3 inline-flex rounded-full bg-sage px-2.5 py-1 text-[11px] font-medium text-leaf">
        Uses: {productUsed}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint font-semibold text-forest">
          {avatarInitials}
        </div>
        <div>
          <div className="text-[13px] font-medium text-ink">{name}</div>
          <div className="text-[11px] text-text-muted">
            {role} · {location}
          </div>
        </div>
      </div>

      {videoUrl ? (
        <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} title={`${name} testimonial`} videoUrl={videoUrl} />
      ) : null}
    </article>
  );
}

export type { TestimonialCardProps };

