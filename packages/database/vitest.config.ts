/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'packages/server',
    passWithNoTests: true,
    environment: 'node',
    typecheck: {
      tsconfig: './tsconfig.spec.json',
    },
    coverage: {
      provider: 'istanbul',
    },
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
