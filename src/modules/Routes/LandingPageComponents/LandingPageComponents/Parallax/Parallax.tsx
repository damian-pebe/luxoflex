"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export function ParallaxLuxoflex() {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://picsum.photos/600/400?random=1",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://picsum.photos/600/400?random=2",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://picsum.photos/600/400?random=3",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://picsum.photos/600/400?random=4",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://picsum.photos/600/400?random=5",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://picsum.photos/600/400?random=6",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://picsum.photos/600/400?random=7",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://picsum.photos/600/400?random=8",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://picsum.photos/600/400?random=9",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://picsum.photos/600/400?random=10",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://picsum.photos/600/400?random=11",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://picsum.photos/600/400?random=12",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://picsum.photos/600/400?random=13",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://picsum.photos/600/400?random=14",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://picsum.photos/600/400?random=15",
    },
  ];
  return (
    <div className=" w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <HeroParallax products={products} />
    </div>
  );
}
