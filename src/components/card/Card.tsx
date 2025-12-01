import { cva, VariantProps } from "class-variance-authority";
import { cn, getOptimizedImage } from "../../lib/utils";
import { ShortPost } from "../../types";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardImage } from "./CardImage";

const cardVariants = cva("grid", {
  variants: {
    variant: {
      standard:
        "grid-cols-[auto_auto] grid-rows-[auto_auto] gap-4 [grid-template-areas:'img_info''footer_footer'] md:grid-cols-1 md:grid-rows-[auto_max-content_auto] md:[grid-template-areas:'img''info''footer']",
      featured:
        "grid-cols-[auto] grid-rows-[auto_auto_auto] gap-4 [grid-template-areas:'img''info''footer'] md:grid-rows-[max-content_auto] xl:grid-cols-2 xl:[grid-template-areas:'info_img''footer_img']",
    },
  },
  defaultVariants: {
    variant: "standard",
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  post: ShortPost;
  className?: string;
}

export function Card({ post, variant = "standard", className }: CardProps) {
  return (
    <article
      className={cn(
        "group border-border bg-card focus-within:ring-ring relative rounded-2xl border p-3 shadow-[0_12px_42px_#0000000d] transition-all duration-500 ease-out focus-within:ring-2 focus-within:ring-offset-2 md:rounded-3xl",
        className,
      )}
    >
      <div className={cn(cardVariants({ variant }))}>
        <CardImage
          className="[grid-area:img]"
          variant={variant}
          src={getOptimizedImage(post.featured_image?.url ?? "")}
          alt={post.featured_image?.alt ?? ""}
        />

        <div
          className={cn(
            "[grid-area:info]",
            variant === "featured" ? "mb-5 px-3 pt-3" : "md:mb-6 md:px-3",
          )}
        >
          <CardHeader
            variant={variant}
            category={post.category.name}
            readingTime={post.reading_time}
            title={post.title}
            slug={post.slug}
          />

          <p className="text-muted-foreground hidden md:line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <CardFooter
          className="[grid-area:footer]"
          variant={variant}
          author={post.author}
          date={post.published_at}
        />
      </div>
    </article>
  );
}
