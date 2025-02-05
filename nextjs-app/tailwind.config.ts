import typography from "@tailwindcss/typography";
import token from "./design-system/data/token.json";
import transferTokenToTailwindStyles from "./design-system/util/transferTokenToTailwindStyles";
import type { Config } from "tailwindcss";

const {
  fontSize,
  fontWeight,
  lineHeight,
  typography: typographyFromToken,
  borderRadius,
  spacing,
  boxShadow,
  colors,
} = transferTokenToTailwindStyles(token);

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      md: { min: "600px" },
      lg: { min: "840px" },
      xl: { min: "1280px" },
    },
    container: {
      center: true,
      screens: {
        xl: "1156px",
      },
    },
    fontFamily: {
      "eb-garamond": ["var(--font-eb-garamond)"],
      sans: [
        "Verdana",
        "Helvetica",
        "Microsoft JhengHei",
        "Heiti TC",
        "sans-serif",
      ],
    },
    colors,
    extend: {
      fontWeight,
      lineHeight,
      borderRadius,
      spacing,
      boxShadow,
      fontSize: {
        ...fontSize,
        ...typographyFromToken,
      },
      animation: {
        "marquee-first-layer": "marquee1 180s linear infinite",
        "marquee-second-layer": "marquee2 180s linear infinite",
        "marquee-first-layer-reverse": "marquee1-reverse 180s linear infinite",
        "marquee-second-layer-reverse": "marquee2-reverse 180s linear infinite",
        "fade-in-out": "fade-in-out 6000ms linear 1",
      },
      keyframes: {
        marquee1: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-200%)" },
        },
        "marquee1-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "marquee2-reverse": {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-in-out": {
          "0%": { opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [typography, require("tailwindcss-motion")],
} satisfies Config;
