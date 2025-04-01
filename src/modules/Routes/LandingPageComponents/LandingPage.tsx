import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { PoweringTeams } from "./LandingPageComponents/PoweringTeams/PoweringTeams";
import Preprensa from "./LandingPageComponents/Preprensa/Preprensa";
import { Materials } from "../PastWorks/Materials";
import Products from "../PastWorks/Products/Products";
import Services from "./Services/Services";
// import { ThreeDMarqueeLuxoflex } from "./LandingPageComponents/ThreeDMarquee/ThreeDMarquee";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";
import CarouselComponent from "./LandingPageComponents/Carousel/Carousel";
export default function LandingPage() {
 
  return (
    <div className="bg-[#09090B] overflow-hidden">
      <StartPage />
      <Services/>
      {/* <ThreeDMarqueeLuxoflex /> */}
      <PoweringTeams />
      <Contactanos />
      <Preprensa />
      <CarouselComponent/>
      <Materials />
      <Products />
    </div>
  );
}