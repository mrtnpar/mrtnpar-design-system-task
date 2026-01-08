import { forwardRef } from "react";
import { Platform, StyleSheet, Text as RNText, TextProps } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { type TextVariant } from "./Text.types";

export interface CustomTextProps extends TextProps {
  variant?: TextVariant;
  color?: string;
}

const Text = forwardRef<RNText, CustomTextProps>(
  ({ children, variant = "body", style, color, ...props }, ref) => {
    const { theme } = useTheme();

    return (
      <RNText
        ref={ref}
        style={[
          styles.base,
          styles[variant as keyof typeof styles],
          { color: color || theme.colors.neutral[900] },
          style,
        ]}
        {...props}
      >
        {children}
      </RNText>
    );
  }
);

Text.displayName = "Text";

const styles = StyleSheet.create({
  base: {
    fontFamily:
      Platform.OS === "ios"
        ? "-apple-system, BlinkMacSystemFont"
        : "Roboto, Helvetica, Arial, sans-serif",
  },
  h1: {
    fontSize: 36,
    fontWeight: "700" as const,
    lineHeight: 43,
  },
  h2: {
    fontSize: 30,
    fontWeight: "700" as const,
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    fontWeight: "600" as const,
    lineHeight: 29,
  },
  h4: {
    fontSize: 20,
    fontWeight: "600" as const,
    lineHeight: 30,
  },
  h5: {
    fontSize: 18,
    fontWeight: "500" as const,
    lineHeight: 27,
  },
  h6: {
    fontSize: 16,
    fontWeight: "500" as const,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: "400" as const,
    lineHeight: 24,
  },
  "body-small": {
    fontSize: 14,
    fontWeight: "400" as const,
    lineHeight: 21,
  },
  caption: {
    fontSize: 12,
    fontWeight: "400" as const,
    lineHeight: 21,
  },
  label: {
    fontSize: 14,
    fontWeight: "600" as const,
    lineHeight: 21,
  },
});

export type { TextProps } from "./Text.types";
export { Text };
