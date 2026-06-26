import { Button, FadeInWhenVisible, TestimonialCard } from "@/components/ui";
import { CUSTOMER_STORIES } from "@/lib/testimonial-content";

type TestimonialsSectionProps = {
  locale: string;
};

export default function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  return (
    <section className="bg-forest px-6 py-16 text-white">
      <div className="mx-auto max-w-[1100px]">
        <header>
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">
            FARMERS AND BUSINESSES
          </span>
          <h2 className="font-display text-[22px] font-semibold leading-tight text-white lg:text-[28px]">
            Customer stories.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            Sample testimonials are in place now, ready to replace with original buyer quotes, photos and videos.
          </p>
        </header>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CUSTOMER_STORIES.slice(0, 3).map((testimonial, index) => (
            <FadeInWhenVisible delay={index * 0.08} key={testimonial.name}>
              <TestimonialCard {...testimonial} language="en" />
            </FadeInWhenVisible>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="text-mint hover:text-white" href={`/${locale}/testimonials`} inverted variant="ghost">
            Read customer stories
          </Button>
        </div>
      </div>
    </section>
  );
}
