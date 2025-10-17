import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import data from "./data.json";
export default function HomePage() {
  return (
    <div>
      {/* <AppSidebar variant="inset" className="pt-24 px-6" /> */}

      {/* <SidebarInset className="pt-52 px-5 lg:px-28"> */}
      {/* <SiteHeader /> */}
      <div className="flex flex-1 flex-col cursor-pointer">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <h3 className="text-7xl px-8">Hello guy</h3>
            <SectionCards />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col cursor-pointer">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <h3 className="text-7xl px-8">Hello guy</h3>
            <SectionCards />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col cursor-pointer">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <h3 className="text-7xl px-8">Hello guy</h3>
            <SectionCards />
          </div>
        </div>
      </div>
    </div>
  );
}
