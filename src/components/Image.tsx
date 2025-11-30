import { ImgHTMLAttributes } from "react";

export function Image({
  src,
  loading = "lazy",
  decoding = "auto",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const imageSrc = src || "/assets/img/default.jpg";

  return (
    <img
      src={imageSrc}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/assets/img/default.jpg";
      }}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
}
