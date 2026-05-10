import { useScrollToTop } from "@/hooks/scrollToTop";
import Contactanos from "../LandingPageComponents/LandingPageComponents/Contactanos/Contactanos";
import Socials from "../LandingPageComponents/LandingPageComponents/Contactanos/components/Socials";

export default function ContactUs() {
  useScrollToTop();

  return (
    <div className="min-h-screen overflow-hidden bg-[#050506]">
      <Contactanos />
      <Socials />
    </div>
  );
}
