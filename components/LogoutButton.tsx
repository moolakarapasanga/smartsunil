"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      router.push("/sign-in");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);

      // Even if the request fails, return to sign-in.
      router.push("/sign-in");
      router.refresh();
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-[#38d9e6] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Signing out..." : "Logout"}
    </button>
  );
}