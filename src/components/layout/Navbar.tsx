"use client";

import { ChevronDown, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PHONE_1 } from "@/lib/constants";
import { getLocalizedPath, isActivePath } from "@/lib/routes";
import { PRODUCT_NAV_LINKS } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { labelKey: "home", href: "/" },
  { labelKey: "about", href: "/about" },
  { labelKey: "factory", href: "/factory" },
  { labelKey: "gallery", href: "/gallery" },
  { labelKey: "contact", href: "/contact" },
] as const;

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-[72px] border-b-[0.5px] border-[#E5E7EB] bg-white transition-shadow",
          isScrolled && "shadow-[0_6px_20px_rgba(31,41,55,0.08)]",
        )}
      >
        <div className="flex h-full items-center gap-6 px-6">
          <Link className="flex min-w-0 items-center gap-3" href={getLocalizedPath("/", locale)}>
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border-[0.5px] border-[#E5E7EB] bg-white">
              <Image
                alt="SR Enterprises logo"
                className="object-cover"
                fill
                priority
                sizes="36px"
                src="/images/logo.jpeg"
              />
            </div>
            <div className="min-w-0">
              <div className="font-display text-[15px] font-semibold leading-tight text-forest">
                SR Enterprises
              </div>
              <div className="truncate text-[10px] leading-tight text-text-muted">
                Est. 2026 · Agri packaging
              </div>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            <Link
              className={cn(
                "text-[13px] font-medium transition hover:text-leaf",
                isActivePath(pathname, "/") ? "text-leaf" : "text-ink",
              )}
              href={getLocalizedPath("/", locale)}
            >
              {t("home")}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={cn(
                  "flex h-12 items-center gap-1 text-[13px] font-medium transition hover:text-leaf",
                  isActivePath(pathname, "/products") ? "text-leaf" : "text-ink",
                )}
                onClick={() => setIsProductsOpen((open) => !open)}
                type="button"
              >
                {t("products")}
                <ChevronDown aria-hidden="true" className="h-4 w-4" />
              </button>

              {isProductsOpen ? (
                <div className="absolute left-0 top-11 w-56 rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-[0_16px_40px_rgba(31,41,55,0.12)]">
                  {PRODUCT_NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      className="block min-h-12 rounded-xl px-4 py-3 text-[13px] font-medium text-ink transition hover:bg-sage hover:text-leaf"
                      href={getLocalizedPath(item.href, locale)}
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {item.shortLabel}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            {NAV_LINKS.slice(1).map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "text-[13px] font-medium transition hover:text-leaf",
                  isActivePath(pathname, item.href) ? "text-leaf" : "text-ink",
                )}
                href={getLocalizedPath(item.href, locale)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <a
              className="hidden items-center gap-2 text-[13px] font-medium text-ink md:flex"
              href={`tel:${PHONE_1.replace(/\s/g, "")}`}
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-leaf" />
              {PHONE_1}
            </a>
            <Link
              className="hidden min-h-12 items-center justify-center rounded-xl bg-amber px-5 text-[13px] font-semibold text-ink transition hover:bg-amber/90 sm:inline-flex"
              href={getLocalizedPath("/contact", locale)}
            >
              {t("getQuote")} →
            </Link>
            <button
              aria-label="Open menu"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E5E7EB] text-forest lg:hidden"
              onClick={() => setIsMenuOpen(true)}
              type="button"
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
