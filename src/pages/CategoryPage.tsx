import { CategoryFeaturedSection } from "../components/category/CategoryFeaturedSection";
import { CategoryHeader } from "../components/category/CategoryHeader";
import { CategoryListSection } from "../components/category/CategoryListSection";
import { useCategoryData } from "../hooks/useCategoryData";
import { NotFoundPage } from "./NotFoundPage";

export function CategoryPage() {
  const { category, featuredPost, otherPosts } = useCategoryData();

  if (!category) return <NotFoundPage />;

  return (
    <>
      <CategoryHeader
        title={category.title}
        description={category.description}
      />

      <CategoryFeaturedSection post={featuredPost} />

      <CategoryListSection posts={otherPosts} />
    </>
  );
}
