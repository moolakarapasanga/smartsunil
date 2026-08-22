export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  readingTime: string;
  featured?: boolean;
  published: boolean;
  content: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
  published?: boolean;
}
