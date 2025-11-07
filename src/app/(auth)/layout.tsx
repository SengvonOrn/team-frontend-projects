"use client";
import React, { ReactNode } from "react";

interface SignUpLayoutProps {
  children: ReactNode;
}

export default function SignUpLayout({ children }: SignUpLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Optional header or wrapper */}
      <main>{children}</main>
    </div>
  );
}
