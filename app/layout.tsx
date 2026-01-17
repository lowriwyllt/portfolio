import "./globals.css";
import { Providers } from "./components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <Providers>{children}</Providers>;
}
