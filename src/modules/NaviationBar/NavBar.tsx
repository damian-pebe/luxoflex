import "./navbar.css";
// import ButtonHoverTitle from "@/components/buttons_style/button_hover_title/button_hover_title";
import { Sidebar } from "./options/sidebar";
import Categories from "./options/categories";
import Title from "@/components/buttons_style/button_hover_title/button_hover_title_white";

function NavBar() {
  return (
    <>
      <nav className="z-100 group-hover:animate-bounce flex items-center gap-x-4 md:px-6 justify-between w-full navigation-bar pt-3">
        {/* <ButtonHoverTitle /> */}
        <Title/>
        <Categories />
        <div className="md:hidden block z-30">
          <Sidebar />
        </div>
      </nav>
    </>
  );
}

export default NavBar;


