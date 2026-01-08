# Tasks: Setup React Native Web

## Tasks

- [ ] Install and configure react-native-web
  - Add react-native-web to package.json as a regular dependency
  - Verify version compatibility with installed react-native version
  - Run yarn install to fetch the dependency

- [ ] Configure Tsup aliasing for web builds
  - Modify tsup.config.ts to add esbuild alias configuration
  - Set up alias: 'react-native' → 'react-native-web' for web platform
  - Create separate build entry points or conditions for web vs native
  - Test that web build correctly resolves react-native imports

- [ ] Configure Storybook web aliasing
  - Update .storybook/main.js to add Vite resolve aliases
  - Set up alias: 'react-native' → 'react-native-web' for web Storybook
  - Ensure the alias doesn't affect native Storybook configuration
  - Verify web Storybook runs and can render RN components

- [ ] Validate build outputs
  - Build the web bundle and inspect output for correct module resolution
  - Build the native bundle and verify react-native (not web) is used
  - Check bundle sizes are reasonable for both platforms
  - Confirm no duplicate or conflicting module references

- [ ] Create example component for testing
  - Create a simple React Native component (e.g., Box, TextDisplay)
  - Write component using only RN APIs (View, Text, etc.)
  - Add the component to both web and native Storybook stories
  - Verify it renders correctly in both environments

- [ ] Update documentation
  - Document the react-native-web setup in README.md
  - Explain how the aliasing works and when it applies
  - Provide guidance on when to use .web.tsx vs .native.tsx files
  - Add troubleshooting section for common module resolution issues

- [ ] Add validation scripts (optional)
  - Create script to verify web bundle uses react-native-web
  - Create script to verify native bundle uses react-native
  - Add these to package.json as validation commands
  - Integrate into CI pipeline if available

- [ ] Testing verification
  - Run existing Playwright tests to ensure web components still work
  - Add a test that verifies RN component renders in browser
  - Test that native tests are not affected by the web setup
  - Verify Storybook for both platforms works without errors

- [ ] Final validation
  - Clean build (remove dist/ and rebuild)
  - Run yarn build and verify no errors
  - Start web Storybook and confirm RN components render
  - Start native Storybook and confirm components render
  - Test importing the library in a sample web app
  - Test importing the library in a sample RN app (if available)

## Validation Criteria

- [ ] Web bundle successfully aliases react-native to react-native-web
- [ ] Native bundle uses react-native without any web references
- [ ] Storybook web instance renders RN components as HTML elements
- [ ] Storybook native instance renders RN components as native elements
- [ ] Example component works identically on both platforms
- [ ] Documentation is clear and complete
- [ ] All existing tests continue to pass
- [ ] No regressions in build process or outputs
