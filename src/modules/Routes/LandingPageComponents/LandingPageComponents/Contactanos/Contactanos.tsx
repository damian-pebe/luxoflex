"use client";
import Divider from "@/components/divider";
import "./Contactanos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FocusCardsDemo from "./components/focusCards";
import ContactTitles from "./components/contactTitles";
import FormContact from "./components/FormContact";
import { PinContainer } from "@/components/ui/3d-pin";
// import background from "@/assets/background.jpg";

export default function Contactanos() {
  return (
    // <div className="text-3xl bg-background">
    <div className=" bg-gradient-to-b from-black via-gray-950 to-black p-6 rounded-lg shadow-lg">
      <Divider />
      <ContactTitles />
      <h2 className="pt-10 justify-center flex items-center scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight first:mt-0">
        ¿Buscas etiquetas autoadheribles para tus productos? ¡Déjanos tus datos
        y te contactaremos de inmediato! Tambien puedes contactarnos por medio
        de nuestras redes sociales!!
      </h2>
      <div className="group justify-evenly flex gap-20 ">
        <FormContact />
        <div className="group-hover:flex-1 transition-all duration-1000">
          <h3 className="pt-2 justify-center flex items-center scroll-m-20 text-4xl font-extralight font-zilla">
            Nuestras redes sociales
          </h3>
          <AnimatedPinDemo />
          {/* <Socials /> */}
        </div>
      </div>
      <Divider />
      <FocusCardsDemo />

      <Divider />
    </div>
  );
}

// const Socials = () => {
//   return (
//     <div className="flex gap-4 items-center justify-center p-4">
//       <i className="bi bi-whatsapp text-xl transition-all duration-1000 hover:text-green-700 hover:scale-150"></i>
//     <i className="bi bi-twitter-x text-xl transition-all duration-1000 hover:text-white hover:scale-150"></i>
//     <i className="bi bi-facebook text-xl transition-all duration-1000 hover:text-blue-600 hover:scale-150"></i>
//     <i className="bi bi-messenger text-xl transition-all duration-1000 hover:text-blue-400 hover:scale-150"></i>
//     <i className="bi bi-instagram text-xl transition-all duration-1000 hover:text-green-700 hover:scale-150"></i>
//   </div>
  
//   );
// };



 function AnimatedPinDemo() {
  return (
    <div className=" w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
