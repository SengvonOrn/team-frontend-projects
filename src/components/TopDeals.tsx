"use client";

import React from "react";
import { usePaginatedDeals } from "@/hooks/usePaginatedDeals";
import { Button } from "@/components/ui/button";
import { TopDealProps } from "@/types/deals";

export function TopDeal({ topDeals }: TopDealProps) {
  const { page, setPage, visibleDeals, getPages, totalPages, renderStars } =
    usePaginatedDeals(topDeals, 5, 6);

  return (
    <div className="flex flex-col gap-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-t-xl p-4 flex justify-between items-center text-white shadow-md">
        <h2 className="text-lg md:text-xl font-semibold">🔥 Top Deals</h2>
        <a href="#" className="text-sm underline hover:text-gray-100">
          See more
        </a>
      </div>

      {/* Deals Grid */}
      {visibleDeals.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {visibleDeals.map((deal) => (
            <div
              key={deal.id}
              className="border rounded-lg p-3 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white"
            >
              {deal.image && (
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              )}
              <h3 className="text-sm font-semibold">{deal.name}</h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {deal.description}
              </p>
              {deal.rating && (
                <p className="text-yellow-500 text-xs mt-1">
                  {renderStars(deal.rating)}
                </p>
              )}
              {deal.price && (
                <p className="text-sm font-bold text-green-600 mt-2">
                  ${deal.price.toFixed(2)}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          Sorry, no deals match your search.
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && visibleDeals.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>

          {getPages().map((p, i) =>
            p === "..." ? (
              <span key={i} className="px-2 text-gray-400">
                ...
              </span>
            ) : (
              <Button
                key={i}
                variant={p === page ? "default" : "outline"}
                onClick={() => setPage(Number(p))}
              >
                {p}
              </Button>
            )
          )}

          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
