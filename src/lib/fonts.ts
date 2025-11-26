import { Georama, Roboto_Mono } from "next/font/google";

export const georama = Georama({
  variable: "--font-georama",
  weight: ["100", "900"],
  subsets: ["latin"],
});

export const robotoMono = Roboto_Mono({
  variable: "--font-roboto",
  weight: ["100", "700"],
  subsets: ["latin"],
});
