"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
};

export default function Lightbox({ images, selectedIndex, onClose, onSelect }: LightboxProps) {
  const selected = selectedIndex === null ? null : images[selectedIndex];

  useEffect(() => {
    if (!selected) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onSelect((selectedIndex! - 1 + images.length) % images.length);
      }

      if (event.key === "ArrowRight") {
        onSelect((selectedIndex! + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose, onSelect, selected, selectedIndex]);

  if (!selected || selectedIndex === null) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
    >
      <button
        aria-label="Close gallery image"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10"
        onClick={onClose}
        type="button"
      >
        <X aria-hidden="true" className="h-6 w-6" />
      </button>
      <button
        aria-label="Previous image"
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white hover:bg-white/10"
        onClick={() => onSelect((selectedIndex - 1 + images.length) % images.length)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="h-7 w-7" />
      </button>
      <div className="relative h-[85vh] w-full max-w-5xl">
        <Image alt={selected.alt} className="object-contain" fill sizes="100vw" src={selected.src} />
      </div>
      <button
        aria-label="Next image"
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white hover:bg-white/10"
        onClick={() => onSelect((selectedIndex + 1) % images.length)}
        type="button"
      >
        <ChevronRight aria-hidden="true" className="h-7 w-7" />
      </button>
    </div>
  );
}
