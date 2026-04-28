const baseConfig = require("../../jest_configs/mobile/jest.base.config");

module.exports = {
  projects: [
    {
      ...baseConfig,
      displayName: "mobile-ios",
      testEnvironment: "node",
      snapshotResolver: "../../jest_configs/mobile/jest.snapshot.resolver.ios.js",
    },
    {
      ...baseConfig,
      displayName: "mobile-android",
      testEnvironment: "node",
      snapshotResolver: "../../jest_configs/mobile/jest.snapshot.resolver.android.js",
    },
  ],
};
