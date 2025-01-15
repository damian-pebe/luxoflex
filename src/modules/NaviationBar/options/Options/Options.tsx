import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTriggerUser,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils";
import BouquetCrochet from "@/assets/BouquetCrochet.png";
import { UserCircle2 } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

function OptionsModule() {

  return (
    <>
      <div className="flex gap-x-2 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTriggerUser>
                <UserCircle2 className="transition-colors duration-1000" />
              </NavigationMenuTriggerUser>
              <NavigationMenuContent>
                <ul className="grid gap-3 grid-cols-1 p-4 w-[300px]">
                  <ModeToggle/>
                  
                  <ListItem
                    href="/admin"
                    title="Administracion"
                    className=" animate-slideinleft"
                  >
                    Administracion de productos
                  </ListItem>
                  <ListItem
                    href="/docs/installation"
                    title="Installation"
                    className=" animate-zoomInTopRight"
                  >
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                    className=" animate-flyinright"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                  <div className=" animate-flyindown">
                    <Link
                      to="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <img src={BouquetCrochet} className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </Link>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

export default OptionsModule;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
