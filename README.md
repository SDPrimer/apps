# 🛡️ SDPrimer Toolbox

Welcome to the **SDPrimer Toolbox**, a high-performance monorepo housing the core applications and shared infrastructure for the SDPrimer ecosystem.

## 🏗️ Monorepo Overview

This repository uses **Yarn 4 (Berry)** workspaces to manage multiple applications and shared TypeScript packages with a focus on developer experience and agentic automation.

### 📱 Applications
- **[Mobile App](file:///Users/mr.robot/z-stash/SDPrimer/toolbox/apps/mobile)**: A cross-platform mobile application built with **Expo (SDK 54)** and **React Native 0.81**.
- **[Web App](file:///Users/mr.robot/z-stash/SDPrimer/toolbox/apps/web)**: A modern web application built with **React 19** and **Vite**.

### 📦 Shared Packages
- **@shared/constants**: Centralized business logic and UI constants.
- **@shared/localization**: Unified i18n and localization support.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v20+)
- Yarn 4 (`corepack enable`)
- Watchman (for mobile development)

### Setup
```bash
# Clone the repository
git clone git@github.com:SDPrimer/toolbox.git
cd toolbox

# Install dependencies and build shared packages
yarn install:all
```

### Development
```bash
yarn dev:web       # Start web development server
yarn dev:ios       # Start mobile app on iOS
yarn dev:android   # Start mobile app on Android
```

---

## 📘 Documentation

For detailed technical guides, architectural decisions, and agent-specific instructions, please refer to our primary documentation:

- 🛠️ **[AGENT.md](file:///Users/mr.robot/z-stash/SDPrimer/toolbox/AGENT.md)**: The technical source of truth for the repository.
- 🤖 **[CLAUDE.md](file:///Users/mr.robot/z-stash/SDPrimer/toolbox/CLAUDE.md)**: High-level entry point for AI assistants.

---

## 🛠️ Tech Stack

- **Core**: TypeScript 5.x
- **Mobile**: Expo Router, React Native
- **Web**: React 19, Vite
- **Tooling**: Jest (Testing), ESLint (Linting), Prettier (Formatting)
- **Workflow**: Conventional Commits via `make commit`

---

## 🤝 Contributing

We follow a strict **Conventional Commit** workflow tied to Jira tickets.

1. Create a branch: `amitraikwar/SDP-{ticket-number}/{description}`
2. Make your changes.
3. Commit using `make commit`.
4. Raise a Pull Request against `main`.

---

© 2026 SDPrimer Team. All rights reserved.
