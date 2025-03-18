import { Sidebar } from "./options/sidebar";
import Categories from "./options/categories";
import { Link } from "react-router-dom";
import { logo } from "@/const";
// import GooeyNav from "@/components/reactbits/GooeyNav";

// // update with your own items
// const items = [
//   { label: "Home", href: "#" },
//   { label: "About", href: "#" },
//   { label: "Contact", href: "#" },
// ];
function NavBar() {
  return (
    <>
      <nav className="overflow-hidden absolute z-50 top-0 left-0 pl-2 group-hover:animate-bounce flex flex-row gap-5  items-center justify-between w-full h-min navigation-bar ">
        <Link to="/" className="animate-slideinright flex pt-5">
          <img src={logo} className="h-10" />
        </Link>
        <Categories />
        <div className="md:hidden flexs z-30">
          <Sidebar />
        </div>
        {/* <div style={{ height: '600px', position: 'relative' }}>
  <GooeyNav
    items={items}
    animationTime={600}
    particleCount={15}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    timeVariance={300}
  />
</div> */}
      </nav>
    </>
  );
}

export default NavBar;
