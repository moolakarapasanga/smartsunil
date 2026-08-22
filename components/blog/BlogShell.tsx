 "use client";

import { useState } from "react";
import { Sidebar, SidebarButton } from "./Sidebar";

export function BlogShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-6 flex items-center gap-3 lg:hidden">
        <SidebarButton onClick={() => setOpen(true)} />
        <span className="text-sm text-slate-500">Security Topics</span>
      </div>

      <div className="flex gap-8">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="min-w-0 flex-1">{children}</main>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 lg:hidden" onClick={() => setOpen(false)}>
          <div onClick={(event) => event.stopPropagation()}>
            <Sidebar mobile onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
