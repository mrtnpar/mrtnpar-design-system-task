import { colors, spacing, typography, borderRadius } from "./tokens";

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    neutral: Record<string, string>;
  };
  spacing: Record<string, string>;
  typography: {
    fontFamily: Record<string, string>;
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
    lineHeight: Record<string, string>;
    letterSpacing: Record<string, string>;
  };
  borderRadius: Record<string, string>;
}

export const lightTheme: Theme = {
  colors: {
    primary: "#0062CC",
    secondary: "#4644B6",
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    neutral: colors.neutral,
  },
  spacing,
  typography,
  borderRadius,
} as const;

export const darkTheme: Theme = {
  colors: {
    primary: "#3395FF",
    secondary: "#6B6AE0",
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    neutral: {
      "50": colors.neutral["900"],
      "100": colors.neutral["800"],
      "200": colors.neutral["700"],
      "300": colors.neutral["600"],
      "400": colors.neutral["500"],
      "500": colors.neutral["400"],
      "600": colors.neutral["300"],
      "700": colors.neutral["200"],
      "800": colors.neutral["100"],
      "900": colors.neutral["50"],
    },
  },
  spacing,
  typography,
  borderRadius,
} as const;

export type ThemeMode = "system" | "light" | "dark";
export type ActualTheme = "light" | "dark";
