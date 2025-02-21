import { type MiddlewareHandler } from 'hono';
import { jwt as honoJwt } from 'hono/jwt';
import { type CookiePrefixOptions } from 'hono/utils/cookie';
import { type SignatureAlgorithm } from 'hono/utils/jwt/jwa';

export const jwt =
  (options?: {
    cookie?:
      | string
      | {
          key: string;
          prefixOptions?: CookiePrefixOptions;
        };
    alg?: SignatureAlgorithm;
  }): MiddlewareHandler<Environment> =>
  async (c, next) => {
    const jwtMiddleware = honoJwt({
      secret: c.env.JWT_SECRET,
      cookie:
        options?.cookie === undefined || typeof options.cookie === 'string'
          ? options?.cookie
          : {
              key: options.cookie.key,
              secret: c.env.JWT_SECRET,
              prefixOptions: options.cookie.prefixOptions,
            },
      alg: options?.alg,
    });
    return jwtMiddleware(c, next);
  };
