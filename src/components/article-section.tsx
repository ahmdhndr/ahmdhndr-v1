import { getAllPosts } from "@/lib/mdx-utils";

import ArticleList from "./article-list";
import ButtonComponent from "./button-component";
import SectionPlaceholder from "./section-placeholder";

export default function ArticleSection() {
  const posts = getAllPosts();
  const limitPosts = posts.slice(0, 3);

  return (
    <SectionPlaceholder
      id="articles"
      label="Latest articles"
      title={"Articles"}
    >
      <ArticleList posts={limitPosts} />

      {posts.length > 2 && (
        <ButtonComponent link="/posts" action="View" label="All Articles" />
      )}
    </SectionPlaceholder>
  );
}
