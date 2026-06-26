import Image from "next/image";
import Link from "next/link";
import { HOME_MEDIA_HIGHLIGHTS } from "@/lib/media-content";

type MediaShowcaseProps = {
  locale: string;
};

export default function MediaShowcase({ locale }: MediaShowcaseProps) {
  return (
    <section className="bg-cream px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-leaf">
              FACTORY AND PRODUCT MEDIA
            </span>
            <h2 className="font-display text-[22px] font-semibold leading-tight text-forest lg:text-[28px]">
              Built to show machines, covers, bags and dispatch.
            </h2>
            <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-text-muted">
              These placeholders are ready for original photos and videos of factory place, machines working,
              fruit covers, leno mesh bags, PP woven bags, printing, packing and dispatch.
            </p>
          </div>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-forest px-4 text-sm font-semibold text-white transition hover:bg-leaf"
            href={`/${locale}/gallery`}
          >
            View full gallery
          </Link>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-6">
          {HOME_MEDIA_HIGHLIGHTS.map((item, index) => (
            <Link
              className={`group relative min-h-44 overflow-hidden rounded-xl bg-leaf ${
                index === 0 ? "col-span-2 row-span-2 min-h-[360px]" : ""
              }`}
              href={`/${locale}/gallery`}
              key={item.id}
            >
              <Image
                alt={item.alt}
                className="object-cover transition group-hover:scale-[1.02]"
                fill
                sizes={index === 0 ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 16vw, 50vw"}
                src={item.src}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 to-transparent p-3">
                <span className="block text-xs font-semibold text-white">{item.title}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
