import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function TestingPage() {
  const cookieStore = await cookies();
  const role = cookieStore.get("user_role")?.value;

  if (role !== process.env.ADMIN_USERNAME) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-[calc(100vh-64px)] px-5 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#38d9e6]">
              Private Area
            </div>

            <h1 className="mt-3 text-4xl font-bold text-white">
              Testing...
            </h1>
          </div>

          {/* Logout */}
          <LogoutButton />

        </div>

      </div>
    </main>
  );
}