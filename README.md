# mrtnpar-design-system-task

Cross-platform design system library for React (web) and React Native (mobile). Provides reusable, accessible components with unified design tokens and visual consistency across platforms.

## Tech Stack

- **TypeScript** - Type-safe development
- **React + React Native** - Component frameworks
- **Tsup** - Bundler for ESM and CJS outputs
- **Style Dictionary** - Token transformation across platforms
- **Vitest** - Unit testing with coverage
- **Playwright** - Visual regression and accessibility testing
- **Changesets** - Versioning and publishing automation
- **Storybook** - Documentation and playground

## Getting Started

### Installation

```bash
yarn install
```

### Development

```bash
yarn dev          # Start development server with watch mode
yarn storybook     # Launch Storybook at http://localhost:6006
```

### Building

```bash
yarn build         # Build all packages
yarn build:tokens  # Generate design tokens
```

### Testing

```bash
yarn test            # Run unit tests
yarn test:coverage  # Run tests with coverage report
yarn test:visual    # Run visual regression tests
yarn test:a11y       # Run accessibility tests
```

### Linting & Formatting

```bash
yarn lint    # Run ESLint
yarn format   # Format code with Prettier
```

## Project Structure

```
src/
├── components/      # UI components (atoms, molecules, organisms)
├── tokens/         # Design token types
└── index.ts        # Main entry point

lib/                 # Shared utilities and hooks
tests/
├── unit/           # Unit tests
└── visual/          # Visual regression tests

tokens/              # Design tokens JSON files
├── colors.json
├── typography.json
├── spacing.json
└── ...

.storybook/          # Storybook configuration
```

## Component Usage

```tsx
import { Button } from 'mrtnpar-design-system-task'

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  )
}
```

## Design Tokens

```tsx
import { colors, spacing, typography } from 'mrtnpar-design-system-task/tokens'

function App() {
  return (
    <div style={{
      padding: spacing.md,
      color: colors.neutral[900],
      fontFamily: typography.fontFamily.sans,
    }}>
      Hello World
    </div>
  )
}
```

## Contributing

1. Follow the [Code Style](#code-style)
2. Add tests for new features
3. Ensure all tests pass
4. Add a changeset for versioning: `yarn changeset`
5. Submit a pull request

## Code Style

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Files**: kebab-case (e.g., `button.stories.tsx`)
- **Tests**: Append `.test.tsx` (e.g., `Button.test.tsx`)
- **Stories**: Append `.stories.tsx` (e.g., `Button.stories.tsx`)

## Testing

- Minimum 80% code coverage
- All tests must pass before merging
- Visual regression tests for UI changes
- Accessibility tests (WCAG 2.1 AA compliance)

## Versioning

We use Changesets for versioning. When making changes that affect the public API:

```bash
yarn changeset
# Select packages affected and type of change (patch/minor/major)
```

## License

MIT
