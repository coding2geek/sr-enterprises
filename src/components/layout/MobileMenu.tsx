"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { getLocalizedPath, LOCALES } from "@/lib/routes";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MENU_LINKS = [
  { key: "home", href: "/" },
  { key: "products", href: "/products/fruit-covers" },
  { key: "about", href: "/about" },
  { key: "factory", href: "/factory" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
] as const;

const LANGUAGE_LABELS: Record<string, string> = {
  en: "EN",
  te: "తె",
  hi: "हिं",
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{ x: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-forest px-6 py-6 text-white"
          exit={{ x: "100%" }}
          initial={{ x: "100%" }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-3" href={getLocalizedPath("/", locale)} onClick={onClose}>
              <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-white/10 bg-white">
                <Image
                  alt="SR Enterprises logo"
                  className="object-cover"
                  fill
                  sizes="36px"
                  src="/images/logo.jpeg"
                />
              </div>
              <div>
                <div className="font-display text-base font-semibold">SR Enterprises</div>
                <div className="text-[10px] text-white/60">Est. 2026 · Agri packaging</div>
              </div>
            </Link>

            <button
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10"
              onClick={onClose}
              type="button"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mt-10 flex flex-col gap-2">
            {MENU_LINKS.map((item) => (
              <Link
                key={item.href}
                className="flex min-h-12 items-center rounded-xl px-2 text-lg font-medium text-white transition hover:bg-white/10"
                href={getLocalizedPath(item.href, locale)}
                onClick={onClose}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-6 pb-4">
            <div className="flex items-center gap-2">
              {LOCALES.map((targetLocale) => (
                <Link
                  key={targetLocale}
                  className={cn(
                    "flex h-10 min-w-12 items-center justify-center rounded-lg px-3 text-sm transition",
                    locale === targetLocale
                      ? "bg-amber font-medium text-ink"
                      : "bg-white/12 text-white hover:bg-white/20",
                  )}
                  href={getLocalizedPath(pathname, targetLocale)}
                  hrefLang={targetLocale}
                  onClick={() => {
                    trackEvent("language_switch", { locale: targetLocale });
                    onClose();
                  }}
                >
                  {LANGUAGE_LABELS[targetLocale]}
                </Link>
              ))}
            </div>

            <Link
              className="flex min-h-12 w-full items-center justify-center rounded-xl bg-amber px-5 text-[15px] font-semibold text-ink"
              href={getLocalizedPath("/contact", locale)}
              onClick={onClose}
            >
              {t("getQuote")}
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
