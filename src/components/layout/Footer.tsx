import { Camera, Mail, MapPin, Phone, Play, Share2 } from "lucide-react";
import Link from "next/link";
import { ADDRESS, EMAIL, PHONE_1, PHONE_2 } from "@/lib/constants";

const PRODUCT_LINKS = [
  { label: "Fruit Protection Covers", href: "/products/fruit-covers" },
  { label: "Leno Mesh Bags", href: "/products/leno-bags" },
  { label: "PP Woven Bags", href: "/products/pp-woven-bags" },
  { label: "Custom printing", href: "/products/pp-woven-bags" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Factory tour", href: "/factory" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
];

type FooterProps = {
  locale: string;
};

function localizedHref(locale: string, href: string) {
  return `/${locale}${href}`;
}

export default function Footer({ locale }: FooterProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

  return (
    <footer className="bg-[#0F2D21] px-6 pb-5 pt-10 text-white/75">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-base font-semibold text-white">SR Enterprises</h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Manufacturers of fruit covers, leno mesh bags, and PP woven bags.
            Supporting farmers across India since 2026.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { label: "Facebook", icon: Share2 },
              { label: "Instagram", icon: Camera },
              { label: "YouTube", icon: Play },
            ].map(({ label, icon: Icon }) => (
              <a
                key={label}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                href="#"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Products</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {PRODUCT_LINKS.map((item) => (
              <Link key={item.label} className="transition hover:text-white" href={localizedHref(locale, item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Company</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {COMPANY_LINKS.map((item) => (
              <Link key={item.label} className="transition hover:text-white" href={localizedHref(locale, item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Get in touch</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a className="flex gap-2 transition hover:text-white" href={`tel:${PHONE_1.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{PHONE_1}</span>
            </a>
            <a className="flex gap-2 transition hover:text-white" href={`tel:${PHONE_2.replace(/\s/g, "")}`}>
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{PHONE_2}</span>
            </a>
            <a className="flex gap-2 transition hover:text-white" href={`mailto:${EMAIL}`}>
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{EMAIL}</span>
            </a>
            <a className="flex gap-2 leading-relaxed transition hover:text-white" href={mapsUrl} rel="noopener noreferrer" target="_blank">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>{ADDRESS}</span>
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
