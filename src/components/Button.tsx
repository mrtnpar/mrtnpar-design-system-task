import type React from "react";

export interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = "primary",
}) => {
	return (
		<button
			onClick={onClick}
			type="button"
			style={{
				padding: "12px 24px",
				borderRadius: "8px",
				border: "none",
				cursor: "pointer",
				backgroundColor: variant === "primary" ? "#007AFF" : "#5856D6",
				color: "white",
				fontSize: "16px",
				fontWeight: "bold",
			}}
		>
			{children}
		</button>
	);
};
