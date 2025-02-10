import background from "@/assets/background.jpg";
import AnimatedContent from "@/components/animations/animatedContect";

interface CardItem {
  img: string;
  title: string;
  description: string;
}

const cards: CardItem[] = [
  {
    img: background,
    title: "Preprensa",
    description:
      "Nuestro equipo revisa los archivos digitales antes de la impresión para garantizar precisión en colores, diseño y resolución.",
  },
  {
    img: background,
    title: "Diseño Gráfico",
    description:
      "Creamos piezas visuales impactantes como logotipos, folletos y catálogos para fortalecer la identidad de tu marca.",
  },
];

export default function Preprensa() {
  return (
    <div className="flex flex-col items-center py-16 px-6 bg-gradient-to-b from-black via-neutral-500 to-black text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
        Trabajos Profesionales de Preprensa
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((item, index) => (
          <AnimatedContent>

          <div
            key={index}
            className="hover:cursor-pointer relative w-96 h-60 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 transition-opacity hover:bg-opacity-60">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>
          </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}


<AnimatedContent>
  <div>Content to Animate</div>
</AnimatedContent>