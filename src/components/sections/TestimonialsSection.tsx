import { Button, FadeInWhenVisible, TestimonialCard } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";

type TestimonialsSectionProps = {
  locale: string;
};

export default function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  return (
    <section className="bg-forest px-6 py-16 text-white">
      <div className="mx-auto max-w-[1100px]">
        <header>
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">
            FARMERS & BUSINESSES WHO TRUST US
          </span>
          <h2 className="font-display text-[22px] font-semibold leading-tight text-white lg:text-[28px]">
            Real results, in their own words.
          </h2>
        </header>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <FadeInWhenVisible delay={index * 0.08} key={testimonial.name}>
              <TestimonialCard {...testimonial} />
            </FadeInWhenVisible>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="text-mint hover:text-white" href={`/${locale}/testimonials`} inverted variant="ghost">
            Read all 20+ stories →
          </Button>
        </div>
      </div>
    </section>
  );
}
