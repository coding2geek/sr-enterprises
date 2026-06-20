import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Button, { type ButtonVariant } from "./Button";

type CtaButton = {
  label: string;
  href: string;
  variant?: ButtonVariant;
};

type CtaBoxProps = {
  variant: "sage" | "amber" | "dark";
  title: string;
  description: string;
  primaryButton: CtaButton;
  secondaryButton?: CtaButton;
  image?: ReactNode;
  formSlot?: ReactNode;
  children?: ReactNode;
};

const variantClasses = {
  sage: "border-2 border-mint bg-sage text-ink",
  amber: "border-2 border-amber bg-amber/10 text-ink",
  dark: "border-2 border-forest bg-forest text-white",
};

export default function CtaBox({
  variant,
  title,
  description,
  primaryButton,
  secondaryButton,
  image,
  formSlot,
  children,
}: CtaBoxProps) {
  const isDark = variant === "dark";

  return (
    <section className={cn("rounded-[20px] p-6 lg:p-8", variantClasses[variant])}>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold leading-tight">{title}</h2>
          <p className={cn("mt-3 text-sm leading-relaxed", isDark ? "text-white/75" : "text-text-muted")}>
            {description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryButton.href} variant={primaryButton.variant ?? "whatsapp"}>
              {primaryButton.label}
            </Button>
            {secondaryButton ? (
              <Button href={secondaryButton.href} inverted={isDark} variant={secondaryButton.variant ?? "outline"}>
                {secondaryButton.label}
              </Button>
            ) : null}
          </div>
          {children ? <div className="mt-4">{children}</div> : null}
        </div>

        {image || formSlot ? <div>{image ?? formSlot}</div> : null}
      </div>
    </section>
  );
}

export type { CtaBoxProps };
