import type { Text as TamaguiText } from "tamagui";

export type TextVariant = "heading" | "title" | "body" | "caption" | "overline";

export interface TextVariantStyles {
  fontSize: number | string;
  fontWeight: number | string;
  lineHeight: number | string;
  letterSpacing?: number | string;
  textTransform?: string;
}

export type TextProps = Omit<
  React.ComponentProps<typeof TamaguiText>,
  "theme"
> & {
  variant?: TextVariant;
  color?: string;
};
