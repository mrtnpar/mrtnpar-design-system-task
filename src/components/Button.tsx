import type { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../hooks/useTheme";
import type { Theme } from "../tokens/themes";

export type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: keyof typeof variances;
}>;

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.button,
        {
          backgroundColor: variances[variant].backgroundColor(theme),
          borderColor: variances[variant].borderColor(theme),
        },
      ]}
    >
      <Text
        style={[styles.text, { color: variances[variant].textColor(theme) }]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

const variances = {
  primary: {
    backgroundColor: (theme: Theme) => theme.colors.primary,
    borderColor: (theme: Theme) => theme.colors.primary,
    textColor: (theme: Theme) => theme.colors.neutral["50"],
  },
  secondary: {
    backgroundColor: (theme: Theme) => theme.colors.secondary,
    borderColor: (theme: Theme) => theme.colors.secondary,
    textColor: (theme: Theme) => theme.colors.neutral["50"],
  },
} as const;
