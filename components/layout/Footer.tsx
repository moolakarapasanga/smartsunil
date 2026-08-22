import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}
        </div>

        <div className="flex gap-5">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </Link>

          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </Link>

          <Link
            href={siteConfig.links.x}
            target="_blank"
            className="hover:text-white"
          >
            X
          </Link>
        </div>
      </div>
    </footer>
  );
}