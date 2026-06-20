"use client";

import { House, Image, MessageCircle, Package, Phone } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { buildWhatsAppUrl, PHONE_1 } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { getLocalizedPath, isActivePath } from "@/lib/routes";
import { cn } from "@/lib/utils";

type MobileBarItem = {
  label: string;
  href: string;
  matchHref?: string;
  icon: typeof House;
};

const ITEMS: MobileBarItem[] = [
  { label: "Home", href: "/", icon: House },
  { label: "Products", href: "/products/fruit-covers", matchHref: "/products", icon: Package },
  { label: "Gallery", href: "/gallery", icon: Image },
];

export default function MobileBottomBar() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-[60px] border-t border-white/10 bg-forest lg:hidden" aria-label="Mobile quick actions">
      {ITEMS.map((item) => {
        const Icon = item.icon;
        const active = isActivePath(pathname, item.matchHref ?? item.href);

        return (
          <Link
            key={item.label}
            className={cn(
              "flex h-full flex-1 flex-col items-center justify-center gap-1 text-[9px] font-medium",
              active ? "text-mint" : "text-white/60",
            )}
            href={getLocalizedPath(item.href, locale)}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <a
        className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-[9px] font-medium text-white/60"
        href={`tel:${PHONE_1.replace(/\s/g, "")}`}
      >
        <Phone aria-hidden="true" className="h-5 w-5" />
        <span>Call</span>
      </a>
      <a
        className="flex h-full flex-1 flex-col items-center justify-center gap-1 bg-wa-green text-[9px] font-medium text-white"
        href={buildWhatsAppUrl("Hi, I'm interested in your products")}
        onClick={() => trackEvent("whatsapp_click", { location: "mobile_bottom_bar" })}
        rel="noopener noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}
