// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { FcGoogle } from "react-icons/fc";

// export default function AuthDialog() {
//   const [tab, setTab] = useState<"signin" | "signup">("signin");

//   return (
//     <Dialog>
//       {/* Trigger Button */}
//       <DialogTrigger asChild>
//         <Button
//           variant="ghost"
//           className="text-left h-auto p-2 cursor-pointer flex flex-col"
//         >
//           <span className="text-xs font-medium">Sign in / Register</span>
//           <span className="text-sm font-bold">Orders & Account</span>
//         </Button>
//       </DialogTrigger>

//       {/* Dialog Content with smooth animations */}
//       <DialogContent
//         className="w-full max-w-md h-full md:h-auto md:rounded-xl p-6
//           bg-white dark:bg-gray-900
//           shadow-xl
//           animate-in fade-in-0 zoom-in-95
//           data-[state=open]:animate-in
//           data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
//           transition-all duration-300 ease-in-out
//         "
//       >
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold">
//             {tab === "signin" ? "Sign In" : "Sign Up"}
//           </DialogTitle>
//           <DialogDescription className="text-gray-500">
//             {tab === "signin"
//               ? "Enter your credentials to access your account."
//               : "Create a new account to get started."}
//           </DialogDescription>
//         </DialogHeader>

//         {/* Tab Switch */}
//         <div className="flex gap-4 my-4">
//           <Button
//             variant={tab === "signin" ? "default" : "outline"}
//             className="flex-1"
//             onClick={() => setTab("signin")}
//           >
//             Sign In
//           </Button>
//           <Button
//             variant={tab === "signup" ? "default" : "outline"}
//             className="flex-1"
//             onClick={() => setTab("signup")}
//           >
//             Sign Up
//           </Button>
//         </div>

//         {/* Social Login */}
//         <div className="flex flex-col gap-2 mb-4">
//           <Button
//             variant="outline"
//             className="flex items-center justify-center gap-2"
//             onClick={() => alert("Google Sign In")}
//           >
//             <FcGoogle size={20} />
//             Continue with Google
//           </Button>
//         </div>

//         {/* Form */}
//         <form className="flex flex-col gap-4">
//           {tab === "signup" && (
//             <div className="grid gap-1">
//               <Label htmlFor="name">Full Name</Label>
//               <Input id="name" name="name" placeholder="John Doe" />
//             </div>
//           )}
//           <div className="grid gap-1">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" name="email" placeholder="example@email.com" />
//           </div>
//           <div className="grid gap-1">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="********"
//             />
//           </div>

//           {/* Dialog Footer */}
//           <DialogFooter className="flex justify-between items-center">
//             <DialogClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </DialogClose>
//             <Button type="submit" className="flex-1 ml-2">
//               {tab === "signin" ? "Sign In" : "Sign Up"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AuthModalProps = {
  type: "login" | "register";
  className?: string;
};

export default function AuthModal({
  type,
  className,
  ...prop
}: AuthModalProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(type, { email, password });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          {type === "login" ? "Login" : "Register"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        
        <DialogTitle>{type === "login" ? "Login" : "Register"}</DialogTitle>




        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
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
          <Button type="submit" className="cursor-pointer">
            {type === "login" ? "Login" : "Register Please"}
          </Button>
        </form>
        <DialogClose className="mt-4 cursor-pointer">Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
