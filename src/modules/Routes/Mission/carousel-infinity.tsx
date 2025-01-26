"use client";

import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";


export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-neutral-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "La calidad de las etiquetas es excepcional. Desde que cambiamos a este proveedor, nuestros productos tienen una presentación más profesional y la durabilidad de las etiquetas es notable, incluso en condiciones difíciles.",
    name: "Carlos Ramírez",
    title: "Director de Producción",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
    description: "Industria Alimenticia"
  },
  {
    quote:
      "El servicio personalizado y la rapidez en la entrega han sido fundamentales para nuestra operación. Las etiquetas resistentes al agua que desarrollaron específicamente para nuestra línea de productos han superado todas nuestras expectativas.",
    name: "Ana María González",
    title: "Gerente de Operaciones",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3",
    description: "Sector Cosmético"
  },
  {
    quote: "La flexibilidad en los diseños y la precisión en la impresión nos han permitido destacar en el mercado. Su equipo técnico siempre está dispuesto a innovar y encontrar soluciones a nuestras necesidades específicas.",
    name: "Roberto Méndez",
    title: "Gerente de Marca",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    description: "Industria Vinícola"
  },
  {
    quote:
      "La implementación de códigos QR en nuestras etiquetas ha revolucionado nuestra trazabilidad. Su capacidad de combinar funcionalidad con diseño atractivo ha sido clave para modernizar nuestra imagen.",
    name: "Laura Sánchez",
    title: "Directora de Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    description: "Sector Farmacéutico"
  },
  {
    quote:
      "Después de años buscando un proveedor confiable, finalmente encontramos uno que entiende nuestras necesidades. La consistencia en la calidad y los colores de las etiquetas es impresionante, lote tras lote.",
    name: "Miguel Ángel Torres",
    title: "Gerente General",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    description: "Industria de Bebidas"
  },
];
