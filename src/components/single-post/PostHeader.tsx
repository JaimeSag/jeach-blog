import DEFAULT_FALLBACK from "../../assets/img/default.jpg";
import { useParallax } from "../../hooks/useParallax";
import { formatDate } from "../../lib/utils";
import { ShortPost } from "../../types";
import { Container } from "./../Container";

export function PostHeader({ post }: { post: ShortPost }) {
  const headerRef = useParallax<HTMLElement>();
  const { display, dateTime } = formatDate(post.published_at);

  return (
    <header ref={headerRef} className="relative -z-1">
      <Container>
        <div className="mx-auto max-w-120 py-18 md:max-w-160">
          <h1 className="mb-6 text-2xl font-semibold md:text-4xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          <hr className="border-border my-6 h-px w-full" aria-hidden="true" />

          <ul className="flex items-center justify-between">
            <li>
              <div className="flex items-center gap-2.5">
                <div className="size-11 overflow-hidden rounded-full">
                  <img
                    src={post.author.profile_image || DEFAULT_FALLBACK}
                    className="pointer-events-none size-full object-cover select-none"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground inline-block text-xs">
                    Written by
                  </span>
                  <span className="text-foreground text-sm font-medium">
                    {post.author.name}
                  </span>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-col">
                <span className="text-muted-foreground inline-block text-xs">
                  Read Time
                </span>
                <span className="text-foreground text-sm font-medium">
                  {post.reading_time} min read
                </span>
              </div>
            </li>

            <li>
              <div className="flex flex-col">
                <span className="text-muted-foreground inline-block text-xs">
                  Posted on
                </span>
                <time
                  className="text-foreground text-sm font-medium"
                  dateTime={dateTime}
                >
                  {display}
                </time>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
