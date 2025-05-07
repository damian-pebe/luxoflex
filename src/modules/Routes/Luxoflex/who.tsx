import {
  ThreeDotsBlack,
  ThreeDotsWhite,
} from "@/components/ReusableIcons/ReusableIcons";
import { background, flexo_img } from "@/const";
import { useScrollToTop } from "@/hooks/scrollToTop";

const WhoWeAre = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col">
      <div className="pb-5 h-full w-full bg-[#FAFAFA] flex flex-col justify-center items-center">
        {/* HERO */}
        <div className="relative h-full w-full bg-[#FAFAFA] mb-5">
          <img
            src={background}
            alt="Equipo de coaching"
            className="w-full h-[80vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
            <div className="p-6 md:p-12 text-white max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
                Nos apasiona ayudarte a crecer <br /> y lograr un{" "}
                <span className="border-b-4 border-yellow-400">cambio.</span>
              </h1>
            </div>
          </div>
        </div>
        <ThreeDotsWhite top={true} />
        {/* ABOUT LUXOFLEX SECTION */}
        <div className="w-full max-w-6xl px-6 py-5 grid md:grid-cols-2 gap-10 items-center text-black bg-white rounded-lg mt-5">
          <div className="w-full flex flex-col items-center md:items-start justify-center font-rajdhani text-2xl font-light text-white/90 hover:font-bold transition-all duration-700 hover:translate-y-[5px]">
            <img
              src={background}
              alt="Etiquetas personalizadas"
              className="object-cover w-full rounded-lg shadow-2xl transform hover:cursor-crosshair hover:-rotate-1 hover:-translate-y-[10px] transition-transform duration-700"
            />
            <div className="text-center text-black w-full">Nuestro equipo</div>
          </div>
          <div className="group">
            <h2 className="text-4xl font-raleway font-semibold mb-4 group-hover:cursor-pointer group-hover:-rotate-1 group-hover:-translate-y-[10px] transition-transform duration-700">
              Somos Luxoflex
            </h2>
            <p className="text-lg font-poppins text-gray-800 leading-relaxed group-hover:cursor-pointer group-hover:rotate-1 group-hover:translate-y-[10px] transition-transform duration-700">
              En Luxoflex, nos dedicamos a transformar ideas en etiquetas que
              marcan la diferencia. Nos especializamos en impresión de alta
              calidad con un enfoque en innovación, precisión y eficiencia. Ya
              sea que necesites etiquetas autoadheribles, mangas envolventes o
              preprensa profesional, estamos aquí para ayudarte a destacar.
              <br />
              <br />
              Trabajamos con marcas que buscan sobresalir y sabemos cómo
              convertir cada detalle en valor visual. Nuestro compromiso es
              claro: entregar resultados que eleven la imagen de tu producto.
            </p>
          </div>
        </div>

        {/* LUXOFLEX SERVICES SECTION */}
        <div className="w-full max-w-6xl px-6 py-16 text-black text-center">
          <div className="font-poppins font-normal italic text-3xl md:text-5xl text-center mb-4">
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="flex gap-2 items-center">
                CREAMOS ETIQUETAS{" "}
                <span className="font-extralight font-flamenco">para</span>
              </div>
              <div className="flex gap-2 items-center">
                EMPRESAS <span className="font-black">SOBRESALIENTES</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-10">
            LUXOFLEX está impulsado por la innovación y la excelencia en
            impresión. Nos enfocamos en precisión, rapidez y calidad para
            ofrecer etiquetas que destacan.
            <br className="hidden md:block" />
            <span className="font-semibold font-rajdhani text-black underline mb-2 block mt-2">
              ¡Haz el cambio!
            </span>
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <img
                src={flexo_img}
                className="flex items-center justify-center h-[200px] w-[150px] rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                Etiquetas autoadheribles de flexografía
              </h3>
              <p className="text-gray-600">
                Impresión de alta calidad para todo tipo de productos.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                Mangas para tequilas y vinos
              </h3>
              <p className="text-gray-600">
                Diseños envolventes que elevan la presentación de tus botellas.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                Armado de preprensa profesional
              </h3>
              <p className="text-gray-600">
                Optimización técnica para resultados impecables en producción.
              </p>
            </div>
          </div>
        </div>
        <ThreeDotsWhite />
      </div>
      <div className="py-5 h-full w-full bg-black text-white flex flex-col justify-center items-center">
        <ThreeDotsBlack top={true} />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Nuestros productos
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Una selección de etiquetas y empaques que han ayudado a destacar
          marcas sobresalientes.
        </p>
        <div className="grid md:grid-cols-3 gap-6 pb-5">
          <img
            src={background}
            alt="Producto 1"
            className="w-full h-64 object-cover rounded-lg shadow -rotate-1"
          />
          <img
            src={background}
            alt="Producto 2"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
          <img
            src={background}
            alt="Producto 3"
            className="w-full h-64 object-cover rounded-lg shadow rotate-1"
          />
        </div>
        <ThreeDotsBlack />
      </div>
    </div>
  );
};

export default WhoWeAre;
