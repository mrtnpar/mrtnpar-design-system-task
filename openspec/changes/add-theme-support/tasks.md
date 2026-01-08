## 1. Token Structure Setup

- [ ] 1.1 Create src/tokens/themes.ts file
- [ ] 1.2 Define light theme object with all design tokens (colors, spacing, typography, borderRadius, shadow)
- [ ] 1.3 Define dark theme object with all design tokens
- [ ] 1.4 Map light theme neutral colors (light backgrounds, dark text)
- [ ] 1.5 Map dark theme neutral colors (dark backgrounds, light text)
- [ ] 1.6 Define TypeScript Theme interface
- [ ] 1.7 Export lightTheme and darkTheme constants
- [ ] 1.8 Verify theme structure matches existing tokens/colors.json

## 2. Theme Provider Implementation

- [ ] 2.1 Create src/components/ThemeProvider.tsx
- [ ] 2.2 Implement ThemeContext with React Context
- [ ] 2.3 Implement ThemeProviderContext for provider-only access
- [ ] 2.4 Create ThemeProvider component with children and initialTheme props
- [ ] 2.5 Implement system theme detection for web (matchMedia API)
- [ ] 2.6 Implement system theme detection for React Native (useColorScheme hook)
- [ ] 2.7 Implement theme mode state management (system/light/dark)
- [ ] 2.8 Implement setTheme function for theme changes
- [ ] 2.9 Add performance optimizations (useMemo for theme objects, useCallback for setTheme)
- [ ] 2.10 Add fallback to light theme on system detection failure
- [ ] 2.11 Add development warning for missing ThemeProvider
- [ ] 2.12 Export ThemeProvider from main package

## 3. useTheme Hook Implementation

- [ ] 3.1 Create src/hooks/useTheme.ts
- [ ] 3.2 Implement useTheme hook that consumes theme context
- [ ] 3.3 Return theme, mode, and setTheme from hook
- [ ] 3.4 Add TypeScript types for hook return value
- [ ] 3.5 Add default light theme fallback when no provider
- [ ] 3.6 Add no-op setTheme function when no provider
- [ ] 3.7 Export useTheme from main package

## 4. Component Integration - Button

- [ ] 4.1 Update src/components/Button.tsx to use useTheme hook
- [ ] 4.2 Replace hardcoded colors with theme tokens
- [ ] 4.3 Update primary variant to use theme.colors.primary
- [ ] 4.4 Update secondary variant to use theme.colors.secondary
- [ ] 4.5 Ensure component re-renders on theme change
- [ ] 4.6 Test component in both light and dark themes

## 5. Component Integration - Box

- [ ] 5.1 Update src/components/Box.tsx to use useTheme hook
- [ ] 5.2 Replace hardcoded colors with theme tokens
- [ ] 5.3 Update primary variant to use theme.colors.primary
- [ ] 5.4 Update secondary variant to use theme.colors.secondary
- [ ] 5.5 Update title and content text colors for theme
- [ ] 5.6 Ensure component re-renders on theme change
- [ ] 5.7 Test component in both light and dark themes

## 6. Component Integration - Text Web

- [ ] 6.1 Update src/components/Text.web.tsx to use useTheme hook
- [ ] 6.2 Replace hardcoded colors with theme tokens
- [ ] 6.3 Update default text color to use theme.colors.neutral[900] (light) or neutral[50] (dark)
- [ ] 6.4 Update color prop handling to support theme tokens
- [ ] 6.5 Ensure component re-renders on theme change
- [ ] 6.6 Test component in both light and dark themes

## 7. Component Integration - Text Native

- [ ] 7.1 Update src/components/Text.native.tsx to use useTheme hook
- [ ] 7.2 Replace hardcoded colors with theme tokens
- [ ] 7.3 Update default text color for theme
- [ ] 7.4 Update color prop handling to support theme tokens
- [ ] 7.5 Ensure component re-renders on theme change
- [ ] 7.6 Test component in both light and dark themes

## 8. Package Exports

- [ ] 8.1 Update src/index.ts to export ThemeProvider
- [ ] 8.2 Update src/index.ts to export useTheme
- [ ] 8.3 Update src/index.ts to export lightTheme and darkTheme
- [ ] 8.4 Update src/tokens/index.ts to export lightTheme and darkTheme
- [ ] 8.5 Verify package.json exports include new exports
- [ ] 8.6 Build distribution and verify exports are correct

## 9. Documentation - Theme Provider

- [ ] 9.1 Create src/components/ThemeProvider.stories.tsx
- [ ] 9.2 Document ThemeProvider usage with examples
- [ ] 9.3 Document system, light, and dark modes
- [ ] 9.4 Document theme switching examples
- [ ] 9.5 Document wrapping application with ThemeProvider

## 10. Documentation - Component Examples

- [ ] 10.1 Update Button.stories.tsx to demonstrate theme switching
- [ ] 10.2 Update Box.stories.tsx to demonstrate theme switching
- [ ] 10.3 Update Text.stories.tsx to demonstrate theme switching
- [ ] 10.4 Add theme toggle control to stories
- [ ] 10.5 Document theme integration in component stories

## 11. Testing - Theme Provider

- [ ] 11.1 Create unit tests for ThemeProvider (vitest)
- [ ] 11.2 Test theme mode state management
- [ ] 11.3 Test setTheme function
- [ ] 11.4 Test system theme detection (mock matchMedia and useColorScheme)
- [ ] 11.5 Test theme context propagation
- [ ] 11.6 Test performance (verify stable references)
- [ ] 11.7 Test default behavior without provider

## 12. Testing - useTheme Hook

- [ ] 12.1 Create unit tests for useTheme hook (vitest)
- [ ] 12.2 Test theme access
- [ ] 12.3 Test mode access
- [ ] 12.4 Test setTheme function
- [ ] 12.5 Test default fallback behavior
- [ ] 12.6 Test theme change propagation

## 13. Testing - Component Integration

- [ ] 13.1 Create unit tests for Button with theme support
- [ ] 13.2 Create unit tests for Box with theme support
- [ ] 13.3 Create unit tests for Text with theme support
- [ ] 13.4 Test component re-rendering on theme change
- [ ] 13.5 Create visual regression tests for theme switching (Playwright)
- [ ] 13.6 Verify components render correctly in both themes

## 14. Performance Testing

- [ ] 14.1 Profile ThemeProvider with React DevTools
- [ ] 14.2 Verify minimal re-renders on theme change
- [ ] 14.3 Verify stable theme object references
- [ ] 14.4 Profile with deep component trees
- [ ] 14.5 Verify context splitting effectiveness

## 15. Platform Testing

- [ ] 15.1 Test web platform theme detection (multiple browsers)
- [ ] 15.2 Test React Native platform theme detection
- [ ] 15.3 Test theme switching animations (if applicable)
- [ ] 15.4 Test edge cases (provider missing, invalid theme values)
- [ ] 15.5 Test memory leaks (cleanup of event listeners)

## 16. Validation

- [ ] 16.1 Run type checking (tsc --noEmit)
- [ ] 16.2 Run linting (eslint)
- [ ] 16.3 Run all tests and ensure >80% code coverage
- [ ] 16.4 Build distribution and verify outputs
- [ ] 16.5 Test in web Storybook with theme toggle
- [ ] 16.6 Verify React Native compatibility
- [ ] 16.7 Validate openspec proposal with `openspec validate add-theme-support --strict`

## 17. Optional Enhancements

- [ ] 17.1 Consider CSS transitions for smooth theme switching (web)
- [ ] 17.2 Consider React Native DynamicColorIOS for iOS
- [ ] 17.3 Consider theme persistence in localStorage
- [ ] 17.4 Consider additional theme modes (high contrast, etc.)
