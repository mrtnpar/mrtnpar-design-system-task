const StyleDictionary = require('style-dictionary')

module.exports = {
  source: ['tokens/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/tokens/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            selector: ':root',
          },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'dist/tokens/ts/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
    android: {
      transformGroup: 'android',
      buildPath: 'dist/tokens/android/',
      files: [
        {
          destination: 'DesignTokens.xml',
          format: 'android/resources',
          packageName: 'com.mrtnpar.designsystem',
        },
      ],
    },
  },
}
