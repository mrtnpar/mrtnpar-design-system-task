import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/components/ThemeProvider";

/** @type { import('@storybook/react').Decorator } */
const withThemeProvider = (Story, context) => {
	return (
		<ThemeProvider initialTheme="system">
			<Story />
		</ThemeProvider>
	);
};

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			theme: "light",
		},
	},
	decorators: [withThemeProvider],
};

export default preview;
