"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid username or password");
        return;
      }

      if (data.success && data.redirectTo) {
        router.push(data.redirectTo);
        router.refresh();
      } else {
        setError("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-[calc(100vh-64px)] place-items-center px-5 py-20">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl">

        {/* Header */}
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#38D9E6]">
            Private Area
          </div>

          <h1 className="mt-3 text-3xl font-semibold text-white">
            Sign In
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Enter your credentials to access private research
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm text-slate-400"
            >
              Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter username"
              disabled={loading}
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-slate-700 outline-none transition focus:border-[#38D9E6]/50 focus:ring-1 focus:ring-[#38D9E6]/20 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-slate-400"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              disabled={loading}
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-slate-700 outline-none transition focus:border-[#38D9E6]/50 focus:ring-1 focus:ring-[#38D9E6]/20 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
         { /*<div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-center font-mono text-[11px] text-slate-700">
           AUTHENTICATED ACCESS
          </p>
        </div> */}
      </div>
    </main>
  );
}