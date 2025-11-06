"use client";
import FreeDeliverySection from "@/components/FreeDeliverySection";
import { SectionCards } from "@/components/section-cards";
import TopDeals from "@/components/TopDeals";
import { useEffect } from "react";
export default function HomePage() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <FreeDeliverySection />
        <TopDeals />
      </div>
    </>
  );
}
