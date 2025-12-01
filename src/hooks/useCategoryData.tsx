import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { CATEGORIES, POSTS } from "../constants";

export function useCategoryData() {
  const { slug } = useParams();

  return useMemo(() => {
    const category = CATEGORIES.find((c) => c.slug === slug);

    if (!category) {
      return { category: null, featuredPost: null, otherPosts: [] };
    }

    const allPosts = POSTS.filter((post) => post.category.slug === slug);

    const [featuredPost, ...otherPosts] = allPosts;

    return {
      category,
      featuredPost: featuredPost || null,
      otherPosts,
    };
  }, [slug]);
}
