## ADDED Requirements

### Requirement: Text Component API

The Text component SHALL provide a unified interface for rendering text across web and React Native platforms with consistent styling based on typography variants.

#### Scenario: Render basic text with body variant

- **GIVEN** a Text component with no variant specified
- **WHEN** the component is rendered
- **THEN** text is rendered using the "body" variant styling

#### Scenario: Render heading variant

- **GIVEN** a Text component with variant="h1"
- **WHEN** the component is rendered on web
- **THEN** text is rendered in a semantic <h1> HTML element
- **AND** text uses h1 typography styling (fontSize: 36px, fontWeight: bold)

#### Scenario: Render caption variant

- **GIVEN** a Text component with variant="caption"
- **WHEN** the component is rendered
- **THEN** text uses caption styling (fontSize: 12px, lighter weight)
- **AND** text is accessible and readable

#### Scenario: Pass children as content

- **GIVEN** a Text component with string or React node children
- **WHEN** the component is rendered
- **THEN** the children are rendered as the text content

#### Scenario: Apply custom style

- **GIVEN** a Text component with a style prop
- **WHEN** the component is rendered
- **THEN** the custom styles are merged with variant styles
- **AND** variant styles take precedence for shared properties

### Requirement: Web Platform Implementation

The Text component on web SHALL render semantic HTML elements based on the variant to ensure proper accessibility and SEO.

#### Scenario: H1 variant renders h1 element

- **GIVEN** a Text component with variant="h1"
- **WHEN** the component is rendered on web
- **THEN** the text is wrapped in an <h1> element
- **AND** screen readers announce it as a level 1 heading

#### Scenario: Body variant renders p element

- **GIVEN** a Text component with variant="body"
- **WHEN** the component is rendered on web
- **THEN** the text is wrapped in a <p> element
- **AND** screen readers announce it as a paragraph

#### Scenario: Caption variant renders span element

- **GIVEN** a Text component with variant="caption"
- **WHEN** the component is rendered on web
- **THEN** the text is wrapped in a <span> element
- **AND** no heading semantics are applied

#### Scenario: Label variant renders label element

- **GIVEN** a Text component with variant="label"
- **WHEN** the component is rendered on web
- **THEN** the text is wrapped in a <label> element
- **AND** the element is semantically appropriate for form labels

#### Scenario: Override semantic element with as prop

- **GIVEN** a Text component with variant="body" and as="div"
- **WHEN** the component is rendered on web
- **THEN** the text is wrapped in a <div> element instead of <p>
- **AND** typography styling remains consistent with body variant

### Requirement: React Native Platform Implementation

The Text component on React Native SHALL render using the Text primitive from react-native with consistent typography styling across variants.

#### Scenario: All variants render Text component

- **GIVEN** a Text component with any variant (h1, body, caption, etc.)
- **WHEN** the component is rendered on React Native
- **THEN** the text is rendered using React Native's Text component
- **AND** the styling matches the variant definition

#### Scenario: Apply variant styling via StyleSheet

- **GIVEN** a Text component with variant="h1"
- **WHEN** the component is rendered on React Native
- **THEN** the StyleSheet creates appropriate styles (fontSize, fontWeight)
- **AND** the styles are applied to the Text component

### Requirement: Typography Variants

The Text component SHALL provide predefined typography variants that map to semantic elements and styling defined by the design system's typography tokens.

#### Scenario: Heading variants (h1-h6)

- **GIVEN** a Text component with variant set to h1, h2, h3, h4, h5, or h6
- **WHEN** the component is rendered
- **THEN** font size decreases progressively (h1 largest, h6 smallest)
- **AND** font weight is bold or semibold for all headings
- **AND** web renders appropriate heading element (h1-h6)
- **AND** native renders Text component with correct styling

#### Scenario: Body text variants

- **GIVEN** a Text component with variant="body"
- **WHEN** the component is rendered
- **THEN** font size is 16px (md from tokens)
- **AND** font weight is normal (400)
- **AND** line height is readable (approximately 1.5)

#### Scenario: Body small variant

- **GIVEN** a Text component with variant="body-small"
- **WHEN** the component is rendered
- **THEN** font size is 14px (sm from tokens)
- **AND** font weight is normal (400)

#### Scenario: Caption variant

- **GIVEN** a Text component with variant="caption"
- **WHEN** the component is rendered
- **THEN** font size is 12px (xs from tokens)
- **AND** font weight is medium (500)
- **AND** text is appropriately sized for captions

#### Scenario: Label variant

- **GIVEN** a Text component with variant="label"
- **WHEN** the component is rendered
- **THEN** font size is 14px (sm from tokens)
- **AND** font weight is semibold (600)
- **AND** styling is appropriate for form labels

### Requirement: Variance Object Pattern

The Text component SHALL use a variance object pattern consistent with existing components (Button, Box) to define and apply variant-specific styling.

#### Scenario: Variance object structure

- **GIVEN** the variance object defined in the Text component
- **WHEN** inspecting the object
- **THEN** each variant is a key in the object
- **AND** each variant contains style definitions using StyleSheet.create
- **AND** the structure matches Button/Box variance pattern

#### Scenario: Variant prop type safety

- **GIVEN** TypeScript type definitions for the Text component
- **WHEN** defining the variant prop
- **THEN** variant type is `keyof typeof variances`
- **AND** TypeScript provides autocomplete for valid variants
- **AND** invalid variants are caught at compile time

### Requirement: Design Token Integration

The Text component SHALL use design tokens from src/tokens/tokens.ts for all styling values, ensuring consistency with the design system.

#### Scenario: Use typography tokens

- **GIVEN** the Text component variance definitions
- **WHEN** defining variant styles
- **THEN** fontSize values reference typography.fontSize tokens
- **AND** fontWeight values reference typography.fontWeight tokens
- **AND** fontFamily references typography.fontFamily.sans

#### Scenario: Use color tokens

- **GIVEN** a Text component with a color prop
- **WHEN** applying text color
- **THEN** color values reference colors tokens if provided
- **AND** default color uses neutral token (e.g., neutral.800 for text)
