import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { ParallaxLuxoflex } from "./LandingPageComponents/Parallax/Parallax";
import TypographyExamples from "./LandingPageComponents/typography/typography";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";
import FocusCards from "./LandingPageComponents/Contactanos/components/focusCards";

export default function LandingPage() {
 
  return (
    <div>
      <StartPage/>
      <ParallaxLuxoflex/>
      <Contactanos/>
      <FocusCards/>
     <TypographyExamples/>
    </div>
  );
}
