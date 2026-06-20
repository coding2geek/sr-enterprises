import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-forest px-6 text-center text-white">
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">404</div>
        <h1 className="mt-3 font-display text-[30px] font-semibold">Page not found · Let&apos;s get you home</h1>
        <Link
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-amber px-5 font-medium text-ink"
          href="/en"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
