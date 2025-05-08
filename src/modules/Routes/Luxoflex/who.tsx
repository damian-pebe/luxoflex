import { useScrollToTop } from "@/hooks/scrollToTop";
import History from "./Components/history";
import OurProducts from "./Components/OurProducts";
import HeroLuxoflex from "./Components/Hero";

const WhoWeAre = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col">
      <HeroLuxoflex />
      <OurProducts />
      <History />
    </div>
  );
};

export default WhoWeAre;
