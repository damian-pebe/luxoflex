"use client";
import { WavyBackground } from "@/components/aceternity/wavy-background";
export function WavyTitle() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 overflow-hidden">
      <p className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-white to-stone-400 font-playfair">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}
