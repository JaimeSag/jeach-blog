import { Container } from "../components/Container";

export function NotFoundPage() {
  return (
    <Container>
      <main className="mx-auto flex min-h-screen max-w-90 flex-col justify-center">
        <h1 className="text-3xl font-bold">Oops! Lost in the playlist</h1>
        <p className="text-muted-foreground my-[1lh] mt-4">
          Looks like this page skipped town… maybe off to a concert or a big
          game! Don't worry, you can still catch all the latest hits, news, and
          stories here!
        </p>
      </main>
    </Container>
  );
}
