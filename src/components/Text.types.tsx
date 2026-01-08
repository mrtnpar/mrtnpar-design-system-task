import type { ReactNode } from "react";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "body-small"
  | "caption"
  | "label";

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  color?: string;
}
