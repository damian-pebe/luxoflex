import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
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
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        aurora: "aurora 3s aurora 0.25s 1",
        fadein: "fade-in 3s ease-in-out 0.25s 1",
        fadeout: "fade-out 3s ease-out 0.25s 1",
        fadeindown: "fade-in-down 3s ease-in 0.25s 1",
        fadeintopleft: "fade-in-top-left 3s ease-out 0.25s 1",
        fadeintopright: "fade-in-top-right 3s ease-out 0.25s 1",
        fadeinbottomleft: "fade-in-bottom-left 3s ease-out 0.25s 1",
        fadeinbottomright: "fade-in-bottom-right 3s ease-out 0.25s 1",
        fadeinleft: "fade-in-left 3s ease-in-out 0.25s 1",
        fadeinleft1s: "fade-in-left 1s ease-in-out 0.25s 1",
        fadeinleft2s: "fade-in-left 2s ease-in-out 0.25s 1",
        fadeinbouncedown: "fade-in-bouncedown 3s ease-in-out 0.25s 1",
        fadeinbounceup: "fade-in-bounceup 3s ease-in-out 0.25s 1",
        fadeinbounceright: "fade-in-bounce-right 3s ease-in-out 0.25s 1",
        fadeinbounceleft: "fade-in-bounce-left 3s ease-in-out 0.25s 1",
        fadeinright: "fade-in-right 3s ease-in-out 0.25s 1",
        fadeinright1s: "fade-in-right 1s ease-in-out 0.25s 1",
        fadeinright2s: "fade-in-right 2s ease-in-out 0.25s 1",
        fadeinup: "fade-in-up 3s ease-in-out 0.25s 1",
        fadeoutdown: "fade-out-down 3s ease-in-out 0.25s 1",
        fadeouttopleft: "fade-out-top-left 3s ease-in-out 0.25s 1",
        fadeouttopright: "fade-out-top-right 3s ease-in-out 0.25s 1",
        fadeoutleft: "fade-out-left 3s ease-in-out 0.25s 1",
        fadeoutright: "fade-out-right 3s ease-in-out 0.25s 1",
        fadeoutup: "fade-out-up 3s ease-in-out 0.25s 1",
        slideindown: "slide-in-down 3s ease-in-out 0.25s 1",
        slideinleft: "slide-in-left 3s ease-in-out 0.25s 1",
        slideinleft2: "slide-in-left 2s ease-in-out 0.25s 1",
        slideinright2: "slide-in-right 2s ease-in-out 0.25s 1",
        slideinright: "slide-in-right 3s ease-in-out 0.25s 1",
        slideinup: "slide-in-up 3s ease-in-out 0.25s 1",
        slideoutdown: "slide-out-down 3s ease-in-out 0.25s 1",
        slideoutleft: "slide-out-left 3s ease-in-out 0.25s 1",
        slideoutright: "slide-out-right 3s ease-in-out 0.25s 1",
        slideoutup: "slide-out-up 3s ease-in-out 0.25s 1",
        slidedown: "slide-down 3s ease-in-out 0.25s 1",
        slideleft: "slide-left 3s ease-in-out 0.25s 1",
        slideright: "slide-right 3s ease-in-out 0.25s 1",
        slideup: "slide-up 3s ease-in-out 0.25s 1",
        zoomin: "zoom-in 3s ease-in-out 0.25s 1",
        zoomout: "zoom-out 3s ease-in-out 0.25s 1",
        tada: "tada 3s ease-in-out 0.25s 1",
        spinnergrow: "spinner-grow 3s ease-in-out 0.25s 1",
        placeholderwave: "placeholder-wave 3s ease-in-out 0.25s 1",
        showupclock: "show-up-clock 3s ease-in-out 0.25s 1",
        dropin: "drop-in 3s ease-in-out 3s 1",
        dropout: "drop-out 3s ease-in-out 0.25s 1",
        flyin: "fly-in 3s ease-in-out 0.25s 1",
        flyinup: "fly-in-up 3s ease-in-out 0.25s 1",
        flyindown: "fly-in-down 3s ease-in-out 0.25s 1",
        flyinleft: "fly-in-left 3s ease-in-out 0.25s 1",
        flyinright: "fly-in-right 3s ease-in-out 0.25s 1",
        flyout: "fly-out 3s ease-in-out 0.25s 1",
        flyoutup: "fly-out-up 3s ease-in-out 0.25s 1",
        flyoutdown: "fly-out-down 3s ease-in-out 0.25s 1",
        flyoutleft: "fly-out-left 3s ease-in-out 0.25s 1",
        flyoutright: "fly-out-right 3s ease-in-out 0.25s 1",
        browsein: "browse-in 0.4s ease-in-out 0.25s 1",
        browseout: "browse-out 0.4s ease-in-out 0.25s 1",
        browseoutleft: "browse-out-left 0.4s ease-in-out 0.25s 1",
        browseoutright: "browse-out-right 0.4s ease-in-out 0.25s 1",
        jiggle: "jiggle 3s ease-in-out 0.25s 1",
        flash: "flash 3s ease-in-out 0.25s 1",
        shake: "shake 3s ease-in-out 0.25s 1",
        glow: "glow 3s ease-in-out 0.25s 1",
        zoomIn: "zoom-in 3s ease-out 0.25s 1",
        zoomOut: "zoom-out 3s ease-out 0.25s 1",
        zoomOutLeft: "zoom-out-left 3s ease-out 0.25s 1",
        zoomOutRight: "zoom-out-right 3s ease-out 0.25s 1",
        zoomOutUp: "zoom-out-up 3s ease-out 0.25s 1",
        zoomOutDown: "zoom-out-down 3s ease-out 0.25s 1",
        zoomInUp: "zoom-in-up 3s ease-out 0.25s 1",
        zoomInBotoomRight: "zoom-in-bottom-right 3s ease-out 0.25s 1",
        zoomInBotoomLeft: "zoom-in-bottom-left 3s ease-out 0.25s 1",
        zoomInTopRight: "zoom-in-top-right 3s ease-out 0.25s 1",
        zoomInTopLeft: "zoom-in-top-left 3s ease-out 0.25s 1",
        zoomInDown: "zoom-in-down 3s ease-out 0.25s 1",
        zoomInRight: "zoom-in-right 3s ease-out 0.25s 1",
        zoomInLeft: "zoom-in-left 3s ease-out 0.25s 1",
        flipx: "flipx 3s 0.25s 1",
        flipxRight: "flipx-right 3s ease 0.25s 1",
        flipxLeft: "flipx-left 3s ease 0.25s 1",
        flipxTopLeft: "flipx-top-left 3s ease 0.25s 1",
        flipxTopRight: "flipx-top-right 3s ease 0.25s 1",
        flipxBottomLeft: "flipx-bottom-left 3s ease 0.25s 1",
        flipxBottomRight: "flipx-bottom-right 3s ease 0.25s 1",
        flipxUp: "flipx-up 3s ease 0.25s 1",
        flipxDown: "flipx-down 3s ease 0.25s 1",
        flipRight: "flip-right 3s ease 0.25s 1",
        flipLeft: "flip-left 3s ease 0.25s 1",
        flipTopLeft: "flip-top-left 3s ease 0.25s 1",
        flipTopRight: "flip-top-right 3s ease 0.25s 1",
        flipBottomLeft: "flip-bottom-left 3s ease 0.25s 1",
        flipBottomRight: "flip-bottom-right 3s ease 0.25s 1",
        flipUp: "flip-up 3s ease 0.25s 1",
        flipDown: "flip-down 3s ease 0.25s 1",
        flip: "flip 3s 0.25s 1",
        flip2: "flip 1s 0.25s 1",
        wiggle: "wiggle 3s ease 0.25s 2",
        accordionDown: "accordion-down 0.2s ease-out",
        accordionUp: "accordion-up 0.2s ease-out",
        fadeUp: "fadeUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
