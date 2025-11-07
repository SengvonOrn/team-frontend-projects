"use client";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-gray-100 border-r p-4">
          {/* Sidebar content, links, etc */}
          <nav className="flex flex-col gap-2">
            <a href="/dashboard" className="p-2 rounded hover:bg-gray-200">
              Dashboard
            </a>
            <a
              href="/dashboard/users"
              className="p-2 rounded hover:bg-gray-200"
            >
              Users
            </a>
            <a
              href="/dashboard/settings"
              className="p-2 rounded hover:bg-gray-200"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
