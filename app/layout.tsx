"use client";

import Layout from "@/app/components/Layout";
import { Providers } from "./components/Providers";
import { ibm_plex_mono } from "./fonts";
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
      <body className={ibm_plex_mono.className}>
        <Providers>
          <Layout lang={lang}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
