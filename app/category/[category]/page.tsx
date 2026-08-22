import { notFound } from "next/navigation";
import { BlogShell } from "@/components/blog/BlogShell";
import { BlogCard } from "@/components/blog/BlogCard";
import { getPostsByCategory } from "@/lib/posts";
import { getCategory } from "@/lib/categories";
import { categories } from "@/config/categories";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <BlogShell>
        <header className="border-b border-white/10 pb-8">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-[#38D9E6]">Category</p>
          <h1 className="mt-3 text-4xl font-bold">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">{category.description}</p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>

        {!posts.length && (
          <div className="py-20 text-center text-sm text-slate-600">No published research in this category yet.</div>
        )}
      </BlogShell>
    </main>
  );
}
