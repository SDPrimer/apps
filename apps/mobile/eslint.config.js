// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const jest = require("eslint-plugin-jest");
const globals = require("globals");
const checkFile = require("eslint-plugin-check-file");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginUnicorn = require("eslint-plugin-unicorn");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginUnicorn.default.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    settings: {
      "import/resolver": {
        typescript: {
          project: ["tsconfig.json"],
        },
        node: {
          project: ["tsconfig.json"],
        },
      },
    },
    plugins: { "check-file": checkFile, jest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          ignore: ["^.*\.(ts|js)$", "^\\+not-found\\.tsx$"],
        },
      ],
      "check-file/folder-match-with-fex": [
        "error",
        {
          "*.test.{js,jsx,ts,tsx}": "{apps,packages}/**/__tests__/",
        },
      ],
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/__tests__/*.{js,jsx,ts,tsx}": "*.test",
        },
      ],
      "unicorn/prefer-module": "warn",
      "unicorn/prevent-abbreviations": [
        "warn",
        {
          checkDefaultAndNamespaceImports: false,
          ignore: [
            "^.+[Pp]rops$",
            "^[Uu]tils$",
            "^.+[Uu]tils$",
            "^[Aa]ssets$",
            "^[Cc]onfig$",
            "^[Pp]arams$",
            "^.+Params?$",
            "^.+[Rr]efs?$",
          ],
          allowList: {
            env: true,
            props: true,
            utils: true,
          },
        },
      ],
    },
  },
  {
    ignores: [
      "**/dist/*",
      "**/node_modules/*",
      "**/scripts/*",
      "**/__tests__/*",
      "**/android/**/*",
      "**/jest_configs/**/*",
      "**/ios/**/*",
      "**/*.config.js",
      "**/.cz-config.js",
      "**/.expo/*",
      "**/coverage/*",
      "**/packages/*",
    ],
  },
]);
