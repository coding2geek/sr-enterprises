import type { Metadata } from "next";
import GalleryPageClient from "@/components/pages/GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | SR Enterprises",
  description: "Photos and videos of SR Enterprises products, machines, factory work, and farmer results.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;

  return <GalleryPageClient locale={locale} />;
}
