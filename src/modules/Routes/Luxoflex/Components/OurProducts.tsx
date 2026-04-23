import { background } from "@/const";

export default function OurProducts() {
  return (
<div className="py-5 h-full w-full bg-black text-white flex flex-col justify-center items-center">
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
      </div>  )
}
