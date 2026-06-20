import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SR Enterprises | Fruit Covers & Packaging Bags",
    template: "%s | SR Enterprises",
  },
  description:
    "Manufacturer of fruit protection covers, leno mesh bags and PP woven bags. Contact SR Enterprises for bulk and retail supply.",
  metadataBase: new URL("https://sr-enterprises-five.vercel.app"),
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
