import { BlogShell } from "@/components/blog/BlogShell";
import { BlogCard } from "@/components/blog/BlogCard";
import { getFeaturedPosts, getLatestPosts } from "@/lib/posts";

export default function BlogPage() {
  const featured = getFeaturedPosts()[0];
  const latest = getLatestPosts(12);

  return (
    <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <BlogShell>
        <header className="border-b border-white/10 pb-8">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-[#38D9E6]">Security Research</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Technical research & experiments</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            Application security, reverse engineering, cloud, API and AI security research.
          </p>
        </header>

        {featured && (
          <section className="mt-8 rounded-2xl border border-white/10 bg-white/[.02] p-6 md:p-8">
            <div className="font-mono text-xs uppercase tracking-[.2em] text-[#38D9E6]">Featured Research</div>
            <h2 className="mt-4 text-2xl font-semibold">{featured.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{featured.description}</p>
          </section>
        )}

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Latest Research</h2>
            <span className="font-mono text-xs text-slate-600">{latest.length} articles</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {latest.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>
      </BlogShell>
    </main>
  );
}
