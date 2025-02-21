import { text, timestamp, pgTable, index } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { now, randomId } from '../helpers';

export const userId = z.string().brand('users');
export type UserId = z.infer<typeof userId>;

export const users = pgTable(
  'users',
  {
    id: text().primaryKey().$type<UserId>().$defaultFn(randomId),
    name: text().notNull(),
    email: text().notNull(),
    password: text().notNull(),
    role: text('role').$type<'admin' | 'customer'>().notNull(),
    createdAt: timestamp().notNull().$defaultFn(now),
    updatedAt: timestamp().notNull().$defaultFn(now),
  },
  (t) => [index().on(t.email)],
);
