import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quasec",
  description:
    "Your ultimate search engine for all things cybersecurity. From exposed devices and services to vulnerabilities and data breaches, we bring itall into the light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <body
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          {children}
          <SpeedInsights />
        </body>
      </ThemeProvider>
    </html>
  );
}
