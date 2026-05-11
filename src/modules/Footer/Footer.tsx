import { CinematicFooter } from "@/components/ui/motion-footer";
import { CookiesPolicy } from "./components/CookiesPolicy";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";

const Footer = () => {
  return (
    <CinematicFooter
      legalLinks={
        <>
          <PrivacyPolicy />
          <TermsOfService />
          <CookiesPolicy />
        </>
      }
    />
  );
};

export default Footer;
