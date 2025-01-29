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
      <DrawerContent>
        <div className="mx-auto w-full max-w-6xl">
          <DrawerHeader className="border-b">
            <DrawerTitle className="text-xl font-bold">Política de Privacidad</DrawerTitle>
            <DrawerDescription className="text-sm text-gray-500">
              Última actualización: Enero 2025
            </DrawerDescription>
          </DrawerHeader>
          
          <div className="p-4 grid grid-cols-2 gap-6">
            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Información que Recopilamos</h3>
              <p className="text-sm text-gray-600">
                Recopilamos información que usted nos proporciona directamente, incluyendo datos de registro, información de perfil y comunicaciones. También recopilamos datos automáticamente sobre su uso del servicio.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Uso de la Información</h3>
              <p className="text-sm text-gray-600">
                Utilizamos su información para proporcionar y mejorar nuestros servicios, personalizar su experiencia, comunicarnos con usted y garantizar la seguridad de nuestra plataforma.
              </p>
            </section>

            <section className="col-span-2">
              <h3 className="font-semibold text-lg mb-2">Compartir Información</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium">Proveedores de Servicios</h4>
                  <p className="text-sm text-gray-600">Compartimos datos con terceros que nos ayudan a operar y mejorar nuestros servicios.</p>
                </div>
                <div>
                  <h4 className="font-medium">Requisitos Legales</h4>
                  <p className="text-sm text-gray-600">Podemos divulgar información para cumplir con obligaciones legales o proteger derechos.</p>
                </div>
                <div>
                  <h4 className="font-medium">Consentimiento</h4>
                  <p className="text-sm text-gray-600">Compartiremos su información personal cuando tengamos su consentimiento para hacerlo.</p>
                </div>
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Sus Derechos</h3>
              <p className="text-sm text-gray-600">
                Tiene derecho a acceder, corregir o eliminar su información personal, y a oponerse al procesamiento de sus datos. También puede solicitar la portabilidad de sus datos.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Seguridad de Datos</h3>
              <p className="text-sm text-gray-600">
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra acceso, modificación o destrucción no autorizada.
              </p>
            </section>
          </div>

          <DrawerFooter className="border-t">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Al utilizar nuestros servicios, acepta nuestras prácticas de privacidad descritas en esta política.
              </p>
              <div className="text-xs text-gray-500">
                <p>Contacto: privacidad@example.com</p>
                <p>DPO: dpo@example.com</p>
              </div>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}