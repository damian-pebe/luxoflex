import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { ParallaxLuxoflex } from "./LandingPageComponents/Parallax/Parallax";
// import TypographyExamples from "./LandingPageComponents/typography/typography";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";


export default function LandingPage() {
  return (
    <div>
      <StartPage />
      <ParallaxLuxoflex />
      <Contactanos />

      
      {/* <TypographyExamples /> */}
    </div>
  );
}
