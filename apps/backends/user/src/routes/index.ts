import { OpenAPIHono } from '@hono/zod-openapi';
import getUser from './get-user';

const routes = new OpenAPIHono<Environment>().route('/user', getUser);

export default routes;
