import { useMemo } from "react";
import { POSTS } from "../constants";

export function usePostData(slug?: string) {
  return useMemo(() => {
    const index = POSTS.findIndex((post) => post.slug === slug);

    if (index === -1) {
      return {
        post: null,
        relatedPosts: [],
        previousPost: null,
        nextPost: null,
      };
    }

    const currentPost = POSTS[index];

    let recommendations = POSTS.filter(
      (p) => p.category.id === currentPost.category.id && p.slug !== slug,
    );

    if (recommendations.length < 3) {
      const fillers = POSTS.filter(
        (p) => p.category.id !== currentPost.category.id && p.slug !== slug,
      );
      const shuffledFillers = fillers.sort(() => 0.5 - Math.random());
      recommendations = [...recommendations, ...shuffledFillers];
    }

    return {
      post: currentPost,
      relatedPosts: recommendations.slice(0, 3),
      previousPost: POSTS[index - 1] || null,
      nextPost: POSTS[index + 1] || null,
    };
  }, [slug]);
}
