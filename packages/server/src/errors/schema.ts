import { z } from 'zod';

export const errorResponseSchema = z
  .object({
    code: z
      .string()
      .optional()
      .openapi({
        examples: ['0123'],
        description: 'The code of the error',
      }),
    status: z.number().openapi({
      examples: [500, 409, 404, 422],
      description: 'The status code of the error',
    }),
    title: z.string().openapi({
      examples: ['NotFoundError', 'ConflictError', 'InternalServerError', 'UnprocessableEntityError'],
      description: 'The title of the error',
    }),
    detail: z.string().openapi({
      examples: ['The user with the id 1 was not found', 'The user with the email john.doe@example.com already exists'],
      description: 'The detail of the error',
    }),
    source: z
      .object({
        pointer: z.string().optional(),
        parameter: z.string().optional(),
        header: z.string().optional(),
      })
      .optional()
      .openapi({
        examples: [{ pointer: '/data/attributes/name' }, { parameter: 'email' }, { header: 'Authorization' }],
        description: 'The source of the error',
      }),
  })
  .openapi('ErrorResponse');

export type ErrorResponse = z.infer<typeof errorResponseSchema>;
