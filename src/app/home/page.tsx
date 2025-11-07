"use client";

import FreeDeliverySection from "@/components/FreeDeliverySection";
import { SectionCards } from "@/components/section-cards";
import { TopDeal } from "@/components/TopDeals";
import { topDealsData } from "@/constants/data";
export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <FreeDeliverySection />
      <div>Menu click</div>
      <TopDeal topDeals={topDealsData} />
    </div>
  );
}
