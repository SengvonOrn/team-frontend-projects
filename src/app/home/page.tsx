"use client";

import Category from "@/components/ctegory";
import Footer from "@/components/Footer";
import FreeDeliverySection from "@/components/FreeDeliverySection";
import { SectionCards } from "@/components/section-cards";
import { TopDeal } from "@/components/TopDeals";
import { topDealsData } from "@/constants/data";
import { category } from "@/types/categories";
import { useState } from "react";
export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  return (
    <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <FreeDeliverySection />

      <Category
        category={category}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <TopDeal topDeals={topDealsData} />

      <Footer />
    </div>
  );
}
