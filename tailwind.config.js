import tailwindcssAnimate from "tailwindcss-animate";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    translate: {
      101: "101%",
    },
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        safira: ['"Safira March"', "serif"],
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
        bebass: ["Bebas Neue", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
        pressStart: ["Press Start 2P", "cursive"],
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        russo: ["Russo One", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        vt323: ["VT323", "monospace"],
        bungee: ["Bungee", "sans-serif"],
        unica: ["Unica One", "sans-serif"],
        sigmar: ["Sigmar One", "sans-serif"],
        wire: ["Wire One", "sans-serif"],
        glacial: ["Glacial Indifference", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        alfa: ["Alfa Slab One", "serif"],
        monoton: ["Monoton", "cursive"],
        flamenco: ["Flamenco", "serif"],
        neon: ["Neon", "sans-serif"],
        zilla: ["Zilla Slab Highlight", "serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        glitch: {
                    "0%": { "clip-path": "inset(20% 0 50% 0)" },
                    "5%": { "clip-path": "inset(10% 0 60% 0)" },
                    "10%": { "clip-path": "inset(15% 0 55% 0)" },
                    "15%": { "clip-path": "inset(25% 0 35% 0)" },
                    "20%": { "clip-path": "inset(30% 0 40% 0)" },
                    "25%": { "clip-path": "inset(40% 0 20% 0)" },
                    "30%": { "clip-path": "inset(10% 0 60% 0)" },
                    "35%": { "clip-path": "inset(15% 0 55% 0)" },
                    "40%": { "clip-path": "inset(25% 0 35% 0)" },
                    "45%": { "clip-path": "inset(30% 0 40% 0)" },
                    "50%": { "clip-path": "inset(20% 0 50% 0)" },
                    "55%": { "clip-path": "inset(10% 0 60% 0)" },
                    "60%": { "clip-path": "inset(15% 0 55% 0)" },
                    "65%": { "clip-path": "inset(25% 0 35% 0)" },
                    "70%": { "clip-path": "inset(30% 0 40% 0)" },
                    "75%": { "clip-path": "inset(40% 0 20% 0)" },
                    "80%": { "clip-path": "inset(20% 0 50% 0)" },
                    "85%": { "clip-path": "inset(10% 0 60% 0)" },
                    "90%": { "clip-path": "inset(15% 0 55% 0)" },
                    "95%": { "clip-path": "inset(25% 0 35% 0)" },
                    "100%": { "clip-path": "inset(30% 0 40% 0)" },
                  },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },

        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-top-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-top-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bottom-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bottom-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounce-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(20%, 0%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounce-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(-20%, 0%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bouncedown": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0%, -100%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, -20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounceup": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0%, 100%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, 20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out-down": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
        },
        "fade-out-left": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        "fade-out-top-left": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(-100%, -100%, 0)",
          },
        },
        "fade-out-top-right": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d( 100%, -100%, 0)",
          },
        },
        "fade-out-right": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
        },
        "fade-out-up": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
        },
        "slide-in-down": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-left": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-right": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-up": {
          "0%": {
            visibility: "visible",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-out-down": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(0, 100%, 0)",
          },
        },
        "slide-out-left": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        "slide-out-right": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(100%, 0, 0)",
          },
        },
        "slide-out-up": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(0, -100%, 0)",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 100%, 0)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(100%, 0, 0)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, -100%, 0)",
          },
        },
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        "spinner-grow": {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "none",
            opacity: "1",
          },
        },
        "placeholder-wave": {
          "100%": {
            maskPosition: "-200% 0%",
          },
        },
        "show-up-clock": {
          "0%": {
            opacity: "0",
            transform: "scale(0.7)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "drop-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
            animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "drop-out": {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
            animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(0)",
          },
        },
        "fly-in": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "40%": {
            transform: "scale3d(0.9, 0.9, 0.9)",
          },
          "60%": {
            opacity: "1",
            transform: "scale3d(1.03, 1.03, 1.03)",
          },
          "80%": {
            transform: "scale3d(0.97, 0.97, 0.97)",
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)",
          },
        },
        "fly-in-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 1500px, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(0, -20px, 0)",
          },
          "75%": {
            transform: "translate3d(0, 10px, 0)",
          },
          "90%": {
            transform: "translate3d(0, -5px, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fly-in-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -1500px, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(0, 25px, 0)",
          },
          "75%": {
            transform: "translate3d(0, -10px, 0)",
          },
          "90%": {
            transform: "translate3d(0, 5px, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
        "fly-in-left": {
          "0%": {
            opacity: "0",
            transform: "translate3d(1500px, 0, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(-25px, 0, 0)",
          },
          "75%": {
            transform: "translate3d(10px, 0, 0)",
          },
          "90%": {
            transform: "translate3d(-5px, 0, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
        "fly-in-right": {
          "0%": {
            opacity: "0",
            transform: "translate3d(-1500px, 0, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(25px, 0, 0)",
          },
          "75%": {
            transform: "translate3d(-10px, 0, 0)",
          },
          "90%": {
            transform: "translate3d(5px, 0, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
        "fly-out": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "scale3d(0.9, 0.9, 0.9)",
          },
          "50%, 55%": {
            opacity: "1",
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
        },
        "fly-out-up": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "translate3d(0, 10px, 0)",
          },
          "40%, 45%": {
            opacity: "1",
            transform: "translate3d(0, -20px, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, 2000px, 0)",
          },
        },
        "fly-out-down": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "translate3d(0, -10px, 0)",
          },
          "40%, 45%": {
            opacity: "1",
            transform: "translate3d(0, 20px, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, -2000px, 0)",
          },
        },
        "fly-out-left": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            opacity: "1",
            transform: "translate3d(-20px, 0, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(2000px, 0, 0)",
          },
        },
        "fly-out-right": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            opacity: "1",
            transform: "translate3d(20px, 0, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(-2000px, 0, 0)",
          },
        },
        "browse-in": {
          "0%": {
            transform: "scale(0.8) translateZ(0px)",
            zIndex: "-1",
          },
          "10%": {
            transform: "scale(0.8) translateZ(0px)",
            zIndex: "-1",
            opacity: "0.7",
          },
          "80%": {
            transform: "scale(1.05) translateZ(0px)",
            zIndex: "999",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1) translateZ(0px)",
            zIndex: "999",
          },
        },
        "browse-out": {
          "0%": {
            transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
            zIndex: "999",
          },
          "50%": {
            transform:
              "translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
            zIndex: "-1",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            zIndex: "-1",
            opacity: "0",
            transform:
              "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
          },
        },
        "browse-out-left": {
          "0%": {
            transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
            zIndex: "999",
          },
          "50%": {
            transform:
              "translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
            zIndex: "-1",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            zIndex: "-1",
            opacity: "0",
            transform:
              "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
          },
        },
        "browse-out-right": {
          "0%": {
            transform: "translateX(0%) rotateY(0deg) rotateX(0deg)",
            zIndex: "999",
          },
          "50%": {
            transform:
              "translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",
            zIndex: "1",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            zIndex: "1",
            opacity: "0",
            transform:
              "translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)",
          },
        },
        jiggle: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        flash: {
          "0%, 50%, 100%": {
            opacity: "1",
          },
          "25%, 75%": {
            opacity: "0",
          },
        },
        shake: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-10px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(10px)",
          },
        },
        glow: {
          "0%": {
            backgroundColor: "#fcfcfd",
          },
          "30%": {
            backgroundColor: "#fff6cd",
          },
          "100%": {
            backgroundColor: "#fcfcfd",
          },
        },
        wiggle: {
          "5%": {
            transform: "rotate(-5deg)",
          },
          "20%": {
            transform: "rotate(5deg)",
          },
          "40%": {
            transform: "rotate(-5deg)",
          },
          "80%": {
            transform: "rotate(5deg)",
          },
        },
        flip: {
          "0%": {
            transform: "rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg)",
          },
          "100%": {
            transform: "rotateY(0deg)",
          },
        },
        "flip-up": {
          "0%": {
            transform: "translate3d(0, 100%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-down": {
          "0%": {
            transform: "translate3d(0, -100%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-left": {
          "0%": {
            transform: "translate3d(-100%, 0%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-right": {
          "0%": {
            transform: "translate3d(100%, 0%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-top-left": {
          "0%": {
            transform: "translate3d(-100%, -100%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-top-right": {
          "0%": {
            transform: "translate3d(100%, -100%, 0)  rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-bottom-left": {
          "0%": {
            transform: "translate3d(-100%, 100%, 0) rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        "flip-bottom-right": {
          "0%": {
            transform: "translate3d(100%, 100%, 0)  rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateY(0deg)",
          },
        },
        flipy: {
          "0%": {
            transform: "rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },
          "100%": {
            transform: "rotateX(0deg)",
          },
        },
        "flipy-up": {
          "0%": {
            transform: "translate3d(0, 100%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-down": {
          "0%": {
            transform: "translate3d(0, -100%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-left": {
          "0%": {
            transform: "translate3d(-100%, 0%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-right": {
          "0%": {
            transform: "translate3d(100%, 0%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-top-left": {
          "0%": {
            transform: "translate3d(-100%, -100%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-top-right": {
          "0%": {
            transform: "translate3d(100%, -100%, 0)  rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-bottom-left": {
          "0%": {
            transform: "translate3d(-100%, 100%, 0) rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "flipy-bottom-right": {
          "0%": {
            transform: "translate3d(100%, 100%, 0)  rotateX(-180deg)",
          },
          "50%": {
            transform: "rotateX(-90deg) ",
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0deg)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
        "zoom-in-up": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "zoom-in-down": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "zoom-in-right": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "zoom-in-left": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "zoom-in-bottom-right": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "zoom-in-top-right": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "zoom-in-top-left": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, -100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "zoom-in-bottom-left": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 100%, 0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
        },
        "zoom-out": {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
        },
        "zoom-out-down": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
          },
        },
        "zoom-out-up": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)",
          },
        },
        "zoom-out-left": {
          15: {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0%, 0)",
          },
        },
        "zoom-out-right": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0%, 0)",
          },
          "15%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3) translate3d(100%, 0%, 0)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeinbouncedown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        initialHover: {
          "0%, 100%": { transform: "scale(1)" },
          "20%, 30%": { transform: "scale(1.05)", filter: "brightness(1.1)" },
          "45%, 55%": { transform: "scale(1)" },
          "70%, 80%": { transform: "scale(1.05)", filter: "brightness(1.1)" },
        },
      },
      animation: {
        "glitch-after": "glitch var(--after-duration) infinite linear alternate-reverse",
                "glitch-before": "glitch var(--before-duration) infinite linear alternate-reverse",
              
        marquee: "marquee 15s linear infinite",
        gradientShift: "gradientShift 3s infinite ease-in-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        aurora: "aurora 3s aurora forwards",
        fadein: "fade-in 3s ease-in-out forwards",
        fadeout: "fade-out 3s ease-out forwards",
        fadeindown: "fade-in-down 3s ease-in forwards",
        fadeintopleft: "fade-in-top-left 3s ease-out forwards",
        fadeintopright: "fade-in-top-right 3s ease-out forwards",
        fadeinbottomleft: "fade-in-bottom-left 3s ease-out forwards",
        fadeinbottomright: "fade-in-bottom-right 3s ease-out forwards",
        fadeinleft: "fade-in-left 3s ease-in-out forwards",
        fadeinleft1s: "fade-in-left 1s ease-in-out forwards",
        fadeinleft2s: "fade-in-left 2s ease-in-out forwards",
        fadeinbouncedown: "fade-in-bouncedown 3s ease-in-out forwards",
        fadeinbounceup: "fade-in-bounceup 3s ease-in-out forwards",
        fadeinbounceright: "fade-in-bounce-right 3s ease-in-out forwards",
        fadeinbounceleft: "fade-in-bounce-left 3s ease-in-out forwards",
        fadeinright: "fade-in-right 3s ease-in-out forwards",
        fadeinright1s: "fade-in-right 1s ease-in-out forwards",
        fadeinright2s: "fade-in-right 2s ease-in-out forwards",
        fadeinup: "fade-in-up 3s ease-in-out forwards",
        fadeoutdown: "fade-out-down 3s ease-in-out forwards",
        fadeouttopleft: "fade-out-top-left 3s ease-in-out forwards",
        fadeouttopright: "fade-out-top-right 3s ease-in-out forwards",
        fadeoutleft: "fade-out-left 3s ease-in-out forwards",
        fadeoutright: "fade-out-right 3s ease-in-out forwards",
        fadeoutup: "fade-out-up 3s ease-in-out forwards",
        slideindown: "slide-in-down 3s ease-in-out forwards",
        slideinleft: "slide-in-left 3s ease-in-out forwards",
        slideinleft2: "slide-in-left 2s ease-in-out forwards",
        slideinright2: "slide-in-right 2s ease-in-out forwards",
        slideinright: "slide-in-right 3s ease-in-out forwards",
        slideinup: "slide-in-up 3s ease-in-out forwards",
        slideoutdown: "slide-out-down 3s ease-in-out forwards",
        slideoutleft: "slide-out-left 3s ease-in-out forwards",
        slideoutright: "slide-out-right 3s ease-in-out forwards",
        slideoutup: "slide-out-up 3s ease-in-out forwards",
        slidedown: "slide-down 3s ease-in-out forwards",
        slideleft: "slide-left 3s ease-in-out forwards",
        slideright: "slide-right 3s ease-in-out forwards",
        slideup: "slide-up 3s ease-in-out forwards",
        zoomin: "zoom-in 3s ease-in-out forwards",
        zoomout: "zoom-out 3s ease-in-out forwards",
        tada: "tada 3s ease-in-out forwards",
        spinnergrow: "spinner-grow 3s ease-in-out forwards",
        placeholderwave: "placeholder-wave 3s ease-in-out forwards",
        showupclock: "show-up-clock 3s ease-in-out forwards",
        dropin: "drop-in 3s ease-inforwards",
        dropout: "drop-out 3s ease-in-out forwards",
        flyin: "fly-in 3s ease-in-out forwards",
        flyinup: "fly-in-up 3s ease-in-out forwards",
        flyindown: "fly-in-down 3s ease-in-out forwards",
        flyinleft: "fly-in-left 3s ease-in-out forwards",
        flyinright: "fly-in-right 3s ease-in-out forwards",
        flyout: "fly-out 3s ease-in-out forwards",
        flyoutup: "fly-out-up 3s ease-in-out forwards",
        flyoutdown: "fly-out-down 3s ease-in-out forwards",
        flyoutleft: "fly-out-left 3s ease-in-out forwards",
        flyoutright: "fly-out-right 3s ease-in-out forwards",
        browsein: "browse-in 0.4s ease-in-out forwards",
        browseout: "browse-out 0.4s ease-in-out forwards",
        browseoutleft: "browse-out-left 0.4s ease-in-out forwards",
        browseoutright: "browse-out-right 0.4s ease-in-out forwards",
        jiggle: "jiggle 3s ease-in-out forwards",
        flash: "flash 3s ease-in-out forwards",
        shake: "shake 3s ease-in-out forwards",
        glow: "glow 3s ease-in-out forwards",
        zoomIn: "zoom-in 3s ease-out forwards",
        zoomOut: "zoom-out 3s ease-out forwards",
        zoomOutLeft: "zoom-out-left 3s ease-out forwards",
        zoomOutRight: "zoom-out-right 3s ease-out forwards",
        zoomOutUp: "zoom-out-up 3s ease-out forwards",
        zoomOutDown: "zoom-out-down 3s ease-out forwards",
        zoomInUp: "zoom-in-up 3s ease-out forwards",
        zoomInBotoomRight: "zoom-in-bottom-right 3s ease-out forwards",
        zoomInBotoomLeft: "zoom-in-bottom-left 3s ease-out forwards",
        zoomInTopRight: "zoom-in-top-right 3s ease-out forwards",
        zoomInTopLeft: "zoom-in-top-left 3s ease-out forwards",
        zoomInDown: "zoom-in-down 3s ease-out forwards",
        zoomInRight: "zoom-in-right 3s ease-out forwards",
        zoomInLeft: "zoom-in-left 3s ease-out forwards",
        flipx: "flipx 3s forwards",
        flipxRight: "flipx-right 3s ease forwards",
        flipxLeft: "flipx-left 3s ease forwards",
        flipxTopLeft: "flipx-top-left 3s ease forwards",
        flipxTopRight: "flipx-top-right 3s ease forwards",
        flipxBottomLeft: "flipx-bottom-left 3s ease forwards",
        flipxBottomRight: "flipx-bottom-right 3s ease forwards",
        flipxUp: "flipx-up 3s ease forwards",
        flipxDown: "flipx-down 3s ease forwards",
        flipRight: "flip-right 3s ease forwards",
        flipLeft: "flip-left 3s ease forwards",
        flipTopLeft: "flip-top-left 3s ease forwards",
        flipTopRight: "flip-top-right 3s ease forwards",
        flipBottomLeft: "flip-bottom-left 3s ease forwards",
        flipBottomRight: "flip-bottom-right 3s ease forwards",
        flipUp: "flip-up 3s ease forwards",
        flipDown: "flip-down 3s ease forwards",
        flip: "flip 3s forwards",
        flip2: "flip 1s forwards",
        wiggle: "wiggle 3s ease forwards",
        accordionDown: "accordion-down 0.2s ease-out",
        accordionUp: "accordion-up 0.2s ease-out",
        fadeUp: "fadeUp 0.5s ease-out forwards",
        "initial-hover": "initialHover 4s ease-in-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate, addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
