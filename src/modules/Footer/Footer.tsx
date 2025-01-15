import { Button } from "@/components/ui/button";
import { Tooltip } from "antd";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../index.css";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
function Footer() {
  return (
    <>
      <div className=" pt-5">
        <div className="bg-background py-30 pb-10 justify-between transition-colors duration-1000  rounded-t-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
<Contact/>


            <div className="flex flex-col items-center self-center justify-center">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-playfair italic font-semibold">
                Privacidad
              </h2>
              <div className="flex flex-col items-start">
                <Tooltip title="Copiar" placement="right">
                  <Button
                    variant="link"
                    className="text-[hsl(var(--foreground))] opacity-60 hover:opacity-100 font-semibold font-sans transition-opacity duration-1000"
                    onClick={() =>
                      window.open("mailto: bouquetcrochet@gmail.com")
                    }
                  >
                    <blockquote className="mt-6 border-l-2 pl-6 italic ">
                      Aviso de privacidad
                    </blockquote>
                  </Button>
                </Tooltip>
                <Tooltip title="Enviar mensaje" placement="right">
                  <Button
                    variant="link"
                    className="text-[hsl(var(--foreground))] opacity-60 hover:opacity-100 font-semibold font-sans transition-opacity duration-1000"
                    onClick={() => window.open("https://wa.me/+523322052692")}
                  >
                    <blockquote className="mt-6 border-l-2 pl-6 italic ">
                      Aviso legal
                    </blockquote>
                  </Button>
                </Tooltip>
                <Tooltip title="Instagram" placement="right">
                  <Button
                    variant="link"
                    className="text-[hsl(var(--foreground))] opacity-60 hover:opacity-100 font-semibold font-sans transition-opacity duration-1000"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/crochett_bouquettt?igsh=dTRuOGdleTU0OW9r"
                      )
                    }
                  >
                    <blockquote className="mt-6 border-l-2 pl-6 italic ">
                      Terminos y coniciones del servicio
                    </blockquote>
                  </Button>
                </Tooltip>
                <Tooltip title="Facebook" placement="right">
                  <Button
                    variant="link"
                    className="text-[hsl(var(--foreground))] opacity-60 hover:opacity-100 font-semibold font-sans transition-opacity duration-1000"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/crochett_bouquettt?igsh=dTRuOGdleTU0OW9r"
                      )
                    }
                  >
                    <blockquote className="mt-6 border-l-2 pl-6 italic ">
                      Facebook: crochet bouquet
                    </blockquote>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 w-full bg-[hsl(var(--footerContrast))] grid grid-cols-1 md:grid-cols-3 justify-between transition-colors duration-1000 rounded-t-3xl">
          
          <Socials/>

          <div className="text-lg text-background font-playfair text-center md:text-left">
            @All rights reserved
            <strong>
              <a href="/"> BouquetCrochet </a>
            </strong>
            since 2024
          </div>

          <Socials/>

        </div>
      </div>
    </>
  );
}

export default Footer;
