import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream px-6 py-2.5 text-[11px]">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li className="flex items-center gap-1" key={`${item.label}-${index}`}>
            {index > 0 ? <span className="text-text-muted">·</span> : null}
            {item.href ? (
              <Link className="text-leaf transition hover:text-forest" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-text-muted">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export type { BreadcrumbProps, BreadcrumbItem };
