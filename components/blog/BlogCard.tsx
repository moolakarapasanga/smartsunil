import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block rounded-xl border border-white/10 bg-white/[.015] p-5 hover:border-white/20 hover:bg-white/[.03]">
      <div className="flex items-center justify-between gap-3">
        <Badge>{post.category}</Badge>
        <ArrowUpRight size={16} className="text-slate-600 group-hover:text-[#38D9E6]" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{post.description}</p>
      <div className="mt-5 flex gap-3 text-xs text-slate-600">
        <span>{formatDate(post.date)}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
