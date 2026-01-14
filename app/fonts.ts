import { Merriweather, IBM_Plex_Mono } from "next/font/google";

export const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-merriweather",
});

export const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-ibmPlexMono",
});
