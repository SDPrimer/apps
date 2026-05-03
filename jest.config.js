/** @type {import('jest').Config} */
const mobileConfig = require("./apps/mobile/jest.config");
const webConfig = require("./apps/web/jest.config.cjs");

module.exports = {
  projects: [
    ...mobileConfig.projects,
    ...webConfig.projects,
    // ...packageConfig.projects,
  ],
};
