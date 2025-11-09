"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // List of routes that should NOT show the header/sidebar
  const noLayoutRoutes = ["/sign-up", "/sign-in", "/auth/reset-password"];

  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <SiteHeader />
        </div>
      )}
      <main className={!hideLayout ? "pt-[120px] px-4 lg:px-20" : ""}>
        {children}
      </main>
    </>
  );
}
