#!/bin/bash

echo "Copying eslint commit hook"
cp ./../scripts/githooks/commit-msg ./../.git/hooks/
chmod u+x ./../.git/hooks/commit-msg

echo "Copying test run before commit hook"
cp ./../scripts/githooks/pre-commit ./../.git/hooks/
chmod u+x ./../.git/hooks/pre-commit