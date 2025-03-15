"use client";
import { WavyBackground } from "@/components/aceternity/wavy-background";
export function WavyTitle() {
  return (
    <WavyBackground className="max-w-4xl pb-40 overflow-x-hidden">
      <p className="text-3xl md:text-6xl lg:text-7xl font-bold inter-var text-center text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-white to-stone-400 font-safira">
        INNOVACIÓN • ELEGANCIA • PRESTIGIO
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal font-rajdhani tracking-widest inter-var text-center">
        DESCUBRE NUESTROS PRODUCTOS
      </p>
    </WavyBackground>
  );
}