"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AuthDialog() {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  return (
    <Dialog>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-left h-auto p-2 cursor-pointer">
          <div className="flex flex-col">
            <span className="text-xs font-medium">Sign in / Register</span>
            <span className="text-sm font-bold">Orders & Account</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md h-full md:h-auto md:rounded-xl p-6">
        <DialogHeader>
          <DialogTitle>{tab === "signin" ? "Sign In" : "Sign Up"}</DialogTitle>
          <DialogDescription>
            {tab === "signin"
              ? "Enter your credentials to access your account."
              : "Create a new account to get started."}
          </DialogDescription>
        </DialogHeader>

        {/* Tab Switch */}
        <div className="flex gap-4 my-4">
          <Button
            variant={tab === "signin" ? "default" : "outline"}
            onClick={() => setTab("signin")}
          >
            Sign In
          </Button>
          <Button
            variant={tab === "signup" ? "default" : "outline"}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </Button>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-4">
          {tab === "signup" && (
            <div className="grid gap-3">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" />
            </div>
          )}
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="example@email.com" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
          </div>
          {/* Dialog Footer */}
          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              {tab === "signin" ? "Sign In" : "Sign Up"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
