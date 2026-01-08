# Tasks: Setup Initial Repo and Tooling

## Tasks

- [x] Initialize project structure
    - Create directory structure: src/, tokens/, lib/, packages/, .storybook/, .vitest/, tests/
    - Install @total-typescript/tsconfig and configure tsconfig.json to extend the preset
    - Configure package.json with all scripts (build, dev, test, lint, storybook, changeset) using yarn

- [x] Set up build system with Tsup
    - Install tsup and configure for dual platform builds (web + React Native)
    - Create build entry points and output configuration
    - Configure conditional exports for platform-specific code
    - Validate build outputs for both platforms

- [x] Configure Style Dictionary for design tokens
    - Install @tokens-studio/sd-transforms and style-dictionary
    - Create token JSON structure with color, typography, spacing, and shadow tokens
    - Configure transformations for CSS, TypeScript, Swift, and Kotlin
    - Set up build script to generate platform-specific token files
    - Validate token generation across all platforms

- [x] Set up testing infrastructure
     - Install and configure Vitest with coverage reporting
     - Install React Testing Library for web components and React Native Testing Library for native components
     - Configure Testing Libraries with Vitest (happy-dom environment, custom render functions)
     - Install and configure Playwright for visual regression and accessibility testing
     - Create example component and test files
     - Configure coverage thresholds (80% minimum)
     - Run tests and verify coverage reporting

- [x] Initialize Storybook
    - Install @storybook/react and @storybook/react-native
    - Configure Storybook for web (main.js, preview.js)
    - Configure Storybook for React Native
    - Create example stories demonstrating component structure
    - Verify Storybook runs for both platforms

- [x] Configure Changesets for versioning
    - Install @changesets/cli and initialize
    - Configure changesets in package.json
    - Set up GitHub Actions workflow for automated publishing
    - Document changeset workflow in README

- [x] Set up linting and formatting
    - Install ESLint with TypeScript and React plugins
    - Install Prettier for code formatting
    - Configure .eslintrc.json and .prettierrc
    - Add lint and format scripts to package.json

- [x] Create comprehensive README
    - Document project purpose and tech stack
    - Explain architecture patterns and conventions
    - Provide setup and development instructions
    - Document testing and contribution guidelines

- [x] Configure Git tooling
    - Set up .gitignore for node_modules, build outputs, IDE files
    - Configure pre-commit hooks (lint-staged with eslint and prettier)
    - Set up commit message linting (commitlint with conventional commits)

- [x] Final validation
     - Run full build pipeline and verify outputs
     - Execute all tests and verify coverage (100% achieved)
     - Run Storybook and verify examples render correctly
     - Test changeset workflow
     - Verify all scripts work as expected
