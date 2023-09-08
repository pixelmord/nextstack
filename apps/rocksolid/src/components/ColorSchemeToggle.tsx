import { Moon, Sun } from 'lucide-solid';
import { createEffect, createSignal } from 'solid-js';

import { initializecolorScheme } from '@/root';

import { IconButton } from './ui/icon-button';

export const ColorSchemeToggle = () => {
  const [colorScheme, setcolorScheme] = createSignal<string>(initializecolorScheme());

  createEffect(() => {
    const root = document.documentElement;
    if (colorScheme() === 'light') {
      root.dataset.colorMode = 'light';
      localStorage.setItem('colorScheme', 'light');
    } else {
      root.dataset.colorMode = 'dark';
      localStorage.setItem('colorScheme', 'dark');
    }
  });

  return (
    <IconButton
      onClick={() => setcolorScheme((t) => (t === 'light' ? 'dark' : 'light'))}
      variant="tertiary"
      aria-label="switch between light and dark mode"
    >
      {colorScheme() === 'light' ? <Sun /> : <Moon />}
    </IconButton>
  );
};
