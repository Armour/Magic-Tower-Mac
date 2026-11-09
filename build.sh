#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "🔨 Compiling MagicTower native macOS binary..."
swiftc src/main.swift \
  -O \
  -framework Cocoa \
  -framework WebKit \
  -o MagicTower.app/Contents/MacOS/MagicTower

echo "🎨 Updating app bundle timestamp and code signature..."
touch MagicTower.app
codesign --force --deep --sign - MagicTower.app

echo "✅ Build complete: $(pwd)/MagicTower.app"
