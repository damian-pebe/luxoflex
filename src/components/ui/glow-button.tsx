import { useId, useState } from "react";

interface GlowButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function GlowButton({ children = "Registrarse", onClick, className }: GlowButtonProps) {
  const raw = useId().replace(/:/g, "");
  const f1 = `unopaq-${raw}`;
  const f2 = `unopaq2-${raw}`;
  const f3 = `unopaq3-${raw}`;
  const [hovered, setHovered] = useState(false);

  const spinStyle: React.CSSProperties = hovered
    ? { animation: "glow-speen 8s cubic-bezier(0.56,0.15,0.28,0.86) infinite, glow-woah 4s infinite" }
    : {};

  return (
    <div
      className={`relative mx-8 inline-block cursor-pointer ${className ?? ""}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>{`
        @keyframes glow-speen {
          0%   { transform: rotate(10deg); }
          50%  { transform: rotate(190deg); }
          100% { transform: rotate(370deg); }
        }
        @keyframes glow-woah {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(0.75); }
        }
      `}</style>

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={f1}>
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={f2}>
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={f3}>
          <feColorMatrix values="1 0 0 0.2 0  0 1 0 0.2 0  0 0 1 0.2 0  0 0 0 2 0" />
        </filter>
      </svg>

      {/* Outer glow */}
      <div
        className="absolute inset-0 -z-20 overflow-hidden rounded-2xl transition-opacity duration-300"
        style={{
          filter: `blur(2em) url(#${f1})`,
          opacity: hovered ? 0.75 : 0.45,
        }}
      >
        <div
          className="absolute inset-[-150%]"
          style={{
            background: "linear-gradient(90deg, #ec4899 30%, #0000 50%, #3b82f6 70%)",
            ...spinStyle,
          }}
        />
      </div>

      {/* Middle glow */}
      <div
        className="absolute -inset-0.5 -z-20 overflow-hidden rounded-2xl transition-opacity duration-300"
        style={{
          filter: `blur(4px) url(#${f2})`,
          opacity: hovered ? 0.75 : 0.45,
        }}
      >
        <div
          className="absolute inset-[-150%]"
          style={{
            background: "linear-gradient(90deg, #f472b6 20%, #0000 45% 55%, #60a5fa 80%)",
            ...spinStyle,
          }}
        />
      </div>

      {/* Border shell */}
      <div className="p-px bg-black/20 rounded-2xl">
        <div className="relative">
          {/* Inner glow */}
          <div
            className="absolute -inset-0.5 -z-10 overflow-hidden rounded-2xl transition-opacity duration-300"
            style={{
              filter: `blur(2px) url(#${f3})`,
              opacity: hovered ? 0.75 : 0.45,
            }}
          >
            <div
              className="absolute inset-[-150%]"
              style={{
                background: "linear-gradient(90deg, #fbcfe8 30%, #0000 45% 55%, #bfdbfe 70%)",
                ...spinStyle,
              }}
            />
          </div>

          {/* Surface */}
          <div className="flex items-center justify-center bg-[#111215] text-white rounded-2xl px-8 py-3.5 font-poppins font-semibold text-sm whitespace-nowrap select-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
