"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChartArea,
  ChartBar,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  HelpCircle,
  HelpCircleIcon,
  Search,
  SearchIcon,
  SendToBackIcon,
  ShoppingBag,
  StarIcon,
} from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { components } from "../constants/data";
import { UserMenu } from "./button-auth";

export function ModernNavigationMenu() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        {/* --------------------------Best Seller ---------------------------- */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">
            Best Seller
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* -----------------------------5 Star ------------------------------ */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">
            <StarIcon className="mr-2" /> 5 Start Rate
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       {/* ---------------------Early Black Friday---------------- */}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="text-lg">
            <SendToBackIcon className="mr-2" />
            Early Black Friday
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium text-lg">5 Start rate</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium text-lg">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium text-lg">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* ---------------New In-------------------------------------- */}

        {/* <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="text-lg">
            New In
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">New In</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* ------------------categories------------------------------------- */}

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="text-lg">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* -----------------nav searching---------------------- */}

        <NavigationMenuItem>
          <div className="flex items-center space-x-2  p-1.5  bg-transparent border border-input  rounded-full focus-within:ring-2 focus-within:ring-ring transition-all duration-200">
            <Input
              placeholder="Search..."
              className="w-48 md:w-64  border-none rounded-full bg-transparent focus-visible:ring-0 focus-visible:outline-none text-sm"
            />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              className="hover:bg-muted"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </NavigationMenuItem>

        {/* -----------profile---------------------- */}

        <Link href="/prifile">
          <UserMenu />
        </Link>

        {/* -----------suporter--------------------- */}

        <NavigationMenuItem className="flex items-center">
          <Link
            href="/support"
            className=" items-center gap-2 px-3 py-2  font-medium text-foreground  text-lg  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex  rounded-sm p-2  outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* -----------language----------------------- */}
      <NavigationMenuItem className="hidden md:block">
        <NavigationMenuTrigger className="text-lg">
          Language
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-2">
                  <CircleHelpIcon />
                  Khmer
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-2">
                  <CircleIcon />
                  English
                </Link>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* --------------chart------------------------ */}

      <NavigationMenuItem className="flex items-center">
        <Link
          href="/chart"
          className=" items-center gap-2 px-3 py-2  text-foreground text-lg   transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex  rounded-sm p-2  outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4"
        >
          <ShoppingBag />
        </Link>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
