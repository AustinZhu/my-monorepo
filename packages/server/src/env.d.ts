import type { Env } from 'hono/types';

declare global {
  export interface Environment extends Env {
    Bindings: {
      JWT_SECRET: string;
    };
  }
}
