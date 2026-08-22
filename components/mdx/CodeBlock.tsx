import { CopyButton } from "@/components/ui/CopyButton";

export function CodeBlock({ children }: { children: React.ReactNode }) {
  const value = typeof children === "string" ? children : "";
  return (
    <div className="relative">
      <div className="absolute right-2 top-2 z-10">
        <CopyButton value={value} />
      </div>
      {children}
    </div>
  );
}
