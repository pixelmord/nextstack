import type { ZodFormattedError } from 'zod';
import { z } from 'zod';
export const serverScheme = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  ENABLE_VC_BUILD: z
    .string()
    .default('1')
    .transform((v) => parseInt(v)),
  DISCORD_ID: z.string(),
  DISCORD_SECRET: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  AUTH_SECRET: z.string(),
  AUTH_TRUST_HOST: z.string().optional(),
  AUTH_URL: z.string().optional(),
});

export const formatErrors = (errors: ZodFormattedError<Map<string, string>, string>) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) return `${name}: ${value._errors.join(', ')}\n`;
    })
    .filter(Boolean);

const env = serverScheme.safeParse(process.env);

if (env.success === false) {
  console.error('❌ Invalid environment variables:\n', ...formatErrors(env.error.format()));
  throw new Error('Invalid environment variables');
}

export const serverEnv = env.data;
