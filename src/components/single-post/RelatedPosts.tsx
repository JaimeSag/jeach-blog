import { ShortPost } from "../../types";
import { Card } from "../card/Card";
import { Container } from "./../Container";

export function RelatedPosts({ posts }: { posts: ShortPost[] }) {
  return (
    <aside className="bg-secondary" aria-labelledby="related-heading">
      <Container>
        <div className="py-11 md:py-24">
          <span className="text-muted-foreground mb-1 inline-block font-semibold">
            You may also like these
          </span>
          <h2 id="related-heading" className="mb-10 text-4xl font-semibold">
            Related posts
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </aside>
  );
}
