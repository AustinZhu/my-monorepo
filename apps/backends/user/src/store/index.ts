import { NeonDbError } from '@neondatabase/serverless';
import { type NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { Maybe, Result } from 'true-myth';
import { type UserId, users } from '@my-project/database/schema/users';
import { eq } from 'drizzle-orm';
import { type dbSchema, type SelectUser } from './schema';

export class UserStore {
  constructor(private readonly db: NeonHttpDatabase<typeof dbSchema>) {}

  public async getUsers(): Promise<Result<SelectUser[], NeonDbError>> {
    try {
      const results = await this.db.query.users.findMany();
      return Result.ok(results);
    } catch (e: unknown) {
      if (e instanceof NeonDbError) {
        return Result.err(e);
      }
      throw e;
    }
  }

  public async getUserById(id: UserId): Promise<Result<Maybe<SelectUser>, NeonDbError>> {
    try {
      const result = await this.db.query.users.findFirst({ where: eq(users.id, id) });
      return Result.ok(Maybe.of(result));
    } catch (e: unknown) {
      if (e instanceof NeonDbError) {
        return Result.err(e);
      }
      throw e;
    }
  }
}
