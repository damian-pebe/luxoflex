"use client";
import { background,
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
    customer2 } from "@/const";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function ParallaxLuxoflex() {
  const products = [
    {
      title:"title",
      link: "https://gomoonbeam.com",
      thumbnail:
      background,
    },
    {
      title:"title",
      link: "https://cursor.so",
      thumbnail:
      logo,
    },
    {
      title:"title",
      link: "https://userogue.com",
      thumbnail:
      recepcion_disenios,
    },

    {
      title:"title",
      link: "https://editorially.org",
      thumbnail:
      revision_coreccion,
    },
    {
      title:"title",
      link: "https://editrix.ai",
      thumbnail:
      final_preprensa
    },
    {
      title:"title",
      link: "https://app.pixelperfect.quest",
      thumbnail:
      happy_customer
    },

    {
      title:"title",
      link: "https://algochurn.com",
      thumbnail:
      grabados
    },
    {
      title:"title",
      link: "https://ui.aceternity.com",
      thumbnail:
      luxoImage1
    },
    {
      title:"title",
      link: "https://tailwindmasterkit.com",
      thumbnail:
      luxoImage2
    },
    {
      title:"title",
      link: "https://smartbridgetech.com",
      thumbnail:
      luxoImage3
    },
    {
      title:"title",
      link: "https://renderwork.studio",
      thumbnail:
      luxoImage4
    },

    {
      title:"title",
      link: "https://cremedigital.com",
      thumbnail:
      luxoImage5
    },
    {
      title:"title",
      link: "https://goldenbellsacademy.com",
      thumbnail:
      luxoImage6
    },
    {
      title:"title",
      link: "https://invoker.lol",
      thumbnail:
      customer1
    },
    {
      title:"title",
      link: "https://efreeinvoice.com",
      thumbnail:
      customer2
    },
  ];
  return (
    <div className="bg-black w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      <HeroParallax products={products} />
    </div>
  );
}
