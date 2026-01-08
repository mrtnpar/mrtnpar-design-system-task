import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Box } from "../../src/components/Box";
import { ThemeProvider } from "../../src/components/ThemeProvider";

describe("Box with Theme Support", () => {
  it("renders box with title and children", () => {
    render(
      <ThemeProvider>
        <Box title="Test Box">Box content</Box>
      </ThemeProvider>
    );

    expect(screen.getByText("Test Box")).toBeInTheDocument();
    expect(screen.getByText("Box content")).toBeInTheDocument();
  });

  it("applies primary variant theme color", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Box variant="primary" title="Primary Box">
          Content
        </Box>
      </ThemeProvider>
    );

    const box = screen.getByRole("generic");
    expect(box).toHaveStyle({
      backgroundColor: "#007AFF",
    });
  });

  it("applies secondary variant theme color", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Box variant="secondary" title="Secondary Box">
          Content
        </Box>
      </ThemeProvider>
    );

    const box = screen.getByRole("generic");
    expect(box).toHaveStyle({
      backgroundColor: "#5856D6",
    });
  });

  it("uses theme colors for text", () => {
    render(
      <ThemeProvider initialTheme="light">
        <Box variant="primary" title="Test Title">
          Test Content
        </Box>
      </ThemeProvider>
    );

    const title = screen.getByText("Test Title");
    const content = screen.getByText("Test Content");

    expect(title).toHaveStyle({
      color: "#111827",
    });
    expect(content).toHaveStyle({
      color: "#111827",
    });
  });

  it("renders without title", () => {
    render(
      <ThemeProvider>
        <Box>Content only</Box>
      </ThemeProvider>
    );

    expect(screen.getByText("Content only")).toBeInTheDocument();
  });

  it("renders without children", () => {
    render(
      <ThemeProvider>
        <Box title="Title only" />
      </ThemeProvider>
    );

    expect(screen.getByText("Title only")).toBeInTheDocument();
  });
});
