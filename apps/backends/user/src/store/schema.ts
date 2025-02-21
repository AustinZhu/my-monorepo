import { userId, users } from '@my-project/database/schema/users';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import type { z } from 'zod';

export const dbSchema = { users };

// Schema for inserting a user - can be used to validate API requests
export const insertUser = createInsertSchema(users, {
  id: userId,
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertUser = z.infer<typeof insertUser>;

// Schema for selecting a user - can be used to validate API responses
export const selectUser = createSelectSchema(users, {
  id: userId,
});
export type SelectUser = z.infer<typeof selectUser>;
