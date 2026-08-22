import Link from "next/link";
import { categories } from "@/config/categories";
import { ArrowUpRight } from "lucide-react";

export function ResearchAreas() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-[#38D9E6]">01 / Research Areas</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">What I research</h2>
      </div>
      <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="group flex min-h-32 items-end justify-between border-b border-r border-white/10 p-5 hover:bg-white/[.025]"
          >
            <div>
              <div className="text-base font-medium">{category.name}</div>
              <p className="mt-2 max-w-xs text-sm text-slate-500">{category.description}</p>
            </div>
            <ArrowUpRight size={17} className="text-slate-600 group-hover:text-[#38D9E6]" />
          </Link>
        ))}
      </div>
    </section>
  );
}
