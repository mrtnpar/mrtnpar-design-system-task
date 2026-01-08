import type { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export type ButtonProps = PropsWithChildren<{
	onClick?: () => void;
	variant: keyof typeof variances;
}>;

export const Button = ({
	children,
	onClick,
	variant = "primary",
}: ButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onClick}
			style={[styles.button, variances[variant].pane]}
		>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
});

const variances = {
	primary: StyleSheet.create({
		pane: {
			backgroundColor: "#007AFF",
		},
	}),
	secondary: StyleSheet.create({
		pane: {
			backgroundColor: "#5856D6",
		},
	}),
} as const;
