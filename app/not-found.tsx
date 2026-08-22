import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <div className="font-mono text-sm text-[#38D9E6]">404 / NOT FOUND</div>
        <h1 className="mt-3 text-5xl font-bold">Research not found.</h1>
        <p className="mt-4 text-slate-500">The requested resource does not exist.</p>
        <Link href="/blog" className="mt-7 inline-block rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5">Back to Blog</Link>
      </div>
    </main>
  );
}
