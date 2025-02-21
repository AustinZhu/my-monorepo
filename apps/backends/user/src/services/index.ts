import { type MiddlewareHandler } from 'hono';
import { neon } from '@neondatabase/serverless';
import { Result } from 'true-myth';
import { createMiddleware } from 'hono/factory';
import { drizzle } from 'drizzle-orm/neon-http';
import { type UserId } from '@my-project/database/schema/users';
import { NotFoundError } from '@my-project/server/errors';
import { type GetUserResponse, type GetUserParams } from './schema';
import { dbSchema } from '@/store/schema';
import { UserStore } from '@/store';

export class UserService {
  constructor(private readonly userStore: UserStore) {}

  public async getUser(params: GetUserParams): Promise<Result<GetUserResponse, NotFoundError>> {
    const result = await this.userStore.getUserById(params.id as UserId);
    if (result.isErr) {
      throw result.error;
    }
    if (result.value.isNothing) {
      return Result.err(NotFoundError);
    }

    return Result.ok(result.value.value);
  }

  public static middleware(): MiddlewareHandler {
    return createMiddleware<Environment>(async (c, next) => {
      const sql = neon(c.env.DATABASE_URL);
      const db = drizzle(sql, { schema: dbSchema, casing: 'snake_case', logger: c.env.ENV === 'development' });
      const taskStore = new UserStore(db);
      c.set('service', new UserService(taskStore));
      await next();
    });
  }
}
