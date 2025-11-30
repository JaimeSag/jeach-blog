import { cn } from "../../lib/utils";
import { Image } from "../Image";

interface PostFeaturedImageProps {
  src?: string;
  alt: string;
  caption?: string;
}

export function PostFeaturedImage({
  src,
  alt,
  caption,
}: PostFeaturedImageProps) {
  return (
    <div className="p-4 md:p-6">
      <figure className="bg-card/50 border-border mx-auto h-100 max-w-360 rounded-3xl border p-3 shadow-[0_12px_42px_#0000000d] backdrop-blur-sm md:h-150 md:p-4">
        <div
          className={cn(
            "bg-card relative size-full w-full overflow-hidden rounded-xl",
            caption &&
            "before:absolute before:bottom-0 before:left-0 before:z-1 before:h-1/2 before:w-full before:bg-linear-to-t before:from-black/40 before:to-transparent before:to-50% before:brightness-90 before:contrast-75 before:content-['']",
          )}
        >
          <Image
            className="pointer-events-none size-full object-cover transition-opacity duration-300 ease-in-out select-none"
            src={src}
            alt={alt}
            loading="eager"
          />
          {caption && (
            <figcaption className="absolute bottom-0 left-0 z-2 mt-2 w-full p-3 text-xs text-white">
              {caption}
            </figcaption>
          )}
        </div>
      </figure>
    </div>
  );
}
