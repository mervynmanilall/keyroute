export type KeyrouteConfig = {
  [shortcut: string]: () => void;
};

type NormalizedShortcut = {
  key: string;
  ctrl: boolean;
  shift: boolean;
  alt: boolean;
  meta: boolean;
};

function normalizeShortcut(input: string): NormalizedShortcut {
  const parts = input.toLowerCase().split('+');

  return {
    key: parts.find(p => !['ctrl', 'shift', 'alt', 'cmd', 'meta'].includes(p)) || '',
    ctrl: parts.includes('ctrl'),
    shift: parts.includes('shift'),
    alt: parts.includes('alt'),
    meta: parts.includes('cmd') || parts.includes('meta')
  };
}

function isTypingInInput(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName.toLowerCase();
  return tag === 'input' || tag === 'textarea' || target.isContentEditable;
}

export function createKeyroute(config: KeyrouteConfig) {
  const routes = Object.entries(config).map(([shortcut, action]) => ({
    shortcut: normalizeShortcut(shortcut),
    action
  }));

  const handler = (event: KeyboardEvent) => {
    if (isTypingInInput(event.target)) return;

    for (const route of routes) {
      const match =
        route.shortcut.key === event.key.toLowerCase() &&
        route.shortcut.ctrl === event.ctrlKey &&
        route.shortcut.shift === event.shiftKey &&
        route.shortcut.alt === event.altKey &&
        route.shortcut.meta === event.metaKey;

      if (match) {
        event.preventDefault();
        route.action();
        break;
      }
    }
  };

  window.addEventListener('keydown', handler);

  return {
    destroy() {
      window.removeEventListener('keydown', handler);
    }
  };
}
