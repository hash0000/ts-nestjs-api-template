import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { TObject } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

export class TypeBoxValidationPipe implements PipeTransform {
  constructor(private schema: TObject) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      if (Value.Check(this.schema, value) === false) {
        const parsedErrors = [...Value.Errors(this.schema, value)];

        console.log(parsedErrors);
        throw new BadRequestException();
      }

      return value;
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
  }
}
