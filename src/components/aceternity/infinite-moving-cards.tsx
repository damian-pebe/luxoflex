"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-95 max-w-full relative rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm shrink-0 px-7 py-6 hover:border-zinc-600 transition-colors duration-300 overflow-hidden group"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-6 right-6 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #3B82F6, transparent)" }}
            />

            {/* Quote mark */}
            <div
              className="text-5xl font-serif leading-none mb-3 select-none"
              style={{ color: "#3B82F6", opacity: 0.35 }}
            >
              &ldquo;
            </div>

            <blockquote>
              <p className="font-poppins text-zinc-300 text-sm leading-relaxed mb-6">
                {item.quote}
              </p>

              <div className="flex items-center gap-3">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-zinc-700 shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <span className="font-rajdhani font-bold text-blue-400 text-sm">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-rajdhani font-bold uppercase tracking-wide text-white text-sm">
                    {item.name}
                  </p>
                  <p className="font-poppins text-zinc-500 text-xs">
                    {item.title}
                  </p>
                </div>
              </div>
            </blockquote>

            {/* Bottom hover line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, transparent, #3B82F6, transparent)" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
