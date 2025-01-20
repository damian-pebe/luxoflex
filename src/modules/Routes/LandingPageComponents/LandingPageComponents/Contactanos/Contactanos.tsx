import Divider from "@/components/divider";
import "./Contactanos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FocusCardsDemo from "./components/focusCards";
import ContactTitles from "./components/contactTitles";
import FormContact from "./components/FormContact";
// import background from "@/assets/background.jpg";

export default function Contactanos() {

  return (
    // <div className="text-3xl bg-background">
      <div className=" bg-gradient-to-b from-black via-gray-950 to-black p-6 rounded-lg shadow-lg">

      <Divider />
      <ContactTitles />
      <h2 className="pt-10 justify-center flex items-center scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight first:mt-0">
        ¿Buscas etiquetas autoadheribles para tus productos?
        ¡Déjanos tus datos y te contactaremos de inmediato!
        Tambien puedes contactarnos por medio de nuestras redes sociales!!
    </h2>
      <div className=" justify-evenly flex gap-20 ">
        <FormContact/>
        <div className="hover:flex-1 transition-all duration-1000">
          
       
          </div>
      </div>
      <Divider />
      <FocusCardsDemo />
      <FocusCardsDemo />
      <FocusCardsDemo />

      <Divider />
    </div>
  );
}





