import type { Metadata } from "next";
import FactoryPageClient from "@/components/pages/FactoryPageClient";

export const metadata: Metadata = {
  title: "Factory Tour | SR Enterprises",
  description: "Take a virtual factory tour of SR Enterprises and see how agri-packaging products are made.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FactoryPage({ params }: Props) {
  const { locale } = await params;

  return <FactoryPageClient locale={locale} />;
}
