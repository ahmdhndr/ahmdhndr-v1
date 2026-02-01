"use client";
import Link from "next/link";

import { socialLinks } from "@/data/landing";

export default function MediaSocialSection() {
  return (
    <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
      {socialLinks.map((social) => (
        <li key={social.link} className="shrink-0 text-xs">
          <Link
            href={social.link}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`${social.title} (opens in a new tab)`}
            className="hover:text-secondary-200 block"
          >
            <span className="sr-only">{social.title}</span>
            <social.icon className="size-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
