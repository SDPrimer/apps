# SDP UI Library

A UI component library built with Tamagui for both React Native and React applications.

## Installation

```bash
yarn add @sdp/ui
```

## Usage

### Basic Setup

Wrap your application with the SDPUIProvider:

```tsx
import { SDPUIProvider } from "@sdp/ui";

function App() {
  return <SDPUIProvider>{/* Your app content */}</SDPUIProvider>;
}
```

### Using Components

```tsx
import { Button, Text } from "@sdp/ui";

function Example() {
  return (
    <>
      <Text variant="heading">Hello World</Text>
      <Button variant="primary" size="md">
        Click Me
      </Button>
      <Button variant="outline" size="lg">
        Outline Button
      </Button>
    </>
  );
}
```

### Theming

The library includes light and dark themes by default. The theme automatically adapts to the system preference on native platforms.

You can also explicitly set a theme:

```tsx
import { SDPUIProvider } from "@sdp/ui";

function App() {
  return <SDPUIProvider theme="dark">{/* Your app content */}</SDPUIProvider>;
}
```

## Features

- ✅ Light and dark theme support
- ✅ Built with Tamagui for universal React/React Native support
- ✅ Animated components
- ✅ Variant-based component API
- ✅ TypeScript support
- ✅ ESModule and CommonJS builds

## Components

### Button

Props:

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- All standard button props

### Text

Props:

- `variant`: 'heading' | 'title' | 'body' | 'caption' | 'overline' (default: 'body')
- `color`: Any valid theme color
- All standard text props

## Development

```bash
# Build the package
yarn build

# Watch for changes
yarn build:watch

# Lint
yarn lint
```
