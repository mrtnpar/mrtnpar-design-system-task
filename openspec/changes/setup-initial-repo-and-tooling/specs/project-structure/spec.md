# Spec: Project Structure

## ADDED Requirements

### Requirement: Directory Structure

The repository MUST follow a clear directory structure with flattened component organization and platform separation.

#### Scenario: Locate source code

Given the project structure is created
When the user navigates the repository
Then the `src/` directory contains all source code
And `src/components/` contains all UI components in a flattened structure
And `src/tokens/` contains design token types
And `lib/` contains shared utilities and hooks
And `tests/` contains test files
And `.storybook/` contains Storybook configuration

#### Scenario: Component organization

Given components use a flattened structure
Then components are organized directly under `src/components/`
And each component has its own directory
And components are organized alphabetically or by feature area

#### Scenario: Platform-specific files

Given a component needs platform-specific implementations
Then the web version uses the standard extension (e.g., `Button.tsx`)
And the React Native version uses `.native.tsx` extension
And shared logic is in a separate file with `Button.shared.tsx`

### Requirement: TypeScript Configuration

TypeScript MUST be configured using the @total-typescript/tsconfig preset for strict settings with proper path aliases.

#### Scenario: Strict type checking

Given a `tsconfig.json` extends the @total-typescript/tsconfig preset
When TypeScript compiles
Then all strict type checking settings are enabled via the preset
And type errors cause compilation to fail

#### Scenario: Path aliases

Given the tsconfig includes path mappings
When a file imports from an alias
Then `@/components` resolves to `src/components`
And `@/lib` resolves to `lib`
And `@/tokens` resolves to `src/tokens`

### Requirement: Package.json Scripts

The package.json MUST include comprehensive scripts for all development tasks.

#### Scenario: Available scripts

Given the package.json is configured
When the user runs `yarn`
Then these scripts are available:

- `dev` - Start development server
- `build` - Build all packages
- `build:tokens` - Generate design tokens
- `test` - Run unit tests
- `test:coverage` - Run tests with coverage
- `test:visual` - Run visual regression tests
- `test:a11y` - Run accessibility tests
- `lint` - Run ESLint
- `format` - Run Prettier
- `storybook` - Launch web Storybook
- `storybook:native` - Launch React Native Storybook
- `changeset` - Create a changeset
- `version` - Bump version with changesets

### Requirement: File Naming Conventions

Files MUST follow consistent naming conventions to ensure discoverability.

#### Scenario: Component file naming

Given a component is created
Then the component file uses PascalCase (e.g., `Button.tsx`)
And test files append `.test.tsx` (e.g., `Button.test.tsx`)
And story files append `.stories.tsx` (e.g., `Button.stories.tsx`)
And native files append `.native.tsx` (e.g., `Button.native.tsx`)

#### Scenario: Utility file naming

Given a utility function is created
Then the file uses camelCase (e.g., `formatDate.ts`)
And types are defined in the same file or separate `.types.ts`

#### Scenario: Token file naming

Given design tokens are defined
Then token files use kebab-case (e.g., `colors.json`, `typography.json`)
And generated token files follow platform conventions

### Requirement: Git Configuration

Git MUST be configured with appropriate ignores and hooks.

#### Scenario: .gitignore configuration

Given a .gitignore file exists
Then it excludes:

- `node_modules/`
- `dist/`
- `build/`
- `.next/`
- `.turbo/`
- `.env`
- `coverage/`
- `.DS_Store`
- `*.log`

#### Scenario: Pre-commit hooks

Given husky is configured for pre-commit hooks
When a commit is made
Then lint-staged runs on staged files
And Prettier formats modified files
And ESLint checks for errors
And commits with errors are blocked
