// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const react = require("eslint-plugin-react");
const jest = require("eslint-plugin-jest");
const tseslint = require("typescript-eslint");
const globals = require("globals");
const checkFile = require("eslint-plugin-check-file");
const eslintPluginUnicorn = require("eslint-plugin-unicorn");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = tseslint.config(
  eslintPluginUnicorn.default.configs.recommended,
  react.configs.flat["jsx-runtime"],
  ...tseslint.configs.recommended,
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
    plugins: { checkFile, jest },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.jest,
        ...globals.browser,
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
          ignore: ["^.*\\.(ts|js)$", "^\\+not-found\\.tsx$"],
        },
      ],
      "checkFile/folder-match-with-fex": [
        "error",
        {
          "*.test.{js,jsx,ts,tsx}": "{apps,packages}/**/__tests__/",
        },
      ],
      "checkFile/filename-naming-convention": [
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
      "**/jest_configs/**/*",
      "**/*.config.js",
      "**/.cz-config.js",
      "**/coverage/*",
    ],
  },
);
