import { CinematicFooter } from "@/components/ui/motion-footer";
import { CookiesPolicy } from "./components/CookiesPolicy";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "Etiquetas personalizadas", href: "/etiquetas-personalizadas" },
  { label: "Flexografía", href: "/flexografia" },
  { label: "Autoadheribles", href: "/etiquetas-autoadheribles" },
  { label: "Mangas", href: "/mangas-termocontraibles" },
  { label: "Preprensa", href: "/preprensa" },
];

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
      seoLinks={serviceLinks.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="font-poppins text-xs font-medium text-white/36 transition-colors duration-300 hover:text-white/72"
        >
          {item.label}
        </Link>
      ))}
    />
  );
};

export default Footer;
