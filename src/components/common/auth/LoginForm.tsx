"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // call login API here
    console.log("Login", email, password);
    if (onSuccess) onSuccess();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
