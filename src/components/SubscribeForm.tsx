import confetti from "canvas-confetti";
import { ArrowRight } from "lucide-react";
import { FormEvent, useRef } from "react";
import { getOptimizedImage } from "../lib/utils";

export function SubscribeForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const rect = formRef.current.getBoundingClientRect();

    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x: originX, y: originY },
    });

    formRef.current.reset();
  };

  return (
    <div className="border-border bg-card mx-auto flex max-w-120 gap-3 rounded-3xl border p-3 shadow-[0px_12px_42px_0px_#0000000d] md:max-w-235">
      <div className="hidden flex-1 overflow-hidden rounded-xl md:block">
        <img
          src={getOptimizedImage(
            "https://images.unsplash.com/photo-1759912256883-cf3b8f4c07c1",
            { width: 800, height: 800 },
          )}
          alt=""
          className="pointer-events-none size-full object-cover select-none"
          role="presentation"
          loading="lazy"
          width={800}
          height={800}
        />
      </div>

      <div className="bg-secondary flex flex-1 flex-col gap-13 rounded-xl p-4 md:gap-18 md:p-6">
        <h2
          id="subscribe-heading"
          className="m-0 text-xl font-semibold md:text-2xl xl:text-3xl"
        >
          Explore stories, ideas, and insights that keep you informed and
          connected with the world.
        </h2>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          aria-describedby="form-description"
        >
          <p id="form-description" className="my-[1lh]">
            Join thousands of readers receiving curated content on news, music,
            sports, entertainment, and culture. Fresh articles, relevant
            analysis, and trending topics — all delivered in our free
            newsletter.
          </p>

          <div className="relative flex items-center">
            <label htmlFor="email-subscription" className="sr-only">
              Email address
            </label>

            <input
              id="email-subscription"
              name="email"
              type="email"
              className="peer border-border dark:bg-secondary dark:focus:bg-secondary-subtle text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:ring-foreground/5 w-full rounded-full border bg-white/50 py-3 pr-36 pl-5 text-sm transition-all outline-none focus:bg-white focus:ring-4"
              placeholder="example@mail.com"
              autoComplete="email"
              required
            />

            <button
              type="submit"
              className="bg-border text-background dark:bg-secondary-subtle dark:text-muted-foreground group absolute top-1 right-1 bottom-1 flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 transition-all duration-300 active:scale-99"
            >
              <span className="bg-foreground dark:bg-border absolute inset-0 h-full w-full rounded-full transition-transform duration-300 ease-in-out group-hover:translate-x-full"></span>

              <span className="relative flex items-center gap-2">
                <span className="group-hover:text-foreground dark:group-hover:text-muted-background transition-colors duration-300">
                  Subscribe
                </span>
                <ArrowRight
                  className="group-hover:text-foreground dark:group-hover:text-muted-background size-4 duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
