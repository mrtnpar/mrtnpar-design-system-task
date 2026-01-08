import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../components/Box";

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
