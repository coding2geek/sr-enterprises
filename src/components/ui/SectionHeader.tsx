import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, lead, align = "left" }: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header className={cn(isCenter && "text-center")}>
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-leaf">
        {eyebrow}
      </span>
      <h2 className="mb-3 font-display text-[22px] font-semibold leading-tight text-forest lg:text-[28px]">
        {title}
      </h2>
      {lead ? (
        <p className={cn("max-w-[540px] text-[15px] leading-relaxed text-text-muted", isCenter && "mx-auto")}>
          {lead}
        </p>
      ) : null}
    </header>
  );
}

export type { SectionHeaderProps };
