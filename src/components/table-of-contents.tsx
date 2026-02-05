"use client";
import { useTocHighlighter } from "@/hooks/use-toc-highlighter";

import { TableOfContentItem } from "./table-of-content-item";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ headings }: { headings: TocItem[] }) {
  useTocHighlighter();

  return (
    <nav>
      <p className="mb-4 text-sm font-bold tracking-wider text-slate-400 uppercase">
        In this post
      </p>

      <ol className="mb-4">
        {headings.map((heading) => (
          <TableOfContentItem
            key={heading.id}
            slug={heading.id}
            content={heading.text}
            level={heading.level}
          />
        ))}
      </ol>
    </nav>
  );
}
