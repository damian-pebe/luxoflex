"use client";
import { useScrollToTop } from "@/hooks/scrollToTop";
import Valores from "./Components/Valores";
import Joinus from "./Components/Joinus";
import Hero from "./Components/Hero";
import LookingFor from "./Components/LookingFor";

export default function VisionPage() {
  useScrollToTop();

  return (
    <main className="bg-[#09090B] text-white min-h-screen overflow-hidden">
      <Hero />
      <Valores />
      <LookingFor />
      <Joinus />
    </main>
  );
}
