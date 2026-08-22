 "use client";

import { useEffect, useState } from "react";

export function TableOfContents() {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string }>>([]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("article h2, article h3"));
    setHeadings(
      nodes.map((node) => {
        const id = node.id || node.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "";
        node.id = id;
        return { id, text: node.textContent || "" };
      })
    );
  }, []);

  if (!headings.length) return null;

  return (
    <nav className="hidden xl:block xl:w-56 xl:shrink-0">
      <div className="sticky top-24">
        <div className="font-mono text-[10px] uppercase tracking-[.2em] text-slate-600">Contents</div>
        <div className="mt-4 space-y-2 border-l border-white/10 pl-4">
          {headings.map((heading) => (
            <a key={heading.id} href={`#${heading.id}`} className="block text-xs leading-5 text-slate-500 hover:text-white">
              {heading.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
