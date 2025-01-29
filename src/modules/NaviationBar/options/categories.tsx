import ButtonLink1 from "@/components/buttons_style/button_link_style1/button_link1";
import { Link } from "react-router-dom";

export default function Categories() {
  
    return (
      <div className="py-5 md:grid grid-cols-4 gap-5 items-center hidden ">
            <Link
              to="/luxoflex"
              className="animate-slideinleft"
            >
              <ButtonLink1 str="¿Quienes somos?" />
            </Link>
            <Link
              to="/contactus"
              className="animate-slideinleft2"
            >
              <ButtonLink1 str="Contactanos" />
            </Link>
            <Link
              to="/mission"
              className="animate-slideinright2"
            >
              <ButtonLink1 str="Mision" />
            </Link>
            <Link
              to="/vision"
              className="animate-slideinright"
            >
              <ButtonLink1 str="Vision" />
            </Link>
          </div>
    )
  }