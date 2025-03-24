"use client";
import {
  background,
  logo,
  recepcion_disenios,
  revision_coreccion,
  final_preprensa,
  happy_customer,
  grabados,
  luxoImage1,
  luxoImage2,
  luxoImage3,
  luxoImage4,
  luxoImage5,
  luxoImage6,
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  flexo_img,
  preprensa_img,
  manga_img,
} from "@/const";
import { ThreeDMarquee } from "@/components/aceternity/3d-marquee";
export function ThreeDMarqueeLuxoflex() {
  const images = [
    background,
    logo,
    recepcion_disenios,
    revision_coreccion,
    final_preprensa,
    happy_customer,
    grabados,
    luxoImage1,
    luxoImage2,
    luxoImage3,
    luxoImage4,
    luxoImage5,
    luxoImage6,
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    flexo_img,
    preprensa_img,
    manga_img,
    background,
    logo,
    recepcion_disenios,
    revision_coreccion,
    final_preprensa,
    happy_customer,
    grabados,
    luxoImage1,
    luxoImage2,
    luxoImage3,
    luxoImage4,
    luxoImage5,
    luxoImage6,
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    flexo_img,
    preprensa_img,
    manga_img,
  ];
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        Para Hacer que Tu Marca Destaque Confía en{" "}
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          LUXOFLEX
        </span>{" "}
      </h2>

      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        En Luxoflex, creamos etiquetas autoadheribles personalizadas de alta
        calidad. Únete asi como las marcas que confían en nosotros para
        potenciar su imagen con soluciones duraderas y funcionales.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Join the club
        </button>
        <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Read more
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
