import type { Metadata } from "next";
import { SEO_KEYWORDS, SITE } from "@/lib/site-content";

export const metadata: Metadata = {
  title: {
    default: "SR Enterprises | Fruit Covers, Leno Mesh Bags & PP Woven Bags",
    template: "%s | SR Enterprises",
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  keywords: [...SEO_KEYWORDS],
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "SR Enterprises | Agricultural Packaging Bags Manufacturer",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SR Enterprises | Agricultural Packaging Bags Manufacturer",
    description: SITE.description,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/images/logo.jpeg", type: "image/jpeg" }],
    shortcut: [{ url: "/images/logo.jpeg", type: "image/jpeg" }],
    apple: [{ url: "/images/logo.jpeg", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
