import type { Metadata } from "next";
import Script from "next/script";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import DeliveryTrust from "@/components/sections/DeliveryTrust";
import FactoryVideoGrid from "@/components/sections/FactoryVideoGrid";
import HeroSection from "@/components/sections/HeroSection";
import MainCta from "@/components/sections/MainCta";
import ProductsOverview from "@/components/sections/ProductsOverview";
import SpecsTable from "@/components/sections/SpecsTable";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustBar from "@/components/sections/TrustBar";
import { EMAIL, PHONE_1 } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SR Enterprises | Fruit Covers & Packaging Bags Manufacturer",
  description:
    "Quality fruit protection covers, leno mesh bags, and PP woven bags. Serving farmers across India since 2026.",
  openGraph: {
    title: "SR Enterprises | Fruit Covers & Packaging Bags Manufacturer",
    description:
      "Quality fruit protection covers, leno mesh bags, and PP woven bags. Serving farmers across India since 2026.",
    type: "website",
  },
  keywords: [
    "fruit covers",
    "mango covers",
    "leno bags",
    "PP woven bags",
    "agricultural packaging",
    "Andhra Pradesh manufacturer",
  ],
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SR Enterprises",
    description:
      "Quality fruit protection covers, leno mesh bags, and PP woven bags for farmers and businesses across India.",
    telephone: PHONE_1,
    email: EMAIL,
    openingHours: "Mo-Sa 09:00-18:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Burri Venkateswarao Gardens, Vijayawada-Nuzivid Road, Pothavarappadu",
      addressLocality: "Agiripalli Mandal",
      addressRegion: "Andhra Pradesh",
      postalCode: "521212",
      addressCountry: "IN",
    },
    areaServed: "India",
    url: `https://sr-enterprises-five.vercel.app/${locale}`,
  };

  return (
    <>
      <Script
        id="sr-enterprises-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <ProductsOverview />
      <BeforeAfterSection locale={locale} />
      <SpecsTable />
      <FactoryVideoGrid locale={locale} />
      <TestimonialsSection locale={locale} />
      <DeliveryTrust />
      <MainCta />
    </>
  );
}
