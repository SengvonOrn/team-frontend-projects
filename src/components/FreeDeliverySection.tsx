"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TimeLeft, useCountdown } from "@/lib/useCountdown";

export default function FreeDeliverySection() {
  const timeLeft: TimeLeft = useCountdown({
    days: 10,
    hours: 23,
    minutes: 59,
    seconds: 0,
  });

  return (
    <section className="w-full py-8 px-6 rounded-2xl bg-gradient-to-r from-cyan-100 to-teal-100 relative overflow-hidden shadow-md flex items-center justify-between">
      {/* LEFT SIDE CONTENT */}
      <div className="z-10">
        <h2 className="text-4xl font-extrabold text-green-900 mb-2">
          Free Delivery
        </h2>
        <p className="text-gray-700 font-medium flex items-center space-x-2">
          <span>Count down</span>
          <span className="text-xl">🎁</span>
        </p>

        {/* Countdown Timer */}
        <div className="flex space-x-3 mt-3">
          {Object.entries(timeLeft).map(([label, value], idx) => (
            <React.Fragment key={label}>
              <div className="bg-red-500 text-white text-xl font-bold rounded-lg px-3 py-2 shadow">
                {value.toString().padStart(2, "0")}
              </div>
              {idx < 3 && (
                <span className="text-2xl text-gray-700 font-bold">:</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center space-x-6">
        <Image
          src="/images/"
          alt="Plant"
          width={150}
          height={150}
          className="object-contain"
        />
        <Image
          src="/images/Truck.png"
          alt="Delivery Truck"
          width={200}
          height={150}
          className="object-contain"
        />
        <Image
          src="/images/plane.png"
          alt="Plane"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>
    </section>
  );
}
