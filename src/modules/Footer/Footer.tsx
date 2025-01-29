import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-select";
import {
  Facebook,
  Whatsapp,
  Instagram,
  Globe,
  EnvelopeFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Card className="bg-black rounded-t-md border-zinc-900 rounded-none font-audiowide">
      <CardContent className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-lg">Empresa</h3>
            <div className="flex flex-col space-y-2">
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Sobre Nosotros
              </Button>
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Carrera
              </Button>
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Contactanos
              </Button>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-lg">Servicios</h3>
            <div className="flex flex-col space-y-2">
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Desarrollo Web
              </Button>
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Diseño
              </Button>
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Marketing
              </Button>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-lg">Recursos</h3>
            <div className="flex flex-col space-y-2">
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Blog
              </Button>
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Documentación
              </Button>
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md w-fit"
              >
                Centro de Ayuda
              </Button>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-lg">
              Contáctanos
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-6 w-6 text-blue-600" />
              </a>

              <a
                href="https://wa.me/525551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-green-900 transition-all duration-300 transform hover:scale-110"
              >
                <Whatsapp className="h-6 w-6 text-green-600" />
              </a>

              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-pink-100 dark:bg-gray-800 dark:hover:bg-pink-900 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-6 w-6 text-pink-600" />
              </a>

              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 dark:bg-gray-800 dark:hover:bg-purple-900 transition-all duration-300 transform hover:scale-110"
              >
                <Globe className="h-6 w-6 text-purple-600" />
              </a>

              <a
                href="mailto:contacto@empresa.com"
                className="p-3 rounded-full bg-gray-100 hover:bg-red-100 dark:bg-gray-800 dark:hover:bg-red-900 transition-all duration-300 transform hover:scale-110"
              >
                <EnvelopeFill className="h-6 w-6 text-red-600" />
              </a>

              <a
                href="tel:+525551234567"
                className="p-3 rounded-full bg-gray-100 hover:bg-teal-100 dark:bg-gray-800 dark:hover:bg-teal-900 transition-all duration-300 transform hover:scale-110"
              >
                <TelephoneFill className="h-6 w-6 text-teal-600" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-zinc-900 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-zinc-400 text-sm order-2 md:order-1">
            ©{" "}
            <Link
              to="https://luxoflex.vercel.app"
              className="text-white tracking-widest"
            >
              LUXOFLEX
            </Link>
            {"  "} 2021. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
            <Button
              variant="link"
              className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md"
            >
              Política de Privacidad
            </Button>
            <Button
              variant="link"
              className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md"
            >
              Términos de Servicio
            </Button>
            <Button
              variant="link"
              className="text-zinc-400 hover:text-white  transition-all p-2 rounded-md"
            >
              Política de Cookies
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;
