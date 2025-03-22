import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  whatsapp: "linear-gradient(45deg, hsl(138, 76%, 45%), hsl(138, 76%, 35%))", // Official WhatsApp green
  facebook: "linear-gradient(45deg, hsl(221, 44%, 61%), hsl(221, 44%, 31%))", // Facebook blue gradient
  instagram:
    "linear-gradient(45deg, hsl(309, 100%, 50%), hsl(359, 80%, 55%), hsl(37, 100%, 50%))", // Instagram pink, orange, and yellow
  twitter: "linear-gradient(hsl(0, 0%, 20%), hsl(0, 0%, 10%))", // Dark gradient for X (Twitter)
  gmail: "linear-gradient(hsl(4, 90%, 58%), hsl(4, 90%, 48%))", // Gmail official red
};


const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div
      className={`gap-x-40 gap-y-20 flex flex-wrap justify-center items-center px-5 overflow-visible isolate ${
        className || ""
      }`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group/item ${
            item.customClass || ""
          }`}
        >
          {/* Back layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover/item:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          {/* Front layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover/item:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span
              className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center"
              aria-hidden="true"
            >
              {item.icon}
            </span>
          </span>

          {/* Label */}
          <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover/item:opacity-100 group-hover/item:[transform:translateY(20%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
