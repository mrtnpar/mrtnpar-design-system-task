import type { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export type BoxProps = PropsWithChildren<{
	title?: string;
	variant: keyof typeof variances;
}>;

export const Box = ({ children, title, variant = "primary" }: BoxProps) => {
	return (
		<View style={[styles.box, variances[variant].box]}>
			{title && <Text style={styles.title}>{title}</Text>}
			{children && <Text style={styles.content}>{children}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
		marginBottom: 8,
	},
	content: {
		fontSize: 14,
		color: "white",
	},
	box: {
		padding: 16,
		borderRadius: 8,
		minHeight: 60,
		justifyContent: "center",
		alignItems: "center",
	},
});

const variances = {
	primary: StyleSheet.create({
		box: {
			backgroundColor: "#007AFF",
		},
		title: {
			fontSize: 18,
			fontWeight: "bold",
			color: "white",
			marginBottom: 8,
		},
		content: {
			fontSize: 14,
			color: "white",
		},
	}),
	secondary: StyleSheet.create({
		box: {
			backgroundColor: "#5856D6",
		},
	}),
} as const;
