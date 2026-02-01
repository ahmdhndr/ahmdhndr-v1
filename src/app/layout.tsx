import type { Metadata } from "next";
import React from "react";

import Spotlight from "@/components/spotlight";
import { siteConfig } from "@/config/site";
import { geistMono, jakarta } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.title}`,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/og.png`],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-primary-200 selection:bg-secondary-200 selection:text-primary-200 leading-relaxed text-slate-400">
        <div className="group/spotlight relative">
          <Spotlight />
          <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
