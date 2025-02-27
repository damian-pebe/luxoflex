import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { ParallaxLuxoflex } from "./LandingPageComponents/Parallax/Parallax";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";
import { PoweringTeams } from "./LandingPageComponents/PoweringTeams/PoweringTeams";
import { Design } from "./LandingPageComponents/Design/Design";
import Preprensa from "./LandingPageComponents/Preprensa/Preprensa";

export default function LandingPage() {
  return (
    <div className="bg-[#09090B] overflow-hidden">
      {/* <ModeToggle/> */}
      <StartPage />
      <ParallaxLuxoflex />
      <Design/>
      <Preprensa/>
      <PoweringTeams/>
      <Contactanos />
    </div>
  );
}
