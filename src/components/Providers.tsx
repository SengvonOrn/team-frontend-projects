"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SearchProvider } from "@/context/SearchContext";
import { AuthProvider } from "@/context/auth/AuthContext";
import { CartProvider } from "@/context/cart/CartContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <SidebarInset className="relative">
          <SearchProvider>
            <AuthProvider>
              <CartProvider>{children}</CartProvider>
            </AuthProvider>
          </SearchProvider>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
