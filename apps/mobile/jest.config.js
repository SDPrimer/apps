const baseConfig = require("../../jest_configs/mobile/jest.base.config");

module.exports = {
  projects: [
    {
      ...baseConfig,
      displayName: "mobile-ios",
      moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
        "@/(.*)": "<rootDir>/apps/mobile/$1",
      },
      modulePathIgnorePatterns: [
        ...baseConfig.modulePathIgnorePatterns,
        "<rootDir>/packages",
        "<rootDir>/apps/web",
      ],
      snapshotResolver:
        "<rootDir>/jest_configs/mobile/jest.snapshot.resolver.ios.js",
    },
    {
      ...baseConfig,
      displayName: "mobile-android",
      haste: {
        defaultPlatform: "android",
      },
      setupFiles: [
        ...baseConfig.setupFiles,
        "<rootDir>/jest_configs/mobile/jest.android.js",
      ],
      moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
        "@/(.*)": "<rootDir>/apps/mobile/$1",
      },
      modulePathIgnorePatterns: [
        ...baseConfig.modulePathIgnorePatterns,
        "<rootDir>/packages",
        "<rootDir>/apps/web",
      ],
      snapshotResolver:
        "<rootDir>/jest_configs/mobile/jest.snapshot.resolver.android.js",
    },
  ],
};
