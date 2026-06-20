import type { Metadata } from "next";
import TestimonialsPageClient from "@/components/pages/TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Testimonials | SR Enterprises",
  description: "Stories from farmers, traders, rice mills, and businesses using SR Enterprises packaging products.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;

  return <TestimonialsPageClient locale={locale} />;
}
