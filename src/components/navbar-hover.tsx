"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Images,
  Search,
  ShoppingBag,
  Heart,
  BarChart2,
  Globe,
  X, // For clearing the image search
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { HeaderSearchInput } from "./buttonSearch/header-search-input";
import AuthDialog from "./AuthDialog";

// --- Categories for your Dropdown ---
const allCategories = [
  { name: "Electronics", href: "/electronics", icon: "⚡️" },
  { name: "Books", href: "/books", icon: "📚" },
  { name: "Clothing", href: "/clothing", icon: "👕" },
  { name: "Home Goods", href: "/home", icon: "🏠" },
  { name: "Sports", href: "/sports", icon: "⚽️" },
];

export function Header() {
  const [search, setSearch] = React.useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState<string | null>(
    null
  );
  const imageInputRef = React.useRef<HTMLInputElement>(null);

  const filteredCategories = allCategories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleImageSearchClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      // If there was a previous image, revoke its URL to free memory
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);

      // Clear the input value so the same file can be selected again
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    }
  };

  const clearImageSearch = () => {
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
    }
    setImagePreviewUrl(null);
  };

  // Calculate left padding for the Input based on whether an image is present
  const inputLeftPadding = imagePreviewUrl ? "pl-20" : "pl-4";

  // Calculate right padding for the Input to account for the Image Search Button
  const inputRightPadding = imagePreviewUrl ? "pr-2" : "pr-4";

  return (
    <header className="flex items-center justify-between w-full gap-6 p-4 ">
      {/* 1. LEFT: Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-camben.png" // <-- REPLACE with your actual logo path
            alt="Camben Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-black">Camben</span>
            <span className="text-xs text-gray-500">Open on The World</span>
          </div>
        </Link>
      </div>

      {/* 2. CENTER: Main Search Bar */}
      <div className="flex items-center w-full max-w-2xl border border-input rounded-full focus-within:ring-2 focus-within:ring-ring transition-all duration-200 p-1">
        {/* Categories Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="rounded-full space-x-1 flex-shrink-0"
            >
              <span>All Categories</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-2">
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Search categories..."
                className="rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ul className="grid gap-1 mt-2 max-h-60 overflow-y-auto">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((cat) => (
                    <li key={cat.name}>
                      <Link
                        href={cat.href}
                        className="flex items-center gap-2 px-2 py-1.5 rounded text-sm hover:bg-muted"
                      >
                        {cat.icon}
                        {cat.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-muted-foreground px-2 py-1.5">
                    No results found.
                  </li>
                )}
              </ul>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="h-6" />

        {/* --- Combined Text Input and Image Preview (Updated) --- */}
        <div className="flex flex-1 items-center relative">
          {imagePreviewUrl && (
            // Image preview on the left, absolutely positioned
            <div className="absolute left-2 flex items-center gap-1 z-10">
              {" "}
              {/* Added z-10 */}
              <div className="relative h-7 w-7 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
                <Image
                  src={imagePreviewUrl}
                  alt="Selected search image preview"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-muted-foreground hover:text-foreground p-0"
                onClick={clearImageSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* <Input
            type="text"
            placeholder="What are you looking for?"
            className={`
                      flex-1
                      !bg-transparent
                      !border-none
                      !ring-0
                      !outline-none
                      !shadow-none
                      focus:!ring-0
                      focus:!outline-none
                      focus:!shadow-none
                      text-base
                      ${inputLeftPadding} ${inputRightPadding}
                    `}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> */}

          <HeaderSearchInput
            className={`   flex-1
                      !bg-transparent
                      !border-none
                      !ring-0
                      !outline-none
                      !shadow-none
                      focus:!ring-0
                      focus:!outline-none
                      focus:!shadow-none
                      text-base
                      ${inputLeftPadding} ${inputRightPadding}`}
          />
        </div>
        {/* --- End Combined Text Input and Image Preview --- */}

        {/* Hidden File Input for Image Search */}
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={handleImageFileChange}
          style={{ display: "none" }}
        />

        {/* Image Search Button (triggers hidden file input) */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Search by image"
          className="rounded-full"
          onClick={handleImageSearchClick}
        >
          <Images className="w-5 h-5" />
        </Button>

        {/* Main Search Button */}
        <Button
          type="submit"
          size="icon"
          className="rounded-full bg-orange-600 text-white hover:bg-orange-700"
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>

      {/* 3. RIGHT: Icons & Account (remains the same) */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Compare"
          className="hidden lg:inline-flex"
        >
          <BarChart2 className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Wishlist"
          className="hidden lg:inline-flex"
        >
          <Heart className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Cart" asChild>
          <Link href="/cart">
            <ShoppingBag className="w-6 h-6" />
          </Link>
        </Button>

        <Separator
          orientation="vertical"
          className="h-6 mx-2 hidden md:block"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="rounded-md space-x-1 hidden md:flex"
            >
              <Globe className="w-5 h-5" />
              <span>English</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 p-2">
            <Link
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-sm hover:bg-muted"
            >
              🇰🇭 Khmer
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-sm hover:bg-muted"
            >
              🇬🇧 English
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sign In / Sign Up Dialog */}
        <AuthDialog />
      </div>
    </header>
  );
}
