# Design: React Native Web Setup

## Architecture

### Module Resolution Strategy

The core challenge is enabling the same React Native component code to work on both web and native platforms without modifications. This is achieved through:

1. **Bundler Aliases**: Configure the bundler (Tsup for builds, Vite for Storybook) to resolve all `react-native` imports to `react-native-web` when building for the web platform.

2. **Conditional Exports**: Leverage package.json's conditional exports to resolve platform-specific files when needed, but default to shared code that works through the aliasing layer.

3. **No Platform-Specific Files**: With react-native-web, most components can be written once using React Native APIs and will work on both platforms. Platform-specific files (`.web.tsx`, `.native.tsx`) should only be used when truly necessary.

### Build Pipeline

```
Source Code (.tsx)
    ↓
Import: import { View } from 'react-native'
    ↓
─────────────────────────────────────
Web Build              Native Build
    ↓                       ↓
Alias resolves to       Resolves directly
react-native-web        react-native
    ↓                       ↓
HTML elements          Native components
```

### Dependency Considerations

- **react-native-web**: Runtime dependency for web builds
- **react-native**: Peer dependency, expected to be provided by the platform
- **Version Alignment**: Critical to ensure compatibility between react-native and react-native-web versions

### Configuration Points

1. **Tsup**: Configure esbuild `alias` option for web builds
2. **Storybook**: Configure Vite resolve alias for web stories
3. **Package.json**: Add react-native-web as a dependency (not devDependency) since it's used at runtime for web consumers

### Testing Strategy

- Verify web Storybook renders RN components using HTML equivalents
- Confirm Playwright tests can interact with RN components
- Ensure native builds are unaffected and continue to work
- Test module resolution in both environments

## Trade-offs

### Chosen: React Native Web with Aliasing

**Pros:**

- Single codebase for most components
- Leverages well-maintained standard solution
- Low maintenance overhead
- Consistent API across platforms

**Cons:**

- Additional runtime dependency for web consumers
- Some RN features may have limited web support
- Initial setup complexity

### Not Chosen: Separate Web Implementations

**Pros:**

- Native web optimization
- Full access to web-specific APIs
- No dependency on react-native-web

**Cons:**

- Code duplication
- Maintenance burden
- Risk of platform divergence
- Violates DRY principle

## Implementation Notes

1. The alias should be applied at the bundler level, not the import level, to maintain clean import statements
2. Platform detection in bundler configuration is key (web vs native targets)
3. Storybook configuration needs separate aliases for web and native stories
4. Consider adding a build flag or environment variable to control platform targets
