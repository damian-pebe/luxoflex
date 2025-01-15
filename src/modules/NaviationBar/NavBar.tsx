import { NavigationBarOptions } from "@/components/nav-bar-options";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import "./navbar.css";
import OptionsModule from "./options/Options/Options";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/BouquetCrochet.png";
import { Tooltip } from "antd";
import { useState } from "react";
import feature2 from "@/assets/crochet21.jpeg";
import classNames from 'classnames'; 
import Contact from "../Footer/components/Contact";

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isOnProductsPage = location.pathname.includes("/products");
  const [ProductsPage, setProductsPage] = useState(isOnProductsPage || false);
  const [SearchValue, setSearchValue] = useState("");

  function handleSearch() {
    setProductsPage(location.pathname.includes("/products") ? true : false);
    if (!ProductsPage) {
      navigate("/search", { state: { search: SearchValue } });
    }
  }

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

  const itemView = ' relative flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
  return (
    <>
      <nav className="group-hover:animate-bounce flex items-center px-2 gap-x-4 md:px-6 justify-between w-full navigation-bar">
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="link"
            className="transition-colors duration-1000"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="hover:shadow-md w-10" />
          </Button>
          <div className="flex justify-center  pt-2">
            <OptionsModule />
          </div>
        </div>
        <div className="relative ">
          <Input
            placeholder="Search..."
            className="rounded-lg transition-colors duration-1000"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <Tooltip title="Buscar" placement="right">
            <Search
              strokeWidth={1}
              className="absolute top-1.5 right-2 transition-colors duration-1000 hover:cursor-pointer"
              onClick={handleSearch}
            />
          </Tooltip>
        </div>

        <div className="hidden md:block pt-3 ">
          <NavigationBarOptions />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="ghost"
            className="transition-colors duration-1000"
            onClick={() => navigate("/heart")}
          >
            <Heart className="hover:font-bold" />
          </Button>
          <Button
            variant="ghost"
            className="transition-colors duration-1000"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="hover:font-bold" />
          </Button>
        </div>

        <div className="sm:hidden block hover:animate-bounce">
    
          <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="sheetposition w-[80vw] md:w-[60vw] p-4 overflow-y-auto rounded-l-3xl rounded-r-none" side="right">
            <div >
            
            <h2 className="scroll-m-20 text-[25px]  font-playfair italic tracking-wider animate-flyindown">
                  Categorias
                </h2>
                <Divider/>
              {categories.map((category, index) => (
                <div key={category.category} className="py-3">
                  <div
                    className={classNames(
                      itemView,
                      index % 2 === 0 ? 'animate-fadeinbottomright' : 'animate-fadeinbottomleft'
                    )}
                    style={{
                      backgroundImage: `url(${feature2})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    onClick={() =>
                      navigate("/categoria", {
                        state: {
                          category: category.category,
                          title: category.title,
                          subtitle: category.subtitle,
                        },
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-background opacity-50 rounded-md"></div>
                    
                    <div className="hover:animate-bounce">
                      <div className="relative mb-2 mt-4 text-lg font-medium text-foreground">
                      {category.title}
                    </div>
                    <p className="relative text-sm leading-tight text-foreground">
                      {category.subtitle}
                    </p>
                      </div>
                  </div>
                </div>
              ))}
                              <Divider/>
<Contact/>
<Divider/>

<Socials/>
           </div>
          </SheetContent>
        </Sheet>
        
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;



 function Divider() {
  return (
    <div className="relative flex items-center ">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="flex-shrink mx-4 text-gray-500 font-medium text-lg cursor-grab">
      <Tooltip title="Gracias por confiar en Bouquet Crochet" placement="bottom">

        <i className="bi bi-heart-fill text-pink-500"></i>
        </Tooltip>
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
 function Socials() {
  return ( <div className="flex flex-row items-center self-center justify-center">
    <Button variant="link" className="text-background">
      <i className="bi bi-whatsapp text-foreground hover:text-green-600 transition-colors duration-1000 text-xl lg:text-2xl"></i>
    </Button>
    <Button variant="link" className="text-background">
      <i className="bi bi-instagram text-foreground hover:text-pink-600 transition-colors duration-1000 text-xl lg:text-2xl"></i>
    </Button>
    <Button variant="link" className="text-background">
      <i className="bi bi-facebook text-foreground hover:text-blue-800 transition-colors duration-1000 text-xl lg:text-2xl"></i>
    </Button>
  </div>
  );
}

