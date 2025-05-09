import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function Cards() {
  const features = [
    {
      title: "Nuestra Visión",
      description:
        "Ser líderes en la industria de etiquetas autoadheribles, ofreciendo soluciones innovadoras y personalizadas que superen las expectativas de nuestros clientes.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Quiénes Somos",
      description:
        "Somos una empresa especializada en la fabricación de etiquetas autoadheribles de alta calidad, con años de experiencia sirviendo a diversas industrias.",
      icon: <IconHeart />,
    },
    {
      title: "Nuestros Servicios",
      description:
        "Ofrecemos una amplia gama de etiquetas autoadheribles: promocionales, industriales, de seguridad, para códigos de barras y más, con impresión personalizada.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Calidad Garantizada",
      description: "Utilizamos materiales premium y tecnología de vanguardia para garantizar etiquetas duraderas y de excelente acabado.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Innovación",
      description: "Constantemente actualizamos nuestros procesos y materiales para ofrecer soluciones modernas que satisfagan las necesidades del mercado.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Contáctanos",
      description:
        "Permítenos asesorarte para encontrar la mejor solución en etiquetas para tu negocio. ¡Solicita una cotización hoy!",
      icon: <IconHelp />,
    },
    {
      title: "Sustentabilidad",
      description:
        "Comprometidos con el medio ambiente, ofrecemos opciones de etiquetas eco-amigables y procesos de producción sustentables.",
      icon: <IconCloud />,
    },
    {
      title: "Alianzas",
      description: "Desarrollamos relaciones comerciales duraderas, siendo el socio confiable que tu empresa necesita en etiquetas autoadheribles.",
      icon: <IconCurrencyDollar />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
   <div
  className={cn(
    "group flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 transition-all duration-1000 hover:cursor-crosshair",
    (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
    index < 4 && "lg:border-b dark:border-neutral-800"
  )}
>
  <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 opacity-0 group-hover/feature:opacity-100 transition duration-200 z-[-2]" />

  <div className="text-lg font-bold mb-2 relative z-[-1] px-10 font-heading">
    <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />

    <span className="font-poppins inline-block text-neutral-800 dark:text-neutral-100 tracking-tight transition-all duration-700 ease-in-out transform group-hover/feature:translate-x-2 group-hover/feature:uppercase group-hover/feature:tracking-widest">
      {title}
    </span>
  </div>

  <p className="font-rajdhani font-light group-hover/feature:font-semibold text-sm group-hover:text-base text-neutral-300 max-w-xs relative z-[-1] px-10 leading-relaxed transition-all duration-700 ease-in-out">
    {description}
  </p>
</div>


  );
};
