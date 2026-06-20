"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const pathname = usePathname();
  const shouldHide = pathname.includes("/products/") || pathname.endsWith("/contact");

  useEffect(() => {
    if (shouldHide) {
      return;
    }

    const showTimer = window.setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = window.setTimeout(() => setShowTooltip(false), 8000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [shouldHide]);

  if (shouldHide) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
      {showTooltip ? (
        <div className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-ink shadow-[0_12px_32px_rgba(31,41,55,0.12)]">
          Chat with us — 1 hour reply
        </div>
      ) : null}

      <a
        aria-label="WhatsApp us"
        className="group flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-wa-green px-4 text-white shadow-[0_8px_24px_rgba(37,211,102,0.28)] transition-all duration-300 hover:w-40 hover:justify-start hover:gap-2"
        href={buildWhatsAppUrl("Hi, I'm interested in your products")}
        onFocus={() => setShowTooltip(false)}
        onMouseEnter={() => setShowTooltip(false)}
        onClick={() => trackEvent("whatsapp_click", { location: "floating_desktop" })}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" className="h-6 w-6 shrink-0" />
        <span className="w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:w-auto group-hover:opacity-100">
          WhatsApp us
        </span>
      </a>
    </div>
  );
}
