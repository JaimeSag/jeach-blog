import { useMemo, useState } from "react";
import { POSTS } from "../constants";
import { ShortPost } from "../types";

const PAGE_SIZE = 6;

export function usePostsData() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const { featuredPost, otherPosts } = useMemo(() => {
    return POSTS.reduce<{
      featuredPost: ShortPost | null;
      otherPosts: ShortPost[];
    }>(
      (acc, post) => {
        if (post.featured && !acc.featuredPost) acc.featuredPost = post;
        else acc.otherPosts.push(post);
        return acc;
      },
      { featuredPost: null, otherPosts: [] },
    );
  }, []);

  const visiblePosts = useMemo(
    () => otherPosts.slice(0, visibleCount),
    [otherPosts, visibleCount],
  );

  const hasMore = visibleCount < otherPosts.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return {
    featuredPost,
    visiblePosts,
    hasMore,
    loadMore,
    totalPosts: otherPosts.length,
  };
}
