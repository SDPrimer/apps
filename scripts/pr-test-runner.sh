#!/usr/bin/env bash
set -e

# Fetch origin/main just in case
git fetch origin main >/dev/null 2>&1

# Get changed files between main and HEAD
CHANGED_FILES=$(git diff --name-only origin/main...HEAD || echo "")

RUN_WEB=false
RUN_MOBILE=false
RUN_PACKAGES=false

for FILE in $CHANGED_FILES; do
  if [[ $FILE == packages/* ]]; then
    RUN_PACKAGES=true
  elif [[ $FILE == apps/web/* ]]; then
    RUN_WEB=true
  elif [[ $FILE == apps/mobile/* ]]; then
    RUN_MOBILE=true
  fi
done

echo "Changes detected:"
echo "- Packages: $RUN_PACKAGES"
echo "- Web: $RUN_WEB"
echo "- Mobile: $RUN_MOBILE"

if [ "$RUN_PACKAGES" = true ]; then
  echo "Packages changed. Running all builds and tests..."
  yarn build:packages
  yarn build:web
  yarn build:ios
  yarn build:android
  yarn test
  exit 0
fi

if [ "$RUN_WEB" = true ]; then
  echo "Web app changed. Running web builds and tests..."
  yarn build:web
  yarn test --selectProjects web-app
fi

if [ "$RUN_MOBILE" = true ]; then
  echo "Mobile app changed. Running mobile builds and tests..."
  yarn build:ios
  yarn build:android
  yarn test --selectProjects mobile-ios mobile-android
fi

if [ "$RUN_WEB" = false ] && [ "$RUN_MOBILE" = false ] && [ "$RUN_PACKAGES" = false ]; then
  echo "No app or package changes detected. Skipping builds and tests."
fi
