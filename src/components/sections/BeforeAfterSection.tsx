import { BeforeAfterStatic, Button, SectionHeader } from "@/components/ui";

type BeforeAfterSectionProps = {
  locale: string;
};

export default function BeforeAfterSection({ locale }: BeforeAfterSectionProps) {
  return (
    <section className="bg-cream px-6 py-16">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="THE DIFFERENCE IS VISIBLE"
            lead="Mangoes grown without protection develop spots, insect marks, and sun damage — selling for half the price of clean fruit. Covers pay for themselves in the first harvest."
            title="See what fruit covers do."
          />
          <div className="mt-6">
            <Button href={`/${locale}/testimonials`} variant="primary">
              Watch farmer stories →
            </Button>
          </div>
        </div>
        <BeforeAfterStatic
          leftImage="/images/unprotected-mango.jpg"
          leftLabel="❌ Without cover"
          rightImage="/images/protected-mango.jpg"
          rightLabel="✅ With cover"
        />
      </div>
    </section>
  );
}
