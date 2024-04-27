import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { NAVBAR_PETS, NAVBAR_SERVICES } from "@/configs/content-config";
import { PAGES_URLS } from "@/configs/app-routes-config";
import { useUserSession } from "@/hooks/useUserSession";

export default function SheetNav() {
  const { userSession } = useUserSession();
  const isAuthenticated = userSession.token;

  return (
    <Sheet>
      <SheetTrigger asChild className="block sm:hidden">
        <Button variant="outline">Open Menu</Button>
      </SheetTrigger>
      <SheetContent className="bg-white px-4">
        <SheetHeader>
          <SheetTitle className="xl:text-5xl lg:text-4xl text-3xl font-alegreya font-bold xl:w-[580px] md:w-[480px] sm:w-[400px] [word-spacing:10px]">
            Pet
            <span className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-primary">
              4
            </span>
            You
          </SheetTitle>
          <SheetDescription>
            Donde cada animal encuentra su familia perfecta.
          </SheetDescription>
        </SheetHeader>
        <nav className="py-6">
          <div
            id="a"
            className="text-center text-xl font-alegreya font-semibold"
          >
            <DropdownMenu linksList={NAVBAR_PETS} title="Mascotas" />
          </div>
          <div className="text-center text-xl font-alegreya font-semibold">
            <DropdownMenu linksList={NAVBAR_SERVICES} title="Servicios" />
          </div>
          <div className="flex flex-col items-center py-4 gap-8">
            {!isAuthenticated ? (
              <>
                <Link to={PAGES_URLS.login}>
                  <Button
                    variant="ghost"
                    className="text-primary-dark hover:text-primary-dark hover:bg-primary-extra-light"
                    size="lg"
                  >
                    Acceder
                  </Button>
                </Link>
                <Link to={PAGES_URLS.register}>
                  <Button size="lg" className="text-white bg-primary-dark">
                    Registro
                  </Button>
                </Link>
              </>
            ) : (
              <Link to={PAGES_URLS.profile}>
                <div
                  id="a"
                  className="text-center text-xl font-alegreya font-semibold text-primary-dark"
                >
                  Perfil
                </div>
              </Link>
            )}
          </div>
        </nav>
        <SheetFooter className="text-gray-400 text-sm flex flex-col">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Pet4You. Todos los derechos
            reservados.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
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

/* {NAVBAR_PETS.map((component) => (
  <ListItem
    key={crypto.randomUUID()}
    title={component.title}
    href={component.href}
  >
    {component.description}
  </ListItem>
))} */
