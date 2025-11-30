import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

export function Container({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto box-content max-w-120 px-4 md:max-w-235 md:px-6 xl:max-w-300 xl:px-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
