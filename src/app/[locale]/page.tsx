import type { Metadata } from "next";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import DeliveryTrust from "@/components/sections/DeliveryTrust";
import FactoryVideoGrid from "@/components/sections/FactoryVideoGrid";
import HeroSection from "@/components/sections/HeroSection";
import MainCta from "@/components/sections/MainCta";
import MediaShowcase from "@/components/sections/MediaShowcase";
import ProductsOverview from "@/components/sections/ProductsOverview";
import SpecsTable from "@/components/sections/SpecsTable";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustBar from "@/components/sections/TrustBar";
import { EMAIL, PHONE_1 } from "@/lib/constants";
import { SEO_KEYWORDS, SITE } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Fruit Covers, Leno Mesh Bags & PP Woven Bags Manufacturer",
  description:
    "SR Enterprises manufactures fruit protection covers, leno mesh bags and PP woven bags for farmers, traders, rice mills and bulk packaging buyers across India.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "SR Enterprises | Fruit Covers & Packaging Bags Manufacturer",
    description:
      "Fruit protection covers, leno mesh bags and PP woven bags manufactured in Andhra Pradesh for buyers across India.",
    url: `${SITE.url}/en`,
    type: "website",
  },
  keywords: [...SEO_KEYWORDS],
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
    url: `${SITE.url}/${locale}`,
  };

  return (
    <>
      <script
        id="sr-enterprises-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }}
      />
      <HeroSection />
      <TrustBar />
      <ProductsOverview />
      <MediaShowcase locale={locale} />
      <BeforeAfterSection locale={locale} />
      <SpecsTable />
      <FactoryVideoGrid locale={locale} />
      <TestimonialsSection locale={locale} />
      <DeliveryTrust />
      <MainCta />
    </>
  );
}
