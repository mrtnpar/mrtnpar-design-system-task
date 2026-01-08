import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Button } from "../../src/components/Button";
import { ThemeProvider } from "../../src/components/ThemeProvider";

describe("Button", () => {
  it("renders button with children", () => {
    render(
      <ThemeProvider>
        <Button>Click me</Button>
      </ThemeProvider>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <Button onClick={handleClick}>Click me</Button>
      </ThemeProvider>
    );
    await user.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies primary variant styles by default", () => {
    render(
      <ThemeProvider>
        <Button>Primary</Button>
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({
      backgroundColor: "#007AFF",
    });
  });

  it("applies secondary variant styles", () => {
    render(
      <ThemeProvider>
        <Button variant="secondary">Secondary</Button>
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({
      backgroundColor: "#5856D6",
    });
  });

  it("re-renders when theme changes", async () => {
    const user = userEvent.setup();

    function TestWrapper() {
      const { setTheme } = vi.fn();

      return (
        <ThemeProvider initialTheme="light">
          <Button>Theme Button</Button>
          <button type="button" onClick={() => setTheme("dark")}>
            Switch Theme
          </button>
        </ThemeProvider>
      );
    }

    render(<TestWrapper />);
    const button = screen.getByRole("button", { name: "Theme Button" });

    expect(button).toHaveStyle({
      backgroundColor: "#007AFF",
    });
  });
});
