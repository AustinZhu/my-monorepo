import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schema',
  dialect: 'postgresql',
  verbose: true,
  strict: true,
  casing: 'snake_case',
  dbCredentials: {
    url: process.env['DATABASE_URL']!,
  },
});
