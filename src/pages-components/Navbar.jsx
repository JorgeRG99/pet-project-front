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
import PetLogo from "@/icons/PetLogo";
import { Button } from "@/components/ui/button";

const pets = [
  {
    title: "Perros",
    href: "/perros",
    description:
      "Leales y llenos de energía, descubre tu próximo compañero fiel",
  },
  {
    title: "Gatos",
    href: "/gatos",
    description:
      "Elegantes y misteriosos, encuentra un compañero con estilo y carácter",
  },
];

const services = [
  {
    title: "Hotel",
    href: "/hotel",
    description:
      "Atención experta para su bienestar, cuidamos de tu mascota como si fuera nuestra",
  },
  {
    title: "Adiestramiento",
    href: "/adiestramiento",
    description:
      "Entrenamiento personalizado: fortalece el vínculo y mejora la conducta de tu amigo peludo",
  },
  {
    title: "Educación animal",
    href: "/educacion",
    description:
      "Aprende sobre tu mascota: consejos y técnicas para una convivencia feliz y saludable",
  },
];

export function Navbar() {
  return (
    <header className="flex justify-between items-center w-full px-4 border-b-2 border-primary-extra-light">
      <div className="">
        <PetLogo />
      </div>
      <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              Mascotas
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {pets.map((component) => (
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
                {services.map((component) => (
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
      <div className="space-x-4">
        <Button variant="ghost">Acceder</Button>
        <Button className="text-white">Registro</Button>
      </div>
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
