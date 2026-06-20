import { getTranslations } from "next-intl/server";
import { BeforeAfterStatic, Button, SectionHeader } from "@/components/ui";

type BeforeAfterSectionProps = {
  locale: string;
};

export default async function BeforeAfterSection({ locale }: BeforeAfterSectionProps) {
  const t = await getTranslations("home.beforeAfter");

  return (
    <section className="bg-cream px-6 py-16">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow={t("eyebrow")} lead={t("lead")} title={t("title")} />
          <div className="mt-6">
            <Button href={`/${locale}/testimonials`} variant="primary">
              {t("button")}
            </Button>
          </div>
        </div>
        <BeforeAfterStatic
          leftImage="/images/unprotected-mango.jpg"
          leftLabel={t("leftLabel")}
          rightImage="/images/protected-mango.jpg"
          rightLabel={t("rightLabel")}
        />
      </div>
    </section>
  );
}
