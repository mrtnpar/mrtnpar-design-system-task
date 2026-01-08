# Project Context

## Purpose

Cross-platform design system library for React (web) and React Native (mobile). Provides reusable, accessible components with unified design tokens and visual consistency across platforms.

## Tech Stack

- TypeScript
- React + React Native
- Tsup (Bundler - zero-config, outputs Web and Native-ready code)
- Style Dictionary (Token transformation - JSON to CSS, TS, Swift/Kotlin)
- Vitest + Playwright (Testing - real browser testing)
- Changesets (Versioning - automates NPM publishing and Semantic Versioning)
- Storybook (Documentation - visual docs and playground)

## Project Conventions

### Code Style

- PascalCase for components
- camelCase for functions/variables
- kebab-case for CSS tokens and file names
- Strict TypeScript with no implicit any
- Use native platform primitives (HTML elements for web, native components for RN)

### Architecture Patterns

- **Cross-platform separation**: Core logic in shared files, platform-specific implementations in `@platform` files
- **Theming**: All components must support both light and dark mode variants via theme tokens
- **Token-driven design**: All styling driven by Style Dictionary tokens, no hardcoded values
- **Component composition**: Prefer composition over inheritance
- **Accessibility first**: WCAG 2.1 AA compliance for all components

### Testing Strategy

- Unit tests with Vitist for component logic and utilities
- Visual regression tests with Playwright for web components
- Accessibility tests included in Playwright suite
- Manual testing in Storybook for RN components
- Minimum 80% code coverage requirement

### Git Workflow

- Feature branches from main
- Commit messages follow Conventional Commits format
- Changesets for versioning (add changeset with `yarn changeset` when changing components)
- PR required for all changes
- Automated publishing to NPM via changesets

## Domain Context

- Design system uses a flattened component structure for simplicity and maintainability
- Design tokens defined in JSON at `tokens/` directory
- Platform-specific code uses conditional exports
- RN components use React Native primitives, web components use HTML elements
- Shared utilities and hooks in `lib/` directory

## Important Constraints

- Must work on React 18+ and React Native 0.72+
- Bundle size optimization critical (tree-shakeable exports)
- No external runtime dependencies (peer dependencies only)
- iOS 14+, Android 8+ minimum for RN
- Modern browsers (last 2 versions) for web

## External Dependencies

- None at runtime (design tokens inline, no external API calls)
- Build tools: tsup, Style Dictionary CLI
- Storybook for documentation (dev-time only)
