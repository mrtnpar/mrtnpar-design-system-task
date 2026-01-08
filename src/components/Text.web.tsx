import type { CSSProperties, ReactNode } from "react";
import { forwardRef } from "react";
import { typography } from "../tokens/tokens";
import type { TextVariant } from "./Text.types";

export interface TextProps {
	children: ReactNode;
	variant?: TextVariant;
	style?: CSSProperties;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
	color?: string;
	className?: string;
}

const textVariants = {
	h1: {
		fontSize: typography.fontSize["4xl"],
		fontWeight: typography.fontWeight.bold,
		lineHeight: typography.lineHeight.tight,
		letterSpacing: typography.letterSpacing.tight,
	},
	h2: {
		fontSize: typography.fontSize["3xl"],
		fontWeight: typography.fontWeight.bold,
		lineHeight: typography.lineHeight.tight,
		letterSpacing: typography.letterSpacing.tight,
	},
	h3: {
		fontSize: typography.fontSize["2xl"],
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.tight,
		letterSpacing: typography.letterSpacing.normal,
	},
	h4: {
		fontSize: typography.fontSize.xl,
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.normal,
		letterSpacing: typography.letterSpacing.normal,
	},
	h5: {
		fontSize: typography.fontSize.lg,
		fontWeight: typography.fontWeight.medium,
		lineHeight: typography.lineHeight.normal,
		letterSpacing: typography.letterSpacing.normal,
	},
	h6: {
		fontSize: typography.fontSize.md,
		fontWeight: typography.fontWeight.medium,
		lineHeight: typography.lineHeight.normal,
		letterSpacing: typography.letterSpacing.normal,
	},
	body: {
		fontSize: typography.fontSize.md,
		fontWeight: typography.fontWeight.normal,
		lineHeight: typography.lineHeight.normal,
		letterSpacing: typography.letterSpacing.normal,
	},
	"body-small": {
		fontSize: typography.fontSize.sm,
		fontWeight: typography.fontWeight.normal,
		lineHeight: typography.lineHeight.normal,
		letterSpacing: typography.letterSpacing.normal,
	},
	caption: {
		fontSize: typography.fontSize.xs,
		fontWeight: typography.fontWeight.normal,
		lineHeight: typography.lineHeight.relaxed,
		letterSpacing: typography.letterSpacing.wide,
	},
	label: {
		fontSize: typography.fontSize.sm,
		fontWeight: typography.fontWeight.semibold,
		lineHeight: typography.lineHeight.normal,
		letterSpacing: typography.letterSpacing.wide,
	},
} as const;

type HtmlElementType =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "span"
	| "div";

export const variantToElement: Record<TextVariant, HtmlElementType> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	body: "p",
	"body-small": "p",
	caption: "span",
	label: "span",
};

const Text = forwardRef<HTMLElement, TextProps>(
	(
		{ children, variant = "body", style, as, color, className, ...props },
		ref,
	) => {
		const Component = as || variantToElement[variant];
		const variantStyles = textVariants[variant];

		return (
			<Component
				ref={ref as any}
				style={{
					fontFamily:
						'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
					...variantStyles,
					...(color && { color }),
					...style,
				}}
				className={className}
				{...props}
			>
				{children}
			</Component>
		);
	},
);

Text.displayName = "Text";

export { Text };
