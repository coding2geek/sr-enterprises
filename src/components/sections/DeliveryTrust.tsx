import { FadeInWhenVisible, SectionHeader, StatCard } from "@/components/ui";

export default function DeliveryTrust() {
  return (
    <section className="bg-cream px-6 py-12">
      <div className="mx-auto max-w-[1100px] text-center">
        <SectionHeader align="center" eyebrow="TRUSTED ACROSS INDIA" title="We deliver to 15+ states." />
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            ["Farmers served", "1000+"],
            ["States delivered", "15+"],
            ["Product lines", "3"],
            ["Quote reply", "24 hr"],
          ].map(([label, value], index) => (
            <FadeInWhenVisible delay={index * 0.08} key={label}>
              <StatCard label={label} value={value} />
            </FadeInWhenVisible>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["✓ GST Registered", "✓ MSME Certified", "✓ ISI Standards", "✓ IndiaMART Verified"].map((badge) => (
            <span className="rounded-full border-[0.5px] border-[#E5E7EB] bg-white px-3 py-1.5 text-xs text-ink" key={badge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
