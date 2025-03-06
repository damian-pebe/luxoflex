import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import EffectScroll from "@/components/effectScroll";
import {
  luxoImage1,
  luxoImage2,
  luxoImage3,
  luxoImage4,
  luxoImage5,
  luxoImage6,
} from "@/const";

export default function WhatDoWeDo() {
  const Body = ({ imgUrl }: { imgUrl?: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white">
      <img
        src={imgUrl}
        className="object-cover opacity-60 rounded-lg w-full max-h-64"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white"></div>
    </div>
  );

  const items = [
    {
      title: "Únete a la Excelencia",
      description:
        "Descubre productos de alta calidad respaldados por expertos apasionados. Tu satisfacción es nuestra prioridad.",
      header: <Body imgUrl={luxoImage1} />,
      className: "md:col-span-2 hover:scale-[1.02] transition-all duration-300",
      icon: <IconClipboardCopy className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "Servicio Personalizado",
      description:
        "Nuestro equipo dedicado te guiará en cada paso, asegurando que encuentres exactamente lo que necesitas.",
      header: <Body imgUrl={luxoImage2} />,
      className: "md:col-span-1 hover:scale-[1.02] transition-all duration-300",
      icon: <IconFileBroken className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Garantía de Calidad",
      description:
        "Respaldamos cada producto con nuestra garantía de satisfacción. Tu confianza es nuestro mayor valor.",
      header: <Body imgUrl={luxoImage3} />,
      className: "md:col-span-1 hover:scale-[1.02] transition-all duration-300",
      icon: <IconSignature className="h-6 w-6 text-green-400" />,
    },
    {
      title: "Experiencia Premium",
      description:
        "Disfruta de una experiencia de compra excepcional con atención personalizada y productos de primera clase.",
      header: <Body imgUrl={luxoImage4} />,
      className: "md:col-span-2 hover:scale-[1.02] transition-all duration-300",
      icon: <IconTableColumn className="h-6 w-6 text-amber-400" />,
    },
    {
      title: "Innovación Constante",
      description:
        "Siempre a la vanguardia con las últimas tendencias y tecnologías para ofrecerte lo mejor del mercado.",
      header: <Body imgUrl={luxoImage5} />,
      className: "md:col-span-2 hover:scale-[1.02] transition-all duration-300",
      icon: <IconClipboardCopy className="h-6 w-6 text-red-400" />,
    },
    {
      title: "Soporte Dedicado",
      description:
        "Estamos aquí para ayudarte antes, durante y después de tu compra. Tu satisfacción es nuestra misión.",
      header: <Body imgUrl={luxoImage6} />,
      className: "md:col-span-1 hover:scale-[1.02] transition-all duration-300",
      icon: <IconFileBroken className="h-6 w-6 text-indigo-400" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16 space-y-4">
        <EffectScroll classname="animate-fadein duration-1000">
          <h2 className="font-dancing text-7xl tracking-wide font-bold text-neutral-100 animate-fade-in">
            Nuestra Misión y Visión en Luxoflex
          </h2>
        </EffectScroll>
        <EffectScroll>
          <p className="font-wire text-3xl tracking-widest text-neutral-400 dark:text-neutral-300 max-w-3xl mx-auto">
            Innovación y excelencia en cada proyecto, construyendo el futuro
            juntos.
          </p>
        </EffectScroll>
      </div>
      <EffectScroll classname="animate-fadein duration-1000">
        <BentoGrid className="gap-4">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </EffectScroll>
    </div>
  );
}
