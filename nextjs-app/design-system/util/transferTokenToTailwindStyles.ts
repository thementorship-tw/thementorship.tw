import type { KeyValuePair, ThemeConfig } from "tailwindcss/types/config";
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

const convertTypographyProperty = (
  typography: Record<
    string,
    TokenType["typography"][keyof TokenType["typography"]]
  >
) => {
  const result: ThemeConfig["fontSize"] = {};

  Object.keys(typography).forEach((key) => {
    result[key] = [
      typography[key].value.fontSize,
      {
        lineHeight: typography[key].value.lineHeight,
        fontWeight: typography[key].value.fontWeight,
      },
    ];
  });

  return result;
};

const convertShadowProperty = (
  shadow: Record<string, TokenType["boxShadow"][keyof TokenType["boxShadow"]]>
) => {
  const result: KeyValuePair = {};

  Object.keys(shadow).forEach((key) => {
    result[key] =
      `${shadow[key].value.x} ${shadow[key].value.y} ${shadow[key].value.blur} ${shadow[key].value.spread} ${shadow[key].value.color}`;
  });

  return result;
};

const transferTokenToTailwindStyles = (token: TokenType) => {
  const {
    fontSizes: fontSizesToken,
    fontWeights: fontWeightsToken,
    lineHeights: lineHeightsToken,
    typography: typographyToken,
    radius: radiusToken,
    spacing: spacingToken,
    boxShadow: boxShadowToken,
    white: colorWhiteToken,
    black: colorBlackToken,
    neutral: colorNeutralToken,
    yellow: colorYellowToken,
    blue: colorBlueToken,
  } = token;

  const fontSize = convertProperty(fontSizesToken);
  const fontWeight = convertProperty(fontWeightsToken);
  const lineHeight = convertProperty(lineHeightsToken);
  const typography = convertTypographyProperty(typographyToken);
  const borderRadius = convertProperty(radiusToken);
  const spacing = convertProperty(spacingToken);
  const boxShadow = convertShadowProperty(boxShadowToken);

  const colors = {
    transparent: "transparent",
    current: "currentColor",
    white: colorWhiteToken.value,
    black: colorBlackToken.value,
    neutral: convertProperty(colorNeutralToken),
    yellow: convertProperty(colorYellowToken),
    blue: convertProperty(colorBlueToken),
  };

  return {
    fontSize,
    fontWeight,
    lineHeight,
    typography,
    borderRadius,
    spacing,
    boxShadow,
    colors,
  };
};

export default transferTokenToTailwindStyles;
