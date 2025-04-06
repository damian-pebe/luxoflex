"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";

export function TermsOfService() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="link"
          className="text-zinc-400 hover:text-white transition-all p-2 rounded-md"
        >
          Términos y Condiciones
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-6xl">
          <DrawerHeader className="border-b">
            <DrawerTitle className="text-xl font-bold">Términos y Condiciones de Servicio</DrawerTitle>
            <DrawerDescription className="text-sm text-gray-500">
              Última actualización: Enero 2025
            </DrawerDescription>
          </DrawerHeader>
          
          <div className="p-4 grid grid-cols-2 gap-6">
            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Aceptación de los Términos</h3>
              <p className="text-xs text-slate-300 font-mono">
                Al acceder y utilizar nuestros servicios, usted acepta estar vinculado por estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Cambios en los Términos</h3>
              <p className="text-xs text-slate-300 font-mono">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación. El uso continuado de nuestro servicio constituirá su aceptación de los cambios.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Cuenta de Usuario</h3>
              <p className="text-xs text-slate-300 font-mono">
                Es responsable de mantener la confidencialidad de su cuenta y contraseña. Debe notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Propiedad Intelectual</h3>
              <p className="text-xs text-slate-300 font-mono">
                Todo el contenido presente en el servicio es propiedad exclusiva nuestra y está protegido por leyes de propiedad intelectual. No está permitida su reproducción sin autorización expresa.
              </p>
            </section>

            <section className="col-span-2">
              <h3 className="font-semibold text-lg mb-2">Restricciones de Uso</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium">Uso Prohibido</h4>
                  <p className="text-xs text-slate-300 font-mono">No debe utilizar el servicio para fines ilegales o no autorizados.</p>
                </div>
                <div>
                  <h4 className="font-medium">Contenido del Usuario</h4>
                  <p className="text-xs text-slate-300 font-mono">Es responsable de todo el contenido que publique o transmita a través del servicio.</p>
                </div>
                <div>
                  <h4 className="font-medium">Terminación</h4>
                  <p className="text-xs text-slate-300 font-mono">Podemos terminar o suspender su acceso inmediatamente, sin previo aviso, por cualquier razón.</p>
                </div>
              </div>
            </section>
          </div>

          <DrawerFooter className="border-t">
          <div className="flex items-center justify-between">
              <p className="text-xs flex-1 text-gray-400">
                Al utilizar nuestros servicios, acepta nuestras prácticas de privacidad descritas en esta política.
              </p>
              <div className="text-xs text-gray-400">
                <p>Contacto: luxoflex1ventas@gmail.com</p>
                <p>DPO: luxoflex1ventas@gmail.com</p>
              </div>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}