import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import ContactQuickCards from "@/components/pages/ContactQuickCards";
import {
  Breadcrumb,
  Button,
  EnquiryForm,
  FaqAccordion,
  SectionHeader,
} from "@/components/ui";
import { PHONE_1 } from "@/lib/constants";
import { DELIVERY_STATES, SITE } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact SR Enterprises | Fruit Covers & Packaging Bags Quote",
  description:
    "Contact SR Enterprises in Pothavarappadu, Andhra Pradesh for fruit protection covers, leno mesh bags, PP woven bags, samples and bulk quote requests.",
  alternates: {
    canonical: "/en/contact",
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

const faqs = [
  {
    question: "What's your minimum order quantity?",
    answer:
      "Depends on the product: 1,000 for fruit covers, 5,000 for leno bags, 10,000 for PP woven bags. Custom orders above these minimums are welcome.",
  },
  {
    question: "Do you offer samples?",
    answer: "Samples are available on request. WhatsApp us with your product requirement and shipping address.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard orders usually depend on the product and quantity. Custom-printed orders need artwork approval before production.",
  },
  {
    question: "Can I customize the printing on PP bags?",
    answer:
      "Yes, custom printing is available for PP woven bags. Send your design, bag size and quantity via WhatsApp or email.",
  },
  {
    question: "Can I visit the factory?",
    answer:
      "Yes, buyers can visit the factory. Please call ahead to schedule a walkthrough in Pothavarappadu, Agiripalli Mandal, Eluru District.",
  },
];

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Contact" },
        ]}
      />

      <section className="bg-forest px-6 py-10 text-center text-white">
        <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">GET IN TOUCH</div>
        <h1 className="mt-3 font-display text-[28px] font-semibold leading-tight">
          Send your requirement for a fast quote.
        </h1>
      </section>

      <section className="bg-white px-6 py-12">
        <ContactQuickCards />
      </section>

      <section className="bg-cream px-6 py-12" id="enquiry">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6">
            <h2 className="mb-5 font-display text-xl font-semibold text-forest">SEND AN ENQUIRY</h2>
            <EnquiryForm variant="full" />
          </div>
          <div>
            <div className="h-[280px] overflow-hidden rounded-2xl">
              <iframe
                height="100%"
                loading="lazy"
                src={SITE.mapEmbedUrl}
                style={{ border: 0 }}
                title="SR Enterprises factory location map"
                width="100%"
              />
            </div>
            <div className="mt-5 rounded-2xl bg-white p-5">
              <p className="text-sm leading-relaxed text-ink">{SITE.address}</p>
              <p className="mt-2 text-sm font-medium text-ink">{SITE.businessHours}</p>
              <p className="mt-1 text-sm text-text-muted">Walk-ins welcome. Call first recommended.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={SITE.mapsUrl} rel="noopener noreferrer" target="_blank" variant="primary">
                  <MapPin aria-hidden="true" className="h-4 w-4" /> Open in Maps
                </Button>
                <Button href={`tel:${PHONE_1.replace(/\s/g, "")}`} variant="outline">
                  Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[800px]">
          <SectionHeader align="center" eyebrow="FAQ" title="Common questions" />
          <div className="mt-7">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-12 text-center">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader align="center" eyebrow="DELIVERY" title="Delivery coverage." />
          <div className="mt-7 rounded-2xl bg-white p-8">
            <div className="mx-auto flex h-[200px] max-w-md items-center justify-center rounded-2xl bg-gradient-to-br from-sage via-mint/30 to-cream text-forest">
              India delivery coverage placeholder
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {DELIVERY_STATES.map((state) => (
                <span className="rounded-full bg-sage px-3 py-1.5 text-xs font-medium text-leaf" key={state}>
                  {state}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-text-muted">
              Do not see your state?{" "}
              <a className="font-medium text-forest underline underline-offset-4" href="#enquiry">
                Contact us
              </a>{" "}
              with your delivery location.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted">
          <span>Follow us for farmer stories and factory updates</span>
          {SITE.socials.some((social) => social.href) ? (
            SITE.socials
              .filter((social) => social.href)
              .map((social) => (
                <a className="rounded-full bg-sage px-3 py-1 text-leaf" href={social.href} key={social.label}>
                  {social.label}
                </a>
              ))
          ) : (
            <span className="rounded-full bg-sage px-3 py-1 text-leaf">Social links coming soon</span>
          )}
        </div>
      </section>
    </>
  );
}
