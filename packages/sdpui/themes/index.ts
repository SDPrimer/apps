// Theme definitions for SDP UI Library
import { createTokens, createTheme } from "tamagui";

// Define token scales
export const tokens = createTokens({
  // Size tokens
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
  },

  // Radius tokens
  radius: {
    0: 0,
    1: 2,
    2: 4,
    3: 6,
    4: 8,
    5: 12,
    6: 16,
    7: 20,
    8: 24,
    9: 28,
    10: 32,
  },

  // Space tokens
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
  },
});

// Light theme
export const lightTheme = createTheme({
  background: "#ffffff",
  backgroundHover: "#f8f9fa",
  backgroundPress: "#e9ecef",
  color: "#212529",
  colorHover: "#495057",
  colorPress: "#adb5bd",
  shadow: "#000000",
  borderColor: "#dee2e6",
  borderColorHover: "#adb5bd",
});

// Dark theme
export const darkTheme = createTheme({
  background: "#212529",
  backgroundHover: "#495057",
  backgroundPress: "#6c757d",
  color: "#f8f9fa",
  colorHover: "#e9ecef",
  colorPress: "#dee2e6",
  shadow: "#ffffff",
  borderColor: "#495057",
  borderColorHover: "#adb5bd",
});

// Theme mapping
export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type Theme = keyof typeof themes;
