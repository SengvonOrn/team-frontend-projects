"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/cart/CartContext"; // <-- useCart hook
import {
  ChevronDown,
  Images,
  Search,
  ShoppingBag,
  Heart,
  BarChart2,
  Globe,
  X,
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
import AuthDialog from "@/components/common/auth/AuthDialog";

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

  const { cartItems } = useCart(); // <-- get cart items

  const filteredCategories = allCategories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleImageSearchClick = () => imageInputRef.current?.click();
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl(URL.createObjectURL(file));
      if (imageInputRef.current) imageInputRef.current.value = "";
    }
  };
  const clearImageSearch = () => {
    if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    setImagePreviewUrl(null);
  };

  const inputLeftPadding = imagePreviewUrl ? "pl-20" : "pl-4";
  const inputRightPadding = imagePreviewUrl ? "pr-2" : "pr-4";

  return (
    <header className="flex items-center justify-between w-full gap-6 p-4">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-camben.png"
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

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-2xl border border-input rounded-full focus-within:ring-2 focus-within:ring-ring transition-all duration-200 p-1">
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
                        {cat.icon} {cat.name}
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
        <div className="flex flex-1 items-center relative">
          {imagePreviewUrl && (
            <div className="absolute left-2 flex items-center gap-1 z-10">
              <div className="relative h-7 w-7 rounded-md overflow-hidden border border-gray-200 bg-gray-50">
                <Image
                  src={imagePreviewUrl}
                  alt="Selected search image preview"
                  fill
                  style={{ objectFit: "cover" }}
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
          <HeaderSearchInput
            className={`flex-1 !bg-transparent !border-none !ring-0 !outline-none !shadow-none focus:!ring-0 focus:!outline-none focus:!shadow-none text-base ${inputLeftPadding} ${inputRightPadding}`}
          />
        </div>

        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={handleImageFileChange}
          style={{ display: "none" }}
        />
        <Button
          variant="ghost"
          size="icon"
          aria-label="Search by image"
          className="rounded-full"
          onClick={handleImageSearchClick}
        >
          <Images className="w-5 h-5" />
        </Button>
        <Button
          type="submit"
          size="icon"
          className="rounded-full bg-orange-600 text-white hover:bg-orange-700"
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>

      {/* Right Icons */}
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

        {/* Cart Icon with badge */}
        <Link href="/cart" className="relative">
          {/* <ShoppingBag className="w-6 h-6" /> */}
          <span className="w-8 h-8">🛒</span>

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>

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

        {/* Auth buttons */}
        <div className="flex gap-2 ">
          <AuthDialog type="login" />
          <AuthDialog type="register" />
        </div>
      </div>
    </header>
  );
}
