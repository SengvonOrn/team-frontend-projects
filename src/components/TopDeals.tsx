"use client";
import React from "react";

const topDeals = [
  {
    name: "Smart Watch",
    price: "$120",
    image: "/images/watch.png", // replace with your image path
  },
  {
    name: "Camera Bag",
    price: "$32",
    image: "/images/bag.png",
  },
  {
    name: "Gaming Monitor",
    price: "$299",
    image: "/images/monitor.png",
  },
  {
    name: "Gaming Chair",
    price: "$189",
    image: "/images/chair.png",
  },
  {
    name: "Smartphone",
    price: "$499",
    image: "/images/phone.png",
  },
];

export default function TopDeals() {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Top Deal</h2>
        <a href="#" className="text-blue-500 text-sm">
          See more
        </a>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {topDeals.map((deal, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-40 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={deal.image}
              alt={deal.name}
              className="w-full h-32 object-contain mb-2"
            />
            <h3 className="text-sm font-medium">{deal.name}</h3>
            <p className="text-red-500 font-semibold">{deal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
