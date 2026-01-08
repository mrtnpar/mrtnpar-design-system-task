# Proposal: Add Cross-Platform Text Component

## Why

The design system currently lacks a dedicated Text component, leading to inconsistent text styling across components (hardcoded values in Button, Box), no central control over typography variants, and inaccessible semantic HTML on web. A unified Text component provides single source of truth for all typography, proper semantic HTML for accessibility, and consistent styling across platforms via design tokens.

## Motivation

The design system currently lacks a dedicated Text component, leading to:

- Inconsistent text styling across components (hardcoded values in Button, Box)
- No central control over typography variants
- Inaccessible semantic HTML on web (screen readers can't identify headings vs paragraphs)
- Duplication of text styling logic in multiple components

A unified Text component provides:

- Single source of truth for all typography
- Proper semantic HTML for accessibility on web
- Consistent styling across platforms via design tokens
- Extensible variance system for different text types (headings, body, caption, etc.)

## What Changes

- Create Text component with platform-specific implementations (web renders semantic HTML elements, native renders React Native Text)
- Define text variance system using variance object pattern matching existing components
- Implement platform-specific file structure (Text.tsx, Text.web.tsx, Text.native.tsx)
- Integrate with existing typography tokens from src/tokens/tokens.ts
- Support variants: h1, h2, h3, h4, h5, h6, body, body-small, caption, label

## Impact

- Affected specs: text-component (new)
- Affected code: src/components/Text.tsx, src/components/Text.web.tsx, src/components/Text.native.tsx, src/index.ts

## Alternatives Considered

1. **Continue using react-native-web aliasing only**
   - Pro: Simpler, single codebase
   - Con: No semantic HTML (always renders <div> or <span>)
   - Con: Poor accessibility and SEO
   - Rejected: Accessibility requirements in project.md

2. **Separate TextWeb and TextNative components**
   - Pro: Clear separation of concerns
   - Con: Developer must choose platform-specific import
   - Con: More imports to maintain
   - Rejected: DX overhead, violates unified component goal

3. **Single component with platform detection at runtime**
   - Pro: Single component API
   - Con: Both web and native code in bundle (increases size)
   - Con: Requires Platform module from react-native
   - Rejected: Bundle size optimization critical per project.md

## Risks and Mitigations

1. **Platform-specific code increases complexity**
   - Mitigation: Follow established @platform pattern from project.md
   - Mitigation: Clear documentation in comments
   - Mitigation: Comprehensive tests for both platforms

2. **Semantic HTML mapping may be ambiguous**
   - Mitigation: Define clear variant-to-element mapping in spec
   - Mitigation: Allow override via `as` prop for edge cases

3. **Typography tokens may be insufficient**
   - Mitigation: Add missing tokens (lineHeight, letterSpacing) if needed
   - Mitigation: Support style prop for customizations

## Breaking Changes

None - this is a new component addition
