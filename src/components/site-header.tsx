import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggler";

import { ModernNavigationMenu } from "@/components/navbar-hover";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { UserMenu } from "./button-auth";
interface ModernNavigationMenuProps {
  title: string;
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-24 w-full items-center gap-2 border-b bg-[#4B0A04] backdrop-blur-md transition-[width,height] ease-linear">
      <div className="flex w-full items-center  justify-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />

          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />

          <ModernNavigationMenu />
        </div>

        <div className="flex items-center gap-x-2">
          {/* <div className="ml-auto flex items-center">
            <UserMenu />
          </div> */}
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />

          <div className="ml-auto flex items-center ">
            <Button variant="ghost" asChild className="hidden w-[40px] sm:flex">
              <ModeToggle />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
