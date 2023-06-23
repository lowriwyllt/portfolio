import "./globals.css";

import Layout from "./components/Layout";

export const metadata = {
  title: "Lowri Roberts Portfolio",
  description: "Portfolio website for Lowri Roberts, a Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream max-w-[100vw] min-h-fit">
        <Layout children={children} />
      </body>
    </html>
  );
}
