import SessionWrapper from "@/components/SessionWrapper";
import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Revillon-Papillotes",
  description: "Application qui permet de révérencer le contenu des papier des papillotes Revillon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionWrapper>
  );
}
