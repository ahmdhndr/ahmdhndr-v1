import type { Metadata } from "next";
import React from "react";

import { georama, robotoMono } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Achmad Hendarsyah's Portfolio",
  description: "Mac OS Style Portfolio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${georama.variable} ${robotoMono.variable}`}>
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
