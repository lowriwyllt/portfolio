import { ibm_plex_mono } from "../fonts";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body>{children}</body>
    </html>
  );
}
