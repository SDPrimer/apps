# AGENT.md

This file documents conventions, workflows, and agent skills for the **SDPrimer monorepo**.
AI coding agents should read this file before making any changes.

---

## Project Overview

| Item | Detail |
|---|---|
| **Repo** | `git@github.com:SDPrimer/apps.git` |
| **Package manager** | Yarn 4 (Berry), `nodeLinker: node-modules` |
| **Workspaces** | `apps/web` (`sdprimer_web`), `apps/mobile` (`sdprimer_mobile`), `packages/constants` (`@shared/constants`), `packages/localization` (`@shared/localization`) |
| **Language** | TypeScript 5.x throughout |
| **Mobile** | Expo (SDK ~54), Expo Router, React Native 0.81 |
| **Web** | React 19, CRA via CRACO |

---

## Monorepo Structure

```
/
├── apps/
│   ├── mobile/          # sdprimer_mobile — Expo / React Native app
│   └── web/             # sdprimer_web — React web app (CRACO)
├── packages/
│   ├── constants/       # @shared/constants
│   └── localization/    # @shared/localization
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

| Type | Where declared |
|---|---|
| `react`, `react-dom`, `react-native`, `expo`, `typescript`, `jest`, `eslint` | **Root** `package.json` `dependencies` / `devDependencies` |
| App-specific runtime deps | App's own `dependencies` |
| App-specific test/build tooling | App's own `devDependencies` |
| Shared root deps used by an app | App's `peerDependencies` (e.g. `react`, `jest`, `typescript`) |

> **Never duplicate** root-owned packages as `dependencies` or `devDependencies` inside an app workspace.

### TypeScript

- Every workspace `tsconfig.json` **must extend** `../../tsconfig.base.json` (or `../tsconfig.base.json` for packages).
- Every workspace must set `"composite": true` and `"noEmit": false` for project references to work.
- The root `tsconfig.json` lists all workspaces as `references`.
- The `@shared/*` path alias resolves to `packages/*/src` — use it to import from shared packages.

### ESLint

- There is **one** `eslint.config.js` at the repo root. Individual workspaces do **not** have their own ESLint config.
- Lint runs via `yarn lint:staged` (pre-commit / pre-push) using the root config.

### Testing

- Each workspace has a `jest.config.js` that spreads from the appropriate shared base in `jest_configs/`.
- **Mobile** exports two projects: `mobile-ios` and `mobile-android` (different snapshot resolvers).
- **Web** exports one project: `web-app`.
- The root `jest.config.js` imports and merges all workspace configs.
- Test files live in `__tests__/` directories adjacent to the code they test.
- Snapshots for mobile are split by platform under `__tests__/__snapshots__/ios/` and `__tests__/__snapshots__/android/`.

### Commit Workflow

Follow the detailed workflow in [.agent/skills/commit/COMMIT.md](file:///.agent/skills/commit/COMMIT.md):

1. **Branch**: `git checkout -b amitraikwar/{about-changes}`
2. **Stage**: `git add <files>`
3. **Commit**: `make commit` (interactive prompt)
4. **Detail**: `git commit --amend` to add requirements and detailed descriptions.

Pre-commit hooks run automatically: lint → prettier → staged tests.

---

## Common Commands

```bash
# Install all dependencies and build shared packages
yarn install:all

# Development
yarn dev:web          # Start web dev server
yarn dev:ios          # Start Expo on iOS
yarn dev:android      # Start Expo on Android

# Build
yarn build:web
yarn build:packages   # Build @shared/constants + @shared/localization

# Test
yarn test             # Run web + mobile tests (watch mode off in CI)
yarn test:ci          # Run all tests in-band (for CI)
yarn test:coverage    # Run with coverage report

# Lint
yarn lint:staged      # Lint changed files (used by git hooks)

# Commit
make commit           # Interactive conventional commit helper

# Cleanup
yarn clean            # Remove node_modules, dist, tsbuildinfo
make branch-clean     # Delete local branches tracking deleted remotes
```

---

## Antigravity Skills

> Skills are reusable instructions for the Antigravity AI coding agent.
> They are stored in the `.agent/skills/` directory.

- **[Commit Workflow](file:///.agent/skills/commit/COMMIT.md)**: Guidelines for commits and branch naming.
- **[Monorepo Architect](file:///.agent/skills/monorepo/MONOREPO.md)**: Expertise in monorepo structure and optimization.
- **[Mobile Expert](file:///.agent/skills/mobile/MOBILE.md)**: Detailed guidance for React Native and Expo development.
- **[Jira Management](file:///.agent/skills/jira/JIRA.md)**: Conventions for Jira issue creation and management.
- **[Pull Request Skill](file:///.agent/skills/pr/PR.md)**: Templates, rules, and **agent-led Jira automation** for PR workflows (`jira-pr-created`, `jira-pr-merged`).

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
