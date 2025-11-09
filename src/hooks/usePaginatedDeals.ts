"use client";

import { useState, useEffect } from "react";
import { useSearch } from "@/context/SearchContext";

export interface Deal {
  id: number;
  name: string;
  description: string;
  image?: string;
  price?: number;
  rating?: number;
  category: string;
}

//---------------------------------------->
export function usePaginatedDeals(topDeals: Deal[], rows = 5, columns = 6) {
  const { search, categories } = useSearch(); // now includes categories
  const [page, setPage] = useState(1);

  const itemsPerPage = rows * columns;

  // Filter deals by search and categories
  const filteredDeals = topDeals.filter((deal) => {
    const matchesSearch =
      deal.name.toLowerCase().startsWith(search.toLowerCase()) ||
      deal.description.toLowerCase().startsWith(search.toLowerCase());

    const matchesCategory =
      categories === "" ||
      deal.category.toLowerCase() === categories.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Reset page when search or categories change
  useEffect(() => {
    setPage(1);
  }, [search, categories]);

  // Pagination logic
  const totalPages = Math.ceil(filteredDeals.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const visibleDeals = filteredDeals.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Pagination page display logic
  const getPages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 4;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page <= maxVisible) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (page > maxVisible && page < totalPages - 2) {
      pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    } else {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    }

    return pages;
  };

  // Helper function to render stars
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (halfStar) stars.push("☆");
    while (stars.length < 5) stars.push("☆");

    return stars.join(" ");
  };

  return {
    search,
    categories,
    page,
    setPage,
    totalPages,
    filteredDeals,
    visibleDeals,
    getPages,
    renderStars,
  };
}
