#!/usr/bin/env bash

# Determine if running for pre-commit (staged) or pre-push (pushed)
if [ "$1" == "--pushed" ]; then
  # For pre-push, compare current branch against origin/main
  current_branch=$(git rev-parse --abbrev-ref HEAD)
  if [ -z "$current_branch" ]; then
    echo "Could not determine current branch"
    exit 0
  fi
  diff_command="git diff --name-only origin/HEAD...HEAD"
else
  # Default to staged files for pre-commit
  diff_command="git diff --cached --name-only"
fi

changed_files=$($diff_command 2>/dev/null)

if [ -z "$changed_files" ]; then
  echo "No changed files detected. Skipping hooks."
  exit 0
fi

# Workspaces to track
declare -A workspaces=(
  ["apps/web"]="web"
  ["apps/mobile"]="mobile"
  ["packages/constants"]="@shared/constants"
  ["packages/localization"]="@shared/localization"
)

declare -A changed_workspaces
test_files=()

# Check which workspaces have changes and collect test files
for file in $changed_files; do
  for ws_path in "${!workspaces[@]}"; do
    if [[ $file == "$ws_path/"* ]]; then
      changed_workspaces[$ws_path]=${workspaces[$ws_path]}
    fi
  done
  
  # Logic to find test files related to the changed file
  dir=$(dirname "$file")
  if [[ $file == *"/__tests__/"* ]]; then
    test_dir="$dir"
  else
    test_dir="$dir/__tests__"
  fi
  
  if [ -d "$test_dir" ]; then
    found_tests=$(find "$test_dir" \( -name "*.test.ts" -o -name "*.test.tsx" \) -type f 2>/dev/null)
    if [ -n "$found_tests" ]; then
      test_files+=($found_tests)
    fi
  fi
done

echo "Running format:check..."
yarn format:check || exit 1

if [ ${#changed_workspaces[@]} -eq 0 ]; then
  echo "No workspace files changed. Skipping workspace-specific hooks."
else
  # Run hooks for each changed workspace
  for ws_path in "${!changed_workspaces[@]}"; do
    ws_name=${changed_workspaces[$ws_path]}
    echo "Changes detected in $ws_path ($ws_name)"
    
    echo "-> Running lint for $ws_name..."
    yarn workspace "$ws_name" lint || exit 1
    
    # Check if type-check script exists in workspace package.json before running
    if grep -q "\"type-check\"" "$ws_path/package.json"; then
      echo "-> Running type-check for $ws_name..."
      yarn workspace "$ws_name" type-check || exit 1
    fi
  done
fi

# Run tests if any test files are associated with the changes
if [ ${#test_files[@]} -gt 0 ]; then
  echo "Running tests for affected files..."
  # Remove duplicates
  unique_tests=($(echo "${test_files[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))
  yarn test "${unique_tests[@]}" || exit 1
else
  echo "No specific test files found for these changes."
fi

echo "All hooks passed successfully!"
exit 0
