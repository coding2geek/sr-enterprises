import type { Metadata } from "next";
import FactoryPageClient from "@/components/pages/FactoryPageClient";

export const metadata: Metadata = {
  title: "Factory Tour | Packaging Bag Manufacturing in Andhra Pradesh",
  description:
    "See SR Enterprises factory media for machine working videos, fruit cover packing, leno mesh bag manufacturing, PP woven printing and dispatch.",
  keywords: [
    "packaging bag factory Andhra Pradesh",
    "PP woven bag manufacturing machine",
    "leno mesh bag machine",
    "fruit cover manufacturing",
    "agricultural packaging factory",
  ],
  alternates: {
    canonical: "/en/factory",
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FactoryPage({ params }: Props) {
  const { locale } = await params;

  return <FactoryPageClient locale={locale} />;
}
