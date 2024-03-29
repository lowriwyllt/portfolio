import "../globals.css";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import { ibm_plex_mono } from "../fonts";
import { welshNavItems } from "../components/Layout/welshNavItems";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="cy" className={ibm_plex_mono.className}>
      <body className="bg-white max-w-[100vw] min-h-fit">
        <Layout language="welsh" />
        {children}
        <Footer navItems={welshNavItems} />
      </body>
    </html>
  );
}
