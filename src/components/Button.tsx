import type { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../hooks/useTheme";

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
    backgroundColor: (theme: any) => theme.colors.primary,
    borderColor: (theme: any) => theme.colors.primary,
    textColor: (theme: any) => theme.colors.neutral["50"],
  },
  secondary: {
    backgroundColor: (theme: any) => theme.colors.secondary,
    borderColor: (theme: any) => theme.colors.secondary,
    textColor: (theme: any) => theme.colors.neutral["50"],
  },
} as const;
