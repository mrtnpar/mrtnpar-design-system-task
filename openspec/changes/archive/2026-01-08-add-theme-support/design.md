# Design: Theme System Architecture

## Overview

This design document outlines the architecture for implementing theme switching support across the design system, including the ThemeProvider, useTheme hook, and theme tokens structure.

## System Architecture

### Component Relationships

```
┌─────────────────────────────────────────────────────┐
│                 Application                         │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │            ThemeProvider                      │  │
│  │  - Manages theme mode state                   │  │
│  │  - Detects system preference                  │  │
│  │  - Provides theme context to children         │  │
│  └───────────────────────────────────────────────┘  │
│                    │                                │
│                    │ ThemeContext                   │
│                    ▼                                │
│  ┌───────────────────────────────────────────────┐  │
│  │  Component A           Component B            │  │
│  │  ┌─────────────────┐  ┌─────────────────────┐ │  │
│  │  │   useTheme()    │  │    useTheme()       │ │  │
│  │  └─────────────────┘  └─────────────────────┘ │  │
│  │  - theme.colors    │  - theme.spacing         │  │
│  │  - setTheme        │  - theme.typography      │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘

                     Theme Tokens (Compile-time)
                     ├── lightTheme
                     └── darkTheme
```

### Theme Flow

1. **Initialization**: ThemeProvider mounts, detects system preference
2. **Resolution**: Theme mode (system/light/dark) determines actual theme
3. **Distribution**: Theme objects provided via Context to all descendants
4. **Consumption**: Components use useTheme() hook to access theme
5. **Updates**: Theme changes trigger re-renders only in consuming components

## Key Design Decisions

### 1. Context Splitting for Performance

**Decision**: Split theme context into two separate contexts:

- `ThemeProviderContext` - Internal, for provider state management only
- `ThemeContext` - Public, for theme consumption by components

**Rationale**:

- Components that consume theme don't need to know about provider internals
- Prevents unnecessary re-renders when provider state updates but theme doesn't
- Follows React best practices for context optimization

**Implementation**:

```typescript
const ThemeProviderContext = createContext<ThemeProviderState | null>(null);
const ThemeContext = createContext<ThemeValue | null>(null);
```

### 2. Theme Mode vs. Actual Theme

**Decision**: Track theme mode ("system" | "light" | "dark") separately from resolved theme object.

**Rationale**:

- "System" mode needs to resolve to actual theme based on preference
- Allows users to override system preference
- Clear separation of user intent vs. resolved state

**Implementation**:

```typescript
type ThemeMode = "system" | "light" | "dark";
type ActualTheme = "light" | "dark";

const resolvedTheme = useMemo(() => {
  if (mode === "system") {
    return systemPreference || "light";
  }
  return mode;
}, [mode, systemPreference]);
```

### 3. Compile-time Theme Objects

**Decision**: Theme objects are static constants defined at compile time, not runtime-constructed.

**Rationale**:

- Zero runtime overhead for theme construction
- Type-safe access to theme tokens
- Tree-shakeable if themes are split into separate files
- Consistent with existing token structure

**Implementation**:

```typescript
export const lightTheme: Theme = {
  colors: { primary: "#007AFF", ... },
  spacing: { xs: "4px", ... },
  // ... all tokens
} as const;

export const darkTheme: Theme = {
  colors: { primary: "#007AFF", ... },
  spacing: { xs: "4px", ... },
  // ... all tokens
} as const;
```

### 4. Fallback Behavior for Missing Provider

**Decision**: useTheme hook returns light theme when no ThemeProvider is present.

**Rationale**:

- Components work out-of-the-box for simpler use cases
- No runtime errors for missing provider
- Graceful degradation
- Warning in development to guide users

**Implementation**:

```typescript
const themeContext = useContext(ThemeContext);

if (!themeContext) {
  if (process.env.NODE_ENV === "development") {
    console.warn("useTheme: No ThemeProvider found. Using light theme.");
  }
  return {
    theme: lightTheme,
    mode: "light",
    setTheme: () => {},
  };
}
```

### 5. Platform-Specific System Detection

**Decision**: Use different APIs for system preference detection on each platform.

**Web**: `window.matchMedia('(prefers-color-scheme: dark)')`

- Standard browser API
- Event listener for changes
- Works in all modern browsers

**React Native**: `useColorScheme` hook

- React Native built-in hook
- Automatically responds to device theme changes
- Works on both iOS and Android

### 6. Performance Optimizations

**Decision**: Implement multiple layers of optimization to minimize re-renders.

**Optimizations**:

1. **Memoized theme objects**: Theme objects only recreated when theme changes
2. **Context splitting**: Provider updates don't affect consumers
3. **Stable references**: useCallback for setTheme, useMemo for theme objects
4. **Selective subscriptions**: Components only subscribe to ThemeContext

**Implementation**:

```typescript
const themeValue = useMemo(
  () => ({
    theme: resolvedTheme === "light" ? lightTheme : darkTheme,
    mode,
    setTheme,
  }),
  [resolvedTheme, mode, setTheme]
);
```

## Token Structure

### Theme Object Schema

```typescript
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    neutral: Record<string, string>;
  };
  spacing: Record<string, string>;
  typography: {
    fontFamily: Record<string, string>;
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
    lineHeight: Record<string, string>;
    letterSpacing: Record<string, string>;
  };
  borderRadius: Record<string, string>;
  shadow: Record<string, ShadowValue>;
}
```

### Color Mapping Strategy

**Light Theme**:

- Backgrounds: neutral.50, neutral.100, white
- Text: neutral.900, neutral.600, neutral.500
- Borders: neutral.200, neutral.300

**Dark Theme**:

- Backgrounds: neutral.900, neutral.800, neutral.700
- Text: neutral.50, neutral.300, neutral.400
- Borders: neutral.700, neutral.600

**Accent Colors**: Consistent across themes (primary, secondary, success, warning, danger)

## Migration Strategy

### Phase 1: Infrastructure

1. Create theme token structure
2. Implement ThemeProvider
3. Implement useTheme hook

### Phase 2: Component Updates

1. Update components incrementally (Button, Box, Text)
2. Maintain backward compatibility (default to light theme)
3. Add theme support without breaking existing usage

### Phase 3: Testing & Documentation

1. Add tests for theme functionality
2. Update documentation
3. Create examples and stories

### Backward Compatibility

- Components work without ThemeProvider (default to light theme)
- Existing component APIs unchanged
- Theme support is additive, not breaking

## Trade-offs

### Simplicity vs. Performance

**Trade-off**: Could implement simpler single-context approach, but opted for context splitting.

**Decision**: Prioritize performance for scale

- More complex implementation
- Better performance for large component trees
- Aligns with project's "bundle size optimization critical" constraint

### Runtime Flexibility vs. Compile-time Safety

**Trade-off**: Could support runtime theme customization, but opted for static themes.

**Decision**: Prioritize compile-time safety

- Simpler implementation
- Better TypeScript support
- Sufficient for typical use cases
- Could add runtime customization later if needed

### Automatic vs. Manual Theme Switching

**Trade-off**: Could default to system theme always, but opted for manual override support.

**Decision**: Support both automatic and manual

- Respects user system preference by default
- Allows manual override for accessibility or preference
- More flexible for different use cases

## Future Enhancements

### Potential Future Features

1. **Theme Transitions**: Smooth CSS transitions for theme switching (web)
2. **Theme Persistence**: Save theme preference in localStorage
3. **DynamicColorIOS**: Use iOS native color APIs for automatic theme switching
4. **Custom Themes**: Allow users to define custom theme objects
5. **Theme Variants**: Support for multiple theme variants (high contrast, etc.)
6. **Theme Composition**: Allow theme composition and extension

### Implementation Considerations

- Keep theme system extensible
- Maintain backward compatibility
- Consider performance impact of each enhancement
- Evaluate need vs. complexity for each feature

## Testing Strategy

### Unit Tests

- ThemeProvider state management
- useTheme hook behavior
- System detection logic (mocked)
- Theme object structure

### Integration Tests

- Component integration with themes
- Theme propagation through component tree
- Theme change re-renders

### Visual Regression Tests

- Component appearance in light theme
- Component appearance in dark theme
- Theme switching transitions (if implemented)

### Performance Tests

- Profiling with React DevTools
- Re-render counts on theme change
- Component tree depth impact
- Memory usage (cleanup verification)

## Conclusion

This design provides a performant, type-safe, and developer-friendly theme system that:

- Supports automatic system preference detection
- Allows manual theme override
- Minimizes re-renders through context splitting and memoization
- Maintains backward compatibility
- Aligns with project constraints (no external dependencies, optimized for scale)
