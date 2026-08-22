import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Terminal } from "@/components/home/Terminal";
import { ResearchAreas } from "@/components/home/ResearchAreas";
import { BlogCard } from "@/components/blog/BlogCard";
import { getLatestPosts } from "@/lib/posts";

export default function Home() {
  const latest = getLatestPosts(3);

  return (
    <main className="grid-bg">
      <Hero />
      <Terminal />
      <ResearchAreas />

      <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-[#38D9E6]">02 / Latest Research</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Recent experiments</h2>
          </div>
          <Link href="/blog" className="hidden items-center gap-2 text-sm text-slate-500 hover:text-white sm:flex">
            View all <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {latest.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-32 pt-10 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[.015] p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-[#38D9E6]">03 / Portfolio</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Application security, reverse engineering and security research.
            </h2>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
              Explore portfolio <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
