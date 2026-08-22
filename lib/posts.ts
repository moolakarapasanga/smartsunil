import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, PostFrontmatter } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content", "posts");

function getMdxFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? getMdxFiles(fullPath)
      : entry.name.endsWith(".mdx")
        ? [fullPath]
        : [];
  });
}

function parsePost(filePath: string): BlogPost {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;
  const slug = path.basename(filePath, ".mdx");

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    category: frontmatter.category,
    tags: frontmatter.tags ?? [],
    author: frontmatter.author ?? "Security Research",
    readingTime: readingTime(content).text,
    featured: frontmatter.featured ?? false,
    published: frontmatter.published ?? true,
    content
  };
}

export function getAllPosts(): BlogPost[] {
  return getMdxFiles(postsDirectory)
    .map(parsePost)
    .filter((post) => post.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getLatestPosts(limit = 6): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score:
        (candidate.category === post.category ? 3 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post: candidate }) => candidate);
}
