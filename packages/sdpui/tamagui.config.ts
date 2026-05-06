import { createTamagui, createShorthands } from "tamagui";
import { themes, Theme } from "./themes";

const shorthands = createShorthands({
  // Add shorthands here if needed
  br: "borderRadius",
  p: "padding",
  px: "paddingHorizontal",
  py: "paddingVertical",
  m: "margin",
  mx: "marginHorizontal",
  my: "marginVertical",
});

export const config = createTamagui({
  defaultTheme: "light" as Theme,
  themes,
  shorthands,
});

export type AppConfig = typeof config;

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
