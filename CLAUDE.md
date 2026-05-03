# CLAUDE.md

This file provides a high-level entry point for Claude-based tools working in this repository. 

## Overview

This is an Expo/React Native monorepo with shared TypeScript packages, using Yarn 4 workspaces. 
- **Mobile app**: Expo SDK 54, React Native 0.81
- **Web app**: React 19 via Vite
- **Shared packages**: `@shared/constants`, `@shared/localization`

## 📘 Primary Documentation

For comprehensive technical documentation, architectural decisions, file conventions, and agent-specific skills, always refer to:

👉 **[AGENT.md](file:///Users/mr.robot/z-stash/SDPrimer/toolbox/AGENT.md)**

## Essential Commands

These are the most common commands for getting started:

```bash
yarn install:all   # Initial setup (installs deps and builds packages)
yarn dev:web       # Start web dev server
yarn dev:ios       # Start Expo for iOS
yarn dev:android   # Start Expo for Android
yarn test          # Run tests in watch mode
make commit        # Conventional commit helper
```

## Antigravity Skills

Advanced agent instructions are modularized in the `.claude/skills/` directory. See **[AGENT.md](file:///Users/mr.robot/z-stash/SDPrimer/toolbox/AGENT.md)** for a full list of available skills and their documentation.

- [Commit Workflow](file:///.claude/skills/commit/SKILL.md)
- [Jira Management](file:///.claude/skills/jira/SKILL.md)
- [Pull Request Skill](file:///.claude/skills/pr/SKILL.md)
- [Monorepo Architect](file:///.claude/skills/monorepo/SKILL.md)
