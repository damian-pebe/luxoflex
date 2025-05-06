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

export function CookiesPolicy() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="hover:text-white text-white/80 transition-all duration-700 p-2 rounded-md"
        >
          Política de Cookies
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1c1c1c] text-white max-w-md md:max-w-3xl max-h-[80vh] overflow-hidden flex flex-col rounded-md">
        <DialogHeader className="border-b border-white/10 sticky top-0 bg-[#1c1c1c] z-10 px-6 py-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl text-left font-bold">
              Política de Cookies
            </DialogTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-raleway text-3xl">
                <img
                  src={logo}
                  className="hover:scale-125 transition-all duration-700 w-12 rounded-full hover:opacity-90"
                  alt="LUXOFLEX Logo"
                />
                <span>LUXOFLEX</span>
              </div>
              <DialogClose className="relative top-0 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-100">
                <XIcon
                  size={24}
                  strokeWidth={3}
                  className="transform transition-all duration-300 ease-in-out hover:rotate-90"
                />
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
              <h3 className="font-semibold text-lg">¿Qué son las cookies?</h3>
              <p className="text-xs text-white/80 font-mono">
                Las cookies son pequeños archivos de texto que se almacenan en
                su dispositivo cuando visita el sitio web de Luxoflex. Estas
                herramientas nos permiten mejorar su experiencia y asegurar el
                funcionamiento óptimo de nuestras funciones, como solicitudes
                de cotización, navegación personalizada y análisis de uso.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Sus derechos y opciones</h3>
              <p className="text-xs text-white/80 font-mono">
                Usted puede configurar su navegador para bloquear o eliminar las
                cookies en cualquier momento. No obstante, algunas funciones del
                sitio de Luxoflex podrían verse afectadas si las desactiva.
              </p>
            </section>

            <section className="md:col-span-2">
              <h3 className="font-semibold text-lg mb-2">
                Tipos de cookies que utilizamos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-medium">Cookies Necesarias</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Permiten el funcionamiento esencial del sitio, como
                    formularios de contacto y navegación segura.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Cookies de Rendimiento</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Nos ayudan a entender cómo los usuarios interactúan con el
                    sitio para mejorar nuestros servicios de impresión
                    flexográfica.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Cookies de Funcionalidad</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Recordamos sus preferencias para brindarle una experiencia
                    más personalizada en futuras visitas.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Cookies de Marketing</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Utilizadas para mostrarle promociones relevantes sobre
                    nuestros servicios de etiquetas personalizadas y
                    flexografía.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <DialogFooter className="border-t border-white/10 px-6 py-4 sticky bottom-0 bg-[#1c1c1c] z-10">
          <div className="flex items-center justify-between w-full">
            <p className="text-[10px] flex-1 text-white/70">
              Al continuar navegando en nuestro sitio acepta el uso de cookies
              para mejorar su experiencia con Luxoflex.
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
