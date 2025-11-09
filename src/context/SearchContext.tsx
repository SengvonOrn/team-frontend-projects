"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  categories: string;
  setCategories: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  // first context

  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("");

  return (
    <SearchContext.Provider
      value={{ search, setSearch, categories, setCategories }}
    >
      {children}
    </SearchContext.Provider>
  );
};

//-------------------------------------->

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
