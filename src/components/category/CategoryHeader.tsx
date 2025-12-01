import { Quote } from "lucide-react";
import { useParallax } from "../../hooks/useParallax";
import { Container } from "../Container";

interface CategoryHeaderProps {
  title: string;
  description?: string;
}

export function CategoryHeader({ title, description }: CategoryHeaderProps) {
  const ref = useParallax<HTMLElement>();

  const [subTitle = null, mainTitle = null] = title.split(",");

  return (
    <Container>
      <header ref={ref} className="mx-auto max-w-120 pt-24 md:max-w-235">
        <div className="flex max-w-138 flex-col gap-6 xl:max-w-full xl:flex-row xl:items-center xl:gap-11">
          <div className="flex-1">
            <h1 className="font-semibold">
              <span className="text-muted-foreground text-2xl md:text-3xl">
                {subTitle}
              </span>
              <span className="block text-3xl md:text-5xl">{mainTitle}</span>
            </h1>
          </div>

          <div className="relative flex-1">
            <Quote className="text-muted-foreground absolute -top-4 -left-12 hidden size-10 rotate-180 xl:block" />
            <p>{description}</p>
          </div>
        </div>
      </header>
    </Container>
  );
}
