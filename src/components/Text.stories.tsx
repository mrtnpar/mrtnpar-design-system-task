import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text.web";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const H1: Story = {
  args: {
    children: "Heading 1",
    variant: "h1",
  },
};

export const H2: Story = {
  args: {
    children: "Heading 2",
    variant: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "Heading 3",
    variant: "h3",
  },
};

export const H4: Story = {
  args: {
    children: "Heading 4",
    variant: "h4",
  },
};

export const H5: Story = {
  args: {
    children: "Heading 5",
    variant: "h5",
  },
};

export const H6: Story = {
  args: {
    children: "Heading 6",
    variant: "h6",
  },
};

export const Body: Story = {
  args: {
    children:
      "This is body text. It is used for paragraphs and general content.",
    variant: "body",
  },
};

export const BodySmall: Story = {
  args: {
    children: "This is small body text. It is used for secondary content.",
    variant: "body-small",
  },
};

export const Caption: Story = {
  args: {
    children: "This is caption text. It is used for auxiliary information.",
    variant: "caption",
  },
};

export const Label: Story = {
  args: {
    children: "This is label text. It is used for form labels and titles.",
    variant: "label",
  },
};

export const WithColor: Story = {
  args: {
    children: "Text with custom color",
    variant: "body",
    color: "#007AFF",
  },
};

export const CustomElement: Story = {
  args: {
    children: "This text renders as a div instead of p",
    variant: "body",
    as: "div",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="h5">Heading 5</Text>
      <Text variant="h6">Heading 6</Text>
      <Text variant="body">Body text</Text>
      <Text variant="body-small">Body small text</Text>
      <Text variant="caption">Caption text</Text>
      <Text variant="label">Label text</Text>
    </div>
  ),
};
