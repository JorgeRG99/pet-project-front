import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NAVBAR_PETS, NAVBAR_SERVICES, PAGES_URLS } from "@/config";
import SheetNav from "./SheetNav";

export function Navbar() {
  return (
    <header className="flex justify-between items-center w-full p-4 border-b-[3px] border-primary bg-white">
      <div className="flex items-center space-x-4">
        <img
          width="40px"
          src="./images/pet4you-logo.png"
          alt="Logo pet4you basado en un gato
      "
        />
        <h1 className="font-alegreya font-semibold text-2xl">PET <span className="text-primary text-5xl">4</span> YOU</h1>
      </div>
      <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2 sm:block hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              Mascotas
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {NAVBAR_PETS.map((component) => (
                  <ListItem
                    key={crypto.randomUUID()}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {NAVBAR_SERVICES.map((component) => (
                  <ListItem
                    key={crypto.randomUUID()}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="space-x-4 sm:block hidden">
        <Link>
          <Button variant="ghost" className="text-primary-dark hover:text-primary-dark hover:bg-primary-extra-light">Acceder</Button>
        </Link>
        <Link to={PAGES_URLS.register}>
          <Button className="text-white bg-primary-dark">Registro</Button>
        </Link>
      </div>
      <SheetNav />
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={href}
            title={children}
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
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
