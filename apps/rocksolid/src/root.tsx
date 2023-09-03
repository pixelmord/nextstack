// @refresh reload
import '@fontsource-variable/plus-jakarta-sans';
import './index.css';

import { Routes } from '@solidjs/router';
import { Menu } from 'lucide-solid';
import { createSignal, Suspense } from 'solid-js';
import { Body, FileRoutes, Head, Html, Meta, Scripts, Title } from 'solid-start';
import { ErrorBoundary } from 'solid-start/error-boundary';

import { ColorSchemeToggle } from './components/ColorSchemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Button } from './components/ui/button';
import { css } from './styled-system/css';
import { HStack } from './styled-system/jsx';
export const initializecolorScheme = () => {
  let colorScheme;
  if (typeof document !== 'undefined') {
    colorScheme = document.documentElement.dataset.colorMode as 'light' | 'dark';
  } else if (typeof localStorage !== 'undefined' && localStorage.getItem('colorScheme')) {
    colorScheme = localStorage.getItem('colorScheme') as 'light' | 'dark';
  } else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colorScheme = 'dark';
  } else {
    colorScheme = 'light';
  }
  return colorScheme;
};
export default function Root() {
  const [maximized, setMaximized] = createSignal(false);
  return (
    <Html lang="en">
      <Head>
        <Title>Rocksolid</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body
        class={css({
          bg: 'bg.canvas',
        })}
      >
        <Suspense>
          <ErrorBoundary>
            <header
              class={css({
                bg: 'bg.default',
                borderBottom: '1px solid',
                borderColor: 'border.default',
                zIndex: 30,
                position: 'fixed',
                width: '100%',
              })}
            >
              <nav class={css({ p: '0.75rem', display: 'flex', justifyContent: 'space-between' })}>
                <div>
                  <Button variant="tertiary" onClick={() => setMaximized(!maximized())}>
                    <Menu />
                  </Button>
                </div>
                <HStack>
                  <ColorSchemeToggle />
                  <Avatar>
                    <AvatarFallback>PA</AvatarFallback>
                    <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                  </Avatar>
                </HStack>
              </nav>
            </header>
            <div
              class={css({
                display: 'flex',
                width: '100%',
                pt: '4rem',
                overflow: 'hidden',
              })}
            >
              <aside
                data-active={maximized() ? 'true' : undefined}
                class={
                  'peer ' +
                  css({
                    display: { base: 'none', lg: 'flex' },
                    width: { base: '4rem', lg: '4rem' },
                    bg: 'bg.default',
                    borderRight: '1px solid',
                    borderColor: 'border.default',
                    pt: '4rem',
                    flexShrink: 0,
                    h: '100%',
                    zIndex: 20,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    transitionDuration: '100ms',
                    transitionProperty: 'width',
                    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
                    _active: {
                      width: { base: '16rem', lg: '16rem' },
                      display: { base: 'flex' },
                    },
                  })
                }
              >
                sidebar nav
              </aside>
              <div
                class={css({
                  zIndex: 10,
                  position: 'fixed',
                  display: 'none',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  bg: 'rgba(17,24,39,.9)',
                  _peerActive: {
                    display: { base: 'block', lg: 'none' },
                  },
                })}
              />
              <div
                class={css({
                  overflowY: 'auto',
                  marginLeft: { lg: '4rem' },
                  p: '0.75rem',
                  transitionDuration: '100ms',
                  transitionProperty: 'margin',
                  transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
                  _peerActive: {
                    marginLeft: { base: '0', lg: '16rem' },
                  },
                })}
              >
                <main class={css({})}>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </main>
                <footer>footer</footer>
              </div>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
