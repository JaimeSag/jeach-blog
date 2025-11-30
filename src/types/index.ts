export interface ShortPost {
  id: string | number;
  title: string;
  slug: string;
  published_at: string;
  author: Author;
  category: Category;
  excerpt: string;
  featured_image: PostImage | null;
  featured: boolean;
  reading_time: number;
}

export interface Author {
  id: string | number;
  name: string;
  slug: string;
  profile_image: string | null;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface PostImage {
  url: string;
  alt: string | null;
  caption?: string | null;
}
