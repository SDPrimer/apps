# AGENT.md

This file documents conventions, workflows, and agent skills for the **SDPrimer monorepo**.
AI coding agents should read this file before making any changes.

---

## Project Overview

| Item                | Detail                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Repo**            | `git@github.com:SDPrimer/apps.git`                                                                                                         |
| **Package manager** | Yarn 4 (Berry), `nodeLinker: node-modules`                                                                                                 |
| **Workspaces**      | `apps/web` (`web`), `apps/mobile` (`mobile`), `packages/constants` (`@shared/constants`), `packages/localization` (`@shared/localization`), `packages/sdpui` (`@shared/sdpui`) |
| **Language**        | TypeScript 5.x throughout                                                                                                                  |
| **Mobile**          | Expo (SDK ~54), Expo Router, React Native 0.81                                                                                             |
| **Web**             | React 19, Vite                                                                                                                             |

---

## Key Architectural Decisions

### Monorepo Structure

- Uses Yarn 4 workspaces with `node-modules` linker.
- Root `package.json` owns core dependencies (react, expo, typescript, jest, eslint).
- Apps declare only app-specific dependencies.
- Shared packages use `peerDependencies` for react/react-native.
- Path aliases: `@shared/*` maps to `packages/*/src`.

### Testing Strategy

- Jest orchestrator at root imports mobile/web configs.
- Mobile tests split into iOS/Android projects with platform-specific snapshots.
- Web tests use jsdom environment.
- Test files live in `__tests__/` adjacent to source.
- Snapshot testing for mobile components.

### TypeScript

- Root `tsconfig.base.json` shared across all workspaces.
- Each workspace extends base config and sets `"composite": true`.
- Root `tsconfig.json` uses project references for faster builds.
- Strict typing enforced via extended base config.

### Linting

- Single root `eslint.config.js` applies to all apps and packages.
- Uses typescript-eslint, react, jest, unicorn, prettier, and check-file plugins.
- Enforces filename conventions and test file placement.
- Configured via `yarn lint:staged` (used by husky hooks).

---

## Monorepo Structure

```
/
├── apps/
│   ├── mobile/          # sdprimer_mobile — Expo / React Native app
│   └── web/             # sdprimer_web — React web app (Vite)
├── packages/
│   ├── constants/       # @shared/constants
│   ├── localization/    # @shared/localization
│   └── sdpui/           # @shared/sdpui (Tamagui UI Library)
├── jest_configs/
│   ├── mobile/          # Shared Jest base config for mobile (iOS + Android)
│   └── web/             # Shared Jest base config for web
├── scripts/
│   └── run-staged-tests.sh
├── .husky/
│   ├── pre-commit       # lint:staged → prettier:staged → run-staged-tests
│   └── pre-push         # lint:staged → prettier:staged → run-pushed-files-tests
├── jest.config.js       # Root Jest orchestrator (imports mobile + web configs)
├── eslint.config.js     # Root ESLint config (covers all apps/* and packages/*)
├── tsconfig.base.json   # Shared TS compiler options
└── tsconfig.json        # Project references (mobile, web, packages)
```

---

## Monorepo Conventions

### Dependency Ownership

| Type                                                                         | Where declared                                                |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `react`, `react-dom`, `react-native`, `expo`, `typescript`, `jest`, `eslint` | **Root** `package.json` `dependencies` / `devDependencies`    |
| App-specific runtime deps                                                    | App's own `dependencies`                                      |
| App-specific test/build tooling                                              | App's own `devDependencies`                                   |
| Shared root deps used by an app                                              | App's `peerDependencies` (e.g. `react`, `jest`, `typescript`) |

> **Never duplicate** root-owned packages as `dependencies` or `devDependencies` inside an app workspace.

### File Conventions

#### Component Organization

- Mobile: Uses Expo Router (file-based routing in `app/` directory).
- Web: Standard React structure with `src/` directory.
- Tests: `__tests__/` directory alongside source files.
- Snapshots: `__tests__/__snapshots__/{ios|android}/` for mobile.

#### Styling

- Color scheme: Uses `useColorScheme` hook with light/dark mode support.
- Constants: Centralized in `@shared/constants` package.
- Images: Stored in `assets/images/` (mobile) and `public/` (web).

#### Import Patterns

```typescript
// Shared packages
import { Constants } from "@shared/constants";
import { useTranslation } from "@shared/localization";

// Relative imports within same workspace
import Component from "../components/Component";

// Assets (mobile)
import icon from "../assets/images/icon.png";
```

---

## Agent Workflow

After completing edits, always verify:
1. **Lint**: `npx eslint <changed-files>` — fix all errors
2. **Format**: `npx prettier --check <changed-files>` — run `npx prettier --write <changed-files>` to fix
3. **Tests**: `yarn test --no-coverage` — ensure all tests pass

Never commit until lint + format + tests are clean.

---

## Common Commands

```bash
# Setup
yarn install:all   # Installs deps and builds shared packages

# Development
yarn dev:web       # Start Vite dev server
yarn dev:ios       # Start Expo dev client for iOS
yarn dev:android   # Start Expo dev client for Android

# Building
yarn build:packages    # Builds @shared/constants, @shared/localization, and @shared/sdpui
yarn build:web         # Production web build
yarn build:ios         # iOS app build (requires Xcode)
yarn build:android     # Android app build (requires Android Studio)

# Testing
yarn test              # Runs tests in watch mode
yarn test:ci           # Runs all tests once (no watch)
yarn test:coverage     # Generates coverage report
yarn test -- --selectProjects web-app      # Web only
yarn test -- --selectProjects mobile-ios   # iOS only

# Linting & Formatting
yarn lint:staged       # Lint and fix changed files (used by hooks)

# Workflows
make commit            # Interactive conventional commit helper
yarn clean             # Remove node_modules, dist, tsbuildinfo
make branch-clean      # Delete local branches tracking deleted remotes
```

---

## Troubleshooting

### Metro Bundler Issues (Mobile)

- Clear cache: `yarn start --clear`
- Reset project: Delete `node_modules` and reinstall.

### TypeScript Errors

- Ensure shared packages are built: `yarn build:packages`.
- Check `tsconfig.json` references are correct.

### Test Failures

- Run specific project: `yarn test -- --selectProjects <project-name>`.
- Update snapshots: `yarn test -u`.

---

## Antigravity Skills

> Skills are reusable instructions for the Antigravity AI coding agent.
> They are stored in the `.claude/skills/` directory.

- **[Commit Workflow](file:///.claude/skills/commit/SKILL.md)**: Guidelines for commits and branch naming.
- **[Monorepo Architect](file:///.claude/skills/monorepo/SKILL.md)**: Expertise in monorepo structure and optimization.
- **[Mobile Expert](file:///.claude/skills/mobile/SKILL.md)**: Detailed guidance for Expo and React Native development.
- **[Web Expert](file:///.claude/skills/web/SKILL.md)**: Expertise in React web development and modern UI/UX.
- **[Jira Management](file:///.claude/skills/jira/SKILL.md)**: Conventions for Jira issue creation and management.
- **[Pull Request Skill](file:///.claude/skills/pr/SKILL.md)**: Templates, rules, and **agent-led Jira automation** for PR workflows (`jira-pr-created`, `jira-pr-merged`).
- **[Caveman Mode](file:///.claude/skills/caveman/SKILL.md)**: Token-efficient communication mode.

### Core Repository Skills

#### skill: add-workspace

**Trigger:** Adding a new app or package workspace to the monorepo.

1. Create directory under `apps/` or `packages/`.
2. Set name to `sdprimer_<name>` (apps) or `@shared/<name>` (packages).
3. Set `"private": true`.
4. Use `peerDependencies` for shared root deps.
5. Extend `../../tsconfig.base.json`.
6. Add `jest.config.js` referencing shared bases.
7. Update root `tsconfig.json` and `jest.config.js`.

#### skill: run-tests

**Trigger:** Verifying changes.

- **Staged**: `bash scripts/run-staged-tests.sh`
- **Full**: `yarn test:ci`
- **Project**: `yarn test -- --selectProjects web-app`
- Files: `__tests__/*.test.ts(x)`

#### skill: add-test

**Trigger:** Adding new tests.

1. Path: `<source-dir>/__tests__/<Name>.test.tsx`.
2. Use `@testing-library/react` (web) or `@testing-library/react-native` (mobile).
3. Aim for ≥ 80% branch coverage.
