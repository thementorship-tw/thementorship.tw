import type { KeyValuePair } from "tailwindcss/types/config";
import token from "../data/token.json";

type TokenType = typeof token;

interface CustomStyleValue {
  value: string;
  type: string;
}

interface CustomShadowValue {
  value: {
    x: string;
    y: string;
    blur: string;
    spread: string;
    color: string;
    type: string;
  };
  type: string;
}

const convertProperty = (property: Record<string, CustomStyleValue>) => {
  const result: KeyValuePair = {};

  Object.keys(property).forEach((key) => {
    result[key] = property[key].value;
  });

  return result;
};

const convertShadowProperty = (shadow: Record<string, CustomShadowValue>) => {
  const result: KeyValuePair = {};

  Object.keys(shadow).forEach((key) => {
    result[key] =
      `${shadow[key].value.x} ${shadow[key].value.y} ${shadow[key].value.blur} ${shadow[key].value.spread} ${shadow[key].value.color}`;
  });

  return result;
};

const transferTokenToTailwindStyles = (token: TokenType) => {
  const {
    fontWeights: fontWeightsToken,
    lineHeights: lineHeightsToken,
    radius: radiusToken,
    spacing: spacingToken,
    boxShadow: boxShadowToken,
  } = token;

  const fontWeight = convertProperty(fontWeightsToken);
  const lineHeight = convertProperty(lineHeightsToken);
  const borderRadius = convertProperty(radiusToken);
  const spacing = convertProperty(spacingToken);
  const boxShadow = convertShadowProperty(boxShadowToken);

  return {
    fontWeight,
    lineHeight,
    borderRadius,
    spacing,
    boxShadow,
  };
};

export default transferTokenToTailwindStyles;
