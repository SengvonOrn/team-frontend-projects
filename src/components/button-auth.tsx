"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function UserMenu() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="ml-auto flex items-center">
      {user ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="hidden sm:flex bg-transparent hover:bg-transparent cursor-pointer">
              <Avatar className="w-[40px]">
                <AvatarImage
                  src={user.avatar || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>
                  {user.name?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>sengvon orn</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Button
          variant="link"
          className="hidden sm:flex bg-transparent hover:bg-transparent cursor-pointer"
          onClick={() => (window.location.href = "/login")}
        >
          Log in
        </Button>
      )}
    </div>
  );
}
