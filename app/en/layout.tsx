import "../globals.css";
import { ibm_plex_mono } from "../fonts";
import Footer from "../components/Layout/Footer";
import styles from "./layout.module.css";
import Socials from "../components/Layout/Socials";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body className={styles.body}>
        <Socials />
        {children}
        <Footer />
      </body>
    </html>
  );
}
