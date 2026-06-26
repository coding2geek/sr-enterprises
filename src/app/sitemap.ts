import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-content";

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
      url: `${SITE.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
