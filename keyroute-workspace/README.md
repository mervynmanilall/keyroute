# keyroute

Simple keyboard shortcuts for web applications.  
Framework-agnostic. Tiny. No dependencies.

---

## What is keyroute?

`keyroute` lets you map keyboard shortcuts to application actions in a simple and predictable way.

```ts
createKeyroute({
  'ctrl+s': () => save(),
  'esc': () => close()
});

## Installation

```bash
npm install keyroute

## Basic usage in Angular

```ts
import { createKeyroute } from 'keyroute';

const shortcuts = createKeyroute({
  'ctrl+s': () => console.log('Saved'),
  'esc': () => console.log('Closed')
});

// Call when you no longer need the shortcuts
shortcuts.destroy();
