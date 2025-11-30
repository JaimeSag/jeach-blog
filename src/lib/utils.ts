import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const display = Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  const [dateTime] = date.toISOString().split("T");

  return { display, dateTime };
}

export interface OptimizedImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: "crop" | "fill" | "scale" | "pad";
  format?: "auto" | "webp" | "jpg";
}

export function getOptimizedImage(
  url: string,
  options: OptimizedImageOptions = {},
) {
  if (!url || !url.includes("images.unsplash.com")) return url;

  const {
    width = 800,
    height,
    quality = 80,
    fit = "crop",
    format = "auto",
  } = options;

  const params = new URLSearchParams({
    auto: format,
    fit,
    q: String(quality),
    w: String(width),
    ...(height && { h: String(height) }),
  });

  return `${url}?${params.toString()}`;
}
