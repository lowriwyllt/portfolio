import "../globals.css";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import { ibm_plex_mono } from "../fonts";
import { englishNavItems } from "../components/Layout/englishNavItems";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body className="bg-white max-w-[100vw] min-h-fit">
        <ChakraProvider>
          <Layout />
          {children}
          <Footer navItems={englishNavItems} />
        </ChakraProvider>
      </body>
    </html>
  );
}
