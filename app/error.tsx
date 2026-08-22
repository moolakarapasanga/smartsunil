 "use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => console.error(error), [error]);

  return (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <div className="font-mono text-sm text-red-300">500 / ERROR</div>
        <h1 className="mt-3 text-4xl font-bold">Something broke.</h1>
        <button onClick={() => reset()} className="mt-6 rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5">
          Try again
        </button>
      </div>
    </main>
  );
}
