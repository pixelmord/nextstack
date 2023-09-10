import { signIn, signOut } from '@auth/solid-start/client';
import type { ComponentProps } from 'solid-js';

import type { OAuthProviders } from '@pixelstack/auth';

export function SignIn({ provider, ...props }: { provider: OAuthProviders } & ComponentProps<'button'>) {
  return <button {...props} onClick={() => signIn(provider)} />;
}

export function SignOut(props: ComponentProps<'button'>) {
  return <button {...props} onClick={() => signOut()} />;
}
