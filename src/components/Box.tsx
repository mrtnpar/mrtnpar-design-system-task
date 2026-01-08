import type { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

export type BoxProps = PropsWithChildren<{
  title?: string;
  variant: keyof typeof variances;
}>;

export const Box = ({ children, title, variant = "primary" }: BoxProps) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: variances[variant].backgroundColor(theme),
        },
      ]}
    >
      {title && (
        <Text
          style={[styles.title, { color: variances[variant].textColor(theme) }]}
        >
          {title}
        </Text>
      )}
      {children && (
        <Text
          style={[
            styles.content,
            { color: variances[variant].textColor(theme) },
          ]}
        >
          {children}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
  },
  box: {
    padding: 16,
    borderRadius: 8,
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

const variances = {
  primary: {
    backgroundColor: (theme: any) => theme.colors.primary,
    textColor: (theme: any) => theme.colors.neutral["50"],
  },
  secondary: {
    backgroundColor: (theme: any) => theme.colors.secondary,
    textColor: (theme: any) => theme.colors.neutral["50"],
  },
} as const;
