import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { ParallaxLuxoflex } from "./LandingPageComponents/Parallax/Parallax";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";
import { PoweringTeams } from "./LandingPageComponents/PoweringTeams/PoweringTeams";
import Preprensa from "./LandingPageComponents/Preprensa/Preprensa";
import { Materials } from "../PastWorks/Materials";
import Products from "../PastWorks/Products/Products";
import Services from "./Services/Services";
export default function LandingPage() {
 
  return (
    <div className="bg-[#09090B] overflow-hidden">
      <StartPage />
      <Services/>
      <ParallaxLuxoflex />
      <PoweringTeams />
      <Contactanos />
      <Preprensa />
      <Materials />
      <Products />
    </div>
  );
}