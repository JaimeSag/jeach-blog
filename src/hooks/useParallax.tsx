import { useEffect, useRef } from "react";

export function useParallax<T extends HTMLElement>(speed = 2.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const translation = window.scrollY / speed;

      requestAnimationFrame(() => {
        if (!ref.current) return;

        ref.current.style.transform = `translate3d(0, ${translation}px, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return ref;
}
