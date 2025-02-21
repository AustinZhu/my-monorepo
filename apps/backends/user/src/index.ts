import { OpenAPIHono } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { handleError, handleNotFound } from '@my-project/server/errors';
import { logger } from 'hono/logger';
import { jwt } from '@my-project/server/middlewares';
import { UserService } from './services';
import routes from './routes';

const app = new OpenAPIHono<Environment>()
  .doc31('/doc', {
    openapi: '3.1.0',
    info: {
      version: '1.0.0',
      title: 'My API',
    },
  })
  .get('/ui', swaggerUI({ url: '/doc' }))
  .get('/health', (c) => c.text('OK'))
  .onError(handleError)
  .notFound(handleNotFound);

const api = app.use('/api/*', logger(), jwt(), UserService.middleware()).route('/api/v1', routes);

export default api;

export type AppType = typeof app;
