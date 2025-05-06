"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import { logo } from "@/const";

export function PrivacyPolicy() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="hover:text-white text-white/80 transition-all duration-700 p-2 rounded-md"
        >
          Política de Privacidad
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1c1c1c] text-white max-w-md md:max-w-3xl max-h-[80vh] overflow-hidden flex flex-col rounded-md">
        <DialogHeader className="border-b border-white/10 sticky top-0 bg-[#1c1c1c] z-10 px-6 py-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl text-left font-bold">
              Política de Privacidad
            </DialogTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-raaleway text-3xl">
                <img
                  src={logo}
                  className="hover:scale-125 transition-all duration-700 w-12 rounded-full hover:opacity-90"
                  alt="LUXOFLEX Logo"
                />
                <span>LUXOFLEX</span>
              </div>
              <DialogClose className="relative top-0 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-100">
                <div className="relative h-6 w-6">
                  <XIcon
                    size={24}
                    strokeWidth={3}
                    className="transform transition-all duration-300 ease-in-out hover:rotate-90"
                  />
                </div>
              </DialogClose>
            </div>
          </div>
          <DialogDescription className="text-sm text-white/70">
            Última actualización: Enero 2025
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto p-6 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Uso de la Información</h3>
              <p className="text-xs text-white/80 font-mono">
                En Luxoflex, utilizamos su información para brindar un servicio
                personalizado, mejorar nuestros procesos de impresión
                flexográfica y comunicarnos con usted de forma efectiva.
              </p>
            </section>

            <section className="md:col-span-2">
              <h3 className="font-semibold text-lg mb-2">
                Compartir Información
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium">Proveedores de Servicios</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Podemos compartir datos con proveedores que nos ayudan con
                    infraestructura, comunicación y análisis.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Requisitos Legales</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Compartimos datos si es requerido por ley o en procesos
                    legales para proteger los derechos de Luxoflex.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Consentimiento</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Solo compartiremos su información con terceros si usted nos
                    autoriza expresamente.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Sus Derechos</h3>
              <p className="text-xs text-white/80 font-mono">
                Puede acceder, corregir o eliminar su información personal. También
                tiene derecho a oponerse al procesamiento o solicitar la
                portabilidad de sus datos.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Seguridad de Datos</h3>
              <p className="text-xs text-white/80 font-mono">
                Aplicamos medidas de seguridad técnicas y organizativas para
                proteger sus datos personales contra accesos no autorizados o
                usos indebidos.
              </p>
            </section>
          </div>
        </div>

        <DialogFooter className="border-t border-white/10 px-6 py-4 sticky bottom-0 bg-[#1c1c1c] z-10">
          <div className="flex items-center justify-between w-full">
            <p className="text-[10px] flex-1 text-white/70">
              Al utilizar nuestros servicios, usted acepta las prácticas
              de privacidad de Luxoflex descritas en esta política.
            </p>
            <div className="text-[10px] text-white/70 text-right">
              <p>Contacto: luxoflex1ventas@gmail.com</p>
              <p>DPO: luxoflex1ventas@gmail.com</p>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
