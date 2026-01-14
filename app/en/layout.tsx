import "../globals.css";
import { ibm_plex_mono } from "../fonts";
import styles from "./layout.module.css";
import Layout from "../components/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body className={styles.body}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
