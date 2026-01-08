import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/tokens/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-native'],
  shims: true,
  target: 'es2020',
  banner: {
    js: '"use client";',
  },
  platform: 'node',
  esbuildOptions(options) {
    options.platform = 'node'
  },
  outDir: 'dist',
})
