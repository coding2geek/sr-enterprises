"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#E5E7EB] overflow-hidden rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              className="flex min-h-12 w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className={cn("h-5 w-5 shrink-0 text-leaf transition-transform", isOpen && "rotate-180")}
              />
            </button>
            {isOpen ? <div className="px-4 pb-4 text-sm leading-relaxed text-text-muted">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
