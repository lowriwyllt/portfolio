import "../globals.css";
import { ibm_plex_mono } from "../fonts";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body className="bg-white max-w-[100vw] min-h-fit">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
