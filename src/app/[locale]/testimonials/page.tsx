import type { Metadata } from "next";
import TestimonialsPageClient from "@/components/pages/TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Customer Stories | Fruit Covers, Leno Bags & PP Woven Bags",
  description:
    "Customer stories for SR Enterprises buyers including mango farmers, onion traders, rice mills, fertilizer suppliers and vegetable wholesalers.",
  alternates: {
    canonical: "/en/testimonials",
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;

  return <TestimonialsPageClient locale={locale} />;
}
