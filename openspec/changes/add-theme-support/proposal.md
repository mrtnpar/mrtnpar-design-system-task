# Proposal: Add Theme Support with System/Light/Dark Modes

## Why

The design system currently lacks theme switching capabilities. Components have hardcoded colors and styles with no mechanism to switch between light and dark modes. Users increasingly expect dark mode support as a standard feature, and system theme preference detection is essential for modern applications. A theme system will enable automatic theme switching based on system preferences while allowing manual overrides, with performance optimizations to prevent unnecessary re-renders.

## Motivation

The design system currently has:

- No theme switching mechanism (components are hardcoded)
- No support for dark mode
- No system preference detection
- No way for applications to control theme
- Missing theme definitions in tokens

Adding theme support will provide:

- Automatic theme switching based on system preferences
- Manual theme override capabilities (system/light/dark)
- Consistent theme application across all components
- Performant theme context with minimal re-renders
- Proper theme token definitions in the token system

## What Changes

- Create ThemeProvider component with React Context for theme state management
- Add useTheme hook for components to access current theme
- Define light and dark theme token sets in tokens directory
- Implement system preference detection for web (matchMedia) and React Native (useColorScheme)
- Add ThemeProvider wrapper component for app-level theme control
- Update existing components (Button, Box, Text) to use theme-aware tokens
- Ensure performance optimizations (memoization, context splitting, minimal re-renders)

## Impact

- Affected specs: theme-provider, theme-tokens, use-theme (all new)
- Affected code: src/components/ThemeProvider.tsx, src/hooks/useTheme.ts, src/tokens/themes.ts, existing component files (Button.tsx, Box.tsx, Text.\*.tsx)
- Package exports: Add ThemeProvider, useTheme, and theme tokens to public API

## Alternatives Considered

1. **CSS variables with data-attributes (web only)**
   - Pro: Leverages browser CSS variable switching, performant
   - Con: Doesn't work with React Native StyleSheet
   - Con: Harder to control theme programmatically
   - Rejected: Cross-platform requirement

2. **Inline theme prop on every component**
   - Pro: Simple, no context needed
   - Con: Prop drilling throughout component tree
   - Con: Difficult to manage globally
   - Con: Performance overhead from repeated prop passing
   - Rejected: Poor developer experience

3. **Third-party theme library (e.g., styled-components, emotion)**
   - Pro: Battle-tested solutions
   - Con: Adds runtime dependency (violates project constraint)
   - Con: Bundle size increase
   - Con: Overkill for simple theme switching
   - Rejected: External dependencies constraint

4. **Class name-based theming**
   - Pro: CSS-in-JS solution, familiar to web devs
   - Con: Doesn't work with React Native StyleSheet
   - Con: Requires runtime class resolution
   - Rejected: Cross-platform requirement

5. **Selected Approach: React Context with optimized theme provider**
   - Pro: Native React solution, no dependencies
   - Pro: Works across web and React Native
   - Pro: Can be highly optimized with memoization
   - Pro: Easy to use (single provider at app root)
   - Pro: Theme tokens are compile-time constants
   - Con: Requires careful optimization to prevent re-renders
   - Mitigation: Context splitting, useMemo, stable references

## Risks and Mitigations

1. **Performance impact from context updates**
   - Mitigation: Split context into provider and consumer contexts
   - Mitigation: Use useMemo for theme object to ensure stable references
   - Mitigation: Only re-render components that actually consume theme context
   - Mitigation: Benchmark with React DevTools Profiler

2. **System preference detection inconsistencies**
   - Mitigation: Test on multiple platforms (iOS, Android, browsers)
   - Mitigation: Use platform-specific APIs correctly
   - Mitigation: Provide fallback to light theme if detection fails

3. **Theme switching jarring visual experience**
   - Mitigation: Consider CSS transitions for web (optional enhancement)
   - Mitigation: Ensure theme changes are batched (React 18 automatic batching)

4. **Complexity in existing components**
   - Mitigation: Keep theme consumption simple via useTheme hook
   - Mitigation: Provide helper utilities for theme token access
   - Mitigation: Update components incrementally

5. **React Native StyleSheet doesn't support dynamic theming**
   - Mitigation: Use useTheme hook with conditional style selection
   - Mitigation: Pre-compute StyleSheet variants for light/dark modes
   - Mitigation: Use React Native's DynamicColorIOS for iOS (optional)

## Breaking Changes

None - this is a new feature addition. Existing components will maintain backward compatibility by defaulting to light theme if no ThemeProvider is present.

## Design Decisions

### Theme State Management

- Use React Context for theme state
- Theme values: "system", "light", "dark"
- System preference detection via platform APIs
- Manual override allowed at any level

### Token Structure

- Define separate token sets for light and dark themes
- Tokens organized by theme (theme.colors, theme.spacing, etc.)
- Theme tokens are compile-time constants (no runtime computation)
- Access via theme object: `theme.colors.primary`, `theme.colors.neutral[900]`

### Performance Optimizations

- Split context into ProviderContext (write) and ThemeContext (read)
- Use useMemo to memoize theme objects based on mode
- Provide stable reference to theme object
- Use useCallback for theme change handlers
- Only components using useTheme hook re-render on theme change
- Consider using React.memo for heavy components

### Component Integration

- Components use useTheme hook to access theme
- Theme-aware components default to light theme if no provider
- Simple migration path for existing components
- Example: `const theme = useTheme(); style={{ color: theme.colors.primary }}`
