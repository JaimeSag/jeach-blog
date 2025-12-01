import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Image } from "../Image";

const imageVariants = cva("overflow-hidden rounded-sm md:rounded-xl", {
  variants: {
    variant: {
      standard: "aspect-square w-28 md:aspect-7/5 md:w-full",
      featured: "aspect-7/5 w-full flex-1 md:aspect-2/1 xl:aspect-square",
    },
  },
  defaultVariants: {
    variant: "standard",
  },
});

interface CardImageProps extends VariantProps<typeof imageVariants> {
  src: string;
  alt?: string;
  className?: string;
}

export function CardImage({ variant, src, alt, className }: CardImageProps) {
  return (
    <div className={cn(imageVariants({ variant }), className)}>
      <Image
        src={src}
        className="pointer-events-none size-full object-cover transition-[scale,filter] duration-500 ease-in-out select-none group-hover:scale-105 group-hover:brightness-90 group-hover:contrast-75 group-hover:grayscale"
        alt={alt}
      />
    </div>
  );
}
