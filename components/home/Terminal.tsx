 "use client";

import { useEffect, useState } from "react";

const lines = [
  "$ whoami",
  "Sunil - Security-Researcher",
  "",
  "$ ls",
  "android  ios  web  cloud  api  ai  research",
  "",
  "$ cat status.txt",
  "researching..."
];

export function Terminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((value) => Math.min(value + 1, lines.length));
    }, 260);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-2xl px-5 pb-28">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090d12] shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 font-mono text-xs text-slate-500">terminal</span>
        </div>
        <div className="min-h-72 p-5 font-mono text-sm leading-7 text-slate-300">
          {lines.slice(0, visible).map((line, index) => (
            <div key={index} className={line.startsWith("$") ? "text-[#38D9E6]" : ""}>
              {line || "\u00a0"}
            </div>
          ))}
          <span className="terminal-cursor" />
        </div>
      </div>
    </section>
  );
}
