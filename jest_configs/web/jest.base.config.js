module.exports = {
  testEnvironment: "jsdom",
  rootDir: ".",
  testRegex: ["(/__tests__/.*|(\\.|/)(test))\\.(js?|jsx?|ts?|tsx?)$"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|@babel|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
  ],
  moduleNameMapper: {
    // Handle module aliases
  },
  setupFiles: [
    // Setup files if any
  ],
  setupFilesAfterEnv: ["<rootDir>/jest_configs/web/jest.js"],
  modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
};
// Note: The above configuration is for mobile (React Native) testing using Jest and Expo.
