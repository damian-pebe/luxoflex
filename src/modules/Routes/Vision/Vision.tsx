"use client";
import { useScrollToTop } from "@/hooks/scrollToTop";
import Valores from "./Components/Valores";
import Joinus from "./Components/Joinus";
import Hero from "./Components/Hero";
import LookingFor from "./Components/LookingFor";

export default function VisionPage() {
  useScrollToTop();

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Hero />

      <main className="max-w-4xl mx-auto px-4">
        <Valores />
      </main>
      <LookingFor />
      <main className="max-w-4xl mx-auto px-4">
        <Joinus />
      </main>
    </div>
  );
}
