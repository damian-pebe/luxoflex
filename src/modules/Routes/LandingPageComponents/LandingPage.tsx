import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { ParallaxLuxoflex } from "./LandingPageComponents/Parallax/Parallax";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";
import { PoweringTeams } from "./LandingPageComponents/PoweringTeams/PoweringTeams";
import { Design } from "./LandingPageComponents/Design/Design";

export default function LandingPage() {
  return (
    <div>
      <StartPage />
      <ParallaxLuxoflex />
      <Design/>
      <PoweringTeams/>
      <Contactanos />
    </div>
  );
}
