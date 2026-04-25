"use client";
import { logo } from "@/const";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";

const NavVisibleContext = createContext(false);


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <NavVisibleContext.Provider value={visible}>
      <motion.div
        ref={ref}
        className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ visible?: boolean }>,
                { visible },
              )
            : child,
        )}
      </motion.div>
    </NavVisibleContext.Provider>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible
          ? "blur(40px) saturate(200%) brightness(0.9)"
          : "none",
        boxShadow: visible
          ? [
              "inset 0 1px 0 rgba(255, 255, 255, 0.18)",
              "inset 0 -1px 0 rgba(0, 0, 0, 0.15)",
              "0 0 0 1px rgba(255, 255, 255, 0.08)",
              "0 8px 40px rgba(0, 0, 0, 0.5)",
              "0 2px 12px rgba(0, 0, 0, 0.3)",
            ].join(", ")
          : "none",
        width: visible ? "55%" : "100%",
        y: visible ? 16 : 0,
        backgroundColor: visible ? "rgba(12, 12, 12, 0.38)" : "transparent",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 28,
      }}
      style={{
        minWidth: "860px",
        borderRadius: "9999px",
        border: visible
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid transparent",
        WebkitBackdropFilter: visible
          ? "blur(40px) saturate(200%) brightness(0.9)"
          : "none",
      }}
      className={cn(
        "relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-5 py-2.5 lg:flex",
        className,
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-white/80 transition-colors duration-200 hover:text-white cursor-pointer"
          key={`link-${idx}`}
          to={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            />
          )}
          <span className="relative z-20 font-poppins">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible
          ? "blur(40px) saturate(200%) brightness(0.9)"
          : "none",
        boxShadow: visible
          ? [
              "inset 0 1px 0 rgba(255, 255, 255, 0.18)",
              "inset 0 -1px 0 rgba(0, 0, 0, 0.15)",
              "0 0 0 1px rgba(255, 255, 255, 0.08)",
              "0 8px 40px rgba(0, 0, 0, 0.5)",
              "0 2px 12px rgba(0, 0, 0, 0.3)",
            ].join(", ")
          : "none",
        width: visible ? "92%" : "100%",
        paddingRight: visible ? "16px" : "0px",
        paddingLeft: visible ? "16px" : "0px",
        borderRadius: visible ? "20px" : "9999px",
        y: visible ? 16 : 0,
        backgroundColor: visible ? "rgba(12, 12, 12, 0.38)" : "transparent",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        border: visible
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid transparent",
        WebkitBackdropFilter: visible
          ? "blur(40px) saturate(200%) brightness(0.9)"
          : "none",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          style={{
            background: "rgba(12, 12, 12, 0.72)",
            backdropFilter: "blur(40px) saturate(200%)",
            WebkitBackdropFilter: "blur(40px) saturate(200%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)",
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl px-4 py-8",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white cursor-pointer" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white cursor-pointer" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-0.5 text-sm font-normal cursor-pointer"
    >
      <img
        src={logo}
        alt="logo"
        width={40}
        height={40}
      />
      <span className="font-medium font-poppins text-white">LUXOFLEX</span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const floating = useContext(NavVisibleContext);

  const baseStyles =
    "z-[100] px-4 py-2 rounded-full text-sm font-poppins relative cursor-pointer hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 inline-block text-center select-none";

  const variantStyles = {
    primary:
      "bg-white text-black font-medium shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-white/90",
    secondary: floating
      ? "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
      : "bg-transparent text-white border border-white/30 hover:bg-white/8 hover:border-white/50",
    dark: "bg-black/80 text-white border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-black/70",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
