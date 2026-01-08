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

### Requirement: Dependency Availability

The package MUST include react-native-web as a runtime dependency for web consumers.

#### Scenario: Web consumer installs package

Given a web application installs the design system
When the package is imported in a web context
Then react-native-web is automatically available as a transitive dependency
And React Native components render correctly in the browser

### Requirement: Zero Runtime Dependencies

The build system MUST NOT include runtime dependencies in the output bundles.

#### Scenario: Build with dependencies

Given the package has dev dependencies (tsup, typescript, etc.)
When the build script runs
Then dev dependencies are not bundled into the output
And only peer dependencies (React, React Native) are required at runtime

### Requirement: React Native Web Alias

The build system MUST alias react-native imports to react-native-web when building for the web platform.

#### Scenario: Build web bundle with RN imports

Given a component imports `import { View, Text } from 'react-native'`
When the build runs for the web platform
Then the bundler resolves these imports to react-native-web
And the output uses HTML equivalents (View → div, Text → span/p)

#### Scenario: Build native bundle with RN imports

Given a component imports `import { View, Text } from 'react-native'`
When the build runs for the native platform
Then the bundler resolves these imports to react-native
And the output uses React Native primitives

### Requirement: Storybook Web Compatibility

The web Storybook configuration MUST support rendering React Native components through react-native-web aliasing.

#### Scenario: View RN component in web Storybook

Given a Storybook story uses a React Native component
When the story is viewed in the web Storybook instance
Then the component renders using HTML elements
And the visual output matches the design system specifications

#### Scenario: View RN component in native Storybook

Given a Storybook story uses a React Native component
When the story is viewed in the native Storybook instance
Then the component renders using React Native primitives
And the visual output matches native platform appearance

### Requirement: Build Configuration Management

The build configuration MUST maintain separate configurations for web and native builds while using the same source code.

#### Scenario: Web build configuration

Given a web build is triggered
When Tsup builds with web configuration
Then react-native imports are aliased to react-native-web
And the output targets browser environments

#### Scenario: Native build configuration

Given a native build is triggered
When Tsup builds with native configuration
Then react-native imports resolve to the actual react-native package
And the output targets React Native environments

### Requirement: Module Resolution Validation

The build system MUST provide validation to ensure correct module resolution for each platform.

#### Scenario: Validate web resolution

Given the project has React Native components
When a web build validation runs
Then all react-native imports are confirmed to resolve to react-native-web
And no direct react-native references remain in the web bundle

#### Scenario: Validate native resolution

Given the project has React Native components
When a native build validation runs
Then all react-native imports resolve to react-native
And no react-native-web references appear in the native bundle

### Requirement: Platform-Agnostic Component Development

Components written with React Native APIs MUST work on both platforms without modification, except where platform-specific code is explicitly required.

#### Scenario: Create cross-platform component

Given a developer creates a component using React Native primitives (View, Text, Image)
When the component is imported in both web and native applications
Then it renders correctly on both platforms
And no platform-specific conditional logic is required

#### Scenario: Platform-specific optimization

Given a component needs platform-specific optimization
When a developer creates a .web.tsx or .native.tsx file
Then the platform-specific file is used for that platform
And the shared code is used for the other platform

### Requirement: Documentation Update

The project documentation MUST explain the react-native-web setup and how to work with cross-platform components.

#### Scenario: Developer reads documentation

Given a new developer joins the project
When they read the setup documentation
Then they understand how react-native-web works
And they know how to write components that work on both platforms

