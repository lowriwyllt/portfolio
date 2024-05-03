import "../globals.css";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import { ibm_plex_mono } from "../fonts";
import { welshNavItems } from "../components/Layout/welshNavItems";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="cy" className={ibm_plex_mono.className}>
      <body className="bg-white max-w-[100vw] min-h-fit">
        <ChakraProvider>
          <Layout language="welsh" />
          {children}
          <Footer navItems={welshNavItems} />
        </ChakraProvider>
      </body>
    </html>
  );
}
