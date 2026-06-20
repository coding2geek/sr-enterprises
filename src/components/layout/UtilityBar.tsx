"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { EMAIL, PHONE_1 } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { getLocalizedPath, LOCALES } from "@/lib/routes";
import { cn } from "@/lib/utils";

const LANGUAGE_LABELS: Record<string, string> = {
  en: "EN",
  te: "తె",
  hi: "हिं",
};

export default function UtilityBar() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="hidden h-8 items-center justify-between bg-forest px-6 text-[11px] text-white sm:flex">
      <div className="flex items-center gap-4 opacity-85">
        <a className="flex items-center gap-2 transition hover:opacity-100" href={`tel:${PHONE_1.replace(/\s/g, "")}`}>
          <Phone aria-hidden="true" className="h-3 w-3" />
          <span>{PHONE_1}</span>
        </a>
        <a className="flex items-center gap-2 transition hover:opacity-100" href={`mailto:${EMAIL}`}>
          <Mail aria-hidden="true" className="h-3 w-3" />
          <span>{EMAIL}</span>
        </a>
      </div>

      <div className="flex items-center gap-2">
        {LOCALES.map((targetLocale) => (
          <Link
            key={targetLocale}
            className={cn(
              "flex h-6 min-w-8 items-center justify-center rounded-lg px-2 text-[11px] transition",
              locale === targetLocale
                ? "bg-amber font-medium text-ink"
                : "bg-white/12 text-white hover:bg-white/20",
            )}
            href={getLocalizedPath(pathname, targetLocale)}
            hrefLang={targetLocale}
            onClick={() => trackEvent("language_switch", { locale: targetLocale })}
          >
            {LANGUAGE_LABELS[targetLocale]}
          </Link>
        ))}
      </div>
    </div>
  );
}
