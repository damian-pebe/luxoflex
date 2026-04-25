import { useScrollToTop } from "@/hooks/scrollToTop";
import History from "./Components/history";
import OurProducts from "./Components/OurProducts";
import HeroLuxoflex from "./Components/Hero";

const WhoWeAre = () => {
  useScrollToTop();

  return (
    <div className="bg-[#09090B] overflow-hidden">
      <HeroLuxoflex />
      <OurProducts />
      <History />
    </div>
  );
};

export default WhoWeAre;
