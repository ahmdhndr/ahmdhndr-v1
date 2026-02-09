import type { Options } from "@mdx-js/loader";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export const mdxOptions: Options = {
  remarkPlugins: [],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
        properties: {
          className: ["subheading-anchor", "text-secondary-200"],
          ariaLabel: "Link to section",
        },
      },
    ],
    [
      rehypePrettyCode,
      {
        theme: "tokyo-night",
        keepBackground: true,
      },
    ],
  ],
};
