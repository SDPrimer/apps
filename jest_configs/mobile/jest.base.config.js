module.exports = {
  preset: "jest-expo",
  testRegex: ["(/__tests__/.*|(\\.|/)(test))\\.(js?|jsx?|ts?|tsx?)$"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/apps/mobile/$1",
  },
  setupFiles: [
    // Setup files if any
  ],
  setupFilesAfterEnv: ["<rootDir>/jest_configs/mobile/jest.js"],
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/packages/(.*)/dist",
  ],
};
// Note: The above configuration is for mobile (React Native) testing using Jest and Expo.
