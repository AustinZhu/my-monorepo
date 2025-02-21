import { ApiError } from './builder';

export const InternalServerError = new ApiError('InternalServerError', 500).withDetail('Internal Server Error');
export type InternalServerError = typeof InternalServerError;

export const NotFoundError = new ApiError('NotFoundError', 404).withDetail('Not Found');
export type NotFoundError = typeof NotFoundError;

export const BadRequestError = new ApiError('BadRequestError', 400).withDetail('Bad Request');
export type BadRequestError = typeof BadRequestError;

export const ConflictError = new ApiError('ConflictError', 409).withDetail('Conflict');
export type ConflictError = typeof ConflictError;

export const UnprocessableEntityError = new ApiError('UnprocessableEntityError', 422).withDetail(
  'Unprocessable Entity',
);
export type UnprocessableEntityError = typeof UnprocessableEntityError;
