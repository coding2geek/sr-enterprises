import { getTranslations } from "next-intl/server";
import { TrustPill } from "@/components/ui";

export default async function TrustBar() {
  const t = await getTranslations("home.trustBar");

  return (
    <section className="bg-cream px-6 py-5">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 lg:grid-cols-4">
        <TrustPill icon="🏭" subtitle={t("latestMachinery")} title={t("modernFactory")} />
        <TrustPill icon="🚚" subtitle={t("shipAnywhere")} title={t("allIndiaDelivery")} />
        <TrustPill icon="🎨" subtitle={t("brandAnyColor")} title={t("customPrinting")} />
        <TrustPill icon="💬" subtitle={t("whatsappSupport")} title={t("replyInOneHour")} />
      </div>
    </section>
  );
}
