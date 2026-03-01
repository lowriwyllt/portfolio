"use client";

import Layout from "@/app/components/Layout";
import { Providers } from "./components/Providers";
import { ibm_plex_mono, merriweather } from "./fonts";
import "./globals.css";

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lang = pathname.split("/")?.[1] === "cy" ? "cy" : "en";

  return (
    <html lang={lang}>
      <body className={`${ibm_plex_mono.className} ${merriweather.variable}`}>
        <Providers>
          <Layout lang={lang}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
