import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import token from "./designSystem/data/token.json";
import transferTokenToTailwindStyles from "./designSystem/util/transferTokenToTailwindStyles";

const { fontWeight } = transferTokenToTailwindStyles(token);

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    screens: {
      md: { min: "600px" },
      lg: { min: "840px" },
      xl: { min: "1280px" },
    },
    fontWeight,
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
