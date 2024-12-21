import type { KeyValuePair } from "tailwindcss/types/config";
import token from "../data/token.json";

type TokenType = typeof token;

interface CustomStyleValue {
  value: string;
  type: string;
}

const convertProperty = (property: Record<string, CustomStyleValue>) => {
  const result: KeyValuePair = {};

  Object.keys(property).forEach((key) => {
    result[key] = property[key].value;
  });

  return result;
};

const transferTokenToTailwindStyles = (token: TokenType) => {
  const { fontWeights } = token;

  const fontWeight = convertProperty(fontWeights);

  return {
    fontWeight,
  };
};

export default transferTokenToTailwindStyles;
