import { Button } from "@/components/ui/button";
import { Tooltip } from "antd";

export default function Contact() {
  return (

    <div className="flex flex-col items-center self-center justify-center">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-playfair italic font-semibold">
                Contactanos
              </h2>
              
    <div className="flex flex-col items-start">
                <Tooltip title="Enviar correo" placement="right">
                  <Button
                    variant="link"
                    className="text-[hsl(var(--foreground))] opacity-60 hover:opacity-100 font-semibold font-sans transition-opacity duration-1000"
                    onClick={() =>
                      window.open("mailto: bouquetcrochet@gmail.com")
                    }
                  >
                    <blockquote className="mt-6 border-l-2 pl-6 italic hover:text-foreground text-[hsl(var(--color-email))] transition-colors duration-1000">
                      Email: bouquetcrochet@gmail.com
                    </blockquote>
                  </Button>
                </Tooltip>
                <Tooltip title="Enviar mensaje" placement="right">
                  <Button
                    variant="link"
                    className="text-[hsl(var(--foreground))] opacity-60 hover:opacity-100 font-semibold font-sans transition-opacity duration-1000"
                    onClick={() => window.open("https://wa.me/+523322052692")}
                  >
                    <blockquote className="mt-6 border-l-2 pl-6 italic hover:text-foreground text-[hsl(var(--color-whatsapp))] transition-colors duration-1000">
                      Whatsapp: +523322052692
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
                    <blockquote className="mt-6 border-l-2 pl-6 italic hover:text-foreground text-[hsl(var(--color-instagram))] transition-colors duration-1000">
                      Instagram: crochett_bouquettt
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
                    <blockquote className="mt-6 border-l-2 pl-6 italic hover:text-foreground text-[hsl(var(--color-facebook))] transition-colors duration-1000">
                      Facebook: crochet bouquet
                    </blockquote>
                  </Button>
                </Tooltip>
              </div>            </div>

  )
}
