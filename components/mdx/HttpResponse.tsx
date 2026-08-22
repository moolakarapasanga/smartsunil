export function HttpResponse({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-[#080b0f]">
      <div className="border-b border-white/10 px-4 py-2 font-mono text-xs text-sky-300">HTTP RESPONSE</div>
      <pre className="p-5 font-mono text-sm text-slate-300"><code>{children}</code></pre>
    </div>
  );
}
