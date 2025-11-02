"use client";

import { SectionCards } from "@/components/section-cards";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    console.log("HomePage mounted");
    return () => {
      console.log("HomePage unmounted");
    };
  }, []); // empty dependency array = run once on mount

  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
        <h3 className="text-7xl px-8">
          <button onClick={handleClick}>Click</button>
        </h3>
        <SectionCards />
        <SectionCards />
        <SectionCards />
        <SectionCards />
        <SectionCards />
        <SectionCards />
        <SectionCards />
        <SectionCards />
      </div>
    </>
  );
}
