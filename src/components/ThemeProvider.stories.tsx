import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, useTheme } from "./ThemeProvider";
import { Button } from "./Button";
import { Box } from "./Box";
import { Text } from "./Text.web";

const meta: Meta<typeof ThemeProvider> = {
  title: "ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

function ThemeConsumer() {
  const { theme, mode, setTheme } = useTheme();

  return (
    <div
      style={{
        padding: 24,
        textAlign: "center",
        backgroundColor: theme.colors.neutral[50],
        borderRadius: 8,
      }}
    >
      <Text variant="h3" style={{ marginBottom: 16 }}>
        Theme Demo
      </Text>
      <Text style={{ marginBottom: 16 }}>
        Current mode: <strong>{mode.toUpperCase()}</strong>
      </Text>
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          marginBottom: 24,
          paddingBottom: 16,
          borderBottom: `1px solid ${theme.colors.neutral[200]}`,
        }}
      >
        <Button
          variant={mode === "light" ? "primary" : "secondary"}
          onClick={() => setTheme("light")}
        >
          Light
        </Button>
        <Button
          variant={mode === "dark" ? "primary" : "secondary"}
          onClick={() => setTheme("dark")}
        >
          Dark
        </Button>
        <Button
          variant={mode === "system" ? "primary" : "secondary"}
          onClick={() => setTheme("system")}
        >
          System
        </Button>
      </div>
      <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
        <Box variant="primary" title="Primary Box">
          This box uses primary theme color
        </Box>
        <Box variant="secondary" title="Secondary Box">
          This box uses secondary theme color
        </Box>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <ThemeProvider initialTheme="system">
      <ThemeConsumer />
    </ThemeProvider>
  ),
};

export const Light: Story = {
  render: () => (
    <ThemeProvider initialTheme="light">
      <ThemeConsumer />
    </ThemeProvider>
  ),
};

export const Dark: Story = {
  render: () => (
    <ThemeProvider initialTheme="dark">
      <ThemeConsumer />
    </ThemeProvider>
  ),
};

export const System: Story = {
  render: () => (
    <ThemeProvider initialTheme="system">
      <ThemeConsumer />
    </ThemeProvider>
  ),
};
