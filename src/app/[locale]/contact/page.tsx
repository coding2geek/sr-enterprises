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
import { ADDRESS, PHONE_1 } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | SR Enterprises",
  description:
    "Contact SR Enterprises in Pothavarappadu, Andhra Pradesh. WhatsApp +91 99856 36699 for fruit covers, leno bags, and PP woven bags.",
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
    question: "Do you offer free samples?",
    answer: "Yes, free samples for all products. Just WhatsApp us with your requirement and shipping address.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard orders: 7-20 days depending on product. Custom-printed orders: add 5-7 days. We ship via road to all Indian states.",
  },
  {
    question: "Can I customize the printing on PP bags?",
    answer:
      "Yes, full-color custom printing available with MOQ 10,000 bags. Send us your design via WhatsApp or email.",
  },
  {
    question: "Do you ship outside India?",
    answer: "We're expanding to GCC and Southeast Asia. Contact us for export enquiries.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "50% advance on order, 50% before dispatch. For repeat customers, we offer 30-day credit on approved accounts.",
  },
  {
    question: "Can I visit the factory?",
    answer:
      "Yes, we welcome buyers and farmers. Please call ahead to schedule - we're in Pothavarappadu, Agiripalli Mandal, Eluru District.",
  },
  {
    question: "Do you have GST and proper invoicing?",
    answer: "Yes, we're GST-registered and MSME-certified. All orders come with proper GST invoices.",
  },
];

const states = [
  "Andhra Pradesh",
  "Telangana",
  "Karnataka",
  "Tamil Nadu",
  "Maharashtra",
  "Gujarat",
  "Rajasthan",
  "Madhya Pradesh",
  "Uttar Pradesh",
  "Punjab",
  "West Bengal",
  "Kerala",
  "Odisha",
  "Chhattisgarh",
  "Haryana",
];

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

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
          We reply within 1 hour on WhatsApp.
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
                src="https://www.google.com/maps?q=Pothavarappadu,Agiripalli+Mandal,Eluru+District,Andhra+Pradesh,521212&output=embed"
                style={{ border: 0 }}
                width="100%"
              />
            </div>
            <div className="mt-5 rounded-2xl bg-white p-5">
              <p className="text-sm leading-relaxed text-ink">{ADDRESS}</p>
              <p className="mt-2 text-sm font-medium text-ink">Mon-Sat · 9 AM to 6 PM</p>
              <p className="mt-1 text-sm text-text-muted">Walk-ins welcome · Call first recommended</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={mapsUrl} rel="noopener noreferrer" target="_blank" variant="primary">
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
          <SectionHeader align="center" eyebrow="DELIVERY" title="We deliver across India." />
          <div className="mt-7 rounded-2xl bg-white p-8">
            {/* Swap this placeholder for a real India SVG map with highlighted states later. */}
            <div className="mx-auto flex h-[200px] max-w-md items-center justify-center rounded-2xl bg-gradient-to-br from-sage via-mint/30 to-cream text-forest">
              India delivery coverage
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {states.map((state) => (
                <span className="rounded-full bg-sage px-3 py-1.5 text-xs font-medium text-leaf" key={state}>
                  {state}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-text-muted">
              Don&apos;t see your state?{" "}
              <a className="font-medium text-forest underline underline-offset-4" href="#enquiry">
                Contact us →
              </a>{" "}
              we ship anywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted">
          <span>Follow us for farmer stories and factory updates</span>
          <a className="rounded-full bg-sage px-3 py-1 text-leaf" href="#">Facebook</a>
          <a className="rounded-full bg-sage px-3 py-1 text-leaf" href="#">Instagram</a>
          <a className="rounded-full bg-sage px-3 py-1 text-leaf" href="#">YouTube</a>
        </div>
      </section>
    </>
  );
}
