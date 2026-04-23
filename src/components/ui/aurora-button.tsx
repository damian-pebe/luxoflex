import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .btn-wrapper {
    --rad: 32px;
    --color-wrapper-border: #fff;
    --color-btn-bg: #f00;
    --color-btn-text: #000;
    --color-btn-text-shadow: #fff;
    --color-btn-inset-shadow: #558;
    --color-layer-a: #fff;
    --color-layer-b: #00f;
    --color-overlay-text: #000;
    --color-overlay-glow: #fff;
    --color-overlay-shadow: #0004;
    --color-overlay-highlight: #fff5;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: clip;
    overflow-clip-margin: 4px;
    border: 1.5px solid var(--color-wrapper-border);
    border-radius: var(--rad);
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    filter: saturate(0.65) brightness(1.8);
    cursor: pointer;
  }

  .gradient-btn {
    position: relative;
    z-index: -1;
    padding: 14px 40px;
    border: none;
    border-radius: var(--rad);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: 0.12rem;
    color: var(--color-btn-text);
    background-color: var(--color-btn-bg);
    box-shadow: inset 0 0 10px 9px var(--color-btn-inset-shadow);
    text-shadow: 0 1px 3px var(--color-btn-text-shadow);
    cursor: pointer;
    mix-blend-mode: color-dodge;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    white-space: nowrap;
  }

  .gradient-layer {
    position: absolute;
    pointer-events: none;
    left: -160px;
    width: 500%;
    aspect-ratio: 1;
    background: radial-gradient(
      ellipse at 65% 180%,
      var(--color-layer-a),
      var(--color-layer-b),
      var(--color-layer-a),
      var(--color-layer-b),
      var(--color-layer-a),
      var(--color-layer-b),
      var(--color-layer-a)
    );
    mix-blend-mode: difference;
    animation: aurora-rotate 8s linear infinite;
  }

  .gradient-layer:last-of-type {
    mix-blend-mode: color-dodge;
  }

  @keyframes aurora-rotate {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .text-overlay {
    position: absolute;
    pointer-events: none;
    z-index: 2;
    padding: 14px 40px;
    border-radius: var(--rad);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: 0.12rem;
    color: var(--color-overlay-text);
    text-shadow: 0 0 8px var(--color-overlay-glow);
    box-shadow:
      inset 0 -4px 4px 0 var(--color-overlay-shadow),
      inset 0 4px 4px 0 var(--color-overlay-highlight);
    mix-blend-mode: multiply;
    transition: transform 0.3s ease;
    animation: aurora-opacity 5s ease infinite;
    white-space: nowrap;
  }

  .btn-wrapper:hover .text-overlay  { transform: scale(1.06); }
  .btn-wrapper:hover .gradient-btn  { color: #0000; text-shadow: 0 0 0 #0000; }
  .btn-wrapper:active .text-overlay { transform: scale(0.95); }
  .btn-wrapper:active .gradient-btn { color: #0000; text-shadow: 0 0 0 #0000; }

  .light {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    border-radius: 50px;
    width: 70%;
    height: 1.6rem;
    background-color: #fff5;
    filter: blur(6px);
    animation: aurora-pulse 3s ease-in-out infinite;
  }

  @keyframes aurora-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.1; }
  }

  @keyframes aurora-opacity {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.6; }
  }
`;

interface AuroraButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function AuroraButton({ children, onClick, className }: AuroraButtonProps) {
  const layers = [
    { delay: "0s",    duration: "25s" },
    { delay: "0.15s", duration: "15.9s" },
    { delay: "0.53s", duration: "26.4s" },
    { delay: "0.45s", duration: "17.8s" },
    { delay: "1.6s",  duration: "19.2s" },
    { delay: "1.6s",  duration: "29.2s" },
    { delay: "1.6s",  duration: "20.2s" },
  ];

  return (
    <StyledWrapper className={className}>
      <div className="btn-wrapper" onClick={onClick}>
        <div className="light" />
        {layers.map((l, i) => (
          <div
            key={i}
            className="gradient-layer"
            style={{ animationDelay: l.delay, animationDuration: l.duration }}
          />
        ))}
        <button className="gradient-btn">{children}</button>
        <div className="text-overlay">{children}</div>
      </div>
    </StyledWrapper>
  );
}
