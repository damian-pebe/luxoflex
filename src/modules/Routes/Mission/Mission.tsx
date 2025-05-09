"use client";
import { useScrollToTop } from "@/hooks/scrollToTop";
import Hero from "./Components/Hero";
import Reviews from "./Components/Reviews";
import Impulsa from "./Components/Impulsa";
export default function Mission() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-hidden  z-[0]">
      <Hero />
      <Reviews />
      <Impulsa />

      {/* BACKGROUND MOVING ONLY*/}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute h-full w-full">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full dark:bg-neutral-400 bg-neutral-900"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                opacity: Math.random() * 0.3 + 0.2,
                animation: `float ${10 + Math.random() * 20}s linear infinite, 
                           pulse ${
                             3 + Math.random() * 2
                           }s ease-in-out infinite`,
                animationDelay: `${-Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
