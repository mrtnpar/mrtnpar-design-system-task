import type { StorybookConfig } from "@storybook/react-vite";
import reactNativeWeb from "vite-plugin-react-native-web";

const config: StorybookConfig = {
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
    options: {},
  },

  async viteFinal(config) {
    config.plugins = [...(config.plugins || []), reactNativeWeb()];

    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.extensions) {
      config.resolve.extensions = [];
    }
    config.resolve.extensions.push(
      ".web.tsx",
      ".web.ts",
      ".tsx",
      ".ts",
      ".jsx",
      ".js"
    );

    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    config.resolve.alias["react-native"] = "react-native-web";

    return config;
  },
};
export default config;
