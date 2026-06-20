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
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
