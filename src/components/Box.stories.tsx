import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";
import { Button } from "./Button";
import { ThemeProvider, useTheme } from "./ThemeProvider";

const meta = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    title: "Primary Box",
    children: "This is a primary box component",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Box",
    variant: "secondary",
    children: "This is a secondary box component",
  },
};

export const WithoutTitle: Story = {
  args: {
    children: "Box without title",
  },
};

export const WithoutChildren: Story = {
  args: {
    title: "Box with Title Only",
  },
};

export const WithThemeSwitching: Story = {
  render: () => {
    const { mode, setTheme } = useTheme();

    return (
      <div
        style={{
          padding: 24,
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginBottom: 24,
            paddingBottom: 16,
            borderBottom: "1px solid #ccc",
          }}
        >
          <p style={{ marginBottom: 12, fontSize: "14px", color: "#666" }}>
            Theme Mode: <strong>{mode.toUpperCase()}</strong>
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
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
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Box variant="primary" title="Primary Box">
            This is a primary box component with theme support
          </Box>
          <Box variant="secondary" title="Secondary Box">
            This is a secondary box component with theme support
          </Box>
        </div>
      </div>
    );
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="system">
        <Story />
      </ThemeProvider>
    ),
  ],
};
