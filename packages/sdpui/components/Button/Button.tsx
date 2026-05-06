import { Button as TamaguiButton } from "tamagui";
import type { ButtonProps } from "./types";
import { buttonVariants, sizeMap } from "./consts";

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  const padding = sizeMap[size];
  const variantStyles = buttonVariants[variant];

  return (
    <TamaguiButton
      backgroundColor={variantStyles.backgroundColor}
      color={variantStyles.color}
      borderWidth={variantStyles.borderWidth}
      borderColor={variantStyles.borderColor}
      hoverStyle={variantStyles.hoverStyle}
      paddingHorizontal={padding}
      paddingVertical={padding}
      borderRadius={4}
      fontWeight="600"
      {...props}
    >
      {children}
    </TamaguiButton>
  );
};
