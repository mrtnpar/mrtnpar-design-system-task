# build-system Specification

## Purpose
TBD - created by archiving change setup-initial-repo-and-tooling. Update Purpose after archive.
## Requirements
### Requirement: Dual Platform Bundling
The build system MUST support bundling TypeScript code for both web (React) and React Native platforms using Tsup.

#### Scenario: Build web components
Given a React component in `src/components/Button.tsx`
When the build script runs with `yarn build`
Then the component is bundled to `dist/web/Button.js` with ESM and CJS formats
And type definitions are generated in `dist/web/Button.d.ts`

#### Scenario: Build React Native components
Given a React Native component in `src/components/Button.native.tsx`
When the build script runs with `yarn build`
Then the component is bundled to `dist/native/Button.js`
And the bundle is optimized for React Native targets

### Requirement: Conditional Exports
The package.json MUST configure conditional exports to resolve platform-specific code at runtime.

#### Scenario: Import web component
Given a consumer imports `import { Button } from 'mrtnpar-design-system-task'`
When the import occurs in a web environment
Then the web-specific bundle is resolved
And the component uses HTML primitives

#### Scenario: Import React Native component
Given a consumer imports `import { Button } from 'mrtnpar-design-system-task'`
When the import occurs in a React Native environment
Then the native-specific bundle is resolved
And the component uses React Native primitives

### Requirement: Tree Shaking
The build output MUST be tree-shakeable to optimize bundle sizes for consumers.

#### Scenario: Import single component
Given a consumer imports `import { Button } from 'mrtnpar-design-system-task'`
When the consumer bundles their application
Then only the Button component and its dependencies are included in the final bundle
And unused components are eliminated from the bundle

### Requirement: Zero Runtime Dependencies
The build system MUST NOT include runtime dependencies in the output bundles.

#### Scenario: Build with dependencies
Given the package has dev dependencies (tsup, typescript, etc.)
When the build script runs
Then dev dependencies are not bundled into the output
And only peer dependencies (React, React Native) are required at runtime

