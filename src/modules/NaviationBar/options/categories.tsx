import ButtonLink1 from "@/components/buttons_style/button_link_style1/button_link1";
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const navigate = useNavigate();
  
    return (
      <div className="py-5 md:grid grid-cols-4 gap-5 items-center hidden ">
            <div
              onClick={() => navigate("/luxoflex")}
              className="animate-slideinleft"
            >
              <ButtonLink1 str="¿Quienes somos?" />
            </div>
            <div
              onClick={() => navigate("/contact")}
              className="animate-slideinleft2"
            >
              <ButtonLink1 str="Contactanos" />
            </div>
            <div
              onClick={() => navigate("/mission")}
              className="animate-slideinright2"
            >
              <ButtonLink1 str="Mision" />
            </div>
            <div onClick={() => navigate("/vision")} className="animate-slideinright">
              <ButtonLink1 str="Vision" />
            </div>
          </div>
    )
  }