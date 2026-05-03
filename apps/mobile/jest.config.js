const baseConfig = require("../../jest_configs/mobile/jest.base.config");

module.exports = {
  projects: [
    {
      ...baseConfig,
      displayName: "mobile-ios",
      snapshotResolver: "<rootDir>/jest_configs/mobile/jest.snapshot.resolver.ios.js",
    },
    {
      ...baseConfig,
      displayName: "mobile-android",
      snapshotResolver: "<rootDir>/jest_configs/mobile/jest.snapshot.resolver.android.js",
    },
  ],
};
