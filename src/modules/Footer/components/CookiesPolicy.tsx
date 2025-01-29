"use client";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";

export function CookiesPolicy() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="link"
          className="text-zinc-400 hover:text-white transition-all p-2 rounded-md"
        >
          Política de Cookies
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-6xl">
          <DrawerHeader className="border-b">
            <DrawerTitle className="text-xl font-bold">Política de Cookies</DrawerTitle>
            <DrawerDescription className="text-sm text-gray-500">
              Última actualización: Enero 2025
            </DrawerDescription>
          </DrawerHeader>
          
          <div className="p-4 grid grid-cols-2 gap-6">
            <section className="space-y-2">
              <h3 className="font-semibold text-lg">¿Qué son las cookies?</h3>
              <p className="text-sm text-gray-600">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Estas nos ayudan a proporcionar funcionalidades esenciales y mejorar su experiencia de navegación.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-lg">Sus derechos y opciones</h3>
              <p className="text-sm text-gray-600">
                Puede modificar la configuración de su navegador para bloquear o eliminar cookies. Tenga en cuenta que algunas partes de nuestro sitio web pueden no funcionar correctamente si deshabilita las cookies.
              </p>
            </section>

            <section className="col-span-2">
              <h3 className="font-semibold text-lg mb-2">Tipos de cookies que utilizamos</h3>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h4 className="font-medium">Cookies Necesarias</h4>
                  <p className="text-sm text-gray-600">Son esenciales para el funcionamiento básico del sitio web.</p>
                </div>
                <div>
                  <h4 className="font-medium">Cookies de Rendimiento</h4>
                  <p className="text-sm text-gray-600">Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio.</p>
                </div>
                <div>
                  <h4 className="font-medium">Cookies de Funcionalidad</h4>
                  <p className="text-sm text-gray-600">Permiten recordar sus preferencias y personalizar su experiencia.</p>
                </div>
                <div>
                  <h4 className="font-medium">Cookies de Marketing</h4>
                  <p className="text-sm text-gray-600">Se utilizan para mostrar publicidad relevante y medir campañas.</p>
                </div>
              </div>
            </section>
          </div>

          <DrawerFooter className="border-t">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Al continuar navegando en nuestro sitio, acepta el uso de cookies de acuerdo con esta política.
              </p>
              <p className="text-xs text-gray-500">
                Contacto: luxoflex@gmail.com
              </p>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}