import { z } from 'zod';

export const serverScheme = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  ENABLE_VC_BUILD: z
    .string()
    .default('1')
    .transform((v) => parseInt(v)),
  DISCORD_ID: z.string(),
  DISCORD_SECRET: z.string(),
  AUTH_SECRET: z.string(),
  AUTH_TRUST_HOST: z.string().optional(),
  AUTH_URL: z.string().optional(),
});

export const clientScheme = z.object({
  MODE: z.enum(['development', 'production', 'test']).default('development'),
  VITE_SUPABASE_URL: z.string(),
  VITE_SUPABASE_ANON_KEY: z.string(),
});
