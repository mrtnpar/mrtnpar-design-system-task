# Spec: React Native Web Build System

## MODIFIED Requirements

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

### Requirement: Dependency Availability

The package MUST include react-native-web as a runtime dependency for web consumers.

#### Scenario: Web consumer installs package

Given a web application installs the design system
When the package is imported in a web context
Then react-native-web is automatically available as a transitive dependency
And React Native components render correctly in the browser

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

## ADDED Requirements

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
