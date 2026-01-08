import type { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export type BoxProps = PropsWithChildren<{
	title?: string;
	variant?: "primary" | "secondary";
}>;

export const Box = ({ children, title, variant = "primary" }: BoxProps) => {
	return (
		<View style={[styles.box, variant === "secondary" && styles.boxSecondary]}>
			{title && <Text style={styles.title}>{title}</Text>}
			{children && <Text style={styles.content}>{children}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		padding: 16,
		borderRadius: 8,
		backgroundColor: "#007AFF",
		minHeight: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	boxSecondary: {
		backgroundColor: "#5856D6",
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
});
