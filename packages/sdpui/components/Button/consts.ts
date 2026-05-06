import type { ButtonVariant, ButtonVariantStyles } from "./types";

export const buttonVariants: Record<ButtonVariant, ButtonVariantStyles> = {
  primary: {
    backgroundColor: "$backgroundHover",
    color: "$color",
    hoverStyle: {
      backgroundColor: "$backgroundPress",
    },
  },
  secondary: {
    backgroundColor: "transparent",
    color: "$colorHover",
    borderWidth: 1,
    borderColor: "$borderColor",
    hoverStyle: {
      backgroundColor: "$backgroundHover",
      color: "$color",
    },
  },
  outline: {
    backgroundColor: "transparent",
    color: "$color",
    borderWidth: 1,
    borderColor: "$borderColor",
    hoverStyle: {
      backgroundColor: "$backgroundHover",
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: "$colorHover",
    hoverStyle: {
      color: "$color",
      backgroundColor: "$backgroundHover",
    },
  },
};

export const sizeMap = {
  sm: 3,
  md: 5,
  lg: 7,
} as const;
