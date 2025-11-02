"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./theme-toggler";
import { Header } from "@/components/navbar-hover";
import { TopNavbar } from "../components/ui/TopNavbar";
import { useScrollDetection } from "@/hooks/useScrollDetection";

export function SiteHeader() {
  const { hideTop, blurHeader } = useScrollDetection(60, 100);
  return (
    <>
      {/* Top Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-transform duration-500 ${
          hideTop ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <TopNavbar />
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 z-40 flex h-25 items-center border-b transition-transform duration-500 ${
          hideTop
            ? "translate-y-0"
            : "translate-y-[40px]" /* height of TopNavbar */
        } ${
          blurHeader
            ? "backdrop-blur-lg bg-background/70 shadow-sm"
            : "bg-background"
        }`}
      >
        <div className="flex w-full items-center   justify-center px-6">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mx-2 h-4" />
            <Header />
            <div className="flex items-center gap-x-3">
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Button
                variant="ghost"
                asChild
                className="hidden w-[40px] sm:flex"
              >
                <ModeToggle />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
