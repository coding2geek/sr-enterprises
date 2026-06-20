import type { Metadata } from "next";
import { Breadcrumb, CtaBox, SectionHeader, StatCard } from "@/components/ui";
import { ADDRESS, buildWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | SR Enterprises",
  description:
    "Learn about SR Enterprises, a modern agri-packaging manufacturer supporting farmers across India from Andhra Pradesh.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "About us" },
        ]}
      />

      <section className="bg-forest px-6 py-12">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">WHO WE ARE</div>
            <h1 className="mt-3 max-w-[620px] font-display text-[30px] font-semibold leading-tight text-white lg:text-[40px]">
              Supporting farmers — one <span className="text-mint">harvest</span> at a time.
            </h1>
            <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-white/75">
              SR Enterprises is a modern agri-packaging manufacturer on the Vijayawada-Nuzvid road in Andhra Pradesh.
              We make protective covers and packaging bags that help farmers earn more.
            </p>
          </div>
          <div className="relative h-[260px] rounded-2xl bg-gradient-to-br from-leaf via-mint to-forest">
            <div className="absolute bottom-4 left-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink">
              ✓ Family-run · Est. 2026
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-7">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-3.5 lg:grid-cols-4">
          <StatCard label="Farmers served" value="1000+" />
          <StatCard label="Product lines" value="3" />
          <StatCard label="States delivered" value="15+" />
          <StatCard label="Quote turnaround" value="24 hr" />
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="OUR STORY" title="From a family farm to a modern factory." />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/80">
              <p>
                SR Enterprises was founded in 2026 by a family that has farmed mango and fruit crops in Krishna
                district for three generations. We knew firsthand how much damage insects, sun, and rain cause to
                unprotected fruit — and how much better prices farmers get for clean, unblemished produce.
              </p>
              <p>
                That experience led us to set up our own manufacturing facility. Today we supply farmers and
                businesses across 15+ states — but our mission is still the same: help every farmer earn more from
                every harvest.
              </p>
            </div>
            <div className="mt-5 flex gap-2">
              <span className="rounded-full bg-sage px-3 py-1 text-xs font-medium text-leaf">Farmer-first</span>
              <span className="rounded-full bg-sage px-3 py-1 text-xs font-medium text-leaf">Made in Andhra</span>
            </div>
          </div>
          <div className="h-[300px] rounded-2xl bg-gradient-to-br from-sage via-mint to-leaf" />
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader eyebrow="HOW WE GOT HERE" title="Our journey so far." />
          <div className="relative mt-8 grid gap-6 md:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-mint md:block" />
            {[
              ["2024", "Started research", "Studied farmer needs across Krishna & Eluru districts."],
              ["2025", "Factory setup", "Installed modern leno & PP woven machinery."],
              ["2026", "Full launch", "Started serving farmers across India."],
              ["Next", "Export-ready", "Expanding to GCC and Southeast Asia."],
            ].map(([year, title, desc], index) => (
              <div className="relative text-center" key={year}>
                <div className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-semibold ${index === 3 ? "bg-amber text-ink" : "bg-forest text-white"}`}>
                  {index + 1}
                </div>
                <div className="mt-3 text-sm font-semibold text-forest">{year} · {title}</div>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader eyebrow="WHAT WE STAND FOR" title="Our values, in practice." />
          <div className="mt-7 grid gap-3.5 md:grid-cols-3">
            {[
              ["🌱", "Farmer-first thinking", "Every product decision starts with: 'will this help a farmer earn more?' If the answer isn't clear, we don't make it."],
              ["🛡️", "Quality without compromise", "Our covers are tested in real orchards. Our bags handle 50kg loads. We sell what we'd use on our own farms."],
              ["🤝", "Accessible to all", "From 1,000-piece small orders to 1-lakh bulk contracts. Free samples, direct WhatsApp, Telugu support."],
            ].map(([icon, title, desc]) => (
              <article className="rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white p-5" key={title}>
                <div className="text-2xl">{icon}</div>
                <h3 className="mt-3 font-display text-base font-semibold text-forest">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-6 py-12 text-white">
        <div className="mx-auto max-w-[1100px]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">THE PEOPLE BEHIND IT</span>
          <h2 className="mt-2 font-display text-[28px] font-semibold">Meet the team.</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ["RS", "Ravi Shankar", "Founder & CEO", "We built this factory to solve problems we faced on our own farm."],
              ["SR", "Srinivas Rao", "Operations head", "Every bag leaving the factory is inspected. No exceptions."],
              ["LK", "Lakshmi Kumari", "Customer relations", "Telugu, Hindi, English — I speak to every farmer who calls."],
            ].map(([initials, name, role, quote]) => (
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center" key={name}>
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-mint to-leaf font-display text-xl font-semibold text-forest">
                  {initials}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">{name}</h3>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-mint">{role}</div>
                <p className="mt-3 text-[11px] italic leading-relaxed text-white/70">&quot;{quote}&quot;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeader eyebrow="TRUST & COMPLIANCE" title="Registered, certified, accountable." />
          <div className="mt-7 rounded-2xl bg-white p-5">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                ["GST registered", "Full tax compliance"],
                ["MSME certified", "Udyam registered"],
                ["ISI standards", "Material tested"],
                ["IndiaMART verified", "Seller profile"],
              ].map(([title, subtitle]) => (
                <div key={title}>
                  <div className="text-sm font-semibold text-forest">✓ {title}</div>
                  <div className="mt-1 text-xs text-text-muted">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1100px]">
          <CtaBox
            description="Visit the factory on Vijayawada-Nuzvid road, or take a virtual tour online. We welcome buyers, farmers, and anyone curious about agri-packaging."
            image={<div className="h-[220px] rounded-2xl bg-gradient-to-br from-leaf via-mint to-sage p-5 text-sm text-forest">{ADDRESS}</div>}
            primaryButton={{ label: "Take factory tour →", href: `/${locale}/factory`, variant: "primary" }}
            secondaryButton={{ label: "WhatsApp us", href: buildWhatsAppUrl("Hi, I want to know more about SR Enterprises"), variant: "whatsapp" }}
            title="Want to see where we work?"
            variant="sage"
          />
        </div>
      </section>
    </>
  );
}
