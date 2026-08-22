import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/config/site";
import { categories } from "@/config/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  return [
    { url: siteConfig.url, lastModified: new Date() },
    { url: `${siteConfig.url}/portfolio`, lastModified: new Date() },
    { url: `${siteConfig.url}/blog`, lastModified: new Date() },
    { url: `${siteConfig.url}/sign-in`, lastModified: new Date() },
    ...categories.map((category) => ({ url: `${siteConfig.url}/category/${category.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(post.date) }))
  ];
}
