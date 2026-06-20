"use client";

import { ArrowLeftRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

type BeforeAfterSliderProps = {
  leftImage: string;
  leftLabel: string;
  rightImage: string;
  rightLabel: string;
};

export default function BeforeAfterSlider({
  leftImage,
  leftLabel,
  rightImage,
  rightLabel,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [leftFailed, setLeftFailed] = useState(false);
  const [rightFailed, setRightFailed] = useState(false);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, nextPosition)));
  };

  return (
    <div
      className="relative h-[280px] overflow-hidden rounded-2xl bg-leaf md:h-[300px]"
      onPointerMove={(event) => {
        if (isDragging) {
          updatePosition(event.clientX);
        }
      }}
      onPointerUp={() => setIsDragging(false)}
      ref={containerRef}
    >
      {rightFailed ? (
        <div className="absolute inset-0 bg-gradient-to-br from-mint via-leaf to-forest" />
      ) : (
        <Image
          alt={rightLabel}
          className="object-cover"
          fill
          onError={() => setRightFailed(true)}
          sizes="100vw"
          src={rightImage}
        />
      )}

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {leftFailed ? (
          <div className="absolute inset-0 bg-gradient-to-br from-amber via-cream to-text-muted" />
        ) : (
          <Image
            alt={leftLabel}
            className="object-cover"
            fill
            onError={() => setLeftFailed(true)}
            sizes="100vw"
            src={leftImage}
          />
        )}
      </div>

      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">
        {leftLabel}
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">
        {rightLabel}
      </div>

      <button
        aria-label="Drag before and after comparison"
        className="absolute top-0 flex h-full w-10 -translate-x-1/2 touch-none cursor-ew-resize items-center justify-center"
        onPointerDown={(event) => {
          setIsDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
          updatePosition(event.clientX);
        }}
        style={{ left: `${position}%` }}
        type="button"
      >
        <span className="h-full w-0.5 bg-white" />
        <span className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest shadow-sm">
          <ArrowLeftRight aria-hidden="true" className="h-5 w-5" />
        </span>
      </button>
    </div>
  );
}

export type { BeforeAfterSliderProps };
