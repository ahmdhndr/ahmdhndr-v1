import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
  slug: string;
  content: string;
  level: number;
};

export const TableOfContentItem = ({ slug, content, level }: Props) => {
  const isH3 = level === 3;

  return (
    <li
      className={cn(
        "pb-2 transition-colors",

        // h3 ONLY
        isH3 && [
          "border-l-4 pb-2 pl-2",
          "border-secondary-200/30",

          // hover
          "hover:border-secondary-200",

          // scroll active (via a.active)
          "has-[a.active]:border-secondary-200",

          // keyboard
          "has-[a:focus-visible]:border-secondary-200",
        ]
      )}
    >
      <Link
        data-tocitem
        href={`#${slug}`}
        className={cn(
          "inline-block text-sm text-slate-400 transition-all duration-300",

          // hover
          "hover:text-secondary-200 hover:translate-x-2 hover:font-medium",

          // scroll active
          "[&.active]:text-secondary-200 [&.active]:translate-x-2 [&.active]:font-medium",

          // keyboard
          "focus-visible:text-secondary-200 focus-visible:translate-x-2"
        )}
      >
        {content}
      </Link>
    </li>
  );
};
