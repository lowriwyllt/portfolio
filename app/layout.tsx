import "./globals.css";

import Layout from "./components/Layout";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream max-w-[100vw] min-h-fit">
        <Layout />
        {children}
        <Footer />
      </body>
    </html>
  );
}
