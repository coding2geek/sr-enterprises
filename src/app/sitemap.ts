import type { MetadataRoute } from "next";

const baseUrl = "https://sr-enterprises-five.vercel.app";
const locales = ["en", "te", "hi"];
const routes = [
  "",
  "/about",
  "/factory",
  "/products/fruit-covers",
  "/products/leno-bags",
  "/products/pp-woven-bags",
  "/testimonials",
  "/contact",
  "/gallery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
