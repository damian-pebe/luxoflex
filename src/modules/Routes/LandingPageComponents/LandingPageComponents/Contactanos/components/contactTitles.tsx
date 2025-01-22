
export default function ContactTitles() {
    return (
      <div className="  justify-center flex items-center flex-col px-2 md:px-5 gap-10">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl md:text-4xl font-light font-flamenco tracking-tight first:mt-0">
           Contactanos,
          <a
            className="font-extrabold font-zilla "
            href="https://luxoflex.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LUXOFLEX
          </a>
        </h2>
        <h1 className="scroll-m-20 text-4xl font-light text-blue-500  lg:text-5xl  font-zilla">
          ¡Cuéntanos tu idea, nosotros la haremos realidad!
        </h1>
        <blockquote className=" border-l-2 pl-2 md:pl-6  font-raleway font-extralight text-xs md:text-2xl">
          Fabricación e Impresión de Etiquetas Autoadheribles en Rollo Soluciones 
          Profesionales para la Industria en General
        </blockquote>
      </div>
    );
  }
  