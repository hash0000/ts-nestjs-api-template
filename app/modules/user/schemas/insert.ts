import { z } from 'zod';

export const insertUserSchemaZ = z
  .object({
    user: z.string(),
    age: z.number(),
  })
  .required();

export type InsertUserDtoZ = z.infer<typeof insertUserSchemaZ>;

import { Type, type Static } from '@sinclair/typebox';

export const insertUserSchema = Type.Object({
  email: Type.String(),
  password: Type.String(),
});

export type InsertUserDto = Static<typeof insertUserSchema>;
