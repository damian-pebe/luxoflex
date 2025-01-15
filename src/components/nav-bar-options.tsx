"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import feature1 from "@/assets/crochet22.jpg";
import feature2 from "@/assets/crochet21.jpeg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
export function NavigationBarOptions() {
  const navigate = useNavigate();
  const categories = [
    {
      category: "Feature",
      title: "¡Los Más Vendidos!",
      subtitle: "Descubre los favoritos en Crochet Bouquet que todos aman.",
    },
    {
      category: "Newest",
      title: "¡Novedades Exclusivas!",
      subtitle: "Sé el primero en explorar nuestras últimas creaciones.",
    },
    {
      category: "Amigurumis",
      title: "Amigurumis Adorables",
      subtitle: "Detalles únicos hechos con amor para ti.",
    },
    {
      category: "Flowers",
      title: "Flores Atemporales",
      subtitle: "El regalo perfecto que nunca marchita.",
    },
    {
      category: "Bouquet",
      title: "Ramos Únicos",
      subtitle: "Combinaciones hermosas para cada ocasión especial.",
    },
    {
      category: "Fashion",
      title: "Moda en Crochet",
      subtitle: "Estilo y confort con prendas hechas a mano.",
    },
    {
      category: "Accessories",
      title: "Accesorios Elegantes",
      subtitle: "Complementos perfectos para tu estilo.",
    },
    {
      category: "HomeDecor",
      title: "Decoración para el Hogar",
      subtitle: "Añade un toque especial a tu hogar.",
    },
    {
      category: "Gifts",
      title: "Regalos Especiales",
      subtitle: "Encuentra el regalo perfecto para cualquier ocasión.",
    },
  ];
  const products = [
    {
      title: "Product1",
      subtitle: "¡Los Más Vendidos!",
      image: "Descubre los favoritos en Crochet Bouquet que todos aman.",
    },
     {
      title: "Feature",
      subtitle: "¡Los Más Vendidos!",
      image: "Descubre los favoritos en Crochet Bouquet que todos aman.",
    },
  ]
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            variant="ghost"
            className="transition-colors duration-1000"
          >
            Principales
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 h-full md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild className="animate-slideinleft2">
                  <a
                    href="/"
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    style={{
                      backgroundImage: `url(${feature1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-background opacity-50 rounded-md"></div>
                    <div className="relative mb-2 mt-4 text-lg font-medium text-foreground">
                    {products[0].title}                    </div>
                    <p className="relative text-sm leading-tight text-foreground">
                    {products[0].subtitle}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <div>
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[0].category,
                        title: categories[0].title,
                        subtitle: categories[0].subtitle,
                      },
                    })
                  }
                  title={categories[0].title}
                  className=" animate-fadeinright hover:cursor-pointer"
                >
                  {categories[0].subtitle}
                </ListItem>
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[1].category,
                        title: categories[1].title,
                        subtitle: categories[1].subtitle,
                      },
                    })
                  }
                  title={categories[1].title}
                  className=" animate-fadeinright1s hover:cursor-pointer"
                >
                  {categories[1].subtitle}
                </ListItem>
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[2].category,
                        title: categories[2].title,
                        subtitle: categories[2].subtitle,
                      },
                    })
                  }
                  title={categories[2].title}
                  className=" animate-fadeinright2s hover:cursor-pointer"
                >
                  {categories[2].subtitle}
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            variant="ghost"
            className="transition-colors duration-1000 h-full"
          >
            Todos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:grid-cols-3 lg:w-[600px]">
              <div >
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[3].category,
                        title: categories[3].title,
                        subtitle: categories[3].subtitle,
                      },
                    })
                  }
                  title={categories[3].title}
                  className=" animate-fadeinleft1s hover:cursor-pointer"
                >
                  {categories[3].subtitle}
                </ListItem>
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[4].category,
                        title: categories[4].title,
                        subtitle: categories[4].subtitle,
                      },
                    })
                  }
                  title={categories[4].title}
                  className=" animate-fadeinleft2s hover:cursor-pointer"
                >
                  {categories[4].subtitle}
                </ListItem>
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[5].category,
                        title: categories[5].title,
                        subtitle: categories[5].subtitle,
                      },
                    })
                  }
                  title={categories[5].title}
                  className=" animate-fadeinleft hover:cursor-pointer"
                >
                  {categories[5].subtitle}
                </ListItem>
              </div>
              <li className="row-span-3 flex-1">
                <NavigationMenuLink asChild className="animate-slideinup">
                  <a
                    href="/"
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    style={{
                      backgroundImage: `url(${feature2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-background opacity-50 rounded-md"></div>
                    <div className="relative mb-2 mt-4 text-lg font-medium text-foreground">
                      
                      {products[1].title}
                    </div>
                    <p className="relative text-sm leading-tight text-foreground">
                    {products[1].subtitle}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <div>
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[6].category,
                        title: categories[6].title,
                        subtitle: categories[6].subtitle,
                      },
                    })
                  }
                  title={categories[6].title}
                  className=" animate-fadeinright hover:cursor-pointer"
                >
                  {categories[6].subtitle}
                </ListItem>
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[7].category,
                        title: categories[7].title,
                        subtitle: categories[7].subtitle,
                      },
                    })
                  }
                  title={categories[7].title}
                  className=" animate-fadeinright1s hover:cursor-pointer"
                >
                  {categories[7].subtitle}
                </ListItem>
                <ListItem
                  onClick={() =>
                    navigate("/categoria", {
                      state: {
                        category: categories[8].category,
                        title: categories[8].title,
                        subtitle: categories[8].subtitle,
                      },
                    })
                  }
                  title={categories[8].title}
                  className=" animate-fadeinright2s hover:cursor-pointer"
                >
                  {categories[8].subtitle}
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
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
