"use client";
import { useScrollToTop } from "@/hooks/scrollToTop";
import Hero from "./Components/Hero";
import Reviews from "./Components/Reviews";
import Impulsa from "./Components/Impulsa";

export default function Mission() {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-[#09090B] text-white overflow-hidden">
      <Hero />
      <Reviews />
      <Impulsa />
    </main>
  );
}
