import { cva, VariantProps } from "class-variance-authority";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn, getOptimizedImage } from "../../lib/utils";
import { ShortPost } from "../../types";
import { Image } from "../Image";
import { Container } from "./../Container";

const navCardVariants = cva(
  "group bg-card border-border relative flex h-29 gap-3 rounded-2xl border p-3 transition-colors xl:flex-1",
  {
    variants: {
      variant: {
        prev: "flex-row [grid-area:prev]",
        next: "flex-row-reverse [grid-area:next]",
      },
    },
    defaultVariants: {
      variant: "prev",
    },
  },
);

interface PostNavigationProps {
  prevPost: ShortPost | null;
  nextPost: ShortPost | null;
}

interface PostNavCardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof navCardVariants> {
  post: ShortPost;
}

export function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <nav className="pb-12" aria-label="Navigation between articles">
      <Container>
        <div className="mx-auto grid max-w-120 grid-cols-1 gap-3 [grid-template-areas:'prev''next'] md:max-w-160 md:grid-cols-2 md:[grid-template-areas:'prev_next']">
          {prevPost && (
            <PostNavCard variant="prev" post={prevPost} className="w-full" />
          )}

          {nextPost && (
            <PostNavCard variant="next" post={nextPost} className="w-full" />
          )}
        </div>
      </Container>
    </nav>
  );
}

export function PostNavCard({
  className,
  variant = "prev",
  post,
  ...props
}: PostNavCardProps) {
  const isNext = variant === "next";
  const label = isNext ? "Next Post" : "Previous Post";

  return (
    <div className={cn(navCardVariants({ variant }), className)} {...props}>
      <div className="h-full w-3/10 overflow-hidden rounded-sm md:hidden">
        <Image
          src={getOptimizedImage(post.featured_image?.url ?? "", {
            width: 150,
          })}
          alt=""
          className="size-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col justify-between gap-2.5 pt-2.5",
          isNext ? "items-end" : "items-start",
        )}
      >
        <Link
          to={`/post/${post.slug}`}
          className="flex items-center gap-2 text-sm font-medium before:absolute before:inset-0 before:content-['']"
          aria-label={`${label}: ${post.title}`}
        >
          {!isNext && (
            <ChevronLeft className="group-hover:text-muted-foreground size-4 duration-200 group-hover:-translate-x-0.5" />
          )}
          <span className="group-hover:text-muted-foreground duration-200">
            {label}
          </span>
          {isNext && (
            <ChevronRight className="group-hover:text-muted-foreground size-4 duration-200 group-hover:translate-x-0.5" />
          )}
        </Link>

        <div
          className={cn(
            "text-muted-foreground group-hover:text-foreground line-clamp-2 text-sm duration-200",
            isNext && "text-right",
          )}
        >
          {post.title}
        </div>
      </div>
    </div>
  );
}
