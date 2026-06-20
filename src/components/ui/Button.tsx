"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "amber" | "whatsapp" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  inverted?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2a9.86 9.86 0 0 0-8.37 15.08L2.45 21.5l4.55-1.19A9.86 9.86 0 1 0 12.04 2Zm5.78 14.12c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.12.08-1.8-.11-.42-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.17-1.55-1.17-2.96 0-1.41.74-2.1 1-2.38.26-.29.57-.36.76-.36h.55c.17.01.41-.06.64.49.24.58.81 1.99.88 2.13.07.14.12.31.02.5-.1.2-.14.31-.29.48-.14.17-.31.38-.43.51-.14.14-.29.29-.12.57.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.44.29.14.45.12.62-.07.19-.21.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.68.79 1.97.93.29.14.48.21.55.33.07.12.07.69-.17 1.37Z" />
    </svg>
  );
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-forest text-white hover:bg-leaf",
  amber: "bg-amber text-ink hover:bg-amber/90",
  whatsapp: "bg-wa-green text-white hover:bg-wa-green/90",
  outline: "border-2 border-forest bg-transparent text-forest hover:bg-sage",
  ghost: "bg-transparent text-forest underline underline-offset-4 hover:text-leaf",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

export default function Button({
  variant = "primary",
  size = "lg",
  icon,
  href,
  onClick,
  children,
  className,
  target,
  rel,
  inverted = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const renderedIcon = variant === "whatsapp" && icon === undefined ? <WhatsAppIcon /> : icon;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    inverted && variant === "outline" && "border-white/30 text-white hover:bg-white/10",
    disabled && "pointer-events-none opacity-60",
    className,
  );
  const handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (event) => {
    if (variant === "whatsapp") {
      trackEvent("whatsapp_click", { label: typeof children === "string" ? children : "WhatsApp CTA" });
    }

    onClick?.(event);
  };

  if (href) {
    return (
      <a className={classes} href={href} onClick={handleClick} rel={rel} target={target}>
        {renderedIcon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={handleClick} type={type}>
      {renderedIcon}
      {children}
    </button>
  );
}

export type { ButtonProps };
