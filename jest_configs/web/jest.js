// Jest mocks for react web.
jest.useFakeTimers();
jest.mock("zustand", () => require("./__mocks__/zustand"));
jest.mock("react-native", () => ({
  useColorScheme: () => "light",
  Platform: { OS: "web", select: (obj) => obj.web || obj },
}));

// window.matchMedia mock
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Font source mocks - optional
let hasBungeeShade = false;
let hasReactHelmetAsync = false;
try {
  require.resolve("@fontsource/bungee-shade");
  hasBungeeShade = true;
} catch {
  hasBungeeShade = false;
}

try {
  require.resolve("react-helmet-async");
  hasReactHelmetAsync = true;
} catch {
  hasReactHelmetAsync = false;
}

if (hasBungeeShade) {
  jest.mock("@fontsource/bungee-shade", () => ({
    __esModule: true,
    default: "bungee-shade",
  }));
}

if (hasReactHelmetAsync) {
  jest.mock("react-helmet-async", () => {
    const React = require("react");
    return {
      Helmet: jest.fn(({ children }) =>
        React.createElement("div", null, children),
      ),
      HelmetProvider: () => jest.fn(),
    };
  });
}
