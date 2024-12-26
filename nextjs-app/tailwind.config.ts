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
} = transferTokenToTailwindStyles(token);

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      md: { min: "600px" },
      lg: { min: "840px" },
      xl: { min: "1280px" },
    },
    fontSize,
    fontWeight,
    lineHeight,
    borderRadius,
    spacing,
    boxShadow,
    extend: {
      fontSize: {
        ...typographyFromToken,
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
