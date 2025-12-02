import { cva, VariantProps } from "class-variance-authority";
import { cn, formatDate } from "../../lib/utils";
import { Author } from "../../types";
import { Image } from "../Image";

const footerVariants = cva("flex items-end justify-between", {
  variants: {
    variant: {
      standard: "border-border border-t pt-4 md:pr-3 md:pb-3 md:pl-3",
      featured: "border-border border-t px-3 pt-5 pb-3",
    },
  },
  defaultVariants: {
    variant: "standard",
  },
});

interface CardFooterProps extends VariantProps<typeof footerVariants> {
  author: Author;
  date: string;
  className?: string;
}

export function CardFooter({
  variant,
  date,
  author,
  className,
}: CardFooterProps) {
  const { display, dateTime } = formatDate(date);
  const showAuthorImage = variant === "featured";

  return (
    <footer className={cn(footerVariants({ variant }), className)}>
      <div className="flex items-center gap-2.5">
        {showAuthorImage && (
          <div className="hidden size-11 overflow-hidden rounded-full md:block">
            <Image
              src={author.profile_image || `${import.meta.env.BASE_URL}/assets/img/default.jpg`}
              className="size-full object-cover"
              alt=""
              aria-hidden="true"
            />
          </div>
        )}
        <div className="flex items-center gap-1 md:flex-col md:items-start md:gap-0">
          <span className="text-muted-foreground inline-block text-xs">
            Written by
          </span>
          <span className="text-foreground md:text-muted-foreground md:group-hover:text-foreground text-xs font-medium duration-200 md:text-sm">
            {author.name}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 md:flex-col md:items-start md:gap-0">
        <span className="text-muted-foreground inline-block text-xs">
          Posted on
        </span>
        <time
          className="text-foreground md:text-muted-foreground md:group-hover:text-foreground text-xs font-medium duration-200 md:text-sm"
          dateTime={dateTime}
        >
          {display}
        </time>
      </div>
    </footer>
  );
}
