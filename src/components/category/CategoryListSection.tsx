import { ShortPost } from "../../types";
import { Card } from "../card/Card";
import { Container } from "../Container";

export function CategoryListSection({ posts }: { posts: ShortPost[] }) {
  return (
    <section className="bg-secondary pt-12 pb-24" aria-label="List of articles">
      <Container>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
            {posts.map((post) => (
              <Card variant="standard" post={post} key={post.id} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-serif text-3xl font-bold">
              Oops! Nothing left on this stage
            </p>

            <p className="text-muted-foreground my-[1lh] mt-4">
              Looks like this category wrapped up its last act… maybe the
              stories ran off to chase breaking news, catch a live show, or
              cover a big game. Don't worry— there's still plenty of music,
              culture, entertainment, sports, and fresh reads waiting for you
              across the blog!
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
