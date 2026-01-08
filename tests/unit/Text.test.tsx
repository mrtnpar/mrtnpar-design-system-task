import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Text } from "../../src/components/Text.web";
import { ThemeProvider } from "../../src/components/ThemeProvider";

describe("Text with Theme Support", () => {
  it("renders text with default theme color", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Text>Test text</Text>
      </ThemeProvider>
    );

    const text = screen.getByText("Test text");
    expect(text).toHaveStyle({
      color: "#111827",
    });
  });

  it("renders with custom color prop", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Text color="#FF0000">Custom color text</Text>
      </ThemeProvider>
    );

    const text = screen.getByText("Custom color text");
    expect(text).toHaveStyle({
      color: "#FF0000",
    });
  });

  it("renders all variants correctly", () => {
    render(
      <ThemeProvider initialTheme="light">
        <div>
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="body">Body text</Text>
          <Text variant="caption">Caption text</Text>
        </div>
      </ThemeProvider>
    );

    expect(screen.getByText("Heading 1")).toBeInTheDocument();
    expect(screen.getByText("Heading 2")).toBeInTheDocument();
    expect(screen.getByText("Heading 3")).toBeInTheDocument();
    expect(screen.getByText("Body text")).toBeInTheDocument();
    expect(screen.getByText("Caption text")).toBeInTheDocument();
  });

  it("applies correct font size for h1 variant", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Text variant="h1">Heading 1</Text>
      </ThemeProvider>
    );

    const text = screen.getByText("Heading 1");
    expect(text).toHaveStyle({
      fontSize: "36px",
    });
  });

  it("applies correct font weight for bold text", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Text variant="h1">Bold text</Text>
      </ThemeProvider>
    );

    const text = screen.getByText("Bold text");
    expect(text).toHaveStyle({
      fontWeight: "700",
    });
  });

  it("renders as correct HTML element by default", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Text variant="h1">Heading</Text>
        <Text variant="body">Paragraph</Text>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("Paragraph").tagName).toBe("P");
  });

  it("renders as custom element when using as prop", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Text as="div" variant="body">
          Custom element
        </Text>
      </ThemeProvider>
    );

    const text = screen.getByText("Custom element");
    expect(text.tagName).toBe("DIV");
  });
});
