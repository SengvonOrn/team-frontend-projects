"use client";

export function TopNavbar() {
  return (
    <div
      id="top-navbar"
      className="fixed top-0 left-0 right-0 z-[60] h-10 flex items-center justify-between bg-[#3c1F13] backdrop-blur-md border-b border-border text-sm transition-all duration-500"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        {/* Left side */}
        <div className="flex items-center gap-4"></div>

        {/* Right side */}
        <div className="flex items-center gap-4"></div>
      </div>
    </div>
  );
}
