import type { Env } from 'hono/types';
import type { D1Database, KVNamespace, R2Bucket } from '@cloudflare/workers-types';
import type { UserService } from '@/services';

declare global {
  export interface Environment extends Env {
    Bindings: {
      DB: D1Database;
      MY_KV_NAMESPACE: KVNamespace;
      MY_BUCKET: R2Bucket;
      JWT_SECRET: string;
      DATABASE_URL: string;
      ENV: 'development' | 'production' | 'test' | 'staging';
    };
    Variables: {
      service: UserService;
    };
  }
}
