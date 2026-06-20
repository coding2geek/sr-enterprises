"use client";

import { useMemo, useState } from "react";
import { buildWhatsAppUrl, EMAIL, PRODUCTS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import Button from "./Button";

type EnquiryFormProps = {
  variant?: "full" | "compact";
};

const inputClasses =
  "min-h-12 w-full rounded-lg border-[0.5px] border-[#E5E7EB] bg-white px-3 py-3 text-base text-ink outline-none transition focus:border-leaf focus:ring-2 focus:ring-sage";

export default function EnquiryForm({ variant = "full" }: EnquiryFormProps) {
  const [productType, setProductType] = useState(PRODUCTS[0]?.name ?? "");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const isCompact = variant === "compact";

  const quoteMessage = useMemo(() => {
    const lines = [
      "Hi, I need a quote.",
      `Product: ${productType}`,
      `Quantity: ${quantity}`,
    ];

    if (!isCompact && location) {
      lines.push(`Delivery to: ${location}`);
    }

    lines.push(`Name: ${name}`, `Phone: ${phone}`);

    if (!isCompact && message) {
      lines.push(`Additional: ${message}`);
    }

    return lines.join("\n");
  }, [isCompact, location, message, name, phone, productType, quantity]);

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(quoteMessage)}`;

  return (
    <form
      className="space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("Opening WhatsApp...");
        trackEvent("form_submit", { product: productType, variant });
        trackEvent("whatsapp_click", { location: "enquiry_form", product: productType });
        window.open(buildWhatsAppUrl(quoteMessage), "_blank", "noopener,noreferrer");
        window.setTimeout(() => setStatus(""), 1500);
      }}
    >
      <label className="block">
        <span className="mb-1 block text-[11px] font-medium uppercase text-text-muted">Product</span>
        <select className={inputClasses} onChange={(event) => setProductType(event.target.value)} value={productType}>
          {PRODUCTS.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
          <option value="Multiple products">Multiple products</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1 block text-[11px] font-medium uppercase text-text-muted">Quantity</span>
        <input
          className={inputClasses}
          onChange={(event) => setQuantity(event.target.value)}
          placeholder="e.g. 5000 pieces"
          value={quantity}
        />
      </label>

      {!isCompact ? (
        <label className="block">
          <span className="mb-1 block text-[11px] font-medium uppercase text-text-muted">Location</span>
          <input
            className={inputClasses}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="City, State"
            value={location}
          />
        </label>
      ) : null}

      <label className="block">
        <span className="mb-1 block text-[11px] font-medium uppercase text-text-muted">Name</span>
        <input className={inputClasses} onChange={(event) => setName(event.target.value)} value={name} />
      </label>

      <label className="block">
        <span className="mb-1 block text-[11px] font-medium uppercase text-text-muted">Phone</span>
        <input
          className={inputClasses}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="+91 XXXXX XXXXX"
          type="tel"
          value={phone}
        />
      </label>

      {!isCompact ? (
        <label className="block">
          <span className="mb-1 block text-[11px] font-medium uppercase text-text-muted">Message</span>
          <textarea
            className={`${inputClasses} min-h-24 resize-y`}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Any additional details..."
            value={message}
          />
        </label>
      ) : null}

      <Button className="w-full" type="submit" variant="whatsapp">
        Send via WhatsApp
      </Button>

      {status ? <div className="text-center text-xs font-medium text-leaf">{status}</div> : null}

      <a className="block text-center text-xs font-medium text-forest underline underline-offset-4" href={mailtoHref}>
        Or send as email
      </a>

      <div className="text-xs text-leaf">✓ Free sample available on request</div>
    </form>
  );
}

export type { EnquiryFormProps };
