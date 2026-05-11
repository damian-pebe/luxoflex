"use client";

import { logo } from "@/const";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  EyeIcon,
  HeartHandshakeIcon,
  HomeIcon,
  Menu,
  PhoneForwarded,
  UsersIcon,
  X,
  type LucideIcon,
} from "lucide-react";

type MobileNavItem = {
  label: string;
  eyebrow: string;
  to: string;
  icon: LucideIcon;
};

const mobileNavItems: MobileNavItem[] = [
  { label: "Inicio", eyebrow: "Portada", to: "/", icon: HomeIcon },
  { label: "Nosotros", eyebrow: "Historia", to: "/nosotros", icon: UsersIcon },
  { label: "Contáctanos", eyebrow: "Cotiza", to: "/contacto", icon: PhoneForwarded },
  { label: "Misión", eyebrow: "Proceso", to: "/mision", icon: HeartHandshakeIcon },
  { label: "Visión", eyebrow: "Futuro", to: "/vision", icon: EyeIcon },
  { label: "Galería", eyebrow: "Trabajos", to: "/galeria", icon: BriefcaseBusiness },
];

export function Sidebar() {
  return (
    <Drawer direction="right" shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <button
          type="button"
          aria-label="Abrir menú"
          className="group grid size-10 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl transition duration-300 hover:border-white/24 hover:bg-white/[0.1]"
        >
          <Menu className="h-5 w-5 transition duration-300 group-hover:scale-105" />
        </button>
      </DrawerTrigger>

      <DrawerContent
        showHandle={false}
        className="left-auto right-0 top-0 bottom-auto mt-0 h-[100dvh] w-[min(88vw,390px)] overflow-hidden rounded-l-[28px] rounded-r-none border-y-0 border-l border-r-0 border-white/12 bg-[#030304] p-0 text-white shadow-[-28px_0_90px_rgba(0,0,0,0.72)] outline-none"
      >
        <div className="relative flex h-full min-h-0 flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_10%,rgba(250,204,21,0.2),transparent_28%),radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.055),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-yellow-300/35 to-transparent" />
          <div className="relative z-10 flex items-center justify-between px-4 pb-3 pt-[max(0.9rem,env(safe-area-inset-top))]">
            <div className="flex min-w-0 items-center">
              <img
                src={logo}
                alt="Luxoflex"
                className="h-10 w-24 shrink-0 object-contain object-left"
              />
            </div>

            <DrawerClose asChild>
              <button
                type="button"
                aria-label="Cerrar menú"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.055] text-white/72 transition duration-300 hover:bg-white/[0.1] hover:text-white"
              >
                <X className="size-[18px]" />
              </button>
            </DrawerClose>
          </div>

          <div className="relative z-10 px-4 pb-3 pt-1">
            <DrawerTitle className="font-poppins text-[1.42rem] font-black leading-none tracking-normal text-white">
              Navega Luxoflex
            </DrawerTitle>
            <DrawerDescription className="mt-2 max-w-[14rem] text-xs leading-4 text-white/52">
              Flexografía y etiquetas premium.
            </DrawerDescription>
          </div>

          <nav className="relative z-10 min-h-0 flex-1 overflow-y-auto px-3.5 pb-3">
            <div className="space-y-1.5">
              {mobileNavItems.map((item) => {
                const Icon = item.icon;

                return (
                  <DrawerClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="group relative flex min-h-[3.55rem] items-center justify-between overflow-hidden rounded-[1.15rem] border border-white/[0.08] bg-white/[0.045] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition duration-300 active:scale-[0.99] active:bg-white/[0.08]"
                    >
                      <span className="pointer-events-none absolute inset-y-2 left-0 w-1 rounded-r-full bg-yellow-300/0 transition duration-300 group-active:bg-yellow-300/70" />
                      <span className="min-w-0">
                        <span className="block font-poppins text-[0.94rem] font-bold leading-tight text-white">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block font-rajdhani text-[9px] font-bold uppercase tracking-[0.2em] text-white/38">
                          {item.eyebrow}
                        </span>
                      </span>
                      <span className="ml-3 grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-black/24 text-white/72 transition duration-300 group-active:border-yellow-300/40 group-active:text-yellow-200">
                        <Icon className="size-[18px]" />
                      </span>
                    </Link>
                  </DrawerClose>
                );
              })}
            </div>
          </nav>

          <div className="relative z-10 mt-auto pt-2">
            <div className="px-4 pb-3">
              <DrawerClose asChild>
                <Link
                  to="/contacto"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-yellow-200/25 bg-yellow-300 text-sm font-black text-black shadow-[0_14px_44px_rgba(250,204,21,0.16)] transition duration-300 active:scale-[0.99]"
                >
                  Cotizar ahora
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </DrawerClose>
            </div>

            <div className="relative h-[5.8rem] w-full overflow-hidden pb-[env(safe-area-inset-bottom)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:3.4rem_3.4rem] opacity-70" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-[#030304]/15 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/78 via-black/38 to-transparent" />
              <div
                className="pointer-events-none absolute -bottom-[0.04em] left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap text-center font-poppins text-[clamp(3.55rem,18vw,4.5rem)] font-black leading-[0.75] tracking-normal opacity-95"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.11) 46%, transparent 80%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                LUXOFLEX
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
