import { Menu } from "lucide-react";

interface NavToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function NavToggle({ isOpen, onToggle }: NavToggleProps) {
  return (
    <button
      className="flex cursor-pointer gap-2"
      type="button"
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      onClick={onToggle}
    >
      <Menu />
      <span className="hidden md:block">Menu</span>
    </button>
  );
}
