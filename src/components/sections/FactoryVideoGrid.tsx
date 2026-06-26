"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button, SectionHeader, VideoModal } from "@/components/ui";
import { FACTORY_VIDEOS, type VideoItem } from "@/lib/media-content";

type FactoryVideoGridProps = {
  locale: string;
};

export default function FactoryVideoGrid({ locale }: FactoryVideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="INSIDE OUR FACTORY"
          lead="Use this section for real videos of machines working, the factory place, printing, packing and dispatch."
          title="Show buyers how every cover and bag is made."
        />
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FACTORY_VIDEOS.map((video) => (
            <button
              aria-label={`Play ${video.title} video`}
              className={`group relative min-h-48 overflow-hidden rounded-xl bg-leaf text-left ${
                video.featured ? "lg:col-span-2 lg:min-h-[300px]" : ""
              }`}
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              type="button"
            >
              {video.poster ? (
                <Image
                  alt={`${video.title} video placeholder`}
                  className="object-cover transition group-hover:scale-[1.02]"
                  fill
                  sizes={video.featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                  src={video.poster}
                />
              ) : null}
              <span className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-forest">
                {video.duration ?? "Video"}
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/35 text-white">
                  <Play aria-hidden="true" className="h-5 w-5 fill-current" />
                </span>
              </span>
              <span className="absolute bottom-4 left-4 right-4">
                <span className="block text-sm font-semibold text-white">{video.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-white/75">{video.description}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href={`/${locale}/gallery`} variant="ghost">
            View full gallery
          </Button>
        </div>
      </div>

      {selectedVideo ? (
        <VideoModal
          isOpen={Boolean(selectedVideo)}
          onClose={() => setSelectedVideo(null)}
          title={selectedVideo.title}
          videoUrl={selectedVideo.youtubeId ?? ""}
        />
      ) : null}
    </section>
  );
}
