export function CommandBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-[#050709] p-5 font-mono text-sm text-[#9eeac6]">
      <code>{children}</code>
    </pre>
  );
}
