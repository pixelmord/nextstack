import { Menu } from 'lucide-solid';
import { createSignal, Suspense } from 'solid-js';
import { A, Outlet, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { SupabaseProvider } from 'solid-supabase';

import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase-client';
import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
export function routeData() {
  return createServerData$(async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return null;
    const { data: profile } = await supabase.from('profiles').select('email').eq('id', session.user.id).single();
    if (!profile) return null;
    return profile;
  });
}
export default function App() {
  const profile = useRouteData<typeof routeData>();

  const [maximized, setMaximized] = createSignal(false);
  return (
    <>
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
            <Suspense fallback="Loading...">
              <span>{profile()?.email}</span>
            </Suspense>
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
              flexDirection: 'column',
              _active: {
                width: { base: '16rem', lg: '16rem' },
                display: { base: 'flex' },
              },
            })
          }
        >
          <A href="/app/map">Map</A>
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
            <SupabaseProvider client={supabase}>
              <Outlet />
            </SupabaseProvider>
          </main>
        </div>
      </div>
    </>
  );
}
