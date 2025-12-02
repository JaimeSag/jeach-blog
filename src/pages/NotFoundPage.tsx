import { Container } from "../components/Container";
import { useSeo } from "../hooks/useSeo";

export function NotFoundPage() {
  useSeo({
    title: "404 Not Found - Fusion Blog",
    description: "The page you are looking for does not exist.",
  });

  return (
    <Container>
      <div className="mx-auto flex min-h-screen max-w-90 flex-col justify-center">
        <h1 className="text-3xl font-bold">Oops! Lost in the playlist</h1>
        <p className="text-muted-foreground my-[1lh] mt-4">
          Looks like this page skipped town… maybe off to a concert or a big
          game! Don't worry, you can still catch all the latest hits, news, and
          stories here!
        </p>
      </div>
    </Container>
  );
}
