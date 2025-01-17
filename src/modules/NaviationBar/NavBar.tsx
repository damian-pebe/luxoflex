import { useNavigate } from "react-router-dom";
import "./navbar.css";
import ButtonLink1 from "@/components/buttons_style/button_link_style1/button_link1";
import ButtonHoverTitle from "@/components/buttons_style/button_hover_title/button_hover_title";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="group-hover:animate-bounce flex items-center gap-x-4 md:px-6 justify-between w-full navigation-bar ">
        <ButtonHoverTitle/>
        <div className="py-5 grid grid-cols-4 gap-5 items-center">
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
      </nav>
    </>
  );
}

export default NavBar;
