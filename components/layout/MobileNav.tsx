"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="rounded-lg border border-white/10 p-2 text-slate-300"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-white/10 bg-[#071014] p-5 shadow-2xl">
          <nav className="flex flex-col gap-1">
            {[
              ["Home", "/"],
              ["Portfolio", "/portfolio"],
              ["Blog", "/blog"],
              ["Sign In", "/sign-in"]
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-white/10 pt-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}