## ADDED Requirements

### Requirement: Theme Token Structure

The theme tokens SHALL define separate token sets for light and dark themes, organizing colors, spacing, typography, and other design values by theme.

#### Scenario: Define light theme tokens

- **GIVEN** a theme tokens file
- **WHEN** inspecting the light theme
- **THEN** all design tokens are defined for light mode
- **AND** colors use light-appropriate values (light backgrounds, dark text)
- **AND** the structure matches the existing tokens/colors.json

#### Scenario: Define dark theme tokens

- **GIVEN** a theme tokens file
- **WHEN** inspecting the dark theme
- **THEN** all design tokens are defined for dark mode
- **AND** colors use dark-appropriate values (dark backgrounds, light text)
- **AND** the structure mirrors the light theme

#### Scenario: Theme object structure

- **GIVEN** a theme object (light or dark)
- **WHEN** accessing theme properties
- **THEN** theme.colors provides color tokens
- **AND** theme.spacing provides spacing tokens
- **AND** theme.typography provides typography tokens
- **AND** theme.borderRadius provides border radius tokens
- **AND** theme.shadow provides shadow tokens

#### Scenario: Color token organization

- **GIVEN** theme colors for light mode
- **WHEN** inspecting color tokens
- **THEN** primary color is defined (e.g., #007AFF)
- **AND** secondary color is defined (e.g., #5856D6)
- **AND** success, warning, danger colors are defined
- **AND** neutral color scale (50-900) is defined

#### Scenario: Dark mode color inversion

- **GIVEN** light and dark theme color tokens
- **WHEN** comparing neutral colors
- **THEN** dark mode background is darker (e.g., neutral.900 instead of neutral.50)
- **AND** dark mode text is lighter (e.g., neutral.50 instead of neutral.800)
- **AND** accent colors remain consistent between themes

### Requirement: Neutral Color Mapping for Themes

The theme tokens SHALL provide appropriate neutral color mappings for backgrounds, text, borders, and other UI elements in both light and dark modes.

#### Scenario: Light mode background colors

- **GIVEN** the light theme
- **WHEN** selecting a background color
- **THEN** primary background uses neutral.50 (#F9FAFB)
- **AND** card/surface backgrounds use neutral.100 (#F3F4F6)
- **AND** input backgrounds use white or neutral.50

#### Scenario: Dark mode background colors

- **GIVEN** the dark theme
- **WHEN** selecting a background color
- **THEN** primary background uses neutral.900 (#111827)
- **AND** card/surface backgrounds use neutral.800 (#1F2937)
- **AND** input backgrounds use neutral.700 (#374151)

#### Scenario: Light mode text colors

- **GIVEN** the light theme
- **WHEN** selecting text color
- **THEN** primary text uses neutral.900 (#111827)
- **AND** secondary text uses neutral.600 (#4B5563)
- **AND** muted text uses neutral.500 (#6B7280)

#### Scenario: Dark mode text colors

- **GIVEN** the dark theme
- **WHEN** selecting text color
- **THEN** primary text uses neutral.50 (#F9FAFB)
- **AND** secondary text uses neutral.300 (#D1D5DB)
- **AND** muted text uses neutral.400 (#9CA3AF)

#### Scenario: Light mode border colors

- **GIVEN** the light theme
- **WHEN** selecting a border color
- **THEN** borders use neutral.200 (#E5E7EB) or neutral.300 (#D1D5DB)
- **AND** borders are visible against light backgrounds

#### Scenario: Dark mode border colors

- **GIVEN** the dark theme
- **WHEN** selecting a border color
- **THEN** borders use neutral.700 (#374151) or neutral.600 (#4B5563)
- **AND** borders are visible against dark backgrounds

### Requirement: Theme Token Exports

The theme tokens SHALL be exported for use in the theme provider and for direct consumption by components.

#### Scenario: Export light theme object

- **GIVEN** the theme tokens file
- **WHEN** importing from the tokens module
- **THEN** lightTheme is exported as a constant
- **AND** it contains all light mode tokens

#### Scenario: Export dark theme object

- **GIVEN** the theme tokens file
- **WHEN** importing from the tokens module
- **THEN** darkTheme is exported as a constant
- **AND** it contains all dark mode tokens

#### Scenario: Export from main package

- **GIVEN** the design system package
- **WHEN** importing theme tokens from the package
- **THEN** tokens are available via ./tokens export
- **AND** both lightTheme and darkTheme are accessible

### Requirement: Token Type Safety

The theme tokens SHALL have TypeScript type definitions ensuring type safety when accessing theme values.

#### Scenario: Define Theme type

- **GIVEN** TypeScript configuration
- **WHEN** defining the theme type
- **THEN** Theme type includes colors, spacing, typography, borderRadius, shadow
- **AND** each property type matches the token structure

#### Scenario: Type-safe token access

- **GIVEN** a theme object with type Theme
- **WHEN** accessing theme.colors.primary
- **THEN** TypeScript provides autocomplete for available colors
- **AND** TypeScript catches typos in token names
- **AND** TypeScript infers the correct value type (string)

#### Scenario: Theme constant typing

- **GIVEN** the lightTheme and darkTheme constants
- **WHEN** they are defined
- **THEN** they are typed as const Theme
- **AND** TypeScript ensures they match the Theme structure

### Requirement: Maintain Consistency with Existing Tokens

The theme tokens SHALL maintain consistency with the existing tokens/colors.json and src/tokens/tokens.ts structure.

#### Scenario: Match existing color structure

- **GIVEN** the existing colors.json file
- **WHEN** creating theme color tokens
- **THEN** the structure matches colors.json exactly
- **AND** primary, secondary, success, warning, danger colors are included
- **AND** neutral scale 50-900 is included

#### Scenario: Match existing token organization

- **GIVEN** the existing src/tokens/tokens.ts
- **WHEN** creating theme tokens
- **THEN** spacing, typography, borderRadius, shadow are organized the same way
- **AND** nested structures match the existing format
- **AND** token names are consistent (xs, sm, md, lg, xl, etc.)

#### Scenario: Use existing token values as base

- **GIVEN** the existing token values
- **WHEN** defining light theme colors
- **THEN** colors match the existing colors.json values
- **AND** spacing matches the existing spacing tokens
- **AND** typography matches the existing typography tokens
