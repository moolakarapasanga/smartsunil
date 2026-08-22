 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/config/categories";
import { Menu, X } from "lucide-react";

export function Sidebar({ mobile = false, onClose }: { mobile?: boolean; onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className={mobile ? "fixed inset-y-0 left-0 z-[60] w-80 border-r border-white/10 bg-[#071014] p-5 shadow-2xl" : "sticky top-24 h-[calc(100vh-7rem)] w-64 shrink-0 border-r border-white/10 pr-5"}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[.2em] text-[#38D9E6]">Security Topics</div>
          <div className="mt-2 text-xs text-slate-600">Research categories</div>
        </div>
        {mobile && (
          <button onClick={onClose} aria-label="Close sidebar" className="rounded-lg border border-white/10 p-2">
            <X size={17} />
          </button>
        )}
      </div>

      <nav className="space-y-1">
        <Link
          href="/blog"
          onClick={onClose}
          className={`block rounded-lg px-3 py-2.5 text-sm ${pathname === "/blog" ? "bg-white/10 text-white" : "text-slate-500 hover:bg-white/5 hover:text-white"}`}
        >
          All Research
        </Link>
        {categories.map((category) => {
          const active = pathname.startsWith(`/category/${category.slug}`);
          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              onClick={onClose}
              className={`block rounded-lg px-3 py-2.5 text-sm ${active ? "bg-[#38D9E6]/10 text-[#9eeac6]" : "text-slate-500 hover:bg-white/5 hover:text-white"}`}
            >
              {category.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function SidebarButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label="Open sidebar" className="rounded-lg border border-white/10 p-2 text-slate-300 hover:bg-white/5">
      <Menu size={18} />
    </button>
  );
}
