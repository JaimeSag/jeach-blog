import { Link, NavLink } from "react-router-dom";
import { CATEGORIES, SOCIALS } from "../constants";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <Container>
        <div className="flex flex-col justify-between gap-14 py-12 md:flex-row md:items-center">
          <div className="flex w-full flex-col md:max-w-100">
            <Link
              className="inline-flex text-xl"
              to="/"
              aria-label="Go to homepage"
            >
              <span className="inline-block font-serif font-bold">Fusion</span>
              <span className="text-muted-foreground">Blog</span>
            </Link>

            <p className="my-[1lh] text-sm">
              Discover fresh perspectives across news, music, entertainment,
              sports, and culture. We bring together the moments, voices, and
              ideas that keep you informed and inspired. Keep exploring —
              there's always more to dive into.
            </p>
          </div>

          <div className="flex gap-14">
            <nav aria-label="Footer Navigation">
              <ul className="text-muted-foreground flex flex-col gap-2 text-sm md:text-xs">
                {CATEGORIES.map((element, index) => (
                  <li key={index}>
                    <NavLink
                      className="hover:text-foreground duration-200"
                      to={`/category/${element.slug}`}
                    >
                      {element.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Social Media Links">
              <ul className="text-muted-foreground flex flex-col gap-2 text-sm md:text-xs">
                {SOCIALS.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      className="hover:text-foreground flex cursor-pointer items-center gap-1 duration-200"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="size-4" aria-hidden="true" />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>

      <div className="text-muted-foreground bg-secondary-subtle py-5 md:text-left">
        <Container>
          <small className="flex items-center justify-center gap-3 text-xs">
            &copy; {currentYear}
            <span className="bg-foreground inline-block size-0.5 rounded-full" />
            FusionBlog
            <span className="bg-foreground inline-block size-0.5 rounded-full" />
            All directions reserved — left, right, up, down and even “slightly
            diagonal.”
          </small>
        </Container>
      </div>
    </footer>
  );
}
