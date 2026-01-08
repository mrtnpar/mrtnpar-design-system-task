const config = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../tests/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
  ],

  framework: "@storybook/react-vite",
};
export default config;
