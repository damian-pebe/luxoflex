"use client";
import { useScrollToTop } from "@/hooks/scrollToTop";
import Hero from "./Components/Hero";
import VisionStatement from "./Components/VisionStatement";
import Valores from "./Components/Valores";
import LookingFor from "./Components/LookingFor";
import Joinus from "./Components/Joinus";

export default function VisionPage() {
  useScrollToTop();

  return (
    <main className="bg-[#09090B] text-white min-h-screen overflow-hidden">
      <Hero />
      <VisionStatement />
      <Valores />
      <LookingFor />
      <Joinus />
    </main>
  );
}
