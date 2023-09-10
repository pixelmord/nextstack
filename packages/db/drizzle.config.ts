import { config } from 'dotenv';
import type { Config } from 'drizzle-kit';

config({
  path: '../../.env',
});

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

export default {
  schema: './schema',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  tablesFilter: ['pixelstack_*'],
} satisfies Config;
