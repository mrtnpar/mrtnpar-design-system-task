## 1. Token Structure Setup

- [x] 1.1 Create src/tokens/themes.ts file
- [x] 1.2 Define light theme object with all design tokens (colors, spacing, typography, borderRadius, shadow)
- [x] 1.3 Define dark theme object with all design tokens
- [x] 1.4 Map light theme neutral colors (light backgrounds, dark text)
- [x] 1.5 Map dark theme neutral colors (dark backgrounds, light text)
- [x] 1.6 Define TypeScript Theme interface
- [x] 1.7 Export lightTheme and darkTheme constants
- [x] 1.8 Verify theme structure matches existing tokens/colors.json

## 2. Theme Provider Implementation

- [x] 2.1 Create src/components/ThemeProvider.tsx
- [x] 2.2 Implement ThemeContext with React Context
- [x] 2.3 Implement ThemeProviderContext for provider-only access
- [x] 2.4 Create ThemeProvider component with children and initialTheme props
- [x] 2.5 Implement system theme detection for web (matchMedia API)
- [x] 2.6 Implement system theme detection for React Native (useColorScheme hook)
- [x] 2.7 Implement theme mode state management (system/light/dark)
- [x] 2.8 Implement setTheme function for theme changes
- [x] 2.9 Add performance optimizations (useMemo for theme objects, useCallback for setTheme)
- [x] 2.10 Add fallback to light theme on system detection failure
- [x] 2.11 Add development warning for missing ThemeProvider
- [x] 2.12 Export ThemeProvider from main package

## 3. useTheme Hook Implementation

- [x] 3.1 Create src/hooks/useTheme.ts
- [x] 3.2 Implement useTheme hook that consumes theme context
- [x] 3.3 Return theme, mode, and setTheme from hook
- [x] 3.4 Add TypeScript types for hook return value
- [x] 3.5 Add default light theme fallback when no provider
- [x] 3.6 Add no-op setTheme function when no provider
- [x] 3.7 Export useTheme from main package

## 4. Component Integration - Button

- [x] 4.1 Update src/components/Button.tsx to use useTheme hook
- [x] 4.2 Replace hardcoded colors with theme tokens
- [x] 4.3 Update primary variant to use theme.colors.primary
- [x] 4.4 Update secondary variant to use theme.colors.secondary
- [x] 4.5 Ensure component re-renders on theme change
- [x] 4.6 Test component in both light and dark themes

## 5. Component Integration - Box

- [x] 5.1 Update src/components/Box.tsx to use useTheme hook
- [x] 5.2 Replace hardcoded colors with theme tokens
- [x] 5.3 Update primary variant to use theme.colors.primary
- [x] 5.4 Update secondary variant to use theme.colors.secondary
- [x] 5.5 Update title and content text colors for theme
- [x] 5.6 Ensure component re-renders on theme change
- [x] 5.7 Test component in both light and dark themes

## 6. Component Integration - Text Web

- [x] 6.1 Update src/components/Text.web.tsx to use useTheme hook
- [x] 6.2 Replace hardcoded colors with theme tokens
- [x] 6.3 Update default text color to use theme.colors.neutral[900] (light) or neutral[50] (dark)
- [x] 6.4 Update color prop handling to support theme tokens
- [x] 6.5 Ensure component re-renders on theme change
- [x] 6.6 Test component in both light and dark themes

## 7. Component Integration - Text Native

- [x] 7.1 Update src/components/Text.native.tsx to use useTheme hook
- [x] 7.2 Replace hardcoded colors with theme tokens
- [x] 7.3 Update default text color for theme
- [x] 7.4 Update color prop handling to support theme tokens
- [x] 7.5 Ensure component re-renders on theme change
- [x] 7.6 Test component in both light and dark themes

## 8. Package Exports

- [x] 8.1 Update src/index.ts to export ThemeProvider
- [x] 8.2 Update src/index.ts to export useTheme
- [x] 8.3 Update src/index.ts to export lightTheme and darkTheme
- [x] 8.4 Update src/tokens/index.ts to export lightTheme and darkTheme
- [x] 8.5 Verify package.json exports include new exports
- [x] 8.6 Build distribution and verify exports are correct

## 9. Documentation - Theme Provider

- [x] 9.1 Create src/components/ThemeProvider.stories.tsx
- [x] 9.2 Document ThemeProvider usage with examples
- [x] 9.3 Document system, light, and dark modes
- [x] 9.4 Document theme switching examples
- [x] 9.5 Document wrapping application with ThemeProvider

## 10. Documentation - Component Examples

- [x] 10.1 Update Button.stories.tsx to demonstrate theme switching
- [x] 10.2 Update Box.stories.tsx to demonstrate theme switching
- [x] 10.3 Update Text.stories.tsx to demonstrate theme switching
- [x] 10.4 Add theme toggle control to stories
- [x] 10.5 Document theme integration in component stories

## 11. Testing - Theme Provider

- [x] 11.1 Create unit tests for ThemeProvider (vitest)
- [x] 11.2 Test theme mode state management
- [x] 11.3 Test setTheme function
- [x] 11.4 Test system theme detection (mock matchMedia and useColorScheme)
- [x] 11.5 Test theme context propagation
- [x] 11.6 Test performance (verify stable references)
- [x] 11.7 Test default behavior without provider

## 12. Testing - useTheme Hook

- [x] 12.1 Create unit tests for useTheme hook (vitest)
- [x] 12.2 Test theme access
- [x] 12.3 Test mode access
- [x] 12.4 Test setTheme function
- [x] 12.5 Test default fallback behavior
- [x] 12.6 Test theme change propagation

## 13. Testing - Component Integration

- [x] 13.1 Create unit tests for Button with theme support
- [x] 13.2 Create unit tests for Box with theme support
- [x] 13.3 Create unit tests for Text with theme support
- [x] 13.4 Test component re-rendering on theme change
- [x] 13.5 Create visual regression tests for theme switching (Playwright)
- [x] 13.6 Verify components render correctly in both themes

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

- [x] 16.1 Run type checking (tsc --noEmit)
- [ ] 16.2 Run linting (eslint) - ESLint config migration needed
- [ ] 16.3 Run all tests and ensure >80% code coverage - Test environment config issue with React Native imports
- [x] 16.4 Build distribution and verify outputs
- [x] 16.5 Test in web Storybook with theme toggle - Fixed CSS import issue in preview.ts
- [ ] 16.6 Verify React Native compatibility
- [ ] 16.7 Validate openspec proposal with `openspec validate add-theme-support --strict`

## 17. Optional Enhancements

- [ ] 17.1 Consider CSS transitions for smooth theme switching (web)
- [ ] 17.2 Consider React Native DynamicColorIOS for iOS
- [ ] 17.3 Consider theme persistence in localStorage
- [ ] 17.4 Consider additional theme modes (high contrast, etc.)
