import { type StatusCode } from 'hono/utils/http-status';
import { type ErrorResponse } from './schema';

export class ApiError<T extends string, C extends StatusCode = StatusCode> extends Error {
  public statusCode: C;
  public title: T;
  private source?: ErrorResponse['source'];
  private code?: string;

  constructor(title: T, statusCode: C) {
    super();
    this.name = title;
    this.title = title;
    this.statusCode = statusCode;
  }

  public withTitle(title: T): this {
    this.name = title;
    this.title = title;
    return this;
  }

  public withDetail(detail: string): this {
    this.message = detail;
    return this;
  }

  public withStatus(status: C): this {
    this.statusCode = status;
    return this;
  }

  public withCode(code: string): this {
    this.code = code;
    return this;
  }

  public fromError(e: Error): this {
    this.name = e.name;
    this.message = e.message;
    this.stack = e.stack;
    return this;
  }

  public withHeaderSource(header: string): this {
    this.source = { header };
    return this;
  }

  public withPointerSource(pointer: string): this {
    this.source = { pointer };
    return this;
  }

  public withParameterSource(parameter: string): this {
    this.source = { parameter };
    return this;
  }

  public toResponse(): ErrorResponse {
    return {
      code: this.code,
      status: this.statusCode as number,
      title: this.name,
      detail: this.message,
      source: this.source,
    };
  }
}
