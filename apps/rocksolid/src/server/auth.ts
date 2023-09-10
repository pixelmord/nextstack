import Discord from '@auth/core/providers/discord';
import type { SolidAuthConfig } from '@solid-mediakit/auth';

import { serverEnv } from '@/env/server';

declare module '@auth/core/types' {
  export interface Session {
    user?: DefaultSession['user'];
  }
}

export const authOptions: SolidAuthConfig = {
  providers: [
    Discord({
      clientId: serverEnv.DISCORD_ID,
      clientSecret: serverEnv.DISCORD_SECRET,
    }),
  ],
  debug: false,
};
