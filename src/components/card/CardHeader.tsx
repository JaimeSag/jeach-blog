import { cva, VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const titleVariants = cva(
  "text-foreground font-serif font-semibold transition-colors",
  {
    variants: {
      variant: {
        standard: "line-clamp-3 text-base md:mb-2.5 md:text-xl",
        featured: "line-clamp-4 text-xl md:mb-4 md:text-3xl",
      },
    },
    defaultVariants: {
      variant: "standard",
    },
  },
);

interface CardHeaderProps extends VariantProps<typeof titleVariants> {
  category: string;
  readingTime: number;
  title: string;
  slug: string;
}

export function CardHeader({
  variant,
  category,
  readingTime,
  title,
  slug,
}: CardHeaderProps) {
  return (
    <header>
      <div className="mb-2 flex items-center gap-2">
        <span className="bg-secondary text-muted-foreground inline-block rounded-full px-3 py-1.5 text-xs">
          {category}
        </span>
        <span className="bg-border size-1 rounded-full" aria-hidden="true" />
        <span className="text-muted-foreground text-xs">
          {readingTime} min read
        </span>
      </div>
      <h3 className={cn(titleVariants({ variant }))}>
        <Link
          to={`/post/${slug}`}
          className="before:absolute before:inset-0 before:content-[''] before:select-none"
          aria-label={`Read article: ${title}`}
        >
          {title}
        </Link>
      </h3>
    </header>
  );
}
