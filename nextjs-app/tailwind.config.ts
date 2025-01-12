import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import token from "./design-system/data/token.json";
import transferTokenToTailwindStyles from "./design-system/util/transferTokenToTailwindStyles";

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
    container: {
      center: true,
    },
    screens: {
      md: { min: "600px" },
      lg: { min: "840px" },
      xl: { min: "1280px" },
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
        "marquee-1": "marquee1 80s linear infinite",
        "marquee-2": "marquee2 80s linear infinite",
      },
      keyframes: {
        marquee1: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
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
