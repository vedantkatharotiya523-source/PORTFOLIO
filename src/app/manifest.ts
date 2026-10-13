import type { MetadataRoute } from "next";
import { profileData } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profileData.name} - MERN & AI Developer Portfolio`,
    short_name: `${profileData.name} Portfolio`,
    description: profileData.shortBio,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#7C5CFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
