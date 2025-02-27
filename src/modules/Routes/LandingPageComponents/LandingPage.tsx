import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { ParallaxLuxoflex } from "./LandingPageComponents/Parallax/Parallax";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";
import { PoweringTeams } from "./LandingPageComponents/PoweringTeams/PoweringTeams";
import { Design } from "./LandingPageComponents/Design/Design";
import Preprensa from "./LandingPageComponents/Preprensa/Preprensa";
import WhatDoWeDo from "./WhatDoWeDo/WhatDoWeDo";

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      {/* <ModeToggle/> */}
      <StartPage />
      <ParallaxLuxoflex />
      <Design/>
      <Preprensa/>
      <WhatDoWeDo/>
      <PoweringTeams/>
      <Contactanos />
    </div>
  );
}
