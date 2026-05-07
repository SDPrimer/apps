
import { Text as TamaguiText } from "tamagui";
import type { TextProps } from "./types";
import { textVariants } from "./consts";

export const Text = ({
  variant = "body",
  color,
  children,
  style,
  ...props
}: TextProps) => {
  const variantStyle = textVariants[variant];

  return (
    <TamaguiText
      style={[{ color: color ?? "$color" }, variantStyle, style]}
      {...props}
    >
      {children}
    </TamaguiText>
  );
};

export default Text;
