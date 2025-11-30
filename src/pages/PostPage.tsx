import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { PostAuthorBio } from "../components/single-post/PostAuthorBio";
import { PostFeaturedImage } from "../components/single-post/PostFeaturedImage";
import { PostHeader } from "../components/single-post/PostHeader";
import { PostNavigation } from "../components/single-post/PostNavigation";
import { RelatedPosts } from "../components/single-post/RelatedPosts";
import Template1 from "../components/template-1";
import { usePostData } from "../hooks/usePostData";
import { getOptimizedImage } from "../lib/utils";
import { NotFoundPage } from "./NotFoundPage";

export function PostPage() {
  const { slug } = useParams();
  const { post, relatedPosts, previousPost, nextPost } = usePostData(slug);

  if (!post) return <NotFoundPage />;

  return (
    <main className="pt-20 md:pt-40">
      <article>
        <PostHeader post={post} />

        <PostFeaturedImage
          src={getOptimizedImage(post.featured_image?.url ?? "", {
            width: 1440,
            quality: 75,
          })}
          alt={post.title}
          caption={post.featured_image?.caption ?? undefined}
        />

        <Container>
          <div className="mx-auto max-w-120 md:max-w-160">
            <Template1 />

            <hr className="border-border my-12 h-px" aria-hidden="true" />

            <PostAuthorBio author={post.author} />

            <hr className="border-border my-12 h-px" />
          </div>
        </Container>
      </article>

      <PostNavigation prevPost={previousPost} nextPost={nextPost} />

      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}
