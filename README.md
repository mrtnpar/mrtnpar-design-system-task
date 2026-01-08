# mrtnpar-design-system-task

Cross-platform design system library for React (web) and React Native (mobile). Provides reusable, accessible components with unified design tokens and visual consistency across platforms.

## Tech Stack

- **TypeScript** - Type-safe development
- **React + React Native** - Component frameworks
- **React Native Web** - Enables React Native components to render on web platforms
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
import { Button } from "mrtnpar-design-system-task";

function App() {
  return (
    <Button variant="primary" onClick={() => console.log("clicked")}>
      Click me
    </Button>
  );
}
```

## React Native Web Support

This design system uses React Native Web to enable React Native components to work seamlessly on web platforms through automatic module aliasing.

### How It Works

- Components are written using React Native APIs (View, Text, StyleSheet, etc.)
- When building for web, `react-native` imports are automatically aliased to `react-native-web`
- This allows the same component code to render as HTML on web and as native components on mobile

### Consumer Setup

#### For Web Applications

If you're consuming this library in a web application (Next.js, Vite, Create React App, etc.), you need to configure your bundler to alias `react-native` to `react-native-web`:

**Vite / Vite-based frameworks:**

```js
// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
});
```

**Next.js:**

```js
// next.config.js
const config = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native": "react-native-web",
    };
    return config;
  },
};
module.exports = config;
```

**Webpack:**

```js
// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
};
```

#### For React Native Applications

No additional configuration is needed. Simply install the library and use the components as you would any other React Native component:

```tsx
import { Box } from "mrtnpar-design-system-task";

function App() {
  return (
    <Box title="Hello" variant="primary">
      This is a React Native Box
    </Box>
  );
}
```

### Platform-Specific Files

While most components work across both platforms through the aliasing mechanism, you may occasionally need platform-specific implementations. Use the following file extensions:

- `.native.tsx` / `.native.ts` - Used only in React Native (iOS/Android)
- `.web.tsx` / `.web.ts` - Used only in web browsers
- `.tsx` / `.ts` - Default, used on all platforms when platform-specific files don't exist

**Example:**

```
src/components/
  Button.tsx           # Default implementation
  Button.web.tsx       # Web-specific (optional)
  Button.native.tsx    # Native-specific (optional)
```

### Common Issues

#### Module Resolution Errors

If you see errors like `Module not found: Can't resolve 'react-native'` in your web application:

1. Ensure you have configured the alias in your bundler (see Consumer Setup above)
2. Verify that `react-native-web` is installed in your project:
   ```bash
   npm install react-native-web
   # or
   yarn add react-native-web
   ```
3. Clear your bundler cache and restart your dev server

#### TypeScript Errors

If TypeScript complains about missing `react-native` types:

```ts
// In your tsconfig.json
{
  "compilerOptions": {
    "types": ["react-native"],
    // ...other options
  }
}
```

#### Styling Issues

React Native Web uses a subset of CSS styles. If a style doesn't work on web:

1. Check the [React Native Web styling documentation](https://necolas.github.io/react-native-web/docs/styling/)
2. Consider using platform-specific files for web-specific styling
3. Use standard React Native style properties which are better supported across both platforms

## Design Tokens

```tsx
import { colors, spacing, typography } from "mrtnpar-design-system-task/tokens";

function App() {
  return (
    <div
      style={{
        padding: spacing.md,
        color: colors.neutral[900],
        fontFamily: typography.fontFamily.sans,
      }}
    >
      Hello World
    </div>
  );
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
