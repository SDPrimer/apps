/* eslint-disable */
const React = require("react");

const createTokens = (config) => config;
const createTheme = (name, def) => ({ name, ...def });
const createShorthands = (map) => map;
const createTamagui = (config) => ({ ...config });

// Props that are React Native specific and must not leak to DOM
const RN_PROPS = new Set([
  "testID",
  "style",
  "onPress",
  "hoverStyle",
  "defaultTheme",
  "backgroundColor",
  "color",
  "borderWidth",
  "borderColor",
  "paddingHorizontal",
  "paddingVertical",
  "borderRadius",
  "fontWeight",
  "margin",
  "marginHorizontal",
  "marginVertical",
  "padding",
  "fontSize",
  "systemTheme",
  "setTheme",
  "disableInjectCSS",
  "theme",
  "config",
]);

const cleanProps = (props) => {
  const out = {};
  for (const key of Object.keys(props)) {
    if (key === "testID") {
      out["data-testid"] = props[key];
    } else if (key === "children" || !RN_PROPS.has(key)) {
      out[key] = props[key];
    }
  }
  return out;
};

module.exports = {
  createTokens,
  createTheme,
  createShorthands,
  createTamagui,
  TamaguiProvider: ({ children, ...props }) =>
    React.createElement(
      "div",
      { ...cleanProps(props), "data-testid": "tamagui-provider" },
      children,
    ),
  Theme: ({ children, name, ...props }) =>
    React.createElement(
      "div",
      { ...cleanProps(props), "data-testid": "theme-" + (name || "default") },
      children,
    ),
  useTheme: () => ({}),
  useMedia: () => ({}),
  styled: (Component, config) => {
    const Comp = ({ children, ...props }) =>
      React.createElement("div", cleanProps(props), children);
    Comp.displayName =
      typeof Component === "string"
        ? Component
        : (Component?.displayName || "StyledComponent");
    return Comp;
  },
  Stack: ({ children, ...props }) =>
    React.createElement(
      "div",
      { ...cleanProps(props), "data-type": "stack" },
      children,
    ),
  Text: ({ children, ...props }) =>
    React.createElement(
      "span",
      { ...cleanProps(props), "data-type": "text" },
      children,
    ),
  Button: ({ children, ...props }) =>
    React.createElement("button", cleanProps(props), children),
  config: {},
};
