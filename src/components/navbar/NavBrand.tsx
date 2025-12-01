import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export function NavBrand({
  scrolled,
  onClick,
}: {
  scrolled: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      className={cn(
        "duration-300 ease-in-out md:text-6xl",
        scrolled && "md:text-4xl",
      )}
      to="/"
      onClick={onClick}
      aria-label="Go to homepage"
    >
      <span className="inline-block font-serif font-bold">Fusion</span>
      <span className="text-muted-foreground">Blog</span>
    </Link>
  );
}
