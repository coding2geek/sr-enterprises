import type { Metadata } from "next";
import GalleryPageClient from "@/components/pages/GalleryPageClient";

export const metadata: Metadata = {
  title: "Factory & Product Gallery | Fruit Covers, Leno Bags, PP Woven Bags",
  description:
    "View SR Enterprises gallery for fruit protection covers, leno mesh bags, PP woven bags, factory machines, printing, packing and dispatch.",
  keywords: [
    "fruit cover photos",
    "leno mesh bag photos",
    "PP woven bag factory",
    "packaging bag machine videos",
    "agricultural packaging gallery",
  ],
  alternates: {
    canonical: "/en/gallery",
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;

  return <GalleryPageClient locale={locale} />;
}
