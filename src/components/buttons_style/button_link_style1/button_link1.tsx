import { ChevronRightIcon } from "lucide-react";
import "./button_link1.css";

interface ButtonProps {
  str: string;
}

const ButtonLink1 = ({ str }: ButtonProps) => {
  return (
    <div className="hover:animate-wiggle">
      <button className="cta">
        <span className="hover-underline-animation pl-5 font-rajdhani">{str}</span>
        <ChevronRightIcon width={20} className="icon" />
      </button>
    </div>
  );
};

export default ButtonLink1;
