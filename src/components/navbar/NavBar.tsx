import { Search } from "lucide-react";
import { useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import { cn } from "../../lib/utils";
import { Container } from "../Container";
import { NavBrand } from "./NavBrand";
import { NavMenu } from "./NavMenu";
import { NavToggle } from "./NavToggle";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "bg-background/80 fixed top-0 z-10 w-full backdrop-blur-xl transition-all duration-300",
        isOpen && "shadow-[0px_12px_42px_0px_#0000000d]",
      )}
    >
      <Container>
        <div
          className={cn(
            "border-border flex h-20 flex-row-reverse items-center justify-between transition-all duration-300 ease-in-out md:h-40 md:flex-row",
            scrolled && "border-b md:h-20",
            isOpen && "border-transparent",
          )}
        >
          <NavToggle isOpen={isOpen} onToggle={toggleMenu} />

          <NavBrand scrolled={scrolled} onClick={closeMenu} />

          <button
            className="hidden cursor-pointer gap-2 md:flex"
            type="button"
            aria-label="Search"
          >
            <span className="hidden md:block">Search</span>
            <Search />
          </button>
        </div>

        <NavMenu isOpen={isOpen} onClose={closeMenu} />
      </Container>
    </nav>
  );
}
