import { createSolidAPIHandler } from 'solid-start-trpc';

import { appRouter, createTRPCContext as createContext } from '@pixelstack/api';

const handler = createSolidAPIHandler({
  router: appRouter,
  createContext,
});

export const GET = handler;
export const POST = handler;
