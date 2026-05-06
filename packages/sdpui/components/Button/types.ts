import type { Button as TamaguiButton } from "tamagui";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonVariantStyles {
  backgroundColor?: string;
  color?: string;
  borderWidth?: number;
  borderColor?: string;
  hoverStyle?: {
    backgroundColor?: string;
    color?: string;
  };
}

export type ButtonProps = Omit<
  React.ComponentProps<typeof TamaguiButton>,
  "variant" | "size"
> & {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
};
