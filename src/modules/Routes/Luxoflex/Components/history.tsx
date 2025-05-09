import { ThreeDotsWhite } from "@/components/ReusableIcons/ReusableIcons";
import { background } from "@/const";

export default function OurProducts() {
  const history = [
    {
      year: 2018,
      image: background,
      description: "En 2018 comenzamos nuestra aventura con una pequeña tienda local, impulsados por la pasión por la artesanía y el diseño auténtico.",
    },
    {
      year: 2019,
      image: background,
      description: "En 2019 expandimos nuestro catálogo y lanzamos nuestra primera tienda en línea, conectando con clientes de todo el país.",
    },
    {
      year: 2020,
      image: background,
      description: "Durante 2020, enfrentamos los desafíos de la pandemia adaptando nuestros procesos y fortaleciendo nuestra presencia digital.",
    },
    {
      year: 2021,
      image: background,
      description: "En 2021 nos enfocamos en la sostenibilidad, introduciendo materiales ecológicos y prácticas responsables en nuestra producción.",
    },
    {
      year: 2022,
      image: background,
      description: "2022 fue un año de colaboración, lanzamos ediciones especiales junto a artistas y diseñadores locales.",
    },
    {
      year: 2023,
      image: background,
      description: "En 2023 alcanzamos nuevos mercados internacionales, llevando nuestra marca a ferias y exposiciones en Europa y América Latina.",
    },
    {
      year: 2024,
      image: background,
      description: "2024 marcó el lanzamiento de nuestra app móvil, mejorando la experiencia de nuestros clientes y facilitando el acceso a nuestros productos.",
    },
    {
      year: 2025,
      image: background,
      description: "En 2025 celebramos nuestro séptimo aniversario con una nueva línea de productos inspirada en nuestras raíces y visión de futuro.",
    },
  ];

  return (
    <div className="bg-[#e5e5e5] text-neutral-900 py-5 px-6 flex flex-col items-center">
      <ThreeDotsWhite top={true} />
      <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 tracking-tight">
        Nuestra Historia
      </h2>

      {history.map((item, index) => (
        <div
          key={item.year}
          className={`w-full px-20 flex justify-between items-center mt-10 ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          <img
            src={item.image}
            className={`object-cover w-[400px] h-[300px] rounded-sm ${
            index % 2 === 0 ? "-rotate-1" : "rotate-1"
          }`}
          />
          <div className="w-full px-20 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-rajdhani font-semibold mb-4 tracking-tight">
              {item.year}
            </h2>
            <p className="font-poppins">{item.description}</p>
          </div>
        </div>
      ))}

      <div className="mt-16">
        <ThreeDotsWhite />
      </div>
    </div>
  );
}
