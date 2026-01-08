# Proposal: Setup React Native Web

## Summary

Configure the build system to use react-native-web, enabling React Native components to be rendered on the web platform through automatic aliasing and proper module resolution.

## Motivation

The project currently has react-native installed but lacks react-native-web. This means:

- React Native components cannot be rendered in web Storybook or web-based tests
- The cross-platform architecture cannot properly resolve platform-specific code for web builds
- Web consumers cannot use the design system's React Native components

React Native Web is the standard solution for rendering React Native components on the web, providing a layer that maps React Native primitives (View, Text, etc.) to HTML equivalents.

## Proposed Changes

1. **Install react-native-web** - Add as a dependency with proper version alignment
2. **Configure bundler aliases** - Set up module resolution to map `react-native` imports to `react-native-web` for web builds
3. **Update build configuration** - Configure Tsup and Storybook to properly handle the aliasing
4. **Ensure platform resolution** - Verify that conditional exports work correctly with the web layer

## Capabilities Affected

- build-system

## Alternatives Considered

- **Manual web components**: Build separate web versions of all components
  - More maintenance overhead
  - Duplicates logic and styling
  - Loses single-source-of-truth benefit

- **Custom web shim**: Build internal adapter layer
  - Reinvents the wheel (react-native-web is well-maintained)
  - Additional maintenance burden

## Risks and Mitigations

- **Version mismatch between react-native and react-native-web**
  - Mitigation: Use version constraints that ensure compatibility
  - Document version requirements clearly

- **Breaks existing builds**
  - Mitigation: Thorough testing of both web and native builds
  - Rollback plan if issues arise

- **Module resolution conflicts**
  - Mitigation: Test with various bundler configurations
  - Clear documentation of alias setup
