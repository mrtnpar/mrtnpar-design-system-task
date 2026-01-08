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
		return config;
	},
};
export default config;
