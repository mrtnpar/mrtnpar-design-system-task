## ADDED Requirements

### Requirement: useTheme Hook API

The useTheme hook SHALL provide a simple API for components to access the current theme and theme setter function.

#### Scenario: Access current theme

- **GIVEN** a component using the useTheme hook
- **WHEN** the hook is called
- **THEN** it returns an object with theme property
- **AND** the theme property is the current theme object (light or dark)
- **AND** the theme object contains all design tokens

#### Scenario: Access theme setter

- **GIVEN** a component using the useTheme hook
- **WHEN** the hook is called
- **THEN** it returns an object with setTheme function
- **AND** setTheme accepts "system" | "light" | "dark" as argument
- **AND** setTheme updates the theme mode

#### Scenario: Access theme mode

- **GIVEN** a component using the useTheme hook
- **WHEN** the hook is called
- **THEN** it returns an object with mode property
- **AND** mode is "system" | "light" | "dark"
- **AND** mode reflects the current theme selection mode

#### Scenario: Destructure hook return value

- **GIVEN** a component using the useTheme hook
- **WHEN** the hook is called
- **THEN** the return value can be destructured: `const { theme, mode, setTheme } = useTheme()`
- **AND** each property is properly typed

### Requirement: Default Theme Fallback

The useTheme hook SHALL provide a default theme (light) when used outside of a ThemeProvider.

#### Scenario: Use hook without ThemeProvider

- **GIVEN** a component using useTheme hook
- **WHEN** the component renders without ThemeProvider
- **THEN** the hook returns the light theme object
- **AND** no errors are thrown
- **AND** setTheme function is a no-op or warns in development

#### Scenario: Provide helpful warning for missing provider

- **GIVEN** a component using useTheme hook without ThemeProvider
- **WHEN** the component renders
- **THEN** a warning is logged in development mode
- **AND** the warning suggests wrapping the app in ThemeProvider

### Requirement: Theme Access in Components

Components SHALL use the useTheme hook to access theme tokens for styling.

#### Scenario: Access color tokens

- **GIVEN** a component with useTheme hook
- **WHEN** accessing theme.colors.primary
- **THEN** the current theme's primary color is returned
- **AND** the color updates automatically when theme changes

#### Scenario: Access spacing tokens

- **GIVEN** a component with useTheme hook
- **WHEN** accessing theme.spacing.md
- **THEN** the current theme's medium spacing value is returned
- **AND** the spacing value is consistent across themes

#### Scenario: Access typography tokens

- **GIVEN** a component with useTheme hook
- **WHEN** accessing theme.typography.fontSize.md
- **THEN** the current theme's medium font size is returned
- **AND** the font size is appropriate for the current theme

#### Scenario: Access border radius tokens

- **GIVEN** a component with useTheme hook
- **WHEN** accessing theme.borderRadius.md
- **THEN** the current theme's medium border radius is returned
- **AND** the value is consistent across themes

### Requirement: Theme Change Propagation

The useTheme hook SHALL trigger re-renders in consuming components when the theme changes.

#### Scenario: Component re-renders on theme change

- **GIVEN** a component using useTheme hook
- **WHEN** the theme changes from light to dark
- **THEN** the component re-renders
- **AND** the theme object is updated with dark theme values
- **AND** the component displays using dark theme colors

#### Scenario: Component does not re-render on unrelated updates

- **GIVEN** a component using useTheme hook
- **WHEN** a parent component re-renders without theme change
- **THEN** the component using useTheme does not re-render
- **AND** the theme object reference remains stable

#### Scenario: Multiple components update on theme change

- **GIVEN** multiple components using useTheme hook
- **WHEN** the theme changes
- **THEN** all consuming components re-render
- **AND** all components display updated theme

### Requirement: useTheme Hook Exports

The useTheme hook SHALL be exported from the main package for consumer applications.

#### Scenario: Export useTheme from main package

- **GIVEN** the design system package
- **WHEN** importing from the package
- **THEN** useTheme is available as a named export
- **AND** it can be imported: `import { useTheme } from 'mrtnpar-design-system-task'`

### Requirement: TypeScript Type Safety

The useTheme hook SHALL provide TypeScript types for the return value and parameters.

#### Scenario: Type-safe return value

- **GIVEN** a component using useTheme hook with TypeScript
- **WHEN** the hook is called
- **THEN** TypeScript infers the correct type: { theme: Theme; mode: ThemeMode; setTheme: (mode: ThemeMode) => void }
- **AND** autocomplete is available for theme properties

#### Scenario: Type-safe theme object access

- **GIVEN** a theme object from useTheme hook
- **WHEN** accessing theme.colors.primary
- **THEN** TypeScript provides autocomplete for color names
- **AND** TypeScript catches typos in token names

#### Scenario: Type-safe setTheme parameter

- **GIVEN** the setTheme function from useTheme hook
- **WHEN** calling setTheme with a string
- **THEN** TypeScript only allows "system" | "light" | "dark"
- **AND** invalid values are caught at compile time

### Requirement: Performance Characteristics

The useTheme hook SHALL be performant and minimize unnecessary re-renders.

#### Scenario: Stable theme object reference

- **GIVEN** a component using useTheme hook
- **WHEN** the component re-renders without theme change
- **THEN** the theme object reference remains the same
- **AND** no new objects are created

#### Scenario: New reference on theme change

- **GIVEN** a component using useTheme hook
- **WHEN** the theme changes
- **THEN** the theme object reference changes
- **AND** the new theme object is memoized

#### Scenario: Minimal context subscriptions

- **GIVEN** the useTheme hook implementation
- **WHEN** the hook subscribes to context
- **THEN** it subscribes only to the necessary context
- **AND** it doesn't subscribe to provider context unless needed
