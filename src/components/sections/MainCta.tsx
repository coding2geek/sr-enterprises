import { getTranslations } from "next-intl/server";
import { CtaBox, EnquiryForm } from "@/components/ui";
import { buildWhatsAppUrl, PHONE_1 } from "@/lib/constants";

export default async function MainCta() {
  const t = await getTranslations("home.mainCta");

  return (
    <section className="bg-white px-6 py-16" id="enquiry">
      <div className="mx-auto max-w-[1100px]">
        <CtaBox
          description={t("description")}
          formSlot={
            <div className="rounded-xl bg-white p-5">
              <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.08em] text-text-muted">
                {t("formTitle")}
              </div>
              <EnquiryForm variant="compact" />
            </div>
          }
          primaryButton={{
            label: t("primary"),
            href: buildWhatsAppUrl("Hi, I need a bulk quote"),
          }}
          secondaryButton={{
            label: t("secondary"),
            href: `tel:${PHONE_1.replace(/\s/g, "")}`,
          }}
          title={t("title")}
          variant="sage"
        >
          <ul className="space-y-1 text-xs text-leaf">
            <li>✓ {t("freeSample")}</li>
            <li>✓ {t("quoteTurnaround")}</li>
            <li>✓ {t("delivery")}</li>
          </ul>
        </CtaBox>
      </div>
    </section>
  );
}
