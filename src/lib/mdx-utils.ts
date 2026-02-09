import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  keywords: string[];
}

export function getAllPosts(): Post[] {
  const articlesDirectory = path.join(process.cwd(), "src/articles");
  const files = fs.readdirSync(articlesDirectory);

  const posts = files
    .filter((file) => file.endsWith(".mdx")) // Only process mdx files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(articlesDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      // Extract only the data (frontmatter)
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        description: data.description || "",
        imageUrl: data.imageUrl || "",
        keywords: data.tags || [],
      };
    })
    // Sort by date (newest first)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
