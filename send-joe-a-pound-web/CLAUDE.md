# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native/Expo application named "send-joe-a-pound-web" that supports iOS, Android, and web platforms. The project uses:
- **Expo SDK 53** with file-based routing via `expo-router`
- **React Native 0.79.5** with React 19.0.0
- **JavaScript** (TypeScript dependencies removed)
- **Metro bundler** for web builds with static output
- **New Architecture** enabled for React Native

## Development Commands

### Core Commands
- `npm start` - Start Expo development server
- `npm run web` - Start web development server
- `npm run ios` - Start iOS development server
- `npm run android` - Start Android development server
- `npm run lint` - Run ESLint with expo-config-eslint

### Project Management
- `npm run reset-project` - Reset to blank project template (moves existing code to app-example/)

## Architecture

### Directory Structure
- `app/` - Main application code using file-based routing
- `components/` - Reusable UI components including themed components
- `constants/` - App constants including Colors.ts for light/dark themes
- `hooks/` - Custom React hooks for theme management
- `assets/` - Static assets (images, fonts)

### Key Components
- **Themed Components**: `ThemedView`, `ThemedText` - automatically adapt to light/dark themes
- **Theme System**: Uses `useThemeColor` hook with Colors.ts for consistent theming
- **Path Aliases**: `@/*` resolves to project root for cleaner imports

### Configuration
- **ESLint**: Uses `eslint-config-expo` with flat config format
- **App Config**: `app.json` contains Expo configuration with typed routes enabled

### Platform Support
- **iOS**: Supports tablets, uses adaptive icons
- **Android**: Edge-to-edge display, adaptive icons
- **Web**: Static build output via Metro bundler

## Development Notes

- Main app entry point: `app/_layout.js` (Stack navigation)
- Home screen: `app/(tabs)/index.js` (simple Hello World page)
- Splash screen and icons are configured in `app.json`
- The project supports the new React Native architecture
- File-based routing with typed routes experimental feature enabled
- Previous TypeScript components have been removed - project now uses JavaScript only