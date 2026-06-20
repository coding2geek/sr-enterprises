"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { Button, SectionHeader, VideoModal } from "@/components/ui";

type FactoryVideoGridProps = {
  locale: string;
};

const videos = [
  { title: "Factory walkthrough · 2 min", id: "dQw4w9WgXcQ", gradient: "from-forest via-leaf to-mint", large: true },
  { title: "Leno machine in action", id: "dQw4w9WgXcQ", gradient: "from-leaf via-mint to-sage" },
  { title: "Custom printing press", id: "dQw4w9WgXcQ", gradient: "from-amber via-cream to-sage" },
  { title: "Quality check process", id: "dQw4w9WgXcQ", gradient: "from-forest via-ink to-leaf" },
  { title: "Farmer interview — Ramesh Kumar", id: "dQw4w9WgXcQ", gradient: "from-mint via-leaf to-forest" },
];

export default function FactoryVideoGrid({ locale }: FactoryVideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[number] | null>(null);

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          eyebrow="INSIDE OUR FACTORY"
          lead="Take a look at our machines, processes, and the team behind every bag."
          title="Built right, here in Andhra Pradesh."
        />
        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {videos.map((video) => (
            <button
              aria-label={`Play ${video.title} video`}
              className={`relative min-h-36 overflow-hidden rounded-xl bg-gradient-to-br ${video.gradient} ${video.large ? "lg:[grid-row:span_2] lg:min-h-[300px]" : ""}`}
              key={video.title}
              onClick={() => setSelectedVideo(video)}
              type="button"
            >
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
        <div className="mt-8 text-center">
          <Button href={`/${locale}/gallery`} variant="ghost">
            View full gallery →
          </Button>
        </div>
      </div>

      {selectedVideo ? (
        <VideoModal
          isOpen={Boolean(selectedVideo)}
          onClose={() => setSelectedVideo(null)}
          title={selectedVideo.title}
          videoUrl={selectedVideo.id}
        />
      ) : null}
    </section>
  );
}
