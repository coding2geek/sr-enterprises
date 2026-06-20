"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppUrl, EMAIL, PHONE_1, PHONE_2 } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { FadeInWhenVisible } from "@/components/ui";

export default function ContactQuickCards() {
  const cards = [
    {
      icon: MessageCircle,
      title: "Chat with us live",
      desc: "Fastest reply - WhatsApp is always monitored.",
      tint: "bg-wa-green/10 text-wa-green",
      href: buildWhatsAppUrl("Hi, I'd like to know more about your products"),
      buttonClass: "bg-wa-green text-white",
      buttonText: "WhatsApp →",
      subtext: "1 hour reply · 7 days a week",
      isWhatsApp: true,
    },
    {
      icon: Phone,
      title: "Direct call",
      desc: "Speak with us during business hours.",
      tint: "bg-amber/10 text-amber",
      href: `tel:${PHONE_1.replace(/\s/g, "")}`,
      buttonClass: "bg-amber text-ink",
      buttonText: "Call now",
      subtext: "9 AM - 6 PM · Mon-Sat",
      isWhatsApp: false,
    },
    {
      icon: Mail,
      title: "Send email",
      desc: "Best for detailed quote documents.",
      tint: "bg-mint/10 text-leaf",
      href: `mailto:${EMAIL}`,
      buttonClass: "border-2 border-forest text-forest",
      buttonText: "Compose email",
      subtext: "24 hour reply · For detailed quotes",
      isWhatsApp: false,
    },
  ];

  return (
    <div className="mx-auto grid max-w-[1100px] gap-4 md:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <FadeInWhenVisible delay={index * 0.08} key={card.title}>
            <a
              className="block rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white p-6 text-center transition hover:-translate-y-0.5 hover:shadow-sm"
              href={card.href}
              onClick={() => {
                if (card.isWhatsApp) {
                  trackEvent("whatsapp_click", { location: "contact_quick_card" });
                }
              }}
              rel={card.isWhatsApp ? "noopener noreferrer" : undefined}
              target={card.isWhatsApp ? "_blank" : undefined}
            >
              <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${card.tint}`}>
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold text-forest">{card.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.desc}</p>
              {card.title === "Direct call" ? (
                <div className="mt-4 space-y-1 text-sm font-medium text-forest">
                  <div>{PHONE_1}</div>
                  <div>{PHONE_2}</div>
                </div>
              ) : (
                <div className={`mx-auto mt-4 inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-medium ${card.buttonClass}`}>
                  {card.buttonText}
                </div>
              )}
              <div className="mt-3 text-xs text-text-muted">{card.subtext}</div>
            </a>
          </FadeInWhenVisible>
        );
      })}
    </div>
  );
}
