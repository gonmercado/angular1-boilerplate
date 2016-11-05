#!/bin/bash

echo "Copying eslint commit hook"
cp ./../scripts/githooks/commit-msg ./../.git/hooks/
chmod u+x ./../.git/hooks/commit-msg