import type { TextVariant, TextVariantStyles } from "./types";

export const textVariants: Record<TextVariant, TextVariantStyles> = {
  heading: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
  overline: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
};
