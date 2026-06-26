import { Camera, Mail, MapPin, Phone, Play, Share2 } from "lucide-react";
import Link from "next/link";
import { COMPANY_NAV_LINKS, PRODUCT_NAV_LINKS, SITE } from "@/lib/site-content";

type FooterProps = {
  locale: string;
};

function localizedHref(locale: string, href: string) {
  return `/${locale}${href}`;
}

export default function Footer({ locale }: FooterProps) {
  const socialIcons = [Share2, Camera, Play];
  const visibleSocials = SITE.socials.filter((social) => social.href);

  return (
    <footer className="bg-[#0F2D21] px-6 pb-5 pt-10 text-white/75">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-base font-semibold text-white">SR Enterprises</h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Manufacturers of fruit covers, leno mesh bags, and PP woven bags.
            Supporting farmers across India since 2026.
          </p>
          {visibleSocials.length > 0 ? (
            <div className="mt-5 flex items-center gap-3">
              {visibleSocials.map((social, index) => {
                const Icon = socialIcons[index] ?? Share2;

                return (
                  <a
                    key={social.label}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    href={social.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Products</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {PRODUCT_NAV_LINKS.map((item) => (
              <Link key={item.label} className="transition hover:text-white" href={localizedHref(locale, item.href)}>
                {item.label}
              </Link>
            ))}
            <Link className="transition hover:text-white" href={localizedHref(locale, "/products/pp-woven-bags")}>
              Custom printing
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Company</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {COMPANY_NAV_LINKS.map((item) => (
              <Link key={item.label} className="transition hover:text-white" href={localizedHref(locale, item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Get in touch</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a className="flex gap-2 transition hover:text-white" href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{SITE.phonePrimary}</span>
            </a>
            <a className="flex gap-2 transition hover:text-white" href={`tel:${SITE.phoneSecondary.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{SITE.phoneSecondary}</span>
            </a>
            <a className="flex gap-2 transition hover:text-white" href={`mailto:${SITE.email}`}>
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{SITE.email}</span>
            </a>
            <a className="flex gap-2 leading-relaxed transition hover:text-white" href={SITE.mapsUrl} rel="noopener noreferrer" target="_blank">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{SITE.address}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4 text-center text-[11px] text-white/40">
        © 2026 SR Enterprises · All rights reserved
      </div>
    </footer>
  );
}
