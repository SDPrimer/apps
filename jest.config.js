/** @type {import('jest').Config} */
const webConfig = require("./apps/web/jest.config.cjs");

module.exports = {
  projects: [
    {
      displayName: "mobile-ios",
      testEnvironment: "jsdom",
      testMatch: ["**/apps/mobile/**/__tests__/**/*.test.[jt]s?(x)"],
      transformIgnorePatterns: [
        "node_modules/(?!(react-native|@react-native)/)",
      ],
      moduleNameMapper: {
        "^tamagui$": "<rootDir>/jest_configs/tamagui-mock.cjs",
      },
      setupFilesAfterEnv: ["<rootDir>/jest_configs/mobile/jest.js"],
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
    {
      displayName: "mobile-android",
      testEnvironment: "jsdom",
      testMatch: ["**/apps/mobile/**/__tests__/**/*.test.[jt]s?(x)"],
      transformIgnorePatterns: [
        "node_modules/(?!(react-native|@react-native)/)",
      ],
      moduleNameMapper: {
        "^tamagui$": "<rootDir>/jest_configs/tamagui-mock.cjs",
      },
      setupFilesAfterEnv: ["<rootDir>/jest_configs/mobile/jest.js"],
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
    {
      displayName: "web-app",
      ...webConfig.projects[0],
      testRegex: ["apps/web/.*__tests__/.*\\.test\\.(js?|jsx?|ts?|tsx?)$"],
    },
    {
      displayName: "sdpui-web",
      ...require("./jest_configs/web/jest.base.config"),
      testRegex: [
        "packages/sdpui/.*/__tests__/web/.*\\.test\\.(js?|jsx?|ts?|tsx?)$",
      ],
      setupFilesAfterEnv: ["<rootDir>/jest_configs/web/jest.js"],
      moduleNameMapper: {
        "^tamagui$": "<rootDir>/jest_configs/tamagui-mock.cjs",
      },
      transform: {
        "^.+\\.(ts|tsx)$": [
          "ts-jest",
          {
            tsconfig: {
              jsx: "react-jsx",
              esModuleInterop: true,
              allowSyntheticDefaultImports: true,
              baseUrl: ".",
            },
            diagnostics: false,
          },
        ],
      },
    },
    {
      displayName: "sdpui-mobile",
      testEnvironment: "jsdom",
      testMatch: ["**/packages/sdpui/**/__tests__/mobile/**/*.test.[jt]s?(x)"],
      transformIgnorePatterns: [
        "node_modules/(?!(react-native|@react-native)/)",
      ],
      moduleNameMapper: {
        "^tamagui$": "<rootDir>/jest_configs/tamagui-mock.cjs",
      },
      setupFilesAfterEnv: ["<rootDir>/jest_configs/mobile/jest.js"],
      transform: {
        "^.+\\.(ts|tsx)$": [
          "ts-jest",
          {
            tsconfig: {
              jsx: "react-jsx",
              esModuleInterop: true,
              allowSyntheticDefaultImports: true,
              baseUrl: ".",
            },
            diagnostics: false,
          },
        ],
      },
    },
  ],
};
