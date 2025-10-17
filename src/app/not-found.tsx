"use client";
import Image from "next/image";
import unicorn from "../../public/unicorn-removebg-preview.png";
export default function NotfoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 ">
      {/* Unicorn image with bounce animation */}
      <div className="animate-bounce">
        <Image
          src={unicorn}
          alt="Unicorn Not Found"
          width={250}
          height={250}
          className="mb-6 drop-shadow-lg"
        />
      </div>
      {/* 404 heading */}
      <h1 className="text-6xl font-extrabold text-pink-400 mb-3 animate-pulse">
        404
      </h1>

      {/* Message */}
      <p className="text-lg mb-6 text-gray-300 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Go Home button */}
      <a
        href="/"
        className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg font-semibold shadow-lg transition duration-200 transform hover:scale-105"
      >
        Go Home
      </a>
    </div>
  );
}
