type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border-[0.5px] border-[#E5E7EB] bg-white p-[18px] text-center">
      <div className="font-display text-[30px] font-semibold leading-none text-forest">{value}</div>
      <div className="mt-1.5 text-[11px] font-medium uppercase text-text-muted">{label}</div>
    </div>
  );
}

export type { StatCardProps };
