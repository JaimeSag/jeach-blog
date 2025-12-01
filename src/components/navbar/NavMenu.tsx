import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { CATEGORIES, SOCIALS } from "../../constants";
import { cn } from "../../lib/utils";

export function NavMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "grid transition-[grid-template-rows] duration-500 ease-in-out",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      )}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            "md:[&>div]:not-last:border-border flex flex-col justify-center gap-7 py-10 transition-all duration-800 ease-in-out md:flex-row md:[&>div]:not-last:border-r",
            isOpen
              ? "translate-y-0 opacity-100 delay-200"
              : "invisible -translate-y-5 opacity-0 delay-0",
          )}
        >
          <NavSection title="Categories">
            {CATEGORIES.map((element) => (
              <NavItem
                key={element.name}
                to={`/category/${element.slug}`}
                onClick={onClose}
              >
                {element.name}
              </NavItem>
            ))}
          </NavSection>

          <NavSection title="Socials">
            {SOCIALS.map((element) => (
              <NavItem key={element.name} to={element.url} onClick={onClose}>
                {element.name}
              </NavItem>
            ))}
          </NavSection>
        </div>
      </div>
    </div>
  );
}

export function NavSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex-1">
      <p className="text-muted-foreground mb-3 text-center text-sm">{title}</p>
      <ul className="space-y-2 text-center">{children}</ul>
    </div>
  );
}

export function NavItem({
  children,
  ...props
}: { children: ReactNode } & LinkProps) {
  return (
    <li>
      <Link
        className="hover:text-muted-foreground text-lg font-semibold duration-200"
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}
