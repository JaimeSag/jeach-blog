import { ShortPost } from "../../types";
import { Card } from "../card/Card";
import { Container } from "../Container";

export function CategoryFeaturedSection({ post }: { post: ShortPost | null }) {
  if (!post) return null;

  return (
    <section
      className="from-secondary bg-linear-to-t from-50% to-transparent to-50% py-12 md:py-24"
      aria-label="Destacado"
    >
      <Container>
        <div className="mx-auto max-w-120 md:max-w-235">
          <Card variant="featured" post={post} />
        </div>
      </Container>
    </section>
  );
}
