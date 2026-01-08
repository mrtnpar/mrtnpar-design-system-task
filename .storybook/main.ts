const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../tests/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: 'react',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
