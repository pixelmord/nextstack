// @refresh reload
import '@fontsource-variable/plus-jakarta-sans';
import './index.css';

import { SessionProvider } from '@solid-mediakit/auth/client';
import { Routes } from '@solidjs/router';
import { createSignal, Suspense } from 'solid-js';
import { Body, FileRoutes, Head, Html, Meta, Scripts, Title } from 'solid-start';
import { ErrorBoundary } from 'solid-start/error-boundary';

import { queryClient, trpc } from '@/lib/trpc';

import { css } from './styled-system/css';

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
  const [colorScheme] = createSignal<string>(initializecolorScheme());

  return (
    <Html lang="en" data-color-mode={colorScheme()}>
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
        <trpc.Provider queryClient={queryClient}>
          <SessionProvider>
            <Suspense>
              <ErrorBoundary>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
            </Suspense>
          </SessionProvider>
        </trpc.Provider>
        <Scripts />
      </Body>
    </Html>
  );
}
