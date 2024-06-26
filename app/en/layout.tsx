import "../globals.css";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import { ibm_plex_mono } from "../fonts";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { englishNavItems } from "../components/Layout/navItems";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body className="bg-white max-w-[100vw] min-h-fit">
        <ChakraProvider>
          <Flex direction="column" minH="100vh" justify={"space-between"}>
            <Layout />
            {children}
            <Footer navItems={englishNavItems} />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
