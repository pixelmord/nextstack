import GitHub from '@auth/core/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import type { SolidAuthConfig } from '@auth/solid-start';
import { SolidAuth } from '@auth/solid-start';

import { db, tableCreator } from '@pixelstack/db';

import { serverEnv as env } from './env';

declare module '@auth/core/types' {
  export interface Session {
    user?: DefaultSession['user'];
  }
}
// Update this whenever adding new providers so that the client can
export const providers = ['github'] as const;
export type OAuthProviders = (typeof providers)[number];

export const authOpts: SolidAuthConfig = {
  adapter: DrizzleAdapter(db, tableCreator),
  providers: [
    GitHub({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  debug: false,
};

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { GET, POST } = SolidAuth(authOpts);
