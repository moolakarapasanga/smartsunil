export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#38D9E6]/20 bg-[#38D9E6]/5 px-2.5 py-1 text-xs text-[#9eeac6]">
      {children}
    </span>
  );
}
