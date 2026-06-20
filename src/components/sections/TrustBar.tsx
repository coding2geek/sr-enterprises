import { TrustPill } from "@/components/ui";

export default function TrustBar() {
  return (
    <section className="bg-cream px-6 py-5">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-4 lg:grid-cols-4">
        <TrustPill icon="🏭" subtitle="Latest machinery" title="Modern factory" />
        <TrustPill icon="🚚" subtitle="We ship anywhere" title="All India delivery" />
        <TrustPill icon="🎨" subtitle="Your brand, any color" title="Custom printing" />
        <TrustPill icon="💬" subtitle="WhatsApp support" title="Reply in 1 hour" />
      </div>
    </section>
  );
}
