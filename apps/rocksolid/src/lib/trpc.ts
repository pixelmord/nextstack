import { QueryClient } from '@tanstack/solid-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCSolidStart } from 'solid-trpc';
import superjson from 'superjson';

import type { AppRouter } from '@pixelstack/api';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // replace example.com with your actual production url
  if (process.env.NODE_ENV === 'production') return 'https://example.com';
  return `http://localhost:${process.env.PORT ?? 3005}`;
};

export const trpc = createTRPCSolidStart<AppRouter>({
  config() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
});

export const queryClient = new QueryClient();

export { type RouterInputs, type RouterOutputs } from '@pixelstack/api';
