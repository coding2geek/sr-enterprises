import { CtaBox, EnquiryForm } from "@/components/ui";
import { buildWhatsAppUrl, PHONE_1 } from "@/lib/constants";

export default function MainCta() {
  return (
    <section className="bg-white px-6 py-16" id="enquiry">
      <div className="mx-auto max-w-[1100px]">
        <CtaBox
          description="WhatsApp us your requirement — quantity, product, and delivery location. We reply within 1 hour with pricing and delivery estimate."
          formSlot={
            <div className="rounded-xl bg-white p-5">
              <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">
                OR FILL THIS QUICK FORM
              </div>
              <EnquiryForm variant="compact" />
            </div>
          }
          primaryButton={{
            label: "WhatsApp us now",
            href: buildWhatsAppUrl("Hi, I need a bulk quote"),
          }}
          secondaryButton={{
            label: "Call: 99856 36699",
            href: `tel:${PHONE_1.replace(/\s/g, "")}`,
          }}
          title="Need a bulk quote? Talk to us directly."
          variant="sage"
        >
          <ul className="space-y-1 text-xs text-leaf">
            <li>✓ Free sample available</li>
            <li>✓ 24hr quote turnaround</li>
            <li>✓ All India delivery</li>
          </ul>
        </CtaBox>
      </div>
    </section>
  );
}
