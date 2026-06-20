"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-forest px-6 text-center text-white">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mint">SR Enterprises</div>
            <h1 className="mt-3 font-display text-[30px] font-semibold">Something went wrong</h1>
            <p className="mt-3 text-white/70">Please retry, or contact us on WhatsApp if the issue continues.</p>
            <button
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-amber px-5 font-medium text-ink"
              onClick={reset}
              type="button"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
