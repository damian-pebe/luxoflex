import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { PoweringTeams } from "./LandingPageComponents/PoweringTeams/PoweringTeams";
import Preprensa from "./LandingPageComponents/Preprensa/Preprensa";
// import { Materials } from "../PastWorks/Materials";
// import Products from "../PastWorks/Products/Products";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";
import CarouselComponent from "./LandingPageComponents/Carousel/Carousel";
import Services from "./LandingPageComponents/Services/Services";
import Banner from "./LandingPageComponents/Banner/Banner";
import { useScrollToTop } from "@/hooks/scrollToTop";
export default function LandingPage() {
  useScrollToTop();
  return (
    <div className="bg-[#09090B] overflow-hidden">
      <StartPage />
      <Services />
      <PoweringTeams />
      <Contactanos />
      <Preprensa />
      <CarouselComponent />
      <Banner />
      {/* <Materials />
      <Products /> */}
    </div>
  );
}
