import { Author } from "../../types";

export function PostAuthorBio({ author }: { author: Author }) {
  return (
    <section aria-labelledby="author-bio-heading">
      <div className="flex items-center gap-4">
        <div className="bg-muted size-16 shrink-0 overflow-hidden rounded-full">
          <img
            src={author.profile_image || `${import.meta.env.BASE_URL}/assets/img/default.jpg`}
            className="size-full object-cover"
            alt={`Profile image of ${author.name}`}
          />
        </div>

        <div className="flex flex-col">
          <span className="text-muted-foreground text-sm font-medium">
            About the Author
          </span>
          <h3
            id="author-bio-heading"
            className="text-foreground font-serif text-2xl font-semibold"
          >
            {author.name}
          </h3>
        </div>
      </div>

      <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
        {author.bio}
      </p>
    </section>
  );
}
