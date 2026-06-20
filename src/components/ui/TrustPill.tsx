import type { ReactNode } from "react";

type TrustPillProps = {
  icon: string | ReactNode;
  title: string;
  subtitle: string;
};

export default function TrustPill({ icon, title, subtitle }: TrustPillProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-sage text-lg">
        {icon}
      </div>
      <div>
        <div className="text-[11px] font-medium leading-tight text-forest">{title}</div>
        <div className="text-[10px] leading-tight text-text-muted">{subtitle}</div>
      </div>
    </div>
  );
}

export type { TrustPillProps };
