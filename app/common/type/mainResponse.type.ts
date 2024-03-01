import { HttpStatus } from '@nestjs/common';

type CustomResponseTypeError = Array<{ property?: string; type?: string; message?: string }>;

export type MainResponseType = {
  statusCode: HttpStatus;
  data?: object | object[];
  validationError?: CustomResponseTypeError;
};
