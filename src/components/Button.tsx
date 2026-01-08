import type { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export type ButtonProps = PropsWithChildren<{
	onClick?: () => void;
	variant?: "primary" | "secondary";
}>;

export const Button = ({
	children,
	onClick,
	variant = "primary",
}: ButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onClick}
			style={[
				styles.button,
				variant === "primary" ? styles.primary : styles.secondary,
			]}
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
	primary: {
		backgroundColor: "#007AFF",
	},
	secondary: {
		backgroundColor: "#5856D6",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
});
