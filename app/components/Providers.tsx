"use client";

import { OverlayProvider } from "react-aria";

export function Providers({ children }: { children: React.ReactNode }) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
