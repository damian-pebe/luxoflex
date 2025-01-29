"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";
import ButtonLink1 from "@/components/buttons_style/button_link_style1/button_link1";
import {
  EyeIcon,
  HeartHandshakeIcon,
  HomeIcon,
  PhoneForwarded,
  UsersIcon,
} from "lucide-react";

export function Sidebar() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="pt-5 pr-5 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M2.75 2.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM4 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 8m-4 4.75A.75.75 0 0 1 .75 12h10.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75"
            />
          </svg>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Categorias en Luxoflex</DrawerTitle>
            <DrawerDescription>
              Convertimos sueños e ideas en etiquetas
            </DrawerDescription>
          </DrawerHeader>
          <div className="py-5 md:flex md:flex-col md:items-center md:justify-center space-y-4 z-10">
            <DrawerClose asChild>
              <Link
                to="/"
                className="animate-fadeinbounceup grid grid-cols-2 items-center justify-between"
              >
                <div className="flex justify-start">
                  <ButtonLink1 str="Inicio" />
                </div>

                <div className="flex justify-end">
                  <HomeIcon />
                </div>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Link
                to="/luxoflex"
                className="animate-fadeinbouncedown grid grid-cols-2 items-center justify-between"
              >
                <ButtonLink1 str="Nosotros" />

                <div className="flex justify-end">
                  <UsersIcon />
                </div>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Link
                to="/contactus"
                className="animate-fadeinbounceup grid grid-cols-2 items-center justify-between"
              >
                <ButtonLink1 str="Contactanos" />

                <div className="flex justify-end">
                  <PhoneForwarded />
                </div>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Link
                to="/mission"
                className="animate-fadeinbouncedown grid grid-cols-2 items-center justify-between"
              >
                <ButtonLink1 str="Mision" />

                <div className="flex justify-end">
                  <HeartHandshakeIcon />
                </div>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Link
                to="/vision"
                className="animate-fadeinbounceup grid grid-cols-2 items-center justify-between"
              >
                <ButtonLink1 str="Vision" />

                <div className="flex justify-end">
                  <EyeIcon />
                </div>
              </Link>
            </DrawerClose>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="default">Regresar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
