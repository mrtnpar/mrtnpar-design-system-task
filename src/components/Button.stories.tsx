import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider, useTheme } from "./ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const WithClick: Story = {
  args: {
    children: "Click Me",
    variant: "primary",
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
          backgroundColor: "transparent",
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
            marginTop: 24,
          }}
        >
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
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
