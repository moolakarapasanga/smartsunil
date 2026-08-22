import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogShell } from "@/components/blog/BlogShell";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { renderMDX } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article"
    }
  };
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await renderMDX(post.content);
  const related = getRelatedPosts(post);

  return (
    <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <BlogShell>
        <div className="flex justify-center gap-12">
          <article className="min-w-0 max-w-[760px] flex-1">
            <header className="border-b border-white/10 pb-8">
              <Badge>{post.category}</Badge>
              <h1 className="mt-5 text-4xl font-bold tracking-[-.035em] md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-500">
                {post.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </header>

            <div className="prose-research py-10">{content}</div>

            {related.length > 0 && (
              <section className="border-t border-white/10 py-10">
                <h2 className="text-xl font-semibold">Related Research</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {related.map((item) => (
                    <BlogCard key={item.slug} post={item} />
                  ))}
                </div>
              </section>
            )}
          </article>

          <TableOfContents />
        </div>
      </BlogShell>
    </main>
  );
}
