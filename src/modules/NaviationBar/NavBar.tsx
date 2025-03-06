import { Sidebar } from "./options/sidebar";
import Categories from "./options/categories";
import Title from "@/components/buttons_style/button_hover_title/button_hover_title_white";

function NavBar() {
  return (
    <>
      <nav className="overflow-hidden absolute z-50 top-0 left-0 px-8 group-hover:animate-bounce flex flex-row gap-5  items-center justify-between w-full h-min navigation-bar ">
        <Title />
        {/* <ModeToggle /> */}
        <Categories />
        <div className="md:hidden block z-30">
          <Sidebar />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
