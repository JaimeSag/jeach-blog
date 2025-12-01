import { Card } from "../components/card/Card";
import { Container } from "../components/Container";
import { FeaturedSection } from "../components/FeaturedSection";
import { usePostsData } from "../hooks/usePostsData";

export function HomePage() {
  const { featuredPost, visiblePosts, hasMore, loadMore } = usePostsData();

  return (
    <>
      <h1 className="sr-only">FustionBlog - Home Page</h1>

      <FeaturedSection post={featuredPost} />

      <section
        className="bg-secondary pb-24"
        aria-labelledby="latest-posts-heading"
      >
        <Container>
          <h2 id="latest-posts-heading" className="sr-only">
            Latest Posts
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
            {visiblePosts.map((post) => (
              <Card key={post.id} variant="standard" post={post} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={loadMore}
                className="bg-border text-background dark:bg-secondary-subtle dark:text-muted-foreground group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-5 py-3 transition-all duration-300 active:scale-99"
              >
                <span className="bg-foreground dark:bg-border absolute inset-0 h-full w-full rounded-full transition-transform duration-300 ease-in-out group-hover:translate-x-full"></span>

                <span className="relative flex items-center gap-2">
                  <span className="group-hover:text-foreground dark:group-hover:text-muted-background transition-colors duration-300">
                    Load More Posts
                  </span>
                </span>
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
