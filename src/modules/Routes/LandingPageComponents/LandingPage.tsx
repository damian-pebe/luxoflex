import StartPage from "./LandingPageComponents/StartPage/StartPage";
import { ParallaxLuxoflex } from "./LandingPageComponents/Parallax/Parallax";
// import TypographyExamples from "./LandingPageComponents/typography/typography";
import Contactanos from "./LandingPageComponents/Contactanos/Contactanos";
import { Materials } from "./LandingPageComponents/Contactanos/components/Materials";
import Products from "../Products/Products";

export default function LandingPage() {
  return (
    <div>
      <StartPage />
      <ParallaxLuxoflex />
      <Contactanos />

      <Materials />
      <Products />
      {/* <TypographyExamples /> */}
    </div>
  );
}
