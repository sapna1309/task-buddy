#!/bin/bash

BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Define allowed patterns (modify as per your requirements)
if [[ ! "$BRANCH_NAME" =~ ^(feature|bugfix|hotfix|release)\/[a-z0-9._-]+$ ]]; then
  echo "❌ Invalid branch name. Use: feature/branch-name or bugfix/branch-name"
  exit 1
fi

echo "✅ Branch name is valid!"
exit 0
