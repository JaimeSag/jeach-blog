import { cn } from "../lib/utils";
import { ShortPost } from "../types";
import { Card } from "./card/Card";
import { Container } from "./Container";

export function FeaturedSection({
  post,
  className,
}: {
  post: ShortPost | null;
  className?: string;
}) {
  if (!post) return;

  return (
    <section
      className={cn(
        "from-secondary bg-linear-to-t from-50% to-transparent to-50% py-12 md:py-24",
        className,
      )}
      aria-label="Featured article"
    >
      <Container>
        <div className="mx-auto max-w-120 md:max-w-235">
          <Card variant="featured" post={post} />
        </div>
      </Container>
    </section>
  );
}
