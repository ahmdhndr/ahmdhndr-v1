import { getAllPosts } from "@/lib/mdx-utils";

import ArticleList from "./article-list";
import SectionPlaceholder from "./section-placeholder";

export default function PostSection() {
  const posts = getAllPosts();

  return (
    <SectionPlaceholder
      id="posts"
      label="Latest articles"
      title={"Latest Articles"}
    >
      <ArticleList posts={posts} />
    </SectionPlaceholder>
  );
}
