import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import path from "path";
import { MdArrowBack } from "react-icons/md";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import { TableOfContents } from "@/components/table-of-contents";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/date";
import { extractHeadings } from "@/lib/mdx-headings";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src/articles", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {};
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  const title =
    data.title ??
    slug
      .split("-")
      .map((w: string) => w[0].toUpperCase() + w.slice(1))
      .join(" ");

  const description = data.description ?? siteConfig.description;

  const url = `${siteConfig.url}/posts/${slug}`;

  const publishedTime = data.date
    ? new Date(data.date).toISOString()
    : undefined;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: siteConfig.title,
      publishedTime,
      tags: data.tags,
      images: [`${siteConfig.url}/og.png`],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og.png`],
    },
  };
}

export function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/articles"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/articles", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const formattedSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const headings = extractHeadings(content);

  return (
    <div className="lg:py-24 lg:pt-24">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="inline-flex">
              <Link
                href="/"
                className="group hover:text-secondary-200 inline-flex items-center py-2 leading-tight text-slate-300"
              >
                <MdArrowBack className="mr-1 size-4 transition-transform group-hover:-translate-x-2" />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/posts"
                className="hover:text-secondary-200 py-2 text-slate-300"
              >
                Posts
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-secondary-200 max-w[150px] truncate sm:max-w-none">
              {formattedSlug}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <h1 className="text-secondary-200 text-3xl leading-relaxed font-bold md:text-5xl">
          {data.title}
        </h1>
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <span>Published on {formatDate(data.date)}</span>
          {data.tags?.length > 0 && (
            <>
              &bull;
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-secondary-200/10 text-secondary-200 flex items-center rounded-full px-3 py-1 text-xs leading-5 font-medium capitalize"
                >
                  {tag}
                </span>
              ))}
            </>
          )}
        </div>
      </div>

      <Separator className="bg-secondary-200/50 my-6" />

      <section className="lg:flex lg:justify-between lg:gap-10">
        {/* TOC */}
        <aside className="hidden lg:block lg:w-[25%]">
          <div className="sticky top-20">
            <TableOfContents headings={headings} />
          </div>
        </aside>

        {/* Content */}
        <article className="lg:border-secondary-200/50 w-full lg:max-w-[75%] lg:border-l lg:pl-8">
          <div className="prose prose-neutral prose-strong:text-secondary-200 prose-strong:font-bold prose-strong:tracking-wide prose-li:text-slate-200 prose-a:text-slate-200 prose-a:hover:text-secondary-200 prose-p:text-slate-200 prose-headings:scroll-mt-24 prose-headings:text-secondary-200 [&_:not(pre)>code]:text-primary-200 [&_:not(pre)>code]:bg-secondary-200/75 prose-pre:bg-zinc-900 prose-pre:text-slate-50 inline max-w-none pb-8 [&_:not(pre)>code]:rounded [&_:not(pre)>code]:px-1 [&_:not(pre)>code]:font-mono [&_:not(pre)>code::after]:content-none [&_:not(pre)>code::before]:content-none">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: "wrap",
                        properties: {
                          className: [
                            "subheading-anchor",
                            "text-secondary-200",
                          ],
                          ariaLabel: "Link to section",
                        },
                      },
                    ],
                    [
                      rehypePrettyCode,
                      {
                        theme: "github-dark", // You can use any Shiki theme
                        keepBackground: true,
                      },
                    ],
                  ],
                },
              }}
            />
          </div>
        </article>
      </section>
    </div>
  );
}
