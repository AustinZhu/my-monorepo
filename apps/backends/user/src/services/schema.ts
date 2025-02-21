import { z } from '@hono/zod-openapi';
import { userId } from '@my-project/database/schema/users';

export const getUserParams = z
  .object({
    id: z.string().openapi({
      param: {
        name: 'id',
        in: 'path',
      },
      example: '1',
    }),
  })
  .openapi('GetUserParams');

export type GetUserParams = z.infer<typeof getUserParams>;

export const getUserResponse = z
  .object({
    id: userId.openapi({
      examples: ['1'],
      description: 'The id of the user',
    }),
    name: z.string().openapi({
      examples: ['John Doe'],
      description: 'The name of the user',
    }),
    email: z.string().openapi({
      examples: ['john.doe@example.com'],
      description: 'The email of the user',
    }),
    password: z.string().openapi({
      examples: ['password'],
      description: 'The password of the user',
    }),
    role: z.string().openapi({
      examples: ['admin'],
      description: 'The role of the user',
    }),
    createdAt: z.date().openapi({
      examples: ['2021-01-01T00:00:00Z'],
      description: 'The date and time the user was created',
    }),
    updatedAt: z.date().openapi({
      examples: ['2021-01-01T00:00:00Z'],
      description: 'The date and time the user was last updated',
    }),
  })
  .openapi('GetUserResponse');

export type GetUserResponse = z.infer<typeof getUserResponse>;
