## ADDED Requirements

### Requirement: ThemeProvider Component

The ThemeProvider component SHALL provide theme context to all child components, managing theme state (system/light/dark) and detecting system preferences automatically.

#### Scenario: Wrap app with ThemeProvider

- **GIVEN** an application with ThemeProvider wrapping the root component
- **WHEN** the application renders
- **THEN** all child components have access to theme context
- **AND** the theme defaults to "system" mode

#### Scenario: Default to system theme

- **GIVEN** a ThemeProvider with no initial theme specified
- **WHEN** the provider mounts
- **THEN** the theme is set to "system"
- **AND** the actual rendered theme matches system preference

#### Scenario: Set initial theme

- **GIVEN** a ThemeProvider with initialTheme="dark"
- **WHEN** the provider mounts
- **THEN** the theme is set to "dark" mode
- **AND** components render using dark theme tokens

#### Scenario: Change theme programmatically

- **GIVEN** a ThemeProvider and a component with access to setTheme function
- **WHEN** setTheme("light") is called
- **THEN** the theme mode changes to "light"
- **AND** all consuming components re-render with light theme

#### Scenario: System theme detection on web

- **GIVEN** a web application with ThemeProvider in "system" mode
- **WHEN** the OS/system preference is dark mode
- **THEN** the theme automatically applies dark mode tokens
- **AND** theme updates when system preference changes

#### Scenario: System theme detection on React Native

- **GIVEN** a React Native application with ThemeProvider in "system" mode
- **WHEN** the device theme is dark mode
- **THEN** the theme automatically applies dark mode tokens
- **AND** theme updates when device theme changes

#### Scenario: Override system theme manually

- **GIVEN** a ThemeProvider in "system" mode
- **WHEN** setTheme("light") is called
- **THEN** the mode changes from "system" to "light"
- **AND** the theme ignores system preference
- **AND** components render using light theme regardless of system setting

#### Scenario: Switch back to system theme

- **GIVEN** a ThemeProvider in "light" mode
- **WHEN** setTheme("system") is called
- **THEN** the mode changes to "system"
- **AND** the theme respects system preference again

### Requirement: Theme Performance Optimization

The ThemeProvider SHALL be optimized to prevent unnecessary re-renders and ensure stable references for theme objects.

#### Scenario: Stable theme object reference

- **GIVEN** a ThemeProvider in "light" mode
- **WHEN** a component consumes the theme
- **THEN** the theme object reference remains stable across renders
- **AND** changing theme mode creates a new stable reference
- **AND** the reference doesn't change on unrelated re-renders

#### Scenario: Minimal re-renders on theme change

- **GIVEN** a component tree with ThemeProvider and multiple components
- **WHEN** the theme changes from light to dark
- **THEN** only components that consume useTheme re-render
- **AND** components not using theme context do not re-render

#### Scenario: Context splitting for performance

- **GIVEN** a ThemeProvider with context splitting
- **WHEN** components consume different contexts
- **THEN** provider context changes don't affect pure theme consumers
- **AND** theme context changes don't affect provider consumers

#### Scenario: Memoized theme computation

- **GIVEN** a ThemeProvider with light and dark token sets
- **WHEN** the theme mode is computed
- **THEN** the theme object is memoized based on mode
- **AND** theme object is only recreated when mode changes

### Requirement: Platform-Specific Theme Detection

The ThemeProvider SHALL detect system theme preferences using appropriate APIs for each platform (web matchMedia, React Native useColorScheme).

#### Scenario: Web platform uses matchMedia

- **GIVEN** a web application with ThemeProvider
- **WHEN** the provider initializes system detection
- **THEN** it uses window.matchMedia('(prefers-color-scheme: dark)')
- **AND** it listens for changes via addEventListener
- **AND** it cleans up listeners on unmount

#### Scenario: React Native uses useColorScheme

- **GIVEN** a React Native application with ThemeProvider
- **WHEN** the provider initializes system detection
- **THEN** it uses the useColorScheme hook from react-native
- **AND** it correctly responds to device theme changes

#### Scenario: Fallback to light theme on error

- **GIVEN** a ThemeProvider that fails to detect system theme
- **WHEN** the detection error occurs
- **THEN** the theme falls back to "light" mode
- **AND** components continue to render without errors

### Requirement: Theme Provider API

The ThemeProvider SHALL accept props for controlling initial theme and provide a clean API for theme management.

#### Scenario: Accept initialTheme prop

- **GIVEN** a ThemeProvider component
- **WHEN** rendering with initialTheme="dark"
- **THEN** the provider starts in dark mode
- **AND** TypeScript enforces valid theme values ("system" | "light" | "dark")

#### Scenario: Provider children are rendered

- **GIVEN** a ThemeProvider wrapping child components
- **WHEN** the provider renders
- **THEN** all child components are rendered normally
- **AND** theme context is available to all descendants

#### Scenario: Provider works without children (edge case)

- **GIVEN** a ThemeProvider with no children
- **WHEN** the provider renders
- **THEN** no errors occur
- **AND** the provider establishes theme context

### Requirement: Theme Provider Exports

The ThemeProvider SHALL be exported from the main package for consumer applications.

#### Scenario: Export ThemeProvider from main package

- **GIVEN** the design system package
- **WHEN** importing from the package
- **THEN** ThemeProvider is available as a named export
- **AND** it can be imported: `import { ThemeProvider } from 'mrtnpar-design-system-task'`
