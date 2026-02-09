import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import path from "path";
import { MdArrowBack } from "react-icons/md";

import MediaSocialSection from "@/components/media-social-section";
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
import { mdxOptions } from "@/lib/mdx-options";

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
    return notFound();
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

const remoteMdxOptions = {
  mdxOptions,
};

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
    <>
      <div className="lg:py-24 lg:pt-24">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="inline-flex">
                <Link
                  href="/"
                  className="group hover:text-secondary-200 inline-flex items-center leading-tight text-slate-300 hover:font-medium"
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
                  className="hover:text-secondary-200 text-slate-300 hover:font-medium"
                >
                  Posts
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-secondary-200 max-w[150px] truncate font-medium sm:max-w-none">
                {formattedSlug}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          <h1
            className="text-secondary-200 text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:leading-relaxed"
            aria-label={data.title}
          >
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
          <article className="w-full lg:max-w-[75%] lg:pl-8">
            <div className="prose prose-neutral custom-prose inline max-w-none pb-8">
              <MDXRemote source={content} options={remoteMdxOptions} />
            </div>
          </article>
        </section>
      </div>

      <footer className="mt-24 flex items-center justify-between pb-0 text-sm text-slate-500 lg:pb-16">
        <div>
          <MediaSocialSection />
        </div>

        <p className="mt-8">&copy; 2026 &middot; Achmad Hendarsyah</p>
      </footer>
    </>
  );
}
