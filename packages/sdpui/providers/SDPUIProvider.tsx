import { TamaguiProvider, Theme } from "tamagui";
import { config } from "../tamagui.config";
import { useColorScheme } from "react-native";
import { useMemo } from "react";
import { themes } from "../themes";

export type SDPUIProviderProps = {
  children: React.ReactNode;
  theme?: keyof typeof themes;
};

const SdpuiProvider = ({ children, theme }: SDPUIProviderProps) => {
  // Detect system theme on native platforms
  const systemTheme = useColorScheme();
  const effectiveTheme = useMemo(() => {
    if (theme) return theme;
    return (systemTheme ?? "light") as keyof typeof themes;
  }, [theme, systemTheme]);

  return (
    <Theme name={effectiveTheme}>
      <TamaguiProvider
        config={config}
        defaultTheme={effectiveTheme}
        disableInjectCSS
      >
        {children}
      </TamaguiProvider>
    </Theme>
  );
};

export default SdpuiProvider;
