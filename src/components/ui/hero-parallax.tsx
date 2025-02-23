"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import EffectScroll from "../effectScroll";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  }); 

  const springConfig = { stiffness: 300, damping: 70, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [0.6, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] md:h-[320vh] pt-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-40 px-4 w-full left-0 top-0 group z-10 ">
      <EffectScroll classname="animate-fadeinbouncedown">

      <h1 className="text-4xl md:text-7xl text-white font-playfair font-light italic ">
        Para Hacer que Tu Marca Destaque <br />{" "}
        <div className="font-audiowide text-4xl pt-1 md:text-7xl">
          Confía en Luxoflex
        </div>
      </h1>
      </EffectScroll>
      
      <EffectScroll classname="animate-fadeinbounceup">

      <h1 className="max-w-3xl text-base md:text-3xl mt-8 text-white font-poppins ">
        En Luxoflex, creamos etiquetas autoadheribles personalizadas de alta
        calidad. Únete asi como las marcas que confían en nosotros para
        potenciar su imagen con soluciones duraderas y funcionales.
      </h1>
      </EffectScroll>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 "
    >
      <div className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600" 
          className="object-cover object-left-top absolute h-full w-full inset-0 hover:opacity-60 transition-all duration-1000"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0  bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
