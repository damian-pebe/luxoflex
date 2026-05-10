import ButtonLink1 from "@/components/style1/button_link/button_link";
import { Link } from "react-router-dom";

export default function Categories() {
  
    return (
      <div className="gap-5 text-white py-5 md:flex flex-row items-center hidden ">
            <Link
              to="/nosotros"
              className="animate-slideinleft"
            >
              <ButtonLink1 str="¿Quiénes somos?" />
            </Link>
            <Link
              to="/contacto"
              className="animate-slideinleft2"
            >
              <ButtonLink1 str="Contáctanos" />
            </Link>
            <Link
              to="/mision"
              className="animate-slideinright2"
            >
              <ButtonLink1 str="Misión" />
            </Link>
            <Link
              to="/vision"
              className="animate-slideinright"
            >
              <ButtonLink1 str="Visión" />
            </Link>
          </div>
    )
  }
