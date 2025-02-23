"use client";
import customer1 from "@/assets/customer1.jpg"
import customer2 from "@/assets/customer2.jpg"
import customer3 from "@/assets/customer3.jpg"
import customer4 from "@/assets/customer4.jpg"
import customer5 from "@/assets/customer5.jpg"

import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";


export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-neutral-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "LUXOFLEX superó nuestras expectativas con sus etiquetas premium. La calidad de impresión y los acabados metalizados que ofrecen han elevado significativamente la imagen de nuestra marca en el anaquel.",
    name: "Carlos Ramírez",
    title: "Director de Producción",
    image: customer1,
    description: "Industria de Lujo"
  },
  {
    quote:
      "La tecnología de impresión digital de LUXOFLEX nos permitió crear etiquetas con datos variables y acabados de lujo que nuestros clientes adoran. Su sistema de gestión de color es impecable, manteniendo la consistencia en toda nuestra línea.",
    name: "Ana María González",
    title: "Gerente de Operaciones",
    image: customer2,
    description: "Sector Cosmético Premium"
  },
  {
    quote: 
      "Los acabados holográficos y metalizados de LUXOFLEX han transformado nuestro empaque. La durabilidad es excepcional y el efecto visual que logran con sus técnicas especializadas realmente hace que nuestros productos destaquen.",
    name: "Roberto Méndez",
    title: "Gerente de Marca",
    image: customer3,
    description: "Industria Vinícola Premium"
  },
  {
    quote:
      "La capacidad de LUXOFLEX para combinar efectos táctiles con acabados metalizados nos dio exactamente lo que buscábamos. Su equipo técnico encontró la manera perfecta de materializar nuestra visión con materiales de primera calidad.",
    name: "Laura Sánchez",
    title: "Directora de Marketing",
    image: customer4,
    description: "Sector de Perfumería"
  },
  {
    quote:
      "La línea premium de LUXOFLEX revolucionó nuestra presentación. Sus etiquetas con acabados especiales y efectos visuales únicos nos ayudaron a posicionarnos en el segmento de lujo. La calidad es consistente en cada pedido.",
    name: "Miguel Ángel Torres",
    title: "Gerente General",
    image: customer5,
    description: "Bebidas Premium"
  },
];
