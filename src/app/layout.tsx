import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

import "./globals.css";

export const metadata: Metadata = {
  title: "Basic Next.js Starter",
  description: "Basic Next.js Starter with Shadcn UI initiated",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-jakarta bg-primary-100 h-full w-full text-neutral-100 antialiased">
        <div className="flex h-screen w-screen flex-col justify-between">
          <main className="container flex-grow">{children}</main>
          <footer className="border-secondary-100 flex h-14 items-center justify-center border-t font-sans">
            &copy; {new Date().getFullYear()} By{" "}
            <span className="ml-1">
              <Link href={"https://ahmdhndr.vercel.app/"} target="_blank">
                <Button variant={"link"} className="text-secondary-150 p-0">
                  Achmad Hendarsyah
                </Button>
              </Link>
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
