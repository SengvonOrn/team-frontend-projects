"use client";

import React from "react";
import { useSearch } from "../../context/SearchContext";

interface HeaderSearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}



export function HeaderSearchInput({
  className = "",
  ...props
}: HeaderSearchInputProps) {
  const { search, setSearch } = useSearch();
  return (
    <input
      type="text"
      placeholder="Search all top deals..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={`px-4 py-2 rounded-full border border-gray-300 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ${className}`}
      {...props}
    />
  );
}
