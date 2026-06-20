import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SR Enterprises",
    short_name: "SR Enterprises",
    start_url: "/en",
    display: "standalone",
    theme_color: "#1B4332",
    background_color: "#FEFCE8",
    icons: [
      {
        src: "/images/logo.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/images/logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
