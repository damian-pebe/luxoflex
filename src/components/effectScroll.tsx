import { useEffect, useState, useRef, ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

interface EffectScrollInterface {
  children: ReactNode;
  classname?: ClassNameValue;
}

export default function EffectScroll({
  children,
  classname,
}: EffectScrollInterface) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else if (entry.intersectionRatio === 0) {
            setIsInView(false);
          }
        });
      },
      { threshold: [0, 0.2] }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all w-full ${
        isInView ? `${classname || "animate-fadein"} opacity-100` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
