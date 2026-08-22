import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071014]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="font-mono text-sm text-white">
          <span className="mr-1 text-[#38D9E6]">~</span>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/portfolio" className="hover:text-white">
            Portfolio
          </Link>

          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>

          <Link href="/sign-in" className="hover:text-white">
            Sign In
          </Link>

          <ThemeToggle />
        </nav>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}