import { getTranslations } from "next-intl/server";
import { SectionHeader, StatCard } from "@/components/ui";

export default async function DeliveryTrust() {
  const t = await getTranslations("home.deliveryTrust");

  return (
    <section className="bg-cream px-6 py-12">
      <div className="mx-auto max-w-[1100px] text-center">
        <SectionHeader align="center" eyebrow={t("eyebrow")} title={t("title")} />
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label={t("farmersServed")} value="1000+" />
          <StatCard label={t("statesDelivered")} value="15+" />
          <StatCard label={t("productLines")} value="3" />
          <StatCard label={t("quoteReply")} value="24 hr" />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["gst", "msme", "isi", "indiamart"].map((badge) => (
            <span className="rounded-full border-[0.5px] border-[#E5E7EB] bg-white px-3 py-1.5 text-xs text-ink" key={badge}>
              ✓ {t(`badges.${badge}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
