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
import { CookiesPolicy } from "./components/CookiesPolicy";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { Link } from "react-router-dom";
import EffectScroll from "@/components/effectScroll";

const Footer = () => {
  return (
    <Card className="bg-background rounded-t-md  rounded-none font-poppins shadow-md">
      <CardContent className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-center sm:text-left">
            
            <EffectScroll classname="duration-1000 animate-fadein">
              <h3 className="text-foreground font-semibold mb-4 text-lg">
                Empresa
              </h3>
            </EffectScroll>

            <div className="flex flex-row md:flex-col space-y-2">
              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/luxoflex"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Sobre Nosotros
                </Link>
              </EffectScroll>
              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/vision"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Carrera
                </Link>
              </EffectScroll>
              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/contactus"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Contactanos
                </Link>
              </EffectScroll>
            </div>
          </div>

          <div className="text-center sm:text-left">
           
            <EffectScroll classname="duration-1000 animate-fadein">
              <h3 className="foreground font-semibold mb-4 text-lg">
                Servicios
              </h3>
            </EffectScroll>
            <div className="flex flex-row md:flex-col space-y-2">
              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/web"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Desarrollo Web
                </Link>
              </EffectScroll>
              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/design"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Diseño
                </Link>
              </EffectScroll>

              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/marketing"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Marketing
                </Link>
              </EffectScroll>
            </div>
          </div>

          <div className="text-center sm:text-left">
           
            <EffectScroll classname="duration-1000 animate-fadein">
              <h3 className="foreground font-semibold mb-4 text-lg">
                Recursos
              </h3>
            </EffectScroll>
            <div className="flex flex-row md:flex-col space-y-2">
              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/blog"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Blog
                </Link>
              </EffectScroll>
              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/documentacion"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Documentación
                </Link>
              </EffectScroll>
              <EffectScroll classname="duration-1000 animate-fadein">
                <Link
                  to="/help"
                  className="text-foreground hover:opacity-80  transition-all p-2 rounded-md w-fit"
                >
                  Centro de Ayuda
                </Link>
              </EffectScroll>
            </div>
            
          </div>

          <div className="text-center sm:text-left">
            <EffectScroll classname="duration-1000 animate-fadein">
              <h3 className="foreground font-semibold mb-4 text-lg">
                Contáctanos
              </h3>
            </EffectScroll>

            <EffectScroll classname="duration-1000 animate-fadein">
              <div className="flex flex-wrap gap-6 justify-center">
                <a
                  href="https://facebook.com/luxoflex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-6 w-6 text-blue-600" />
                </a>

                <a
                  href="https://wa.me/523334626001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-green-900 transition-all duration-300 transform hover:scale-110"
                >
                  <Whatsapp className="h-6 w-6 text-green-600" />
                </a>

                <a
                  href="https://www.instagram.com/luxoflex?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-pink-100 dark:bg-gray-800 dark:hover:bg-pink-900 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6 text-pink-600" />
                </a>

                <a
                  href="https://luxoflex.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 dark:bg-gray-800 dark:hover:bg-purple-900 transition-all duration-300 transform hover:scale-110"
                >
                  <Globe className="h-6 w-6 text-purple-600" />
                </a>

                <a
                  href="mailto:luxoflex1ventas@gmail.com"
                  className="p-3 rounded-full bg-gray-100 hover:bg-red-100 dark:bg-gray-800 dark:hover:bg-red-900 transition-all duration-300 transform hover:scale-110"
                >
                  <EnvelopeFill className="h-6 w-6 text-red-600" />
                </a>

                <a
                  href="tel:+523334626001"
                  className="p-3 rounded-full bg-gray-100 hover:bg-teal-100 dark:bg-gray-800 dark:hover:bg-teal-900 transition-all duration-300 transform hover:scale-110"
                >
                  <TelephoneFill className="h-6 w-6 text-teal-600" />
                </a>
              </div>
            </EffectScroll>
          </div>
        
        </div>

        <Separator className="bg-zinc-900 " />
        <EffectScroll classname="duration-1000 animate-fadein">
          <div className="w-full flex flex-col md:flex-row justify-between space-y-4 ">
            <Link
              to="https://luxoflex.vercel.app"
              className="text-center text-foreground text-sm flex justify-center"
            >
              @   All rights reserved LUXOFLEX since 2024
            </Link>

            <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
              <PrivacyPolicy />
              <TermsOfService />
              <CookiesPolicy />
            </div>
          </div>
        </EffectScroll>
      </CardContent>
    </Card>
  );
};

export default Footer;

