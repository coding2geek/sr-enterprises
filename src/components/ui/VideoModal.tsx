"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";

type VideoModalProps = {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

function getYouTubeEmbedUrl(videoUrl: string) {
  const trimmed = videoUrl.trim();

  if (!trimmed.includes("/") && !trimmed.includes("?")) {
    return `https://www.youtube.com/embed/${trimmed}?autoplay=1`;
  }

  try {
    const url = new URL(trimmed);
    const id =
      url.hostname.includes("youtu.be")
        ? url.pathname.slice(1)
        : url.searchParams.get("v") ?? url.pathname.split("/").filter(Boolean).at(-1);

    return `https://www.youtube.com/embed/${id ?? trimmed}?autoplay=1`;
  } catch {
    return `https://www.youtube.com/embed/${trimmed}?autoplay=1`;
  }
}

export default function VideoModal({ videoUrl, isOpen, onClose, title = "Video" }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const closeButton = modalRef.current?.querySelector<HTMLButtonElement>("button");
    closeButton?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, iframe, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      ref={modalRef}
      role="dialog"
    >
      <button
        aria-label="Close video"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10"
        onClick={onClose}
        type="button"
      >
        <X aria-hidden="true" className="h-6 w-6" />
      </button>

      <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-black">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          src={getYouTubeEmbedUrl(videoUrl)}
          title={title}
        />
      </div>
    </div>
  );
}

export type { VideoModalProps };
