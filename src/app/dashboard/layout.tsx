import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <SiteHeader />
      </div>
      <main className="pt-[calc(var(--header-height)+2rem)] px-5 lg:px-28">
        {children}
      </main>
    </div>
  );
}
