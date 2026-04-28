const baseConfig = require("../../jest_configs/web/jest.base.config");

module.exports = {
  projects: [
    {
      ...baseConfig,
      displayName: "web-app",
      modulePathIgnorePatterns: [
        ...baseConfig.modulePathIgnorePatterns,
        "<rootDir>/apps/mobile",
        "<rootDir>/packages",
      ],
    },
  ],
};
