import "./globals.css";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white max-w-[100vw] min-h-fit">
        <Layout />
        {children}
        <Footer />
      </body>
    </html>
  );
}
