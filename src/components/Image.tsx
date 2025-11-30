import { ImgHTMLAttributes, useState } from "react";
import { cn } from "../lib/utils";

export function Image({
  src,
  loading = "lazy",
  decoding = "auto",
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [error, setError] = useState(false);
  const imageSrc = src || "/assets/img/default.jpg";

  return (
    <img
      className={cn((error || !src) && "opacity-30 dark:opacity-10", className)}
      src={imageSrc}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/assets/img/default.jpg";
        setError(true);
      }}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}
