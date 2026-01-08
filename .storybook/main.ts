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

  framework: {
    name: "@storybook/react-vite",
    options: {
      viteFinal: async (config) => {
        config.resolve = {
          ...config.resolve,
          alias: {
            ...config.resolve?.alias,
            "react-native": "react-native-web",
          },
        };

        config.optimizeDeps = {
          ...config.optimizeDeps,
          exclude: ["react-native"],
        };

        return config;
      },
    },
  },
};
export default config;
