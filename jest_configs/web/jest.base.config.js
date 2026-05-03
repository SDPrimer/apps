module.exports = {
  testEnvironment: "jsdom",
  rootDir: ".",
  testRegex: ["(/__tests__/.*|(\\.|/)(test))\\.(js?|jsx?|ts?|tsx?)$"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|@babel|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
  ],
  moduleNameMapper: {
    // Handle module aliases (mirrors tsconfig.json paths)
    "^@shared/(.*)$": "<rootDir>/packages/$1",
    "^@assets$": "<rootDir>/apps/web/src/assets",
    "^@assets/(.*)$": "<rootDir>/apps/web/src/assets/$1",
    "^@components$": "<rootDir>/apps/web/src/components",
    "^@data$": "<rootDir>/apps/web/src/search",
    "^@data/(.*)$": "<rootDir>/apps/web/src/search/$1",
    "^@providers$": "<rootDir>/apps/web/src/providers",
    "^@routes$": "<rootDir>/apps/web/src/routes",
    "^@screens$": "<rootDir>/apps/web/src/screens",
    "^@screens/(.*)$": "<rootDir>/apps/web/src/screens/$1",
    "^@uiStore$": "<rootDir>/apps/web/src/store/ui",
    "^@appStore$": "<rootDir>/apps/web/src/store/app",
    "^@services$": "<rootDir>/apps/web/src/services",
    "^@search$": "<rootDir>/apps/web/src/search",
    "^@testUtils$": "<rootDir>/apps/web/src/testUtils",
    // Handle static assets
    "\\.(css|less|scss|sass)$":
      "<rootDir>/jest_configs/web/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|svg|webp|ttf|woff|woff2|eot)$":
      "<rootDir>/jest_configs/web/__mocks__/fileMock.js",
  },
  setupFiles: [
    // Setup files if any
  ],
  setupFilesAfterEnv: ["<rootDir>/jest_configs/web/jest.js"],
  modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
};
// Note: The above configuration is for mobile (React Native) testing using Jest and Expo.
