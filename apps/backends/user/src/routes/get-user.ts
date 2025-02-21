import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import { errorResponseSchema } from '@my-project/server/errors';
import { getUserParams, getUserResponse } from '@/services/schema';

export const route = createRoute({
  method: 'get',
  path: '/{id}',
  request: {
    params: getUserParams,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: getUserResponse,
        },
      },
      description: 'Success',
    },
    404: {
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
      description: 'Not found',
    },
    500: {
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
      description: 'Internal server error',
    },
  },
});

const getUser = new OpenAPIHono<Environment>().openapi(route, async (c) => {
  const param = c.req.valid('param');

  const result = await c.var.service.getUser(param);
  if (result.isErr) {
    return c.json(result.error.toResponse(), result.error.statusCode);
  }

  return c.json(result.value, 200);
});

export default getUser;
