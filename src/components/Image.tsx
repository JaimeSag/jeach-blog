import { ImgHTMLAttributes } from "react";
import DEFAULT_FALLBACK from "../assets/img/default.jpg";

export function Image({
  src,
  loading = "lazy",
  decoding = "auto",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const imageSrc = src || DEFAULT_FALLBACK;

  return (
    <img
      src={imageSrc}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = DEFAULT_FALLBACK;
      }}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}
