"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { buildWhatsAppUrl } from "@/lib/constants";
import { getLocalizedPath } from "@/lib/routes";
import Button from "./Button";

type ProductCardProps = {
  id: string;
  name: string;
  teluguName: string;
  shortDesc: string;
  sizes: string;
  moq: string;
  features: string[];
  imagePath: string;
  slug: string;
  hasVideo?: boolean;
};

export default function ProductCard({
  id,
  name,
  teluguName,
  shortDesc,
  sizes,
  moq,
  features,
  imagePath,
  slug,
  hasVideo = false,
}: ProductCardProps) {
  const locale = useLocale();

  return (
    <article
      className="overflow-hidden rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white transition hover:-translate-y-0.5 hover:shadow-sm"
      id={id}
    >
      <div className="relative aspect-[4/3] rounded-t-2xl bg-leaf">
        {imagePath ? (
          <Image
            alt={name}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            src={imagePath}
          />
        ) : null}
        {hasVideo ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white">
              <Play aria-hidden="true" className="h-5 w-5 fill-current" />
            </div>
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <h3 className="font-display text-base font-semibold leading-tight text-forest">{name}</h3>
        <div className="mt-px font-telugu text-xs text-leaf">{teluguName}</div>
        <p className="mt-3 min-h-10 text-[13px] leading-normal text-text-muted">{shortDesc}</p>
        <p className="mt-2 text-[11px] text-text-muted">
          Sizes: {sizes} · MOQ: {moq}
        </p>

        <div className="mt-3 flex flex-wrap gap-1">
          {features.slice(0, 3).map((feature) => (
            <span
              className="rounded-full bg-sage px-2 py-0.5 text-[10px] font-medium text-leaf"
              key={feature}
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-1.5">
          <Button
            className="min-w-0 flex-1 px-3 text-[13px]"
            href={buildWhatsAppUrl(`Hi, I want a quote for ${name}`)}
            rel="noopener noreferrer"
            target="_blank"
            variant="whatsapp"
          >
            Enquire on WhatsApp
          </Button>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cream px-3 text-[13px] font-medium text-amber transition-colors hover:bg-amber/10"
            href={getLocalizedPath(`/products/${slug}`, locale)}
          >
            Specs →
          </Link>
        </div>
      </div>
    </article>
  );
}

export type { ProductCardProps };
