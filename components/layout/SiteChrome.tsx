"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideChrome =
    pathname === "/testing" ||
    pathname.startsWith("/testing/") ||
    pathname === "/genelia-jamesbond-23081211" ||
    pathname.startsWith("/genelia-jamesbond-23081211/");

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}