import { Post } from "@/lib/mdx-utils";

import ArticleItem from "./article-item";

export default function ArticleList({ posts }: { posts: Post[] }) {
  return (
    <ol className="group/list space-y-12">
      {posts.map((post) => (
        <ArticleItem key={post.slug} post={post} />
      ))}
    </ol>
  );
}
