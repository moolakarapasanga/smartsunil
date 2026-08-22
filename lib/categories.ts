import { categories } from "@/config/categories";

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
