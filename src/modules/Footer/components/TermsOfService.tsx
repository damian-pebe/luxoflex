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

export function TermsOfService() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="hover:text-white text-white/80 transition-all duration-700 p-2 rounded-md"
        >
          Términos y Condiciones
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1c1c1c] text-white max-w-md md:max-w-3xl max-h-[80vh] overflow-hidden flex flex-col rounded-md">
        <DialogHeader className="border-b border-white/10 sticky top-0 bg-[#1c1c1c] z-10 px-6 py-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl text-left font-bold">
              Términos y Condiciones de Servicio
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
              <h3 className="font-semibold text-lg">
                Aceptación de los Términos
              </h3>
              <p className="text-xs text-white/80 font-mono">
                Al acceder y utilizar nuestros servicios, usted acepta estar
                vinculado por estos términos y condiciones. Si no está de
                acuerdo con alguna parte de estos términos, no podrá acceder al
                servicio.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Cambios en los Términos</h3>
              <p className="text-xs text-white/80 font-mono">
                Nos reservamos el derecho de modificar estos términos en
                cualquier momento. Los cambios entrarán en vigor inmediatamente
                después de su publicación. El uso continuado de nuestro servicio
                constituirá su aceptación de los cambios.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Cuenta de Usuario</h3>
              <p className="text-xs text-white/80 font-mono">
                Es responsable de mantener la confidencialidad de su cuenta y
                contraseña. Debe notificarnos inmediatamente sobre cualquier uso
                no autorizado de su cuenta.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Propiedad Intelectual</h3>
              <p className="text-xs text-white/80 font-mono">
                Todo el contenido presente en el servicio es propiedad exclusiva
                nuestra y está protegido por leyes de propiedad intelectual. No
                está permitida su reproducción sin autorización expresa.
              </p>
            </section>

            <section className="md:col-span-2">
              <h3 className="font-semibold text-lg mb-2">
                Restricciones de Uso
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium">Uso Prohibido</h4>
                  <p className="text-xs text-white/80 font-mono">
                    No debe utilizar el servicio para fines ilegales o no
                    autorizados.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Contenido del Usuario</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Es responsable de todo el contenido que publique o transmita
                    a través del servicio.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Terminación</h4>
                  <p className="text-xs text-white/80 font-mono">
                    Podemos terminar o suspender su acceso inmediatamente, sin
                    previo aviso, por cualquier razón.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">
                Política de Devoluciones
              </h3>
              <p className="text-xs text-white/80 font-mono">
                Las devoluciones deben solicitarse dentro de los 14 días
                posteriores a la recepción del producto. Los productos deben
                estar en su estado original, sin usar y con todas las etiquetas
                intactas.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Envíos y Entregas</h3>
              <p className="text-xs text-white/80 font-mono">
                El tiempo estimado de entrega es de 3 a 5 días hábiles para
                entregas locales y de 7 a 14 días para entregas internacionales.
                No nos hacemos responsables por retrasos causados por
                circunstancias fuera de nuestro control.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Garantía de Productos</h3>
              <p className="text-xs text-white/80 font-mono">
                Todos nuestros productos tienen una garantía de 30 días por
                defectos de fabricación. Esta garantía no cubre daños causados
                por uso indebido o normal desgaste.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Privacidad de Datos</h3>
              <p className="text-xs text-white/80 font-mono">
                Recopilamos y procesamos información personal de acuerdo con
                nuestra Política de Privacidad. Al utilizar nuestros servicios,
                consiente a la recopilación y uso de esta información.
              </p>
            </section>
          </div>
        </div>

        <DialogFooter className="border-t border-white/10 px-6 py-4 sticky bottom-0 bg-[#1c1c1c] z-10">
          <div className="flex items-center justify-between w-full">
            <p className="text-[10px] flex-1 text-white/70">
              Al utilizar nuestros servicios, acepta nuestras prácticas de
              privacidad descritas en esta política.
            </p>
            <div className="text-[10px] text-white/70">
              <p>Contacto: luxoflex1ventas@gmail.com</p>
              <p>DPO: luxoflex1ventas@gmail.com</p>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
