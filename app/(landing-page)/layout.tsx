import { ibm_plex_mono } from "../fonts";
import "../globals.css";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
