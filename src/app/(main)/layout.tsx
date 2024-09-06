import type { PropsWithChildren } from "react";

import Navbar from "./_components/navbar";
import StarsCanvas from "./_components/stars";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col">
      <StarsCanvas />
      <div className="absolute left-0 top-0 z-[-1] h-56 w-full bg-gradient-to-b from-indigo-subtle to-background" />
      <Navbar />
      <div className="container flex-1">{children}</div>
    </div>
  );
}
