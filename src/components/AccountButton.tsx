"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import FullPageModal from "@/components/auth/AuthDialog";

export default function AccountButton() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        asChild
        className="text-left h-auto p-2"
        onClick={() => setModalOpen(true)}
      >
        <div className="flex flex-col">
          <span className="text-xs font-medium">Sign in / Register</span>
          <span className="text-sm font-bold">Orders & Account</span>
        </div>
      </Button>

      {/* Modal */}
      <FullPageModal />
    </>
  );
}
