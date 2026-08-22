 "use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-1 rounded-lg border border-white/10 p-1">
      {[
        ["dark", Moon],
        ["light", Sun],
        ["system", Monitor]
      ].map(([value, Icon]) => (
        <button
          key={value as string}
          onClick={() => setTheme(value as string)}
          aria-label={`Use ${value as string} theme`}
          className={`rounded-md p-1.5 ${theme === value ? "bg-white/10 text-white" : "text-slate-500"}`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
