"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";

export function PrivacyPolicy() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="link"
          className="text-zinc-400 hover:text-white transition-all p-2 rounded-md"
        >
          Política de Privacidad
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-950">
        <div className="mx-auto w-full max-w-6xl">
          <DrawerHeader className="border-b border-zinc-800 pb-6">
            <DrawerTitle className="text-3xl font-bold text-white">
              Política de Privacidad
            </DrawerTitle>
            <DrawerDescription className="text-sm text-zinc-400 mt-2">
              Última actualización: Enero 2025
            </DrawerDescription>
          </DrawerHeader>
          
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            <section className="space-y-4 bg-zinc-900/50 p-6 rounded-lg">
              <h3 className="font-semibold text-xl text-white">Información que Recopilamos</h3>
              <p className="text-sm leading-relaxed text-zinc-400"></p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Uso de la Información</h3>
              <p className="text-xs text-slate-300 font-mono">
                Utilizamos su información para proporcionar y mejorar nuestros servicios, personalizar su experiencia, comunicarnos con usted y garantizar la seguridad de nuestra plataforma.
              </p>
            </section>

            <section className="col-span-2">
              <h3 className="font-semibold text-lg mb-2">Compartir Información</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium">Proveedores de Servicios</h4>
                  <p className="text-xs text-slate-300 font-mono">Compartimos datos con terceros que nos ayudan a operar y mejorar nuestros servicios.</p>
                </div>
                <div>
                  <h4 className="font-medium">Requisitos Legales</h4>
                  <p className="text-xs text-slate-300 font-mono">Podemos divulgar información para cumplir con obligaciones legales o proteger derechos.</p>
                </div>
                <div>
                  <h4 className="font-medium">Consentimiento</h4>
                  <p className="text-xs text-slate-300 font-mono">Compartiremos su información personal cuando tengamos su consentimiento para hacerlo.</p>
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Sus Derechos</h3>
              <p className="text-xs text-slate-300 font-mono">
                Tiene derecho a acceder, corregir o eliminar su información personal, y a oponerse al procesamiento de sus datos. También puede solicitar la portabilidad de sus datos.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Seguridad de Datos</h3>
              <p className="text-xs text-slate-300 font-mono">
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra acceso, modificación o destrucción no autorizada.
              </p>
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