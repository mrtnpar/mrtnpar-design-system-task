import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ThemeProvider, useTheme } from "../../src/components/ThemeProvider";

function TestComponent() {
  const { theme, mode, setTheme } = useTheme();

  return (
    <div>
      <span data-testid="mode">{mode}</span>
      <span data-testid="primary-color">{theme.colors.primary}</span>
      <button type="button" onClick={() => setTheme("light")}>
        Light
      </button>
      <button type="button" onClick={() => setTheme("dark")}>
        Dark
      </button>
      <button type="button" onClick={() => setTheme("system")}>
        System
      </button>
    </div>
  );
}

describe("ThemeProvider", () => {
  let matchMediaSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    matchMediaSpy = vi.spyOn(window, "matchMedia");
  });

  afterEach(() => {
    matchMediaSpy.mockRestore();
  });

  it("renders children with light theme by default", () => {
    matchMediaSpy.mockReturnValue({
      matches: false,
      media: "",
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("mode")).toHaveTextContent("system");
    expect(screen.getByTestId("primary-color")).toHaveTextContent("#007AFF");
  });

  it("renders children with initialTheme prop", () => {
    render(
      <ThemeProvider initialTheme="light">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("mode")).toHaveTextContent("light");
  });

  it("updates theme when setTheme is called", async () => {
    const user = vi.fn();
    render(
      <ThemeProvider initialTheme="light">
        <TestComponent />
      </ThemeProvider>
    );

    const darkButton = screen.getByText("Dark");
    await act(async () => {
      darkButton.click();
    });

    expect(screen.getByTestId("mode")).toHaveTextContent("dark");
  });

  it("provides theme object with correct structure", () => {
    render(
      <ThemeProvider initialTheme="light">
        <TestComponent />
      </ThemeProvider>
    );

    const mode = screen.getByTestId("mode");
    const primaryColor = screen.getByTestId("primary-color");

    expect(mode).toBeInTheDocument();
    expect(primaryColor).toHaveTextContent("#007AFF");
  });
});

describe("useTheme", () => {
  it("returns light theme when no ThemeProvider is present", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});

    render(<TestComponent />);

    expect(screen.getByTestId("mode")).toHaveTextContent("light");
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "useTheme: No ThemeProvider found. Using light theme."
    );

    consoleWarnSpy.mockRestore();
  });

  it("returns theme, mode, and setTheme function", () => {
    matchMediaSpy = vi.spyOn(window, "matchMedia");
    matchMediaSpy.mockReturnValue({
      matches: false,
      media: "",
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    function TestHook() {
      const { theme, mode, setTheme } = useTheme();

      return (
        <div>
          <span data-testid="has-theme">{theme ? "yes" : "no"}</span>
          <span data-testid="has-mode">{mode ? "yes" : "no"}</span>
          <span data-testid="has-settheme">
            {typeof setTheme === "function" ? "yes" : "no"}
          </span>
        </div>
      );
    }

    render(
      <ThemeProvider>
        <TestHook />
      </ThemeProvider>
    );

    expect(screen.getByTestId("has-theme")).toHaveTextContent("yes");
    expect(screen.getByTestId("has-mode")).toHaveTextContent("yes");
    expect(screen.getByTestId("has-settheme")).toHaveTextContent("yes");

    matchMediaSpy.mockRestore();
  });
});
