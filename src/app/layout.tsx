import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

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
    <html lang="en">
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
