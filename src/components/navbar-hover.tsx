import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface ModernNavigationMenuProps {
  title: string;
}

export function ModernNavigationMenu({ title }: ModernNavigationMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg cursor-pointer">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Hello From update
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      {/* -------------- */}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <a href="/docs" title="Introduction">
                {title}
              </a>
              <a href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </a>
              <a href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </a>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
